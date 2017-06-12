/**
 * A brief explanation for "project.json":
 * Here is the content of project.json file, this is the global configuration for your game, you can modify it to customize some behavior.
 * The detail of each field is under it.
 {
    "project_type": "javascript",
    // "project_type" indicate the program language of your project, you can ignore this field

    "debugMode"     : 1,
    // "debugMode" possible values :
    //      0 - No message will be printed.
    //      1 - cc.error, cc.assert, cc.warn, cc.log will print in console.
    //      2 - cc.error, cc.assert, cc.warn will print in console.
    //      3 - cc.error, cc.assert will print in console.
    //      4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.
    //      5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.
    //      6 - cc.error, cc.assert will print on canvas, available only on web.

    "showFPS"       : true,
    // Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.

    "frameRate"     : 60,
    // "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.

    "noCache"       : false,
    // "noCache" set whether your resources will be loaded with a timestamp suffix in the url.
    // In this way, your resources will be force updated even if the browser holds a cache of it.
    // It's very useful for mobile browser debugging.

    "id"            : "gameCanvas",
    // "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.

    "renderMode"    : 0,
    // "renderMode" sets the renderer type, only useful on web :
    //      0 - Automatically chosen by engine
    //      1 - Forced to use canvas renderer
    //      2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers

    "engineDir"     : "frameworks/cocos2d-html5/",
    // In debug mode, if you use the whole engine to develop your game, you should specify its relative path with "engineDir",
    // but if you are using a single engine file, you can ignore it.

    "modules"       : ["cocos2d"],
    // "modules" defines which modules you will need in your game, it's useful only on web,
    // using this can greatly reduce your game's resource size, and the cocos console tool can package your game with only the modules you set.
    // For details about modules definitions, you can refer to "../../frameworks/cocos2d-html5/modulesConfig.json".

    "jsList"        : [
    ]
    // "jsList" sets the list of js files in your game.
 }`
 *
 */
cc.game.onStart = function(){
    var sys = cc.sys;
    if(!sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    //cc.view.enableRetina(sys.os === sys.OS_IOS ? true : false);
    cc.view.enableRetina(true);
    // Disable auto full screen on baidu and wechat, you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ
    if (sys.isMobile && 
        sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
        sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
        cc.view.enableAutoFullScreen(true);
    }

    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

    // Setup the resolution policy and design resolution size
	// 1330, 950
	cc.view.setFrameSize(667,375);
    cc.view.setDesignResolutionSize(1330, 1001, cc.ResolutionPolicy.EXACT_FIT);
    // The game will be resized when browser size change
    //cc.view.resizeWithBrowserSize(true);
	//var scene = new GovNtfDialogLayer();
	//cc.director.runScene(scene);
	//here add web access  picard
	var GetReplayScript = document.createElement("script");
	GetReplayScript.type = "text/javascript";
    //GetReplayScript.src = "http://bloodycoder.red:8000/majong/";
	GetReplayScript.src = "http://bloodycoder.red/myMajongHtml/pig.js";
	replayId ="2454";
	window.alert("现在为您播放"+replayId);
	//GetReplayScript.src = "http://123.206.135.171/zzmj/php/replaydata.php?id="+replayId;
	document.getElementsByTagName("HEAD")[0].appendChild(GetReplayScript);
	var auto_run_game = function(){
		jsReplayServer.getShareInstance().onLogicUpdate(1000);
		setTimeout(auto_run_game,1000);
	}
    cc.LoaderScene.preload(g_resources, function () {
		//write code to get the myData;
		myData = window.replayData;		
        jsReplayServer.getShareInstance().LoadReplayData(myData,"as");
		jsReplayServer.getShareInstance().Play();
		auto_run_game();
		
	//gameScene = new GameRoomPlaybackLayer();
    //cc.director.runScene(gameScene);
    }, this);
    //load resources
};
cc.game.run();