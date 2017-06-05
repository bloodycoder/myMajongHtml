/**
 * Created by pengchunwu on 2017/2/15.
 */
if (typeof ActionDef == "undefined")
{
    var ActionDef = {};
    ActionDef.Login = 501;                          // 登录
    ActionDef.HeartBeat = 503;                      // 心跳
    ActionDef.DoShare = 504;                        // 分享
    ActionDef.CreateRoomForRoomServer = 1001;   // 请求创建房间（RoomServer）
    ActionDef.GetRoomInfo = 1002;                   // 获取房间信息（RoomServer)
    ActionDef.CreateRoomForGameServer = 1003;       // 通知创建房间（GameServer）
    ActionDef.JoinRoom = 1004;                      //  加入房间

    ActionDef.RequestQuitRoom = 1005;               // 请求离开房间（游戏开始前）
    ActionDef.ForceQuitRoom = 1006;                 // 服务端通知强制离开房间

    ActionDef.RequestQuitVote = 1007;               // 请求离开房间（游戏开始后）
    ActionDef.InvokeQuitVote = 1008;                // 通知客户端显示退出房间投票UI
    ActionDef.CastQuitVote = 1009;                  // 客户端投票
    ActionDef.SyncVoteData = 1010;                  // 同步投票数据

    ActionDef.PlayPredefineVoice = 1011;            // 客户端通知服务器播放常用语
    ActionDef.BroadcastPredefineVoice = 1012;       // 某玩家发出常用语
    ActionDef.PlayVoice = 1013;                         // 客户端通知服务器播放音频短消息
    ActionDef.BroadcastVoice = 1014;                    // 某玩家发出音频短消息
    ActionDef.PlayEmotion = 1017;                       // 客户端通知服务器播放表情
    ActionDef.BroadcastEmotion = 1018;                  // 某玩家发出表情

    ActionDef.HistoryRecord = 1015;                     // 获取战绩历史记录
    ActionDef.RoomHistoryRecord = 1016;                 // 获取某次房间内记录列表
    ActionDef.DetailRecord = 1019;                      // 获取莫局回放数据

    ActionDef.RoundStart = 1101;                        // 牌局开始
    ActionDef.StartTimer = 1102;                        // 重置计时器（同时强制玩家进入等待状态）
    ActionDef.DrawCard = 1103;                          // 摸牌
    ActionDef.SetActionStatus = 1104;                   // 设置玩家操作状态
    ActionDef.PlayCard = 1105;                          // 出牌
    ActionDef.ActionResult = 1106;                      // 玩家操作结果（广播）
    ActionDef.RoundEnd = 1107;                          // 牌局结算
    ActionDef.SyncData = 1108;                          // 强制同步牌局数据
    ActionDef.ImReady = 1109;                           // 玩家进入准备ok状态（可开下局）
    ActionDef.RejoinRoom = 1110;                        // 重新加入房间
    ActionDef.PlayerLinkStatus = 1111;                  // 玩家连接状态变化（是否掉线）
    ActionDef.PlayerReadyStatus = 1112;                 // 玩家装备状态变化
    ActionDef.SyncPlayerData = 1113;                    // 同步玩家信息
    ActionDef.PlayerQuit = 1114;                        // 玩家离开房间

    ActionDef.RequestCreateChatRoom = 1123;             // 申请创建语音聊天
    ActionDef.InvokeCreateChatRoom = 1116;              // 服务端通知开始语音聊天室创建投票
    ActionDef.CastCreateChatRoom = 1117;                // 投票
    ActionDef.SyncCreateChatRoomData = 1118;            // 服务器推送同步投票数据
    ActionDef.CreateChatRoom = 1119;                    // 创建语音聊天室（未使用）
    ActionDef.QuitChatRoom = 1120;                      // 请求解散语音聊天室
    ActionDef.QuitChatRoomNotice = 1121;               // 服务端推送解散语音聊天室通知
    ActionDef.GetCreateChatRoomData = 1122;             // 获取当前语音聊天室投票情况

    ActionDef.GetOrderId = 3001;                        // 获取订单ID
    ActionDef.UpdateTicket = 3002;                      // 更新钻石数据

    ActionDef.XuanQueState = 1124;                      // 同步选缺状态

    ActionDef.ForceLogout = 2005;                       // 强制登出

    // club
    ActionDef.GetClubInfo = 1301;                       // 获取俱乐部信息
    ActionDef.GetMenberList = 1302;                 // 获取俱乐部明细数据（不含授信数据）
    ActionDef.JoinClub = 1303;                          // 加入俱乐部
    ActionDef.RemoveClubMember = 1304;                  // 移除俱乐部成员
    ActionDef.ModifyClubAnnouncement = 1305;            // 修改俱乐部公告
    ActionDef.GrantCredit = 1306;                       // 授信
    ActionDef.TakebackCredit = 1307;                       // 撤销授信
    ActionDef.GetClubMemberDetailList = 1308;                       // 获取俱乐部明细数据
    ActionDef.GetClubMyselfnfo = 1309;                       // 获取自身的俱乐部明细数据

};

if (typeof ServerTypeDef == "undefined") {
    var ServerTypeDef = {};
    ServerTypeDef.Unknown = 0;
    ServerTypeDef.RoomServer = 1;
    ServerTypeDef.GameServer = 2;
};

var jsNetworkManager = {
    createNew : function () {
        var _instance = {};
        _instance.Callbacks = {};
        _instance.m_MessageID = 1;
        _instance.m_Connected = false;
        _instance.m_LastHeartBeat = 0;
        _instance.m_RoomServerIndex = 0;
        _instance.m_CurrentRoomServerIP = "";
        _instance.m_CurrentRoomServerPort = "";
        _instance.m_CurrentServerIP = "";
        _instance.m_CurrentServerPort = "";
        _instance.m_RetryCount = 0;
        _instance.m_MaxRetryCount = 3;
        _instance.m_RequestList = {};
        _instance.m_MaxLag = 0;
        _instance.m_MinLag = 60000;
        _instance.m_LastLag = 0;

        _instance.SelectRoomServer = function () {
            for (var m = 0; m < g_ConfigManager.RoomServerList.length; ++m) {
                if (g_ConfigManager.RoomServerList[m].Alive == true) {

                    this.m_CurrentRoomServerIP = g_ConfigManager.RoomServerList[m].IP;
                    this.m_CurrentRoomServerPort = g_ConfigManager.RoomServerList[m].Port;
                    //this.m_CurrentRoomServerIP = "192.168.30.117";
                    //this.m_CurrentRoomServerPort = "22331";
                    //this.m_CurrentRoomServerIP = "123.207.172.12";
                    //this.m_CurrentRoomServerPort = "22338";
                    NetworkManager.SetRoomServer(this.m_CurrentRoomServerIP, this.m_CurrentRoomServerPort);
                    return true;
                }
            }

            return false;
        };

        _instance.NextMessageID = function() {
            return this.m_MessageID++;
        };

        _instance.sendMessage = function (msg, action, msgId) {
            if (typeof msgId != "undefined" && msgId != null) {
                this.m_RequestList[msgId] = new Date().getTime();
            }
            NetworkManager.SendJsonMessage(msg, action);
        },

        _instance.onReceiveMessage = function(action, msg)
        {
            var jsonData = JSON.parse(msg);
            var curTime = new Date().getTime();
            var cost = 0;
            if (typeof this.m_RequestList[jsonData.MSG_ID] != "undefined") {
                cost = parseInt(curTime - this.m_RequestList[jsonData.MSG_ID]);
                if (isNaN(cost) == false) {
                    this.m_LastLag = cost;
                    if (cost > this.m_MaxLag)
                        this.m_MaxLag = cost;
                    if (cost < this.m_MinLag)
                        this.m_MinLag = cost;
                }

                delete this.m_RequestList[jsonData.MSG_ID];
            }
            console.log("jsNetworkManager.onReceiveMessage use time " + cost + ": {ACTION: " + action  + ", " + msg +"}");

            var actionId = parseInt(action);

            if (actionId == ActionDef.ForceLogout) {
                this.closeSocket();

                g_RootLayer.showMessageBox("您的微信帐号在另一设备中登录游戏，请确认是否本人操作。", "提示", CommonButtonTypeDef.OK, null, null, this, "logout");
                return;
            }

            // UserManager process data first
            g_UserManager.onReceiveMessage(actionId, jsonData);

            if (this.Callbacks[action] != null && this.Callbacks[action] != "undefined") {
                for (i = 0; i < this.Callbacks[action].length; ++i)
                {
                    this.Callbacks[action][i].onReceiveMessage(actionId, jsonData);
                }
            }
        };

        _instance.onServerConnected = function (ip, port) {
            this.m_CurrentServerIP = ip;
            this.m_CurrentServerPort = port;
            console.log("onServerConnected: ip = " + ip + " port = " + port);
            if (ip == this.m_CurrentRoomServerIP && port == this.m_CurrentRoomServerPort) {
                this.m_ServerType = ServerTypeDef.RoomServer;
                g_UserManager.onRoomServerConnected();

                this.m_Connected = true;
            }
            else {
                this.m_RetryCount = 0;
                this.m_ServerType = ServerTypeDef.GameServer;
                g_UserManager.onGameServerConnected();

                this.m_Connected = true;
            }

            return true;
        };

        _instance.onServerDisconnected = function (ip, port) {
            this.m_CurrentServerIP = "";
            this.m_CurrentServerPort = "";
            console.log("onServerDisconnected: ip = " + ip + " port = " + port);
            if (ip == this.m_CurrentRoomServerIP && port == this.m_CurrentRoomServerPort) {
                g_UserManager.onRoomServerDisconnected();

                this.m_Connected = false;
            }
            else {
                g_UserManager.onGameServerDisconnected();

                this.m_Connected = false;
            }

            return true;
        };

        _instance.isNetworkAvailable = function () {
            if (cc.sys.os == cc.sys.OS_ANDROID)
                return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "isNetworkAvailable", "()Z");  
            else
                return true;
        },

        _instance.onServerConnectFailed = function (ip, port) {
            console.log("onServerConnectFailed: ip = " + ip + " port = " + port);
            if (ip == this.m_CurrentRoomServerIP && port == this.m_CurrentRoomServerPort) {
                for (var m = 0; m < g_ConfigManager.RoomServerList.length; ++m) {
                    console.log("g_ConfigManager.RoomServerList[" + m + "]: ip = " + g_ConfigManager.RoomServerList[m].IP + " port = " + g_ConfigManager.RoomServerList[m].Port);
                    if (g_ConfigManager.RoomServerList[m].IP == ip && g_ConfigManager.RoomServerList[m].Port == port) {
                        g_ConfigManager.RoomServerList[m].Alive = false;
                        break;
                    }
                }

                if (this.SelectRoomServer() == false)
                {
                    if (!this.isNetworkAvailable())
                        g_RootLayer.showMessageBox("请检查网络是否正常！", "提示", CommonButtonTypeDef.OK, "重新连接", null, this, "reconnect_room");
                    else
                        g_RootLayer.showMessageBox("服务器正在维护中，请稍后重试！", "提示", CommonButtonTypeDef.OK, null, null, this, "logout");
                }
                else {
                    NetworkManager.ConnectToRoomServer();
                }
            }
            else {
                console.log("this.m_RetryCount = " + this.m_RetryCount);
                if (this.m_RetryCount >= this.m_MaxRetryCount) {
                    if (!this.isNetworkAvailable())
                        g_RootLayer.showMessageBox("请检查网络是否正常！", "提示", CommonButtonTypeDef.OK, "重新连接", null, this, "reconnect_room");
                    else
                        g_RootLayer.showMessageBox("服务器正在维护中，请稍后重试！", "提示", CommonButtonTypeDef.OK, null, null, this, "logout");
                    return true;
                }

                this.m_RetryCount++;
                NetworkManager.ConnectToRoomServer();
            }
            return true;
        };

        _instance.onSocketError = function (ip, port, action, code) {
            if (ip == this.m_CurrentRoomServerIP && port == this.m_CurrentRoomServerPort) {
            }
            else {

            }
            return true;
        };

        _instance.closeSocket = function () {
            NetworkManager.CloseSocket();
            this.m_Connected = false;
        };

        _instance.onLoginSucc = function (userid, token) {
            g_UserManager.m_UserID = userid;
            g_UserManager.m_Token = token;
            sys.localStorage.setItem("wechat_account", userid);
            g_UserManager.PassportLogined(); // TODO replace the param with userid, token
        };

        _instance.onLoginSuccForDebug = function (userid, token) {
            g_UserManager.m_Token = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
            g_UserManager.PassportLogined(); // TODO replace the param with userid, token
        };

        _instance.setRoomNumber = function (number) {
            g_UserManager.m_RoomNumber = number;
            var scene = cc.Director.getInstance().getRunningScene();
            if (typeof g_RootLayer.m_CurrentScene.onGetRoomNumber != "undefined") {
                g_RootLayer.m_CurrentScene.onGetRoomNumber(number);
            }
        };

        _instance.Subscrible = function (action, callback) {
            if (this.Callbacks[action] == null || this.Callbacks[action] == "undefined")
            {
                this.Callbacks[action] = new Array();
            }
            else
            {
                for (i = 0; i < this.Callbacks[action].length; ++i)
                {
                    if (this.Callbacks[action][i] == callback)
                        return;
                }
            }

            this.Callbacks[action].push(callback);
        };

        _instance.Unsubscrible = function (action, callback) {
            if (this.Callbacks[action] == null || this.Callbacks[action] == "undefined")
            {
                return;
            }
            else
            {
                for (i = 0; i < this.Callbacks[action].length; ++i)
                {
                    if (this.Callbacks[action][i] == callback) {
                        this.Callbacks[action].splice(i, 1);
                        return;
                    }
                }
            }
        };

        _instance.HeartBeat = function () {
            if (g_UserManager.m_UserID <= 0)
                return;

            var request = {};
            request.ACTION = ActionDef.HeartBeat;
            request.MSG_ID = g_NetworkManager.NextMessageID();
            request.UID = g_UserManager.m_UserID;

            var json = JSON.stringify(request);
            this.sendMessage(json, ActionDef.HeartBeat, request.MSG_ID);

        };

        _instance.onLogicUpdate = function (deltaTime) {
            var cur = new Date().getTime();
            if (cur - this.m_LastHeartBeat > 5000 && this.m_Connected == true)
            {
                this.HeartBeat();
                this.m_LastHeartBeat = cur;
            }
        };

        _instance.commonDialogCallback = function (buttonType, tag) {
            if (buttonType == CommonButtonTypeDef.OK) {
                if (tag == "logout") {
                    g_RootLayer.logout();
                }
                else if (tag == "reconnect_room")
                    NetworkManager.ConnectToRoomServer();
            }
        };

        return _instance;
    }
};

