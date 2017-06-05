
var IPDialogLayer;
IPDialogLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.btn_cancel = null;
        this.btn_ok = null;
        this.name = null;
        this.loadUI();
    },
    loadUI: function () {
        var uiNode = ccs.load(res.ip_dialog_csd);
        this.addChild(uiNode.node, 1);
        this.name = uiNode.node.getChildByName("name").getChildByName("bg").getChildByName("txt");
        this.btn_ok = uiNode.node.getChildByName("btn_ok");
        this.btn_cancel = uiNode.node.getChildByName("btn_cancel");
        this.btn_cancel.addTouchEventListener(this.onCloseClick, this);
        this.btn_ok.addTouchEventListener(this.onOKClick, this);
    },
    onOKClick: function (sender, eventType) {
        if (eventType == 2) {
            console.log(this.name.getString());
            NetworkManager.SetRoomServer(this.name.getString(), 22331);
            this.removeFromParent(true);

        }
    },
    onCloseClick: function (sender, eventType) {
        if (eventType == 2) {
            this.removeFromParent(true);
            console.log("cancel");
        }
    }
});
