var EmotionDialogLayer;
var show_emotion = true;
var g_ResEmotionIcons = [
    "res/res/chat/face_0.png",
    "res/res/chat/face_1.png",
    "res/res/chat/face_2.png",
    "res/res/chat/face_3.png",
    "res/res/chat/face_4.png",
    "res/res/chat/face_5.png",
    "res/res/chat/face_6.png",
    "res/res/chat/face_7.png",
    "res/res/chat/face_8.png",
    "res/res/chat/face_9.png",
    "res/res/chat/face_10.png",
    "res/res/chat/face_11.png",
    "res/res/chat/face_12.png",
    "res/res/chat/face_13.png",
    "res/res/chat/face_14.png",
    "res/res/chat/face_15.png",
];

var g_PredefineMessages = {};
g_PredefineMessages[VoiceType.Msg1] = "哈哈，手气真好";
g_PredefineMessages[VoiceType.Msg2] = "这把输定了";
g_PredefineMessages[VoiceType.Msg3] = "天，这牌也太烂了";
g_PredefineMessages[VoiceType.Msg4] = "你太牛了";
g_PredefineMessages[VoiceType.Msg5] = "快点出牌啊";
g_PredefineMessages[VoiceType.Msg6] = "搞快点了嘛";
g_PredefineMessages[VoiceType.Msg7] = "你们几个慢慢打哈，我有点事先走了";
g_PredefineMessages[VoiceType.Msg8] = "再来几局呗";


EmotionDialogLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.m_changyongyu1_btn = null;
        this.m_changyongyu2_btn = null;
        this.m_biaoqing1_btn = null;
        this.m_biaoqing2_btn = null;
        this.m_emotion_panel = null;
        this.m_message_panel = null;
        this.m_message_template = null;
        this.m_btn_close = null;
        this.loadUI();
    },

    loadUI: function () {
        var uiNode = ccs.load(res.emotion_dialog_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_changyongyu1_btn = rootNode.getChildByName("changyongyu1_btn");
        this.m_changyongyu2_btn = rootNode.getChildByName("changyongyu2_btn");
        this.m_biaoqing1_btn = rootNode.getChildByName("biaoqing1_btn");
        this.m_biaoqing2_btn = rootNode.getChildByName("biaoqing2_btn");
        this.m_emotion_panel = rootNode.getChildByName("emotion_panel");
        this.m_message_panel = rootNode.getChildByName("message_panel");
        this.m_message_template = rootNode.getChildByName("message_item");
        this.m_btn_close = rootNode.getChildByName("btn_close");
        this.m_biaoqing1_btn.addTouchEventListener(this.onBiaoQingClick, this);
        this.m_changyongyu1_btn.addTouchEventListener(this.onChangYongYuClick, this);
        this.m_btn_close.addTouchEventListener(this.onCloseClick, this);
        this.initEmotionPanel();
        this.initMessagePanel();
        this._showPanel();


        if ('touches' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchEnded: this.onTouchEnded
            }, this);
        }
        else {
            cc.log("TOUCH-ONE-BY-ONE test is not supported on desktop");
        }

    },

    onCloseClick : function (sender, eventType) {
        if (eventType == 2) {
            this.removeFromParent(true);
        }
    },

    onChangYongYuClick: function (sender, eventType) {
        if (eventType == 2) {
            show_emotion = false;
            this._showPanel();
        }
    },

    onBiaoQingClick: function (sender, eventType) {
        if (eventType == 2) {
            show_emotion = true;
            this._showPanel();
        }
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

    initEmotionPanel: function () {

        var self = this;
        var setTouchEvent = function (button, index) {
            button.addTouchEventListener(function (sender, type) {
                if (ccui.Widget.TOUCH_ENDED == type) {
                    cc.log(g_ResEmotionIcons[index]);

                    var msg = {};
                    msg.ACTION = ActionDef.PlayEmotion;
                    msg.MSG_ID = g_NetworkManager.NextMessageID();
                    msg.UID = g_UserManager.m_UserID;
                    msg.roomid = g_UserManager.m_RoomData.roomid;
                    msg.emojiid = index;

                    var json = JSON.stringify(msg);
                    g_NetworkManager.sendMessage(json, ActionDef.PlayEmotion, msg.MSG_ID);

                    self.removeFromParent(true);
                }
            });
        };
        for (var i = 0; i < g_ResEmotionIcons.length; ++i) {
            var button = new ccui.Button();

            button.setTouchEnabled(true);
            button.loadTextures(g_ResEmotionIcons[i], g_ResEmotionIcons[i], "");
            button.x = 76 + parseInt(i / 4) * 135;
            button.y = 79 + (i % 4) * 135;
            setTouchEvent(button, i);
            this.m_emotion_panel.addChild(button);
        }
    },

    initMessagePanel: function () {
        for (var key in g_PredefineMessages)
        {
            var new_item = this.m_message_template.clone();
            new_item.setVisible(true);
            this.m_message_panel.pushBackCustomItem(new_item);
            var label = new_item.getChildByName("Text_1");
            label.setString(g_PredefineMessages[key]);
            new_item.addTouchEventListener(this.onMessageBtnClick, this);
            new_item.setTag(key);
        }
    },
    onMessageBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            cc.log(sender.getTitleText());
            g_AudioManager.playerEffect(SfxType.BtnClick);
            var msgId = sender.getTag();
            this.removeFromParent(true);

            var msg = {};
            msg.ACTION = ActionDef.PlayPredefineVoice;
            msg.MSG_ID = g_NetworkManager.NextMessageID();
            msg.UID = g_UserManager.m_UserID;
            msg.roomid = g_UserManager.m_RoomData.roomid;
            msg.talkid = msgId;

            var json = JSON.stringify(msg);
            g_NetworkManager.sendMessage(json, ActionDef.PlayPredefineVoice, msg.MSG_ID);
        }
    },

    _showPanel: function () {
        this.m_biaoqing1_btn.setVisible(!show_emotion);
        this.m_biaoqing2_btn.setVisible(show_emotion);
        this.m_changyongyu1_btn.setVisible(show_emotion);
        this.m_changyongyu2_btn.setVisible(!show_emotion);
        this.m_emotion_panel.setVisible(show_emotion);
        this.m_message_panel.setVisible(!show_emotion);
    },

    showEmotionPanel: function () {
        show_emotion = true;
        this._showPanel();
    },

    showMessagePanel: function () {
        show_emotion = false;
        this._showPanel();
    }
});