
var RegisterDialogLayer;
RegisterDialogLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.btn_cancel = null;
        this.btn_ok = null;
        this.name = null;
        this.pwd1 = null;
        this.pwd2 = null;
        this.loadUI();
    },
    loadUI: function () {
        var uiNode = ccs.load(res.register_dialog_csd);
        this.addChild(uiNode.node, 1);
        this.name = uiNode.node.getChildByName("name").getChildByName("bg").getChildByName("txt");
        this.pwd1 = uiNode.node.getChildByName("password").getChildByName("bg").getChildByName("txt");
        this.pwd2 = uiNode.node.getChildByName("password2").getChildByName("bg").getChildByName("txt");
        this.btn_ok = uiNode.node.getChildByName("btn_ok");
        this.btn_cancel = uiNode.node.getChildByName("btn_cancel");
        this.btn_cancel.addTouchEventListener(this.onCloseClick, this);
        this.btn_ok.addTouchEventListener(this.onOKClick,this);
    },
    onOKClick: function (sender, eventType) {
        if (eventType == 2) {

            // this.removeFromParent(true);
            if(this.pwd1.getString() != this.pwd2.getString())
            {
                g_RootLayer.showMessageBox("两次输入密码不匹配", "提示");
                this.pwd1.setString("");
                this.pwd2.setString("");
                return;
            }
            var regName = "^[a-zA-Z][0-9a-zA-Z]{3,19}";
            var rName = this.name.getString().match(regName);
            if(rName==null)
            {
                g_RootLayer.showMessageBox("用户名必须以英文字母开头，只包含英文和数字，4-20个字符", "提示");
                this.name.setString("");
                return;
            }

            var regPwd = "[0-9a-zA-Z]{6,20}";
            var rPwd = this.pwd1.getString().match(regPwd);
            if(rPwd==null)
            {
                g_RootLayer.showMessageBox("密码只能包含英文和数字，6-20个字符", "提示");
                this.pwd1.setString("");
                this.pwd2.setString("");
                return;
            }

            IosRegister.Register(String(this.name.getString()),String(this.pwd1.getString()));


        }
    },
    onCloseClick: function (sender, eventType) {
        if (eventType == 2) {
            this.removeFromParent(true);
        }
    },
    onSuccess:function()
    {
        g_RootLayer.showMessageBox("注册成功", "提示");
        //this.removeFromParent(true);
        IosRegister.Login(String(this.name.getString()),String(this.pwd1.getString()));
    },
    onFail:function()
    {
        g_RootLayer.showMessageBox("注册失败，请重试", "提示");
        this.pwd1.setString("");
        this.pwd2.setString("");
        this.name.setString("");
    },


});
