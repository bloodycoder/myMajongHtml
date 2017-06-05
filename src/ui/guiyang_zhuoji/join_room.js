/**
 * Created by pengchunwu on 2017/2/17.
 */
var JoinRoomLayer;
JoinRoomLayer = cc.Layer.extend({

    ctor : function () {
        this._super();

        this.m_LabelRoomNumber = null;
        this.m_BtnKey1 = null;
        this.m_BtnKey2 = null;
        this.m_BtnKey3 = null;
        this.m_BtnKey4 = null;
        this.m_BtnKey5 = null;
        this.m_BtnKey6 = null;
        this.m_BtnKey7 = null;
        this.m_BtnKey8 = null;
        this.m_BtnKey9 = null;
        this.m_BtnKey0 = null;
        this.m_BtnKeyReset = null;
        this.m_BtnKeyBack = null;
        this.m_BtnClose = null;
        this.m_Numbers = null;
        this.m_CurPos = 0;
        this.waitResponse = false;

        this.loadUI();

        g_NetworkManager.Subscrible(ActionDef.GetRoomInfo, this);
        g_NetworkManager.Subscrible(ActionDef.JoinRoom, this);

        g_UserManager.m_GameServerConnectedCallback = this;
    },

    loadUI : function () {
        var uiNode = ccs.load(res.join_room_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        var background1 = rootNode.getChildByName("background_1");
        var background2 = rootNode.getChildByName("background_2");
        this.m_BtnKey1 = background2.getChildByName("btn_1");
        this.m_BtnKey2 = background2.getChildByName("btn_2");
        this.m_BtnKey3 = background2.getChildByName("btn_3");
        this.m_BtnKey4 = background2.getChildByName("btn_4");
        this.m_BtnKey5 = background2.getChildByName("btn_5");
        this.m_BtnKey6 = background2.getChildByName("btn_6");
        this.m_BtnKey7 = background2.getChildByName("btn_7");
        this.m_BtnKey8 = background2.getChildByName("btn_8");
        this.m_BtnKey9 = background2.getChildByName("btn_9");
        this.m_BtnKey0 = background2.getChildByName("btn_0");
        this.m_BtnKeyReset = background2.getChildByName("btn_reset");
        this.m_BtnKeyBack = background2.getChildByName("btn_back");
        this.m_BtnClose = rootNode.getChildByName("btn_close");
        this.m_Numbers = new Array();
        var numRootNode = rootNode.getChildByName("number_bg");
        for (var i = 0; i < 6; ++i) {
            var node = numRootNode.getChildByName("number" + (i + 1));
            this.m_Numbers.push(node);
            this.m_Numbers[i].setString("");
        }

        this.m_BtnKey1.addTouchEventListener(this.onKey1Click, this);
        this.m_BtnKey2.addTouchEventListener(this.onKey2Click, this);
        this.m_BtnKey3.addTouchEventListener(this.onKey3Click, this);
        this.m_BtnKey4.addTouchEventListener(this.onKey4Click, this);
        this.m_BtnKey5.addTouchEventListener(this.onKey5Click, this);
        this.m_BtnKey6.addTouchEventListener(this.onKey6Click, this);
        this.m_BtnKey7.addTouchEventListener(this.onKey7Click, this);
        this.m_BtnKey8.addTouchEventListener(this.onKey8Click, this);
        this.m_BtnKey9.addTouchEventListener(this.onKey9Click, this);
        this.m_BtnKey0.addTouchEventListener(this.onKey0Click, this);
        this.m_BtnKeyReset.addTouchEventListener(this.onKeyResetClick, this);
        this.m_BtnKeyBack.addTouchEventListener(this.onKeyBackClick, this);
        this.m_BtnClose.addTouchEventListener(this.onCloseClick, this);

        uiNode.action.gotoFrameAndPlay(0, 50, false);
        uiNode.node.runAction(uiNode.action);

    },

    onGameServerConnected : function () {
        console.log("JoinRoomLayer->onGameServerConnected")
        var msg = {};
        msg.ACTION = ActionDef.JoinRoom;
        msg.MSG_ID = g_NetworkManager.NextMessageID();
        msg.UID = g_UserManager.m_UserID;
        msg.roomid = g_UserManager.m_RoomData.roomId;

        g_RootLayer.setGpsMsg(msg)
        

        var json = JSON.stringify(msg);
        g_NetworkManager.sendMessage(json, ActionDef.JoinRoom, msg.MSG_ID);
        this.waitResponse = true;
    },



    onReceiveMessage: function (action, msgData) {
        switch (action) {
            case ActionDef.GetRoomInfo:
            {
                if (msgData.MSG_RET != 0) {
                    this.waitResponse = false;
                }
            }
                break;

            case ActionDef.JoinRoom:
            {
                if (msgData.MSG_RET != 0) {
                    this.waitResponse = false;
                }
            }
                break;
        }
    },

    cleanup : function()
    {
        this._super();

        g_NetworkManager.Unsubscrible(ActionDef.GetRoomInfo, this);
        g_NetworkManager.Unsubscrible(ActionDef.JoinRoom, this);

        if (g_UserManager.m_GameServerConnectedCallback == this) {
            g_UserManager.m_GameServerConnectedCallback = null;
        }
    },

    onCloseClick : function(sender, eventType) {
        if (eventType == 2) {
            g_NetworkManager.Unsubscrible(ActionDef.GetRoomInfo, this);
            g_NetworkManager.Unsubscrible(ActionDef.JoinRoom, this);

            if (g_UserManager.m_GameServerConnectedCallback == this) {
                g_UserManager.m_GameServerConnectedCallback = null;
            }

            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.removeFromParent(true);
        }
    },

    AutoJoin : function () {

        if (this.m_CurPos > 5 && this.waitResponse == false)
        {
            var roomNumber = 0;
            for (var i = 0; i < 6; ++i) {
                roomNumber += parseInt(this.m_Numbers[i].getString()) * Math.pow(10, 6 - i - 1);
            }

            if (roomNumber > 0) {
                var msg = {};
                msg.ACTION = ActionDef.GetRoomInfo;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;
                msg.roomid = roomNumber;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.GetRoomInfo, msg.MSG_ID);
                this.waitResponse = true;

                g_RootLayer.showJoinRoomMask();
            }
        }
    },

    onKey1Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("1");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey2Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("2");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey3Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("3");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey4Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("4");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey5Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("5");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey6Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("6");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey7Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("7");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey8Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("8");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey9Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("9");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKey0Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.m_CurPos < 6) {
                this.m_Numbers[this.m_CurPos].setString("0");
                this.m_CurPos++;
                if (this.m_CurPos > 5) {
                    this.AutoJoin();
                }
            }
        }
    },

    onKeyResetClick : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_CurPos = 0;
            for (var i = 0; i < 6; ++i) {
                this.m_Numbers[i].setString("");
            }
        }
    },

    onKeyBackClick : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            console.log("this.m_CurPos = " + this.m_CurPos);
            if (this.m_CurPos <= 0) {
                return;
            }
            else {
                this.m_CurPos--;
                this.m_Numbers[this.m_CurPos].setString("");
            }
        }
    },
});