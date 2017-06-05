
var is_gov = false;
var g_RegisterDialogLayer;
var LoginScene;
var g_IPDialog;
LoginScene = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.agree_checkbox = null;
        this.wechat_btn = null;
        this.gov_btn = null;
        this.root = null;
        this.mask = null;
        //this.animation = null;
        //this.logo_node = null;
        this.ios = null;
        this.password = null;
        this.name = null;
        this.txt_name = null;
        this.txt_password = null
        this.m_LastClick = 0;
        this.btn_ip = null;
        this.btn_logger = null;
        this.loadUI();

    },

    showButtons: function () {
        this.btn_agree.setVisible(true);
        this.agree_checkbox.setVisible(true);
        this.wechat_btn.setVisible(true);
    },

    hideButtons: function () {
        this.btn_agree.setVisible(false);
        this.agree_checkbox.setVisible(false);
        this.wechat_btn.setVisible(false);
    },

    onEnter: function () {
        this._super();
        this.playAnim();
        cc.log("login_scene onEnter");
        var wechat_account = sys.localStorage.getItem("wechat_account")
        cc.log("wechat_account" + wechat_account);
        //if (cc.sys.os == cc.sys.OS_ANDROID)
        {
            if (wechat_account != null && typeof wechat_account != "undefined") {
                this.mask.setVisible(true);
                this.hideButtons();
                GameManager.WeChatLogin(false);
                var that = this;
                this.mask.runAction(cc.sequence(cc.delayTime(15), cc.CallFunc.create(function() {that.hideMask();})));
            }
        }
    },

    hideMask: function () {
        this.mask.setVisible(false);
        this.showButtons();
    },

    loadUI: function () {
        var self = this;
        cc.log("LoginScene.loadUI");
        var uiNode = ccs.load(res.login_scene_csd);
        this.addChild(uiNode.node, 1);
        var rootNode = uiNode.node.getChildByName("root");
        this.mask = uiNode.node.getChildByName("mask_layer");
        this.root = rootNode;
        this.agree_checkbox = rootNode.getChildByName("agree_checkbox");
        this.wechat_btn = rootNode.getChildByName("wechat_btn");
        this.gov_btn = rootNode.getChildByName("gov_btn");
        this.btn_agree = rootNode.getChildByName("btn_agreement");
        this.btn_ip = rootNode.getChildByName("Button_IP");
        this.ios = rootNode.getChildByName("ios");
        this.btn_logger = rootNode.getChildByName("btn_log");
        this.wechat_btn.addTouchEventListener(this.onLoginBtnClick, this);
        this.gov_btn.addTouchEventListener(this.onGovLoginBtnClick, this);
        this.agree_checkbox.addEventListener(this.onCheckBoxClicked, this);
        this.btn_agree.addTouchEventListener(this.onAgreementClick, this);
        this.btn_ip.addTouchEventListener(this.OnIPClick, this);
        this.btn_logger.addTouchEventListener(this.onShowLoggerClick, this);
        if (cc.sys.os == cc.sys.OS_IOS) {
            cc.log("IosRegister.GetWeChatTag() " + IosRegister.GetWeChatTag());
            if (IosRegister.GetWeChatTag() == 1) {
                this.ios.setVisible(false);
                this.wechat_btn.setVisible(true);
            }
            else {
                this.ios.setVisible(true);
                this.wechat_btn.setVisible(false);
                this.name = this.ios.getChildByName("name");
                this.txt_name = this.name.getChildByName("txt_name");
                this.txt_password = this.ios.getChildByName("password").getChildByName("txt_password");
                this.btn_register = this.ios.getChildByName("btn_register");
                this.btn_register.addTouchEventListener(this.onRegisterByPwd, this);
                this.btn_login = this.ios.getChildByName("btn_login");
                this.btn_login.addTouchEventListener(this.onLoginByPwd, this);
            }

        }
        else {
            this.ios.setVisible(false);
        }
        if (is_gov) {
            gov_btn.setVisible(true);
            wechat_btn.setVisible(false);
        }

        //var ntfLayer = new GovNtfDialogLayer();
        ////this.getParent().addChild(ntfLayer, 1, 999);
        //this.addChild(ntfLayer, 1);
        //
        //ntfLayer.runAction(cc.Sequence.create
        //    (
        //    cc.DelayTime.create(2),
        //    cc.FadeOut.create(0.5),
        //    cc.CallFunc.create(function () {
        //        ntfLayer.removeFromParent();
        //        self.playAnim();
        //    }
        //    )
        //    )
        //);
    },

    //onEnter : function () {
    //    this._super();
    //    var parent = this.getParent();
    //    var ntfLayer = new GovNtfDialogLayer();
    //    parent.addChild(ntfLayer, 1, 999);
    //},

    playAnim: function () {
        //logo_anim.setPositionX(667);
        //logo_anim.setPositionY(513.21);
        var logo_anim = ccs.load(res.logo_csd);
        var logo_node = logo_anim.node;
        var animation = logo_anim.action;
        logo_node.x = 730;
        logo_node.y = 475;
        logo_node.setScale(0.8);
        //logo_anim.node.setPosition(cc.p(667, 513.21));
        cc.log(logo_node);
        cc.log(this.root);
        this.root.addChild(logo_node);
        logo_node.setVisible(false);

        animation.setFrameEventCallFunc(function (event) {
            var eventData = event.getEvent().split("|");
            var key = eventData[0];
            var name = eventData[1];
            if (name == "Show") {
                logo_node.setVisible(true);
            }

        });

        animation.setLastFrameCallFunc(function () {
            animation.gotoFrameAndPlay(268, true);
        });
        animation.gotoFrameAndPlay(0, false);
        logo_node.runAction(animation);
    },

    onShowLoggerClick : function (sender, eventType) {
        if (eventType == 2)
        {
            g_RootLayer.showLogger();
        }
    },

    OnIPClick: function (touch, event) {
        if (event == 2) {
            g_IPDialog = new IPDialogLayer();
            this.addChild(g_IPDialog, 1);
        }
    },
    onTouchEnded: function (touch, event) {
        this.removeFromParent(true);
    },

    onLoginBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            var cur = new Date().getTime();
            if (cur - this.m_LastClick < 1000)
                return;

            this.m_LastClick = cur;
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.agree_checkbox.isSelected()) {
                GameManager.WeChatLogin();
            } else {
                g_RootLayer.showMessageBox("请确认并同意用户协议！", "提示");
            }

        }
    },

    onGovLoginBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (this.agree_checkbox.isSelected()) {
                g_UserManager.PassportLogined();
            }
            else {
                g_RootLayer.showMessageBox("请确认并同意用户协议！", "提示");
            }
        }
    },
    onRegisterByPwd: function (sender, eventType) {
        if (eventType == 2) {
            if (this.agree_checkbox.isSelected()) {
                g_RegisterDialogLayer = new RegisterDialogLayer();
                this.addChild(g_RegisterDialogLayer, 1);
            }
            else {
                g_RootLayer.showMessageBox("请确认并同意用户协议！", "提示");
            }

        }
    },
    onLoginByPwd: function (sender, eventType) {
        if (eventType == 2) {
            if (this.agree_checkbox.isSelected()) {
                IosRegister.Login(String(this.txt_name.getString()), String(this.txt_password.getString()))
            }
            else {
                g_RootLayer.showMessageBox("请确认并同意用户协议！", "提示");
            }
        }
    },
    onLoginFaile: function () {
        g_RootLayer.showMessageBox("用户名或密码错误，请重新输入", "提示");
        this.txt_password.setString("");
        this.txt_name.setString("");
    },
    onCheckBoxClicked: function (sender, type) {
        switch (type) {
            case ccui.CheckBox.EVENT_UNSELECTED:
                this.wechat_btn.setEnabled(false);
                this.gov_btn.setEnabled(false);
                break;
            case ccui.CheckBox.EVENT_SELECTED:
                this.wechat_btn.setEnabled(true);
                this.gov_btn.setEnabled(true);
                break;
        }
    },

    onAgreementClick: function (sender, eventType) {
        if (eventType == 2) {
            var layer = new AgreementDialogLayer();
            this.addChild(layer, 100);
        }
    }

});
