/**
 * Created by pengchunwu on 2017/3/7.
 */
var RoundDetailLayer = cc.Layer.extend( {
    ctor : function () {
        this._super();

        this.m_Players = new Array(4);
        for (var i = 0; i < 4; ++i) {
            this.m_Players[i] = {};
            this.m_Players[i].ui = {};
            this.m_Players[i].data = {};
        }

        this.loadUI();

        return true;
    },

    loadUI : function () {
        var uiNode = ccs.load(res.round_detail_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        for (var i = 0; i < 4; ++i) {
            var key = "00" + (i + 1);
            key = key.substring(key.length - 2);
            console.log("key = player" + key);
            this.m_Players[i].ui.m_RootNode = rootNode.getChildByName("player" + key);
            this.m_BtnClose = rootNode.getChildByName("btn_close");
            this.m_BtnClose.addTouchEventListener(this.onCloseClick, this);

            var portraitNode = this.m_Players[i].ui.m_RootNode.getChildByName("portrait");
            this.m_Players[i].ui.m_LabelName = portraitNode.getChildByName("label_name");
            this.m_Players[i].ui.m_IconPortrait = portraitNode.getChildByName("icon");
            this.m_Players[i].ui.m_IconZhuang = portraitNode.getChildByName("icon_zhuang");

            this.m_Players[i].ui.m_CardsInHand = {};
            this.m_Players[i].ui.m_ActionResults = {};
            this.m_Players[i].ui.m_CardsInHand.m_RootNode = this.m_Players[i].ui.m_RootNode.getChildByName("cards_in_hand");
            this.m_Players[i].ui.m_ActionResults.m_RootNode = this.m_Players[i].ui.m_RootNode.getChildByName("action_results");

            this.m_Players[i].ui.m_CardsInHand.m_Cards = new Array(14);
            for (var m = 1; m < 15; ++m) {
                key = "00" + m;
                key = key.substring(key.length - 2);
                this.m_Players[i].ui.m_CardsInHand.m_Cards[m - 1] = {};
                this.m_Players[i].ui.m_CardsInHand.m_Cards[m - 1].Card = this.m_Players[i].ui.m_CardsInHand.m_RootNode.getChildByName("card_" + key);
                this.m_Players[i].ui.m_CardsInHand.m_Cards[m - 1].Face = this.m_Players[i].ui.m_CardsInHand.m_Cards[m - 1].Card.getChildByName("icon_face");
            }

            this.m_Players[i].ui.m_ActionResults.m_Results = new Array(4);
            for (var m = 1; m < 5; ++m) {
                key = "00" + m;
                key = key.substring(key.length - 2);

                this.m_Players[i].ui.m_ActionResults.m_Results[m - 1] = {};
                this.m_Players[i].ui.m_ActionResults.m_Results[m - 1].m_RootNode = this.m_Players[i].ui.m_ActionResults.m_RootNode.getChildByName("peng_" + key);

                var cards = new Array(4);
                for (var n = 1; n < 5; ++n) {
                    key = "00" + n;
                    key = key.substring(key.length - 2);

                    cards[n - 1] = {};
                    cards[n - 1].Card = this.m_Players[i].ui.m_ActionResults.m_Results[m - 1].m_RootNode.getChildByName("card_" + key);
                    cards[n - 1].Face = cards[n - 1].Card.getChildByName("icon_face");
                }
                this.m_Players[i].ui.m_ActionResults.m_Results[m - 1].m_Cards = cards;
            }
        }

        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);
    },

    onCloseClick : function (sender, eventType) {
        if (eventType == 2) {
            this.removeFromParent(true);
        }
    },

    setCard : function (card, newId) {
        card.loadTexture(g_ResCardFaces[newId]);
    },

    setData : function (resultData) {
        console.log("max player = " + resultData.PlayerData.length);
        for (var i = 0; i < 4; i++) {
            if (i < resultData.PlayerData.length)
                this.m_Players[i].ui.m_RootNode.setVisible(true);
            else
                this.m_Players[i].ui.m_RootNode.setVisible(false);
        }

        for (var i = 0; i < resultData.PlayerData.length; ++i) {
            console.log("resultData.PlayerData[" + i + "].CardsActionResult.length = " + resultData.PlayerData[i].CardsActionResult.length)
            if (resultData.PlayerData[i].CardsActionResult.length > 0) {
                this.m_Players[i].ui.m_ActionResults.m_RootNode.setVisible(true);
                var m = 0;
                for (m = 0; m < 4; ++m) {
                    this.m_Players[i].ui.m_ActionResults.m_Results[m].m_RootNode.setVisible(false);
                }

                m = 0;
                for (var n = 0; n < resultData.PlayerData[i].CardsActionResult.length; ++n) {
                    this.m_Players[i].ui.m_ActionResults.m_Results[m].m_RootNode.setVisible(true);
                    if (resultData.PlayerData[i].CardsActionResult[m].ActionType == ActionResultTypeDef.Peng)
                    {
                        console.log("ActionResultTypeDef.Peng");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Card.setVisible(false);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Face.setVisible(true);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.loadTexture("res/res/room/mahjong_card_9.png");
                    }
                    else if (resultData.PlayerData[i].CardsActionResult[m].ActionType == ActionResultTypeDef.Gang)
                    {
                        console.log("ActionResultTypeDef.Gang");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Face.setVisible(true);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Card.loadTexture("res/res/room/mahjong_card_9.png");
                    }
                    else if (resultData.PlayerData[i].CardsActionResult[m].ActionType == ActionResultTypeDef.AnGang)
                    {
                        console.log("ActionResultTypeDef.AnGang");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Face.setVisible(false);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Face.setVisible(false);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Face.setVisible(false);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Face.setVisible(true);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.loadTexture("res/res/room/mahjong_card_3.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.loadTexture("res/res/room/mahjong_card_3.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.loadTexture("res/res/room/mahjong_card_3.png");
                    }
                    else if (resultData.PlayerData[i].CardsActionResult[m].ActionType == ActionResultTypeDef.ZhuanWanDou)
                    {
                        console.log("ActionResultTypeDef.ZhuanWanDou");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Card.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Face.setVisible(true);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Face.setVisible(false);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.setCard(this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Face, resultData.PlayerData[i].CardsActionResult[m].Cards[0]);
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[0].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[1].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[2].Card.loadTexture("res/res/room/mahjong_card_9.png");
                        this.m_Players[i].ui.m_ActionResults.m_Results[m].m_Cards[3].Card.loadTexture("res/res/room/mahjong_card_3.png");
                    }
                    m++;
                }
            }
            else {
                this.m_Players[i].ui.m_ActionResults.m_RootNode.setVisible(false);
            }

            var width = this.m_Players[i].ui.m_ActionResults.m_Results[1].m_RootNode.x - this.m_Players[i].ui.m_ActionResults.m_Results[0].m_RootNode.x;
            var offset = 0;
            if (resultData.PlayerData[i].CardsActionResult.length > 0)
                offset = width * resultData.PlayerData[i].CardsActionResult.length;

            this.m_Players[i].ui.m_CardsInHand.m_RootNode.x += offset;
            var startIndex = 14 - resultData.PlayerData[i].CardsInHand.length;
            var cardsLength = resultData.PlayerData[i].CardsInHand.length;
            for (m = 0; m < resultData.PlayerData[i].CardsInHand.length; m++) {
                this.m_Players[i].ui.m_CardsInHand.m_Cards[m].Card.setVisible(true);
                if (resultData.PlayerData[i].isHu & m == cardsLength - 1) {
                    var posX = this.m_Players[i].ui.m_CardsInHand.m_Cards[m].Card.getPositionX();
                    var offsetX = 15;
                    this.m_Players[i].ui.m_CardsInHand.m_Cards[m].Card.setPositionX(posX + offsetX);
                }
                this.setCard(this.m_Players[i].ui.m_CardsInHand.m_Cards[m].Face, resultData.PlayerData[i].CardsInHand[m]);
            }
            for (m = resultData.PlayerData[i].CardsInHand.length; m < 14; m++) {
                this.m_Players[i].ui.m_CardsInHand.m_Cards[m].Card.setVisible(false);
            }

            this.m_Players[i].ui.m_IconZhuang.setVisible(resultData.PlayerData[i].isZhuang);
            this.m_Players[i].ui.m_LabelName.setString(resultData.PlayerData[i].UserName);
            console.log("resultData.PlayerData[i].IconURL = " + resultData.PlayerData[i].IconURL);
            NetworkManager.LoadURL(this.m_Players[i].ui.m_IconPortrait, resultData.PlayerData[i].IconURL);

        }
    }
});