/**
 * Created by pengchunwu on 2017/5/11.
 */
var LoggerDialogLayer = cc.Layer.extend({
    ctor : function () {
        this._super();

        this.m_maxLogCount = 500;
        this.m_loggerListView = null;
        this.m_logItem = null;
        this.m_BtnClose = null;
        this.m_logData = new Array();
        this.m_NeedRefresh = true;

        this.loadUI();
    },

    loadUI : function () {
        var uiNode = ccs.load(res.logger_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_loggerListView = rootNode.getChildByName("listview");
        this.m_logItem = rootNode.getChildByName("log_item");
        this.m_BtnClose = rootNode.getChildByName("btn_close");

        this.m_BtnClose.addTouchEventListener(this.onCloseClick, this);
    },

    onCloseClick : function (sender, eventType) {
        if (eventType == 2)
        {
            this.setVisible(false);
        }
    },

    writeLog : function (msg) {
        this.m_logData.push(msg);
        if (this.m_logData.length >= this.m_maxLogCount) {
            var count = this.m_logData.length - this.m_maxLogCount;
            if (count > 0) {
                this.m_NeedRefresh = true;
            }
            this.m_logData.splice(0, this.m_logData.length - this.m_maxLogCount - 1);
            if (this.isVisible() == true) {
                for (var m = 0; m < count; ++m) {
                    this.m_loggerListView.removeItem(0);
                }
            }
        }

        if (this.isVisible() == false)
            return;
        else
            this.addLog(msg);
    },

    refresh : function () {
        if (this.m_NeedRefresh == true) {
            this.m_loggerListView.removeAllItems();
            for (var m = 0; m < this.m_logData.length - 1; ++m) {
                this.addLog(this.m_logData[m]);
            }

            this.m_NeedRefresh = false;
        }

        if (this.m_logData.length > 1) {
            this.addLog(this.m_logData[this.m_logData.length - 1]);
        }

        this.m_loggerListView.jumpToBottom();
    },

    addLog : function (msg) {
        var item = this.m_logItem.clone();
        item.setVisible(true);
        var textItem = item.getChildByName("text");
        textItem.setString(msg);
        this.m_loggerListView.pushBackCustomItem(item);
    },
});
