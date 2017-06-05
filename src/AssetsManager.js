var __failCount = 0;
var SDKInited = false;
var AssetsManagerLoaderScene = cc.Scene.extend({
    _am: null,
    _progress: null,
    _text: null,
    _percent: 0,
    _percentByFile: 0,
    run: function () {
        if (!cc.sys.isNative) {
            this.loadGame();
            return;
        }

        var uiNode = ccs.load("res/update_dialog.json");
        this.addChild(uiNode.node, 1);
        var rootNode = uiNode.node.getChildByName("root");
        this._progress = rootNode.getChildByName("progress_bar");
        this._progress.setPercent(0);
        this._text = rootNode.getChildByName("text");
        //var layer = new cc.Layer();
        //this.addChild(layer);
        //this._progress = new cc.LabelTTF.create("0%", "Arial", 12);
        //this._progress.x = cc.winSize.width / 2;
        //this._progress.y = cc.winSize.height / 2 + 50;
        //layer.addChild(this._progress);

        // android: /data/data/com.huanle.magic/files/
        var storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "./") + "upgrade/";

        this._am = new jsb.AssetsManager("res/project.manifest", storagePath);
        jsb.fileUtils.addSearchPath(storagePath, true);
        this._am.retain();

        if (!this._am.getLocalManifest().isLoaded()) {
            cc.log("Fail to update assets, step skipped.");
            this.loadGame();
        }
        else {
            var that = this;
            var now = Date.now() / 1000;
            var has_update = false;
            that._text.setString("正在检查更新...");
            var listener = new jsb.EventListenerAssetsManager(this._am, function (event) {
                switch (event.getEventCode()) {
                    case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                        cc.log("No local manifest file found, skip assets update.");
                        that.loadGame();
                        break;
                    case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                        that._percent = event.getPercent();
                        that._percentByFile = event.getPercentByFile();
                        that._text.setString("努力加载中(" + that._percent.toFixed(2) + "%)...");
                        cc.log(that._percent + " _percent");
                        cc.log(that._percentByFile + " _percentByFile");
                        that._progress.setPercent(that._percent);
                        var msg = event.getMessage();
                        if (msg) {
                            cc.log(msg);
                            has_update = true;
                        }
                        
                        break;
                    case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                    case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                        cc.log("Fail to download manifest file, update skipped.");
                        that.loadGame();
                        break;
                    case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    case jsb.EventAssetsManager.UPDATE_FINISHED:
                        cc.log("Update finished.");
                        if (!has_update) {
                            that._text.setString("检查完成");
                            that.loadGame();
                        }
                        else {
                            that._text.setString("正在更新");
                            var time_diff = 3 - Date.now() / 1000 + now;
                            cc.log("time_diff=" + time_diff)
                            if (time_diff < 0)
                                time_diff = 0;
                            that.runAction(cc.Sequence.create
                                (
                                cc.DelayTime.create(time_diff),
                                cc.CallFunc.create(function () {
                                    that.loadGame();
                                }
                                )
                                )
                            );
                            if (time_diff > 0) {
                                var f = 100 / time_diff * (1 / 30);
                                var c = 0;
                                that._progress.schedule(function () {
                                    c += f;
                                    that._progress.setPercent(c);
                                }, 1 / 30.0);
                            }
                            else
                                that._progress.setPercent(100);
                        }
                        
                        break;
                    case jsb.EventAssetsManager.UPDATE_FAILED:
                        cc.log("Update failed. " + event.getMessage());

                        __failCount++;
                        if (__failCount < 5) {
                            that._am.downloadFailedAssets();
                        }
                        else {
                            cc.log("Reach maximum fail count, exit update process");
                            __failCount = 0;
                            that._text.setString("更新失败：" + event.getMessage);
                            //that.loadGame();
                        }
                        break;
                    case jsb.EventAssetsManager.ERROR_UPDATING:
                        cc.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
                        that._text.setString("更新失败：" + event.getMessage);
                        //that.loadGame();
                        break;
                    case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                        cc.log(event.getMessage());
                        that._text.setString("解压缩失败");
                        //that.loadGame();
                        break;
                    default:
                        break;
                }
            });

            cc.eventManager.addListener(listener, 1);
            this.update();
            cc.director.runScene(this);
        }


    },
    loadGame: function () {
        if (cc.sys.os != cc.sys.OS_IOS) {
            cc.loader.loadJs(["src/files.js"], function (err) {
                cc.loader.loadJs(jsFiles, function (err) {
                    cc.log(test_text);
                    cc.director.runScene(new RootScene());
                });
            });
        }
        else {
            this.schedule(this.updateProgress, 1 / 30.0);
        }
    },
    updateProgress: function (dt) {

        if (cc.sys.os == cc.sys.OS_IOS && IosRegister.GetInitedSetting() == 1 && !SDKInited) {
            cc.loader.loadJs(["src/files.js"], function (err) {
                cc.loader.loadJs(jsFiles, function (err) {
                    cc.log(test_text);
                    cc.director.runScene(new RootScene());
                });
            });
            SDKInited = true;

        }
        else {
            if (!SDKInited) {
                return;
            }
        }

    },
    onExit: function () {
        cc.log("AssetsManager::onExit");

        this._am.release();
        this._super();
    },
    update: function () {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            if (jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "isNetworkAvailable", "()Z")) {
                this._am.update();
                return;
            }
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            var ret = jsb.reflection.callStaticMethod("AppController", "isNetworkAvailable");
            if (ret) {
                this._am.update();
                return;
            }
        }
        else {
            this._am.update();
            return;
        }
        this.showTryAgainDialog();
    },
    showMessageBox: function (msg, title, buttonType, okTitle, cancelTitle, callback, tag) {
        var layer = new CommonDialogLayer();
        layer.m_LabelTitle.setString(title);
        layer.m_LabelMessage.setString(msg);
        if (buttonType != "undefined" && buttonType != null)
            layer.setButtonType(buttonType);
        if (okTitle != "undefined" && okTitle != null)
            layer.setOkTitle(okTitle);
        if (cancelTitle != "undefined" && cancelTitle != null)
            layer.setCancelTitle(cancelTitle);
        if (callback != "undefined" && callback != null)
            layer.setCallback(callback, tag);

        this.addChild(layer, 10000);
    },

    showTryAgainDialog: function () {
        var that = this;
        var callback = {
            commonDialogCallback: function (buttonType, tag) {
                if (buttonType == CommonButtonTypeDef.OK) {
                    that.update();
                }
            }
        };
        this.showMessageBox("请确保您已经连接到网络", "错误", CommonButtonTypeDef.OK, "重试", null, callback);
    }
});
