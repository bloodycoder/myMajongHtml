/**
 * Created by pengchunwu on 2017/3/14.
 */
var GameResultLayer = cc.Layer.extend({
    ctor : function () {
        this._super();

        this.m_BtnShare = null;
        this.m_BtnBack = null;
        this.m_Players = null;

        this.m_StartTime = new Date().getTime();

        this.loadUI();
    },

    loadUI : function () {
        var uiNode = ccs.load(res.game_result_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_BtnShare = rootNode.getChildByName("btn_share");
        this.m_BtnBack = rootNode.getChildByName("btn_back");
        this.m_LabelInfo = rootNode.getChildByName("info");
        if(cc.sys.os == cc.sys.OS_IOS)
        {
            cc.log("IosRegister.GetWeChatTag() "  + IosRegister.GetWeChatTag() );
            if(IosRegister.GetWeChatTag() != 1)
            {
                this.m_BtnShare.setVisible(false);
            }
        }
        this.m_BtnShare.addTouchEventListener(this.onShareClick, this);
        this.m_BtnBack.addTouchEventListener(this.onBackClick, this);

        this.m_Players = new Array();
        for (var i = 0; i < 4; ++i) {
            var key = "00" + (i + 1);
            key = key.substring(key.length - 2);

            var playerNode = rootNode.getChildByName("player" +  key);
            var player = {};
            player.m_RootNode = playerNode;
            player.m_uiIconPortriait = playerNode.getChildByName("portrait").getChildByName("icon");
            player.m_uiLabelName = playerNode.getChildByName("portrait").getChildByName("name");
            player.m_uiWinner = playerNode.getChildByName("winner");
            player.m_uiResults = new Array(5);
            for (var m = 0; m < 5; m++) {
                key = "00" + (m + 1);
                key = key.substring(key.length - 2);

                player.m_uiResults[m] = {};
                player.m_uiResults[m].m_uiTitle = playerNode.getChildByName("summary" + key).getChildByName("name");
                player.m_uiResults[m].m_uiValue = playerNode.getChildByName("summary" + key).getChildByName("value");
            }

            player.m_uiScoreNode = playerNode.getChildByName("score").getChildByName("value");
            this.m_Players.push(player);
        }

        var cur = new Date();
        this.m_LabelInfo.setString(cur.toLocaleString() + "    房间号：" + g_UserManager.m_RoomData.roomid);

    },

    onShareClick : function (sender, eventType) {
        if (eventType == 2) {
            GameManager.WeChatShareScreen(false, "来一圈贵阳捉鸡麻将", "game_result.png");
        }
    },

    onBackClick : function (sender, eventType) {
        if (eventType == 2) {
            var cur = new Date().getTime();
            if (cur - this.m_StartTime > 2000) {
                this.removeFromParent(true);
                g_RootLayer.m_CurrentScene.enterWait();
            }
        }
    },

    createNumber : function (value) {
        var layer = new cc.Layer();
        var valueString = value + "";
        var numbers = new Array();
        if (value >= 0)
        {
            if (value > 0) {
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

    setData : function (resultData) {
        this.m_ResultData = resultData;

        for (var i = 0; i < 4; ++i) {
            this.m_Players[i].m_RootNode.setVisible(false);
        }

        var maxScore = 0;
        for (var i = 0; i < resultData.PlayerData.length; ++i) {
            if (resultData.PlayerData[i].GameScore > maxScore)
                maxScore = resultData.PlayerData[i].GameScore;
        }
        for (var i = 0; i < resultData.PlayerData.length; ++i) {
            this.m_Players[i].m_RootNode.setVisible(true);
            var playerData = resultData.PlayerData[i];

            var numberLayer = this.createNumber(playerData.TotalScore);
            this.m_Players[i].m_uiWinner.setVisible(false);
            if (maxScore == resultData.PlayerData[i].GameScore) {
                this.m_Players[i].m_uiWinner.setVisible(true);
            }

            this.m_Players[i].m_uiLabelName.setString(playerData.UserName);
            this.m_Players[i].m_uiScoreNode.addChild(numberLayer);
            NetworkManager.LoadURL(this.m_Players[i].m_uiIconPortriait, playerData.IconURL);

            for (var m = 0; m < playerData.Summary.length; ++m) {
                this.m_Players[i].m_uiResults[m].m_uiValue.setString(playerData.Summary[m]);
            }
        }

    }

});
