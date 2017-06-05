var sound_ex_name = ".mp3";
var sound_ex_name1 = ".ogg";
var jsAudioManager = {
    createNew: function () {
        var _instance = {};
        var _audioID = jsb.AudioEngine.INVALID_AUDIO_ID;
        var _duration = jsb.AudioEngine.TIME_UNKNOWN;
        var _MusicVolume = 1;
        var _SoundVolume = 1;
        var _timeRatio = 0;
        var _sex = SexType.nan;

        var sfx = g_ConfigManager.SoundVolume
        var sound = g_ConfigManager.MusicVolume;

        _SoundVolume = parseFloat(sfx) / 100;
        _MusicVolume = parseFloat(sound) / 100;

        _instance.playerMusic = function () {
            if (_audioID === jsb.AudioEngine.INVALID_AUDIO_ID) {
                var volume = _MusicVolume;
                if (g_ConfigManager.MusicOn == false)
                    volume = 0;

                _audioID = jsb.AudioEngine.play2d("res/mp3/background.mp3", true, volume);
                if (_audioID == jsb.AudioEngine.INVALID_AUDIO_ID) {
                    _audioID = jsb.AudioEngine.play2d("res/mp3/background.ogg", true, volume);
                }

                if (_audioID !== jsb.AudioEngine.INVALID_AUDIO_ID) {
                    jsb.AudioEngine.setFinishCallback(_audioID, function (id, filePath) {
                        _audioID = jsb.AudioEngine.INVALID_AUDIO_ID;
                        _timeRatio = 0;
                    });
                }
            }
        };

        _instance.playerEffect = function (index) {
            //jsb.AudioEngine.play2d("background.mp3", false, _sfx_valume);
            var volume = _SoundVolume;
            if (g_ConfigManager.SoundOn == false)
                volume = 0;
            var file = sfxlist[index];
            var file1 = file;
            file += sound_ex_name;
            file1 += sound_ex_name1;
            if ( jsb.AudioEngine.play2d(file, false, volume) == jsb.AudioEngine.INVALID_AUDIO_ID )
            {
                jsb.AudioEngine.play2d(file1, false, volume);
            }
        };

        _instance.playOwnerVoice = function (index) {
            var sex = SexType.nv;
            _instance.playVoice(this._sex, index);
        };

        _instance.playVoice = function (sex, index) {
            var volume = _SoundVolume;
            if (g_ConfigManager.SoundOn == false)
                volume = 0;
            var t;
            var path = "res/mp3/";
            if (sex == SexType.nan) {
                t = voice.nan;
                path += "man/";
            }
            else {
                t = voice.nv;
                path += "woman/";
            }
            var h;
            if (g_ConfigManager.LanguageType == LanguageTypeDef.GuiYang) {
                h = t.gui;
                path += "gui/";
            }
            else {
                h = t.pu;
                path += "pu/";
            }
            var i = h[index];
            if (typeof i == "undefined" || i == null || i.length == 0)
                return;
            var r = parseInt(Math.random() * i.length)
            path += i[r];
            var path1 = path;
            path += sound_ex_name;
            path1 += sound_ex_name1;
            cc.log(path);
            cc.log(String(_SoundVolume));
            if (jsb.AudioEngine.play2d(path, false, volume) == jsb.AudioEngine.INVALID_AUDIO_ID)
            {
                jsb.AudioEngine.play2d(path1, false, volume);
            }
        };

        _instance.setVolumn = function (volumn) {
            _MusicVolume = volumn;
            if (_audioID !== jsb.AudioEngine.INVALID_AUDIO_ID) {
                jsb.AudioEngine.setVolume(_audioID, _MusicVolume);
            }
        };

        _instance.setSfxVolumn = function (volumn) {
            _SoundVolume = volumn;
        };


        return _instance;
    }
};

