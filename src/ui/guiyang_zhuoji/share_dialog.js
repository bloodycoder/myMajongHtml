var ShareDialogLayer;
ShareDialogLayer = cc.Layer.extend({

    ctor : function () {
        this._super();

        this.m_qqBtn = null;
        this.m_wechatBtn = null;
        this.m_friendsBtn = null;
        this.m_closeBtn = null;

        this.loadUI();
    },

    loadUI : function () {
        var uiNode = ccs.load(res.share_dialog_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");

        //this.m_qqBtn = rootNode.getChildByName("qq_btn");
        this.m_wechatBtn = rootNode.getChildByName("wechat_btn");
        this.m_friendsBtn = rootNode.getChildByName("friends_btn");
        this.m_closeBtn = rootNode.getChildByName("close_btn");

        //this.m_qqBtn.addTouchEventListener(this.onQQBtnClicked, this);
        this.m_wechatBtn.addTouchEventListener(this.onWeChatBtnClicked, this);
        this.m_friendsBtn.addTouchEventListener(this.onFriendsBtnClicked, this);
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);
        //rootNode.addTouchEventListener(this.onCloseClick, this);
        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);

    },

    onQQBtnClicked : function(sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onWeChatBtnClicked : function (sender, eventType){
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            GameManager.WeChatShare(false, "赶快下载来一圈，就等你了！");
        }
    },

    onFriendsBtnClicked : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            GameManager.WeChatShare(true, "赶快下载来一圈，就等你了！");
        }
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