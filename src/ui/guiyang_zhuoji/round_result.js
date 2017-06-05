/**
 * Created by pengchunwu on 2017/2/28.
 */
var RoundResultLayer = cc.Layer.extend({
    ctor : function () {
        this._super();

        this.m_ResultData = null;

        this.loadUI();

        this.m_StartTime = new Date().getTime();

        return true;
    },

    cleanup : function() {
        this._super();
    },

    loadUI : function() {
        var uiNode = ccs.load(res.round_result_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_PlayerNodes = new Array(4);
        this.m_PlayerNodes[0] = rootNode.getChildByName("player01");
        this.m_PlayerNodes[1] = rootNode.getChildByName("player02");
        this.m_PlayerNodes[2] = rootNode.getChildByName("player03");
        this.m_PlayerNodes[3] = rootNode.getChildByName("player04");

        this.m_BtnShowDetail = rootNode.getChildByName("btn_detail");
        this.m_BtnContinue = rootNode.getChildByName("btn_continue");

        this.m_BtnShowDetail.addTouchEventListener(this.onShowDetailClick, this);
        this.m_BtnContinue.addTouchEventListener(this.onContineClick, this);

        return true;
    },

    onShowDetailClick : function (sender, eventType) {
        if (eventType == 2) {
            var uiDetail = new RoundDetailLayer();
            this.addChild(uiDetail, 100);
            uiDetail.setData(this.m_ResultData);
        }
    },

    onContineClick : function (sender, eventType) {
        if (eventType == 2) {
            var cur = new Date().getTime();
            if (cur - this.m_StartTime > 2000) {
                if (this.m_ResultData.DismissRoom == true) {
                    var layer = new GameResultLayer();
                    layer.setData(this.m_ResultData);
                    g_RootLayer.m_CurrentScene.addChild(layer, 100);
                }
                else {
                    g_RootLayer.m_CurrentScene.enterWait();
                }
                this.removeFromParent(true);
            }
        }
    },

    setData : function (resultData) {
        this.m_ResultData = resultData;

        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
            var resultNode = new PlayerRoundResult();
            this.m_PlayerNodes[i].addChild(resultNode);
            var playerData = g_UserManager.getPlayerDataByPosition(i);
            resultNode.setData(playerData, resultData.PlayerData[i], resultData.FanPaiJi);
        }
    }
});