var GovNtfDialogLayer;
var gov_ui
GovNtfDialogLayer = cc.Scene.extend({

    ctor: function () {
        this._super();
        this.loadUI();
        gov_ui = this;
    },

    onSdkReady : function () {
        this.runAction(cc.Sequence.create
            (
                cc.DelayTime.create(2),
                cc.FadeOut.create(0.5),
                cc.CallFunc.create(function () {
                    var scene = new AssetsManagerLoaderScene();
                    scene.run();
                }
                )
            )
        );
    },

    onEnter: function () {
        this._super();
        //GameManager.TryLvanSdkInit();
        if (cc.sys.os != cc.sys.OS_ANDROID) {
            this.onSdkReady();
        }
    },

    loadUI: function () {
        var self = this;
        this.setCascadeOpacityEnabled(true);
        var uiNode = ccs.load("res/gov_ntf_dialog.json");
        this.addChild(uiNode.node, 1);
    },

    showMessageBox: function (msg, title, buttonType, okTitle, cancelTitle, callback, tag) {
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
            layer.setCallback(callback, tag);

        this.addChild(layer, 10000);
    },

    showTryAgainDialog: function () {
        var callback = {
            commonDialogCallback: function (buttonType, tag) {
                if (buttonType == CommonButtonTypeDef.OK) {
                    GameManager.TryLvanSdkInit();
                }
            }
        };
        this.showMessageBox("初始化失败，请确保您已经连接到网络", "错误", CommonButtonTypeDef.OK, "重试", null, callback);
    }
});

var RoomNumberFromURL = "";
var GlobalDelegate = {
    setRoomNumber : function (number) {
        RoomNumberFromURL = number;
        if (typeof g_RootLayer != "undefined") {
            if (typeof g_RootLayer.m_CurrentScene.onGetRoomNumber != "undefined") {
                g_RootLayer.m_CurrentScene.onGetRoomNumber();
            }
        }
    },

    setNetworkInfo: function (netType, netLevel) {
        var m_netType = parseInt(netType);
        var m_netLevel = parseInt(netLevel);
        if (typeof g_RootLayer != "undefined") {
            if (typeof g_RootLayer.m_CurrentScene.setNetworkInfo != "undefined") {
                g_RootLayer.m_CurrentScene.setNetworkInfo(m_netType,m_netLevel);
            }
        }
    },

    onWeChatShareSuccessful : function () {
        g_UserManager.onWeChatShareSuccessful();
    },

    showTryInitSdkDialog : function () {
        gov_ui.showTryAgainDialog();
    },

    onSdkInitSuccess : function () {
        gov_ui.onSdkReady();
        gov_ui = null;
    }
};