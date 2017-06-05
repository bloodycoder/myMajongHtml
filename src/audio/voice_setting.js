var VoiceType = {
    YiWan: 1,
    ErWan: 2,
    SanWan: 3,
    SiWan: 4,
    WuWan: 5,
    LiuWan: 6,
    QiWan: 7,
    BaWan: 8,
    JiuWan: 9,
    YiTiao: 11,
    ErTiao: 12,
    SanTiao: 13,
    SiTiao: 14,
    WuTiao: 15,
    LiuTiao: 16,
    QiTiao: 17,
    BaTiao: 18,
    JiuTiao: 19,
    YiBing: 21,
    ErBing: 22,
    SanBing: 23,
    SiBing: 24,
    WuBing: 25,
    LiuBing: 26,
    QiBing: 27,
    BaBing: 28,
    JiuBing: 29,
    DongFeng: 31,
    NanFeng: 32,
    XiFeng: 33,
    BeiFeng: 34,
    Zhong: 35,
    Fa: 36,
    Bai: 37,
    Peng: 100,
    Gang: 101,
    AnGang: 102,
    JiePao: 103,
    ZiMo: 104,
    Chi: 105,
    BuHua: 106,
    Msg1: 201,
    Msg2: 202,
    Msg3: 203,
    Msg4: 204,
    Msg5: 205,
    Msg6: 206,
    Msg7: 207,
    Msg8: 208,
};

var SexType = {
    nan : 1,
    nv : 0
};

var HuaType = {
    pu : 0,
    gui : 1,
};

var SfxType = {
    BtnClick : 301,
    CardClick : 302,
    CardOut : 302,
    DistCard : 304,
    EnterRoom : 305,
    LeftRoom : 306,
    LiuJu : 307,
    Lose : 308,
    Ready : 309,
    Win : 310,
    TimeUp : 311,
};

var sfxlist = {
    301: "res/mp3/sfx/audio_button_click",
    302: "res/mp3/sfx/audio_card_click",
    303: "res/mp3/sfx/audio_card_out",
    304: "res/mp3/sfx/audio_deal_card",
    305: "res/mp3/sfx/audio_enter",
    306: "res/mp3/sfx/audio_left",
    307: "res/mp3/sfx/audio_liuju",
    308: "res/mp3/sfx/audio_lose",
    309: "res/mp3/sfx/audio_ready",
    310: "res/mp3/sfx/audio_win",
    311: "res/mp3/sfx/timeup_alarm",
};

var voice = {
    nan: {
        gui: {
            //YiWan         
            1: ["wan1_1","wan1_1_1","wan1_2","wan1_2_1","wan1_3"],
            //ErWan         
            2: ["wan2_1","wan2_2"],
            //SanWan        
            3: ["wan3_1","wan3_2"],
            //SiWan         
            4: ["wan4_1","wan4_2"],
            //WuWan         
            5: ["wan5_1","wan5_2"],
            //LiuWan        
            6: ["wan6_1"],
            //QiWan         
            7: ["wan7_1","wan7_2"],
            //BaWan         
            8: ["wan8_1","wan8_2"],
            //JiuWan        
            9: ["wan9_1"],
            //YiTiao        
            11: ["suo1_1","suo1_1_1","suo1_2","suo1_2_1","suo1_3"],
            //ErTiao        
            12: ["suo2_1","suo2_2","suo2_2_1","suo2_3"],
            //SanTiao       
            13: ["suo3_1","suo3_1_1","suo3_2","suo3_3"],
            //SiTiao        
            14: ["suo4_1","suo4_2","suo4_3"],
            //WuTiao        
            15: ["suo5_1"],
            //LiuTiao       
            16: ["suo6_1","suo6_2"],
            //QiTiao        
            17: ["suo7_1","suo7_2","suo7_3"],
            //BaTiao        
            18: ["suo8_1","suo8_1_2","suo8_2"],
            //JiuTiao       
            19: ["suo9_1","suo9_2"],
            //YiBing        
            21: ["tong1","tong1_1","tong1_2","tong1_3"],
            //ErBing        
            22: ["tong2","tong2_1","tong2_2","tong2_3"],
            //SanBing       
            23: ["tong3_1","tong3_1_1","tong3_2","tong3_2_1"],
            //SiBing        
            24: ["tong4_1","tong4_2"],
            //WuBing        
            25: ["tong5_1","tong5_2","tong5_3"],
            //LiuBing       
            26: ["tong6_1"],
            //QiBing        
            27: ["tong7_1","tong7_1_1"],
            //BaBing        
            28: ["tong8_1","tong8_1_1","tong8_2"],
            //JiuBing       
            29: ["tong9_1","tong9_2","tong9_2_1"],
            //Peng          
            100: ["peng_1","peng_1_1","peng_2","peng_2_1","peng_3","peng_3_1","peng_4","peng_5","peng_6"],
            //Gang          
            101: ["gang_1","gang_1_1","gang_2","gang_4"],
            //AnGang        
            102: ["gang_1","gang_1_1","gang_2","gang_4"],
            //JiePao        
            103: ["hu_1","hu_2","hu_2_1","hu_3","hu_3_1"],
            //ZiMo          
            104: ["hu_4","hu_4_1","hu_5","hu_6"],
            //Msg1          
            201: ["gui_1"],
            //Msg2          
            202: ["gui_2"],
            //Msg3          
            203: ["gui_3"],
            //Msg4          
            204: ["gui_4"],
            //Msg5          
            205: ["gui_5"],
            //Msg6          
            206: ["gui_6"],
            //Msg7          
            207: ["gui_7"],
            //Msg8          
            208: ["gui_8"]
        },
        pu: {
            //YiWan         
            1: ["wan1_pu"],
            //ErWan         
            2: ["wan2_pu"],
            //SanWan        
            3: ["wan3_pu"],
            //SiWan         
            4: ["wan4_pu"],
            //WuWan         
            5: ["wan5_pu"],
            //LiuWan        
            6: ["wan6_pu"],
            //QiWan         
            7: ["wan7_pu"],
            //BaWan         
            8: ["wan8_pu"],
            //JiuWan        
            9: ["wan9_pu"],
            //YiTiao        
            11: ["suo1_pu"],
            //ErTiao        
            12: ["suo2_pu"],
            //SanTiao       
            13: ["suo3_pu"],
            //SiTiao        
            14: ["suo4_pu"],
            //WuTiao        
            15: ["suo5_pu"],
            //LiuTiao       
            16: ["suo6_pu"],
            //QiTiao        
            17: ["suo7_pu"],
            //BaTiao        
            18: ["suo8_pu"],
            //JiuTiao       
            19: ["suo9_pu"],
            //YiBing        
            21: ["tong1_pu"],
            //ErBing        
            22: ["tong2_pu"],
            //SanBing       
            23: ["tong3_pu"],
            //SiBing        
            24: ["tong4_pu"],
            //WuBing        
            25: ["tong5_pu"],
            //LiuBing       
            26: ["tong6_pu"],
            //QiBing        
            27: ["tong7_pu"],
            //BaBing        
            28: ["tong8_pu"],
            //JiuBing       
            29: ["tong9_pu"],
            //Peng          
            100: ["peng_pu"],
            //Gang          
            101: ["gang_pu"],
            //AnGang        
            102: ["gang_pu"],
            //JiePao        
            103: ["hu_pu_1"],
            //ZiMo          
            104: ["hu_pu_2"],
            //Msg1          
            201: ["pu_1"],
            //Msg2          
            202: ["pu_2"],
            //Msg3          
            203: ["pu_3"],
            //Msg4          
            204: ["pu_4"],
            //Msg5          
            205: ["pu_5"],
            //Msg6          
            206: ["pu_6"],
            //Msg7          
            207: ["pu_7"],
            //Msg8          
            208: ["pu_8"]
        }
    },
    nv: {
        gui: {
            //YiWan         
            1: ["wan1_1","wan1_1_1","wan1_2","wan1_2_1","wan1_3"],
            //ErWan         
            2: ["wan2_1","wan2_2"],
            //SanWan        
            3: ["wan3_1","wan3_2"],
            //SiWan         
            4: ["wan4_1","wan4_2"],
            //WuWan         
            5: ["wan5_1","wan5_2"],
            //LiuWan        
            6: ["wan6_1"],
            //QiWan         
            7: ["wan7_1","wan7_2"],
            //BaWan         
            8: ["wan8_1","wan8_2"],
            //JiuWan        
            9: ["wan9_1"],
            //YiTiao        
            11: ["suo1_1","suo1_1_1","suo1_2","suo1_2_1","suo1_3"],
            //ErTiao        
            12: ["suo2_1","suo2_2","suo2_2_1","suo2_3"],
            //SanTiao       
            13: ["suo3_1","suo3_1_1","suo3_2","suo3_3"],
            //SiTiao        
            14: ["suo4_1","suo4_2","suo4_3"],
            //WuTiao        
            15: ["suo5_1"],
            //LiuTiao       
            16: ["suo6_1","suo6_2"],
            //QiTiao        
            17: ["suo7_1","suo7_2","suo7_3"],
            //BaTiao        
            18: ["suo8_1","suo8_1_2","suo8_2"],
            //JiuTiao       
            19: ["suo9_1","suo9_2"],
            //YiBing        
            21: ["tong1","tong1_1","tong1_2","tong1_3"],
            //ErBing        
            22: ["tong2","tong2_1","tong2_2","tong2_3"],
            //SanBing       
            23: ["tong3_1","tong3_1_1","tong3_2","tong3_2_1"],
            //SiBing        
            24: ["tong4_1","tong4_2"],
            //WuBing        
            25: ["tong5_1","tong5_2","tong5_3"],
            //LiuBing       
            26: ["tong6_1"],
            //QiBing        
            27: ["tong7_1","tong7_1_1"],
            //BaBing        
            28: ["tong8_1","tong8_1_1","tong8_2"],
            //JiuBing       
            29: ["tong9_1","tong9_2","tong9_2_1"],
            //Peng          
            100: ["peng_1","peng_1_1","peng_2","peng_2_1","peng_3","peng_3_1","peng_4","peng_5","peng_6"],
            //Gang          
            101: ["gang_1","gang_1_1","gang_2","gang_4"],
            //AnGang        
            102: ["gang_1","gang_1_1","gang_2","gang_4"],
            //JiePao        
            103: ["hu_1","hu_2","hu_2_1","hu_3","hu_3_1"],
            //ZiMo          
            104: ["hu_4","hu_4_1","hu_5","hu_6"],
            //Msg1          
            201: ["gui_1"],
            //Msg2          
            202: ["gui_2"],
            //Msg3          
            203: ["gui_3"],
            //Msg4          
            204: ["gui_4"],
            //Msg5          
            205: ["gui_5"],
            //Msg6          
            206: ["gui_6"],
            //Msg7          
            207: ["gui_7"],
            //Msg8          
            208: ["gui_8"]
        },
        pu: {
            //YiWan         
            1: ["wan1_pu"],
            //ErWan         
            2: ["wan2_pu"],
            //SanWan        
            3: ["wan3_pu"],
            //SiWan         
            4: ["wan4_pu"],
            //WuWan         
            5: ["wan5_pu"],
            //LiuWan        
            6: ["wan6_pu"],
            //QiWan         
            7: ["wan7_pu"],
            //BaWan         
            8: ["wan8_pu"],
            //JiuWan        
            9: ["wan9_pu"],
            //YiTiao        
            11: ["suo1_pu"],
            //ErTiao        
            12: ["suo2_pu"],
            //SanTiao       
            13: ["suo3_pu"],
            //SiTiao        
            14: ["suo4_pu"],
            //WuTiao        
            15: ["suo5_pu"],
            //LiuTiao       
            16: ["suo6_pu"],
            //QiTiao        
            17: ["suo7_pu"],
            //BaTiao        
            18: ["suo8_pu"],
            //JiuTiao       
            19: ["suo9_pu"],
            //YiBing        
            21: ["tong1_pu"],
            //ErBing        
            22: ["tong2_pu"],
            //SanBing       
            23: ["tong3_pu"],
            //SiBing        
            24: ["tong4_pu"],
            //WuBing        
            25: ["tong5_pu"],
            //LiuBing       
            26: ["tong6_pu"],
            //QiBing        
            27: ["tong7_pu"],
            //BaBing        
            28: ["tong8_pu"],
            //JiuBing       
            29: ["tong9_pu"],
            //Peng          
            100: ["peng_pu"],
            //Gang          
            101: ["gang_pu"],
            //AnGang        
            102: ["gang_pu"],
            //JiePao        
            103: ["hu_pu_1"],
            //ZiMo          
            104: ["hu_pu_2"],
            //Msg1          
            201: ["pu_1"],
            //Msg2          
            202: ["pu_2"],
            //Msg3          
            203: ["pu_3"],
            //Msg4          
            204: ["pu_4"],
            //Msg5          
            205: ["pu_5"],
            //Msg6          
            206: ["pu_6"],
            //Msg7          
            207: ["pu_7"],
            //Msg8          
            208: ["pu_8"]
        }
    }
};