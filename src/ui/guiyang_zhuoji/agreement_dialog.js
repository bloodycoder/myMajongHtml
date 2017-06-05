var AgreementDialogLayer;
AgreementDialogLayer = cc.Layer.extend({

    ctor : function () {
        this._super();
        this.m_closeBtn = null;
        this.loadUI();
    },

    loadUI : function () {
        var uiNode = ccs.load(res.login_agreement_animation_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_closeBtn = rootNode.getChildByName("close_btn");
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);

        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);

    },

    onCloseClick : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.removeFromParent(true);
        }
    }


});
