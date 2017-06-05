/**
 * Created by pengchunwu on 2017/2/28.
 */
/**
 * Created by pengchunwu on 2017/2/14.
 */
var ScorePointLayer;
ScorePointLayer = ccui.Layout.extend({

    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.m_GoldenNode = null;
        this.m_CardNode = null;
        this.m_CardFaceNode = null;
        this.m_NameNode = null;
        this.m_ValudeNode = null;
        this.setAnchorPoint(cc.p(0, 1));
        this.setContentSize(204, 46);

        this.loadUI();

        return true;
    },

    cleanup : function()
    {
        this._super();
    },

    loadUI : function()
    {
        var uiNode = ccs.load(res.score_point_csd);
        uiNode.node.setPositionY(-6);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_GoldenNode = rootNode.getChildByName("golden");
        this.m_CardNode = rootNode.getChildByName("card");
        this.m_NoCardNode = rootNode.getChildByName("no_card");
        this.m_CardFaceNode = this.m_CardNode.getChildByName("icon_face");
        this.m_NameNode = rootNode.getChildByName("name");
        this.m_ValudeNode = rootNode.getChildByName("value");
    },

    getScoreTypeName : function(scoreType, winType) {
        var desc = "";
        switch (scoreType) {
            case g_ScorePointTypeDef.None:
                break;
            case g_ScorePointTypeDef.ChongFengJi:                  // 冲锋鸡
                desc = "冲锋鸡";
                break;
            case g_ScorePointTypeDef.DianPao:                      // 点炮
                desc = "点炮";
                break;
            case g_ScorePointTypeDef.DiHu:                          // 地胡
                desc = "地胡";
                break;
            case g_ScorePointTypeDef.FanPaiJi:                     // 翻牌鸡
                desc = "翻牌鸡";
                break;
            case g_ScorePointTypeDef.MenDou:                       // 闷豆
                desc = "闷豆";
                break;
            case g_ScorePointTypeDef.MingDou:                      // 明豆
                desc = "明豆";
                break;
            case g_ScorePointTypeDef.ShaBao:                       // 杀报
                desc = "杀报";
                break;
            case g_ScorePointTypeDef.TianHu:                       // 天胡
                desc = "天胡";
                break;
            case g_ScorePointTypeDef.TianTing:                     // 天听
                desc = "天听";
                break;
            case g_ScorePointTypeDef.WuGuChongFengJi:            // 冲锋乌骨鸡
                desc = "冲锋乌骨鸡";
                break;
            case g_ScorePointTypeDef.ZeRenJi:                     // 责任鸡
                desc = "责任鸡";
                break;
            case g_ScorePointTypeDef.WuGuZeRenJi:                 // 责任乌骨鸡
                desc = "责任乌骨鸡";
                break;
            case g_ScorePointTypeDef.ZhuangJia:                   // 连庄
                desc = "连庄";
                break;
            case g_ScorePointTypeDef.ZhuanWanDou:                 // 转弯豆
                desc = "转弯豆";
                break;
            case g_ScorePointTypeDef.ZiMo:                         // 自摸
                desc = "自摸";
                break;
            case g_ScorePointTypeDef.YaoJi:                        // 普通鸡
            case g_ScorePointTypeDef.DaoPeiYaoJi:
                desc = "普通鸡";
                break;
            case g_ScorePointTypeDef.WuGuJi:                       // 乌骨鸡
            case g_ScorePointTypeDef.DaoPeiWuGuJi:
                desc = "乌骨鸡";
                break;
            case g_ScorePointTypeDef.GangShangHu:                 // 杠上胡
                desc = "杠上胡";
                break;
            case g_ScorePointTypeDef.RePao:                        // 热炮
                desc = "热炮";
                break;
            case g_ScorePointTypeDef.QiangGang:                   // 抢杠
                desc = "抢杠";
                break;
            case g_ScorePointTypeDef.NoLianZhuang:                     // 一扣二
                break;
            case g_ScorePointTypeDef.PaiXing:                     // 牌型
            {
                switch (winType)
                {
                    case 0 :
                        desc = "平胡";
                        break;

                    case 1 :
                        desc = "大对子";
                        break;

                    case 2 :
                        desc = "七对";
                        break;

                    case 131074:
                        desc = "龙七对";
                        break;

                    case 4 :
                        desc = "单吊";
                        break;

                    case 5 :
                        desc = "单吊";
                        break;

                    case 262144 :
                        desc = "清一色";
                        break;

                    case 262145 :
                        desc = "清大对";
                        break;

                    case 262146 :
                        desc = "清七对";
                        break;

                    case 393218 :
                        desc = "青龙背";
                        break;

                    case 262148 :
                        desc = "清单吊";

                    case 262149 :
                        desc = "双清";

                    default:
                        break;

                }
            }
                break;
            case g_ScorePointTypeDef.BenJi:                       // 本鸡
                desc = "本鸡";
                break;
            case g_ScorePointTypeDef.XingQiJi:                       // 星期鸡
                desc = "星期鸡";
                break;
            case g_ScorePointTypeDef.ChuiFengJi:                       // 吹风鸡
                desc = "吹风鸡";
                break;
            case g_ScorePointTypeDef.HanBaoDou:                       // 憨包豆
                desc = "憨包豆";
                break;
            case g_ScorePointTypeDef.TianQue1:                       // 天缺一门
                desc = "天缺一门";
                break;
            case g_ScorePointTypeDef.TianQue2:                       // 天缺两门
                desc = "天缺两门";
                break;
            case g_ScorePointTypeDef.BianKaDiao:                       // 边卡吊
                desc = "边卡吊";
                break;
            case g_ScorePointTypeDef.DaKuanZhang:                       // 大宽张
                desc = "大宽张";
                break;
            case g_ScorePointTypeDef.QuePai:                       // 胡牌查缺
                desc = "胡牌查缺";
                break;
        
            default:
                break;
        }

        return desc;
    },
    
    isGolden : function (scoreType, cardId, fanpai) {
        var isGolden = false;
        var hasYiTiao = false;
        var hasBaTong = false;
        for (var i = 0; i < fanpai.length; ++i) {
            if (fanpai[i] == 11)
                hasYiTiao = true;
            if (fanpai[i] == 28)
                hasBaTong = true;
        }
        switch (scoreType) {
            case g_ScorePointTypeDef.None:
                break;
            case g_ScorePointTypeDef.ChongFengJi:                  // 冲锋鸡
                if (hasYiTiao)
                    isGolden = true;
                break;
            case g_ScorePointTypeDef.DianPao:                      // 点炮
                break;
            case g_ScorePointTypeDef.DiHu:                          // 地胡
                break;
            case g_ScorePointTypeDef.FanPaiJi:                     // 翻牌鸡
                break;
            case g_ScorePointTypeDef.MenDou:                       // 闷豆
                break;
            case g_ScorePointTypeDef.MingDou:                      // 明豆
                break;
            case g_ScorePointTypeDef.ShaBao:                       // 杀报
                break;
            case g_ScorePointTypeDef.TianHu:                       // 天胡
                break;
            case g_ScorePointTypeDef.TianTing:                     // 天听
                break;
            case g_ScorePointTypeDef.WuGuChongFengJi:            // 冲锋乌骨鸡
                if (hasBaTong)
                    isGolden = true;
                break;
            case g_ScorePointTypeDef.ZeRenJi:                     // 责任鸡
                if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.WuguJi) != 0 && (cardId == 11 && hasYiTiao))
                    isGolden = true;
                break;
            case g_ScorePointTypeDef.WuGuZeRenJi:                 // 责任乌骨鸡
                if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.WuguJi) != 0 && (cardId == 21 && hasBaTong))
                    isGolden = true;
                break;
            case g_ScorePointTypeDef.ZhuangJia:                   // 连庄
                break;
            case g_ScorePointTypeDef.ZhuanWanDou:                 // 转弯豆
                break;
            case g_ScorePointTypeDef.ZiMo:                         // 自摸
                break;
            case g_ScorePointTypeDef.YaoJi:                        // 普通鸡
            case g_ScorePointTypeDef.DaoPeiYaoJi:
                if (hasYiTiao)
                    isGolden = true;
                break;
            case g_ScorePointTypeDef.WuGuJi:                       // 乌骨鸡
            case g_ScorePointTypeDef.DaoPeiWuGuJi:
                if ((g_UserManager.m_RoomData.gameModeOptions & MahJongGameModeOption.WuguJi) != 0 && hasBaTong)
                    isGolden = true;
                break;
            case g_ScorePointTypeDef.GangShangHu:                 // 杠上胡
                break;
            case g_ScorePointTypeDef.RePao:                        // 热炮
                break;
            case g_ScorePointTypeDef.QiangGang:                   // 抢杠
                break;
            case g_ScorePointTypeDef.NoLianZhuang:                     // 一扣二
                break;
            case g_ScorePointTypeDef.PaiXing:                     // 牌型
                break;
            case g_ScorePointTypeDef.BenJi:                       // 本鸡
                break;
            case g_ScorePointTypeDef.XingQiJi:                       // 星期鸡
                break;
            case g_ScorePointTypeDef.ChuiFengJi:                       // 吹风鸡
                break;
            case g_ScorePointTypeDef.HanBaoDou:                       // 憨包豆
                break;
            case g_ScorePointTypeDef.TianQue1:                       //天缺一门
                break;
            case g_ScorePointTypeDef.TianQue2:                       //天缺两门
                break;
            case g_ScorePointTypeDef.BianKaDiao:                        //边卡吊
                break;
            case g_ScorePointTypeDef.DaKuanZhang:                       //大宽张
                break;
            case g_ScorePointTypeDef.QuePai:                       //胡牌查缺
                break;

            default:
                break;
        }

        return isGolden;
    },

    setCard : function (card, newId) {
        card.loadTexture(g_ResCardFaces[newId]);
    },

    setData : function (scoreType, cardId, value, fanpai, winType) {
        this.m_GoldenNode.setVisible(this.isGolden(scoreType, cardId, fanpai));
        this.m_NameNode.setString(this.getScoreTypeName(scoreType, cardId));
        if (value > 0)
            this.m_ValudeNode.setString("+" + value);
        else
            this.m_ValudeNode.setString(value);

        switch (scoreType) {
            case g_ScorePointTypeDef.None:
                break;
            case g_ScorePointTypeDef.ChongFengJi:                  // 冲锋鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.DianPao:                      // 点炮
                break;
            case g_ScorePointTypeDef.DiHu:                          // 地胡
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_5.png");
                break;
            case g_ScorePointTypeDef.FanPaiJi:                     // 翻牌鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.MenDou:                       // 闷豆
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_3.png");
                break;
            case g_ScorePointTypeDef.MingDou:                      // 明豆
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_2.png");
                break;
            case g_ScorePointTypeDef.ShaBao:                       // 杀报
            case g_ScorePointTypeDef.TianHu:                       // 天胡
            case g_ScorePointTypeDef.TianTing:                     // 天听
            case g_ScorePointTypeDef.DaKuanZhang:                       // 大宽张
            case g_ScorePointTypeDef.BianKaDiao:                       // 边卡吊
            case g_ScorePointTypeDef.ZiMo:                         // 自摸
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_5.png");
                break;
            case g_ScorePointTypeDef.WuGuChongFengJi:            // 冲锋乌骨鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.ZeRenJi:                     // 责任鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.WuGuZeRenJi:                 // 责任乌骨鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.ZhuangJia:                   // 连庄
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_1.png");
                break;
            case g_ScorePointTypeDef.ZhuanWanDou:                 // 转弯豆
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_4.png");
                break;
            case g_ScorePointTypeDef.YaoJi:                        // 普通鸡
            case g_ScorePointTypeDef.WuGuJi:                       // 乌骨鸡
            case g_ScorePointTypeDef.DaoPeiYaoJi:                   // 倒赔幺鸡
            case g_ScorePointTypeDef.DaoPeiYaoJi:                   // 倒赔乌骨鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.GangShangHu:                 // 杠上胡
            case g_ScorePointTypeDef.RePao:                        // 热炮
            case g_ScorePointTypeDef.QiangGang:                   // 抢杠
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_5.png");
                break;
            case g_ScorePointTypeDef.NoLianZhuang:                     // 一扣二
                break;
            case g_ScorePointTypeDef.PaiXing:                     // 牌型
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_5.png");
                break;
            case g_ScorePointTypeDef.BenJi:                       // 本鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.XingQiJi:                       // 星期鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.ChuiFengJi:                       // 吹风鸡
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.HanBaoDou:                       // 憨包豆
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
            case g_ScorePointTypeDef.TianQue1:                 // 天缺一门
            case g_ScorePointTypeDef.TianQue2:                        // 天缺两门
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_que.png");
                break;
            case g_ScorePointTypeDef.QuePai:                        // 胡牌查缺
                this.m_CardNode.setVisible(false);
                this.m_NoCardNode.setVisible(true);
                this.m_NoCardNode.loadTexture("res/res/end/end_7_que.png");
                break;
            

            default:
                this.m_CardNode.setVisible(true);
                this.m_NoCardNode.setVisible(false);
                this.setCard(this.m_CardFaceNode, cardId);
                break;
        }
    }

});

