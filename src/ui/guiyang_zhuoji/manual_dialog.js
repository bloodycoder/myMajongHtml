var ManualDialogLayer;
ManualDialogLayer = cc.Layer.extend({

    ctor : function () {
        this._super();
        this.m_closeBtn = null;
        this.webview_point = null;
        this.loadUI();
    },

    loadUI : function () {
        var uiNode = ccs.load(res.manual_dialog_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_closeBtn = rootNode.getChildByName("close_btn");
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);
        this.webview_point = rootNode.getChildByName("webview_point");

        //rootNode.addTouchEventListener(this.onTouchEnded, this);
        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);

    },

    onCloseClick : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.removeFromParent(true);
        }
    },

    onTouchEnded : function (touch, event) {
        this.removeFromParent(true);
    }

});