/**
 * Created by pengchunwu on 2017/3/8.
 */
var DismissRoomLayer = cc.Layer.extend({
    ctor : function () {
        this._super();

        this.m_BtnAgree = null;
        this.m_BtnRefuse = null;
        this.m_Players = null;
        this.m_InvokerID = -1;
        this.m_TimeLimit = 20;
        this.m_CountDownEndTime = 0;

        this.loadUI();

        g_NetworkManager.Subscrible(ActionDef.CastQuitVote, this);
        g_NetworkManager.Subscrible(ActionDef.SyncVoteData, this);
        g_NetworkManager.Subscrible(ActionDef.ForceQuitRoom, this);

        g_RootLayer.SubscribleUpdate(this);

        return true;
    },

    cleanup : function()
    {
        this._super();

        g_RootLayer.UnsubscribleUpdate(this);

        g_NetworkManager.Unsubscrible(ActionDef.CastQuitVote, this);
        g_NetworkManager.Unsubscrible(ActionDef.SyncVoteData, this);
        g_NetworkManager.Unsubscrible(ActionDef.ForceQuitRoom, this);
    },


    loadUI : function () {
        var uiNode = ccs.load(res.dismiss_room_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");

        this.m_BtnAgree = rootNode.getChildByName("btn_agree");
        this.m_BtnRefuse = rootNode.getChildByName("btn_refuse");
        this.m_LabelTip = rootNode.getChildByName("label_tips");

        this.m_BtnAgree.addTouchEventListener(this.onAgreeClick, this);
        this.m_LabelAgree = this.m_BtnAgree.getChildByName("name");
        this.m_BtnRefuse.addTouchEventListener(this.onRefuseClick, this);

        this.m_Players = new Array(4);
        for (var i = 0; i < 4; ++i) {
            var key = ("00" + (i + 1));
            key = key.substring(key.length - 2);

            this.m_Players[i]  = {};
            this.m_Players[i].m_RootNode = rootNode.getChildByName("player" + key);
            this.m_Players[i].m_IconPortrait = this.m_Players[i].m_RootNode.getChildByName("icon");
            this.m_Players[i].m_LabelName = this.m_Players[i].m_RootNode.getChildByName("name");
            this.m_Players[i].m_LabelDesc = this.m_Players[i].m_RootNode.getChildByName("desc");
            this.m_Players[i].m_IconResult = this.m_Players[i].m_RootNode.getChildByName("result");

            this.m_Players[i].m_LabelName.setString(g_UserManager.m_PlayerData[i].m_NickName);
            this.m_Players[i].m_LabelDesc.setString("等待选择");
            NetworkManager.LoadURL(this.m_Players[i].m_IconPortrait, g_UserManager.m_PlayerData[i].m_PortraitURL);
            this.m_Players[i].m_IconResult.setVisible(false);
        }

        for (var i = g_UserManager.m_RoomData.maxPlayer; i < 4; ++i) {
            this.m_Players[i].m_RootNode.setVisible(false);
        }

        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);
    },

    onCloseClick : function (sender, eventType) {
        if (eventType == 2) {
            g_RootLayer.UnsubscribleUpdate(this);

            g_NetworkManager.Unsubscrible(ActionDef.CastQuitVote, this);
            g_NetworkManager.Unsubscrible(ActionDef.SyncVoteData, this);
            g_NetworkManager.Unsubscrible(ActionDef.ForceQuitRoom, this);

            this.removeFromParent(true);
        }
    },

    onAgreeClick : function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.CastQuitVote;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.vote = 1;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.CastQuitVote, msg.MSG_ID);

            this.m_BtnAgree.setEnabled(false);
            this.m_BtnRefuse.setEnabled(false);
        }
    },

    onRefuseClick : function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.CastQuitVote;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.vote = 2;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.CastQuitVote, msg.MSG_ID);

            this.m_BtnAgree.setEnabled(false);
            this.m_BtnRefuse.setEnabled(false);

        }
    },

    onLogicUpdate : function () {
        if (this.m_CountDownEndTime != 0)
        {
            var curTime = new Date().getTime();
            if (curTime < this.m_CountDownEndTime) {
                var countDown = (this.m_CountDownEndTime - curTime) / 1000;
                countDown = parseInt(countDown);
                this.m_LabelAgree.setString("同意(" + countDown + ")");
            }
            else {
                this.m_CountDownEndTime = 0;
                this.m_LabelAgree.setString("同意");
                this.m_BtnAgree.setEnabled(false);
            }
        }
    },

    startCount : function () {
        this.m_CountDownEndTime = new Date().getTime() + this.m_TimeLimit * 1000;

        var index = g_UserManager.getPlayerPosition(this.m_InvokerID);
        if (index >= 0) {
            this.m_Players[index].m_LabelDesc.setString("申请解散房间");
            this.m_Players[index].m_IconResult.loadTexture("res/res/common/picture_1.png");
            this.m_Players[index].m_IconResult.setVisible(true);
            if (this.m_InvokerID == g_UserManager.m_UserID) {
                this.m_BtnAgree.setEnabled(false);
                this.m_BtnRefuse.setEnabled(false);
            }

            this.m_LabelTip.setString("超过" + this.m_TimeLimit + "秒未选择，视为默认同意");
        }
    },


    onReceiveMessage : function (action, msgData) {
        switch (action) {
            case ActionDef.ForceQuitRoom:
            {
                this.onCloseClick(null, 2);
            }
                break;

            case ActionDef.CastQuitVote:
            {

            }
                break;

            case ActionDef.SyncVoteData:
            {
                var index = g_UserManager.getPlayerPosition(this.m_InvokerID);
                for (var i = 0; i < msgData.votes.length; i++) {
                    if (i == index) {
                        continue;
                    }
                    else {
                        if (msgData.votes[i] == 0) {
                            this.m_Players[i].m_LabelDesc.setString("等待选择");
                        }
                        else if (msgData.votes[i] == 1) {
                            this.m_Players[i].m_LabelDesc.setString("同意");
                            this.m_Players[i].m_IconResult.loadTexture("res/res/common/picture_1.png");
                            this.m_Players[i].m_IconResult.setVisible(true);
                        }
                        else if (msgData.votes[i] == 2) {
                            this.m_Players[i].m_LabelDesc.setString("拒绝");
                            this.m_Players[i].m_IconResult.loadTexture("res/res/common/picture_2.png");
                            this.m_Players[i].m_IconResult.setVisible(true);
                        }
                    }
                }
            }
                break;

            default:
                break;
        }
    }
});