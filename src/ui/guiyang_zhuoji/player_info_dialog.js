var PlayerInfoDialogLayer;
PlayerInfoDialogLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.loadUI();
    },

    loadUI: function () {
        var self = this;
        var uiNode = ccs.load(res.player_info_dialog_csd);
        this.addChild(uiNode.node, 1);
        var rootNode = uiNode.node.getChildByName("root");
        this.portrait = rootNode.getChildByName("icon_portrait");
        this.photo = this.portrait.getChildByName("photo");
        this.id_label = rootNode.getChildByName("id_label");
        this.ip_label = rootNode.getChildByName("ip_label");
        this.name_label = rootNode.getChildByName("name_label");
        this.version_label = rootNode.getChildByName("version_text");

        rootNode.addTouchEventListener(this.onTouch, this);
    },

    setData : function (playerData) {
        this.id_label.setString("ID:" + playerData.m_UserID);
        this.name_label.setString(playerData.m_NickName);

        if (cc.game.config.showFPS == true) {
            this.ip_label.setString(g_NetworkManager.m_CurrentServerIP + ":" + g_NetworkManager.m_CurrentServerPort);
        }
        else {
            this.ip_label.setString("IP:" + playerData.m_Ip);
        }
        this.version_label.setString(UserManager.GetSVNVersion());
        NetworkManager.LoadURL(this.photo, playerData.m_PortraitURL);
    },

    onTouch : function(sender, eventType) {
        if (eventType == 2) {
            this.removeFromParent(true);
        }
    }
});