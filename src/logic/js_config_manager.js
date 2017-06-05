/**
 * Created by pengchunwu on 2017/3/13.
 */

if (typeof LanguageTypeDef == "undefined" ) {
    var LanguageTypeDef = {};
    LanguageTypeDef.Mandarin = 0;
    LanguageTypeDef.GuiYang = 1;
};

if (typeof PredefineErrorMessage == "undefined") {
    var PredefineErrorMessage = {};
    PredefineErrorMessage[10004] = "游戏运行错误，请退出游戏重新进入【错误码：10004】。";
    PredefineErrorMessage[10009] = "登录游戏失败，请退出游戏重新进入【错误码：10009】。";
    PredefineErrorMessage[10020] = "您未成功登录游戏，请退出游戏重新进入【错误码：10020】。";
    PredefineErrorMessage[10021] = "您的信息还保留在原房间中，请退出游戏重新进入【错误码：10021】。";
    PredefineErrorMessage[10022] = "您所拥有的钻石数量不足，请先购买足够的钻石【错误码：10022】。";
    PredefineErrorMessage[10023] = "您所输入的房间号不存在，请输入正确的房间号【错误码：10023】。";
    PredefineErrorMessage[10024] = "您所输入的房间人数已满，请创建新房间或加入其他房间【错误码：10024】。";
    PredefineErrorMessage[10025] = "您未成功读取已开始的牌局信息，请退出游戏重新进入【错误码：10025】。";
}

var jsConfigManager = {
    createNew : function () {
        var _instance = {};
		var sys = cc.sys;
        _instance.LanguageType = LanguageTypeDef.GuiYang;
        _instance.MusicVolume = 0;
        _instance.SoundVolume = 50;
        _instance.MusicOn = true;
        _instance.SoundOn = true;
        _instance.IsZhenDong = 1;
        _instance.IsGPS = 1;

        _instance.CreatePrice = {};
        _instance.IAP = [];
        _instance.ServerConfig = {};
        _instance.RoomServerList = new Array();

        _instance.CreateRoom_Round = 8;
        _instance.CreateRoom_PlayerSet = 4;
        _instance.CreateRoom_GameMode = 1;
        _instance.CreateRoom_GameModeOptions = 0;
        _instance.CreateRoom_LianZhuangType = 1;
        _instance.CreateRoom_ScoreType = 1;

        _instance.SaveConfig = function () {
            sys.localStorage.setItem("LanguageType", this.LanguageType);
            sys.localStorage.setItem("MusicVolume", this.MusicVolume);
            sys.localStorage.setItem("SoundVolume", this.SoundVolume);
            sys.localStorage.setItem("IsZhenDong", this.IsZhenDong);
            sys.localStorage.setItem("IsGPS", this.IsGPS);

            /*
             var value = _instance.SoundOn == true ? 1 : 0;
             sys.localStorage.setItem("SoundOn", value);
             value = _instance.MusicOn == true ? 1 : 0;
             sys.localStorage.setItem("MusicOn", value);
             */
            sys.localStorage.setItem("CreateRoom_Round", this.CreateRoom_Round);
            sys.localStorage.setItem("CreateRoom_PlayerSet", this.CreateRoom_PlayerSet);
            sys.localStorage.setItem("CreateRoom_GameMode", this.CreateRoom_GameMode);
            sys.localStorage.setItem("CreateRoom_GameModeOptions", this.CreateRoom_GameModeOptions);
            sys.localStorage.setItem("CreateRoom_LianZhuangType", this.CreateRoom_LianZhuangType);

        };

        _instance.LoadConfig = function () {
            cc.log("_instance.LoadConfig");
            this.LanguageType = sys.localStorage.getItem("LanguageType");
            this.SoundVolume = sys.localStorage.getItem("SoundVolume");
            this.MusicVolume = sys.localStorage.getItem("MusicVolume");
            this.IsZhenDong = sys.localStorage.getItem("IsZhenDong");
            this.IsGPS = sys.localStorage.getItem("IsGPS");
            this.SoundOn = sys.localStorage.getItem("SoundOn");
            this.CreateRoom_Round = sys.localStorage.getItem("CreateRoom_Round");
            this.CreateRoom_PlayerSet = sys.localStorage.getItem("CreateRoom_PlayerSet");
            this.CreateRoom_GameMode = sys.localStorage.getItem("CreateRoom_GameMode");
            this.CreateRoom_GameModeOptions = sys.localStorage.getItem("CreateRoom_GameModeOptions");
            this.CreateRoom_LianZhuangType = sys.localStorage.getItem("CreateRoom_LianZhuangType");
            this.CreateRoom_ScoreType = sys.localStorage.getItem("CreateRoom_ScoreType");

            /*
             if (this.SoundOn == 1)
             this.SoundOn = true;
             else
             this.SoundOn = false;
             this.MusicOn = sys.localStorage.getItem("MusicOn");
             if (this.MusicOn == 1)
             this.MusicOn = true;
             else
             this.MusicOn = false;
             */

            if (typeof this.LanguageType == "undefined" || this.LanguageType == null) {
                this.LanguageType = LanguageTypeDef.GuiYang;
            }
            if (typeof this.MusicVolume == "undefined" || this.MusicVolume == null) {
                this.MusicVolume = 100;
            }
            if (typeof this.SoundVolume == "undefined" || this.SoundVolume == null) {
                this.SoundVolume = 100;
            }
            if (typeof this.SoundOn == "undefined" || this.SoundOn == null) {
                this.SoundOn = true;
            }
            if (typeof this.MusicOn == "undefined" || this.MusicOn == null) {
                this.MusicOn = true;
            }
            if (typeof this.IsZhenDong == "undefined" || this.IsZhenDong == null) {
                this.IsZhenDong = 1;
            }
            if (typeof this.IsGPS == "undefined" || this.IsGPS == null) {
                this.IsGPS = 1;
            }
            if (typeof this.CreateRoom_Round == "undefined" || this.CreateRoom_Round == null) {
                this.CreateRoom_Round = 8;
            }
            if (typeof this.CreateRoom_PlayerSet == "undefined" || this.CreateRoom_PlayerSet == null) {
                this.CreateRoom_PlayerSet = 4;
            }
            if (typeof this.CreateRoom_GameMode == "undefined" || this.CreateRoom_GameMode == null) {
                this.CreateRoom_GameMode = 1;
            }
            if (typeof this.CreateRoom_GameModeOptions == "undefined" || this.CreateRoom_GameModeOptions == null) {
                this.CreateRoom_GameModeOptions = 0;
            }
            if (typeof this.CreateRoom_LianZhuangType == "undefined" || this.CreateRoom_LianZhuangType == null) {
                this.CreateRoom_LianZhuangType = 1;
            }
            if (typeof this.CreateRoom_ScoreType == "undefined" || this.CreateRoom_ScoreType == null) {
                this.CreateRoom_ScoreType = 1;
            }

            var serverList = sys.localStorage.getItem("ServerList");
            console.log("serverList = " + serverList);
            if (typeof serverList != "undefined" && serverList != null && serverList != "[]" && serverList != "") {
                this.LoadServerList(serverList);
            }
            else
            {
                // 加载本地保存的服务器列表
                cc.loader.loadTxt(res.server_list_csd, function (errorCode, data) {
                    var config = JSON.parse(data);
                    g_ConfigManager.RoomServerList = new Array();
                    for (var m = 0; m < config.length; ++m) {
                        var serverData = {};
                        serverData.IP = config[m].address;
                        serverData.Port = config[m].port;
                        serverData.Alive = true;
                        g_ConfigManager.RoomServerList.push(serverData);
                    }
                });
            }

            // 加载服务器地址配置
            cc.loader.loadTxt(res.server_config_csd, function (errorCode, data) {
                var config = JSON.parse(data);
                for (var key in config)
                {
                    g_ConfigManager.ServerConfig[key] = config[key];
					alert(config[key]);
					//config[key] http://gymj.331wan.com/gymj/price
                    ResourceManager.LoadDataFromURL(config[key], "g_ConfigManager", "LoadConfigFromURL");
                }
            });

        };

        _instance.LoadConfigFromURL = function (url, data) {
            console.log("LoadConfigFromURL: " + url);
            console.log("Data: " + data);

            if (url == this.ServerConfig["Shopping"]) {
                try {
                    var jsonData = JSON.parse(data);
                    if (typeof jsonData.price != "undefined" && jsonData.price != null) {
                        for (var i = 0; i < jsonData.price.length; ++i) {
                            this.CreatePrice[jsonData.price[i]] = jsonData.price[i + 1];
                            i++;
                        }
                    }

                    if (typeof jsonData.iap != "undefined" && jsonData.iap != null) {
                        for (var i = 0; i < jsonData.iap.length; ++i) {
                            this.IAP[i] = {};
                            this.IAP[i].ProductID = jsonData.iap[i][0];
                            this.IAP[i].Price = jsonData.iap[i][1];
                            this.IAP[i].Reward = jsonData.iap[i][2];
                            this.IAP[i].Gift = jsonData.iap[i][3];
                            this.IAP[i].AppleID = jsonData.iap[i][4];
                            this.IAP[i].FirstReward = jsonData.iap[i][5];
                        }
                    }
                }
                catch (err)
                {
                    console.log("can not download from:" + url);
                }
            }
            else if (url == this.ServerConfig["ServerList"]){
                try {
                    if (data != "") {
                        var jsonData = JSON.parse(data);
                        sys.localStorage.setItem("ServerList", data);
                        this.LoadServerList(data)
                    }
                }
                catch (err)
                {
                    console.log("can not download from:" + url);
                    // 加载本地保存的服务器列表
                    cc.loader.loadTxt(res.server_list_csd, function (errorCode, data) {
                        var config = JSON.parse(data);
                        g_ConfigManager.RoomServerList = new Array();
                        for (var m = 0; m < config.length; ++m) {
                            var serverData = {};
                            serverData.IP = config[m].address;
                            serverData.Port = config[m].port;
                            serverData.Alive = true;
                            g_ConfigManager.RoomServerList.push(serverData);
                        }
                    });
                }
            }
        };

        _instance.FormatErrorMessage = function(errorCode) {
            if (typeof PredefineErrorMessage[errorCode] == "undefined") {
                return "游戏运行错误，请退出游戏重新进入【错误码：" + errorCode + "】";
            }
            else {
                return PredefineErrorMessage[errorCode];
            }
        };

        _instance.LoadServerList = function(data) {
            g_ConfigManager.RoomServerList = new Array();

            var jsonData = JSON.parse(data);
            for (var m = 0; m < jsonData.length; ++m)
            {
                var serverData = {};
                serverData.IP = jsonData[m].address;
                serverData.Port = jsonData[m].port;
                serverData.Alive = true;

                g_ConfigManager.RoomServerList.push(serverData);
            }
        };

        return _instance;
    }
};

