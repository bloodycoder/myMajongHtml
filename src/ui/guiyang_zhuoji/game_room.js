/**
 * Created by pengchunwu on 2017/2/17.
 */
var g_ResCardFaces = {
    "1" : "res/res/room/mahjong_wan_1.png",
    "2" : "res/res/room/mahjong_wan_2.png",
    "3" : "res/res/room/mahjong_wan_3.png",
    "4" : "res/res/room/mahjong_wan_4.png",
    "5" : "res/res/room/mahjong_wan_5.png",
    "6" : "res/res/room/mahjong_wan_6.png",
    "7" : "res/res/room/mahjong_wan_7.png",
    "8" : "res/res/room/mahjong_wan_8.png",
    "9" : "res/res/room/mahjong_wan_9.png",
    "11" : "res/res/room/mahjong_tiao_1.png",
    "12" : "res/res/room/mahjong_tiao_2.png",
    "13" : "res/res/room/mahjong_tiao_3.png",
    "14" : "res/res/room/mahjong_tiao_4.png",
    "15" : "res/res/room/mahjong_tiao_5.png",
    "16" : "res/res/room/mahjong_tiao_6.png",
    "17" : "res/res/room/mahjong_tiao_7.png",
    "18" : "res/res/room/mahjong_tiao_8.png",
    "19" : "res/res/room/mahjong_tiao_9.png",
    "21" : "res/res/room/mahjong_bing_1.png",
    "22" : "res/res/room/mahjong_bing_2.png",
    "23" : "res/res/room/mahjong_bing_3.png",
    "24" : "res/res/room/mahjong_bing_4.png",
    "25" : "res/res/room/mahjong_bing_5.png",
    "26" : "res/res/room/mahjong_bing_6.png",
    "27" : "res/res/room/mahjong_bing_7.png",
    "28" : "res/res/room/mahjong_bing_8.png",
    "29" : "res/res/room/mahjong_bing_9.png",
    "31" : "res/res/room/mahjong_east.png",
    "32" : "res/res/room/mahjong_south.png",
    "33" : "res/res/room/mahjong_west.png",
    "34" : "res/res/room/mahjong_north.png",
    "35" : "res/res/room/mahjong_zhong.png",
    "36" : "res/res/room/mahjong_fa.png",
    "37" : "res/res/room/mahjong_bai.png",
};

var g_ResTimer = {
    "0" : "res/res/room/mahjong_00.png",
    "1" : "res/res/room/mahjong_01.png",
    "2" : "res/res/room/mahjong_02.png",
    "3" : "res/res/room/mahjong_03.png",
    "4" : "res/res/room/mahjong_04.png",
    "5" : "res/res/room/mahjong_05.png",
    "6" : "res/res/room/mahjong_06.png",
    "7" : "res/res/room/mahjong_07.png",
    "8" : "res/res/room/mahjong_08.png",
    "9" : "res/res/room/mahjong_09.png",
    "10" : "res/res/room/mahjong_10.png",
};

/*
 var g_ResCurrentPlayerTip4 = {
 "0" : "res/res/room/mahjong_choose_3.png",
 "1" : "res/res/room/mahjong_choose_4.png",
 "2" : "res/res/room/mahjong_choose_5.png",
 "3" : "res/res/room/mahjong_choose_2.png",
 };

 var g_ResCurrentPlayerTip3 = {
 "0" : "res/res/room/mahjong_choose_3.png",
 "1" : "res/res/room/mahjong_choose_4.png",
 "2" : "res/res/room/mahjong_choose_2.png",
 };

 var g_ResCurrentPlayerTip2 = {
 "0" : "res/res/room/mahjong_choose_3.png",
 "1" : "res/res/room/mahjong_choose_5.png",
 };
 */

var g_ResQuemen = {
    "0" : "res/res/room/mahjong_wan.png",
    "1" : "res/res/room/mahjong_tiao.png",
    "2" : "res/res/room/mahjong_tong.png",
};

if (typeof g_ResCurrentPlayerTip4 == "undefined") {
    var g_ResCurrentPlayerTip4 = {};
    g_ResCurrentPlayerTip4[0] = {};
    g_ResCurrentPlayerTip4[0].start = 66;
    g_ResCurrentPlayerTip4[0].end = 126;
    g_ResCurrentPlayerTip4[1] = {};
    g_ResCurrentPlayerTip4[1].start = 127;
    g_ResCurrentPlayerTip4[1].end = 187;
    g_ResCurrentPlayerTip4[2] = {};
    g_ResCurrentPlayerTip4[2].start = 188;
    g_ResCurrentPlayerTip4[2].end = 248;
    g_ResCurrentPlayerTip4[3] = {};
    g_ResCurrentPlayerTip4[3].start = 5;
    g_ResCurrentPlayerTip4[3].end = 65;
};

if (typeof g_ResCurrentPlayerTip3 == "undefined") {
    var g_ResCurrentPlayerTip3 = {};
    g_ResCurrentPlayerTip3[0] = {};
    g_ResCurrentPlayerTip3[0].start = 66;
    g_ResCurrentPlayerTip3[0].end = 126;
    g_ResCurrentPlayerTip3[1] = {};
    g_ResCurrentPlayerTip3[1].start = 127;
    g_ResCurrentPlayerTip3[1].end = 187;
    g_ResCurrentPlayerTip3[2] = {};
    g_ResCurrentPlayerTip3[2].start = 5;
    g_ResCurrentPlayerTip3[2].end = 65;
};

if (typeof g_ResCurrentPlayerTip2 == "undefined") {
    var g_ResCurrentPlayerTip2 = {};
    g_ResCurrentPlayerTip2[0] = {};
    g_ResCurrentPlayerTip2[0].start = 66;
    g_ResCurrentPlayerTip2[0].end = 126;
    g_ResCurrentPlayerTip2[1] = {};
    g_ResCurrentPlayerTip2[1].start = 188;
    g_ResCurrentPlayerTip2[1].end = 248;
};

var g_ResCurrentPlayerTip = null;

if (typeof g_WinTypeDef == "undefined") {
    var g_WinTypeDef = {};
    g_WinTypeDef.PingHu = 0;                       // 平胡
    g_WinTypeDef.DaDuiHu = 0x00000001;                      //  大对胡
    g_WinTypeDef.XiaoDuiHu = 0x00000002;                    //  小对胡
    g_WinTypeDef.LongXiaoDui = 0x00020002;                  //  龙小对胡
    g_WinTypeDef.DanDiaoHu = 0x00000004;                       //  单吊胡
    g_WinTypeDef.DaDuiHu2 = 0x00000005;                      //  大对胡
    g_WinTypeDef.QingYiSe = 0x00040000;                       //  清一色
    g_WinTypeDef.QingYiSeDaDuiHu = (0x00040000 | 0x00000001);    //  清一色大对胡
    g_WinTypeDef.QingYiSeXiaoDuiHu = (0x00040000 | 0x00000002);       //  清一色小对胡
    g_WinTypeDef.QingYiSeLongXiaoDui = (0x00040000 | 0x00020002);      //  清一色龙小对
    g_WinTypeDef.QingYiSeDanDiao = (0x00040000 | 0x00000004);        //  清一色单吊
    g_WinTypeDef.ShuangQing = (0x00040000 | 0x00000004 |  0x00000001);        //  双清
}

var g_ResWinType = {
    "0" : "res/res/end/end_4_1.png",                       // 平胡
    "1" : "res/res/end/end_4_2.png",                      //  大对胡
    "2" : "res/res/end/end_4_3.png",                    //  小对胡
    "131074" : "res/res/end/end_4_4.png",                  //  龙小对胡
    "4" : "res/res/end/end_4_10.png",                       //  单吊胡
    "5": "res/res/end/end_4_10.png",                      //  大对胡
    "262144" : "res/res/end/end_4_5.png",                       //  清一色
    "262145" : "res/res/end/end_4_6.png",    //  清一色大对胡
    "262146" : "res/res/end/end_4_7.png",       //  清一色小对胡
    "393218" : "res/res/end/end_4_8.png",      //  清一色龙小对
    "262148" : "res/res/end/end_4_9.png",        //  清一色单吊
    "262149" : "res/res/end/end_4_9.png",        //  双清

};

var g_ResTingType = {
    "0" : "res/res/end/end_5.png",
    "1" : "res/res/end/end_6.png",
};

// 麻将牌ID
if (typeof CardIDDefines == "undefined") {
    var CardIDDefines = {};
    CardIDDefines.YiWan = 1;
    CardIDDefines.ErWan = 2;
    CardIDDefines.SanWan = 3;
    CardIDDefines.SiWan = 4;
    CardIDDefines.WuWan = 5;
    CardIDDefines.LiuWan = 6;
    CardIDDefines.QiWan = 7;
    CardIDDefines.BaWan = 8;
    CardIDDefines.JiuWan = 9;
    CardIDDefines.YiTiao = 11;
    CardIDDefines.ErTiao = 12;
    CardIDDefines.SanTiao = 13;
    CardIDDefines.SiTiao = 14;
    CardIDDefines.WuTiao = 15;
    CardIDDefines.LiuTiao = 16;
    CardIDDefines.QiTiao = 17;
    CardIDDefines.BaTiao = 18;
    CardIDDefines.JiuTiao = 19;
    CardIDDefines.YiTong = 21;
    CardIDDefines.ErTong = 22;
    CardIDDefines.SanTong = 23;
    CardIDDefines.SiTong = 24;
    CardIDDefines.WuTong = 25;
    CardIDDefines.LiuTong = 26;
    CardIDDefines.QiTong = 27;
    CardIDDefines.BaTong = 28;
    CardIDDefines.JiuTong = 29;
    CardIDDefines.Dong = 31;
    CardIDDefines.Nan = 32;
    CardIDDefines.Xi = 33;
    CardIDDefines.Bei = 34;
    CardIDDefines.Zhong = 35;
    CardIDDefines.Fa = 36;
    CardIDDefines.Bai = 37;

}
var g_AnimationPredefine = {};
g_AnimationPredefine["ChongFengJi"] = {};               // 冲锋鸡
g_AnimationPredefine["ZeRenJi"] = {};                   // 责任鸡
g_AnimationPredefine["ZhuoJi"] = {};                    // 捉鸡
g_AnimationPredefine["DianPao"] = {};                   // 点炮
g_AnimationPredefine["ZiMo"] = {};                      // 自摸
g_AnimationPredefine["HuangZhuang"] = {};               // 黄庄
g_AnimationPredefine["Chi"] = {};                       // 吃
g_AnimationPredefine["Gang"] = {};                      // 杠
g_AnimationPredefine["Peng"] = {};                      // 碰
g_AnimationPredefine["Ting"] = {};                      // 听
g_AnimationPredefine["DaPai"] = {};                     // 打牌
g_AnimationPredefine["ChongFengJi"].Key = "ChongFengJi";
g_AnimationPredefine["ChongFengJi"].Res = res.sprint_chicken_csd;
g_AnimationPredefine["ChongFengJi"].Static = "res/res/room/mahjong_chicken1.png";
g_AnimationPredefine["ZeRenJi"].Key = "ZeRenJi";
g_AnimationPredefine["ZeRenJi"].Res = res.duty_chicken_csd;
g_AnimationPredefine["ZeRenJi"].Static = "res/res/room/mahjong_chicken2.png";
g_AnimationPredefine["ZhuoJi"].Key = "ZhuoJi";
g_AnimationPredefine["ZhuoJi"].Res = res.catch_chicken_csd;
g_AnimationPredefine["ZhuoJi"].Static = "res/res/room/mahjong_chicken3.png";
g_AnimationPredefine["DianPao"].Key = "DianPao";
g_AnimationPredefine["DianPao"].Res = res.dianpao_csd;
g_AnimationPredefine["DianPao"].Static = "res/res/room/mahjong_dianpao.png";
g_AnimationPredefine["ZiMo"].Key = "ZiMo";
g_AnimationPredefine["ZiMo"].Res = res.zimo_csd;
g_AnimationPredefine["ZiMo"].Static = "res/res/room/mahjong_zimo.png";
g_AnimationPredefine["Chi"].Key = "Chi";
g_AnimationPredefine["Chi"].Res = res.chi_csd;
g_AnimationPredefine["Chi"].Static = "";
g_AnimationPredefine["Gang"].Key = "Gang";
g_AnimationPredefine["Gang"].Res = res.gang_csd;
g_AnimationPredefine["Gang"].Static = "";
g_AnimationPredefine["Peng"].Key = "Peng";
g_AnimationPredefine["Peng"].Res = res.peng_csd;
g_AnimationPredefine["Peng"].Static = "";
g_AnimationPredefine["Ting"].Key = "Ting";
g_AnimationPredefine["Ting"].Res = res.ting_csd;
g_AnimationPredefine["Ting"].Static = "";
g_AnimationPredefine["HuangZhuang"].Key = "HuangZhuang";
g_AnimationPredefine["HuangZhuang"].Res = res.huangzhuang_csd;
g_AnimationPredefine["HuangZhuang"].Static = "";
g_AnimationPredefine["DaPai"].Key = "DaPai";
g_AnimationPredefine["DaPai"].Res = res.dapai_animation_csd;
g_AnimationPredefine["DaPai"].Static = "";


if (typeof g_ScorePointTypeDef == "undefined") {
    var g_ScorePointTypeDef = {};
    g_ScorePointTypeDef.None = 0;
    g_ScorePointTypeDef.DiFen = 1;                 // 底分
    g_ScorePointTypeDef.HuaPai = 2;                 // 花牌
    g_ScorePointTypeDef.AnHua = 3;                 // 暗花
    g_ScorePointTypeDef.FengKe = 4;                    // 风向刻子
    g_ScorePointTypeDef.MaiHua = 5;                 // 买花
    g_ScorePointTypeDef.ShunBao = 6;                 // 顺包
    g_ScorePointTypeDef.FanBao = 7;                 // 反包
    g_ScorePointTypeDef.WuHuaGuo = 8;                 // 无花果
    g_ScorePointTypeDef.PaiXing = 9;                     // 牌型
    g_ScorePointTypeDef.TianQue1 = 10;              // 天缺一门
    g_ScorePointTypeDef.TianQue2 = 11;          // 天缺两门
    g_ScorePointTypeDef.QuePai = 12;            // 有缺未打
    g_ScorePointTypeDef.ZiMo = 13;                         // 自摸
    g_ScorePointTypeDef.DianPao = 14;                      // 点炮
    g_ScorePointTypeDef.BianKaDiao = 15;                //边卡吊
    g_ScorePointTypeDef.DaKuanZhang = 16;            // 大宽张
    g_ScorePointTypeDef.BianZhang = 17;                 // 边张
    g_ScorePointTypeDef.MenQing = 18;                 // 门清
    g_ScorePointTypeDef.KaHu = 19;                 // 卡胡
    g_ScorePointTypeDef.DuiDaoHu = 20;                 // 对倒胡
    g_ScorePointTypeDef.DanDiao = 21;                 // 单吊
    g_ScorePointTypeDef.NoLianZhuang = 22;                     // 一扣二
    g_ScorePointTypeDef.GangShangHu = 23;                 // 杠上胡
    g_ScorePointTypeDef.RePao = 24;                        // 热炮
    g_ScorePointTypeDef.QiangGang = 25;                   // 抢杠
    g_ScorePointTypeDef.TianHu = 26;                       // 天胡
    g_ScorePointTypeDef.QiXingGuiWei = 27;                 // 七星归位
    g_ScorePointTypeDef.DiHu = 28;                          // 地胡
    g_ScorePointTypeDef.TianTing = 29;                     // 天听
    g_ScorePointTypeDef.ShaBao = 30;                       // 杀报
    g_ScorePointTypeDef.ZhuangJia = 31;                   // 连庄
    g_ScorePointTypeDef.MenDou = 32;                       // 闷豆
    g_ScorePointTypeDef.ZhuanWanDou = 33;                 // 转弯豆
    g_ScorePointTypeDef.MingDou = 34;                      // 明豆
    g_ScorePointTypeDef.HanBaoDou = 35;                       // 憨包豆
    g_ScorePointTypeDef.ChongFengJi = 36;                  // 冲锋鸡
    g_ScorePointTypeDef.WuGuChongFengJi = 37;            // 冲锋乌骨鸡
    g_ScorePointTypeDef.ZeRenJi = 38;                     // 责任鸡
    g_ScorePointTypeDef.WuGuZeRenJi = 39;                 // 责任乌骨鸡
    g_ScorePointTypeDef.ZeRenJiVictim = 40;                 // 傻逼责任鸡
    g_ScorePointTypeDef.YaoJi = 41;                        // 普通鸡
    g_ScorePointTypeDef.WuGuJi = 42;                       // 乌骨鸡
    g_ScorePointTypeDef.DaoPeiYaoJi = 43;                   // 倒赔幺鸡
    g_ScorePointTypeDef.DaoPeiWuGuJi = 44;                   // 倒赔乌骨鸡
    g_ScorePointTypeDef.BenJi = 45;                       // 本鸡
    g_ScorePointTypeDef.FanPaiJi = 46;                     // 翻牌鸡
    g_ScorePointTypeDef.XingQiJi = 47;                       // 星期鸡
    g_ScorePointTypeDef.ChuiFengJi = 48;                       // 吹风鸡
}

if (typeof GameWaitStatusDef == "undefined") {
    var GameWaitStatusDef = {};
    GameWaitStatusDef.Wait = 0;
    GameWaitStatusDef.Hu = 1;
    GameWaitStatusDef.PlayCard = 2;
    GameWaitStatusDef.Peng = 4;
    GameWaitStatusDef.Gang = 8;
    GameWaitStatusDef.Chi = 16;
    GameWaitStatusDef.AnGang = 32;
    GameWaitStatusDef.Ting = 64;
    GameWaitStatusDef.Pass = 128;
    GameWaitStatusDef.QueMen = 256;
    GameWaitStatusDef.MaiHua = 512;
};

if (typeof GameActionDef == "undefined") {
    var GameActionDef = {};
    GameActionDef.MoPai = 0;
    GameActionDef.ChongFeng = 1;
    GameActionDef.WuGuChongFeng = 2;
    GameActionDef.ZeRen = 3;
    GameActionDef.WuGuZeRen = 4;
    GameActionDef.ZhuanWanDou = 5;
    GameActionDef.Peng = 6;
    GameActionDef.Gang = 7;
    GameActionDef.AnGang = 8;
    GameActionDef.QiangGangHu = 9;
    GameActionDef.ZiMo = 10;
    GameActionDef.DianPao = 11;
    GameActionDef.Ting = 12;
    GameActionDef.DaPai = 13;
    GameActionDef.QueMen = 14;
    GameActionDef.MaiHua = 15;
    GameActionDef.Chi = 16;
    GameActionDef.BuHua = 17;
};

if (typeof ActionResultTypeDef == "undefined") {
    var ActionResultTypeDef = {};
    ActionResultTypeDef.Unknown = 0;
    ActionResultTypeDef.Chi = 1;
    ActionResultTypeDef.Peng = 2;
    ActionResultTypeDef.Gang = 3;
    ActionResultTypeDef.DuiZi = 4;
    ActionResultTypeDef.Hua = 5;
    ActionResultTypeDef.AnGang = 6;
    ActionResultTypeDef.ZhuanWanDou = 7;
}
if (typeof RoundStatusDef == "undefined") {
    var RoundStatusDef = {};
    RoundStatusDef.Unknown = 0;
    RoundStatusDef.Preparing = 1;
    RoundStatusDef.Running = 2;
    RoundStatusDef.RoundStarted = 3;
    RoundStatusDef.RoundEnd = 4;
};

if (typeof PlayerStatusDef == "undefined") {
    var PlayerStatusDef = {};
    PlayerStatusDef.Unknown = 0;
    PlayerStatusDef.Offline = 1;
    PlayerStatusDef.Zhuang = 2;
    PlayerStatusDef.Ting = 4;
    PlayerStatusDef.Chong = 8;
    PlayerStatusDef.Ze = 16;
}

if (typeof DelayActionDef == "undefined") {
    var DelayActionDef = {};
    DelayActionDef.Visible = 1;
    DelayActionDef.Remove = 2;
    DelayActionDef.CallFunc = 3;
}

var GameRoomLayer;
GameRoomLayer = cc.Layer.extend({

    ctor : function () {
        this._super();

        this.m_DismissRoom = false;
        this.m_CurrentCard = null;
        this.m_CurrentPopCard = null;
        this.m_LastClickTime = 0;
        this.m_CountDownEndTime = 0;
        this.m_RoundStatus = RoundStatusDef.Unknown;
        this.m_CurrentRound = 0;
        this.m_CardRemain = 0;
        this.m_HistorySize = 20;
        this.m_Follower = {};
        this.m_HuUsers = new Array();
        this.m_DianUser = -1;
        this.m_ChatRoomName = null;

        this.m_Players = new Array(4);
        this.m_dataRoundResult = {};
        this.m_dataGameResult = new Array();
        this.m_ActionBtnPlaceHolds = new Array();
        this.m_uiSelfCardsInHandPostion = new Array();

        this.m_DelayActionData = new Array();
        this.m_AnimationsInPlaying = new Array();
        this.m_AnimationsWaitForPlay = new Array();

        this.m_CurrentWaitStatus = GameWaitStatusDef.Wait;
        this.m_WaitStatusAction = GameWaitStatusDef.Wait;
        this.m_ForcePlayCardIdsForTing = new Array();
        this.m_ForcePlayCardIdsForGang = new Array();
        this.m_ForcePlayCardIdsForQueMen = new Array();
        this.m_BaseLine = 0;
        this.m_CardsCanPlay = null;
        this.m_CurrentPlayer = 0;
        this.m_LastPlayer = 0;
        this.m_LastCardID = 0;
        this.m_ShowCardsInHand = false;
        this.m_IgnoreLastStatus = false;
        this.m_GameScore = new Array(4);
        this.m_GameScore[0] = 0;
        this.m_GameScore[1] = 0;
        this.m_GameScore[2] = 0;
        this.m_GameScore[3] = 0;

        this.m_BtnClose = null;
        this.m_ActionArea = null;
        this.m_BtnHu = null;
        this.m_BtnGang = null;
        this.m_BtnPeng = null;
        this.m_BtnTing = null;
        this.m_BtnPass = null;
        this.m_QueMenArea = null;
        this.m_BtnQueMen_Tiao = null;
        this.m_BtnQueMen_Tong = null;
        this.m_BtnSetting = null;
        this.m_BtnChat = null;
        this.m_BtnTalk = null;
        this.m_CurrentCardCursor = null;
        this.m_IconVoiceTips = null;
        this.m_QueMen = -1;

        this.m_HasRequestSyncData = false;
        this.m_IsChatting = false;
        this.m_IsMicOpen = true;

        this.m_TimerLayers = null;

        this.m_LastStatusBarUpdateTime = 0;
        this.m_electricity = null;
        this.m_electricity_1 = null;
        this.m_electricity_text = null;
        this.m_time = null;
        this.m_Network = null;

        this.m_QingChuPai = null;
        this.m_IsAllXuanQue = false;
        this.m_cardNodeY = 0;

        this.m_LiuChangDu = null;
        this.m_PingNode = null;
        this.m_PingZhiBg = null;
        this.m_PingZhi = null;

        this.loadUI();

        NetworkManager.BeginLog();
        
        g_NetworkManager.Subscrible(ActionDef.RoundStart, this);
        g_NetworkManager.Subscrible(ActionDef.StartTimer, this);
        g_NetworkManager.Subscrible(ActionDef.DrawCard, this);
        g_NetworkManager.Subscrible(ActionDef.PlayCard, this);
        g_NetworkManager.Subscrible(ActionDef.SetActionStatus, this);
        g_NetworkManager.Subscrible(ActionDef.ActionResult, this);
        g_NetworkManager.Subscrible(ActionDef.RoundEnd, this);
        g_NetworkManager.Subscrible(ActionDef.PlayerLinkStatus, this);
        g_NetworkManager.Subscrible(ActionDef.PlayerReadyStatus, this);
        g_NetworkManager.Subscrible(ActionDef.SyncPlayerData, this);
        g_NetworkManager.Subscrible(ActionDef.PlayerQuit, this);
        g_NetworkManager.Subscrible(ActionDef.SyncPlayerData, this);
        g_NetworkManager.Subscrible(ActionDef.SyncData, this);
        g_NetworkManager.Subscrible(ActionDef.InvokeQuitVote, this);
        g_NetworkManager.Subscrible(ActionDef.ForceQuitRoom, this);
        g_NetworkManager.Subscrible(ActionDef.BroadcastPredefineVoice, this);
        g_NetworkManager.Subscrible(ActionDef.BroadcastVoice, this);
        g_NetworkManager.Subscrible(ActionDef.BroadcastEmotion, this);

        g_NetworkManager.Subscrible(ActionDef.InvokeCreateChatRoom, this);
        g_NetworkManager.Subscrible(ActionDef.CreateChatRoom, this);
        g_NetworkManager.Subscrible(ActionDef.QuitChatRoom, this);
        g_NetworkManager.Subscrible(ActionDef.QuitChatRoomNotice, this);
        g_NetworkManager.Subscrible(ActionDef.SyncCreateChatRoomData, this);
        g_NetworkManager.Subscrible(ActionDef.GetCreateChatRoomData, this);
        g_NetworkManager.Subscrible(ActionDef.XuanQueState, this);

        g_UserManager.m_GameServerConnectedCallback = this;

        g_RootLayer.SubscribleUpdate(this);

        for (var i = 0; i < 4; ++i) {
            g_UserManager.m_PlayerData[i].m_Score = 0;
            g_UserManager.m_PlayerData[i].m_Offline = false;
            g_UserManager.m_PlayerData[i].m_GameStatus.reset();
        }

        this.requestSyncData();

        this.runAction(
            cc.Sequence.create(
                cc.DelayTime.create(1),
                cc.CallFunc.create(
                    function () {
                        cc.textureCache.removeUnusedTextures();
                    }
                ))
        );

    },

    createNumber : function (value, fixedWidth) {
        var layer = new cc.Layer();
        var valueString = "00000" + value + "";
        var numbers = new Array();

        valueString = valueString.substring(valueString.length - fixedWidth);

        for (var i = 0; i < valueString.length; ++i)
        {
            var index = valueString.substring(i, i + 1);
            var image = new cc.Sprite("res/res/room/mahjong_" + index + ".png");
            numbers.push(image);
        }

        var width = 0;
        var height = 0;
        for (var i = 0; i < numbers.length; ++i)
        {
            layer.addChild(numbers[i]);
            numbers[i].x = width + numbers[i].width / 2;
            numbers[i].y = numbers[i].height / 2;
            width += numbers[i].width;
            if (numbers[i].height > height)
                height = numbers[i].height;
        }

        layer.x = -width / 2;
        layer.y = -height / 2;

        return layer;
    },


    requestSyncData : function () {
        if (this.m_HasRequestSyncData == true)
            return;

        var request = {};
        request.ACTION = ActionDef.SyncData;
        request.MSG_ID = g_NetworkManager.NextMessageID();
        request.UID = this.m_UserID;
        request.roomid = parseInt(g_UserManager.m_RoomData.roomId);

        var json = JSON.stringify(request);
        g_NetworkManager.sendMessage(json, ActionDef.SyncData, request.MSG_ID);

        this.m_HasRequestSyncData = true;

    },

    cleanup : function()
    {
        this._super();

        NetworkManager.EndLog();
        if (this.m_IsChatting == true)
            VoiceManager.QuitRoom();

        if (this.m_CurrentCardCursor != null){
            this.m_CurrentCardCursor.release();
        }

        if ( typeof this.m_LocatorAnim != "undefined")
        {
            this.m_LocatorAnim.node.release();
            this.m_LocatorAnim.action.release();
        }

        g_NetworkManager.Unsubscrible(ActionDef.RoundStart, this);
        g_NetworkManager.Unsubscrible(ActionDef.StartTimer, this);
        g_NetworkManager.Unsubscrible(ActionDef.DrawCard, this);
        g_NetworkManager.Unsubscrible(ActionDef.PlayCard, this);
        g_NetworkManager.Unsubscrible(ActionDef.SetActionStatus, this);
        g_NetworkManager.Unsubscrible(ActionDef.ActionResult, this);
        g_NetworkManager.Unsubscrible(ActionDef.RoundEnd, this);
        g_NetworkManager.Unsubscrible(ActionDef.PlayerLinkStatus, this);
        g_NetworkManager.Unsubscrible(ActionDef.PlayerReadyStatus, this);
        g_NetworkManager.Unsubscrible(ActionDef.SyncPlayerData, this);
        g_NetworkManager.Unsubscrible(ActionDef.PlayerQuit, this);
        g_NetworkManager.Unsubscrible(ActionDef.SyncData, this);
        g_NetworkManager.Unsubscrible(ActionDef.InvokeQuitVote, this);
        g_NetworkManager.Unsubscrible(ActionDef.ForceQuitRoom, this);
        g_NetworkManager.Unsubscrible(ActionDef.BroadcastPredefineVoice, this);
        g_NetworkManager.Unsubscrible(ActionDef.BroadcastVoice, this);
        g_NetworkManager.Unsubscrible(ActionDef.BroadcastEmotion, this);

        g_NetworkManager.Unsubscrible(ActionDef.InvokeCreateChatRoom, this);
        g_NetworkManager.Unsubscrible(ActionDef.CreateChatRoom, this);
        g_NetworkManager.Unsubscrible(ActionDef.QuitChatRoom, this);
        g_NetworkManager.Unsubscrible(ActionDef.QuitChatRoomNotice, this);
        g_NetworkManager.Unsubscrible(ActionDef.SyncCreateChatRoomData, this);
        g_NetworkManager.Unsubscrible(ActionDef.GetCreateChatRoomData, this);
        g_NetworkManager.Unsubscrible(ActionDef.XuanQueState, this);

        if (g_UserManager.m_GameServerConnectedCallback == this) {
            g_UserManager.m_GameServerConnectedCallback = null;
        }

        g_RootLayer.UnsubscribleUpdate(this);
    },


    loadUI : function () {
        var uiNode = null;

        var height = cc.view.getFrameSize().height;
        var width = cc.view.getFrameSize().width;

        if (Math.abs(height / width - 0.75) < 0.1) {
            res.game_room_csd = res.game_room_pad_csd;
            res.game_room2_csd = res.game_room2_pad_csd;
            res.game_room3_csd = res.game_room3_pad_csd;
        }

        if (g_UserManager.m_RoomData.maxPlayer == 4) {
            uiNode = ccs.load(res.game_room_csd);
            g_ResCurrentPlayerTip = g_ResCurrentPlayerTip4;
        }
        else if (g_UserManager.m_RoomData.maxPlayer == 3)
        {
            uiNode = ccs.load(res.game_room3_csd);
            g_ResCurrentPlayerTip = g_ResCurrentPlayerTip3;
        }
        else{
            uiNode = ccs.load(res.game_room2_csd);
            g_ResCurrentPlayerTip = g_ResCurrentPlayerTip2;
        }
        this.addChild(uiNode.node, 1);

        this.m_CurrentCardCursor = null;
        var rootNode = uiNode.node.getChildByName("root");
        var Image1 = uiNode.node.getChildByName("Image_1");
        var height = cc.director.getVisibleSize().height;
        var size = Image1.getContentSize();
        size.height = height;
        Image1.setContentSize(size);

        this.m_electricity = rootNode.getChildByName("electricity");
        this.m_electricity_1 = this.m_electricity.getChildByName("electricity_1");
        this.m_Network = this.m_electricity.getChildByName("network");
        this.m_Network.setVisible(false);
        this.m_electricity_text = this.m_electricity.getChildByName("electricity_text");
        this.m_time = this.m_electricity.getChildByName("time");
        //this.m_electricity.x = width;
        //this.m_electricity.y = this.m_electricity.y + (height - 750) / 2;
        this.m_electricity.setVisible(true);
        this.m_LiuChangDu = this.m_electricity.getChildByName("liuchangdu");
        this.m_PingNode = rootNode.getChildByName("ping");
        this.m_PingZhiBg = this.m_PingNode.getChildByName("pingzhi_bg");
        this.m_PingZhi = this.m_PingNode.getChildByName("pingzhi");


        this.m_LocatorAnim = ccs.load(res.mahjong_choose_csd);
        this.m_LocatorAnim.node.retain();
        this.m_LocatorAnim.action.retain();

        this.m_Background = rootNode.getChildByName("background");
        this.m_uiLabelRoomID = rootNode.getChildByName("label_room_id");
        this.m_uiLabelRoomID.setVisible(true);
        this.m_uiLocatorRoot = rootNode.getChildByName("icon_timer");
        this.m_QingChuPai = rootNode.getChildByName("player_01").getChildByName("qing_chu_pai");
        this.m_uiLocatorIcon = this.m_uiLocatorRoot.getChildByName("icon_locator");
        this.m_uiLocatorAnimNode = this.m_uiLocatorRoot.getChildByName("anim");
        this.m_uiLocatorAnimNode.addChild(this.m_LocatorAnim.node);
        this.setLocator(0, 0);
        this.m_uiLocatorAnimNode.setVisible(false);
        this.m_uiTimer = this.m_uiLocatorRoot.getChildByName("icon_number");
        this.m_IconVoiceTips = rootNode.getChildByName("voice_tips")

        this.m_uiLabelCardRemain = this.m_uiLocatorRoot.getChildByName("label_card_remain");
        this.m_uiLabelRound = this.m_uiLocatorRoot.getChildByName("label_round");
        this.m_uiLabelRule = rootNode.getChildByName("label_rule");
        var rule = "";
        if (g_UserManager.m_RoomData.maxPlayer == 4) {
            rule += "4人局";
        }
        else if (g_UserManager.m_RoomData.maxPlayer == 3)
            rule += "三丁拐";
        else
            rule += "二丁拐";
        if (g_UserManager.m_RoomData.gameMode == MahJongGameMode.FangPaiJi)
            rule += "，翻牌鸡";
        else
            rule += "，摇摆鸡";
        if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.BenJi) != 0)
            rule += "，本鸡";
        if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.WuguJi) != 0)
            rule += "，乌骨鸡";
        if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.ChuiFengJi) != 0)
            rule += "，吹风鸡";
        if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.XingQiJi) != 0)
            rule += "，星期鸡";
        if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.ChongFengJi3Fen) != 0)
            rule += "，冲锋鸡3分";
        if (g_UserManager.m_RoomData.lianZhuangType == MahJongLianZhuangType.NoLianZhuang)
            rule += "，一扣二";
        else if (g_UserManager.m_RoomData.lianZhuangType == MahJongLianZhuangType.LianZhuang)
            rule += "，连庄";
        else
            rule += "，全三";
        if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.HuangZhuangLianZhuang) != 0)
            rule += "，黄庄不下庄";
        if (g_UserManager.m_RoomData.scoreType == 3)
            rule += "，混10清20"
        else if (g_UserManager.m_RoomData.scoreType == 2)
            rule += "，混8清15"
        else
            rule += "，混5清10"
        rule += "，" + g_UserManager.m_RoomData.maxRound + "局";
        this.m_uiLabelRule.setString(rule);


        this.m_uiRoomActionNode = rootNode.getChildByName("room_action");;
        this.m_BtnInvite = this.m_uiRoomActionNode.getChildByName("btn_invite");
        this.m_BtnBack = this.m_uiRoomActionNode.getChildByName("btn_back");
        this.m_BtnInvite.addTouchEventListener(this.onInviteClick, this);
        this.m_BtnBack.addTouchEventListener(this.onBackClick, this);
        if(cc.sys.os == cc.sys.OS_IOS)
        {
            if(IosRegister.GetWeChatTag() != 1)
            {
                this.m_BtnInvite.setVisible(false);
            }
        }
        this.m_BtnSetting = rootNode.getChildByName("btn_setting");
        this.m_BtnChat = rootNode.getChildByName("btn_chat");
        this.m_BtnTalk = rootNode.getChildByName("btn_talk");
        this.m_BtnSetting.addTouchEventListener(this.onSettingClick, this);
        this.m_BtnChat.addTouchEventListener(this.onChatClick, this);
        this.m_BtnTalk.addTouchEventListener(this.onTalkClick, this);

        this.m_ActionArea = rootNode.getChildByName("action_area");

        this.m_GameActionArea = this.m_ActionArea.getChildByName("action");
        this.m_BtnHu = this.m_GameActionArea.getChildByName("btn_hu");
        this.m_BtnGang = this.m_GameActionArea.getChildByName("btn_gang");
        this.m_BtnPeng = this.m_GameActionArea.getChildByName("btn_peng");
        this.m_BtnTing = this.m_GameActionArea.getChildByName("btn_ting");
        this.m_BtnPass = this.m_GameActionArea.getChildByName("btn_pass");
        this.m_BtnChi = this.m_GameActionArea.getChildByName("btn_chi");

        this.m_QueMenArea = this.m_ActionArea.getChildByName("quemen");
        this.m_BtnQueMen_Wan = this.m_QueMenArea.getChildByName("btn_wan");
        this.m_BtnQueMen_Tiao = this.m_QueMenArea.getChildByName("btn_tiao");
        this.m_BtnQueMen_Tong = this.m_QueMenArea.getChildByName("btn_tong");

        this.m_ActionBtnPlaceHolds.push(this.m_GameActionArea.getChildByName("btn_01"));
        this.m_ActionBtnPlaceHolds.push(this.m_GameActionArea.getChildByName("btn_02"));
        this.m_ActionBtnPlaceHolds.push(this.m_GameActionArea.getChildByName("btn_03"));
        this.m_ActionBtnPlaceHolds.push(this.m_GameActionArea.getChildByName("btn_04"));
        this.m_ActionBtnPlaceHolds.push(this.m_GameActionArea.getChildByName("btn_05"));
        this.m_ActionBtnPlaceHolds.push(this.m_GameActionArea.getChildByName("btn_06"));

        this.m_BtnHu.addTouchEventListener(this.onHuClick, this);
        this.m_BtnGang.addTouchEventListener(this.onGangClick, this);
        this.m_BtnPeng.addTouchEventListener(this.onPengClick, this);
        this.m_BtnTing.addTouchEventListener(this.onTingClick, this);
        this.m_BtnPass.addTouchEventListener(this.onPassClick, this);
        this.m_BtnQueMen_Wan.addTouchEventListener(this.onQueMenWanClick, this);
        this.m_BtnQueMen_Tiao.addTouchEventListener(this.onQueMenTiaoClick, this);
        this.m_BtnQueMen_Tong.addTouchEventListener(this.onQueMenTongClick, this);

        this.m_LiuChangDu.addTouchEventListener(this.onLiuChangDuClick, this);
        this.m_PingNode.addTouchEventListener(this.onPingNodeClick, this);

        this.m_AnimationRootNode = rootNode.getChildByName("animations");
        this.m_ReadyRootNode = rootNode.getChildByName("ready");
        this.m_XuanQueRootNode = rootNode.getChildByName("xuanque");
        this.m_QingChuPai.setVisible(false);

        this.m_AnimationCommonNode = this.m_AnimationRootNode.getChildByName("animation");

        if (g_UserManager.m_RoomData.maxPlayer == 3)
            this.m_HistorySize = 27;
        else if (g_UserManager.m_RoomData.maxPlayer == 2)
            this.m_HistorySize = 45;

        this.m_MaskNode = rootNode.getChildByName("mask");

        // myself
        var myself = {};
        myself.ui = {};
        myself.data = {};
        myself.ui.m_RootNode = rootNode.getChildByName("player_01");
        myself.ui.m_CardsInHandNode = myself.ui.m_RootNode.getChildByName("cards_in_hand");
        myself.ui.m_ActionResultsNode = new Array();
        myself.ui.m_ActionResultsNode.push(myself.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_01"));
        myself.ui.m_ActionResultsNode.push(myself.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_02"));
        myself.ui.m_ActionResultsNode.push(myself.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_03"));
        myself.ui.m_ActionResultsNode.push(myself.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_04"));
        myself.ui.m_CardsInHandForShowNode = myself.ui.m_RootNode.getChildByName("cards_in_hand_for_show");
        myself.ui.m_ActionHistoryNode = myself.ui.m_RootNode.getChildByName("action_history");
        myself.ui.m_PortraitNode = myself.ui.m_RootNode.getChildByName("portrait");
        myself.ui.m_PortraitNode.addTouchEventListener(this.onPortrait1Click, this);
        myself.ui.m_PortraitStatusNodes = {};
        myself.ui.m_PortraitStatusNodes.icon = myself.ui.m_PortraitNode.getChildByName("icon");
        myself.ui.m_PortraitStatusNodes.name = myself.ui.m_PortraitNode.getChildByName("label_name");
        myself.ui.m_PortraitStatusNodes.score = myself.ui.m_PortraitNode.getChildByName("label_score");
        myself.ui.m_PortraitStatusNodes.status_offline = myself.ui.m_PortraitNode.getChildByName("icon_offline");
        myself.ui.m_PortraitStatusNodes.status_zhuang = myself.ui.m_PortraitNode.getChildByName("icon_zhuang");
        myself.ui.m_PortraitStatusNodes.status_ting = myself.ui.m_PortraitNode.getChildByName("icon_ting");
        myself.ui.m_PortraitStatusNodes.status_chong = myself.ui.m_PortraitNode.getChildByName("icon_chong");
        myself.ui.m_PortraitStatusNodes.status_ze = myself.ui.m_PortraitNode.getChildByName("icon_ze");
        myself.ui.m_PortraitStatusNodes.status_quemen = myself.ui.m_PortraitNode.getChildByName("icon_quemen");
        myself.ui.m_PortraitStatusNodes.emotion = myself.ui.m_PortraitNode.getChildByName("icon_emotion");
        myself.ui.m_PortraitStatusNodes.voice = myself.ui.m_PortraitNode.getChildByName("icon_voice");
        myself.ui.m_PortraitStatusNodes.message_bg = myself.ui.m_PortraitNode.getChildByName("icon_message");
        myself.ui.m_PortraitStatusNodes.message_text = myself.ui.m_PortraitStatusNodes.message_bg.getChildByName("text");
        myself.ui.m_PortraitStatusNodes.result = myself.ui.m_PortraitNode.getChildByName("icon_result");
        myself.ui.m_ReadyNode = this.m_ReadyRootNode.getChildByName("ready_01");
        myself.ui.m_ActionAnimationNode = {};
        myself.ui.m_RootNode.getChildByName("animations").setVisible(true);
        myself.ui.m_ActionAnimationNode.animation = myself.ui.m_RootNode.getChildByName("animations").getChildByName("animation");
        myself.ui.m_ActionAnimationNode.animation.setVisible(true);
        myself.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").setVisible(true);
        myself.ui.m_ActionAnimationNode.cards = new Array();
        for (var m = 0; m < 4; ++m) {
            var card = {};
            card.Card = myself.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").getChildByName("card_0" + (m + 1));
            card.Face = card.Card.getChildByName("icon_face");
            myself.ui.m_ActionAnimationNode.cards.push(card);
            card.Card.setVisible(false);
        }
        myself.ui.m_XuanQueNode = this.m_XuanQueRootNode.getChildByName("xuanque_01");
        myself.ui.m_PortraitStatusNodes.message_bg.setVisible(false);
        myself.ui.m_PortraitStatusNodes.result.setVisible(false);
        myself.ui.m_CardsInHand = new Array();
        myself.ui.m_CardsInHandForShow = new Array();
        myself.ui.m_ActionResults = new Array();
        myself.ui.m_ActionHistory = new Array();
        myself.ui.m_CardsJi = new Array();
        for (var i = 1; i < 15; ++i) {
            var key = ("00" + i);
            key = key.substring(key.length - 2);

            var card = new Array();
            card.push(myself.ui.m_CardsInHandNode.getChildByName("card_" + key));
            card.push(card[0].getChildByName("icon_face"));
            card.push(card[0].getChildByName("mask"));
            card.push(card[0].getChildByName("btn_" + key));
            this.m_BaseLine = card[0].y;
            card[3].addTouchEventListener(this.onCardClick, this);
            myself.ui.m_CardsInHand.push(card);

            var pos = {};
            pos.x = card[0].x;
            pos.y = card[0].y;
            this.m_uiSelfCardsInHandPostion.push(pos);

            card = new Array();
            card.push(myself.ui.m_CardsInHandForShowNode.getChildByName("card_" + key));
            card.push(card[0].getChildByName("icon_face"));
            myself.ui.m_CardsInHandForShow.push(card);
        }
        for (var i = 0; i < 4; ++i)
        {
            myself.ui.m_ActionResults.push(new Array());
            for (var j = 0; j < 4; ++j) {
                var key = ("00" + (j + 1));
                key = key.substring(key.length - 2);
                var card = new Array();
                card.push(myself.ui.m_ActionResultsNode[i].getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                myself.ui.m_ActionResults[i].push(card);
            }
        }
        for (var i = 1; i < this.m_HistorySize + 1; ++i)
        {
            var key = ("00" + i);
            key = key.substring(key.length - 2);
            var card = new Array();
            card.push(myself.ui.m_ActionHistoryNode.getChildByName("card_" + key));
            card.push(card[0].getChildByName("icon_face"));
            myself.ui.m_ActionHistory.push(card);
        }

        myself.ui.m_CardsJiNode = this.m_MaskNode.getChildByName("player_01").getChildByName("cards_ji");
        myself.ui.m_CardsJi = new Array();
        for (var i = 1; i < 25; ++i) {
            var key = ("00" + i);
            key = key.substring(key.length - 2);
            var card = new Array();
            card.push(myself.ui.m_CardsJiNode.getChildByName("card_" + key));
            card.push(card[0].getChildByName("icon_face"));
            myself.ui.m_CardsJi.push(card);

        }

        myself.data.m_CardsInHand = new Array(14);
        myself.data.m_ActionResults = new Array();
        myself.data.m_ActionHistory = new Array();
        myself.data.m_CardsInHandForShow = new Array(14);

        for (var i = 0; i < 14; ++i)
        {
            myself.data.m_CardsInHand[i] = -1;
            myself.data.m_CardsInHandForShow[i] = -1;
        }

        // next player
        var player02 = {};
        player02.ui = {};
        player02.data = {};
        player02.ui.m_RootNode = rootNode.getChildByName("player_02");
        player02.ui.m_CardsInHandNode = player02.ui.m_RootNode.getChildByName("cards_in_hand");
        player02.ui.m_ActionResultsNode = new Array();
        player02.ui.m_ActionResultsNode.push(player02.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_01"));
        player02.ui.m_ActionResultsNode.push(player02.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_02"));
        player02.ui.m_ActionResultsNode.push(player02.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_03"));
        player02.ui.m_ActionResultsNode.push(player02.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_04"));
        player02.ui.m_CardsInHandForShowNode = player02.ui.m_RootNode.getChildByName("cards_in_hand_for_show");
        player02.ui.m_ActionHistoryNode = player02.ui.m_RootNode.getChildByName("action_history");
        player02.ui.m_PortraitNode = player02.ui.m_RootNode.getChildByName("portrait");
        player02.ui.m_PortraitNode.addTouchEventListener(this.onPortrait2Click, this);
        player02.ui.m_PortraitStatusNodes = {};
        player02.ui.m_PortraitStatusNodes.icon = player02.ui.m_PortraitNode.getChildByName("icon");
        player02.ui.m_PortraitStatusNodes.name = player02.ui.m_PortraitNode.getChildByName("label_name");
        player02.ui.m_PortraitStatusNodes.score = player02.ui.m_PortraitNode.getChildByName("label_score");
        player02.ui.m_PortraitStatusNodes.status_offline = player02.ui.m_PortraitNode.getChildByName("icon_offline");
        player02.ui.m_PortraitStatusNodes.status_zhuang = player02.ui.m_PortraitNode.getChildByName("icon_zhuang");
        player02.ui.m_PortraitStatusNodes.status_ting = player02.ui.m_PortraitNode.getChildByName("icon_ting");
        player02.ui.m_PortraitStatusNodes.status_chong = player02.ui.m_PortraitNode.getChildByName("icon_chong");
        player02.ui.m_PortraitStatusNodes.status_ze = player02.ui.m_PortraitNode.getChildByName("icon_ze");
        player02.ui.m_PortraitStatusNodes.status_quemen = player02.ui.m_PortraitNode.getChildByName("icon_quemen");
        player02.ui.m_PortraitStatusNodes.emotion = player02.ui.m_PortraitNode.getChildByName("icon_emotion");
        player02.ui.m_PortraitStatusNodes.voice = player02.ui.m_PortraitNode.getChildByName("icon_voice");
        player02.ui.m_PortraitStatusNodes.message_bg = player02.ui.m_PortraitNode.getChildByName("icon_message");
        player02.ui.m_PortraitStatusNodes.message_text = player02.ui.m_PortraitStatusNodes.message_bg.getChildByName("text");
        player02.ui.m_PortraitStatusNodes.result = player02.ui.m_PortraitNode.getChildByName("icon_result");
        player02.ui.m_ReadyNode = this.m_ReadyRootNode.getChildByName("ready_02");
        player02.ui.m_ActionAnimationNode = {};
        player02.ui.m_RootNode.getChildByName("animations").setVisible(true);
        player02.ui.m_ActionAnimationNode.animation = player02.ui.m_RootNode.getChildByName("animations").getChildByName("animation");
        player02.ui.m_ActionAnimationNode.animation.setVisible(true);
        player02.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").setVisible(true);
        player02.ui.m_ActionAnimationNode.cards = new Array();
        for (var m = 0; m < 4; ++m) {
            var card = {};
            card.Card = player02.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").getChildByName("card_0" + (m + 1));
            card.Face = card.Card.getChildByName("icon_face");
            player02.ui.m_ActionAnimationNode.cards.push(card);
            card.Card.setVisible(false);
        }
        player02.ui.m_XuanQueNode = this.m_XuanQueRootNode.getChildByName("xuanque_02");
        player02.ui.m_PortraitStatusNodes.message_bg.setVisible(false);
        player02.ui.m_PortraitStatusNodes.result.setVisible(false);
        player02.ui.m_CardsInHand = new Array();
        player02.ui.m_CardsInHandForShow = new Array();
        player02.ui.m_ActionResults = new Array();
        player02.ui.m_ActionHistory = new Array();
        player02.ui.m_CardsJi = new Array();
        for (var i = 1; i < 15; ++i) {
            var key = ("00" + i);
            key = key.substring(key.length - 2);

            var card = new Array();
            card.push(player02.ui.m_CardsInHandNode.getChildByName("card_" + key));
            card.push(null);
            player02.ui.m_CardsInHand.push(card);

            card = new Array();
            card.push(player02.ui.m_CardsInHandForShowNode.getChildByName("card_" + key));
            card.push(card[0].getChildByName("icon_face"));
            player02.ui.m_CardsInHandForShow.push(card);
        }
        for (var i = 0; i < 4; ++i)
        {
            player02.ui.m_ActionResults.push(new Array());
            for (var j = 0; j < 4; ++j) {
                var key = ("00" + (j + 1));
                key = key.substring(key.length - 2);
                var card = new Array();
                card.push(player02.ui.m_ActionResultsNode[i].getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                player02.ui.m_ActionResults[i].push(card);
            }
        }
        for (var i = 1; i < this.m_HistorySize + 1; ++i)
        {
            var key = ("00" + i);
            key = key.substring(key.length - 2);
            var card = new Array();
            card.push(player02.ui.m_ActionHistoryNode.getChildByName("card_" + key));
            card.push(card[0].getChildByName("icon_face"));
            player02.ui.m_ActionHistory.push(card);
        }

        player02.ui.m_CardsJiNode = this.m_MaskNode.getChildByName("player_02").getChildByName("cards_ji");;
        for (var i = 1; i < 25; ++i) {
            var key = ("00" + i);
            key = key.substring(key.length - 2);
            var card = new Array();
            card.push(player02.ui.m_CardsJiNode.getChildByName("card_" + key));
            card.push(card[0].getChildByName("icon_face"));
            player02.ui.m_CardsJi.push(card);

        }

        player02.data.m_CardsInHand = new Array(14);
        player02.data.m_ActionResults = new Array();
        player02.data.m_ActionHistory = new Array();
        player02.data.m_CardsInHandForShow = new Array(14);

        for (var i = 0; i < 14; ++i)
        {
            player02.data.m_CardsInHand[i] = -1;
            player02.data.m_CardsInHandForShow[i] = -1;
        }

        // dui meng
        var player03 = {};
        player03.ui = {};
        player03.data = {};
        if (g_UserManager.m_RoomData.maxPlayer > 2) {
            player03.ui.m_RootNode = rootNode.getChildByName("player_03");
            player03.ui.m_CardsInHandNode = player03.ui.m_RootNode.getChildByName("cards_in_hand");
            player03.ui.m_ActionResultsNode = new Array();
            player03.ui.m_ActionResultsNode.push(player03.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_01"));
            player03.ui.m_ActionResultsNode.push(player03.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_02"));
            player03.ui.m_ActionResultsNode.push(player03.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_03"));
            player03.ui.m_ActionResultsNode.push(player03.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_04"));
            player03.ui.m_CardsInHandForShowNode = player03.ui.m_RootNode.getChildByName("cards_in_hand_for_show");
            player03.ui.m_ActionHistoryNode = player03.ui.m_RootNode.getChildByName("action_history");
            player03.ui.m_PortraitNode = player03.ui.m_RootNode.getChildByName("portrait");
            player03.ui.m_PortraitNode.addTouchEventListener(this.onPortrait3Click, this);
            player03.ui.m_PortraitStatusNodes = {};
            player03.ui.m_PortraitStatusNodes.icon = player03.ui.m_PortraitNode.getChildByName("icon");
            player03.ui.m_PortraitStatusNodes.name = player03.ui.m_PortraitNode.getChildByName("label_name");
            player03.ui.m_PortraitStatusNodes.score = player03.ui.m_PortraitNode.getChildByName("label_score");
            player03.ui.m_PortraitStatusNodes.status_offline = player03.ui.m_PortraitNode.getChildByName("icon_offline");
            player03.ui.m_PortraitStatusNodes.status_zhuang = player03.ui.m_PortraitNode.getChildByName("icon_zhuang");
            player03.ui.m_PortraitStatusNodes.status_ting = player03.ui.m_PortraitNode.getChildByName("icon_ting");
            player03.ui.m_PortraitStatusNodes.status_chong = player03.ui.m_PortraitNode.getChildByName("icon_chong");
            player03.ui.m_PortraitStatusNodes.status_ze = player03.ui.m_PortraitNode.getChildByName("icon_ze");
            player03.ui.m_PortraitStatusNodes.status_quemen = player03.ui.m_PortraitNode.getChildByName("icon_quemen");
            player03.ui.m_PortraitStatusNodes.emotion = player03.ui.m_PortraitNode.getChildByName("icon_emotion");
            player03.ui.m_PortraitStatusNodes.voice = player03.ui.m_PortraitNode.getChildByName("icon_voice");
            player03.ui.m_PortraitStatusNodes.message_bg = player03.ui.m_PortraitNode.getChildByName("icon_message");
            player03.ui.m_PortraitStatusNodes.message_text = player03.ui.m_PortraitStatusNodes.message_bg.getChildByName("text");
            player03.ui.m_PortraitStatusNodes.result = player03.ui.m_PortraitNode.getChildByName("icon_result");
            player03.ui.m_ReadyNode = this.m_ReadyRootNode.getChildByName("ready_03");
            player03.ui.m_ActionAnimationNode = {};
            player03.ui.m_RootNode.getChildByName("animations").setVisible(true);
            player03.ui.m_ActionAnimationNode.animation = player03.ui.m_RootNode.getChildByName("animations").getChildByName("animation");
            player03.ui.m_ActionAnimationNode.animation.setVisible(true);
            player03.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").setVisible(true);
            player03.ui.m_ActionAnimationNode.cards = new Array();
            for (var m = 0; m < 4; ++m) {
                var card = {};
                card.Card = player03.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").getChildByName("card_0" + (m + 1));
                card.Face = card.Card.getChildByName("icon_face");
                player03.ui.m_ActionAnimationNode.cards.push(card);
                card.Card.setVisible(false);
            }
            player03.ui.m_XuanQueNode = this.m_XuanQueRootNode.getChildByName("xuanque_03");
            player03.ui.m_PortraitStatusNodes.message_bg.setVisible(false);
            player03.ui.m_PortraitStatusNodes.result.setVisible(false);
            player03.ui.m_CardsInHand = new Array();
            player03.ui.m_CardsInHandForShow = new Array();
            player03.ui.m_ActionResults = new Array();
            player03.ui.m_ActionHistory = new Array();
            player03.ui.m_CardsJi = new Array();
            for (var i = 1; i < 15; ++i) {
                var key = ("00" + i);
                key = key.substring(key.length - 2);

                var card = new Array();
                card.push(player03.ui.m_CardsInHandNode.getChildByName("card_" + key));
                card.push(null);
                player03.ui.m_CardsInHand.push(card);

                card = new Array();
                card.push(player03.ui.m_CardsInHandForShowNode.getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                player03.ui.m_CardsInHandForShow.push(card);
            }
            for (var i = 0; i < 4; ++i) {
                player03.ui.m_ActionResults.push(new Array());
                for (var j = 0; j < 4; ++j) {
                    var key = ("00" + (j + 1));
                    key = key.substring(key.length - 2);
                    var card = new Array();
                    card.push(player03.ui.m_ActionResultsNode[i].getChildByName("card_" + key));
                    card.push(card[0].getChildByName("icon_face"));
                    player03.ui.m_ActionResults[i].push(card);
                }
            }
            for (var i = 1; i < this.m_HistorySize + 1; ++i)
            {
                var key = ("00" + i);
                key = key.substring(key.length - 2);
                var card = new Array();
                card.push(player03.ui.m_ActionHistoryNode.getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                player03.ui.m_ActionHistory.push(card);
            }

            player03.ui.m_CardsJiNode = this.m_MaskNode.getChildByName("player_03").getChildByName("cards_ji");;
            for (var i = 1; i < 25; ++i) {
                var key = ("00" + i);
                key = key.substring(key.length - 2);
                var card = new Array();
                card.push(player03.ui.m_CardsJiNode.getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                player03.ui.m_CardsJi.push(card);

            }

            player03.data.m_CardsInHand = new Array(14);
            player03.data.m_ActionResults = new Array();
            player03.data.m_ActionHistory = new Array();
            player03.data.m_CardsInHandForShow = new Array(14);

            for (var i = 0; i < 14; ++i)
            {
                player03.data.m_CardsInHand[i] = -1;
                player03.data.m_CardsInHandForShow[i] = -1;
            }
        }

        // prev player4
        var player04 = {};
        player04.ui = {};
        player04.data = {};
        if (g_UserManager.m_RoomData.maxPlayer > 3) {
            player04.ui.m_RootNode = rootNode.getChildByName("player_04");
            player04.ui.m_CardsInHandNode = player04.ui.m_RootNode.getChildByName("cards_in_hand");
            player04.ui.m_ActionResultsNode = new Array();
            player04.ui.m_ActionResultsNode.push(player04.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_01"));
            player04.ui.m_ActionResultsNode.push(player04.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_02"));
            player04.ui.m_ActionResultsNode.push(player04.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_03"));
            player04.ui.m_ActionResultsNode.push(player04.ui.m_RootNode.getChildByName("action_results").getChildByName("peng_04"));
            player04.ui.m_CardsInHandForShowNode = player04.ui.m_RootNode.getChildByName("cards_in_hand_for_show");
            player04.ui.m_ActionHistoryNode = player04.ui.m_RootNode.getChildByName("action_history");
            player04.ui.m_PortraitNode = player04.ui.m_RootNode.getChildByName("portrait");
            player04.ui.m_PortraitNode.addTouchEventListener(this.onPortrait4Click, this);
            player04.ui.m_PortraitStatusNodes = {};
            player04.ui.m_PortraitStatusNodes.icon = player04.ui.m_PortraitNode.getChildByName("icon");
            player04.ui.m_PortraitStatusNodes.name = player04.ui.m_PortraitNode.getChildByName("label_name");
            player04.ui.m_PortraitStatusNodes.score = player04.ui.m_PortraitNode.getChildByName("label_score");
            player04.ui.m_PortraitStatusNodes.status_offline = player04.ui.m_PortraitNode.getChildByName("icon_offline");
            player04.ui.m_PortraitStatusNodes.status_zhuang = player04.ui.m_PortraitNode.getChildByName("icon_zhuang");
            player04.ui.m_PortraitStatusNodes.status_ting = player04.ui.m_PortraitNode.getChildByName("icon_ting");
            player04.ui.m_PortraitStatusNodes.status_chong = player04.ui.m_PortraitNode.getChildByName("icon_chong");
            player04.ui.m_PortraitStatusNodes.status_ze = player04.ui.m_PortraitNode.getChildByName("icon_ze");
            player04.ui.m_PortraitStatusNodes.status_quemen = player04.ui.m_PortraitNode.getChildByName("icon_quemen");
            player04.ui.m_PortraitStatusNodes.emotion = player04.ui.m_PortraitNode.getChildByName("icon_emotion");
            player04.ui.m_PortraitStatusNodes.voice = player04.ui.m_PortraitNode.getChildByName("icon_voice");
            player04.ui.m_PortraitStatusNodes.message_bg = player04.ui.m_PortraitNode.getChildByName("icon_message");
            player04.ui.m_PortraitStatusNodes.message_text = player04.ui.m_PortraitStatusNodes.message_bg.getChildByName("text");
            player04.ui.m_PortraitStatusNodes.result = player04.ui.m_PortraitNode.getChildByName("icon_result");
            player04.ui.m_ReadyNode = this.m_ReadyRootNode.getChildByName("ready_04");
            player04.ui.m_ActionAnimationNode = {};
            player04.ui.m_RootNode.getChildByName("animations").setVisible(true);
            player04.ui.m_ActionAnimationNode.animation = player04.ui.m_RootNode.getChildByName("animations").getChildByName("animation");
            player04.ui.m_ActionAnimationNode.animation.setVisible(true);
            player04.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").setVisible(true);
            player04.ui.m_ActionAnimationNode.cards = new Array();
            for (var m = 0; m < 4; ++m) {
                var card = {};
                card.Card = player04.ui.m_RootNode.getChildByName("animations").getChildByName("cards_node").getChildByName("peng").getChildByName("card_0" + (m + 1));
                card.Face = card.Card.getChildByName("icon_face");
                player04.ui.m_ActionAnimationNode.cards.push(card);
                card.Card.setVisible(false);
            }
            player04.ui.m_XuanQueNode = this.m_XuanQueRootNode.getChildByName("xuanque_04");
            player04.ui.m_PortraitStatusNodes.message_bg.setVisible(false);
            player04.ui.m_PortraitStatusNodes.result.setVisible(false);
            player04.ui.m_CardsInHand = new Array();
            player04.ui.m_CardsInHandForShow = new Array();
            player04.ui.m_ActionResults = new Array();
            player04.ui.m_ActionHistory = new Array();
            player04.ui.m_CardsJi = new Array();
            for (var i = 1; i < 15; ++i) {
                var key = ("00" + i);
                key = key.substring(key.length - 2);

                var card = new Array();
                card.push(player04.ui.m_CardsInHandNode.getChildByName("card_" + key));
                card.push(null);
                player04.ui.m_CardsInHand.push(card);

                card = new Array();
                card.push(player04.ui.m_CardsInHandForShowNode.getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                player04.ui.m_CardsInHandForShow.push(card);
            }
            for (var i = 0; i < 4; ++i) {
                player04.ui.m_ActionResults.push(new Array());
                for (var j = 0; j < 4; ++j) {
                    var key = ("00" + (j + 1));
                    key = key.substring(key.length - 2);
                    var card = new Array();
                    card.push(player04.ui.m_ActionResultsNode[i].getChildByName("card_" + key));
                    card.push(card[0].getChildByName("icon_face"));
                    player04.ui.m_ActionResults[i].push(card);
                }
            }
            for (var i = 1; i < this.m_HistorySize + 1; ++i)
            {
                var key = ("00" + i);
                key = key.substring(key.length - 2);
                var card = new Array();
                card.push(player04.ui.m_ActionHistoryNode.getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                player04.ui.m_ActionHistory.push(card);
            }

            player04.ui.m_CardsJiNode = this.m_MaskNode.getChildByName("player_04").getChildByName("cards_ji");;
            for (var i = 1; i < 25; ++i) {
                var key = ("00" + i);
                key = key.substring(key.length - 2);
                var card = new Array();
                card.push(player04.ui.m_CardsJiNode.getChildByName("card_" + key));
                card.push(card[0].getChildByName("icon_face"));
                player04.ui.m_CardsJi.push(card);

            }


            player04.data.m_CardsInHand = new Array(14);
            player04.data.m_ActionResults = new Array();
            player04.data.m_ActionHistory = new Array();
            player04.data.m_CardsInHandForShow = new Array(14);

            for (var i = 0; i < 14; ++i)
            {
                player04.data.m_CardsInHand[i] = -1;
                player04.data.m_CardsInHandForShow[i] = -1;
            }
        }

        this.m_uiPlayerNodes = new Array(4);
        this.m_uiPlayerNodes[0] = myself;
        this.m_uiPlayerNodes[1] = player02;
        this.m_uiPlayerNodes[2] = player03;
        this.m_uiPlayerNodes[3] = player04;

        this.m_TimerLayers = new Array(11);
        for (var i = 0; i < 11; ++i) {
            var layer = this.createNumber(i, 2);
            this.m_uiTimer.addChild(layer);
            layer.setVisible(false);
            this.m_TimerLayers[i] = layer;
        }
        this.setCountDown(0);

        this.repositionPlayer();

        this.refreshUI();
    },

    repositionPlayer : function () {
        // reposition player instance with real position
        var myselfPosition = g_UserManager.getMyselfPosition();
        var myself = this.m_uiPlayerNodes[0];
        this.m_Players[myselfPosition] = myself;
        var playerList = new Array();
        playerList.push(this.m_uiPlayerNodes[1]);
        playerList.push(this.m_uiPlayerNodes[2]);
        playerList.push(this.m_uiPlayerNodes[3]);
        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer - 1; ++i)
        {
            myselfPosition = myselfPosition + 1;
            if (myselfPosition >= g_UserManager.m_RoomData.maxPlayer)
                myselfPosition = 0;
            this.m_Players[myselfPosition] = playerList[i];
        }

    },

    onGameServerConnected : function () {
        console.log("GameRoom->onGameServerConnected")
        if (this.m_DismissRoom != true) {
            var msg = {};
            msg.ACTION = ActionDef.RejoinRoom;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            g_RootLayer.setGpsMsg(msg)

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.RejoinRoom, msg.MSG_ID);
        }
    },

    onPlayerEnterGame : function (playerId) {
        var targetPlayer = null;
        if (playerId != g_UserManager.getMyselfPosition())
        {
            var index = playerId - g_UserManager.getMyselfPosition();
            if (index > 0)
            {
                targetPlayer = this.m_Players[index];
            }
            else
            {
                index = 4 - index;
                targetPlayer = this.m_Players[index];
            }
        }

        targetPlayer.setVisible(true);
    },

    onInviteClick : function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            var rule = "";
            if (g_UserManager.m_RoomData.maxPlayer == 4) {
                rule += "4人局";
            }
            else if (g_UserManager.m_RoomData.maxPlayer == 3)
                rule += "三丁拐";
            else
                rule += "二丁拐";
            if (g_UserManager.m_RoomData.gameMode == MahJongGameMode.FangPaiJi)
                rule += "，翻牌鸡";
            else
                rule += "，摇摆鸡";
            if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.BenJi) != 0)
                rule += "，本鸡";
            if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.WuguJi) != 0)
                rule += "，乌骨鸡";
            if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.ChuiFengJi) != 0)
                rule += "，吹风鸡";
            if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.XingQiJi) != 0)
                rule += "，星期鸡";
            if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.ChongFengJi3Fen) != 0)
                rule += "，冲锋鸡3分";
            if (g_UserManager.m_RoomData.lianZhuangType == MahJongLianZhuangType.NoLianZhuang)
                rule += "，一扣二";
            else if (g_UserManager.m_RoomData.lianZhuangType == MahJongLianZhuangType.LianZhuang)
                rule += "，连庄";
            else
                rule += "，全三";
            if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.HuangZhuangLianZhuang) != 0)
                rule += "，黄庄不下庄";
            if (g_UserManager.m_RoomData.scoreType == 3)
                rule += "，混10清20"
            else if (g_UserManager.m_RoomData.scoreType == 2)
                rule += "，混8清15"
            else
                rule += "，混5清10"
            rule += "，" + g_UserManager.m_RoomData.maxRound + "局";

            GameManager.WeChatShare(false, "房间号【" + g_UserManager.m_RoomData.roomId+ "】，" + rule + "，开搓！就差你的加入了！", "&room_id=" + g_UserManager.m_RoomData.roomId);
        }
    },

    forceQuitRoom : function () {
        var request = {};
        request.ACTION = ActionDef.RequestQuitRoom;
        request.MSG_ID = g_NetworkManager.NextMessageID();
        request.UID = g_UserManager.m_UserID;
        request.roomid = parseInt(g_UserManager.m_RoomData.roomId);

        var json = JSON.stringify(request);
        g_NetworkManager.sendMessage(json, ActionDef.RequestQuitRoom, request.MSG_ID);
    },

    commonDialogCallback : function (buttonType, tag) {
        if (buttonType == CommonButtonTypeDef.OK) {
            if (tag == "dismiss") {
                this.forceQuitRoom();
            }
            else if (tag == "quit") {
                this.onCloseClick(null, 2);
            }
            else if (tag == "PassHu") {
                this.onPassClick(null, 2);
            }
        }
    },

    requestQuitRoom : function (sender, fromSetting) {
        if (this.m_RoundStatus < RoundStatusDef.Running) {
            if (g_UserManager.m_RoomData.creator == g_UserManager.m_UserID) {
                g_RootLayer.showMessageBox("解散房间不扣房卡，是否确定解散？", "提示", (CommonButtonTypeDef.OK | CommonButtonTypeDef.Cancel), null, null, this, "dismiss");
            }
            else {
                if (fromSetting == true) {
                    g_RootLayer.showMessageBox("游戏开始后才可以解散房间", "提示", CommonButtonTypeDef.OK);
                }
                else {
                    this.forceQuitRoom();
                }
            }
        }
        else {
            var msg = {};
            msg.ACTION = ActionDef.RequestQuitVote;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.RequestQuitVote, msg.MSG_ID);
        }
    },

    requestCreateChatRoom: function (sender, fromSetting) {
        var msg = {};
        msg.ACTION = ActionDef.RequestCreateChatRoom;
        msg.MSG_ID = g_NetWorkManager.NextMessageID();
        msg.UID = g_UserManager.m_UserID;

        var json = JSON.stringify(msg);
        g_NetworkManager.sendMessage(json, ActionDef.RequestCreateChatRoom, msg.MSG_ID);
    },

    quitChatRoom:function(actuid){
        VoiceManager.QuitRoom();
        this.m_BtnTalk.loadTextureNormal("res/res/room/mahjong_voice_nor.png");
        this.m_BtnTalk.loadTexturePressed("res/res/room/mahjong_voice_pre.png");
        this.m_ChatRoomName = null;
        this.m_IsChatting = false;
        var playerPosition = g_UserManager.getPlayerPosition(actuid);
        var PlayerName = g_UserManager.m_PlayerData[playerPosition].m_NickName;
        var msgText = PlayerName + "已将实时语音聊天关闭\n（仍可按住麦克风键发送录音）";
        g_RootLayer.showMessageBox(msgText, "提示", (CommonButtonTypeDef.OK), null, null, this, "quitroomnotice");
    },

    onPortrait1Click : function (sender, eventType) {
        if (eventType == 2) {
            var layer = new PlayerInfoDialogLayer();
            this.addChild(layer, 1);
            layer.setData(g_UserManager.getPlayerDataByUIPosition(0));
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onPortrait2Click : function (sender, eventType) {
        if (eventType == 2) {
            var layer = new PlayerInfoDialogLayer();
            this.addChild(layer, 1);
            layer.setData(g_UserManager.getPlayerDataByUIPosition(1));
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onPortrait3Click : function (sender, eventType) {
        if (eventType == 2) {
            var layer = new PlayerInfoDialogLayer();
            this.addChild(layer, 1);
            layer.setData(g_UserManager.getPlayerDataByUIPosition(2));
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onPortrait4Click : function (sender, eventType) {
        if (eventType == 2) {
            var layer = new PlayerInfoDialogLayer();
            this.addChild(layer, 1);
            layer.setData(g_UserManager.getPlayerDataByUIPosition(3));
            g_AudioManager.playerEffect(SfxType.BtnClick);
        }
    },

    onBackClick : function(sender, eventType) {
        if (eventType == 2) {
            this.requestQuitRoom(this, false);
        }
    },

    onSettingClick : function (sender, eventType) {
        if (eventType == 2) {
            var layer = new SettingDialogLayer();
            layer.isGame(true);
            layer.chatRoomName(this.m_ChatRoomName);
            this.addChild(layer, 100);
        }
    },

    onChatClick : function (sender, eventType) {
        if (eventType == 2) {
            var layer = new EmotionDialogLayer();
            this.addChild(layer, 100);
        }
    },

    onTalkClick: function (sender, eventType) {
        if (this.m_IsChatting == false) {
            if (eventType == 0) {
                this.m_IconVoiceTips.setVisible(true);
                VoiceManager.StartRecord();
            }
            else if (eventType != 1) {
                this.m_IconVoiceTips.setVisible(false);
                VoiceManager.StopRecord();
            }
        }
        else {
            if (eventType == 2) {
                if (this.m_IsMicOpen == true) {
                    this.m_BtnTalk.loadTextureNormal("res/res/room/mahjong_voice_off_nor.png");
                    this.m_BtnTalk.loadTexturePressed("res/res/room/mahjong_voice_off_pre.png");
                    VoiceManager.CloseMic();
                    this.m_IsMicOpen = false;
                    return;
                }
                else {
                    this.m_BtnTalk.loadTextureNormal("res/res/room/mahjong_voice_on_nor.png");
                    this.m_BtnTalk.loadTexturePressed("res/res/room/mahjong_voice_on_pre.png");
                    VoiceManager.OpenMic();
                    this.m_IsMicOpen = true;
                    return;
                }
            }
        }
    },

    onHuClick : function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.PlayCard;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.roomid = g_UserManager.m_RoomData.roomId;
            msg.doaction = GameWaitStatusDef.Hu;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);
        }
    },

    onGangClick : function (sender, eventType) {
        if (eventType == 2) {
            if ((this.m_CurrentWaitStatus & GameWaitStatusDef.Gang) != 0) {
                var msg = {};
                msg.ACTION = ActionDef.PlayCard;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;
                msg.roomid = g_UserManager.m_RoomData.roomId;
                msg.doaction = GameWaitStatusDef.Gang;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);
            }
            else {
                if (this.m_ForcePlayCardIdsForGang.length == 1) {
                    var msg = {};
                    msg.ACTION = ActionDef.PlayCard;
                    msg.MSG_ID = g_NetworkManager.NextMessageID();
                    msg.UID = g_UserManager.m_UserID;
                    msg.roomid = g_UserManager.m_RoomData.roomId;
                    msg.doaction = GameWaitStatusDef.AnGang;
                    msg.param = this.m_ForcePlayCardIdsForGang[0];

                    var json = JSON.stringify(msg);
                    g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);
                }
                else {
                    this.setCardsMask(this.m_ForcePlayCardIdsForGang);
                    this.m_WaitStatusAction = (GameWaitStatusDef.AnGang | GameWaitStatusDef.PlayCard);
                }
            }
        }
    },

    onPengClick : function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.PlayCard;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.roomid = g_UserManager.m_RoomData.roomId;
            msg.doaction = GameWaitStatusDef.Peng;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);
        }
    },

    onTingClick : function (sender, eventType) {
        if (eventType == 2) {
            this.setCardsMask(this.m_ForcePlayCardIdsForTing);
            this.m_WaitStatusAction = (GameWaitStatusDef.Ting | GameWaitStatusDef.PlayCard);
        }
    },

    onPassClick : function (sender, eventType) {
        if (eventType == 2) {
            if (sender != null && (this.m_CurrentWaitStatus & GameWaitStatusDef.Hu) != 0) {
                g_RootLayer.showMessageBox("当前可以胡牌，是否要过牌？", "提示", (CommonButtonTypeDef.OK | CommonButtonTypeDef.Cancel), null, null, this, "PassHu");
            }
            else {
                var msg = {};
                msg.ACTION = ActionDef.PlayCard;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;
                msg.roomid = g_UserManager.m_RoomData.roomId;
                msg.doaction = GameWaitStatusDef.Pass;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);
            }
        }
    },

    onQueMenWanClick : function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.PlayCard;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.roomid = g_UserManager.m_RoomData.roomId;
            msg.doaction = GameWaitStatusDef.QueMen;
            msg.param = 0;
            this.m_QueMen = 0;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);

            var myselfPosition = g_UserManager.getMyselfPosition();
            this.sortCardsWithQueMen(this.m_Players[myselfPosition].data.m_CardsInHand);
            this.refreshUI();
        }
    },

    onQueMenTiaoClick : function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.PlayCard;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.roomid = g_UserManager.m_RoomData.roomId;
            msg.doaction = GameWaitStatusDef.QueMen;
            msg.param = 1;
            this.m_QueMen = 1;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);

            var myselfPosition = g_UserManager.getMyselfPosition();
            this.sortCardsWithQueMen(this.m_Players[myselfPosition].data.m_CardsInHand);
            this.refreshUI();
        }
    },

    onQueMenTongClick : function (sender, eventType) {
        if (eventType == 2) {
            var msg = {};
            msg.ACTION = ActionDef.PlayCard;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.roomid = g_UserManager.m_RoomData.roomId;
            msg.doaction = GameWaitStatusDef.QueMen;
            msg.param = 2;
            this.m_QueMen = 2;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);

            var myselfPosition = g_UserManager.getMyselfPosition();
            this.sortCardsWithQueMen(this.m_Players[myselfPosition].data.m_CardsInHand);
            this.refreshUI();
        }
    },

    onPlayerLeaveGame : function (playerId) {
        var targetPlayer = null;
        if (playerId != g_UserManager.getMyselfPosition())
        {
            var index = playerId - g_UserManager.getMyselfPosition();
            if (index > 0)
            {
                targetPlayer = this.m_Players[index];
            }
            else
            {
                index = 4 - index;
                targetPlayer = this.m_Players[index];
            }
        }

        targetPlayer.setVisible(false);
    },

    onPlayerDisconnect : function(playerId) {
        var targetPlayer = null;
        if (playerId != g_UserManager.getMyselfPosition())
        {
            var index = playerId - g_UserManager.getMyselfPosition();
            if (index > 0)
            {
                targetPlayer = this.m_Players[index];
            }
            else
            {
                index = 4 - index;
                targetPlayer = this.m_Players[index];
            }
        }
    },

    selectCard : function (card, newStatus) {
        var myselfPosition = g_UserManager.getMyselfPosition();
        for (var m = 0; m < 14; ++m) {
            this.m_Players[myselfPosition].ui.m_CardsInHand[m][0].x = this.m_uiSelfCardsInHandPostion[m].x;
            this.m_Players[myselfPosition].ui.m_CardsInHand[m][0].y = this.m_uiSelfCardsInHandPostion[m].y;
        }
        this.m_CurrentPopCard = null;

        if (typeof card != "undefined" && card != null) {
            if (newStatus == false) {
                var y = this.m_BaseLine;
                card.y = y;
            }
            else {
                var y = this.m_BaseLine + 30;
                card.y = y;
                this.m_CurrentPopCard = card;
            }
        }
        this.refreshUI();
    },

    setActionArea : function (actionStatus) {
        if (actionStatus == GameWaitStatusDef.Wait ||
            actionStatus == GameWaitStatusDef.PlayCard) {
            this.m_ActionArea.setVisible(false);
        }
        else {
            this.m_ActionArea.setVisible(true);
            if ((actionStatus & GameWaitStatusDef.QueMen) != 0) {
                this.m_QueMenArea.setVisible(true);
                this.m_GameActionArea.setVisible(false);
                this.m_XuanQueRootNode.setVisible(true);
                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; i++) {
                    if (i == g_UserManager.getMyselfPosition()) {
                        this.m_Players[i].ui.m_XuanQueNode.setVisible(false);
                    }
                    else {
                        this.m_Players[i].ui.m_XuanQueNode.setVisible(true);
                        this.m_Players[i].ui.m_XuanQueNode.loadTexture("res/res/room/mahjong_que2.png");
                    }
                }
            }
            else {
                this.m_QueMenArea.setVisible(false);
                this.m_BtnChi.setVisible(false);
                this.m_BtnPeng.setVisible(false);
                this.m_BtnGang.setVisible(false);
                this.m_BtnTing.setVisible(false);
                this.m_BtnHu.setVisible(false);
                this.m_BtnPass.setVisible(false);
                var actionList = new Array();
                this.m_GameActionArea.setVisible(true);
                var enablePass = false;
                if ((actionStatus & GameWaitStatusDef.Hu) != 0) {
                    this.m_BtnHu.setVisible(true);
                    enablePass = true;
                    actionList.push(this.m_BtnHu);
                }
                if ((actionStatus & GameWaitStatusDef.Ting) != 0) {
                    this.m_BtnTing.setVisible(true);
                    enablePass = true;
                    actionList.push(this.m_BtnTing);
                }
                if ((actionStatus & GameWaitStatusDef.Gang) != 0 || (actionStatus & GameWaitStatusDef.AnGang) != 0) {
                    this.m_BtnGang.setVisible(true);
                    enablePass = true;
                    actionList.push(this.m_BtnGang);
                }
                if ((actionStatus & GameWaitStatusDef.Peng) != 0) {
                    this.m_BtnPeng.setVisible(true)
                    enablePass = true;
                    actionList.push(this.m_BtnPeng);
                }
                if ((actionStatus & GameWaitStatusDef.Chi) != 0) {
                    this.m_BtnChi.setVisible(true)
                    enablePass = true;
                    actionList.push(this.m_BtnChi);
                }

                var baseIndex = 0;
                if (enablePass)
                {
                    this.m_BtnPass.setVisible(true);
                    this.m_BtnPass.x = this.m_ActionBtnPlaceHolds[baseIndex].x;
                    this.m_BtnPass.y = this.m_ActionBtnPlaceHolds[baseIndex].y;
                    baseIndex++;
                }
                for (var i = 0; i < actionList.length; ++i) {
                    actionList[i].x = this.m_ActionBtnPlaceHolds[i + baseIndex].x;
                    actionList[i].y = this.m_ActionBtnPlaceHolds[i + baseIndex].y;
                }
            }
        }
    },

    setMyselfCardsInHand : function (cards) {
        var myselfPosition = g_UserManager.getMyselfPosition();
        var myself = this.m_Players[myselfPosition];
        var startIndex = 0;
        if (cards.length == 14) {
            startIndex = 14 - cards.length;
        }
        else {
            if (g_UserManager.m_PlayerData[myselfPosition].m_GameStatus.lastStatus != 0 && this.m_IgnoreLastStatus == false) {
                startIndex = 14 - cards.length;
            }
            else {
                startIndex = 13 - cards.length;
            }
        }
        for (var i = 0; i < startIndex; i++)
        {
            myself.data.m_CardsInHand[i] = -1;
        }
        for (var i = startIndex; i < 13; ++i)
        {
            myself.data.m_CardsInHand[i] = cards[i - startIndex];
        }

        var newCard = -1;
        if (cards.length == 14 ) {
            newCard = cards[13];
        }
        else if (g_UserManager.m_PlayerData[myselfPosition].m_GameStatus.lastStatus != 0) {
            newCard = cards[cards.length - 1];
        }

        myself.data.m_CardsInHand[13] = 9999999;
        this.sortCardsWithQueMen(myself.data.m_CardsInHand);
        myself.data.m_CardsInHand[13] = newCard;
        for (var i = 0; i < 14; ++i)
        {
            this.m_Players[myselfPosition].ui.m_CardsInHand[i][0].y = this.m_BaseLine;
        }
    },

    setOtherPlayerCardsInHand : function(pos, cardNum) {

        var startIndex = 0;
        var show14 = false;
        var curPos = g_UserManager.getPlayerPosition(this.m_CurrentPlayer);
        if (cardNum == 14) {
            show14 = true;
            startIndex = 0;
        }
        else {
            if (g_UserManager.m_PlayerData[pos].m_GameStatus.lastStatus == 0) {
                startIndex = 13 - cardNum;
            }
            else {
                show14 = true;
                startIndex = 14 - cardNum;
            }
        }

        for (var j = 0; j < startIndex; j++)
        {
            this.m_Players[pos].data.m_CardsInHand[j] = -1;
        }
        for (var j = startIndex; j < 13; ++j)
        {
            this.m_Players[pos].data.m_CardsInHand[j] = 1;
        }

        if (show14 == true)
        {
            this.m_Players[pos].data.m_CardsInHand[13] = 1;
        }
        else
        {
            this.m_Players[pos].data.m_CardsInHand[13] = -1;
        }
    },

    isCardEnabled : function (card) {
        if (this.m_CardsCanPlay == null || this.m_CardsCanPlay.length == 0)
            return true;

        var myselfPosition = g_UserManager.getMyselfPosition();
        var cardIndex = parseInt(card.name.substring(card.name.length - 2)) - 1;
        var cardId = this.m_Players[myselfPosition].data.m_CardsInHand[cardIndex];

        for (var i = 0; i < this.m_CardsCanPlay.length; ++i) {
            if (this.m_CardsCanPlay[i] == cardId)
                return true;
        }

        return false;
    },

    onCardClick : function (sender, eventType) {
        var myselfPosition = g_UserManager.getMyselfPosition();
        var cardIndex = parseInt(sender.name.substring(sender.name.length - 2)) - 1;
        var cardNode = this.m_Players[myselfPosition].ui.m_CardsInHand[cardIndex][0];

        if (eventType == 0)
        {
            var myselfPosition = g_UserManager.getMyselfPosition();
            for (var m = 0; m < 14; ++m) {
                if (this.m_Players[myselfPosition].ui.m_CardsInHand[m][0] == this.m_CurrentCard) {
                    continue;
                }
                this.m_Players[myselfPosition].ui.m_CardsInHand[m][0].x = this.m_uiSelfCardsInHandPostion[m].x;
                this.m_Players[myselfPosition].ui.m_CardsInHand[m][0].y = this.m_uiSelfCardsInHandPostion[m].y;
                this.m_cardNodeY = this.m_uiSelfCardsInHandPostion[m].y;
            }
            this.m_Follower.Target = null;

            //if ((this.m_WaitStatusAction & GameWaitStatusDef.PlayCard) == 0 || this.m_CurrentWaitStatus == GameWaitStatusDef.Wait)
            //    return;

            var cardEnabled = this.isCardEnabled(cardNode);
            if (cardEnabled == false)
                return ;

            this.m_Follower.Target = cardNode;
            this.m_Follower.Origin = {};
            this.m_Follower.Origin.x = cardNode.x;
            this.m_Follower.Origin.y = cardNode.y;
            this.m_Follower.LastPosition = {};
            this.m_Follower.LastPosition.x = sender.getTouchBeganPosition().x;
            this.m_Follower.LastPosition.y = sender.getTouchBeganPosition().y;
            if (cardNode.y == this.m_cardNodeY) {
                this.m_CurrentPopCard = cardNode;
                this.refreshUI();
                this.m_CurrentPopCard = null;
            }
        }
        else if (eventType == 1)
        {
            if (typeof this.m_Follower.Target != "undefined" && this.m_Follower.Target != null && this.m_Follower.Target != cardNode)
            {
                return ;
            }

            if (typeof this.m_Follower.Target != "undefined" && this.m_Follower.Target != null) {
                var delta = {};
                delta.x = sender.getTouchMovePosition().x - this.m_Follower.LastPosition.x;
                delta.y = sender.getTouchMovePosition().y - this.m_Follower.LastPosition.y;
                this.m_Follower.Target.x += delta.x;
                this.m_Follower.Target.y += delta.y;
                this.m_Follower.LastPosition.x = sender.getTouchMovePosition().x;
                this.m_Follower.LastPosition.y = sender.getTouchMovePosition().y;
            }
        }
        else if (eventType == 2 || eventType == 3)
        {
            var m_Follower_Target_y = 0;
            if (typeof this.m_Follower.Target != "undefined" && this.m_Follower.Target != null && this.m_Follower.Target != cardNode)
            {
                return ;
            }


            var cardEnabled = this.isCardEnabled(cardNode);
            if (cardEnabled == false) {
                if (typeof this.m_Follower.Target != "undefined" && this.m_Follower.Target != null) {
                    this.m_Follower.Target.x = this.m_uiSelfCardsInHandPostion[cardIndex].x;
                    this.m_Follower.Target.y = this.m_uiSelfCardsInHandPostion[cardIndex].y;
                    m_Follower_Target_y = this.m_Follower.Target.y;
                    this.m_Follower.Target = null;
                }
                return;
            }

            var asClick = false;
            var drop = false;
            if (typeof this.m_Follower.Target != "undefined" && this.m_Follower.Target != null) {
                var y = this.m_Follower.Target.y - this.m_Follower.Origin.y;
                if (this.m_Follower.Target.y - this.m_Follower.Origin.y > 120)
                {
                    m_Follower_Target_y = this.m_Follower.Target.y;
                    this.m_CurrentCard = cardNode;
                    asClick = true;
                    drop = true;
                }
                else if (Math.abs(this.m_Follower.Target.x - this.m_Follower.Origin.x) < 10 && Math.abs(this.m_Follower.Target.y - this.m_Follower.Origin.y) < 10) {
                    asClick = true;
                    //this.m_Follower.Target.x = this.m_uiSelfCardsInHandPostion[cardIndex].x;
                    //this.m_Follower.Target.y = this.m_uiSelfCardsInHandPostion[cardIndex].y;
                    m_Follower_Target_y = this.m_Follower.Target.y;
                    this.m_Follower.Target = null;
                }
                else {
                    this.m_Follower.Target.x = this.m_uiSelfCardsInHandPostion[cardIndex].x;
                    this.m_Follower.Target.y = this.m_uiSelfCardsInHandPostion[cardIndex].y;
                    m_Follower_Target_y = this.m_Follower.Target.y;
                    this.m_Follower.Target = null;
                    this.m_CurrentCard = null;
                }
            }
            if (m_Follower_Target_y == this.m_cardNodeY && asClick == false) {
                this.m_CurrentPopCard = null;
                this.refreshUI();
            }
            if (asClick == false) {
                return;
            }

            var curTime = new Date().getTime();
            if (this.m_CurrentPopCard != cardNode) {
                this.selectCard(cardNode, true);
                this.m_CurrentPopCard = null
            }
            else
            {
                //this.selectCard(cardNode, false);
            }

            if (this.m_CurrentCard == cardNode) {
                if (typeof this.m_Follower.Target != "undefined" && this.m_Follower.Target != null) {
                    this.m_Follower.Target.x = this.m_uiSelfCardsInHandPostion[cardIndex].x;
                    this.m_Follower.Target.y = this.m_uiSelfCardsInHandPostion[cardIndex].y;
                }

                //if (curTime - this.m_LastClickTime < 2000 || drop) {
                if (this.playCard(cardNode) == true) {
                    //if (typeof this.m_Follower.Target != "undefined" && this.m_Follower.Target != null) {
                    //    this.m_Follower.Target.x = this.m_uiSelfCardsInHandPostion[cardIndex].x;
                    //    this.m_Follower.Target.y = this.m_uiSelfCardsInHandPostion[cardIndex].y;
                    //}

                    this.selectCard(cardNode, false);
                    this.m_CurrentCard = null;
                    g_AudioManager.playerEffect(SfxType.CardOut);
                }
                else {
                }
                if (this.m_Follower.Target)
                    m_Follower_Target_y = this.m_Follower.Target.y;
                //}
            }
            else
            {
                this.m_CurrentCard = cardNode;
            }
            if (cardNode.y == this.m_cardNodeY) {
                this.m_CurrentPopCard = null;
                this.refreshUI();
            }


            this.m_LastClickTime = curTime;
        }
    },


    setCardsMask : function (cards) {
        var myselfPosition = g_UserManager.getMyselfPosition();

        for (var i = 0; i < this.m_Players[myselfPosition].ui.m_CardsInHand.length; ++i) {
            this.m_Players[myselfPosition].ui.m_CardsInHand[i][2].setVisible(false);
        }

        if (cards == null)
            cards = this.m_ForcePlayCardIdsForQueMen;

        this.m_CardsCanPlay = cards;

        if (cards.length == 0) {
            for (var i = 0; i < this.m_Players[myselfPosition].data.m_CardsInHand.length; ++i) {
                this.m_Players[myselfPosition].ui.m_CardsInHand[i][2].setVisible(false);
            }
        }
        else {
            for (var i = 0; i < this.m_Players[myselfPosition].data.m_CardsInHand.length; ++i) {
                var enable = true;
                for (var j = 0; j < cards.length; ++j) {
                    if (cards[j] == this.m_Players[myselfPosition].data.m_CardsInHand[i]) {
                        enable = false;
                        break;
                    }
                }

                this.m_Players[myselfPosition].ui.m_CardsInHand[i][2].setVisible(enable);
            }
        }
    },

    onCloseClick : function (sender, eventType) {
        if (eventType == 2) {
            g_RootLayer.switchScene(ScenePredefineName.Entry);
        }
    },

    setLocator : function(myselfPosition, playerPosition) {
        if (playerPosition > 3 || playerPosition < 0)
            return ;

        this.m_uiLocatorIcon.setVisible(true);
        this.m_uiLocatorAnimNode.setVisible(true);
        if (playerPosition == myselfPosition) {
            this.m_LocatorAnim.node.stopAllActions();
            this.m_LocatorAnim.action.gotoFrameAndPlay(g_ResCurrentPlayerTip[0].start, g_ResCurrentPlayerTip[0].end, true);
            this.m_LocatorAnim.node.runAction(this.m_LocatorAnim.action);
        }
        else {
            var index = ((playerPosition + (g_UserManager.m_RoomData.maxPlayer - myselfPosition)) % g_UserManager.m_RoomData.maxPlayer);
            this.m_LocatorAnim.node.stopAllActions();
            this.m_LocatorAnim.action.gotoFrameAndPlay(g_ResCurrentPlayerTip[index].start, g_ResCurrentPlayerTip[index].end, true);
            this.m_LocatorAnim.node.runAction(this.m_LocatorAnim.action);
        }
    },


    syncPlayerGameData : function (msgData) {
        var myselfPosition = g_UserManager.getMyselfPosition();
        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
            var playerData = g_UserManager.getPlayerDataByPosition(i);
            var index = ["u" + playerData.m_UserID];
            if (typeof msgData[index].quemen != "undefined" && msgData[index].quemen != null)
            {
                if (myselfPosition == i) {
                    this.m_QueMen = msgData[index].quemen;
                }
                g_UserManager.m_PlayerData[i].m_GameStatus.quemen = msgData[index].quemen;
            }
            if (typeof msgData[index].nickname != "undefined" && msgData[index].nickname != null)
                g_UserManager.m_PlayerData[i].m_NickName = msgData[index].nickname;
            if (typeof msgData[index].sex != "undefined" && msgData[index].sex != null)
                g_UserManager.m_PlayerData[i].m_Sex = msgData[index].sex;
            if (typeof msgData[index].avatar != "undefined" && msgData[index].avatar != null)
                g_UserManager.m_PlayerData[i].m_PortraitURL = msgData[index].avatar;
            this.m_Players[i].data.m_ActionResults = new Array();
            for (var j = 0; j < msgData[index].pkc.length; ++j) {
                var data = {};
                data.ActionType = msgData[index].pkc[j][0];
                data.Cards = new Array();
                for (var m = 0; m < msgData[index].pkc[j][1].length; ++m) {
                    data.Cards.push(msgData[index].pkc[j][1][m]);
                }
                this.m_Players[i].data.m_ActionResults.push(data);
            }

            this.m_Players[i].data.m_ActionHistory = new Array();
            for (var j = 0; j < msgData[index].discardtiles.length; ++j) {
                this.m_Players[i].data.m_ActionHistory.push(msgData[index].discardtiles[j]);
            }


            playerData.m_GameStatus.isTing = false;
            playerData.m_GameStatus.isChong = false;
            playerData.m_GameStatus.isZe = false;
            for (var j = 0; j < msgData[index].hasstatus.length; ++j) {
                if (msgData[index].hasstatus[j] == g_ScorePointTypeDef.TianTing) {
                    playerData.m_GameStatus.isTing = true;
                }
                if (msgData[index].hasstatus[j] == g_ScorePointTypeDef.ChongFengJi || msgData[index].hasstatus[j] == g_ScorePointTypeDef.WuGuChongFengJi) {
                    playerData.m_GameStatus.isChong = true;
                }
                if (msgData[index].hasstatus[j] == g_ScorePointTypeDef.ZeRenJiVictim) {
                    playerData.m_GameStatus.isZe = true;
                }
            }
        }

    },

    refreshQuemenList : function () {
        this.m_ForcePlayCardIdsForQueMen = new Array();
        var myselfPosition = g_UserManager.getMyselfPosition();
        if (this.m_QueMen != -1) {
            var minId = 0;
            var maxId = 10;
            if (this.m_QueMen == 1) {
                minId = 10;
                maxId = 20;
            }
            else if (this.m_QueMen == 2) {
                minId = 20;
                maxId = 30;
            }
            for (var i = 0; i < this.m_Players[myselfPosition].data.m_CardsInHand.length; ++i) {
                var exist = false;
                if (this.m_Players[myselfPosition].data.m_CardsInHand[i] > minId && this.m_Players[myselfPosition].data.m_CardsInHand[i] < maxId) {
                    for (var m = 0; m < this.m_ForcePlayCardIdsForQueMen.length; ++m) {
                        if (this.m_ForcePlayCardIdsForQueMen[m] == this.m_Players[myselfPosition].data.m_CardsInHand[i]) {
                            exist = true;
                            break;
                        }
                    }
                    if (exist == false)
                        this.m_ForcePlayCardIdsForQueMen.push(this.m_Players[myselfPosition].data.m_CardsInHand[i]);
                }
            }
        }
    },

    // ActionDef.SetActionStatus
    networkSetActionStatus : function (msgData) {
        this.m_WaitStatusAction = GameWaitStatusDef.Wait;
        this.m_CurrentWaitStatus = msgData.playerstatus;
        this.m_ForcePlayCardIdsForTing = new Array();
        this.m_ForcePlayCardIdsForGang = new Array();
        this.setCardsMask(null);
        var myselfPosition = g_UserManager.getMyselfPosition();

        if (typeof msgData.quemen != "undefined")
            this.m_QueMen = msgData.quemen;
        this.refreshQuemenList();

        this.setCardsMask(this.m_ForcePlayCardIdsForQueMen);

        if ((this.m_CurrentWaitStatus & GameWaitStatusDef.PlayCard) != 0) {
            this.m_WaitStatusAction |= GameWaitStatusDef.PlayCard;
            if (this.m_Players[myselfPosition].data.m_CardsInHand[13] > 0 && this.isCardEnabled(this.m_Players[myselfPosition].ui.m_CardsInHand[13][0])) {
                this.selectCard(this.m_Players[myselfPosition].ui.m_CardsInHand[13][0]);
                this.m_CurrentCard = this.m_Players[myselfPosition].ui.m_CardsInHand[13][0];
            }
            else {
                this.selectCard(null);
                this.m_CurrentCard = null;
            }
        }
        if ((this.m_CurrentWaitStatus & GameWaitStatusDef.QueMen) != 0) {
            this.m_WaitStatusAction |= GameWaitStatusDef.QueMen;
        }
        if ((this.m_CurrentWaitStatus & GameWaitStatusDef.Ting) != 0)
        {
            if (typeof msgData.param != "undefined" && msgData.param != null) {
                for (var i = 0; i < msgData.param.length; ++i) {
                    this.m_ForcePlayCardIdsForTing.push(msgData.param[i]);
                }
            }
        }
        if ((this.m_CurrentWaitStatus & GameWaitStatusDef.AnGang) != 0) {
            var newCardId = -1;
            if (this.m_Players[myselfPosition].data.m_CardsInHand[13] != -1)
                newCardId = this.m_Players[myselfPosition].data.m_CardsInHand[13];
            if ( newCardId != -1) {
                // 转弯豆
                for (var i = 0; i < this.m_Players[myselfPosition].data.m_ActionResults.length; ++i) {
                    if (this.m_Players[myselfPosition].data.m_ActionResults[i].ActionType == ActionResultTypeDef.Peng) {
                        if (this.m_Players[myselfPosition].data.m_ActionResults[i].Cards[0] == newCardId) {
                            this.m_ForcePlayCardIdsForGang.push(newCardId);
                            break;
                        }
                    }
                }
            }

            var cards = new Array();
            for (var i = 0; i < this.m_Players[myselfPosition].data.m_CardsInHand.length; ++i)
            {
                cards.push(this.m_Players[myselfPosition].data.m_CardsInHand[i]);
            }
            this.sortCardsNoQueMen(cards);

            // 手牌4张
            var count = 0;
            var curCardId = -1;
            for (var i = 0; i < cards.length; ++i) {
                if (cards[i] <= 0)
                    continue;
                if (cards[i] != curCardId) {
                    curCardId = cards[i];
                    count = 1;
                }
                else {
                    count++;
                    if (count == 4) {
                        var exist = false;
                        for (var m = 0; m < this.m_ForcePlayCardIdsForGang.length; ++m) {
                            if (this.m_ForcePlayCardIdsForGang[m] == curCardId) {
                                exist = true;
                                break;
                            }
                        }
                        if (exist == false)
                            this.m_ForcePlayCardIdsForGang.push(curCardId);
                    }
                }
            }

            for (var i = 0; i < this.m_Players[myselfPosition].data.m_ActionResults.length; ++i) {
                if (this.m_Players[myselfPosition].data.m_ActionResults[i].ActionType == ActionResultTypeDef.Peng) {
                    var cardId = this.m_Players[myselfPosition].data.m_ActionResults[i].Cards[0];
                    for (var j = 0; j < 13; j++) {
                        if (this.m_Players[myselfPosition].data.m_CardsInHand[j] == cardId) {
                            var exist = false;
                            for (var m = 0; m < this.m_ForcePlayCardIdsForGang.length; ++m) {
                                if (this.m_ForcePlayCardIdsForGang[m] == cardId) {
                                    exist = true;
                                    break;
                                }
                            }
                            if (exist == false) {
                                this.m_ForcePlayCardIdsForGang.push(cardId);
                            }
                        }
                    }
                }
            }
        }

        this.setActionArea(this.m_CurrentWaitStatus);
    },

    onReceiveMessage : function(action, msgData) {
        switch (action) {
            case ActionDef.ForceQuitRoom:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }
                if (msgData.success == 1) {
                    if (msgData.isdismiss == 1) {
                        g_RootLayer.showMessageBox("房间已解散！", "提示", CommonButtonTypeDef.OK, null, null, this, "quit");
                    }
                    else
                    {
                        g_RootLayer.showMessageBox("您已离开房间！", "提示", CommonButtonTypeDef.OK, null, null, this, "quit");
                    }
                    g_UserManager.m_RoomData.roomid = 0;
                    g_AudioManager.playerEffect(SfxType.LeftRoom);
                }
                else {
                    g_RootLayer.showMessageBox("解散房间投票失败！");
                }
            }
                break;

            case ActionDef.PlayerQuit:
            {
                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                    if (g_UserManager.m_PlayerData[i].m_UserID == msgData.actuid) {
                        g_UserManager.m_PlayerData[i].m_UserID = -1;

                        break;
                    }
                }

                this.refreshUI();
            }
                break;

            case ActionDef.XuanQueState:
            {
                this.m_IsAllXuanQue = true;
                for (var i = 0; i < msgData.xuanque.length; i++) {
                    if (msgData.xuanque[i] == 0) {
                        this.m_IsAllXuanQue = false;
                    }
                    this.m_Players[i].ui.m_XuanQueNode.setVisible(true);
                    if (i == g_UserManager.getMyselfPosition() && msgData.xuanque[i] == 0) {
                        this.m_Players[i].ui.m_XuanQueNode.setVisible(false);
                        continue;
                    }
                    else if (msgData.xuanque[i] == 0) {
                        this.m_Players[i].ui.m_XuanQueNode.loadTexture("res/res/room/mahjong_que2.png");
                    }
                    else{
                        this.m_Players[i].ui.m_XuanQueNode.setVisible(true);
                        this.m_Players[i].ui.m_XuanQueNode.loadTexture("res/res/room/mahjong_que1.png");
                    }
                }

                if (this.m_IsAllXuanQue == true) {
                    for (var i = 0; i < msgData.xuanque.length; i++) {
                        this.m_Players[i].ui.m_XuanQueNode.setVisible(false);
                    }
                    this.m_XuanQueRootNode.setVisible(false);
                }
            }
                break;

            case ActionDef.RoundStart: {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }

                this.resetUI();

                this.m_RoundStatus = RoundStatusDef.RoundStarted;
                this.m_CurrentRound = msgData.round;
                this.m_CardRemain = msgData.remain;
                this.m_DianUser = -1;
                this.m_ShowCardsInHand = false;
                this.m_IsAllXuanQue = false;
                var zhuangPos = g_UserManager.getPlayerPosition(msgData.zhuang);
                this.m_LastPlayer = 0;
                this.m_LastCardID = 0;
                this.m_QueMen = -1;
                this.m_IgnoreLastStatus = false;
                this.m_IsAllXuanQue = false;
                this.m_ForcePlayCardIdsForQueMen = new Array();
                this.setCardsMask(null);

                for (var i = 0; i < 4; ++i) {
                    g_UserManager.m_PlayerData[i].m_GameStatus.isReady = false;
                }

                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i)
                {
                    var playerData = g_UserManager.getPlayerDataByPosition(i);
                    playerData.m_GameStatus.reset();
                    this.m_Players[i].ui.m_ReadyNode.setVisible(false);
                    if (i == zhuangPos)
                        playerData.m_GameStatus.isZhuang = true;
                    else
                        playerData.m_GameStatus.isZhuang = false;
                    this.m_Players[i].data.m_ActionHistory = new Array();
                    this.m_Players[i].data.m_ActionResults = new Array();
                }
                this.m_ForcePlayCardIdsForTing = new Array();
                this.m_ForcePlayCardIdsForGang = new Array();
                var myselfPosition = g_UserManager.getMyselfPosition();
                var cards = msgData.tiles;
                this.setMyselfCardsInHand(cards);

                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; i++) {
                    if (i == myselfPosition)
                        continue;

                    this.setOtherPlayerCardsInHand(i, msgData.tilescount[i]);
                }

                this.refreshUI();
            }
                break;

            case ActionDef.StartTimer:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }
                var countDown = msgData.endtime - msgData.servertime;
                var curTime = new Date().getTime();
                var endTime = new Date();
                endTime.setTime(curTime + countDown * 1000);
                this.m_CountDownEndTime = endTime.getTime();

                this.m_CurrentWaitStatus = GameWaitStatusDef.Wait;
            }
                break;

            case ActionDef.DrawCard:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }
                this.m_IgnoreLastStatus = false;
                this.m_CardRemain = msgData.remain;
                var myselfPosition = g_UserManager.getMyselfPosition();
                var playerPosition = g_UserManager.getPlayerPosition(msgData.actuid);
                this.setLocator(myselfPosition, playerPosition);
                this.m_CurrentPlayer = msgData.actuid;
                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i)
                {
                    this.m_Players[i].data.m_CardsInHand[13] = -1;
                    g_UserManager.m_PlayerData[i].m_GameStatus.lastStatus = 0;
                }

                g_UserManager.m_PlayerData[playerPosition].m_GameStatus.lastStatus = 1;
                this.m_Players[playerPosition].data.m_CardsInHand[13] = 99999;
                this.sortCardsWithQueMen(this.m_Players[playerPosition].data.m_CardsInHand);

                if (playerPosition == myselfPosition)
                {
                    this.m_Players[playerPosition].data.m_CardsInHand[13] = msgData.tiles[msgData.tiles.length - 1];
                }
                else
                {
                    this.m_Players[playerPosition].data.m_CardsInHand[13] = 1;
                }

                this.setLocator(myselfPosition, playerPosition);

                this.refreshUI();

                g_AudioManager.playerEffect(SfxType.DistCard);
            }
                break;

            case ActionDef.SetActionStatus:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }
                this.networkSetActionStatus(msgData);
            }
                break;

            case ActionDef.PlayCard:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }

                this.setActionArea(GameWaitStatusDef.Wait);
            }
                break;

            case ActionDef.ActionResult:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }

                this.m_IgnoreLastStatus = false;

                var myselfPosition = g_UserManager.getMyselfPosition();
                var playerPosition = g_UserManager.getPlayerPosition(msgData.actuid);
                var actionStatus = msgData.actstatus;
                var cardId = msgData.param;

                var animData = {};

                this.syncPlayerGameData(msgData);

                this.m_LastPlayer = msgData.actuid;
                this.m_LastCardID = 0;

                for (var i = 0; i < 4; i++) {
                    g_UserManager.m_PlayerData[i].m_GameStatus.lastStatus = 0;
                }

                var huId = msgData.actuid;
                this.m_DianUser = msgData.dianpaouser;
                var round_end = false;

                if (actionStatus == GameActionDef.ChongFeng || actionStatus == GameActionDef.WuGuChongFeng) {
                    animData.key = g_AnimationPredefine.ChongFengJi.Key;
                    animData.PlayNode = this.m_AnimationCommonNode;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.ZeRen || actionStatus == GameActionDef.WuGuZeRen) {
                    animData.key = g_AnimationPredefine.ZeRenJi.Key;
                    animData.PlayNode = this.m_AnimationCommonNode;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.ZhuanWanDou) {
                    g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, VoiceType.Gang);

                    animData.key = g_AnimationPredefine.Gang.Key;
                    animData.PlayNode = this.m_Players[playerPosition].ui.m_ActionAnimationNode.animation;
                    animData.CardNodes = this.m_Players[playerPosition].ui.m_ActionAnimationNode.cards;
                    var actionData = {};
                    actionData.ActionType = actionStatus;
                    actionData.Cards = new Array(4);
                    for (var m = 0; m < 4; m++) {
                        actionData.Cards[m] = cardId;
                    }
                    animData.ActionData = actionData;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.Peng) {
                    this.setLocator(myselfPosition, playerPosition);
                    g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, VoiceType.Peng);

                    animData.key = g_AnimationPredefine.Peng.Key;
                    animData.PlayNode = this.m_Players[playerPosition].ui.m_ActionAnimationNode.animation;
                    animData.CardNodes = this.m_Players[playerPosition].ui.m_ActionAnimationNode.cards;
                    var actionData = {};
                    actionData.ActionType = actionStatus;
                    actionData.Cards = new Array(3);
                    for (var m = 0; m < 3; m++) {
                        actionData.Cards[m] = cardId;
                    }
                    animData.ActionData = actionData;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.Gang) {
                    this.setLocator(myselfPosition, playerPosition);
                    g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, VoiceType.Gang);

                    animData.key = g_AnimationPredefine.Gang.Key;
                    animData.PlayNode = this.m_Players[playerPosition].ui.m_ActionAnimationNode.animation;
                    animData.CardNodes = this.m_Players[playerPosition].ui.m_ActionAnimationNode.cards;
                    var actionData = {};
                    actionData.ActionType = actionStatus;
                    actionData.Cards = new Array(4);
                    for (var m = 0; m < 4; m++) {
                        actionData.Cards[m] = cardId;
                    }
                    animData.ActionData = actionData;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.AnGang) {
                    g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, VoiceType.Gang);

                    animData.key = g_AnimationPredefine.Gang.Key;
                    animData.PlayNode = this.m_Players[playerPosition].ui.m_ActionAnimationNode.animation;
                    animData.CardNodes = this.m_Players[playerPosition].ui.m_ActionAnimationNode.cards;
                    var actionData = {};
                    actionData.ActionType = actionStatus;
                    actionData.Cards = new Array(4);
                    for (var m = 0; m < 4; m++) {
                        actionData.Cards[m] = cardId;
                    }
                    animData.ActionData = actionData;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.QiangGangHu) {
                    g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, VoiceType.JiePao);
                    round_end = true;

                    animData.key = g_AnimationPredefine.DianPao.Key;
                    animData.PlayNode = this.m_AnimationCommonNode;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.ZiMo) {
                    g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, VoiceType.ZiMo);

                    round_end = true;

                    animData.key = g_AnimationPredefine.ZiMo.Key;
                    animData.PlayNode = this.m_AnimationCommonNode;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.DianPao) {
                    g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, VoiceType.JiePao);
                    round_end = true;

                    animData.key = g_AnimationPredefine.DianPao.Key;
                    animData.PlayNode = this.m_AnimationCommonNode;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.Ting) {
                    animData.key = g_AnimationPredefine.Ting.Key;
                    animData.PlayNode = this.m_Players[playerPosition].ui.m_ActionAnimationNode.animation;
                    var actionData = {};
                    actionData.ActionType = actionStatus;
                    animData.ActionData = actionData;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else if (actionStatus == GameActionDef.DaPai) {
                    this.m_LastPlayer = msgData.actuid;
                    this.m_LastCardID = 0;
                    if (this.m_Players[playerPosition].data.m_ActionHistory.length > 0) {
                        this.m_LastCardID = this.m_Players[playerPosition].data.m_ActionHistory[this.m_Players[playerPosition].data.m_ActionHistory.length - 1];
                    }

                    if (playerPosition != myselfPosition) {
                        g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, cardId);
                        animData.key = g_AnimationPredefine.DaPai.Key;
                        animData.PlayNode = this.m_Players[playerPosition].ui.m_ActionAnimationNode.animation;
                        animData.CardNodes = this.m_Players[playerPosition].ui.m_ActionAnimationNode.cards;
                        var actionData = {};
                        actionData.ActionType = actionStatus;
                        actionData.Cards = new Array(1);
                        actionData.Cards[0] = cardId;
                        animData.ActionData = actionData;
                        this.m_AnimationsWaitForPlay.push(animData);
                    }
                }

                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; i++) {
                    if (i == myselfPosition) {
                        if (playerPosition == myselfPosition) {
                            var cards = msgData.tiles;
                            this.setMyselfCardsInHand(cards);
                        }
                    }
                    else {
                        this.setOtherPlayerCardsInHand(i, msgData.tilescount[i]);
                    }
                }

                this.refreshQuemenList();
                this.setCardsMask(this.m_ForcePlayCardIdsForQueMen);

                this.refreshUI();

                if (round_end == true) {
                    var index = g_UserManager.getPlayerPosition(huId);
                    if (typeof this.m_DianUser == "undefined" || this.m_DianUser == null || this.m_DianUser <= 0) {
                        this.m_Players[index].ui.m_PortraitStatusNodes.result.setVisible(true);
                        this.m_Players[index].ui.m_PortraitStatusNodes.result.loadTexture("res/res/room/mahjong_zimo.png");
                    }
                    else {
                        this.m_Players[index].ui.m_PortraitStatusNodes.result.setVisible(true);
                        this.m_Players[index].ui.m_PortraitStatusNodes.result.loadTexture("res/res/room/mahjong_hupai.png");
                        index = g_UserManager.getPlayerPosition(this.m_DianUser);
                        this.m_Players[index].ui.m_PortraitStatusNodes.result.setVisible(true);
                        this.m_Players[index].ui.m_PortraitStatusNodes.result.loadTexture("res/res/room/mahjong_dianpao.png");
                    }
                }

            }
                break;

            case ActionDef.RoundEnd:
            {
                this.setActionArea(GameWaitStatusDef.Wait);
                this.m_RoundStatus = RoundStatusDef.RoundEnd;

                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }

                this.m_QingChuPai.setVisible(false);

                this.m_ShowCardsInHand = true;
                this.m_LastPlayer = 0;
                this.m_LastCardID = 0;
                this.m_IgnoreLastStatus = false;
                this.m_CountDownEndTime = 0;

                this.m_dataRoundResult = {};
                this.m_dataRoundResult.isHuangPai = msgData.huangpai;
                if (msgData.huangpai == 1) {
                    g_AudioManager.playerEffect(SfxType.LiuJu);
                }
                this.m_dataRoundResult.FanPaiJi = new Array();
                if (typeof msgData.fanpai != "undefined"  && msgData.fanpai != null) {
                    for (var i = 0; i < msgData.fanpai.length; ++i) {
                        this.m_dataRoundResult.FanPaiJi.push(msgData.fanpai[i]);
                    }
                }

                var imhu = false;
                var hasTing = false;
                this.m_dataRoundResult.HuUser = new Array();
                if (typeof msgData.huuser != "undefined" && msgData.huuser != null) {
                    for (var i = 0; i < msgData.huuser.length; ++i) {
                        if (msgData.huuser[i] == g_UserManager.m_UserID)
                            imhu = true;
                        this.m_dataRoundResult.HuUser.push(msgData.huuser[i]);
                    }
                }

                if (msgData.huangpai != 1) {
                    if (imhu == true)
                        g_AudioManager.playerEffect(SfxType.Win);
                    else
                        g_AudioManager.playerEffect(SfxType.Lose);
                }


                this.m_dataRoundResult.FanPai = -1;
                if (typeof msgData.fan != "undefined" && msgData.fan != null) {
                    if (msgData.fan > 0) {
                        this.m_dataRoundResult.FanPai = msgData.fan;
                    }
                }

                if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.XingQiJi) != 0) {
                    if (msgData.dow == 0) {
                        this.m_dataRoundResult.XingQiJi = 7;
                    }
                    else {
                        this.m_dataRoundResult.XingQiJi = msgData.dow;
                    }
                }

                var jiList = new Array();
                if (this.m_dataRoundResult.FanPai != -1) {
                    for (var m = 0; m < this.m_dataRoundResult.FanPaiJi.length; ++m) {
                        jiList.push(this.m_dataRoundResult.FanPaiJi[m]);
                    }
                }

                if (typeof this.m_dataRoundResult.XingQiJi != "undefined") {
                    var exist = false;
                    for (var m = 0; m < this.m_dataRoundResult.FanPaiJi.length; ++m) {
                        if (this.m_dataRoundResult.FanPaiJi[m] == this.m_dataRoundResult.XingQiJi) {
                            exist = true;
                            break;
                        }
                    }
                    if (exist == false) {
                        jiList.push(this.m_dataRoundResult.XingQiJi);
                    }
                    exist = false;
                    for (var m = 0; m < this.m_dataRoundResult.FanPaiJi.length; ++m) {
                        if (this.m_dataRoundResult.FanPaiJi[m] == this.m_dataRoundResult.XingQiJi + 10) {
                            exist = true;
                            break;
                        }
                    }
                    if (exist == false) {
                        jiList.push(this.m_dataRoundResult.XingQiJi + 10);
                    }
                    exist = false;
                    for (var m = 0; m < this.m_dataRoundResult.FanPaiJi.length; ++m) {
                        if (this.m_dataRoundResult.FanPaiJi[m] == this.m_dataRoundResult.XingQiJi + 20) {
                            exist = true;
                            break;
                        }
                    }
                    if (exist == false) {
                        jiList.push(this.m_dataRoundResult.XingQiJi + 20);
                    }
                }

                this.m_dataRoundResult.PlayerData = new Array(g_UserManager.m_RoomData.maxPlayer);
                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                    var userId = g_UserManager.getPlayerDataByPosition(i).m_UserID;
                    var playerData = {};
                    var isHu = false;
                    if (typeof msgData.huuser != "undefined" && msgData.huuser != null) {
                        for (var j = 0; j < msgData.huuser.length; ++j) {
                            if (msgData.huuser[j] == userId ) {
                                isHu = true;
                                break;
                            }
                        }
                    }

                    playerData.UserID = userId;
                    playerData.DianUser = this.m_DianUser;
                    playerData.isHu = isHu;

                    playerData.isTing = msgData["u" + userId].ting;
                    if (playerData.isTing == true)
                        hasTing = true;

                    playerData.WinType = msgData["u" + userId].wintype;
                    var scores = msgData["u" + userId].score;
                    playerData.ScorePoints = new Array();
                    for (var j = 0; j < scores.length / 3; ++j)
                    {
                        var sp = {};
                        sp.ScorePointType = scores[j * 3];
                        sp.ScorePointCardID = scores[j * 3 + 1];
                        sp.ScorePoint = scores[j * 3 + 2];
                        playerData.ScorePoints.push(sp);
                    }
                    playerData.RoundScore = msgData["u" + userId].roundscore;
                    playerData.GameScore = msgData["u" + userId].totalscore;
                    playerData.isZhuang = g_UserManager.getPlayerDataByPosition(i).m_GameStatus.isZhuang;
                    playerData.UserName = g_UserManager.getPlayerDataByPosition(i).m_NickName;
                    playerData.IconURL = g_UserManager.getPlayerDataByPosition(i).m_PortraitURL;
                    var cardsInHand = new Array();
                    var huCardId = -1;
                    if (playerData.isHu == true) {
                        huCardId = msgData["u" + userId].tiles[msgData["u" + userId].tiles.length - 1];
                        for (var m = 0; m < msgData["u" + userId].tiles.length - 1; ++m) {
                            cardsInHand.push(msgData["u" + userId].tiles[m]);
                        }
                    }
                    else
                    {
                        for (var m = 0; m < msgData["u" + userId].tiles.length; ++m) {
                            cardsInHand.push(msgData["u" + userId].tiles[m]);
                        }
                    }
                    this.sortCardsNoQueMen(cardsInHand);
                    if (huCardId > 0)
                    {
                        cardsInHand.push(huCardId);
                    }
                    playerData.CardsInHand = cardsInHand;
                    var startCardIndex = 14 - playerData.CardsInHand.length;
                    for (var m = 0; m < startCardIndex; ++m) {
                        this.m_Players[i].data.m_CardsInHandForShow[m] = -1;
                    }
                    for (var m = startCardIndex; m < 14; ++m) {
                        this.m_Players[i].data.m_CardsInHandForShow[m] = playerData.CardsInHand[m - startCardIndex];
                    }

                    playerData.CardsActionResult = new Array();
                    for (var j = 0; j < msgData["u" + userId].pkc.length; ++j) {
                        var data = {};
                        data.ActionType = msgData["u" + userId].pkc[j][0];
                        data.Cards = new Array();
                        for (var m = 0; m < msgData["u" + userId].pkc[j][1].length; ++m) {
                            data.Cards.push(msgData["u" + userId].pkc[j][1][m]);
                        }
                        playerData.CardsActionResult.push(data);
                    }
                    playerData.TotalScore = msgData["u" + userId].totalscore;
                    this.m_GameScore[i] = msgData["u" + userId].totalscore;
                    //g_UserManager.m_PlayerData[i].m_Score = msgData["u" + userId].totalscore;
                    playerData.Summary = new Array(5);
                    for (var m = 0; m < 5; ++m) {
                        playerData.Summary[m] = msgData["u" + userId].tongji[m];
                    }

                    this.m_dataRoundResult.PlayerData[i] = playerData;
                }

                this.m_dataRoundResult.DismissRoom = msgData.dismiss;
                this.m_DismissRoom = msgData.dismiss;
                if (this.m_DismissRoom == true)
                    g_UserManager.m_RoomData.roomid = 0;

                if (jiList.length > 0) {
                    for (var u = 0; u < g_UserManager.m_RoomData.maxPlayer; ++u) {
                        var cardsJi = new Array();
                        for (var i = 0; i < this.m_Players[u].data.m_ActionHistory.length; ++i) {
                            for (var m = 0; m < jiList.length; ++m) {
                                if (this.m_Players[u].data.m_ActionHistory[i] == jiList[m]) {
                                    cardsJi.push(jiList[m]);
                                }
                            }
                        }

                        for (var i = 0; i < this.m_Players[u].data.m_ActionResults.length; ++i) {
                            for (var m = 0; m < jiList.length; ++m) {
                                if (this.m_Players[u].data.m_ActionResults[i].Cards[0] == jiList[m]) {
                                    var count = 3;
                                    if (this.m_Players[u].data.m_ActionResults[i].ActionType != ActionResultTypeDef.Peng) {
                                        count = 4;
                                    }
                                    for (var n = 0; n < count; ++n) {
                                        cardsJi.push(jiList[m]);
                                    }
                                }
                            }
                        }

                        for (var i = 0; i < this.m_dataRoundResult.PlayerData[u].CardsInHand.length; ++i) {
                            for (var m = 0; m < jiList.length; ++m) {
                                if (this.m_dataRoundResult.PlayerData[u].CardsInHand[i] == jiList[m]) {
                                    cardsJi.push(jiList[m]);
                                }
                            }
                        }

                        this.sortCardsNoQueMen(cardsJi);
                        this.m_dataRoundResult.PlayerData[u].CardsJi = cardsJi;
                    }
                }
                else {
                    for (var u = 0; u < g_UserManager.m_RoomData.maxPlayer; ++u) {
                        this.m_dataRoundResult.PlayerData[u].CardsJi = new Array();
                    }
                }

                var animData = {};
                if (msgData.huangpai != 0) {
                    animData.key = g_AnimationPredefine.HuangZhuang.Key;
                    animData.PlayNode = this.m_AnimationCommonNode;
                    this.m_AnimationsWaitForPlay.push(animData);
                }
                else {
                    animData.key = g_AnimationPredefine.ZhuoJi.Key;
                    animData.FanCardId = this.m_dataRoundResult.FanPai;
                    animData.PlayNode = this.m_AnimationCommonNode;
                    this.m_AnimationsWaitForPlay.push(animData);
                }

                this.refreshUI();
            }
                break;

            case ActionDef.PlayerLinkStatus:
            {
                if (cc.sys.os == cc.sys.OS_ANDROID) {
                    var gps_permission = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getGPSPermission", "()Z");
                    var gps_opened = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getGPSIsOpen", "()Z");
                    if (g_ConfigManager.IsGPS == 1 && gps_permission && gps_opened) {
                        var msg = this.getStrListByDisGPS(msgData, 1);
                        g_RootLayer.showTopMessageBox(msg);
                    }
                } else if (cc.sys.os == cc.sys.OS_IOS) {
                                var gps_permission = IosRegister.IsGpsEnable();
                                if(g_ConfigManager.IsGPS == 1 && gps_permission){
                                    var msg = this.getStrListByDisGPS(msgData, 1);
                                    g_RootLayer.showTopMessageBox(msg);
                                }
                }
                var msg = this.getStrListBySameIP(msgData);
                g_RootLayer.showTopMessageBox(msg);
                this.refreshUI();
            }
                break;

            case ActionDef.PlayerReadyStatus:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }
                var readyStatus = msgData.ready;
                for (var i = 0; i < readyStatus.length; ++i) {
                    g_UserManager.m_PlayerData[i].m_GameStatus.isReady = readyStatus[i];
                }

                this.refreshUI();
            }
                break;

            case ActionDef.SyncPlayerData:
            {
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }
                for (var i = 0; i < msgData.uids.length; ++i) {
                    g_UserManager.m_PlayerData[i].m_UserID = msgData.uids[i];
                }

                this.repositionPlayer();

                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                    if (g_UserManager.m_PlayerData[i].m_UserID != -1) {
                        var playerData = msgData["u" + g_UserManager.m_PlayerData[i].m_UserID];
                        g_UserManager.m_PlayerData[i].m_Ip = playerData.ip;
                        g_UserManager.m_PlayerData[i].m_Offline = playerData.offline;
                        if (typeof playerData.nickname != "undefined" && playerData.nickname != null)
                            g_UserManager.m_PlayerData[i].m_NickName = playerData.nickname;
                        if (typeof playerData.sex != "undefined" && playerData.sex != null)
                            g_UserManager.m_PlayerData[i].m_Sex = playerData.sex;
                        if (typeof playerData.avatar != "undefined" && playerData.avatar != null)
                            g_UserManager.m_PlayerData[i].m_PortraitURL = playerData.avatar;
                        if (typeof playerData.longitude != "undefined" && playerData.longitude != null)
                            g_UserManager.m_PlayerData[i].m_Longitude = playerData.longitude;
                        if (typeof playerData.latitude != "undefined" && playerData.latitude != null)
                            g_UserManager.m_PlayerData[i].m_Latitude = playerData.latitude;
                    }

                    this.setPlayerInfo(i);
                }

                this.refreshUI();
            }
                break;

            case ActionDef.SyncData:
            {
                g_RootLayer.closeMasks();
                this.m_HasRequestSyncData = false;
                if (msgData.MSG_RET != 0) {
                    g_RootLayer.showMessageBox(g_ConfigManager.FormatErrorMessage(msgData.MSG_RET), "提示");
                    return;
                }

                this.m_LastPlayer = 0;
                this.m_LastCardID = 0;
                this.m_IgnoreLastStatus = false;

                g_UserManager.m_PlayerData[0].m_UserID = msgData.roomdetail[10][0];
                g_UserManager.m_PlayerData[1].m_UserID = msgData.roomdetail[10][1];
                g_UserManager.m_PlayerData[2].m_UserID = msgData.roomdetail[10][2];
                g_UserManager.m_PlayerData[3].m_UserID = msgData.roomdetail[10][3];
                this.repositionPlayer();

                if (typeof msgData.chatroomstatus != "undefined") {
                    if (msgData.chatroomstatus == 2) {      //voting
                        var layer = new CreateChatRoomLayer();
                        layer.m_InvokerID = msgData.votecreater;
                        layer.m_TimeLimit = msgData.time;
                        layer.startCount();
                        this.addChild(layer, 100);

                        var msg = {};
                        msg.ACTION = ActionDef.GetCreateChatRoomData;
                        msg.MSG_ID = g_NetworkManager.NextMessageID();
                        msg.UID = g_UserManager.m_UserID;

                        var json = JSON.stringify(msg);
                        g_NetworkManager.sendMessage(json, ActionDef.GetCreateChatRoomData, msg.MSG_ID);
                    }
                    else if (msgData.chatroomstatus == 1)
                    {
                        var roomName = "gy" + g_UserManager.m_RoomData.roomId;
                        this.m_ChatRoomName = roomName;
                        this.m_IsChatting = true;
                        VoiceManager.JoinRoom(roomName);
                        this.m_BtnTalk.loadTextureNormal("res/res/room/mahjong_voice_on_nor.png");
                        this.m_BtnTalk.loadTexturePressed("res/res/room/mahjong_voice_on_pre.png");
                    }
                }

                var myselfPosition = g_UserManager.getMyselfPosition();
                this.m_CurrentPlayer = msgData.currentplayer;
                var curPlayerPos = g_UserManager.getPlayerPosition(this.m_CurrentPlayer);
                for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                    playerData = g_UserManager.getPlayerDataByPosition(i);
                    var index = ["u" + playerData.m_UserID];

                    if (typeof msgData[index] != "undefined" && typeof msgData[index].totalscore != "undefined") {
                        playerData.m_Score = msgData[index].totalscore;
                    }
                }
                if (msgData.started == 1) {
                    this.m_RoundStatus = RoundStatusDef.Running;
                    if (msgData.endround != 1) {
                        this.m_RoundStatus = RoundStatusDef.RoundStarted;
                        this.m_CurrentRound = msgData.round;
                        this.m_CardRemain = msgData.remain;
                        this.m_LastPlayer = msgData.discardplayer;
                        this.m_LastCardID = msgData.discardtile;

                        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                            playerData = g_UserManager.getPlayerDataByPosition(i);
                            playerData.m_GameStatus.reset();
                            if (playerData.m_UserID == msgData.zhuang) {
                                playerData.m_GameStatus.isZhuang = true;
                            }

                            var index = ["u" + playerData.m_UserID];
                            if (i == curPlayerPos) {
                                playerData.m_GameStatus.lastStatus = msgData.ismopai;
                            }
                            else {
                                playerData.m_GameStatus.lastStatus = 0;
                            }

                            if (i == myselfPosition) {
                                this.m_QueMen = msgData[index].quemen;
                                var cards = msgData[index].tiles;
                                this.setMyselfCardsInHand(cards);
                            }
                            else {
                                this.setOtherPlayerCardsInHand(i, msgData.tilescount[i]);
                            }
                        }

                        this.syncPlayerGameData(msgData);

                        var dummyData = {};
                        dummyData.playerstatus = msgData["u" + g_UserManager.getPlayerDataByPosition(myselfPosition).m_UserID].playerstatus;
                        dummyData.param = msgData["u" + g_UserManager.getPlayerDataByPosition(myselfPosition).m_UserID].param;
                        dummyData.quemen = msgData["u" + g_UserManager.getPlayerDataByPosition(myselfPosition).m_UserID].quemen;
                        this.networkSetActionStatus(dummyData);

                        var playerPosition = g_UserManager.getPlayerPosition(this.m_CurrentPlayer);
                        this.setLocator(myselfPosition, playerPosition);

                    }
                    else {
                        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                            playerData = g_UserManager.getPlayerDataByPosition(i);
                            playerData.m_GameStatus.reset();
                            var index = ["u" + playerData.m_UserID];
                            if (typeof msgData[index] != "undefined" && typeof msgData[index].totalscore != "undefined") {
                                playerData.m_Score = msgData[index].totalscore;
                            }
                        }
                        this.m_RoundStatus = RoundStatusDef.RoundEnd;
                        this.enterWait();
                    }

                }
                else
                {
                    this.m_RoundStatus = RoundStatusDef.Preparing;
                    this.enterWait();
                }

                this.m_IsAllXuanQue = true;
                if (typeof msgData.xuanque != "undefined") {
                    for (var i = 0; i < msgData.xuanque.length; i++) {
                        if (msgData.xuanque[i] == 0) {
                            this.m_IsAllXuanQue = false;
                        }
                    }
                }

                if (this.m_IsAllXuanQue == true) {
                    this.m_XuanQueRootNode.setVisible(false);
                }
                else {
                    this.m_XuanQueRootNode.setVisible(true);
                    this.m_IsAllXuanQue = true;
                    for (var i = 0; i < msgData.xuanque.length; i++) {
                        this.m_Players[i].ui.m_XuanQueNode.setVisible(true);
                        if (i == g_UserManager.getMyselfPosition() && msgData.xuanque[i] == 0) {
                            this.m_Players[i].ui.m_XuanQueNode.setVisible(false);
                            this.m_IsAllXuanQue = false;
                            continue;
                        }
                        else if (msgData.xuanque[i] == 0) {
                            this.m_IsAllXuanQue = false;
                            this.m_Players[i].ui.m_XuanQueNode.loadTexture("res/res/room/mahjong_que2.png");
                        }
                        else {
                            this.m_Players[i].ui.m_XuanQueNode.setVisible(true);
                            this.m_Players[i].ui.m_XuanQueNode.loadTexture("res/res/room/mahjong_que1.png");
                        }
                    }

                    if (this.m_IsAllXuanQue == true) {
                        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; i++) {
                            this.m_Players[i].ui.m_XuanQueNode.setVisible(false);
                        }
                        this.m_XuanQueRootNode.setVisible(false);
                    }

                }


                this.refreshUI();
            }
                break;

            case ActionDef.InvokeQuitVote:
            {
                var layer = new DismissRoomLayer();
                layer.m_InvokerID = msgData.votecreater;
                layer.m_TimeLimit = msgData.time;
                layer.startCount();
                this.addChild(layer, 100);
            }
                break;

            case ActionDef.InvokeCreateChatRoom:
            {
                var layer = new CreateChatRoomLayer();
                layer.m_InvokerID = msgData.votecreater;
                layer.m_TimeLimit = msgData.time;
                layer.startCount();
                this.addChild(layer, 100);
            }
                break;

            case ActionDef.CreateChatRoom:
            {
                this.chatRoomName = "gy" + g_UserManager.m_RoomData.roomId;
                VoiceManager.JoinRoom(this.chatRoomName);
            }
                break;

            case ActionDef.QuitChatRoomNotice:
            {
                this.quitChatRoom(msgData.actuid);
            }
                break;

            case ActionDef.SyncCreateChatRoomData:
            {
                var m_AgreeCount = 0;
                var refused = false;
                var playerName = null;
                for (var i = 0; i < msgData.votes.length; i++) {
                    if (msgData.votes[i] == 1) {
                        m_AgreeCount += 1;
                    }
                    else if (msgData.votes[i] == 2)
                    {
                        playerName = g_UserManager.m_PlayerData[i].m_NickName;
                        refused = true;
                        break;
                    }
                }
                if (refused == true) {
                    var mesText = playerName + "拒绝，开启语音聊天室失败";
                    g_RootLayer.showMessageBox(mesText, "提示", (CommonButtonTypeDef.OK), null, null, this, "chat_vote_refused");
                }
                else {
                    if (m_AgreeCount == g_UserManager.m_RoomData.maxPlayer) {
                        var roomName = "gy" + g_UserManager.m_RoomData.roomId;
                        this.m_ChatRoomName = roomName;
                        this.m_IsChatting = true;
                        VoiceManager.JoinRoom(roomName);
                        this.m_BtnTalk.loadTextureNormal("res/res/room/mahjong_voice_on_nor.png");
                        this.m_BtnTalk.loadTexturePressed("res/res/room/mahjong_voice_on_pre.png");
                        g_RootLayer.showMessageBox("多人实时语音已开启", "提示", (CommonButtonTypeDef.OK), null, null, this, "chat_vote_success");
                    }
                }
            }
                break;

            case ActionDef.BroadcastPredefineVoice:
            {
                var playerPosition = g_UserManager.getPlayerPosition(msgData.actuid);
                g_AudioManager.playVoice(g_UserManager.m_PlayerData[playerPosition].m_Sex, msgData.talkid);
                this.showPredefineMessage(playerPosition, msgData.talkid);
            }
                break;

            case ActionDef.BroadcastVoice:
            {
                var playerPosition = g_UserManager.getPlayerPosition(msgData.actuid);
                VoiceManager.Download(msgData.fileid);
                this.showVoice(playerPosition);
            }
                break;

            case ActionDef.BroadcastEmotion:
            {
                var playerPosition = g_UserManager.getPlayerPosition(msgData.actuid);
                this.showEmotion(playerPosition, msgData.emojiid);
            }
                break;

            default:
                break;
        }
    },

    sortCardsNoQueMen : function (cards) {
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
    },

    sortCardsWithQueMen : function (cards) {
        if (this.m_QueMen >= 0)
        {
            var cards1 = new Array();
            var cards2 = new Array();

            var minId = this.m_QueMen * 10;
            var maxId = this.m_QueMen * 10 + 10;
            for (var i = 0; i < 13; ++i){
                if (cards[i] > minId && cards[i] < maxId)
                    cards2.push(cards[i]);
                else
                    cards1.push(cards[i]);
            }

            for (var i = 0; i < cards1.length; ++i) {
                for (var j = i + 1; j < cards1.length; ++j) {
                    var data1 = cards1[i];
                    var data2 = cards1[j];
                    if (data1 > data2) {
                        cards1[j] = data1;
                        cards1[i] = data2;
                    }
                }
            }

            for (var i = 0; i < cards2.length; ++i) {
                for (var j = i + 1; j < cards2.length; ++j) {
                    var data1 = cards2[i];
                    var data2 = cards2[j];
                    if (data1 > data2) {
                        cards2[j] = data1;
                        cards2[i] = data2;
                    }
                }
            }

            for (var i = 0; i < cards1.length; ++i) {
                cards[i] = cards1[i];
            }
            for (var i = 0; i < cards2.length; ++i){
                cards[i + cards1.length] = cards2[i];
            }
        }
        else {
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
        }
    },

    setCard : function (card, newId) {
        card.loadTexture(g_ResCardFaces[newId]);
    },

    playCard : function (card) {
        if (this.m_CurrentWaitStatus == GameWaitStatusDef.Wait)
            return false;

        var myselfPosition = g_UserManager.getMyselfPosition();
        var cardIndex = parseInt(card.name.substring(card.name.length - 2)) - 1;
        var cardId = this.m_Players[myselfPosition].data.m_CardsInHand[cardIndex];

        var canPlayCard = false;
        if ((this.m_WaitStatusAction & GameWaitStatusDef.Ting) != 0 && (this.m_WaitStatusAction & GameWaitStatusDef.PlayCard) != 0) {
            for (var i = 0; i < this.m_ForcePlayCardIdsForTing.length; ++i)
            {
                if (cardId == this.m_ForcePlayCardIdsForTing[i])
                {
                    canPlayCard = true;
                    break
                }
            }
        }
        if ((this.m_WaitStatusAction & GameWaitStatusDef.AnGang) != 0 && (this.m_WaitStatusAction & GameWaitStatusDef.PlayCard) != 0)
        {
            for (var i = 0; i < this.m_ForcePlayCardIdsForGang.length; ++i)
            {
                if (cardId == this.m_ForcePlayCardIdsForGang[i])
                {
                    canPlayCard = true;
                    break
                }
            }
        }
        if ((this.m_CurrentWaitStatus & GameWaitStatusDef.PlayCard) != 0) {
            canPlayCard = true;
        }

        if (canPlayCard == false)
            return false;

        var msg = {};
        msg.ACTION = ActionDef.PlayCard;
        msg.MSG_ID = g_NetworkManager.NextMessageID();
        msg.UID = g_UserManager.m_UserID;
        msg.roomid = g_UserManager.m_RoomData.roomId;
        if (((this.m_WaitStatusAction & GameWaitStatusDef.Ting) != 0) && ((this.m_WaitStatusAction & GameWaitStatusDef.PlayCard) != 0)) {
            msg.doaction = GameWaitStatusDef.Ting;
        }
        else if (((this.m_WaitStatusAction & GameWaitStatusDef.AnGang) != 0) && ((this.m_WaitStatusAction & GameWaitStatusDef.PlayCard) != 0)) {
            msg.doaction = GameWaitStatusDef.AnGang;
        }
        else {
            msg.doaction = GameWaitStatusDef.PlayCard;
        }
        msg.param = cardId;

        var json = JSON.stringify(msg);
        g_NetworkManager.sendMessage(json, ActionDef.PlayCard, msg.MSG_ID);

        this.setCardsMask(this.m_ForcePlayCardIdsForQueMen);
        this.setActionArea(GameWaitStatusDef.Wait);

        this.m_Players[myselfPosition].data.m_CardsInHand[cardIndex] = -1;
        this.m_Players[myselfPosition].data.m_ActionHistory.push(cardId);
        this.m_IgnoreLastStatus = true;

        this.m_CurrentWaitStatus = GameWaitStatusDef.Wait;

        this.m_CurrentCard = null;

        this.refreshUI();

        var animData = {};
        g_AudioManager.playVoice(g_UserManager.m_PlayerData[myselfPosition].m_Sex, cardId);
        animData.key = g_AnimationPredefine.DaPai.Key;
        animData.PlayNode = this.m_Players[myselfPosition].ui.m_ActionAnimationNode.animation;
        animData.CardNodes = this.m_Players[myselfPosition].ui.m_ActionAnimationNode.cards;
        var actionData = {};
        actionData.ActionType = GameActionDef.DaPai;
        actionData.Cards = new Array(1);
        actionData.Cards[0] = cardId;
        animData.ActionData = actionData;
        this.m_AnimationsWaitForPlay.push(animData);


        return true;
    },

    setCountDown : function(countDown) {
        for (var i = 0; i < 11; ++i) {
            this.m_TimerLayers[i].setVisible(false);
        }
        if (countDown < 0 || countDown > 10) {
            this.m_TimerLayers[0].setVisible(true);
        }
        else
        {
            this.m_TimerLayers[countDown].setVisible(true);
        }
    },

    setPlayerInfo : function (pos) {
        var playerData = g_UserManager.getPlayerDataByPosition(pos);
        if (typeof playerData == "undefined" || playerData == null || playerData.m_UserID < 0) {
            this.m_Players[pos].ui.m_PortraitNode.setVisible(false);
        }
        else {
            this.m_Players[pos].ui.m_PortraitNode.setVisible(true);
            this.m_Players[pos].ui.m_PortraitStatusNodes.name.setString(playerData.m_NickName);
            if (playerData.m_PortraitURL != "") {
                NetworkManager.LoadURL(this.m_Players[pos].ui.m_PortraitStatusNodes.icon, playerData.m_PortraitURL);
            }
            else
            {
                this.m_Players[pos].ui.m_PortraitStatusNodes.icon.setTexture("res/res/common/main_photo.png");
            }
            this.m_Players[pos].ui.m_PortraitStatusNodes.score.setString(playerData.m_Score);
            this.m_Players[pos].ui.m_PortraitStatusNodes.status_offline.setVisible(playerData.m_Offline);
            this.m_Players[pos].ui.m_PortraitStatusNodes.status_zhuang.setVisible(playerData.m_GameStatus.isZhuang);
            this.m_Players[pos].ui.m_PortraitStatusNodes.status_ting.setVisible(playerData.m_GameStatus.isTing);
            this.m_Players[pos].ui.m_PortraitStatusNodes.status_chong.setVisible(playerData.m_GameStatus.isChong);
            this.m_Players[pos].ui.m_PortraitStatusNodes.status_ze.setVisible(playerData.m_GameStatus.isZe);
            this.m_Players[pos].ui.m_PortraitStatusNodes.emotion.setVisible(false);
            this.m_Players[pos].ui.m_PortraitStatusNodes.voice.setVisible(false);
            if (g_UserManager.m_RoomData.maxPlayer < 4) {
                if (playerData.m_GameStatus.quemen >= 0) {
                    this.m_Players[pos].ui.m_PortraitStatusNodes.status_quemen.setVisible(true);
                    this.m_Players[pos].ui.m_PortraitStatusNodes.status_quemen.loadTexture(g_ResQuemen[playerData.m_GameStatus.quemen]);
                }
                else {
                    this.m_Players[pos].ui.m_PortraitStatusNodes.status_quemen.setVisible(false);
                }
            }
            else {
                this.m_Players[pos].ui.m_PortraitStatusNodes.status_quemen.setVisible(false);
            }
        }
    },

    showEmotion : function (pos, emotion_id) {
        this.m_Players[pos].ui.m_PortraitStatusNodes.emotion.setVisible(true);
        this.m_Players[pos].ui.m_PortraitStatusNodes.emotion.loadTexture(g_ResEmotionIcons[emotion_id]);
        var cur = new Date().getTime();
        var actionData = {};
        actionData.StartTime = cur;
        actionData.Delay = 1500;
        actionData.Action = DelayActionDef.Visible;
        actionData.Param = false;
        actionData.Target = this.m_Players[pos].ui.m_PortraitStatusNodes.emotion;
        this.m_DelayActionData.push(actionData);
    },

    showPredefineMessage : function (pos, talkid) {
        var msg = g_PredefineMessages[talkid];
        if (typeof msg == "undefined")
            return;
        msg = msg.replace("，", "\n");

        this.m_Players[pos].ui.m_PortraitStatusNodes.message_bg.setVisible(true);
        this.m_Players[pos].ui.m_PortraitStatusNodes.message_text.setString(msg);

        var cur = new Date().getTime();
        var actionData = {};
        actionData.StartTime = cur;
        actionData.Delay = 2000;
        actionData.Action = DelayActionDef.Visible;
        actionData.Param = false;
        actionData.Target = this.m_Players[pos].ui.m_PortraitStatusNodes.message_bg;
        this.m_DelayActionData.push(actionData);
    },

    showVoice : function(pos) {
        this.m_Players[pos].ui.m_PortraitStatusNodes.voice.setVisible(true);

        var cur = new Date().getTime();
        var actionData = {};
        actionData.StartTime = cur;
        actionData.Delay = 2000;
        actionData.Action = DelayActionDef.Visible;
        actionData.Param = false;
        actionData.Target = this.m_Players[pos].ui.m_PortraitStatusNodes.voice;
        this.m_DelayActionData.push(actionData);
    },

    refreshUI : function () {
        if (g_UserManager.getPlayerCount() == g_UserManager.m_RoomData.maxPlayer)
            this.m_uiLabelRoomID.setVisible(false);
        else {
            this.m_uiLabelRoomID.setVisible(true);
            this.m_uiLabelRoomID.setString("房间号: " + g_UserManager.m_RoomData.roomId);
        }

        var cardInHandIndex = -1;
        if (this.m_RoundStatus >= RoundStatusDef.Running)
        {
            this.m_uiLocatorRoot.setVisible(true);
            this.m_uiRoomActionNode.setVisible(false);
            this.m_uiLabelRound.setString(this.m_CurrentRound + "/" + g_UserManager.m_RoomData.maxRound);
            this.m_uiLabelCardRemain.setString(this.m_CardRemain);

            var myselfPosition = g_UserManager.getMyselfPosition();
            for (var playerIndex = 0; playerIndex < g_UserManager.m_RoomData.maxPlayer; ++playerIndex) {
                this.m_Players[playerIndex].ui.m_RootNode.setVisible(true);
                this.m_Players[playerIndex].ui.m_CardsInHandNode.setVisible(true);
                this.m_Players[playerIndex].ui.m_ActionResultsNode[0].setVisible(false);
                this.m_Players[playerIndex].ui.m_ActionResultsNode[1].setVisible(false);
                this.m_Players[playerIndex].ui.m_ActionResultsNode[2].setVisible(false);
                this.m_Players[playerIndex].ui.m_ActionResultsNode[3].setVisible(false);
                this.m_Players[playerIndex].ui.m_ActionHistoryNode.setVisible(false);
                this.m_Players[playerIndex].ui.m_CardsInHandForShowNode.setVisible(false);

                this.setPlayerInfo(playerIndex);

                // cards in hand
                if (this.m_ShowCardsInHand == false) {
                    this.m_Players[playerIndex].ui.m_CardsInHandNode.setVisible(true);
                    this.m_Players[playerIndex].ui.m_CardsInHandForShowNode.setVisible(false);
                    for (var j = 0; j < 14; ++j) {
                        if (this.m_Players[playerIndex].data.m_CardsInHand[j] == -1) {
                            this.m_Players[playerIndex].ui.m_CardsInHand[j][0].setVisible(false);
                        }
                        else {
                            this.m_Players[playerIndex].ui.m_CardsInHand[j][0].setVisible(true);
                            if (this.m_Players[playerIndex].ui.m_CardsInHand[j][1] != null) {
                                this.setCard(this.m_Players[playerIndex].ui.m_CardsInHand[j][1], this.m_Players[playerIndex].data.m_CardsInHand[j]);
                                if (this.m_CurrentPopCard != "undefined" && this.m_CurrentPopCard != null) {
                                    if (this.m_CurrentPopCard.name == this.m_Players[playerIndex].ui.m_CardsInHand[j][0].name) {
                                        cardInHandIndex = this.m_Players[playerIndex].data.m_CardsInHand[j];
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    this.m_Players[playerIndex].ui.m_CardsInHandNode.setVisible(false);
                    this.m_Players[playerIndex].ui.m_CardsInHandForShowNode.setVisible(true);
                    for (var j = 0; j < 14; ++j) {
                        if (this.m_Players[playerIndex].data.m_CardsInHandForShow[j] == -1) {
                            this.m_Players[playerIndex].ui.m_CardsInHandForShow[j][0].setVisible(false);
                        }
                        else {
                            this.m_Players[playerIndex].ui.m_CardsInHandForShow[j][0].setVisible(true);
                            this.setCard(this.m_Players[playerIndex].ui.m_CardsInHandForShow[j][1], this.m_Players[playerIndex].data.m_CardsInHandForShow[j]);
                        }
                    }
                }

                // action history
                if (this.m_Players[playerIndex].data.m_ActionHistory.length > 0)
                {
                    this.m_Players[playerIndex].ui.m_ActionHistoryNode.setVisible(true);

                    for (var j = 0; j < this.m_HistorySize; ++j)
                    {
                        this.m_Players[playerIndex].ui.m_ActionHistory[j][0].setVisible(false);
                    }
                    var maxLength = this.m_Players[playerIndex].data.m_ActionHistory.length;
                    if (maxLength > this.m_HistorySize)
                        maxLength = this.m_HistorySize;
                    for (var j = 0; j < maxLength; ++j)
                    {
                        this.m_Players[playerIndex].ui.m_ActionHistory[j][0].setVisible(true);
                        this.setCard(this.m_Players[playerIndex].ui.m_ActionHistory[j][1], this.m_Players[playerIndex].data.m_ActionHistory[j]);
                    }
                }
                else
                {
                    this.m_Players[playerIndex].ui.m_ActionHistoryNode.setVisible(false);
                }

                // action results
                for (var j = 0; j < 4; ++j)
                {
                    this.m_Players[playerIndex].ui.m_ActionResultsNode[j].setVisible(false);
                }
                if (this.m_Players[playerIndex].data.m_ActionResults.length > 0) {
                    for (var j = 0; j < this.m_Players[playerIndex].data.m_ActionResults.length; ++j)
                    {
                        this.m_Players[playerIndex].ui.m_ActionResultsNode[j].setVisible(true);
                        if (this.m_Players[playerIndex].data.m_ActionResults[j].ActionType == ActionResultTypeDef.Peng)
                        {
                            this.m_Players[playerIndex].ui.m_ActionResults[j][0][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][1][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][2][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].setVisible(false);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][0][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][1][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][2][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            if (i == myselfPosition)
                            {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_9.png");
                            }
                            else if (g_UserManager.m_RoomData.maxPlayer == 2) {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_2.png");
                            }
                            else {
                                if (playerIndex == myselfPosition + 1 || playerIndex == myselfPosition - 1) {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_1.png");
                                }
                                else {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_2.png");
                                }
                            }
                        }
                        else if (this.m_Players[playerIndex].data.m_ActionResults[j].ActionType == ActionResultTypeDef.Gang)
                        {
                            this.m_Players[playerIndex].ui.m_ActionResults[j][0][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][1][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][2][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][3][1].setVisible(true);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][0][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][1][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][2][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][3][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            if (i == myselfPosition)
                            {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_9.png");
                            }
                            else if (g_UserManager.m_RoomData.maxPlayer == 2) {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_2.png");
                            }
                            else {
                                if (i == myselfPosition + 1 || i == myselfPosition - 1) {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_1.png");
                                }
                                else {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_2.png");
                                }
                            }
                        }
                        else if (this.m_Players[playerIndex].data.m_ActionResults[j].ActionType == ActionResultTypeDef.AnGang)
                        {
                            this.m_Players[playerIndex].ui.m_ActionResults[j][0][1].setVisible(false);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][1][1].setVisible(false);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][2][1].setVisible(false);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][3][1].setVisible(true);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][3][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            if (playerIndex == myselfPosition)
                            {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_3.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_3.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_3.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_9.png");
                            }
                            else if (g_UserManager.m_RoomData.maxPlayer == 2) {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_10.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_10.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_10.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_2.png");
                            }
                            else {
                                if (playerIndex == myselfPosition + 1 || playerIndex == myselfPosition - 1) {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_8.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_8.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_8.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_1.png");
                                }
                                else {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_10.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_10.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_10.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_2.png");
                                }
                            }
                        }
                        else if (this.m_Players[playerIndex].data.m_ActionResults[j].ActionType == ActionResultTypeDef.ZhuanWanDou)
                        {
                            this.m_Players[playerIndex].ui.m_ActionResults[j][0][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][1][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][2][1].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].setVisible(true);
                            this.m_Players[playerIndex].ui.m_ActionResults[j][3][1].setVisible(false);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][0][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][1][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            this.setCard(this.m_Players[playerIndex].ui.m_ActionResults[j][2][1], this.m_Players[playerIndex].data.m_ActionResults[j].Cards[0]);
                            if (playerIndex == myselfPosition)
                            {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_9.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_3.png");
                            }
                            else if (g_UserManager.m_RoomData.maxPlayer == 2) {
                                this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_2.png");
                                this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_10.png");
                            }
                            else {
                                if (playerIndex == myselfPosition + 1 || playerIndex == myselfPosition - 1) {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_1.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_8.png");
                                }
                                else {
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][0][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][1][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][2][0].loadTexture("res/res/room/mahjong_card_2.png");
                                    this.m_Players[playerIndex].ui.m_ActionResults[j][3][0].loadTexture("res/res/room/mahjong_card_10.png");
                                }
                            }
                        }
                    }
                }

                if (this.m_CurrentCardCursor != null)
                {
                    this.m_CurrentCardCursor.removeFromParent(false);
                    //this.m_CurrentCardCursor.release();
                    //this.m_CurrentCardCursor = null;
                }
                else {
                    var arrow = ccs.load(res.arrow_csd);
                    this.m_CurrentCardCursor = arrow.node;
                    this.m_CurrentCardCursor.retain();
                    arrow.node.setVisible(true);
                    arrow.action.gotoFrameAndPlay(0, true);
                    arrow.node.runAction(arrow.action);
                }

                if (this.m_LastPlayer != 0 && this.m_LastCardID > 0) {
                    var playerPosition = g_UserManager.getPlayerPosition(this.m_LastPlayer);
                    var myselfPosition = g_UserManager.getMyselfPosition();
                    var index = ((playerPosition + (g_UserManager.m_RoomData.maxPlayer - myselfPosition)) % g_UserManager.m_RoomData.maxPlayer);
                    if (g_UserManager.m_RoomData.maxPlayer == 2)
                    {
                        this.m_CurrentCardCursor.x = 20;
                        this.m_CurrentCardCursor.y = 95;
                    }
                    else if (g_UserManager.m_RoomData.maxPlayer == 3)
                    {
                        if (index == 0)
                        {
                            this.m_CurrentCardCursor.x = 20;
                            this.m_CurrentCardCursor.y = 95;
                        }
                        else
                        {
                            this.m_CurrentCardCursor.x = 25;
                            this.m_CurrentCardCursor.y = 80;
                        }
                    }
                    else
                    {
                        if (index == 0 || index == 2)
                        {
                            this.m_CurrentCardCursor.x = 20;
                            this.m_CurrentCardCursor.y = 95;
                        }
                        else
                        {
                            this.m_CurrentCardCursor.x = 25;
                            this.m_CurrentCardCursor.y = 80;
                        }
                    }
                    if (this.m_Players[playerPosition].data.m_ActionHistory[this.m_Players[playerPosition].data.m_ActionHistory.length - 1] == this.m_LastCardID) {
                        this.m_Players[playerPosition].ui.m_ActionHistory[this.m_Players[playerPosition].data.m_ActionHistory.length - 1][0].addChild(this.m_CurrentCardCursor, 10);
                    }
                }

                if (this.m_RoundStatus == RoundStatusDef.RoundEnd) {
                    this.m_ReadyRootNode.setVisible(true);
                    for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                        this.m_Players[i].ui.m_ReadyNode.setVisible(g_UserManager.m_PlayerData[i].m_GameStatus.isReady);
                    }
                }
                else {
                    this.m_ReadyRootNode.setVisible(false);
                }

            }

            for (var playerIndex = 0; playerIndex < g_UserManager.m_RoomData.maxPlayer; ++playerIndex) {
                // action history
                if (this.m_Players[playerIndex].data.m_ActionHistory.length > 0) {
                    var maxLength = this.m_Players[playerIndex].data.m_ActionHistory.length;
                    if (maxLength > this.m_HistorySize)
                        maxLength = this.m_HistorySize;
                    for (var j = 0; j < maxLength; ++j) {
                        this.m_Players[playerIndex].ui.m_ActionHistory[j][0].setColor(cc.color(255, 255, 255, 255));
                        if (this.m_Players[playerIndex].data.m_ActionHistory[j] == cardInHandIndex) {
                            this.m_Players[playerIndex].ui.m_ActionHistory[j][0].setColor(cc.color(112, 128, 144, 150));
                        }
                    }
                }
            }
        }
        else if (this.m_RoundStatus == RoundStatusDef.Preparing)
        {
            this.m_uiLocatorRoot.setVisible(false);
            this.m_uiRoomActionNode.setVisible(true);

            for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
                this.m_Players[i].ui.m_RootNode.setVisible(true);
                this.m_Players[i].ui.m_CardsInHandNode.setVisible(false);
                this.m_Players[i].ui.m_ActionResultsNode[0].setVisible(false);
                this.m_Players[i].ui.m_ActionResultsNode[1].setVisible(false);
                this.m_Players[i].ui.m_ActionResultsNode[2].setVisible(false);
                this.m_Players[i].ui.m_ActionResultsNode[3].setVisible(false);
                this.m_Players[i].ui.m_ActionHistoryNode.setVisible(false);
                this.m_Players[i].ui.m_CardsInHandForShowNode.setVisible(false);

                this.setPlayerInfo(i);

                this.m_ReadyRootNode.setVisible(true);
                if (g_UserManager.m_PlayerData[i].m_UserID > 0) {
                    this.m_Players[i].ui.m_ReadyNode.setVisible(g_UserManager.m_PlayerData[i].m_GameStatus.isReady);
                }
                else {
                    this.m_Players[i].ui.m_ReadyNode.setVisible(false);
                }
            }
        }

    },

    showReady : function () {
        var myselfPosition = g_UserManager.getMyselfPosition();
        this.m_Players[myselfPosition].ui.m_ReadyNode.setVisible(true);
    },

    enterWait : function () {
        if (this.m_DismissRoom == true) {
            this.onCloseClick(null, 2);
        }
        else {
            if (this.m_RoundStatus != RoundStatusDef.RoundStarted) {
                var msg = {};
                msg.ACTION = ActionDef.ImReady;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.ImReady, msg.MSG_ID);

                this.showReady();
            }
        }
    },

    resetUI : function () {
        this.m_IsAllXuanQue = false;
        this.m_ShowCardsInHand = false;
        this.m_MaskNode.setVisible(false);
        this.setActionArea(GameWaitStatusDef.Wait);
        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
            this.m_Players[i].ui.m_CardsJiNode.setVisible(false);
            this.m_Players[i].ui.m_CardsInHandForShowNode.setVisible(false);
            this.m_Players[i].ui.m_PortraitStatusNodes.result.setVisible(false);
            g_UserManager.m_PlayerData[i].m_Score = this.m_GameScore[i];
            this.m_Players[i].ui.m_RootNode.setVisible(true);
            this.m_Players[i].ui.m_CardsInHandNode.setVisible(false);
            this.m_Players[i].ui.m_ActionResultsNode[0].setVisible(false);
            this.m_Players[i].ui.m_ActionResultsNode[1].setVisible(false);
            this.m_Players[i].ui.m_ActionResultsNode[2].setVisible(false);
            this.m_Players[i].ui.m_ActionResultsNode[3].setVisible(false);
            this.m_Players[i].ui.m_ActionHistoryNode.setVisible(false);
            g_UserManager.m_PlayerData[i].m_GameStatus.quemen = -1;
            this.m_Players[i].ui.m_PortraitStatusNodes.status_quemen.setVisible(false);
            this.m_Players[i].ui.m_PortraitStatusNodes.message_bg.setVisible(false);
            for (var m = 0; m < 14; m++) {
                this.m_Players[i].data.m_CardsInHand[m] = -1;
            }
            this.m_Players[i].data.m_ActionHistory = new Array();
            this.m_Players[i].data.m_ActionResults = new Array();
            g_UserManager.m_PlayerData[i].m_GameStatus.isZhuang = false;
            g_UserManager.m_PlayerData[i].m_GameStatus.isTing = false;
            g_UserManager.m_PlayerData[i].m_GameStatus.isZe = false;
            g_UserManager.m_PlayerData[i].m_GameStatus.isChong = false;
            g_UserManager.m_PlayerData[i].m_GameStatus.Du_PaiXing = 0;
            g_UserManager.m_PlayerData[i].m_GameStatus.Du_Hua = 0;
        }

        this.m_CardRemain = 0;

        this.refreshUI();
    },

    showRoundResult : function () {
        if (this.m_RoundStatus != RoundStatusDef.RoundStarted) {
            this.resetUI();
        }
        var uiRoundResult = new RoundResultLayer();
        this.addChild(uiRoundResult, 1000);
        uiRoundResult.setData(this.m_dataRoundResult);
    },

    onLogicUpdate : function () {
        var curTime = new Date().getTime();
        if (this.m_CountDownEndTime != 0)
        {
            this.m_QingChuPai.setVisible(false);
            if (curTime < this.m_CountDownEndTime) {
                var countDown = (this.m_CountDownEndTime - curTime) / 1000;
                countDown = parseInt(countDown);
                this.setCountDown(countDown);
            }
            else {
                this.m_CountDownEndTime = 0;
                this.setCountDown(0);
                g_AudioManager.playerEffect(SfxType.TimeUp);
            }
        }
        else{
            if ( (this.m_CurrentWaitStatus & GameWaitStatusDef.PlayCard) != 0 ) {
                this.m_QingChuPai.setVisible(true);
                if (g_ConfigManager.IsZhenDong == 1) {
                    cc.Device.vibrate(0.5);
                }
            }
            else {
                this.m_QingChuPai.setVisible(false);
            }
        }

        if (this.m_AnimationsWaitForPlay.length > 0)
        {
            var canSkip = true;
            if (this.m_AnimationsInPlaying.length > 0) {
                for (var m = 0; m < this.m_AnimationsInPlaying.length; ++m) {
                    var animDataInPlaying = this.m_AnimationsInPlaying[m];
                    if (animDataInPlaying.key == g_AnimationPredefine.ZhuoJi.Key ||
                        animDataInPlaying.key == g_AnimationPredefine.HuangZhuang.Key ||
                        animDataInPlaying.key == g_AnimationPredefine.DianPao.Key ||
                        animDataInPlaying.key == g_AnimationPredefine.ZiMo.Key) {
                        canSkip = false;
                    }
                }
            }

            if (canSkip == true) {
                for (var m = 0; m < this.m_AnimationsInPlaying.length; ++m) {
                    var animDataInPlaying = this.m_AnimationsInPlaying[m];
                    if (typeof animDataInPlaying.CardNodes != "undefined") {
                        for (var m = 0; m < 4; ++m) {
                            animDataInPlaying.CardNodes[m].Card.setVisible(false);
                        }
                    }
                    animDataInPlaying.instance.node.removeFromParent(true);
                }
                this.m_AnimationsInPlaying = new Array();
                var animData = this.m_AnimationsWaitForPlay[0];
                switch (animData.key) {
                    case g_AnimationPredefine.ZhuoJi.Key: {
                        animData.instance = ccs.load(g_AnimationPredefine.ZhuoJi.Res);
                        animData.instance.node.x = 0;
                        animData.instance.node.y = 0;
                        var cardNode = animData.instance.node.getChildByName("mahjong_card_9");
                        var faceNode = cardNode.getChildByName("icon_face")
                        this.setCard(faceNode, animData.FanCardId);
                        animData.instance.action.setFrameEventCallFunc(this.onAnimationCompleted);
                        animData.PlayNode.setVisible(true);
                    }
                        break;

                    default: {
                        animData.instance = ccs.load(g_AnimationPredefine[animData.key].Res);
                        animData.instance.node.x = 0;
                        animData.instance.node.y = 0;
                        animData.instance.action.setFrameEventCallFunc(this.onAnimationCompleted);
                        animData.PlayNode.setVisible(true);
                        if (typeof animData.ActionData == "undefined" || animData.ActionData == null) {
                            if (typeof animData.Cards != "undefined") {
                                for (var m = 0; m < 4; ++m) {
                                    animData.CardNodes[m].Card.setVisible(false);
                                }
                            }
                        }
                        else {
                            if (typeof animData.CardNodes != "undefined") {
                                for (var m = 0; m < 4; ++m) {
                                    animData.CardNodes[m].Card.setVisible(false);
                                }
                                for (var m = 0; m < animData.ActionData.Cards.length; ++m) {
                                    animData.CardNodes[m].Card.setVisible(true);
                                    this.setCard(animData.CardNodes[m].Face, animData.ActionData.Cards[m]);
                                }
                                switch (animData.ActionData.ActionType) {
                                    case GameActionDef.DaPai: {
                                        animData.CardNodes[0].Card.setVisible(false);
                                        var face = animData.instance.node.getChildByName("icon_face");
                                        this.setCard(face, animData.ActionData.Cards[0]);
                                    }
                                        break;

                                    case GameActionDef.Peng: {
                                        animData.CardNodes[0].Face.setVisible(true);
                                        animData.CardNodes[1].Face.setVisible(true);
                                        animData.CardNodes[2].Face.setVisible(true);
                                        this.setCard(animData.CardNodes[0].Face, animData.ActionData.Cards[0]);
                                        this.setCard(animData.CardNodes[1].Face, animData.ActionData.Cards[1]);
                                        this.setCard(animData.CardNodes[2].Face, animData.ActionData.Cards[2]);
                                        animData.CardNodes[0].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[1].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[2].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                    }
                                        break;

                                    case GameActionDef.Chi: {
                                        animData.CardNodes[0].Face.setVisible(true);
                                        animData.CardNodes[1].Face.setVisible(true);
                                        animData.CardNodes[2].Face.setVisible(true);
                                        this.setCard(animData.CardNodes[0].Face, animData.ActionData.Cards[0]);
                                        this.setCard(animData.CardNodes[1].Face, animData.ActionData.Cards[1]);
                                        this.setCard(animData.CardNodes[2].Face, animData.ActionData.Cards[2]);
                                        animData.CardNodes[0].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[1].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[2].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                    }
                                        break;

                                    case GameActionDef.Gang: {
                                        animData.CardNodes[0].Face.setVisible(true);
                                        animData.CardNodes[1].Face.setVisible(true);
                                        animData.CardNodes[2].Face.setVisible(true);
                                        animData.CardNodes[3].Face.setVisible(true);
                                        this.setCard(animData.CardNodes[0].Face, animData.ActionData.Cards[0]);
                                        this.setCard(animData.CardNodes[1].Face, animData.ActionData.Cards[1]);
                                        this.setCard(animData.CardNodes[2].Face, animData.ActionData.Cards[2]);
                                        this.setCard(animData.CardNodes[3].Face, animData.ActionData.Cards[3]);
                                        animData.CardNodes[0].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[1].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[2].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[3].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                    }
                                        break;

                                    case GameActionDef.AnGang: {
                                        animData.CardNodes[0].Face.setVisible(false);
                                        animData.CardNodes[1].Face.setVisible(false);
                                        animData.CardNodes[2].Face.setVisible(false);
                                        animData.CardNodes[3].Face.setVisible(true);
                                        this.setCard(animData.CardNodes[3].Face, animData.ActionData.Cards[3]);
                                        animData.CardNodes[0].Card.loadTexture("res/res/room/mahjong_card_3.png");
                                        animData.CardNodes[1].Card.loadTexture("res/res/room/mahjong_card_3.png");
                                        animData.CardNodes[2].Card.loadTexture("res/res/room/mahjong_card_3.png");
                                        animData.CardNodes[3].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                    }
                                        break;

                                    case GameActionDef.ZhuanWanDou: {
                                        animData.CardNodes[0].Face.setVisible(true);
                                        animData.CardNodes[1].Face.setVisible(true);
                                        animData.CardNodes[2].Face.setVisible(true);
                                        animData.CardNodes[3].Face.setVisible(false);
                                        this.setCard(animData.CardNodes[0].Face, animData.ActionData.Cards[0]);
                                        this.setCard(animData.CardNodes[1].Face, animData.ActionData.Cards[1]);
                                        this.setCard(animData.CardNodes[2].Face, animData.ActionData.Cards[2]);
                                        this.setCard(animData.CardNodes[3].Face, animData.ActionData.Cards[3]);
                                        animData.CardNodes[0].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[1].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[2].Card.loadTexture("res/res/room/mahjong_card_9.png");
                                        animData.CardNodes[3].Card.loadTexture("res/res/room/mahjong_card_3.png");
                                    }
                                        break;

                                    default:
                                        break;
                                }
                            }
                        }
                    }
                        break;
                }

                this.m_AnimationRootNode.setVisible(true);
                animData.PlayNode.addChild(animData.instance.node);
                animData.instance.action.gotoFrameAndPlay(0, false);
                animData.instance.node.runAction(animData.instance.action);
                this.m_AnimationsInPlaying.push(animData);
                this.m_AnimationsWaitForPlay.splice(0, 1);
            }
        }

        this.delayAction();

        // 更新电量
        if (curTime - this.m_LastStatusBarUpdateTime > 1000) {
            this.m_LastStatusBarUpdateTime = curTime;
            var m_DianLiang = 0;
            var isCharged = false;
            if(cc.sys.os == cc.sys.OS_IOS)
            {
                var netLevel = 0;
                var index = 0;
                var netType = IosRegister.GetNetType();
                switch(netType){
                    case 1:
                        netLevel = IosRegister.GetDataLevel();
                        index = netLevel;
                        break;
                    case 2:
                        netLevel = IosRegister.GetWifiLevel();
                        index = netLevel - 1;
                        break;
                    default:
                        break;
                }
                this.setNetworkInfo(netType,index);
                                
                m_DianLiang = IosRegister.GetBatteryLevel();
                if(IosRegister.GetBatteryChargeStatus() == 1)
                {
                    isCharged = true;
                }
            }
            else
            {
                m_DianLiang = GameManager.GetBatteryLevel();
                isCharged = GameManager.GetChargedState();
            }
            var currentdate = new Date();
            this.m_electricity_text.setString("" + m_DianLiang + "%");
            this.m_time.setString(currentdate.toTimeString());

            if (isCharged) {
                this.m_electricity_1.loadTexture("res/res/room/mahjong_electricity_3.png");
                this.m_electricity_1.setScale(1.0, 1.0);
            }
            else {
                this.m_electricity_1.loadTexture("res/res/room/mahjong_electricity_1.png");
                var scale = parseFloat(m_DianLiang) / 100;
                this.m_electricity_1.setScale(scale, 1.0);
            }

            //更新ping值
            var ping = 0;
            if (typeof g_NetworkManager != "undefined") {
                ping = g_NetworkManager.m_LastLag;
                this.m_PingZhi.setString("" + ping + "ms越小越流畅");
                if (ping < 100) {
                    this.m_LiuChangDu.loadTexture("res/res/room/mahjong_xh_lc.png");
                }
                else if (ping < 500) {
                    this.m_LiuChangDu.loadTexture("res/res/room/mahjong_xh_yb.png");
                }
                else {
                    this.m_LiuChangDu.loadTexture("res/res/room/mahjong_xh_fm.png");
                }
            } else {
                this.m_PingZhi.setString("null ms越小越流畅");
            }
        }
    },

    onLiuChangDuClick: function (sender, eventType) {
        if (eventType == 2) {
            this.m_PingNode.setVisible(true);
            this.m_PingZhiBg.setVisible(true);
            this.m_PingZhi.setVisible(true);
        }
    },

    onPingNodeClick: function (sender, eventType) {
        if (eventType == 2) {
            this.m_PingZhiBg.setVisible(false);
            this.m_PingZhi.setVisible(false);
            this.m_PingNode.setVisible(false);
        }
    },

    setNetworkInfo: function (netType,netLevel) {
        var index = netLevel + 1;
        this.m_Network.setVisible(true);
        if (netType == 0) {
            this.m_Network.setVisible(false);
        }
        else if (netType == 1) {
            this.m_Network.loadTexture("res/res/room/mahjong_data_" + index + ".png");
        }
        else {
            this.m_Network.loadTexture("res/res/room/mahjong_wifi_" + index + ".png");
        }
    },

    showJi : function () {
        this.m_MaskNode.setVisible(true);
        for (var i = 0; i < g_UserManager.m_RoomData.maxPlayer; ++i) {
            this.m_Players[i].ui.m_CardsJiNode.setVisible(false);
            if (this.m_dataRoundResult.PlayerData[i].isTing == true || this.m_dataRoundResult.PlayerData[i].isHu == true) {
                if (this.m_dataRoundResult.PlayerData[i].CardsJi.length > 0)
                {
                    this.m_Players[i].ui.m_CardsJiNode.setVisible(true);
                    for (var m = 0; m < 24; ++m) {
                        this.m_Players[i].ui.m_CardsJi[m][0].setVisible(false);
                    }
                }
                for (var m = 0; m < this.m_dataRoundResult.PlayerData[i].CardsJi.length; ++m) {
                    this.m_Players[i].ui.m_CardsJi[m][0].setVisible(true);
                    this.setCard(this.m_Players[i].ui.m_CardsJi[m][1], this.m_dataRoundResult.PlayerData[i].CardsJi[m]);
                }
            }
        }

        var cur = new Date().getTime();
        var actionData = {};
        actionData.StartTime = cur;
        actionData.Delay = 3000;
        actionData.Action = DelayActionDef.CallFunc;
        actionData.Param = "showRoundResult";
        actionData.Target = this;
        this.m_DelayActionData.push(actionData);
    },

    onAnimationCompleted: function (event) {
        var eventData = event.getEvent().split("|");
        var key = eventData[0];
        var name = eventData[1];
        if (name == "Finished") {
            if (typeof g_RootLayer.m_CurrentScene.m_AnimationsInPlaying != "undefined") {
                for (var i = 0; i < g_RootLayer.m_CurrentScene.m_AnimationsInPlaying.length; ++i) {
                    if (g_RootLayer.m_CurrentScene.m_AnimationsInPlaying[i].key == key) {
                        var animData = g_RootLayer.m_CurrentScene.m_AnimationsInPlaying[i];
                        if (typeof animData.CardNodes != "undefined") {
                            for (var m = 0; m < 4; ++m) {
                                animData.CardNodes[m].Card.setVisible(false);
                            }
                        }
                        g_RootLayer.m_CurrentScene.m_AnimationsInPlaying[i].instance.node.removeFromParent(true);
                        g_RootLayer.m_CurrentScene.m_AnimationsInPlaying.splice(i, 1);
                        g_RootLayer.m_CurrentScene.m_AnimationRootNode.setVisible(false);
                        break;
                    }
                }

                if (key == g_AnimationPredefine.ZhuoJi.Key){
                    if (g_RootLayer.m_CurrentScene.m_dataRoundResult.FanPai == 25) {            // 吹风鸡
                        g_RootLayer.m_CurrentScene.showRoundResult();
                    }
                    else {
                        g_RootLayer.m_CurrentScene.showJi();
                    }
                }
                else if (key == g_AnimationPredefine.HuangZhuang.Key) {
                    g_RootLayer.m_CurrentScene.showRoundResult();
                }
            }
        }
        else {
        }
    },

    isAnimationPlaying : function (key) {
        for (var i = 0; i < g_RootLayer.m_CurrentScene.m_AnimationsInPlaying.length; ++i) {
            if (g_RootLayer.m_CurrentScene.m_AnimationsInPlaying[i].key == key) {
                return true;
            }
        }

        return false;
    },

    delayAction : function () {
        var cur = new Date().getTime();
        var expired = new Array();
        for (var i = 0; i < this.m_DelayActionData.length; ++i) {
            if (cur - this.m_DelayActionData[i].StartTime >= this.m_DelayActionData[i].Delay) {
                if (this.m_DelayActionData[i].Action == DelayActionDef.Visible) {
                    this.m_DelayActionData[i].Target.setVisible(this.m_DelayActionData[i].Param);
                }
                else if (this.m_DelayActionData[i].Action == DelayActionDef.Remove) {
                    this.m_DelayActionData[i].Target.removeFromParent(true);
                }
                else if (this.m_DelayActionData[i].Action == DelayActionDef.CallFunc)
                {
                    if (this.m_DelayActionData[i].Param == "showRoundResult") {
                        this.m_DelayActionData[i].Target.showRoundResult();
                    }
                }

                expired.push(this.m_DelayActionData[i]);
            }
        }

        for (var i = 0; i < expired.length; ++i) {
            for (var m = 0; m < this.m_DelayActionData.length; ++m) {
                this.m_DelayActionData.splice(m, 1);
            }
        }

        expired = null;
    },

    onGetRoomNumber : function ()  {
        RoomNumberFromURL = "";
    },

    deepCopy:function (p, c) {
　　　　var c = c || {};
        for (var i in p) {
            if (typeof p[i] === 'object') {
                c[i] = (p[i].constructor === Array) ? [] : {};
                this.deepCopy(p[i], c[i]);
            } else {
                c[i] = p[i];
            }
        }
        return c;
    },

    getStrListBySameIP: function (msgData) {
        var gMaxPlayer = g_UserManager.m_RoomData.maxPlayer;
        var gPlayerData = g_UserManager.m_PlayerData;
        var copyPlayerData = this.deepCopy(gPlayerData);
        var showText = "";
        for (var i = 0; i < gMaxPlayer; i++) {
            var line = "";
            var stepTag = false;
            for (var j = i + 1; j < gMaxPlayer; j++) {
                if (copyPlayerData[i].m_Ip == copyPlayerData[j].m_Ip && copyPlayerData[j].m_Ip != 0) {
                    if (stepTag == false) {
                        if (showText != "") {
                            showText += "\n";
                        }
                        line += copyPlayerData[i].m_NickName;
                        stepTag = true;
                    }
                    line += ",";
                    line += copyPlayerData[j].m_NickName;
                    copyPlayerData[j].m_Ip = 0;
                }
            }
            if (line != "") {
                line += "IP地址相同";
                showText += line;
            }
        }
        return showText;
    },


    getStrListByDisGPS: function (msgData, distance) {
        var gMaxPlayer = g_UserManager.m_RoomData.maxPlayer;
        var gPlayerData = g_UserManager.m_PlayerData;
        var copyPlayerData = this.deepCopy(gPlayerData);
        var showText = "";
        for (var i = 0; i < gMaxPlayer; i++) {
            var line = "";
            var stepTag = false;
            for (var j = i + 1; j < gMaxPlayer; j++) {
                var offSet = 100;
                if (cc.sys.os == cc.sys.OS_ANDROID) {
                    offSet = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getDistanceTwoGPS", "(FFFF)F", copyPlayerData[i].m_Longitude, copyPlayerData[i].m_Latitude, copyPlayerData[j].m_Longitude, copyPlayerData[j].m_Latitude);
                } else if (cc.sys.os == cc.sys.OS_IOS) {
                    offSet = IosRegister.GetDistanceTwoGPS(copyPlayerData[i].m_Longitude, copyPlayerData[i].m_Latitude, copyPlayerData[j].m_Longitude, copyPlayerData[j].m_Latitude);
                }
                if (offSet <= distance && copyPlayerData[i].m_Longitude != 0 && copyPlayerData[i].m_Latitude != 0 && copyPlayerData[j].m_Longitude != 0 && copyPlayerData[j].m_Latitude != 0) {
                    if (stepTag == false) {
                        if (showText != "") {
                            showText += "\n";
                        }
                        line += copyPlayerData[i].m_NickName;
                        stepTag = true;
                    }
                    line += ",";
                    line += copyPlayerData[j].m_NickName;
                    copyPlayerData[j].m_Latitude = 0;
                    copyPlayerData[j].m_Longitude = 0;
                }
            }
            if (line != "") {
                line += "距离过近";
                showText += line;
            }
        }
        return showText;
    }
});
