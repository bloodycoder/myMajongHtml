var ShoppingDialogLayer;
ShoppingDialogLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.m_closeBtn = null;
        this.loadUI();
        this.setting = null;

        g_NetworkManager.Subscrible(ActionDef.GetOrderId, this);
        g_NetworkManager.Subscrible(ActionDef.UpdateTicket, this);
    },

    cleanup: function () {
        this._super();

        g_NetworkManager.Unsubscrible(ActionDef.GetOrderId, this);
        g_NetworkManager.Unsubscrible(ActionDef.UpdateTicket, this);
    },

    loadUI: function () {
        this.uiNode = ccs.load(res.shopping_dialog_csd);
        this.addChild(this.uiNode.node, 1);

        this.refreshUI();

        //rootNode.addTouchEventListener(this.onTouchEnded, this);
        this.uiNode.action.gotoFrameAndPlay(0, false);
        this.uiNode.node.runAction(this.uiNode.action);
    },

    refreshUI : function () {
        var rootNode = this.uiNode.node.getChildByName("root");
        this.m_closeBtn = rootNode.getChildByName("close_btn");
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);

        var list = ["node1", "node2", "node3", "node4", "node5", "node6"]
        for (var i = 0; i < list.length; ++i) {
            var node = rootNode.getChildByName(list[i]);
            var txtMoney = node.getChildByName("txt_money");
            var txtGift = node.getChildByName("txt_gift");
            var button = node.getChildByName("btn");
            var txtReward = node.getChildByName("txt_reward");
            var icon_sc = node.getChildByName("icon_sc");
            var setting = g_ConfigManager.IAP[i];
            if (setting === null) {
                node.setVisible(false);
                break;
            }

            txtMoney.setString("￥" + (setting.Price / 100) + "元");
            var firstPay = Math.pow(2, i);
            console.log("firstPay = " +  firstPay + ", g_UserManager.m_FirstPay = " + g_UserManager.m_FirstPay);
            if ((firstPay & g_UserManager.m_FirstPay) == 0)
            {
                txtGift.setString("额外赠送" + setting.FirstReward +  "钻");
                icon_sc.setVisible(true);
            }
            else
            {
                txtGift.setString("额外赠送" + setting.Gift +  "钻");
                icon_sc.setVisible(false);
            }
            button.setTag(i);
            var price = String(setting.Reward);
            var len = price.length;
            var add_space = 4 - len;
            if (add_space > 0)
                price += new Array(add_space + 1).join(".");
            txtReward.setString(price);
            button.addTouchEventListener(this.onBtnClick, this);
        }

    },

    onCloseClick: function (sender, eventType) {
        if (eventType == 2) {
            g_NetworkManager.Unsubscrible(ActionDef.GetOrderId, this);
            g_NetworkManager.Unsubscrible(ActionDef.UpdateTicket, this);

            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.removeFromParent(true);
        }
    },

    onTouchEnded: function (touch, eventType) {
        if (eventType == 2)
            this.removeFromParent(true);
    },

    onBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            var index = sender.getTag();
            var setting = g_ConfigManager.IAP[index];
            cc.log("消费" + String(setting.Price) + "元");
            if(cc.sys.os == cc.sys.OS_IOS)
            {
                IosIap.Buy(String(setting.AppleID));
                cc.log("iosiap buy" + String(setting.AppleID));
            }
            else
            {
                var msg = {};
                msg.ACTION = ActionDef.GetOrderId;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;
                msg.productid = setting.ProductID;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.GetOrderId, msg.MSG_ID);
            }
        }
    },

    onReceiveMessage: function (action, msgData) {
        switch (action) {
            case ActionDef.GetOrderId:
            {
                var prod = null;
                var firstPay = 0;
                var setting;
                for (var i = 0; i < g_ConfigManager.IAP.length; ++i) {
                    var p = g_ConfigManager.IAP[i];
                    if (p.ProductID == msgData.productid) {
                        prod = p;
                        firstPay = Math.pow(2, i);
                        setting = g_ConfigManager.IAP[i];
                        break;
                    }
                }

                if (prod != null) {
                    var desc = "￥" + setting.Price + "元";
                    if ((firstPay & g_UserManager.m_FirstPay) != 0)
                    {
                        desc += "额外赠送" + setting.FirstReward + "钻";
                    }
                    else
                    {
                        desc += "额外赠送" + setting.Gift + "钻";
                    }
                    console.log("GameManager.Pay: " + prod.ProductID + " " +  prod.Reward);
                    GameManager.Pay(prod.ProductID, prod.Reward + "钻石", desc, msgData.orderid, (prod.Price / 100), msgData.servername);
                }
                break;
            }

            case ActionDef.UpdateTicket:
            {
                this.refreshUI();
            }
                break;
        }

    },

});
