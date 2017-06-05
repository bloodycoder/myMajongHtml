var MessageDialogLayer;
MessageDialogLayer = cc.Layer.extend({

    ctor : function () {
        this._super();
        this.m_closeBtn = null;
        this.webview_point = null;
        this.loadUI();
    },

    loadUI : function () {
        var uiNode = ccs.load(res.message_dialog_csd);
        var message_content = ccs.load(res.message_content_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_closeBtn = rootNode.getChildByName("close_btn");
        //this.m_messageText = message_content.node.getChildByName("Text_1");
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);
        this.webview_point = rootNode.getChildByName("webview_point");
        this.webview_point.addChild(message_content.node);
        //this.m_messageText.setString("no message now");
        if (this.webview_point === null)
        {
            cc.log("this.webview_point === null");
        }
      
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