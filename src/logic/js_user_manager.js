/**
 * Created by pengchunwu on 2017/2/16.
 */
var jsUserManager = {

    createNew : function() {
        console.log("create new jsUserManager");
        var _instance = {};
        _instance.m_ConnectCount = 0;
        _instance.m_MaxConnectLimit = 3;
        _instance.m_ReconnectDelay = 2000;
        _instance.m_LastConnectTime = 0;
        _instance.m_NeedReconnect = false;
        _instance.m_UserID = 0;
        _instance.m_NickName = "";
        _instance.m_Sex = 0;
        _instance.m_PortraitURL = "";
        _instance.m_Money = 0;
        _instance.m_Ip = "127.0.0.1";
        //_instance.m_Version = UserManager.GetSVNVersion();
		_instance.m_Version = 0;
        _instance.m_Token = "";
        _instance.m_Longitude = 0;
        _instance.m_Latitude = 0;
        _instance.m_FirstPay = 0;
        _instance.m_RoomData = {};
        _instance.m_RoomData.roomId = 0;
        _instance.m_RoomData.roomToken = "";
        _instance.m_RoomData.roomServerIP = "";
        _instance.m_RoomData.roomServerPort = 0;
        _instance.m_RoomData.maxPlayer = 4;
        _instance.m_RoomData.maxRound = 0;
        _instance.m_RoomData.tickets = 0;
        _instance.m_RoomData.creator = 0;
        _instance.m_RoomData.gameMode = 0;
        _instance.m_RoomData.gameModeOptions = 0;
        _instance.m_RoomData.lianZhuangType = 0;
        _instance.m_RoomData.scoreType = 0;

        cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function () {
            console.log("cc.game.EVENT_HIDE");
        });

        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
            console.log("cc.game.EVENT_SHOW");
            //location.reload();
            /*
             if (g_NetworkManager.m_ServerType == ServerTypeDef.GameServer) {
             NetworkManager.ConnectToGameServer(g_UserManager.m_RoomData.roomServerIP, g_UserManager.m_RoomData.roomServerPort);
             }
             else if (g_NetworkManager.m_ServerType == ServerTypeDef.RoomServer)
             {
             NetworkManager.ConnectToRoomServer();
             }
             */
        });

        _instance.m_RoomData.reset = function () {
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
        },

            _instance.m_PlayerData = new Array(4);
        for (var i = 0; i < 4; ++i)
        {
            _instance.m_PlayerData[i] = {};
            _instance.m_PlayerData[i].m_UserID = -1;
            _instance.m_PlayerData[i].m_NickName = "";
            _instance.m_PlayerData[i].m_PortriatURL = "";
            _instance.m_PlayerData[i].m_Sex = 1;
            _instance.m_PlayerData[i].m_Ip = "";
            _instance.m_PlayerData[i].m_Score = 0;
            _instance.m_PlayerData[i].m_Offline = false;
            _instance.m_PlayerData[i].m_Longitude = 0;
            _instance.m_PlayerData[i].m_Latitude = 0;
            _instance.m_PlayerData[i].m_GameStatus = {};
            _instance.m_PlayerData[i].m_GameStatus.isZhuang = false;
            _instance.m_PlayerData[i].m_GameStatus.isChong = false;
            _instance.m_PlayerData[i].m_GameStatus.isTing = false;
            _instance.m_PlayerData[i].m_GameStatus.isZe = false;
            _instance.m_PlayerData[i].m_GameStatus.lastStatus = 0;
            _instance.m_PlayerData[i].m_GameStatus.isReady = false;
            _instance.m_PlayerData[i].m_GameStatus.quemen = -1;

            _instance.m_PlayerData[i].m_GameStatus.reset = function () {
                this.isZhuang = false;
                this.isChong = false;
                this.isTing = false;
                this.isZe = false;
                this.lastStatus = 0;
                this.isReady = false;
                this.quemen = -1;
            },

                _instance.m_PlayerData.reset = function () {
                    for (var i = 0; i < 4; +i) {
                        this[i].m_UserID = -1;
                        this[i].m_NickName = "";
                        this[i].m_PortriatURL = "";
                        this[i].m_Sex = 1;
                        this[i].m_Ip = "";
                        this[i].m_Score = 0;
                        this[i].m_Offline = false;
                        this[i].m_Longitude = 0;
                        this[i].m_Latitude = 0;
                        this[i].m_GameStatus.reset();
                    }
                },

                _instance.reset = function () {
                    _instance.m_RoomData.reset();
                    _instance.m_PlayerData.reset();
                },

                _instance.SaveData = function () {
                    var saveData = {};
                    saveData.UserID = this.m_UserID;
                    var str = JSON.stringify(saveData);
                    sys.localStorage.setItem("save_data", str);
                    console.log("save data: " + str);
                },

                _instance.LoadData = function () {
                    var str = sys.localStorage.getItem("save_data");
                    if (str != "undefined" && str != null && str != "") {
                        var saveData = JSON.parse(str);
                        if (saveData.UserID != "undefined" && saveData.UserID != null) {
                            this.m_UserID = saveData.UserID;
                        }
                        else {
                            this.m_UserID = 0;
                        }
                    }
                }
        };
        _instance.m_RoomData.roomData = new Array();
        _instance.m_GameServerConnectedCallback = null;
        _instance.m_GameServerDisconnectCallback = null;

        _instance.getPlayerCount = function() {
            var count = 0;
            for (var i = 0; i < this.m_PlayerData.length; ++i)
            {
                if (this.m_PlayerData[i].m_UserID > 0)
                    count++;
            }

            return count;
        };

        _instance.getMyselfPosition = function () {
            var index = this.getPlayerPosition(this.m_UserID);
            return index;
        };

        _instance.getPlayerPosition = function (userId) {
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
        };

        _instance.getPlayerDataByPosition = function (pos) {
            return this.m_PlayerData[pos];
        };

        _instance.getPlayerDataByUIPosition = function (pos) {
            if (pos == 0)
                return this.getPlayerDataByPosition(this.getMyselfPosition());
            else {
                var myselfPosition = this.getMyselfPosition();
                return this.getPlayerDataByPosition((myselfPosition + pos) % g_UserManager.m_RoomData.maxPlayer);
            }

        };

        _instance.onReceiveMessage = function (action, msgData) {
            if (msgData.MSG_RET != 0) {
                g_RootLayer.closeMasks();
            }

            if (action == ActionDef.Login) {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), CommonButtonTypeDef.OK, null, null, this, "BackToLogin");
                    g_RootLayer.hideMask();
                    return;
                }

                this.m_UserID = msgData.UID;
                this.m_NickName = msgData.nickname;
                this.m_Sex = msgData.sex;
                this.m_Ip = msgData.ip;
                this.m_PortraitURL = msgData.avatar;
                this.m_Money = msgData.tickets;
                this.m_FirstPay = msgData.firstpay;
                this.m_Longitude = msgData.longitude;
                this.m_Latitude = msgData.latitude;
                if (this.m_Sex == "1")
                    g_AudioManager._sex = SexType.nan;
                //g_AudioManager.playOwnerVoice(VoiceType.Msg1);
                this.SaveData();

                if (msgData.roomid > 0) {
                    this.m_RoomData.roomId = msgData.roomid;

                    var request = {};
                    request.ACTION = ActionDef.GetRoomInfo;
                    request.MSG_ID = g_NetworkManager.NextMessageID();
                    request.UID = this.m_UserID;
                    request.roomid = parseInt(this.m_RoomData.roomId);

                    var json = JSON.stringify(request);
                    g_NetworkManager.sendMessage(json, ActionDef.GetRoomInfo, request.MSG_ID);
                }
                else {
                    g_RootLayer.switchScene(ScenePredefineName.Entry);
                }
            }
            else if (action == ActionDef.CreateRoomForRoomServer)
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }

                // create room successs
                this.m_RoomData.roomId = msgData.room[0];
                this.m_RoomData.roomToken = msgData.room[1];
                this.m_RoomData.roomServerIP = msgData.room[2];
                this.m_RoomData.roomServerPort = msgData.room[3];
                this.m_RoomData.maxRound = msgData.room[4];
                this.m_RoomData.maxPlayer = msgData.room[5];
                this.m_RoomData.tickets = msgData.room[6];
                this.m_RoomData.creator = msgData.room[7];
                this.m_RoomData.gameMode = msgData.room[8];
                this.m_RoomData.gameModeOptions = msgData.room[9];
                this.m_RoomData.lianZhuangType = msgData.room[10];
                this.m_RoomData.scoreType = msgData.room[11];

                this.m_RoomData.roomData = new Array();
                this.m_RoomData.roomData.push(msgData.room[0]);
                this.m_RoomData.roomData.push(msgData.room[1]);
                this.m_RoomData.roomData.push(msgData.room[2]);
                this.m_RoomData.roomData.push(msgData.room[3]);
                this.m_RoomData.roomData.push(msgData.room[4]);
                this.m_RoomData.roomData.push(msgData.room[5]);
                this.m_RoomData.roomData.push(msgData.room[6]);
                this.m_RoomData.roomData.push(msgData.room[7]);
                this.m_RoomData.roomData.push(msgData.room[8]);
                this.m_RoomData.roomData.push(msgData.room[9]);
                this.m_RoomData.roomData.push(msgData.room[10]);
                this.m_RoomData.roomData.push(msgData.room[11]);

                NetworkManager.ConnectToGameServer(g_UserManager.m_RoomData.roomServerIP, g_UserManager.m_RoomData.roomServerPort);
            }
            else if (action == ActionDef.CreateRoomForGameServer)
            {
                if (msgData.MSG_RET != 0) {
                        g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示", CommonButtonTypeDef.OK, null, null, this, "BackToLogin");
                    return;
                }

                // create room successs
                this.m_RoomData.roomId = msgData.roomdetail[0];
                this.m_RoomData.roomToken = msgData.roomdetail[1];
                this.m_RoomData.maxRound = msgData.roomdetail[2];
                this.m_RoomData.maxPlayer = msgData.roomdetail[3];
                this.m_RoomData.tickets = msgData.roomdetail[4];
                this.m_RoomData.creator = msgData.roomdetail[5];
                this.m_RoomData.gameMode = msgData.roomdetail[6];
                this.m_RoomData.gameModeOptions = msgData.roomdetail[7];
                this.m_RoomData.lianZhuangType = msgData.roomdetail[8];
                this.m_RoomData.scoreType = msgData.roomdetail[9];
                this.m_PlayerData[0].m_UserID = msgData.roomdetail[10][0];
                this.m_PlayerData[1].m_UserID = msgData.roomdetail[10][1];
                this.m_PlayerData[2].m_UserID = msgData.roomdetail[10][2];
                this.m_PlayerData[3].m_UserID = msgData.roomdetail[10][3];

                g_RootLayer.switchScene(ScenePredefineName.GameRoom);
            }
            else if (action == ActionDef.GetRoomInfo)
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    g_RootLayer.switchScene(ScenePredefineName.Entry);
                    return;
                }

                this.m_RoomData.roomId = msgData.room[0];
                this.m_RoomData.roomToken = msgData.room[1];
                this.m_RoomData.roomServerIP = msgData.room[2];
                this.m_RoomData.roomServerPort = msgData.room[3];
                this.m_RoomData.maxRound = msgData.room[4];
                this.m_RoomData.maxPlayer = msgData.room[5];
                this.m_RoomData.tickets = msgData.room[6];
                this.m_RoomData.creator = msgData.room[7];
                this.m_RoomData.gameMode = msgData.room[8];
                this.m_RoomData.gameModeOptions = msgData.room[9];
                this.m_RoomData.lianZhuangType = msgData.room[10];
                this.m_RoomData.scoreType = msgData.room[11];

                this.m_RoomData.roomData = new Array();
                this.m_RoomData.roomData.push(msgData.room[0]);
                this.m_RoomData.roomData.push(msgData.room[1]);
                this.m_RoomData.roomData.push(msgData.room[2]);
                this.m_RoomData.roomData.push(msgData.room[3]);
                this.m_RoomData.roomData.push(msgData.room[4]);
                this.m_RoomData.roomData.push(msgData.room[5]);
                this.m_RoomData.roomData.push(msgData.room[6]);
                this.m_RoomData.roomData.push(msgData.room[7]);
                this.m_RoomData.roomData.push(msgData.room[8]);
                this.m_RoomData.roomData.push(msgData.room[9]);
                this.m_RoomData.roomData.push(msgData.room[10]);
                this.m_RoomData.roomData.push(msgData.room[11]);

                NetworkManager.ConnectToGameServer(g_UserManager.m_RoomData.roomServerIP, g_UserManager.m_RoomData.roomServerPort);
            }
            else if (action == ActionDef.JoinRoom)
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    g_RootLayer.switchScene(ScenePredefineName.Entry);
                    NetworkManager.ConnectToRoomServer();
                    return;
                }

                this.m_PlayerData[0].m_UserID = msgData.roomdetail[10][0];
                this.m_PlayerData[1].m_UserID = msgData.roomdetail[10][1];
                this.m_PlayerData[2].m_UserID = msgData.roomdetail[10][2];
                this.m_PlayerData[3].m_UserID = msgData.roomdetail[10][3];

                g_RootLayer.switchScene(ScenePredefineName.GameRoom);
            }
            else if (action == ActionDef.RejoinRoom) {
                if (msgData.MSG_RET != 0) {
                        //g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                        //g_RootLayer.switchScene(ScenePredefineName.Entry);
                        //NetworkManager.ConnectToRoomServer();
                        g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示", CommonButtonTypeDef.OK, null, null, this, "BackToLogin");
                    return;
                }

                g_RootLayer.switchScene(ScenePredefineName.GameRoom);
                g_RootLayer.m_CurrentScene.requestSyncData();
            }
            else if (action == ActionDef.UpdateTicket)
            {
                var diff = msgData.addtickets;
                this.m_Money = msgData.tickets;
                g_UserManager.m_FirstPay = msgData.firstpay;
                if (diff > 0)
                    g_RootLayer.showMessageBox("你获得了" + diff + "钻石", "提示");
            }
            else if (action == ActionDef.HeartBeat) {
                if (typeof msgData.tickets != "undefined" && isNaN(parseInt(msgData.tickets)) == false) {
                    this.m_Money = msgData.tickets;
                }
            }

        };

        _instance.onGameServerConnected = function () {
            this.m_ConnectCount = 0;

            if (this.m_GameServerConnectedCallback != null) {
                this.m_GameServerConnectedCallback.onGameServerConnected();
            }
            else {
                console.log("UserManager->onGameServerConnected")
                var msg = {};
                msg.ACTION = ActionDef.RejoinRoom;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = this.m_UserID;
                msg.roomid = this.m_RoomData.roomId;
                g_RootLayer.setGpsMsg(msg);

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.RejoinRoom, msg.MSG_ID);
            }
        };

        _instance.onGameServerDisconnected = function () {
            if (this.m_GameServerDisconnectCallback == null) {
                this.m_ConnectCount += 1;
                if (this.m_ConnectCount > this.m_MaxConnectLimit) {
                    this.m_NeedReconnect = false;
                    g_RootLayer.showMessageBox("无法连接到服务器，请稍后再试。", "提示", CommonButtonTypeDef.OK, null, null, this, "BackToLogin");
                }
                else {
                    this.m_LastConnectTime = new Date().getTime();
                    this.m_NeedReconnect = true;
                }
            }
            else {
                this.m_GameServerDisconnectCallback.onGameServerDisconnected();
            }
        };

        _instance.onRoomServerConnected = function () {
            this.m_ConnectCount = 0;
            var msg = {};
            msg.ACTION = ActionDef.Login;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = this.m_UserID;
            msg.version = this.m_Version;
            msg.token = this.m_Token;

            cc.log("+++++++SSSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEE " + msg.ACTION + " " + msg.MSG_ID + " " + msg.UID + " " + msg.version + " " + msg.token)
            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.Login, msg.MSG_ID);
        };

        _instance.onRoomServerDisconnected = function () {
            console.log("_instance.onRoomServerDisconnected");
            this.m_ConnectCount += 1;
            if (this.m_ConnectCount > this.m_MaxConnectLimit) {
                this.m_NeedReconnect = false;
                g_RootLayer.showMessageBox("无法连接到服务器，请稍后再试。", "提示", CommonButtonTypeDef.OK, null, null, this, "BackToLogin");
            }
            else {
                this.m_LastConnectTime = new Date().getTime();
                this.m_NeedReconnect = true;
            }
        };

        _instance.onSocketError = function () {

        };

        _instance.PassportLogined = function () {
            g_RootLayer.showLoginMask();
            NetworkManager.ConnectToRoomServer();
        };

        _instance.commonDialogCallback = function (buttonType, tag) {
            if (buttonType == CommonButtonTypeDef.OK) {
                if (tag == "BackToLogin") {
                    g_RootLayer.logout();
                }
            }
        };

        _instance.onLogicUpdate = function (deltaTime) {
            if (this.m_NeedReconnect == true)
            {
                var curTime = new Date().getTime();
                if (curTime - this.m_LastConnectTime > this.m_ReconnectDelay) {
                    if (g_NetworkManager.m_ServerType == ServerTypeDef.GameServer) {
                        console.log("ConnectToGameServer");
                        NetworkManager.ConnectToGameServer(g_UserManager.m_RoomData.roomServerIP, g_UserManager.m_RoomData.roomServerPort);
                    }
                    else if (g_NetworkManager.m_ServerType == ServerTypeDef.RoomServer) {
                        console.log("ConnectToRoomServer");
                        NetworkManager.ConnectToRoomServer();
                    }
                    else {
                        g_RootLayer.showMessageBox("无法连接到服务器，请稍后再试。", "提示", CommonButtonTypeDef.OK, null, null, this, "BackToLogin");
                    }
                    this.m_NeedReconnect = false;
                }
            }
        };

        _instance.onWeChatShareSuccessful = function () {
            var request = {};
            request.ACTION = ActionDef.DoShare;
            request.MSG_ID = g_NetworkManager.NextMessageID();
            request.UID = g_UserManager.m_UserID;

            var json = JSON.stringify(request);
            g_NetworkManager.sendMessage(json, ActionDef.DoShare, request.MSG_ID);

        };


        _instance.LoadData();

        return _instance;
    }
};