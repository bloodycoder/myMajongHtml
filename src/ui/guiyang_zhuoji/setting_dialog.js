
var SettingDialogLayer;
SettingDialogLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.m_closeBtn = null;
        this.m_fangyan_checkbox = null;
        this.m_putonghua_checkbox = null;
        this.m_fangyan_label = null;
        this.m_putonghua_label = null;
        this.m_sfx_slider = null;
        this.m_music_slider = null;
        this.m_change_user_btn = null;
        this.m_exit_btn = null;
        this.m_close_btn = null;
        this.fangyan = 1;
        this.m_InGaming = false;
        this.m_ChatRoomName = null;
        this.m_BtnShowLogger = null;

        this.m_BtnDismiss = null;
        this.m_createChatRoom_btn = null;

        this.m_zhendong_checkbox_ui = null;
        this.m_gps_checkbox_ui = null;
        this.loadUI();

    },

    loadUI: function () {
        var uiNode = ccs.load(res.setting_dialog_csd);
        this.addChild(uiNode.node, 1);

        var rootNode = uiNode.node.getChildByName("root");
        this.m_fangyan_checkbox = rootNode.getChildByName("fangyan_checkbox");
        this.m_putonghua_checkbox = rootNode.getChildByName("putonghua_checkbox");
        this.m_fangyan_label = rootNode.getChildByName("fangyan_label");
        this.m_putonghua_label = rootNode.getChildByName("putonghua_label");
        this.m_sfx_slider = rootNode.getChildByName("sfx_slider");
        this.m_music_slider = rootNode.getChildByName("sound_slider");
        this.m_change_user_btn = rootNode.getChildByName("change_user_btn");
        this.m_exit_btn = rootNode.getChildByName("exit_btn");
        this.m_btn_sound = rootNode.getChildByName("btn_sound");
        this.m_btn_music = rootNode.getChildByName("btn_music");
        this.m_BtnShowLogger = rootNode.getChildByName("btn_show_log");
        this.m_BtnToggleLogger = rootNode.getChildByName("btn_toggle_log");

        this.m_createChatRoom_btn = rootNode.getChildByName("create_chatroom");
        this.m_createChatRoom_label = this.m_createChatRoom_btn.getChildByName("Text_13");

        this.m_zhendong_checkbox_ui = rootNode.getChildByName("zhendong_checkbox");
        this.m_gps_checkbox_ui = rootNode.getChildByName("gps_checkbox");


        //this.m_createChatRoom_btn.setVisible(false);

        if (cc.sys.os == cc.sys.OS_IOS) {
            this.m_exit_btn.setVisible(false);
            this.m_change_user_btn.setVisible(true);
        }
        this.m_exit_btn.addTouchEventListener(this.onExitBtnClick, this);
        this.m_change_user_btn.addTouchEventListener(this.onChangeUserClick, this);
        this.m_closeBtn = rootNode.getChildByName("close_btn");
        this.m_dismiss_btn = rootNode.getChildByName("dismis_btn");
        this.m_closeBtn.addTouchEventListener(this.onCloseClick, this);
        this.m_dismiss_btn.addTouchEventListener(this.onDismissClick, this);
        this.m_btn_sound.addTouchEventListener(this.onToggleSound, this);
        this.m_btn_music.addTouchEventListener(this.onToggleMusic, this);

        this.m_createChatRoom_btn.addTouchEventListener(this.onCreateChatRoomClick, this);
        this.m_fangyan_checkbox.addEventListener(this.onFangYanCheckBoxClicked, this);
        this.m_fangyan_label.addTouchEventListener(this.onFangYanLabelClicked, this);
        this.m_putonghua_checkbox.addEventListener(this.onPuTongHuaCheckBoxClicked, this);
        this.m_putonghua_label.addTouchEventListener(this.onPutongHuaLabelClick, this);
        this.m_sfx_slider.addEventListener(this.sliderSfxEvent, this);
        this.m_music_slider.addEventListener(this.sliderMusicEvent, this);

        this.m_zhendong_checkbox_ui.addEventListener(this.zSelectedStateEvent, this);
        this.m_gps_checkbox_ui.addEventListener(this.gSelectedStateEvent, this);

        if (cc.game.config.showFPS == true) {
            this.m_BtnShowLogger.addTouchEventListener(this.onShowLoggerClick, this);
            this.m_BtnToggleLogger.addTouchEventListener(this.onToggleLoggerClick, this);
        }
        else
        {
            this.m_BtnShowLogger.setVisible(false);
            this.m_BtnToggleLogger.setVisible(false);
        }

        var ls = cc.sys.localStorage;
        var sfx = g_ConfigManager.SoundVolume;
        var sound = g_ConfigManager.MusicVolume;
        var gps_permission = true;
        var gps_opened = true;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            gps_permission = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getGPSPermission", "()Z");
            gps_opened = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getGPSIsOpen", "()Z");
        } else if (cc.sys.os == cc.sys.OS_IOS) {
                                     gps_permission = IosRegister.IsGpsEnable();
                                     gps_opened = true;
        }
        
        this.fangyan = g_ConfigManager.LanguageType;
        cc.log(this.fangyan);
        var temp = (this.fangyan == LanguageTypeDef.GuiYang);
        this.m_fangyan_checkbox.setSelected(temp);
        this.m_fangyan_checkbox.setEnabled(!temp);
        this.m_fangyan_label.setEnabled(!temp);
        this.m_putonghua_checkbox.setSelected(!temp);
        this.m_putonghua_checkbox.setEnabled(temp);
        this.m_putonghua_label.setEnabled(temp);
        this.m_sfx_slider.setPercent(parseFloat(sfx));
        this.m_music_slider.setPercent(parseFloat(sound));

        this.m_zhendong_checkbox_ui.setSelected(g_ConfigManager.IsZhenDong==1);
        this.m_gps_checkbox_ui.setSelected(g_ConfigManager.IsGPS == 1 && gps_permission && gps_opened);

        //rootNode.addTouchEventListener(this.onTouchEnded, this);
        uiNode.action.gotoFrameAndPlay(0, false);
        uiNode.node.runAction(uiNode.action);

        cc.log("g_ConfigManager.SoundOn:" + g_ConfigManager.SoundOn);
        cc.log("g_ConfigManager.MusicOn:" + g_ConfigManager.MusicOn);

        if (g_ConfigManager.SoundOn == true) {
            this.m_btn_sound.loadTextureNormal("res/res/common/common_voice_nor.png");
            this.m_btn_sound.loadTexturePressed("res/res/common/common_voice_nor.png");
        }
        else {
            this.m_btn_sound.loadTextureNormal("res/res/common/common_voice_pre.png");
            this.m_btn_sound.loadTexturePressed("res/res/common/common_voice_pre.png");
        }

        if (g_ConfigManager.MusicOn == true) {
            this.m_btn_music.loadTextureNormal("res/res/common/common_voice_nor.png");
            this.m_btn_music.loadTexturePressed("res/res/common/common_voice_nor.png");
        }
        else {
            this.m_btn_music.loadTextureNormal("res/res/common/common_voice_pre.png");
            this.m_btn_music.loadTexturePressed("res/res/common/common_voice_pre.png");
        }


        this.isGame(false);

        //g_AudioManager.playVoice(SexType.nan, HuaType.gui, VoiceType.YiWan);
        var CurrentPlayerCount = g_UserManager.getPlayerCount();
        if (CurrentPlayerCount != g_UserManager.m_RoomData.maxPlayer) {
            this.m_createChatRoom_btn.setEnabled(false);
        }

    },

    cleanup: function () {
        this._super();

        g_ConfigManager.SaveConfig();
    },


    isGame: function (running) {
        if (cc.sys.os == cc.sys.OS_IOS) {
            this.m_exit_btn.setVisible(false);
        }
        else {
            this.m_exit_btn.setVisible(!running);

        }


        this.m_change_user_btn.setVisible(!running);
        if (cc.sys.os == cc.sys.OS_IOS) {
            // this.m_change_user_btn.setPosition(Point(0,butten->getPosition().y);
            this.m_change_user_btn.setPositionX(this.getContentSize().width/2);
        }

        this.m_dismiss_btn.setVisible(running);

        this.m_createChatRoom_btn.setVisible(running);
        if (running == true) {
            var CurrentPlayerCount = g_UserManager.getPlayerCount();
            if (CurrentPlayerCount < g_UserManager.m_RoomData.maxPlayer) {
                this.m_createChatRoom_btn.setEnabled(false);
            }
        }
    },

    chatRoomName: function (roomName) {
        this.m_ChatRoomName = roomName;
        if (this.m_ChatRoomName == null) {
            this.m_createChatRoom_label.setString("申请实时语音");
        } else {
            this.m_createChatRoom_label.setString("离开实时语音");
        }
    },

    onCloseClick: function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            this.removeFromParent(true);
        }
    },

    onTouchEnded: function (touch, event) {
        if (eventType == 2) {
            this.removeFromParent(true);
        }
    },

    commonDialogCallback: function (buttonType, tag) {
        if (buttonType == CommonButtonTypeDef.OK) {
            if (tag == "quit") {
                cc.director.end();
            }
            else if (tag == "quitchatroom") {
                VoiceManager.QuitRoom();
                var msg = {};
                msg.ACTION = ActionDef.QuitChatRoom;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.QuitChatRoom, msg.MSG_ID);
                this.chatRoomName(null);
                if (g_RootLayer.m_CurrentScene.m_IsMicOpen == false) {
                    VoiceManager.OpenMic();
                    g_RootLayer.m_CurrentScene.m_IsMicOpen = true;
                }
                g_RootLayer.m_CurrentScene.m_ChatRoomName = null;
                g_RootLayer.m_CurrentScene.m_IsChatting = false;

                g_RootLayer.m_CurrentScene.m_BtnTalk.loadTextureNormal("res/res/room/mahjong_voice_nor.png");
                g_RootLayer.m_CurrentScene.m_BtnTalk.loadTexturePressed("res/res/room/mahjong_voice_pre.png");
                this.removeFromParent(true);
            }
            else if (tag == "ChangeUser") {
                g_RootLayer.logout();
            }
        }

    },


    onShowLoggerClick : function (sender, eventType) {
        if (eventType == 2) {
            g_RootLayer.showLogger();
        }
    },

    onToggleLoggerClick : function (sender, eventType) {
        if (eventType == 2) {
            g_RootLayer.toggleLogger();
        }
    },

    onExitBtnClick: function (sender, eventType) {
        if (eventType == 2) {
            g_RootLayer.showMessageBox("是否确定要退出游戏？", "提示",
                (CommonButtonTypeDef.OK | CommonButtonTypeDef.Cancel), null, null, this, "quit");
        }
    },

    onChangeUserClick: function (sender, eventType) {
        if (eventType == 2) {
            g_RootLayer.showMessageBox("是否确定要切换账号并且退出登录？", "提示",
                (CommonButtonTypeDef.OK | CommonButtonTypeDef.Cancel), null, null, this, "ChangeUser");
        }
    },

    onDismissClick: function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);
            if (g_RootLayer.m_CurrentScene.requestQuitRoom != "undefined") {
                g_RootLayer.m_CurrentScene.requestQuitRoom(this, true);
                this.onCloseClick(null, 2);
            }
        }
    },

    onCreateChatRoomClick: function (sender, eventType) {
        if (eventType == 2) {
            g_AudioManager.playerEffect(SfxType.BtnClick);

            if (typeof g_RootLayer.m_CurrentScene.m_RoundStatus != "undefined") {
                if (g_RootLayer.m_CurrentPlayer < RoundStatusDef.Running) {
                    return;
                }
            }

            if (this.m_ChatRoomName == null) {
                var msg = {};
                msg.ACTION = ActionDef.RequestCreateChatRoom;
                msg.MSG_ID = g_NetworkManager.NextMessageID();
                msg.UID = g_UserManager.m_UserID;

                var json = JSON.stringify(msg);
                g_NetworkManager.sendMessage(json, ActionDef.RequestCreateChatRoom, msg.MSG_ID);
                this.onCloseClick(null, 2);
            }
            else {
                g_RootLayer.showMessageBox("确定要离开实时语音聊天吗？\n（离开后仍可按住麦克风键发送录音）", "提示",
                    (CommonButtonTypeDef.OK | CommonButtonTypeDef.Cancel), null, null, this, "quitchatroom");
            }
        }
    },

    onToggleSound: function (sender, eventType) {
        if (eventType == 2) {
            g_ConfigManager.SoundOn = !g_ConfigManager.SoundOn;
            if (g_ConfigManager.SoundOn == true) {
                this.m_btn_sound.loadTextureNormal("res/res/common/common_voice_nor.png");
                this.m_btn_sound.loadTexturePressed("res/res/common/common_voice_nor.png");
            }
            else {
                this.m_btn_sound.loadTextureNormal("res/res/common/common_voice_pre.png");
                this.m_btn_sound.loadTexturePressed("res/res/common/common_voice_pre.png");
            }
        }
    },

    onToggleMusic: function (sender, eventType) {
        if (eventType == 2) {
            g_ConfigManager.MusicOn = !g_ConfigManager.MusicOn;
            if (g_ConfigManager.MusicOn == true) {
                this.m_btn_music.loadTextureNormal("res/res/common/common_voice_nor.png");
                this.m_btn_music.loadTexturePressed("res/res/common/common_voice_nor.png");
                g_AudioManager.setVolumn(g_ConfigManager.MusicVolume);
            }
            else {
                this.m_btn_music.loadTextureNormal("res/res/common/common_voice_pre.png");
                this.m_btn_music.loadTexturePressed("res/res/common/common_voice_pre.png");
                g_AudioManager.setVolumn(0);
            }
        }
    },

    setFangYang: function () {
        g_AudioManager.playerEffect(SfxType.BtnClick);
        this.m_putonghua_checkbox.setSelected(false);
        this.m_putonghua_checkbox.setEnabled(true);
        this.m_putonghua_label.setEnabled(true);
        this.m_fangyan_checkbox.setSelected(true);
        this.m_fangyan_checkbox.setEnabled(false);
        this.m_fangyan_label.setEnabled(false);
        g_ConfigManager.LanguageType = LanguageTypeDef.GuiYang;
        g_ConfigManager.SaveConfig();
    },

    onFangYanCheckBoxClicked: function (sender, type) {
        switch (type) {
            case ccui.CheckBox.EVENT_UNSELECTED:
                this.m_putonghua_checkbox.setSelected(true);
                break;
            case ccui.CheckBox.EVENT_SELECTED:
                this.setFangYang();
                break;

            default:
                break;
        }
    },

    onFangYanLabelClicked: function (sender, type) {
        if (type == 2) {
            this.setFangYang();
        }
    },

    setPuTongHua: function () {
        g_AudioManager.playerEffect(SfxType.BtnClick);
        this.m_fangyan_checkbox.setSelected(false);
        this.m_fangyan_checkbox.setEnabled(true);
        this.m_fangyan_label.setEnabled(true);
        this.m_putonghua_checkbox.setSelected(true);
        this.m_putonghua_checkbox.setEnabled(false);
        this.m_putonghua_label.setEnabled(false);
        g_ConfigManager.LanguageType = LanguageTypeDef.Mandarin;
        g_ConfigManager.SaveConfig();
    },

    onPuTongHuaCheckBoxClicked: function (sender, type) {
        switch (type) {
            case ccui.CheckBox.EVENT_UNSELECTED:
                this.m_fangyan_checkbox.setSelected(true);
                break;
            case ccui.CheckBox.EVENT_SELECTED:
                this.setPuTongHua();
                break;
            default:
                break;
        }
    },

    onPutongHuaLabelClick: function (sender, type) {
        if (type == 2) {
            this.setPuTongHua();
        }
    },

    sliderSfxEvent: function (sender, type) {
        switch (type) {
            case 2:
                var slider = sender;
                var percent = slider.getPercent();
                // TODO: adjust the sfx
                g_ConfigManager.SoundVolume = percent;
                break;
            case ccui.Slider.EVENT_PERCENT_CHANGED:
                var slider = sender;
                var percent = slider.getPercent();
                if (percent > 0) {
                    this.m_btn_sound.loadTextureNormal("res/res/common/common_voice_nor.png");
                }
                else {
                    this.m_btn_sound.loadTextureNormal("res/res/common/common_voice_pre.png");
                }
                g_AudioManager.setSfxVolumn(percent / 100);
                g_ConfigManager.SoundVolume = percent;
                break;
            default:
                break;
        }
    },

    sliderMusicEvent: function (sender, type) {
        switch (type) {
            case 2:
                var slider = sender;
                var percent = slider.getPercent();
                g_ConfigManager.MusicVolume = percent;
                break;
            case ccui.Slider.EVENT_PERCENT_CHANGED:
                var slider = sender;
                var percent = slider.getPercent();
                if (percent > 0) {
                    this.m_btn_music.loadTextureNormal("res/res/common/common_voice_nor.png");
                }
                else {
                    this.m_btn_music.loadTextureNormal("res/res/common/common_voice_pre.png");
                }
                g_AudioManager.setVolumn(percent / 100);
                g_ConfigManager.MusicVolume = percent;
                break;
            default:
                break;
        }
    },

    zSelectedStateEvent: function (sender, type) {
        switch (type) {
            case ccui.CheckBox.EVENT_UNSELECTED:
                g_ConfigManager.IsZhenDong = 0;
                break;
            case ccui.CheckBox.EVENT_SELECTED:
                g_ConfigManager.IsZhenDong = 1;
                break;
            default:
                break;
        }
        g_ConfigManager.SaveConfig();
    },

    gSelectedStateEvent: function (sender, type) {
        var gps_permission = true;
        var gps_opened = true;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            gps_permission = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getGPSPermission", "()Z");
            gps_opened = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getGPSIsOpen", "()Z");
        } else if (cc.sys.os == cc.sys.OS_IOS) {
                                     gps_permission = IosRegister.IsGpsEnable();
                                     gps_opened = true;
        }
        if (gps_permission && gps_opened) {
            switch (type) {
                case ccui.CheckBox.EVENT_UNSELECTED:
                    g_ConfigManager.IsGPS = 0;
                    break;
                case ccui.CheckBox.EVENT_SELECTED:
                    g_ConfigManager.IsGPS = 1;
                    break;

                default:
                    break;
            }
            g_ConfigManager.SaveConfig();
        } else if (gps_permission && !gps_opened) {
            this.m_gps_checkbox_ui.setSelected(false);
            g_RootLayer.showTopMessageBox("请开启定位服务");
        } else if (!gps_permission && gps_opened) {
            this.m_gps_checkbox_ui.setSelected(false);
            g_RootLayer.showTopMessageBox("请设置GPS权限");
        } else if (!gps_permission && !gps_opened) {
            this.m_gps_checkbox_ui.setSelected(false);
            g_RootLayer.showTopMessageBox("请开启定位服务，设置GPS权限");
        }
        
        
    },

});
