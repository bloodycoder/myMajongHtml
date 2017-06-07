/**
 * Created by pengchunwu on 2017/4/21.
 */
if (typeof ReplayStatusDef == "undefined") {
    var ReplayStatusDef = {};
    ReplayStatusDef.Stop = 0;
    ReplayStatusDef.Playing = 1;
    ReplayStatusDef.Pause = 2;
};
var jsReplayServerShareInstance = null;
var jsReplayServer = {
    getShareInstance : function () {
        if (jsReplayServerShareInstance == null) {
            jsReplayServerShareInstance = jsReplayServer.createNew();
        }
        return jsReplayServerShareInstance;
    },

    closeShareInstance : function () {
        if (jsReplayServerShareInstance != null) {
            jsReplayServerShareInstance.Stop();
            jsReplayServerShareInstance.cleanup();

            jsReplayServerShareInstance = null;
        }
    },

    createNew : function () {
        var _instance = {};

        _instance.m_ReplayData = null;
        _instance.m_1XSpeed = 1000.0;
        _instance.m_PlaySpeed = 1;

        _instance.m_CurrentReplayStatus = ReplayStatusDef.Stop;
        _instance.m_GameRoomPlayback = null;
        _instance.m_CurrentStep = -1;
        _instance.m_DoneStep = -1;
        _instance.m_LastStepExecuteTime = 0;
        _instance.m_LastPlayer = 0;
        _instance.m_CurrentPlayer = 0;
        _instance.m_LastCardID = 0;
        _instance.UserManager = {};
        _instance.m_GameData = {};
        _instance.m_MessageQuene = null;

        _instance.m_PlayerData = {};
        _instance.m_PlayerData = new Array(4);
        for (var i = 0; i < 4; ++i) {
            _instance.m_PlayerData[i] = {};
            _instance.m_PlayerData[i].m_CardsInHand = new Array();
            _instance.m_PlayerData[i].m_ActionHistory = new Array();
            _instance.m_PlayerData[i].m_ActionResults = new Array();
            _instance.m_PlayerData[i].m_GameStatus = {};
            _instance.m_PlayerData[i].m_GameStatus.isTing = false;
            _instance.m_PlayerData[i].m_GameStatus.isChong = false;
            _instance.m_PlayerData[i].m_GameStatus.isZe = false;
            _instance.m_PlayerData[i].m_GameStatus.isZhuang = false;
        }

        _instance.UserManager.m_UserID = 0;
        _instance.UserManager.m_NickName = "";
        _instance.UserManager.m_Sex = 0;
        _instance.UserManager.m_PortraitURL = "";
        _instance.UserManager.m_Money = 0;
        _instance.UserManager.m_Ip = "127.0.0.1";
        _instance.UserManager.m_Version = "1.0";
        _instance.UserManager.m_Token = "";
        _instance.UserManager.m_FirstPay = 0;
        _instance.UserManager.m_RoomData = {};
        _instance.UserManager.m_RoomData.roomId = 0;
        _instance.UserManager.m_RoomData.roomToken = "";
        _instance.UserManager.m_RoomData.roomServerIP = "";
        _instance.UserManager.m_RoomData.roomServerPort = 0;
        _instance.UserManager.m_RoomData.maxPlayer = 4;
        _instance.UserManager.m_RoomData.maxRound = 0;
        _instance.UserManager.m_RoomData.tickets = 0;
        _instance.UserManager.m_RoomData.creator = 0;
        _instance.UserManager.m_RoomData.gameMode = 0;
        _instance.UserManager.m_RoomData.gameModeOptions = 0;
        _instance.UserManager.m_RoomData.lianZhuangType = 0;

        _instance.UserManager.m_RoomData.reset = function () {
            this.roomId = 0;
            this.roomToken = "";
            this.roomServerIP = "";
            this.roomServerPort = 0;
            this.maxPlayer = 4;
            this.maxRound = 0;
            this.tickets = 0;
            this.creator = 0;
            this.gameMode = 0;
            this.gameModeOptions = 0;
            this.scoreType = 0;
            this.lianZhuangType = 0;
        };

        _instance.UserManager.m_PlayerData = new Array(4);
        for (var i = 0; i < 4; ++i) {
            _instance.UserManager.m_PlayerData[i] = {};
            _instance.UserManager.m_PlayerData[i].m_UserID = -1;
            _instance.UserManager.m_PlayerData[i].m_NickName = "";
            _instance.UserManager.m_PlayerData[i].m_PortriatURL = "";
            _instance.UserManager.m_PlayerData[i].m_Sex = 1;
            _instance.UserManager.m_PlayerData[i].m_Ip = "";
            _instance.UserManager.m_PlayerData[i].m_Score = 0;
            _instance.UserManager.m_PlayerData[i].m_Offline = false;
            _instance.UserManager.m_PlayerData[i].m_GameStatus = {};
            _instance.UserManager.m_PlayerData[i].m_GameStatus.isZhuang = false;
            _instance.UserManager.m_PlayerData[i].m_GameStatus.isChong = false;
            _instance.UserManager.m_PlayerData[i].m_GameStatus.isTing = false;
            _instance.UserManager.m_PlayerData[i].m_GameStatus.isZe = false;
            _instance.UserManager.m_PlayerData[i].m_GameStatus.lastStatus = 0;
            _instance.UserManager.m_PlayerData[i].m_GameStatus.isReady = false;
            _instance.UserManager.m_PlayerData[i].m_GameStatus.quemen = -1;

            _instance.UserManager.m_PlayerData[i].m_GameStatus.reset = function () {
                this.isZhuang = false;
                this.isChong = false;
                this.isTing = false;
                this.isZe = false;
                this.lastStatus = 0;
                this.isReady = false;
                this.quemen = -1;
            }

            _instance.UserManager.m_PlayerData.reset = function () {
                for (var i = 0; i < 4; +i) {
                    this[i].m_UserID = -1;
                    this[i].m_NickName = "";
                    this[i].m_PortriatURL = "";
                    this[i].m_Sex = 1;
                    this[i].m_Ip = "";
                    this[i].m_Score = 0;
                    this[i].m_Offline = false;
                    this[i].m_GameStatus.reset();
                }
            }

            _instance.UserManager.reset = function () {
                this.m_RoomData.reset();
                this.m_PlayerData.reset();
            }
        }

        _instance.UserManager.CloneData = function () {
            console.log("CloneData");
            this.m_UserID = g_UserManager.m_UserID;
            this.m_NickName = g_UserManager.m_NickName;
            this.m_Sex = g_UserManager.m_Sex;
            this.m_PortraitURL = g_UserManager.m_PortraitURL;
            this.m_Money = g_UserManager.m_Money;
            this.m_Ip = g_UserManager.m_Ip;
            this.m_RoomData = {};
            this.m_RoomData.roomId = g_UserManager.m_RoomData.roomid;
            this.m_RoomData.roomToken = g_UserManager.m_RoomData.roomToken;
            this.m_RoomData.roomServerIP = g_UserManager.m_RoomData.roomServerIP;
            this.m_RoomData.roomServerPort = g_UserManager.m_RoomData.roomServerPort;
            this.m_RoomData.maxPlayer = g_UserManager.m_RoomData.maxPlayer;
            this.m_RoomData.maxRound = g_UserManager.m_RoomData.maxRound;
            this.m_RoomData.tickets = g_UserManager.m_RoomData.tickets;
            this.m_RoomData.creator = g_UserManager.m_RoomData.creator;
            this.m_RoomData.gameMode = g_UserManager.m_RoomData.gameMode;
            this.m_RoomData.gameModeOptions = g_UserManager.m_RoomData.gameModeOptions;
            this.m_RoomData.lianZhuangType = g_UserManager.m_RoomData.lianZhuangType;

            for (var i = 0; i < 4; ++i) {
                this.m_PlayerData[i].m_UserID = g_UserManager.m_PlayerData[i].m_UserID;
                this.m_PlayerData[i].m_NickName = g_UserManager.m_PlayerData[i].m_NickName;
                this.m_PlayerData[i].m_PortriatURL = g_UserManager.m_PlayerData[i].m_PortriatURL;
                this.m_PlayerData[i].m_Sex = g_UserManager.m_PlayerData[i].m_Sex;
                this.m_PlayerData[i].m_Ip = g_UserManager.m_PlayerData[i].m_Ip;
                this.m_PlayerData[i].m_Score = g_UserManager.m_PlayerData[i].m_Score;
                this.m_PlayerData[i].m_Offline = g_UserManager.m_PlayerData[i].m_Offline;
                this.m_PlayerData[i].m_GameStatus.isZhuang = g_UserManager.m_PlayerData[i].m_GameStatus.isZhuang;
                this.m_PlayerData[i].m_GameStatus.isChong = g_UserManager.m_PlayerData[i].m_GameStatus.isChong;;
                this.m_PlayerData[i].m_GameStatus.isTing = g_UserManager.m_PlayerData[i].m_GameStatus.isTing;;
                this.m_PlayerData[i].m_GameStatus.isZe = g_UserManager.m_PlayerData[i].m_GameStatus.isZe;;
                this.m_PlayerData[i].m_GameStatus.lastStatus = g_UserManager.m_PlayerData[i].m_GameStatus.lastStatus;;
                this.m_PlayerData[i].m_GameStatus.isReady = g_UserManager.m_PlayerData[i].m_GameStatus.isReady;;
                this.m_PlayerData[i].m_GameStatus.quemen = g_UserManager.m_PlayerData[i].m_GameStatus.quemen;;
            }
        };

        _instance.UserManager.getPlayerCount = function() {
            var count = 0;
            for (var i = 0; i < this.m_PlayerData.length; ++i)
            {
                if (this.m_PlayerData[i].m_UserID > 0)
                    count++;
            }

            return count;
        }

        _instance.UserManager.getMyselfPosition = function () {
            var index = this.getPlayerPosition(this.m_UserID);
            return index;
        }

        _instance.UserManager.getPlayerPosition = function (userId) {
            for (var i = 0; i < this.m_PlayerData.length; ++i)
            {
                if (this.m_PlayerData[i].m_UserID <= 0)
                    continue;
                if (userId == this.m_PlayerData[i].m_UserID)
                {
                    return i;
                }
            }
            return -1;
        }

        _instance.UserManager.getPlayerDataByPosition = function (pos) {
            return this.m_PlayerData[pos];
        }

        _instance.UserManager.getPlayerDataByUIPosition = function (pos) {
            if (pos == 0)
                return this.getPlayerDataByPosition(this.getMyselfPosition());
            else {
                var myselfPosition = this.getMyselfPosition();
                return this.getPlayerDataByPosition((myselfPosition + pos) % this.m_RoomData.maxPlayer);
            }

        };



        // public
        _instance.LoadReplayData = function(playData, userInfo) {
            this.m_ReplayData = playData;
            this.m_PlayerInfo = userInfo;
			//calculate the steps        picard 
        };

        _instance.SetPlaySpeed = function (speed) {
            this.m_PlaySpeed = speed;
        };

        _instance.SetPlayer = function(replayLayer) {
            this.m_GameRoomPlayback = replayLayer;
        };

        _instance.Play = function () {
            this.setRoomData(this.m_ReplayData);
            if (this.generateMsgQuene(this.m_ReplayData) == false)
            {
				console.log("数据错误");
                g_RootLayer.showMessageBox("回放数据错误！", "提示");
                this.setRoomData(null);
                return;
            }

            this.cleanup();

            this.m_GameRoomPlayback = new GameRoomPlaybackLayer();
            //g_RootLayer.addChild(this.m_GameRoomPlayback, 1000);   picard
			cc.director.runScene(this.m_GameRoomPlayback);
            this.m_CurrentReplayStatus = ReplayStatusDef.Playing;
            //g_RootLayer.SubscribleUpdate(this);     picard

        };

        _instance.cleanup = function () {
            if (this.m_GameRoomPlayback != null) {
                this.m_GameRoomPlayback.removeFromParent(true);
                this.m_GameRoomPlayback = null;
            }
        };

        _instance.SequenceStepDone = function() {
            this.m_DoneStep++;
        };

        _instance.Pause = function () {
            this.m_CurrentReplayStatus = ReplayStatusDef.Pause;
        };

        _instance.Resume = function () {
            this.m_CurrentReplayStatus = ReplayStatusDef.Playing;
        };

        _instance.Stop = function () {
            console.log("replay stop");
            this.m_CurrentReplayStatus = ReplayStatusDef.Stop;
            this.m_GameRoomPlayback.showPlaybackOperatorArea(true);
            g_RootLayer.UnsubscribleUpdate(this);
        };

        // private

        _instance.sortCards = function (cards) {
            for (var i = 0; i < cards.length; ++i) {
                for (var j = i + 1; j < cards.length; ++j) {
                    var data1 = cards[i];
                    var data2 = cards[j];
                    if (data1 > data2) {
                        cards[j] = data1;
                        cards[i] = data2;
                    }
                }
            }
        };

        _instance.doAction = function (userId, actionStatus, cardId) {
            console.log("replay do action: userid = " + userId + "; actionStatus = " + actionStatus + "; cardId = " + cardId);
            var currentPlayerData = this.m_PlayerData[this.UserManager.getPlayerPosition(userId)];
            this.m_LastPlayer = this.m_CurrentPlayer;
            this.m_CurrentPlayer = userId;

            switch (actionStatus) {
                case GameActionDef.MoPai: {
                    //this.sortCards(currentPlayerData.m_CardsInHand);
                    currentPlayerData.m_CardsInHand.push(cardId);
                }
                    break;

                case GameActionDef.ZhuanWanDou:
                case GameActionDef.Peng:
                case GameActionDef.Gang:
                case GameActionDef.AnGang:
                {
                    var lastPlayerData = null;
                    if (this.m_LastPlayer > 0) {
                        if (actionStatus != GameActionDef.AnGang && actionStatus != GameActionDef.ZhuanWanDou ) {
                            lastPlayerData = this.m_PlayerData[this.UserManager.getPlayerPosition(this.m_LastPlayer)];
                            // 删除被吃杠碰者出牌历史中被吃杠碰的牌
                            lastPlayerData.m_ActionHistory.splice(lastPlayerData.m_ActionHistory.length - 1, 1);
                        }

                        // 删除操作执行人的手牌
                        var count = 0;
                        var needDel = 0;
                        var resultType = ActionResultTypeDef.Unknown;
                        if (actionStatus == GameActionDef.ZhuanWanDou)
                        {
                            needDel = 1;
                            resultType = ActionResultTypeDef.ZhuanWanDou;
                        }
                        else if (actionStatus == GameActionDef.Peng)
                        {
                            needDel = 2;
                            resultType = ActionResultTypeDef.Peng;
                        }
                        else if (actionStatus == GameActionDef.Gang) {
                            needDel = 3;
                            resultType = ActionResultTypeDef.Gang;
                        }
                        else if (actionStatus == GameActionDef.AnGang) {
                            needDel = 4;
                            resultType = ActionResultTypeDef.AnGang;
                        }
                        var newArray = new Array();
                        for (var m = 0; m < currentPlayerData.m_CardsInHand.length; ++m)
                        {
                            if (count < needDel && currentPlayerData.m_CardsInHand[m] == cardId) {
                                count++;
                                continue;
                            }

                            newArray.push(currentPlayerData.m_CardsInHand[m]);
                        }
                        currentPlayerData.m_CardsInHand = newArray;

                        var pkcData = {};
                        pkcData.ActionType = resultType;
                        pkcData.Cards = new Array();
                        count = 4;
                        if (actionStatus == GameActionDef.Peng)
                            count = 3;
                        for (var i = 0; i < count; ++i) {
                            pkcData.Cards.push(cardId);
                        }
                        pkcData.Owner = this.m_LastPlayer;
                        if (actionStatus == GameActionDef.ZhuanWanDou)
                        {
                            for (var m = 0; m < currentPlayerData.m_ActionResults.length; ++m)
                            {
                                if (currentPlayerData.m_ActionResults[m].ActionType == ActionResultTypeDef.Peng && currentPlayerData.m_ActionResults[m].Cards[0] == cardId)
                                {
                                    currentPlayerData.m_ActionResults.splice(m, 1);
                                    break;
                                }
                            }
                        }
                        currentPlayerData.m_ActionResults.push(pkcData);
                    }
                    else {
                        console.log("BAD DATA! No Last Player.");
                    }
                }
                    break;

                case GameActionDef.Chi:
                {

                }
                    break;

                case GameActionDef.ChongFeng:
                case GameActionDef.WuGuChongFeng:
                case GameActionDef.ZeRen:
                case GameActionDef.WuGuZeRen:
                case GameActionDef.QiangGangHu:
                case GameActionDef.ZiMo:
                case GameActionDef.Ting:
                case GameActionDef.QueMen:
                case GameActionDef.MaiHua:
                case GameActionDef.BuHua:
                {
                }
                    break;

                case GameActionDef.DaPai:
                {
                    for (var i = 0; i < currentPlayerData.m_CardsInHand.length; ++i) {
                        if (currentPlayerData.m_CardsInHand[i] == cardId) {
                            currentPlayerData.m_CardsInHand.splice(i, 1);
                            break;
                        }
                    }

                    this.m_LastCardID = cardId;
                    currentPlayerData.m_ActionHistory.push(cardId);
                }
                    break;

                case GameActionDef.DianPao:
                {
                    lastPlayerData = this.m_PlayerData[this.UserManager.getPlayerPosition(this.m_LastPlayer)];
                    currentPlayerData.m_CardsInHand.push(lastPlayerData.m_ActionHistory[lastPlayerData.m_ActionHistory.length - 1]);

                    // 删除被吃杠碰者出牌历史中被吃杠碰的牌
                    lastPlayerData.m_ActionHistory.splice(lastPlayerData.m_ActionHistory.length - 1, 1);

                }
                    break;

                default:
                    break;
            }
        };

        _instance.generateMsgQuene = function(playData) {
            this.m_MessageQuene = new Array();
            this.m_MessageQuene.push("RoundStart");
            for (var i = 0; i < playData.rounds.length; ++i) {
                var actionData = {};
                actionData.actuid = playData.rounds[i][0];
                actionData.actstatus = playData.rounds[i][1];
                actionData.param = playData.rounds[i][2];

                this.m_MessageQuene.push(actionData);
            }
            this.m_MessageQuene.push("RoundEnd");

            return true;
        };

        _instance.setRoomData = function(playData) {
            //this.UserManager.CloneData();

            if (playData != null) {
                this.UserManager.m_RoomData.maxPlayer = playData.uids.length;
                this.UserManager.m_RoomData.maxRound = 1;
                this.UserManager.m_RoomData.gameMode = playData.rules[0];
                this.UserManager.m_RoomData.gameModeOptions = playData.rules[1];
                this.UserManager.m_RoomData.scoreType = playData.rules[2];
                this.UserManager.m_RoomData.lianZhuangType = playData.rules[3];

                this.UserManager.m_UserID = playData.uids[0];

                for (var i = 0; i < playData.uids.length; ++i) {
                    this.UserManager.m_PlayerData[i].m_UserID = playData.uids[i];
                    var userInfo = {};
                    userInfo.NickName = "";
                    userInfo.PortraitURL = "";
                    if (typeof this.m_PlayerInfo != "undefined" && this.m_PlayerInfo != null) {
                        for (var m = 0; m < this.m_PlayerInfo.length; ++m) {
                            if (this.m_PlayerInfo[m][0] == playData.uids[i]) {
                                userInfo.NickName = this.m_PlayerInfo[m][1];
                                userInfo.PortraitURL = this.m_PlayerInfo[m][2];
                                break;
                            }
                        }
                    }
                    this.UserManager.m_PlayerData[i].m_NickName = userInfo.NickName;
                    this.UserManager.m_PlayerData[i].m_PortraitURL = userInfo.PortraitURL;
                    this.UserManager.m_PlayerData[i].m_Sex = 1;
                    this.UserManager.m_PlayerData[i].m_Ip = "";
                    this.UserManager.m_PlayerData[i].m_Score = 0;
                    this.UserManager.m_PlayerData[i].m_Offline = false;
                    this.UserManager.m_PlayerData[i].m_GameStatus.reset();
                    this.UserManager.m_PlayerData[i].m_GameStatus.quemen = -1;
                }
            }
            else {
                this.UserManager.m_RoomData.maxPlayer = g_ConfigManager.CreateRoom_PlayerSet;
                this.UserManager.m_RoomData.maxRound = g_ConfigManager.CreateRoom_Round;
                this.UserManager.m_RoomData.gameMode = g_ConfigManager.CreateRoom_GameMode;
                this.UserManager.m_RoomData.gameModeOptions = g_ConfigManager.CreateRoom_GameModeOptions;
                this.UserManager.m_RoomData.scoreType = g_ConfigManager.CreateRoom_ScoreType;
                this.UserManager.m_RoomData.lianZhuangType = g_ConfigManager.CreateRoom_LianZhuangType;

                for (var i = 0; i < this.UserManager.m_RoomData.maxPlayer; ++i) {
                    this.UserManager.m_PlayerData[i].m_UserID = 0;
                    this.UserManager.m_PlayerData[i].m_NickName = "";
                    this.UserManager.m_PlayerData[i].m_PortraitURL = "";
                    this.UserManager.m_PlayerData[i].m_Sex = 1;
                    this.UserManager.m_PlayerData[i].m_Ip = "";
                    this.UserManager.m_PlayerData[i].m_Score = 0;
                    this.UserManager.m_PlayerData[i].m_Offline = false;
                    this.UserManager.m_PlayerData[i].m_GameStatus.reset();
                    this.UserManager.m_PlayerData[i].m_GameStatus.quemen = -1;
                }
            }
        };

        _instance.roundStart = function(playData) {
            var myselfPosition = this.UserManager.getMyselfPosition();
            console.log("myselfPosition = " + myselfPosition);

            var msg = {};
            msg.MSG_RET = 0;
            msg.ACTION = ActionDef.RoundStart;
            msg.tiles = {};
            for (var i = 0; i < playData.uids.length; ++i)
            {
                this.m_PlayerData[i].m_CardsInHand = new Array();
                this.m_PlayerData[i].m_ActionHistory = new Array();
                this.m_PlayerData[i].m_ActionResults = new Array();
                msg.tiles["u" + playData.uids[i]] = new Array();
                for (var m = 0; m < playData.init[i].length; ++m) {
                    msg.tiles["u" + playData.uids[i]].push(playData.init[i][m]);
                    this.m_PlayerData[i].m_CardsInHand.push(playData.init[i][m]);
                }
            }
            msg.tilescount = new Array();
            this.m_GameData.m_CardRemain = 108;
            for (var i = 0; i <playData.uids.length; ++i) {
                this.m_GameData.m_CardRemain -= playData.init[i].length;
                msg.tilescount.push(playData.init[i].length);
            }
            msg.remain = this.m_GameData.m_CardRemain;
            msg.zhuang = playData.zhuang;
            for (var i = 0; i < this.UserManager.m_RoomData.maxPlayer; ++i) {
                if (this.UserManager.m_PlayerData[i].m_UserID == playData.zhuang) {
                    this.m_PlayerData[i].m_GameStatus.isZhuang = true;
                }
                else
                {
                    this.m_PlayerData[i].m_GameStatus.isZhuang = false;
                }
            }
            msg.round = 1;

            var json = JSON.stringify(msg);

            return json;
        };

        _instance.executeData = function(sequenceData) {
            var actionData = {};

            switch (sequenceData.actstatus) {
                case GameActionDef.MoPai: {
                    actionData.ACTION = ActionDef.DrawCard;
                    actionData.MSG_RET = 0;
                    actionData.actuid = sequenceData.actuid;
                    this.m_GameData.m_CardRemain--;
                    actionData.remain = this.m_GameData.m_CardRemain;
                    var pos = this.UserManager.getPlayerPosition(sequenceData.actuid);
                    actionData.tiles = new Array();
                    for (var m = 0; m < this.m_PlayerData[pos].m_CardsInHand.length; ++m) {
                        actionData.tiles.push(this.m_PlayerData[pos].m_CardsInHand[m]);
                    }
                    actionData.tiles.push(sequenceData.param);
                    this.doAction(sequenceData.actuid, sequenceData.actstatus, sequenceData.param);
                }
                    break;

                case GameActionDef.ChongFeng:
                case GameActionDef.WuGuChongFeng:
                case GameActionDef.ZeRen:
                case GameActionDef.WuGuZeRen:
                case GameActionDef.ZhuanWanDou:
                case GameActionDef.Peng:
                case GameActionDef.Gang:
                case GameActionDef.AnGang:
                case GameActionDef.QiangGangHu:
                case GameActionDef.ZiMo:
                case GameActionDef.DianPao:
                case GameActionDef.Ting:
                case GameActionDef.QueMen:
                case GameActionDef.MaiHua:
                case GameActionDef.Chi:
                case GameActionDef.BuHua:
                {
                    actionData.ACTION = ActionDef.ActionResult;
                    actionData.MSG_RET = 0;
                    actionData.actuid = sequenceData.actuid;
                    actionData.actstatus = sequenceData.actstatus;
                    actionData.param = sequenceData.param;
                    if (sequenceData.actstatus == GameActionDef.DianPao) {
                        actionData.dianpaouser = this.m_LastPlayer;
                    }
                    this.doAction(sequenceData.actuid, sequenceData.actstatus, sequenceData.param);
                    for (var m = 0; m < this.UserManager.m_RoomData.maxPlayer; ++m) {
                        var index = "u" + this.UserManager.m_PlayerData[m].m_UserID;
                        actionData[index] = {};
                        actionData[index].pkc = new Array();
                        console.log("replay executeData:this.m_PlayerData[" + m + "].m_ActionResults.length = " + this.m_PlayerData[m].m_ActionResults.length);
                        for (var x = 0; x < this.m_PlayerData[m].m_ActionResults.length; x++) {
                            var pkc = new Array();
                            pkc.push(this.m_PlayerData[m].m_ActionResults[x].ActionType);
                            pkc.push(new Array());
                            for (var y = 0; y < this.m_PlayerData[m].m_ActionResults[x].Cards.length; ++y) {
                                pkc[1].push(this.m_PlayerData[m].m_ActionResults[x].Cards[y]);
                            }
                            pkc.push(this.m_PlayerData[m].m_ActionResults[x].Owner);
                            actionData[index].pkc.push(pkc);
                        }
                        actionData[index].discardtiles = new Array();
                        for (var x = 0; x < this.m_PlayerData[m].m_ActionHistory.length; ++x) {
                            actionData[index].discardtiles.push(this.m_PlayerData[m].m_ActionHistory[x]);
                        }
                        actionData[index].hasstatus = new Array();
                        if (this.m_PlayerData[m].isTing == true) {
                            actionData[index].hasstatus.push(g_ScorePointTypeDef.TianTing);
                        }
                        if (this.m_PlayerData[m].isChong == true) {
                            actionData[index].hasstatus.push(g_ScorePointTypeDef.ChongFengJi);
                        }
                        if (this.m_PlayerData[m].isZe == true) {
                            actionData[index].hasstatus.push(g_ScorePointTypeDef.ZeRenJiVictim);
                        }
                        actionData[index].tiles = new Array();
                        for (var x = 0; x < this.m_PlayerData[m].m_CardsInHand.length; ++x) {
                            actionData[index].tiles.push(this.m_PlayerData[m].m_CardsInHand[x]);
                        }
                    }
                }
                    break;

                case GameActionDef.DaPai:
                {
                    actionData.ACTION = ActionDef.PlayCard;
                    actionData.MSG_RET = 0;
                    actionData.actuid = sequenceData.actuid;
                    actionData.param = sequenceData.param;
                    this.doAction(sequenceData.actuid, sequenceData.actstatus, sequenceData.param);
                }
                    break;

                default:
                    break;
            }

            var msg = JSON.stringify(actionData);

            return msg;
        };

        _instance.playSequence = function(index) {
            console.log("play sequence: " + index + "/" + this.m_MessageQuene.length);
            var msg = "";
            if (index < this.m_MessageQuene.length) {
                console.log("typeof this.m_MessageQuene[index] = " + typeof this.m_MessageQuene[index]);
                if (typeof this.m_MessageQuene[index] == "string") {
                    console.log("this.m_MessageQuene[" + index + "] = " + this.m_MessageQuene[index]);
                    if (this.m_MessageQuene[index] == "RoundStart") {
                        msg = this.roundStart(this.m_ReplayData);
                    }
                    else if (this.m_MessageQuene[index] == "RoundEnd") {
                        this.playFinished();
                        return;
                    }
                }
                else {
                    msg = this.executeData(this.m_MessageQuene[index]);
                    console.log("step msg: " + msg);
                }

                this.m_GameRoomPlayback.onReceiveMessage(msg);
            }
            else {
                this.playFinished();
            }
        };

        _instance.onLogicUpdate = function(deltaTime) {
            if (this.m_CurrentReplayStatus == ReplayStatusDef.Playing) {
               //if (this.m_DoneStep >= this.m_CurrentStep) { picard
			   if(true){
                    var curTime = new Date().getTime();
                    if ((curTime - this.m_LastStepExecuteTime) >= (this.m_1XSpeed / this.m_PlaySpeed)) {
                        this.m_CurrentStep++;
                        this.m_LastStepExecuteTime = curTime;
                        this.playSequence(this.m_CurrentStep);
                    }
                }
            }
        };

        _instance.playFinished = function () {
            this.Stop();
            g_RootLayer.UnsubscribleUpdate(this);
            //g_RootLayer.showMessageBox("回访结束", "提示", CommonButtonTypeDef.OK, null, null, this, "ClosePlayback")
        };

        _instance.commonDialogCallback = function(buttonType, tag) {
            if (buttonType == CommonButtonTypeDef.OK) {
                if (tag == "ClosePlayback") {
                    this.m_GameRoomPlayback.removeFromParent(true);
                    jsReplayServer.closeShareInstance();
                }
            }
        };

        return _instance;
    }
};