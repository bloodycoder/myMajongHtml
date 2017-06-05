/**
 * Created by pengchunwu on 2017/2/15.
 */
if (typeof MahJongRound == "undefined")
{
    var MahJongRound = {};
    MahJongRound.Eight = 8;
    MahJongRound.Sixthteen = 16;
}

if (typeof MahJongGameMode == "undefined")
{
    var MahJongGameMode = {};
    MahJongGameMode.Unknown = 0;
    MahJongGameMode.FangPaiJi = 1;
    MahJongGameMode.YaobaiJi = 2;
}

if (typeof MahJongGameModeOption == "undefined")
{
    var MahJongGameModeOption = {};
    MahJongGameModeOption.Unknown = 0;
    MahJongGameModeOption.BenJi = 1;
    MahJongGameModeOption.WuguJi = 2;
    MahJongGameModeOption.XingQiJi = 4;
    MahJongGameModeOption.ChuiFengJi = 8;
    MahJongGameModeOption.HuangZhuangLianZhuang = 16;
    MahJongGameModeOption.ChongFengJi3Fen = 32;

}

if (typeof MahJongLianZhuangType == "undefined")
{
    var MahJongLianZhuangType = {};
    MahJongLianZhuangType.Unknown = 0;
    MahJongLianZhuangType.NoLianZhuang = 1;
    MahJongLianZhuangType.LianZhuang = 2;
    MahJongLianZhuangType.QuanSan = 3;
}

if (typeof MahJongScoreType == "undefined")
{
    var MahJongScoreType = {};
    MahJongScoreType.Hun5Qing10 = 1;
    MahJongScoreType.Hun8Qing15 = 2;
    MahJongScoreType.Hun10Qing20 = 3;
}

var CreateRoomLayer;
CreateRoomLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        this.m_Round = g_ConfigManager.CreateRoom_Round;
        this.m_PlayerSet = g_ConfigManager.CreateRoom_PlayerSet;
        this.m_GameMode = g_ConfigManager.CreateRoom_GameMode;
        this.m_GameModeOptions = g_ConfigManager.CreateRoom_GameModeOptions;
        this.m_LianZhuangType = g_ConfigManager.CreateRoom_LianZhuangType;
        this.m_ScoreType = g_ConfigManager.CreateRoom_ScoreType;

        this.m_BtnRound1 = null;
        this.m_BtnRound2 = null;
        this.m_BtnPlayer4 = null;
        this.m_BtnPlayer3 = null;
        this.m_BtnPlayer2 = null;
        this.m_BtnGameMode1 = null;
        this.m_BtnGameMode2 = null;
        this.m_BtnGameModeOption1 = null;
        this.m_BtnGameModeOption2 = null;
        this.m_BtnGameModeOption4 = null;
        this.m_BtnGameModeOption8 = null;
        this.m_BtnGameModeOption16 = null;
        this.m_BtnGameModeOption32 = null;
        this.m_BtnLianZhuangType1 = null;
        this.m_BtnLianZhuangType2 = null;
        this.m_BtnLianZhuangType3 = null;
        this.m_BtnScoreType1 = null;
        this.m_BtnScoreType2 = null;
        this.m_BtnScoreType3 = null;
        this.m_BtnCreateRoom = null;
        this.m_BtnClose = null;
        this.waitResponse = false;

        g_NetworkManager.Subscrible(ActionDef.CreateRoomForRoomServer, this);
        g_NetworkManager.Subscrible(ActionDef.CreateRoomForGameServer, this);

        this.loadUI();

        this.refreshUI();
    },

    loadUI : function () {
        var uiNode = ccs.load(res.create_room_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_BtnPlayer4Node = rootNode.getChildByName("btn_player_4");;
        this.m_BtnPlayer4 = this.m_BtnPlayer4Node.getChildByName("btn");;
        this.m_BtnPlayer3Node = rootNode.getChildByName("btn_player_3");;
        this.m_BtnPlayer3 = this.m_BtnPlayer3Node.getChildByName("btn");;
        this.m_BtnPlayer2Node = rootNode.getChildByName("btn_player_2");;
        this.m_BtnPlayer2 = this.m_BtnPlayer2Node.getChildByName("btn");;
        this.m_BtnRound1Node = rootNode.getChildByName("btn_round_1");
        this.m_BtnRound1 = this.m_BtnRound1Node.getChildByName("btn");
        this.m_LabelRound1 = this.m_BtnRound1Node.getChildByName("title");
        this.m_BtnRound2Node = rootNode.getChildByName("btn_round_2");
        this.m_BtnRound2 = this.m_BtnRound2Node.getChildByName("btn");
        this.m_LabelRound2 = this.m_BtnRound2Node.getChildByName("title");
        this.m_BtnGameMode1Node = rootNode.getChildByName("btn_game_mode_1");
        this.m_BtnGameMode1 = this.m_BtnGameMode1Node.getChildByName("btn");
        this.m_BtnGameMode2Node = rootNode.getChildByName("btn_game_mode_2");
        this.m_BtnGameMode2 = this.m_BtnGameMode2Node.getChildByName("btn");
        this.m_BtnGameModeOption1Node = rootNode.getChildByName("btn_game_mode_option_1");
        this.m_BtnGameModeOption1 = this.m_BtnGameModeOption1Node.getChildByName("btn");
        this.m_BtnGameModeOption2Node = rootNode.getChildByName("btn_game_mode_option_2");
        this.m_BtnGameModeOption2 = this.m_BtnGameModeOption2Node.getChildByName("btn");
        this.m_BtnGameModeOption4Node = rootNode.getChildByName("btn_game_mode_option_4");
        this.m_BtnGameModeOption4 = this.m_BtnGameModeOption4Node.getChildByName("btn");
        this.m_BtnGameModeOption8Node = rootNode.getChildByName("btn_game_mode_option_8");
        this.m_BtnGameModeOption8 = this.m_BtnGameModeOption8Node.getChildByName("btn");
        this.m_BtnGameModeOption16Node = rootNode.getChildByName("btn_game_mode_option_16");
        this.m_BtnGameModeOption16 = this.m_BtnGameModeOption16Node.getChildByName("btn");
        this.m_BtnGameModeOption32Node = rootNode.getChildByName("btn_game_mode_option_32");
        this.m_BtnGameModeOption32 = this.m_BtnGameModeOption32Node.getChildByName("btn");
        this.m_BtnLianZhuangType1Node = rootNode.getChildByName("btn_lianzhuang_type_1");
        this.m_BtnLianZhuangType1 = this.m_BtnLianZhuangType1Node.getChildByName("btn");
        this.m_BtnLianZhuangType2Node = rootNode.getChildByName("btn_lianzhuang_type_2");
        this.m_BtnLianZhuangType2 = this.m_BtnLianZhuangType2Node.getChildByName("btn");
        this.m_BtnLianZhuangType3Node = rootNode.getChildByName("btn_lianzhuang_type_3");
        this.m_BtnLianZhuangType3 = this.m_BtnLianZhuangType3Node.getChildByName("btn");
        this.m_BtnScoreType1Node = rootNode.getChildByName("btn_score_option_1");;
        this.m_BtnScoreType1 = this.m_BtnScoreType1Node.getChildByName("btn");;
        this.m_BtnScoreType2Node = rootNode.getChildByName("btn_score_option_2");;
        this.m_BtnScoreType2 = this.m_BtnScoreType2Node.getChildByName("btn");;
        this.m_BtnScoreType3Node = rootNode.getChildByName("btn_score_option_3");;
        this.m_BtnScoreType3 = this.m_BtnScoreType3Node.getChildByName("btn");;
        this.m_BtnCreateRoom = rootNode.getChildByName("btn_create_room");
        this.m_BtnClose = rootNode.getChildByName("btn_close");

        this.m_LabelRound1.setString("8局（钻石X" + g_ConfigManager.CreatePrice[8] + "）");
        this.m_LabelRound2.setString("16局（钻石X" + g_ConfigManager.CreatePrice[16] + "）");

        this.m_BtnPlayer4.addTouchEventListener(this.onPlayer4Click, this);
        this.m_BtnPlayer3.addTouchEventListener(this.onPlayer3Click, this);
        this.m_BtnPlayer2.addTouchEventListener(this.onPlayer2Click, this);
        this.m_BtnRound1.addTouchEventListener(this.onRound1Click, this);
        this.m_BtnRound2.addTouchEventListener(this.onRound2Click, this);
        this.m_BtnGameMode1.addTouchEventListener(this.onGameMode1Click, this);
        this.m_BtnGameMode2.addTouchEventListener(this.onGameMode2Click, this);
        this.m_BtnGameModeOption1.addTouchEventListener(this.onGameModeOption1Click, this);
        this.m_BtnGameModeOption2.addTouchEventListener(this.onGameModeOption2Click, this);
        this.m_BtnGameModeOption4.addTouchEventListener(this.onGameModeOption4Click, this);
        this.m_BtnGameModeOption8.addTouchEventListener(this.onGameModeOption8Click, this);
        this.m_BtnGameModeOption16.addTouchEventListener(this.onGameModeOption16Click, this);
        this.m_BtnGameModeOption32.addTouchEventListener(this.onGameModeOption32Click, this);
        this.m_BtnLianZhuangType1.addTouchEventListener(this.onLianZhuangType1Click, this);
        this.m_BtnLianZhuangType2.addTouchEventListener(this.onLianZhuangType2Click, this);
        this.m_BtnLianZhuangType3.addTouchEventListener(this.onLianZhuangType3Click, this);

        this.m_BtnScoreType1.addTouchEventListener(this.onScoreType1Click, this);
        this.m_BtnScoreType2.addTouchEventListener(this.onScoreType2Click, this);
        this.m_BtnScoreType3.addTouchEventListener(this.onScoreType3Click, this);

        this.m_BtnCreateRoom.addTouchEventListener(this.onCreateRoom, this);
        this.m_BtnClose.addTouchEventListener(this.onCloseClick, this);

        g_UserManager.m_GameServerConnectedCallback = this;
        g_UserManager.m_GameServerDisconnectCallback = this;

        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);

    },

    cleanup : function()
    {
        this._super();

        g_NetworkManager.Unsubscrible(ActionDef.CreateRoomForRoomServer, this);
        g_NetworkManager.Unsubscrible(ActionDef.CreateRoomForGameServer, this);
        if (g_UserManager.m_GameServerConnectedCallback == this) {
            g_UserManager.m_GameServerConnectedCallback = null;
        }
        if (g_UserManager.m_GameServerDisconnectCallback == this) {
            g_UserManager.m_GameServerDisconnectCallback = null;
        }
    },

    onCloseClick : function(sender, eventType) {
        if (eventType == 2) {
            g_NetworkManager.Unsubscrible(ActionDef.CreateRoomForRoomServer, this);
            g_NetworkManager.Unsubscrible(ActionDef.CreateRoomForGameServer, this);
            if (g_UserManager.m_GameServerConnectedCallback == this) {
                g_UserManager.m_GameServerConnectedCallback = null;
            }
            if (g_UserManager.m_GameServerDisconnectCallback == this) {
                g_UserManager.m_GameServerDisconnectCallback = null;
            }

            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.removeFromParent(true);
        }
    },

    onRound1Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_Round = MahJongRound.Eight;
            this.refreshUI();
        }
    },

    onRound2Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_Round = MahJongRound.Sixthteen;
            this.refreshUI();
        }
    },

    onPlayer4Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_PlayerSet = 4;
            this.refreshUI();
        }
    },

    onPlayer3Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_PlayerSet = 3;
            this.refreshUI();
        }
    },

    onPlayer2Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_PlayerSet = 2;
            this.refreshUI();
        }
    },

    onGameMode1Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_GameMode = MahJongGameMode.FangPaiJi;
            this.refreshUI();
        }
    },

    onGameMode2Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_GameMode = MahJongGameMode.YaobaiJi;
            this.refreshUI();
        }
    },

    onGameModeOption1Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if ((this.m_GameModeOptions & MahJongGameModeOption.BenJi) != 0) {
                this.m_GameModeOptions = (this.m_GameModeOptions & (~MahJongGameModeOption.BenJi));
            }
            else {
                this.m_GameModeOptions = (this.m_GameModeOptions | MahJongGameModeOption.BenJi);
            }
            this.refreshUI();
        }
    },

    onGameModeOption2Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if ((this.m_GameModeOptions & MahJongGameModeOption.WuguJi) != 0) {
                this.m_GameModeOptions = (this.m_GameModeOptions & (~MahJongGameModeOption.WuguJi));
            }
            else {
                this.m_GameModeOptions = (this.m_GameModeOptions | MahJongGameModeOption.WuguJi);
            }
            this.refreshUI();
        }
    },

    onGameModeOption4Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if ((this.m_GameModeOptions & MahJongGameModeOption.XingQiJi) != 0) {
                this.m_GameModeOptions = (this.m_GameModeOptions & (~MahJongGameModeOption.XingQiJi));
            }
            else {
                this.m_GameModeOptions = (this.m_GameModeOptions | MahJongGameModeOption.XingQiJi);
            }
            this.refreshUI();
        }
    },

    onGameModeOption8Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if ((this.m_GameModeOptions & MahJongGameModeOption.ChuiFengJi) != 0) {
                this.m_GameModeOptions = (this.m_GameModeOptions & (~MahJongGameModeOption.ChuiFengJi));
            }
            else {
                this.m_GameModeOptions = (this.m_GameModeOptions | MahJongGameModeOption.ChuiFengJi);
            }
            this.refreshUI();
        }
    },

    onGameModeOption16Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if ((this.m_GameModeOptions & MahJongGameModeOption.HuangZhuangLianZhuang) != 0) {
                this.m_GameModeOptions = (this.m_GameModeOptions & (~MahJongGameModeOption.HuangZhuangLianZhuang));
            }
            else {
                this.m_GameModeOptions = (this.m_GameModeOptions | MahJongGameModeOption.HuangZhuangLianZhuang);
            }
            this.refreshUI();
        }
    },

    onGameModeOption32Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if ((this.m_GameModeOptions & MahJongGameModeOption.ChongFengJi3Fen) != 0) {
                this.m_GameModeOptions = (this.m_GameModeOptions & (~MahJongGameModeOption.ChongFengJi3Fen));
            }
            else {
                this.m_GameModeOptions = (this.m_GameModeOptions | MahJongGameModeOption.ChongFengJi3Fen);
            }
            this.refreshUI();
        }
    },

    onLianZhuangType1Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_LianZhuangType = MahJongLianZhuangType.LianZhuang;
            this.refreshUI();
        }
    },

    onLianZhuangType2Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_LianZhuangType = MahJongLianZhuangType.NoLianZhuang;
            this.refreshUI();
        }
    },

    onLianZhuangType3Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_LianZhuangType = MahJongLianZhuangType.QuanSan;
            this.refreshUI();
        }
    },

    onScoreType1Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_ScoreType = 1;
            this.refreshUI();
        }
    },

    onScoreType2Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_ScoreType = 2;
            this.refreshUI();
        }
    },

    onScoreType3Click : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.m_ScoreType = 3;
            this.refreshUI();
        }
    },

    refreshUI : function () {
        if (this.m_Round == MahJongRound.Eight)
        {
            this.m_BtnRound1Node.loadTexture("res/res/common/common_check1_pre.png");
            this.m_BtnRound2Node.loadTexture("res/res/common/common_check1_nor.png");
        }
        else if (this.m_Round == MahJongRound.Sixthteen)
        {
            this.m_BtnRound1Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnRound2Node.loadTexture("res/res/common/common_check1_pre.png");
        }

        if (this.m_PlayerSet == 4) {
            this.m_BtnPlayer4Node.loadTexture("res/res/common/common_check1_pre.png");
            this.m_BtnPlayer3Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnPlayer2Node.loadTexture("res/res/common/common_check1_nor.png");
        }
        else if (this.m_PlayerSet == 3) {
            this.m_BtnPlayer4Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnPlayer3Node.loadTexture("res/res/common/common_check1_pre.png");
            this.m_BtnPlayer2Node.loadTexture("res/res/common/common_check1_nor.png");
        }
        else if (this.m_PlayerSet == 2) {
            this.m_BtnPlayer4Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnPlayer3Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnPlayer2Node.loadTexture("res/res/common/common_check1_pre.png");
        }

        if (this.m_GameMode == MahJongGameMode.FangPaiJi)
        {
            this.m_BtnGameMode1Node.loadTexture("res/res/common/common_check1_pre.png");
            this.m_BtnGameMode2Node.loadTexture("res/res/common/common_check1_nor.png");
        }
        else
        {
            this.m_BtnGameMode1Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnGameMode2Node.loadTexture("res/res/common/common_check1_pre.png");
        }

        if ((this.m_GameModeOptions & MahJongGameModeOption.ChongFengJi3Fen) != 0)
        {
            this.m_BtnGameModeOption32Node.loadTexture("res/res/common/common_check2_pre.png");
        }
        else
        {
            this.m_BtnGameModeOption32Node.loadTexture("res/res/common/common_check2_nor.png");
        }

        if ((this.m_GameModeOptions & MahJongGameModeOption.BenJi) != 0)
        {
            this.m_BtnGameModeOption1Node.loadTexture("res/res/common/common_check2_pre.png");
        }
        else
        {
            this.m_BtnGameModeOption1Node.loadTexture("res/res/common/common_check2_nor.png");
        }

        if ((this.m_GameModeOptions & MahJongGameModeOption.WuguJi) != 0)
        {
            this.m_BtnGameModeOption2Node.loadTexture("res/res/common/common_check2_pre.png");
        }
        else
        {
            this.m_BtnGameModeOption2Node.loadTexture("res/res/common/common_check2_nor.png");
        }

        if ((this.m_GameModeOptions & MahJongGameModeOption.XingQiJi) != 0)
        {
            this.m_BtnGameModeOption4Node.loadTexture("res/res/common/common_check2_pre.png");
        }
        else
        {
            this.m_BtnGameModeOption4Node.loadTexture("res/res/common/common_check2_nor.png");
        }

        if ((this.m_GameModeOptions & MahJongGameModeOption.ChuiFengJi) != 0)
        {
            this.m_BtnGameModeOption8Node.loadTexture("res/res/common/common_check2_pre.png");
        }
        else
        {
            this.m_BtnGameModeOption8Node.loadTexture("res/res/common/common_check2_nor.png");
        }

        if ((this.m_GameModeOptions & MahJongGameModeOption.HuangZhuangLianZhuang) != 0)
        {
            this.m_BtnGameModeOption16Node.loadTexture("res/res/common/common_check2_pre.png");
        }
        else
        {
            this.m_BtnGameModeOption16Node.loadTexture("res/res/common/common_check2_nor.png");
        }

        if (this.m_LianZhuangType == MahJongLianZhuangType.NoLianZhuang)
        {
            this.m_BtnLianZhuangType1Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnLianZhuangType2Node.loadTexture("res/res/common/common_check1_pre.png");
            this.m_BtnLianZhuangType3Node.loadTexture("res/res/common/common_check1_nor.png");
        }
        else
        {
            if (this.m_LianZhuangType == MahJongLianZhuangType.QuanSan)
            {
                this.m_BtnLianZhuangType1Node.loadTexture("res/res/common/common_check1_nor.png");
                this.m_BtnLianZhuangType2Node.loadTexture("res/res/common/common_check1_nor.png");
                this.m_BtnLianZhuangType3Node.loadTexture("res/res/common/common_check1_pre.png");
            }
            else {
                this.m_BtnLianZhuangType1Node.loadTexture("res/res/common/common_check1_pre.png");
                this.m_BtnLianZhuangType2Node.loadTexture("res/res/common/common_check1_nor.png");
                this.m_BtnLianZhuangType3Node.loadTexture("res/res/common/common_check1_nor.png");
            }
        }

        if (this.m_ScoreType == MahJongScoreType.Hun5Qing10)
        {
            this.m_BtnScoreType1Node.loadTexture("res/res/common/common_check1_pre.png");
            this.m_BtnScoreType2Node.loadTexture("res/res/common/common_check1_nor.png");
            this.m_BtnScoreType3Node.loadTexture("res/res/common/common_check1_nor.png");
        }
        else
        {
            if (this.m_ScoreType == MahJongScoreType.Hun8Qing15)
            {
                this.m_BtnScoreType1Node.loadTexture("res/res/common/common_check1_nor.png");
                this.m_BtnScoreType2Node.loadTexture("res/res/common/common_check1_pre.png");
                this.m_BtnScoreType3Node.loadTexture("res/res/common/common_check1_nor.png");
            }
            else {
                this.m_BtnScoreType1Node.loadTexture("res/res/common/common_check1_nor.png");
                this.m_BtnScoreType2Node.loadTexture("res/res/common/common_check1_nor.png");
                this.m_BtnScoreType3Node.loadTexture("res/res/common/common_check1_pre.png");
            }
        }
    },

    onCreateRoom : function (sender, eventType) {
        if (eventType == 2 && this.waitResponse == false) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            var msg = {};
            msg.ACTION = ActionDef.CreateRoomForRoomServer;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.max_round = this.m_Round;
            msg.max_player = this.m_PlayerSet;
            msg.game_mode = this.m_GameMode;
            msg.game_mode_options = this.m_GameModeOptions;
            msg.lian_zhuang = this.m_LianZhuangType;
            msg.scoretype = this.m_ScoreType;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.CreateRoomForRoomServer, msg.MSG_ID);
            this.waitResponse = true;

            g_ConfigManager.CreateRoom_Round = this.m_Round;
            g_ConfigManager.CreateRoom_PlayerSet = this.m_PlayerSet;
            g_ConfigManager.CreateRoom_GameMode = this.m_GameMode;
            g_ConfigManager.CreateRoom_GameModeOptions = this.m_GameModeOptions;
            g_ConfigManager.CreateRoom_LianZhuangType = this.m_LianZhuangType;
            g_ConfigManager.CreateRoom_ScoreType = this.m_ScoreType;
            g_ConfigManager.SaveConfig();
        }
    },

    onGameServerConnected : function () {
        console.log("CreateRoom->onGameServerConnected")
        var msg = {};
        msg.ACTION = ActionDef.CreateRoomForGameServer;
        msg.MSG_ID = g_NetworkManager.NextMessageID();
        msg.UID = g_UserManager.m_UserID;
        msg.room = g_UserManager.m_RoomData.roomData;
        g_RootLayer.setGpsMsg(msg);
        
        var json = JSON.stringify(msg);
        g_NetworkManager.sendMessage(json, ActionDef.CreateRoomForGameServer, msg.MSG_ID);
        this.waitResponse = true;

        g_RootLayer.showJoinRoomMask();
    },

    onGameServerDisconnected : function () {
        NetworkManager.ConnectToRoomServer();
    },

    onReceiveMessage : function (action, msgData) {
        switch (action) {
            case ActionDef.CreateRoomForRoomServer:
            case ActionDef.CreateRoomForGameServer:
                if (msgData.MSG_RET != 0) {
                    this.waitResponse = false;
                }
                break;
        }
    }

});