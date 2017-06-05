var HistoryRecordDialogLayer;
HistoryRecordDialogLayer = cc.Layer.extend({

    ctor: function (msgData) {
        this._super();
        this.m_closeBtn = null;
        this.m_record_listview = null;
        this.m_template_item = null;
        this.loadUI(msgData);
    },

    loadUI: function (msgData) {
        var uiNode = ccs.load(res.history_dialog_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_closeBtn = rootNode.getChildByName("close_btn");
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);
        this.m_record_listview = rootNode.getChildByName("record_listview");
        this.m_template_item = rootNode.getChildByName("record_item");

        this.m_record_listview.removeAllItems();
        this.m_record_listview.jumpToTop();
        cc.log(new Date().Format("yyyy-MM-dd hh:mm:ss"));

        var records = [];

        if (typeof msgData.recordlist != "undefined"){
            for (var i = 0; i < msgData.recordlist.length; ++i) {
                var record = msgData.recordlist[i];
                var rec = { number: record[1], id: record[0], datetime: record[10], players: [] };
                for (var j = 2; j < 6; ++j) {
                    if (record[j].trim().length > 0){
                        cc.log(record[j]);
                        rec.players.push({ name: String(record[j]), value: record[j + 4] });
                    }
                }
                records.push(rec);
            }
        }

        this.loadAllRecords(records);

        g_NetworkManager.Subscrible(ActionDef.RoomHistoryRecord, this);

        //rootNode.addTouchEventListener(this.onTouchEnded, this);
        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);

    },

    cleanup: function () {
        this._super();
        g_NetworkManager.Unsubscrible(ActionDef.RoomHistoryRecord, this);
    },

    onCloseClick: function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.removeFromParent(true);
        }
    },

    onTouchEnded: function (touch, event) {
        this.removeFromParent(true);
    },

    loadAllRecords: function (records) {
        var self = this;
        if (records.length <= 5) {
            cc.log("here it is 0");
            for (var i = 0; i < records.length; ++i) {
                self.addRecordItem(i + 1, records[i]);
            }
        }
        else {
            cc.log("here it is");
            var i = 0;
            for (; i < 5; ++i) {
                this.addRecordItem(i + 1, records[i]);
            }
            var time = 0.01;

            /*for (; i < records.length; ++i) {
             time += 0.2;
             this.m_record_listview.runAction(
             cc.Sequence.create(
             cc.DelayTime.create(time),
             cc.CallFunc.create(
             self.addRecordItem(i + 1, records[i])
             )
             )
             );
             }*/
            var action = function () {
                return cc.Sequence.create(
                    cc.DelayTime.create(time),
                    cc.CallFunc.create(
                        function () {
                            self.addRecordItem(i + 1, records[i]);
                            ++i;
                            if (i < records.length) {
                                //cc.log(String(i));
                                self.m_record_listview.runAction(action());
                            }
                        }
                    )
                );
            };

            this.m_record_listview.runAction(action());
        }
    },

    addRecordItem: function (index, record) {
        var new_item = this.m_template_item.clone();
        new_item.addTouchEventListener(function (sender, eventType) {
            if (eventType == 2) {
                g_AudioManager.playerEffect(SfxType.BtnClick);
                var msg = {};
                msg.ACTION = ActionDef.RoomHistoryRecord;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;
                msg.recordid = record.id;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.RoomHistoryRecord, msg.MSG_ID);
            }
        });
        new_item.setVisible(true);
        this.m_record_listview.pushBackCustomItem(new_item);

        var index_text = new_item.getChildByName("index_text");
        index_text.setString(String(index));

        var text = new_item.getChildByName("number_text");
        text.setString(String(record.number));

        text = new_item.getChildByName("datetime_text");
        text.setString(record.datetime);
        var names = [
            new_item.getChildByName("name1_text"),
            new_item.getChildByName("name2_text"),
            new_item.getChildByName("name3_text"),
            new_item.getChildByName("name4_text")
        ];
        var values = [
            new_item.getChildByName("value1_text"),
            new_item.getChildByName("value2_text"),
            new_item.getChildByName("value3_text"),
            new_item.getChildByName("value4_text")
        ];
        var i = 0;
        cc.log("length:" + record.players.length);
        for (i = 0; i < Math.min(record.players.length, names.length); ++i) {
            var player = record.players[i];
            names[i].setString(player.name);
            cc.log(player.name);
            values[i].setString(String(player.value));
            cc.log(player.value);
        }
        for (; i < names.length; ++i) {
            names[i].setVisible(false);
            values[i].setVisible(false);
        }

    },

    onReceiveMessage: function (action, msgData) {
        switch (action) {
            case ActionDef.RoomHistoryRecord:
                cc.log("i am here");
                if (this.getParent().getChildByTag(Tag.RoomHistoryRecord) === null) {
                    var layer = new RoomRecordDialogLayer(msgData);//new HistoryRecordDialogLayer();
                    this.getParent().addChild(layer, 1, Tag.RoomHistoryRecord);
                }
        }
    }


});