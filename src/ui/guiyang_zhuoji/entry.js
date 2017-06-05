/**
 * Created by pengchunwu on 2017/2/14.
 */
var EntryLayer;
var Tag = {
    HistoryRecord: 11,
    RoomHistoryRecord: 12,
    DetailRecord: 13,
};
EntryLayer = cc.Layer.extend({

    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.m_IconPortrait = null;
        this.m_IconLogo = null;
        this.m_IconLeftCock = null;
        this.m_IconRightCock = null;
        this.m_LabelPlayerName = null;
        this.m_LabelPlayerMoney = null;
        this.m_BtnBuy = null;
        this.m_BtnShare = null;
        this.m_BtnScore = null;
        this.m_BtnMail = null;
        this.m_BtnManual = null;
        this.m_BtnSetting = null;
        this.m_BtnCreateRoom = null;
        this.m_BtnJoinRoom = null;
        this.m_IconPhoto = null;
        this.m_LabelCrystal = null;

        if (g_NetworkManager.m_ServerType != ServerTypeDef.RoomServer) {
            NetworkManager.ConnectToRoomServer();
        }

        g_NetworkManager.Subscrible(ActionDef.Login, this);
        g_NetworkManager.Subscrible(ActionDef.HistoryRecord, this);
        g_NetworkManager.Subscrible(ActionDef.UpdateTicket, this);
        g_NetworkManager.Subscrible(ActionDef.HeartBeat, this);

        this.loadUI();

        g_RootLayer.SubscribleUpdate(this);

        return true;
    },

    cleanup: function () {
        this._super();
        g_RootLayer.UnsubscribleUpdate(this);
        g_NetworkManager.Unsubscrible(ActionDef.Login, this);
        g_NetworkManager.Unsubscrible(ActionDef.HistoryRecord, this);
        g_NetworkManager.Unsubscrible(ActionDef.UpdateTicket, this);
        if (g_UserManager.m_GameServerConnectedCallback == this) {
            g_UserManager.m_GameServerConnectedCallback = null;
        }
        g_NetworkManager.Unsubscrible(ActionDef.HeartBeat, this);
    },

    loadUI: function () {
        var size = cc.winSize;
        var height = cc.director.getVisibleSize().height;
        var width = cc.director.getVisibleSize().width;
        var uiNode = ccs.load(res.entry_animation_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        var upNode = uiNode.node.getChildByName("up_bar");
        var bottomNode = uiNode.node.getChildByName("down_bar");
        upNode.setPositionY(height / 2 + DESIGN_HEIGHT / 2);
        bottomNode.setPositionY(DESIGN_HEIGHT / 2 - height / 2);

        var scaleWidth = parseFloat(width) / DESIGN_WIDTH;
        var scaleHeigth = parseFloat(height) / DESIGN_HEIGHT;
        var m_bg_animation = rootNode.getChildByName("bg_animation");
        var background = m_bg_animation.getChildByName("background");
        var scale = parseFloat(DESIGN_WIDTH) / background.width;
        m_bg_animation.setScale(scaleWidth * scale, scaleHeigth * scale);

        this.m_IconPortrait = upNode.getChildByName("icon_portrait");
        this.m_IconLogo = upNode.getChildByName("icon_logo");
        this.m_IconLeftCock = rootNode.getChildByName("icon_left_cock");
        this.m_IconRightCock = rootNode.getChildByName("icon_right_cock");
        this.m_LabelPlayerName = upNode.getChildByName("label_name");
        this.m_LabelPlayerMoney = upNode.getChildByName("label_money");
        this.m_BtnBuy = upNode.getChildByName("btn_buy");
        this.m_BtnShare = upNode.getChildByName("btn_share");
        this.m_BtnScore = upNode.getChildByName("btn_score");
        this.m_BtnMail = upNode.getChildByName("btn_mail");
        this.m_BtnManual = upNode.getChildByName("btn_manual");
        this.m_BtnSetting = upNode.getChildByName("btn_setting");
        this.m_BtnCreateRoom = rootNode.getChildByName("btn_create_room");
        this.m_BtnJoinRoom = rootNode.getChildByName("btn_join_room");
        this.m_IconPhoto = this.m_IconPortrait.getChildByName("photo");
        this.m_LabelCrystal = upNode.getChildByName("label_crystal");
        if(cc.sys.os == cc.sys.OS_IOS)
        {
            cc.log("IosRegister.GetWeChatTag() "  + IosRegister.GetWeChatTag() );
            if(IosRegister.GetWeChatTag() != 1)
            {
                this.m_BtnShare.setVisible(false);
            }
        }
        this.m_BtnCreateRoom.addTouchEventListener(this.onCreateRoom, this);
        this.m_BtnJoinRoom.addTouchEventListener(this.onJoinRoom, this);
        this.m_BtnShare.addTouchEventListener(this.onShareBtnClick, this);
        this.m_BtnMail.addTouchEventListener(this.onMailBtnClick, this);
        this.m_BtnManual.addTouchEventListener(this.onManualBtnClick, this);
        this.m_BtnSetting.addTouchEventListener(this.onSettingBtnClick, this);
        this.m_BtnScore.addTouchEventListener(this.onScoreBtnClick, this);
        this.m_BtnBuy.addTouchEventListener(this.onBuyBtnClick, this);

        var main_fangka_bg = upNode.getChildByName("main_fangka_bg_3");
        main_fangka_bg.addTouchEventListener(this.onBuyBtnClick, this);

        this.m_LabelCrystal.setString(g_UserManager.m_Money);
        this.m_IconPortrait.addTouchEventListener(this.onIconProtraitClick, this);

        uiNode.action.gotoFrameAndPlay(0, true);
        uiNode.node.runAction(uiNode.action);


        this.m_LabelPlayerName.setString(g_UserManager.m_NickName);
        this.runAction(
            cc.Sequence.create(
                cc.DelayTime.create(1),
                cc.CallFunc.create(
                    function () {
                        cc.textureCache.removeUnusedTextures();
                    }
                ))
        );

        NetworkManager.LoadURL(this.m_IconPhoto, g_UserManager.m_PortraitURL);

        if(cc.sys.os != cc.sys.OS_IOS)
        {
            this.onGetRoomNumber();
        }

        g_RootLayer.closeMasks();
    },

    onLogicUpdate : function () {
        if(cc.sys.os == cc.sys.OS_IOS)
        {

            if(IosRegister.GetStartRoomID() != 0)
            {
                cc.log("IosRegister.GetStartRoomID "  + IosRegister.GetStartRoomID() );
                RoomNumberFromURL =IosRegister.GetStartRoomID();
                IosRegister.ClearStartRoomID();
                this.onGetRoomNumber();

            }

        }

    },

    onIconProtraitClick: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new PlayerInfoDialogLayer();
            this.addChild(layer, 1);
            layer.setData(g_UserManager);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onCreateRoom: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new CreateRoomLayer();
            this.addChild(layer, 1);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onJoinRoom: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new JoinRoomLayer();
            this.addChild(layer, 1);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onShareBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new ShareDialogLayer();
            this.addChild(layer, 1);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onMailBtnClick: function (sender, eventType) {
        if (eventType == 2) {
             var layer = new MessageDialogLayer();
             this.addChild(layer, 1);
             g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onManualBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new ManualDialogLayer();
            this.addChild(layer, 1);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onSettingBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new SettingDialogLayer();
            this.addChild(layer, 1);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onScoreBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.HistoryRecord;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.HistoryRecord, msg.MSG_ID);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onBuyBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new ShoppingDialogLayer();
            this.addChild(layer, 1);
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onReceiveMessage: function (action, msgData) {
        switch (action) {
            case ActionDef.HistoryRecord:
                if (this.getChildByTag(Tag.HistoryRecord) === null) {
                    var layer = new HistoryRecordDialogLayer(msgData);
                    this.addChild(layer, 1, Tag.HistoryRecord);
                }
                break;
            case ActionDef.UpdateTicket:
            case ActionDef.Login:
            {
                this.m_LabelCrystal.setString(g_UserManager.m_Money);
                break;
            }

            case ActionDef.HeartBeat:
            {
                this.m_LabelCrystal.setString(g_UserManager.m_Money);
            }
            break;

        }
    },

    onGameServerConnected : function () {
        console.log("Entry->onGameServerConnected")
        var msg = {};
        msg.ACTION = ActionDef.JoinRoom;
        msg.MSG_ID = g_NetworkManager.NextMessageID();
        msg.UID = g_UserManager.m_UserID;
        msg.roomid = g_UserManager.m_RoomData.roomId;

        var json = JSON.stringify(msg);
        g_NetworkManager.sendMessage(json, ActionDef.JoinRoom, msg.MSG_ID);
    },

    onGetRoomNumber: function () {
        if (RoomNumberFromURL == "")
            return;
        var self = this;
        var callback = {
            commonDialogCallback: function (buttonType, tag) {
                if (buttonType == CommonButtonTypeDef.OK) {
                    var roomid = parseInt(RoomNumberFromURL);
                    var msg = {};

                    if (isNaN(roomid) == false && roomid > 0) {
                        msg.ACTION = ActionDef.GetRoomInfo;
                        msg.MSG_ID = g_NetworkManager.NextMessageID();
                        msg.UID = g_UserManager.m_UserID;
                        msg.roomid = parseInt(RoomNumberFromURL);

                        var json = JSON.stringify(msg);
                        g_NetworkManager.sendMessage(json, ActionDef.GetRoomInfo, msg.MSG_ID);

                        g_UserManager.m_GameServerConnectedCallback = self;
                    }
                }
                RoomNumberFromURL = "";
            }
        };
        g_RootLayer.showMessageBox("是否要进入房间(" + RoomNumberFromURL + ")", "提示", (CommonButtonTypeDef.OK | CommonButtonTypeDef.Cancel), null, null, callback, "enter_room")

    },
});

