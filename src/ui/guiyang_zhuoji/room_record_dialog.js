var RoomRecordDialogLayer;

var result2img = {
    1: { width: 124, height: 40, res: "res/res/end/end_4_1.png" },
    2: { width: 124, height: 40, res: "res/res/end/end_4_2.png" },
    3: { width: 124, height: 40, res: "res/res/end/end_4_3.png" },
    4: { width: 124, height: 40, res: "res/res/end/end_4_4.png" },
    5: { width: 124, height: 40, res: "res/res/end/end_4_5.png" },
    6: { width: 124, height: 40, res: "res/res/end/end_4_6.png" },
    7: { width: 124, height: 40, res: "res/res/end/end_4_7.png" },
    8: { width: 124, height: 40, res: "res/res/end/end_4_8.png" },
    9: { width: 110, height: 40, res: "res/res/end/end_10_1.png" },
    10: { width: 110, height: 40, res: "res/res/end/end_10_2.png" },
};

RoomRecordDialogLayer = cc.Layer.extend({

    ctor: function (msgData) {
        this._super();
        this.m_closeBtn = null;
        this.m_record_listview = null;
        this.m_template_item = null;
        this.m_player1name_text = null;
        this.m_player2name_text = null;
        this.m_player3name_text = null;
        this.m_player4name_text = null;
        this.players = {};
        this.loadUI(msgData);

        g_NetworkManager.Subscrible(ActionDef.DetailRecord, this);

    },

    loadUI: function (msgData) {
        var uiNode = ccs.load(res.room_record_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_closeBtn = rootNode.getChildByName("close_btn");
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);
        this.m_record_listview = rootNode.getChildByName("record_listview");
        this.m_template_item = rootNode.getChildByName("record_item");

        this.m_record_listview.removeAllItems();
        this.m_record_listview.jumpToTop();
        this.m_player1name_text = rootNode.getChildByName("player1_name_text");
        this.m_player2name_text = rootNode.getChildByName("player2_name_text");
        this.m_player3name_text = rootNode.getChildByName("player3_name_text");
        this.m_player4name_text = rootNode.getChildByName("player4_name_text");

        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);

        cc.log(new Date().Format("yyyy-MM-dd hh:mm:ss"));
        var players = [];//["player1", "player2", "player3", "player4"];
        var records = [];
        //           { datetime: new Date().Format("MM-dd hh:mm"), players: [{ result: 1, value: 10 }, { result: 3, value: 20 }, { result: 6, value: 30 }, { result: 10, value: 40 }] },
        //];
        {
            // 收集玩家姓名
            for (var key in msgData.userinfo) {
                var userinfo = msgData.userinfo[key]
                players.push(userinfo[0]);
                this.players[userinfo[0]] = {name: userinfo[1], url: userinfo[2]};
            }
            //this.players = players;
        }


        for (var key in msgData.record) {
            var record = msgData.record[key]
            var rec = { datetime: record[4], players: [], id: record[0] };
            var plist = rec.players;
            var huplayers = {};
            for (var j in record[5]) {
                huplayers[record[5][j]] = true;
            }
            //var p = record[1];
            for (var i = 0; i < players.length; ++i) {
                var player_name = players[i];

                var wintype = 10;
                if (huplayers[player_name]) {
                    switch (record[1][i]) {
                        case g_WinTypeDef.PingHu:
                            wintype = 1;
                            break;
                        case g_WinTypeDef.DaDuiHu:
                            wintype = 2;
                            break;
                        case g_WinTypeDef.XiaoDuiHu:
                            wintype = 3;
                            break;
                        case g_WinTypeDef.LongXiaoDui:
                            wintype = 4;
                            break;
                        case g_WinTypeDef.DanDiaoHu:
                        case g_WinTypeDef.QingYiSe:
                            wintype = 5;
                            break;
                        case g_WinTypeDef.QingYiSeDaDuiHu:
                            wintype = 6;
                            break;
                        case g_WinTypeDef.QingYiSeXiaoDuiHu:
                            wintype = 7;
                            break;
                        case g_WinTypeDef.QingYiSeLongXiaoDui:
                            wintype = 8;
                            break;
                        case g_WinTypeDef.QingYiSeDanDiao:
                            break;
                    }
                }
                else {
                    if (record[2][i] == 0)
                        wintype = 10;
                    else
                        wintype = 9;
                }
                var r = { value: record[3][i], result: wintype };
                plist.push(r);
            }
            //this.convertData(record, rec, players);
            records.push(rec);
        }
        this.loadAllRecords(players, records);
    },

    convertData: function (src_data) {
        var playerlist = this.players;

        var data = {};
        data.PlayerData = new Array(playerlist.length);
        var i = 0;
        for (var playerid in playerlist) {
            var playerData = {};
            var isHu = false;

            var player_name = playerlist[playerid].name;
            var player_url = playerlist[playerid].url;
            var player_data = src_data["u" + playerid];
            for (var user in src_data.huuser){
                if (user == playerid){
                    isHu = true;
                    break;
                }
            }
            playerData.isHu = isHu;
            playerData.isTing = player_data.ting;
            playerData.WinType = player_data.wintype;
            var scores = player_data.score;
            playerData.ScorePoints = [];
            for (var j = 0; j < scores.length / 3; ++j) {
                var sp = {};
                sp.ScorePointType = scores[j * 3];
                sp.ScorePointCardID = scores[j * 3 + 1];
                sp.ScorePoint = scores[j * 3 + 2];
                playerData.ScorePoints.push(sp);
            }
            playerData.RoundScore = player_data.roundscore;
            playerData.GameScore = player_data.totalscore;
            playerData.isZhuang = false;
            playerData.UserName = player_name;
            playerData.IconURL = player_url;
            playerData.CardsInHand = player_data.tiles;
            playerData.CardsInHand.sort(function (a, b) {
                return a - b;
            });
            playerData.CardsActionResult = [];
            for (var j = 0; j < player_data.pkc.length; ++j) {
                var data_temp = {};
                data_temp.ActionType = player_data.pkc[j][0];
                data_temp.Cards = player_data.pkc[j][1];
                //for (var m = 0; m < player_data.pkc[j][1].length; ++m) {
                //    data_temp.Cards.push(player_data.pkc[j][1][m]);
                //}
                playerData.CardsActionResult.push(data_temp);
            }

            data.PlayerData[i++] = playerData;
        }
        return data;
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

    loadAllRecords: function (players, records) {
        var self = this;
        var players_text = [this.m_player1name_text, this.m_player2name_text, this.m_player3name_text, this.m_player4name_text]
        for (var n = 0; n < players_text.length; ++n) {
            var id = players[n];
            if (typeof this.players[id] == "undefined"){
                players_text[n].setString("");
                continue;
            }
            var name = this.players[id].name;
            players_text[n].setString(name);
        }

        if (records.length <= 5) {
            cc.log("here it is 0");
            for (var i = 0; i < records.length; ++i) {
                self.addRecordItem(i + 1, records[i], players.length);
            }
        }
        else {
            cc.log("here it is");
            var i = 0;
            for (; i < 5; ++i) {
                this.addRecordItem(i + 1, records[i], players.length);
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
                            self.addRecordItem(i + 1, records[i], players.length);
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

    addRecordItem: function (index, record, playercount) {
        var self = this;
        var new_item = this.m_template_item.clone();
        var btn_replay = new_item.getChildByName("btn_replay");
        btn_replay.addTouchEventListener(function (sender, eventType) {
            if (eventType == 2) {
                var msg = {};
                msg.ACTION = ActionDef.DetailRecord;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;
                msg.id = record.id;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.DetailRecord, msg.MSG_ID);
            }
        });
        new_item.setVisible(true);
        this.m_record_listview.pushBackCustomItem(new_item);

        var index_text = new_item.getChildByName("index_text");
        index_text.setString(String(index));

        var text = new_item.getChildByName("datetime_text");
        text.setString(record.datetime);

        if (index % 2 === 0) {
            var background = new_item.getChildByName("Image_6");
            background.loadTexture("res/res/common/common_16_2_pre.png");
        }

        var results = [
            new_item.getChildByName("result1_img"),
            new_item.getChildByName("result2_img"),
            new_item.getChildByName("result3_img"),
            new_item.getChildByName("result4_img")
        ];
        var values = [
            new_item.getChildByName("value1_text"),
            new_item.getChildByName("value2_text"),
            new_item.getChildByName("value3_text"),
            new_item.getChildByName("value4_text")
        ];
        for (var i = 0; i < results.length; ++i) {
            var player = record.players[i];
            if (player !== null && i < playercount) {
                var result = player.result;
                var info = result2img[result];
                results[i].loadTexture(info.res);
                results[i].setContentSize(cc.size(info.width, info.height));
                values[i].setString(String(player.value));
            }
            else {
                results[i].setVisible(false);
                values[i].setVisible(false);
            }
        }
    },

    cleanup: function () {
        this._super();
        g_NetworkManager.Unsubscrible(ActionDef.DetailRecord, this);
    },

    onReceiveMessage: function (action, msgData) {
        switch (action) {
            case ActionDef.DetailRecord:
                if (this.getParent().getChildByTag(Tag.DetailRecord) === null) {
                    var jsonData = JSON.parse(msgData.record);
                    var replayServer = jsReplayServer.getShareInstance();
                    replayServer.LoadReplayData(jsonData, msgData.userinfo);
                    replayServer.Play();
                }
                break;
        }
    }


});