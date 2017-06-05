if (typeof ScenePredefineName == "undefined") {
    ScenePredefineName = {};
    ScenePredefineName.Entry = "Entry";
    ScenePredefineName.GameRoom = "GameRoom";
    ScenePredefineName.Login = "Login";
}

var VoiceDelegate = {};

var g_NetworkManager = null;
var g_UserManager = null;
var g_ConfigManager = null;
var g_AudioManager = null;

var g_RootLayer = null;
var g_LoginScene = null;
var RootLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        g_RootLayer = this;

        this.m_CurrentScene = null;
        this.m_CurrentSceneName = "";
        this.m_Logger = null;
        this.m_WriteLogger = false;
        this.m_MaskNode = null;
        this.m_MaskAnimationNode = null;
        this.m_JoinRoomAnimInstance = null;
        this.m_LoginAnimInstance = null;
        this.containerMessageNode = null;
        this.containerMessageNode = null;

        g_ConfigManager = jsConfigManager.createNew();
        g_ConfigManager.LoadConfig();

        g_NetworkManager = jsNetworkManager.createNew();
        g_NetworkManager.SelectRoomServer();

        g_UserManager = jsUserManager.createNew();

        g_AudioManager = jsAudioManager.createNew();

        if (cc.game.config.showFPS == true) {
            this.m_Logger = new LoggerDialogLayer();
            this.addChild(this.m_Logger, 20000);
            this.m_Logger.setVisible(false);
            this.m_WriteLogger = true;
        }

        this.m_UpdateCallbacks = new Array();

        VoiceDelegate.onVoiceUploaded = function (fileid) {
            var msg = {};
            msg.ACTION = ActionDef.PlayVoice;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.fileid = fileid;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.PlayVoice, msg.MSG_ID);

        }

        cc.Director.getInstance().getScheduler().scheduleCallbackForTarget(this, this.onLogicUpdate, 1 / 30.0, cc.REPEAT_FOREVER, 0, false);

        g_AudioManager.playerMusic();

        this.m_MaskNode = ccs.load(res.common_mask_csd).node;
        this.addChild(this.m_MaskNode, 50000);
        this.m_MaskNode.retain();
        this.m_MaskNode.setVisible(false);

        var rootNode = this.m_MaskNode.getChildByName("root");
        this.m_MaskAnimationNode = rootNode.getChildByName("animation");

        //this.jsUserManager.PassportLogined();
        this.switchScene(ScenePredefineName.Login);

        return true;
    },

    writeLog : function (msg) {
        if (this.m_Logger != null && this.m_WriteLogger == true) {
            this.m_Logger.writeLog(msg);
        }
    },

    showLogger : function () {
        if (this.m_Logger != null) {
            this.m_Logger.setVisible(true);
            this.m_Logger.refresh();
        }
    },

    toggleLogger : function () {
        this.m_WriteLogger = !this.m_WriteLogger;
    },

    onLogicUpdate: function (deltaTime) {
        g_UserManager.onLogicUpdate(deltaTime);
        g_NetworkManager.onLogicUpdate(deltaTime);
        for (i = 0; i < this.m_UpdateCallbacks.length; ++i) {
            this.m_UpdateCallbacks[i].onLogicUpdate(deltaTime);
        }
    },

    switchScene: function (scene_name) {
        if (scene_name == null || scene_name == "undefined")
            return;

        if (this.m_CurrentSceneName == scene_name)
            return;

        if (this.m_CurrentScene != null) {
            this.m_CurrentScene.removeFromParent(true);
            this.m_CurrentScene = null;
            this.m_CurrentSceneName = null;
        }

        var newScene = null;
        switch (scene_name) {
            case ScenePredefineName.Entry:
            {
                newScene = new EntryLayer();
                this.m_CurrentSceneName = scene_name;
            }
                break;

            case ScenePredefineName.GameRoom:
            {
                newScene = new GameRoomLayer();
                this.m_CurrentSceneName = scene_name;
            }
            break;

            case ScenePredefineName.Login:
            {
                newScene = new LoginScene();
                g_LoginScene = newScene;
                this.m_CurrentSceneName = scene_name;
            }
            break;

            default:
                break;
        }

        if (newScene != null) {
            this.addChild(newScene, 1);
            this.m_CurrentScene = newScene;
        }
    },

    showMessageBox: function (msg, title, buttonType, okTitle, cancelTitle, callback, tag, param) {
        var layer = new CommonDialogLayer();
        layer.m_LabelTitle.setString(title);
        layer.m_LabelMessage.setString(msg);
        if (buttonType != "undefined" && buttonType != null)
            layer.setButtonType(buttonType);
        if (okTitle != "undefined" && okTitle != null)
            layer.setOkTitle(okTitle);
        if (cancelTitle != "undefined" && cancelTitle != null)
            layer.setCancelTitle(cancelTitle);
        if (callback != "undefined" && callback != null)
            layer.setCallback(callback, tag, param);

        this.addChild(layer, 10000);
    },

    hideMask : function ()
    {
        if (this.m_CurrentScene.hideMask)
            this.m_CurrentScene.hideMask()
    },

    logout: function () {
        sys.localStorage.removeItem("wechat_account")
        GameManager.WeChatLogout();
        g_NetworkManager.closeSocket();
        this.switchScene(ScenePredefineName.Login);
        this.closeMasks();
    },

    SubscribleUpdate: function (callback) {
        for (var i = 0; i < this.m_UpdateCallbacks.length; ++i) {
            if (callback == this.m_UpdateCallbacks[i])
                return;
        }

        this.m_UpdateCallbacks.push(callback);
    },

    UnsubscribleUpdate: function (callback) {
        for (i = 0; i < this.m_UpdateCallbacks.length; ++i) {
            if (this.m_UpdateCallbacks[i] == callback) {
                this.m_UpdateCallbacks.splice(i, 1);
                return;
            }
        }
    },

    closeMasks : function () {
        if (this.m_MaskNode != null) {
            this.m_MaskNode.setVisible(false);
            if (this.m_JoinRoomAnimInstance != null)
            {
                this.m_JoinRoomAnimInstance.node.setVisible(false);
            }
            if (this.m_LoginAnimInstance != null)
            {
                this.m_LoginAnimInstance.node.setVisible(false);
            }
        }
    },

    showJoinRoomMask : function () {
        this.closeMasks();
        this.m_MaskNode.setVisible(true);
        if (this.m_JoinRoomAnimInstance == null)
        {
            this.m_JoinRoomAnimInstance = ccs.load(res.join_room_anim_csd);
            this.m_JoinRoomAnimInstance.node.retain();
            this.m_JoinRoomAnimInstance.action.retain();

            this.m_MaskAnimationNode.addChild(this.m_JoinRoomAnimInstance.node, 1);
            this.m_JoinRoomAnimInstance.action.gotoFrameAndPlay(0, true);
            this.m_JoinRoomAnimInstance.node.runAction(this.m_JoinRoomAnimInstance.action);
        }

        this.m_JoinRoomAnimInstance.node.setVisible(true);
    },

    showLoginMask : function () {
        this.closeMasks();
        this.m_MaskNode.setVisible(true);
        if (this.m_LoginAnimInstance == null)
        {
            this.m_LoginAnimInstance = ccs.load(res.login_anim_csd);
            this.m_LoginAnimInstance.node.retain();
            this.m_LoginAnimInstance.action.retain();

            this.m_MaskAnimationNode.addChild(this.m_LoginAnimInstance.node, 1);
            this.m_LoginAnimInstance.action.gotoFrameAndPlay(0, true);
            this.m_LoginAnimInstance.node.runAction(this.m_LoginAnimInstance.action);
        }

        this.m_LoginAnimInstance.node.setVisible(true);
    },
    
    showTopMessageBox: function (msg) {
        if (msg == "") return;
        var height = cc.director.getWinSize().height;
        var remainTime = 2;
        this.containerMessage = null;
        if (this.containerMessageNode != null) {
            cc.director.getActionManager().removeAction(this.containerMessageNode);
            this.containerMessageNode.removeAllChildren();
            this.containerMessageNode.removeFromParent(true);
            this.containerMessageNode = null;
        }
        this.containerMessage = ccs.load(res.top_message_csd);
        this.containerMessageNode = this.containerMessage.node;
        this.addChild(this.containerMessageNode, 10000);
        var image_1 = this.containerMessageNode.getChildByName("Image_1");
        var text_21 = image_1.getChildByName("Text_21");
        var msgHight = text_21.getContentSize().height;
        var msgLines = this.getStrCountInString("\n", msg);
        var msgHights = msgHight * msgLines;
        image_1.setContentSize(cc.size(text_21.width, msgHights + msgHight + msgHight/2));
        text_21.setTextAreaSize(cc.size(text_21.width, msgHights + msgHight));
        text_21.setString(msg);
        text_21.setPosition(text_21.x, text_21.y + msgHights / 2 - msgHight/2)
        image_1.setPosition(image_1.x, image_1.y)
        this.containerMessageNode.setPosition(cc.p(0, height + msgHights/2));
        var actionTo1 = cc.moveTo(1, cc.p(this.containerMessageNode.x, this.containerMessageNode.y - this.containerMessageNode.getContentSize().height - msgHights / 2));
        var actionTo2 = cc.moveTo(1, cc.p(this.containerMessageNode.x, this.containerMessageNode.y + this.containerMessageNode.getContentSize().height + msgHights / 2));
        var onCallback = cc.callFunc(this.onCallback, this);
        this.containerMessageNode.runAction(cc.sequence(actionTo1, cc.delayTime(remainTime), actionTo2, onCallback));

        //var listener = cc.EventListener.create({
        //    event: cc.EventListener.TOUCH_ONE_BY_ONE,
        //    swallowTouches: false,
        //    onTouchBegan: function (touch, event) {
        //        return true;
        //    },
        //    onTouchMoved: function (touch, event) {
        //        var target = event.getCurrentTarget();
        //        var delta = touch.getDelta();
        //        if (target.y > 750) {
        //            if (delta.y < 0) {
        //                target.y += delta.y * 0.5;
        //            } else {
        //                target.y += delta.y;
        //            }
        //        }
        //    },
        //    onTouchEnded: function (touch, event) {
        //        var target = event.getCurrentTarget();
        //        var actionTo = cc.moveTo(1, cc.p(target.x, target.y + target.getContentSize().height/2));
        //        var onCallback = cc.callFunc(this.onCallback1, this);
        //        target.runAction(cc.sequence(actionTo, onCallback));
        //    }
        //});
    },

    onCallback: function (nodeExecutingAction, value) {
        this.containerMessageNode.removeFromParent(true);
        this.containerMessageNode = null;
    },

    setGpsMsg: function (msg) {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            if (g_ConfigManager.IsGPS == 1) {
                msg.longitude = (jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLongitudeInfo", "()F")>0)?(jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLongitudeInfo", "()F")):0;
                msg.latitude = (jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLatitudeInfo", "()F")>0)?(jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLatitudeInfo", "()F")):0;
            } else {
                msg.longitude = 0;
                msg.latitude = 0;
            }
        } else if (cc.sys.os == cc.sys.OS_IOS) {
                                if(g_ConfigManager.IsGPS == 1){
                                msg.longitude = IosRegister.GetLongitude();
                                msg.latitude = IosRegister.GetLatitude();
                                }
                                else{
                                msg.longitude = 0;
                                msg.latitude = 0;
                                }
        } else {
            msg.longitude = 0;
            msg.latitude = 0;
        }
    },

    getStrCountInString:function(m_str,m_string){
        var regex = new RegExp(m_str, 'g');
        var result = m_string.match(regex);
        var count = !result ? 0 : result.length;
        return count;
    }

});

var RootScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        g_RootLayer = new RootLayer();
        this.addChild(g_RootLayer);
    }
});

