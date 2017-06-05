/**
 * Created by pengchunwu on 2017/2/17.
 */
if (typeof CommonButtonTypeDef == "undefined") {
    var CommonButtonTypeDef = {};
    CommonButtonTypeDef.Unknown = 0;
    CommonButtonTypeDef.OK = 1;
    CommonButtonTypeDef.Cancel = 2;
};

var CommonDialogLayer;
CommonDialogLayer = cc.Layer.extend({

    ctor : function () {
        this._super();

        this.m_LabelTitle = null;
        this.m_LabelMessage = null;
        this.m_BtnOK1 = null;
        this.m_BtnOK2 = null;
        this.m_BtnCancel = null;

        this.m_ClickCallback = null;
        this.m_CallbackTag = null;

        this.loadUI();
    },

    loadUI : function () {
        var uiNode = ccs.load("res/common_dialog_animation.json"); // 由于政府公告时没有网络会提示，所以这个用的文件具体名称不要改
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_LabelTitle = rootNode.getChildByName("label_title");
        this.m_LabelMessage = rootNode.getChildByName("label_msg");
        this.m_BtnOK1 = rootNode.getChildByName("btn_ok1");
        this.m_BtnOK1Title = this.m_BtnOK1.getChildByName("name");
        this.m_BtnOK2 = rootNode.getChildByName("btn_ok2");
        this.m_BtnOK2Title = this.m_BtnOK2.getChildByName("name");
        this.m_BtnCancel = rootNode.getChildByName("btn_cancel");
        this.m_BtnCancelTitle = this.m_BtnCancel.getChildByName("name");

        this.m_BtnOK1.addTouchEventListener(this.onOkClick, this);
        this.m_BtnOK2.addTouchEventListener(this.onOkClick, this);
        this.m_BtnCancel.addTouchEventListener(this.onCancelClick, this);

        this.setButtonType(CommonButtonTypeDef.OK);
        this.setTitle("提示");
        this.setOkTitle("确定");
        this.setCancelTitle("取消");

        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);
    },

    setTitle : function(msg) {
        this.m_LabelTitle.setString(msg);
    },

    setMessage : function(msg) {
        this.m_LabelMessage.setString(msg);
    },

    setButtonType : function(type) {
        if ((type & CommonButtonTypeDef.OK) != 0 && (type & CommonButtonTypeDef.Cancel) != 0 ) {
            this.m_BtnOK2.setVisible(true);
            this.m_BtnCancel.setVisible(true);
            this.m_BtnOK1.setVisible(false);
        }
        else {
            this.m_BtnOK2.setVisible(false);
            this.m_BtnCancel.setVisible(false);
            this.m_BtnOK1.setVisible(true);
        }
    },

    setOkTitle : function (msg) {
        this.m_BtnOK1Title.setString(msg);
        this.m_BtnOK2Title.setString(msg);
    },

    setCancelTitle : function (msg) {
        this.m_BtnCancelTitle.setString(msg);
    },

    setCallback : function (callback, tag) {
        this.m_ClickCallback = callback;
        this.m_CallbackTag = tag;
    },

    onOkClick : function (sender, eventType) {
        if (eventType == 2) {
            if (this.m_ClickCallback != null)
                this.m_ClickCallback.commonDialogCallback(CommonButtonTypeDef.OK, this.m_CallbackTag);
            this.removeFromParent(true);
        }
    },

    onCancelClick : function (sender, eventType) {
        if (eventType == 2) {
            if (this.m_ClickCallback != null)
                this.m_ClickCallback.commonDialogCallback(CommonButtonTypeDef.Cancel, this.m_CallbackTag);
            this.removeFromParent(true);
        }
    },


});
