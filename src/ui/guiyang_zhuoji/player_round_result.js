/**
 * Created by pengchunwu on 2017/2/28.
 */
var PlayerRoundResult;
PlayerRoundResult = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.m_BackgroundNode = null;
        this.m_PortraitIconNode = null;
        this.m_ZhuangTagNode = null;
        this.m_PlayerNameNode = null;
        this.m_CurrentVauleNode = null;
        this.m_WinTypeNode = null;
        this.m_ScorePointsNode = null;

        this.loadUI();

        return true;
    },

    cleanup : function()
    {
        this._super();
    },

    loadUI : function()
    {
        var uiNode = ccs.load(res.player_round_result_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_BackgroundNode = rootNode.getChildByName("background");
        this.m_AnimNode = rootNode.getChildByName("anim");
        this.m_PortraitIconNode = rootNode.getChildByName("portrait").getChildByName("icon");
        this.m_ZhuangTagNode = rootNode.getChildByName("portrait").getChildByName("icon_zhuang");
        this.m_IconResult = rootNode.getChildByName("portrait").getChildByName("icon_result");
        this.m_PlayerNameNode = rootNode.getChildByName("name");
        this.m_CurrentVauleNode = rootNode.getChildByName("current_value");
        this.m_TotalVaule = rootNode.getChildByName("total_value");
        this.m_WinTypeNode = rootNode.getChildByName("win_type");
        this.m_ScorePointsNode = rootNode.getChildByName("score_points");


    },

    createNumber : function (value, withSign) {
        var layer = new cc.Layer();
        var valueString = value + "";
        var numbers = new Array();
        if (value >= 0)
        {
            if (value > 0 && withSign == true) {
                numbers.push(new cc.Sprite("res/res/end/number_1_plus.png"));
            }
            for (var i = 0; i < valueString.length; ++i)
            {
                var index = valueString.substring(i, i + 1);
                console.log("index = " + index);
                var image = new cc.Sprite("res/res/end/number_1_" + index + ".png");
                numbers.push(image);
            }
        }
        else
        {
            console.log("value = " + valueString);
            numbers.push(new cc.Sprite("res/res/end/number_2_minu.png"));
            for (var i = 1; i < valueString.length; ++i)
            {
                var index = valueString.substring(i, i + 1);
                console.log("index = " + index);
                var image = new cc.Sprite("res/res/end/number_2_" + index + ".png");
                numbers.push(image);
            }
        }

        var width = 0;
        var height = 0;
        for (var i = 0; i < numbers.length; ++i)
        {
            layer.addChild(numbers[i]);
            numbers[i].x = width + numbers[i].width / 2;
            numbers[i].y = numbers[i].height / 2;
            width += numbers[i].width;
            if (numbers[i].height > height)
                height = numbers[i].height;
        }

        layer.x = -width / 2;
        layer.y = -height / 2;

        return layer;
    },

    sortScorePoints : function (scores) {
        for (var i = 0; i < scores.length; ++i) {
            for (var j = i + 1; j < scores.length; ++j) {
                var data1 = scores[i];
                var data2 = scores[j];
                if (data1.ScorePointType > data2.ScorePointType) {
                    scores[j] = data1;
                    scores[i] = data2;
                }
            }
        }
    },

    createScorePoints : function (resultData, fanpaiji, listview) {
        var scores = new Array();
        for (var i = 0; i < resultData.ScorePoints.length; ++i) {
            if (resultData.ScorePoints[i].ScorePointType == g_ScorePointTypeDef.None ||
                resultData.ScorePoints[i].ScorePointType == g_ScorePointTypeDef.DianPao ||                      // 点炮
                resultData.ScorePoints[i].ScorePointType == g_ScorePointTypeDef.NoLianZhuang)                     // 牌型
            {
                continue;
            }

            scores.push(resultData.ScorePoints[i]);
        }

        this.sortScorePoints(scores);
        for (var i = 0; i < scores.length; ++i) {
            var score = new ScorePointLayer();
            score.setData(scores[i].ScorePointType, scores[i].ScorePointCardID, scores[i].ScorePoint, fanpaiji, resultData.WinType);
            listview.pushBackCustomItem(score);
        }
    },

    setData : function (playerData, resultData, fanpaiji) {
        this.m_ZhuangTagNode.setVisible(playerData.m_GameStatus.isZhuang);
        var winType = resultData.WinType.toString();
        if (resultData.isHu == true) {
            this.m_BackgroundNode.loadTexture("res/res/end/end_1.png");
            if (typeof g_ResWinType[winType] != "undefined" && g_ResWinType[winType] != null) {
                this.m_WinTypeNode.loadTexture(g_ResWinType[winType]);
            }

            var effect = ccs.load(res.game_result_texiao_csd);
            this.m_AnimNode.addChild(effect.node, 1);
            effect.action.gotoFrameAndPlay(0, true);
            effect.node.runAction(effect.action);

        }
        else {
            this.m_BackgroundNode.loadTexture("res/res/end/end_2.png");
            if (resultData.isTing == true)
                this.m_WinTypeNode.loadTexture("res/res/end/end_5.png");
            else
                this.m_WinTypeNode.loadTexture("res/res/end/end_6.png");
        }
        var currentScoreLayer = this.createNumber(resultData.RoundScore, true);
        this.m_PlayerNameNode.setString(resultData.UserName);
        this.m_CurrentVauleNode.addChild(currentScoreLayer);

        this.m_TotalVaule.setString(resultData.GameScore);

        this.m_IconResult.setVisible(false);
        if (resultData.isHu) {
            if (resultData.DianUser == "undefined" || resultData.DianUser == null || resultData.DianUser <= 0)
            {
                this.m_IconResult.setVisible(true);
                this.m_IconResult.loadTexture("res/res/room/mahjong_zimo.png");
            }
            else
            {
                this.m_IconResult.setVisible(true);
                this.m_IconResult.loadTexture("res/res/room/mahjong_hupai.png");
            }
        }
        else if (resultData.DianUser ==  resultData.UserID)
        {
            this.m_IconResult.setVisible(true);
            this.m_IconResult.loadTexture("res/res/room/mahjong_dianpao.png");
        }

        NetworkManager.LoadURL(this.m_PortraitIconNode, resultData.IconURL);

        this.createScorePoints(resultData, fanpaiji, this.m_ScorePointsNode);

    }

});