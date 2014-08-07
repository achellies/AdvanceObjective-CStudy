/*

modulesCSSBegin defines the start of the JS file for including the HomepageModules CSS
The contents of var css is added at build time using nmake

*/

var sc_attachModStyles = function()
{
    /*
        **** WARNING! ****
        If you add quotes to the CSS, they must be single quotes or this script will break!
    */
    var css = "#hp_tbar{display:block;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.55)),to(rgba(0,0,0,.55)));background-image:-moz-linear-gradient(rgba(0,0,0,.55) 0%,rgba(0,0,0,.55) 100%);background-image:-ms-linear-gradient(rgba(0,0,0,.55) 0%,rgba(0,0,0,.55) 100%);background-image:-o-linear-gradient(rgba(0,0,0,.55) 0%,rgba(0,0,0,.55) 100%);background-image:linear-gradient(rgba(0,0,0,.55) 0%,rgba(0,0,0,.55) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8C000000',endColorstr='#8C000000');zoom:1}#hp_pgbar{height:62px;overflow:hidden}#hp_pgbar a,#hp_pgbar h3{display:block;overflow:hidden;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#hp_pgbar a{color:#d3d3d3;padding-top:5px;font-size:13px}#hp_pgbar h3{color:#fff;margin:0;padding:0;font-weight:normal;font-size:16px}#hp_pgbar div.msg{height:42px;float:left;padding:10px 0 10px 20px;min-width:195px}#hp_pgbar div.last{min-width:30%;width:30%}#hp_pgbar .ps ul{padding:0;margin:0 0 0 -5px;overflow:hidden;height:22px;width:100%}#hp_pgbar .ps ul a{padding:0 0 0 5px;display:inline}#hp_pgbar .ps li{display:block;float:left;padding:5px 5px 0 0;height:22px;color:#fff;white-space:nowrap;line-height:17px}#hp_pgbar #hp_pgNav{float:left;width:220px;padding:10px 0 10px 30px;height:42px;cursor:pointer;position:relative;text-decoration:none}#hp_pgNav span{color:#d3d3d3;font-size:13px;line-height:26px;height:26px}#hp_pgNav h3{color:#ffa615!important;font-weight:bold!important}#nav_opener,#nav_closer{position:absolute}#nav_opener{left:103px;top:8px}#nav_closer{left:100px;top:38px;cursor:pointer}#nav_clwr{position:absolute;top:0;right:0;cursor:pointer;width:36px;height:36px}#nav_clwr img{border:0}#nav_clr{display:block}#nav_clh{display:none}#nav_rn,#nav_ln{display:block;background-image:url('/s/HomepageNavigation/V2/Arrow.png');background-repeat:no-repeat;position:absolute;cursor:pointer;width:30px;height:58px;bottom:71px;left:0;z-index:2}#nav_ln{background-position:0 0;left:30px}#nav_rn{background-position:-30px 0}#ln_w,#rn_w{display:block;position:absolute;height:200px;bottom:79px;cursor:pointer;z-index:1}#hp_nav{display:none;position:relative;height:0;padding-bottom:40px;overflow:hidden}#nav_bar{padding-top:30px}#nav_bar h3{margin:0;color:#fff;font-weight:normal;font-size:16px;padding-top:8px}#nav_bar .nav_bt{display:inline-block;padding:0 100px 0 30px;vertical-align:top;height:40px;cursor:pointer;font-family:Microsoft YaHei,Arial,Helvetica,Sans-Serif!important}#nav_bar .nav_bb{display:inline-block}#nav_bar .navt{display:inline-block;text-align:center;background-color:#2b2b2b;color:#fff;opacity:.9;margin-right:6px;width:90px;height:40px;line-height:40px;font-size:16px;font-family:Microsoft YaHei,Arial,Helvetica,Sans-Serif!important;vertical-align:middle;cursor:pointer;text-decoration:none}#nav_bar .navt,#nav_bar .nav_bt,#nav_bar .nav_bb{*display:inline}#nav_lb{padding:24px 0 0 0;position:relative}#nav_lb .navb{display:none;position:absolute;height:348px;width:1080px;padding:0 146px 0 146px;cursor:default}#nav_lb li{float:left;cursor:pointer;list-style:none;height:90px;width:210px;margin:4px 4px 0 0}#fadeImage{background-color:#000;opacity:.3;filter:alpha(opacity=30);z-index:1;height:430px;width:2000px;position:absolute;display:none}#nav_lb li div{height:90px;width:210px;background-repeat:no-repeat;border-width:0;border-style:solid;border-color:#777;background-color:#e6e6e6;overflow:hidden;cursor:pointer;cursor:hand}#nav_lb li div:hover{height:86px;width:206px;border-width:2px}#hp_container{min-height:690px;min-width:1080px;_width:expression(document.body.clientWidth<1082?'1080px':document.body.clientWidth>1368?'1366px':'100%');_height:expression(document.body.clientHeight<692?'690px':document.body.clientHeight>770?'768px':'100%')}#nav_lb .recgroup{height:300px;width:210px;margin:4px 0 0 857px;*margin:-184px 0 0 0;background:url('/th?id=OJ.SPPXaKwTdLWogw&w=210&h=278&c=6&rs=1') no-repeat;padding:43px 0 0 15px;position:absolute}#nav_lb .recgroup li{width:95px;_width:90px;height:70px;margin:1px 1px 0 0}#nav_lb .recgroup div{width:95px;height:70px;opacity:.75;filter:alpha(opacity=75);float:left}#nav_lb .recgroup div:hover{opacity:1;filter:alpha(opacity=100);width:95px;height:70px;cursor:pointer;cursor:hand;border:none}#nav_lb #hpnB0{padding-right:0;width:880px}#hpit0 li{float:left}#hpit0 a{text-decoration:none}.climg{background:url('/th?id=OJ.2T5Y5ZYgk5XydQ') -18px 0;overflow:hidden;width:20px;height:20px;float:right;display:none;margin-top:0;opacity:.5;filter:alpha(opacity=50)}.climg:hover{opacity:1;filter:alpha(opacity=100)}#nav_lb .uinput{width:210px;height:90px;color:#333;background-color:#e6e6e6;font:bold 22px Microsoft YaHei,Arial,Helvetica,Sans-Serif;display:none;line-height:90px;text-align:center;margin:0;padding:0;border:0}#personalGroupJson{display:none}@media screen and (min-device-height:700px)and (min-device-width:1000px){#nav_clwr:hover #nav_clr{display:none}#nav_clwr:hover #nav_clh{display:block}}@media screen and (max-device-height:768px){#hp_nav{padding-bottom:35px}#nav_bar{padding-top:25px}#nav_lb{padding:21px 0 0 0}#nav_lb .navb{height:288px}#hp_container{min-height:680px}#ln_w,#rn_w{bottom:67px}#nav_closer{top:25px}#nav_bar h3{padding-top:0}}@media screen and (max-device-width:1024px){#nav_lb .recgroup{margin-left:736px;padding:40px 0 0 5px;background:url('/th?id=OJ.EdwjU6lrmfWXEg') no-repeat;height:208px;width:175px}#nav_lb .recgroup li{width:85px;height:60px}#nav_lb .recgroup div{width:85px;height:60px}#nav_lb .uinput{width:180px;height:80px}#nav_lb .recgroup div:hover{width:85px;height:60px}#nav_bar{padding-top:15px}#nav_bar .nav_bt{display:block;padding:0 100px 0 32px;height:30px}#nav_bar .nav_bb{padding-left:30px}#nav_lb{padding:16px 0 0 0}#nav_lb .navb{height:294px;width:1024px;padding:0 56px 0 56px}#nav_lb li,#nav_lb li div{height:80px;width:180px}#nav_lb li div:hover{height:76px;width:176px}#nav_closer{top:15px}#hp_container{min-height:660px;min-width:962px;_width:expression(document.body.clientWidth<964?'962px':document.body.clientWidth>1368?'1366px':'100%');_height:expression(document.body.clientHeight<662?'660px':document.body.clientHeight>770?'768px':'100%')}#nav_ln{left:2px}#nav_bar h3{padding-top:0}}.hp_pgmnew{color:#ffa615!important;font-weight:bold!important;padding-left:10px!important}";
    sj_ic( css );
};(function (_) {
    var RESIZE = 'resize';
    var UNIT_PX = 'px';
    var LASTITEM_WIDTH = 0.3; // Last item width is specified in %
    var MSBRAND_WITTH = 0;    // MSbrand image width default to 0
    var ITEM_PADDING = 20;
    var ITEM_WIDTH = { max: 390, min: 195 };
    var PGBAR_HEIGHT = 62;
    var ANIMATION_DURATION = 400;

    var elmPgC = null;
    var elmPgbar = null;
    var elmPgi1 = null;
    var elmPgi2 = null;
    var elmPgbrand = null;

    var _pgBarAnim;
    var _showing;

    var init = function () {
        elmPgC = _ge('hp_tbar');    // taskbar and programbar container element
        elmPgbar = _ge('hp_pgbar'); // programbar root element
        elmPgi1 = _ge('hp_pgm0');   // content element 1st item
        elmPgi2 = _ge('hp_pgm1');   // content element 2nd item

        // if there is a msbrand div (enabled in zh-cn and ja-jp), redefine the max-width
        elmPgbrand = _ge('msbtb');
        if (elmPgbrand) {
           ITEM_WIDTH.max = 320;
           MSBRAND_WITTH = 160;
        }
        else {
           elmPgbrand = _ge('hp_pgNav');
           if (elmPgbrand) {
              ITEM_WIDTH.max = 290;
              MSBRAND_WITTH = 280;
            }
        }
        
        
        if (!(elmPgC && elmPgbar)) {
            return;
        }

        // apply the CSS code at the very beginning
        sc_attachModStyles();

        // attach the resize handler function to resize
        resizeHdlr();
        sj_be(_w, RESIZE, resizeHdlr);

        _showing = true;
        _pgBarAnim = _anim.animE(elmPgbar, 'height', 0, PGBAR_HEIGHT, { duration: ANIMATION_DURATION, unit: UNIT_PX });
    };

    var resizeHdlr = function () {
        var cw = elmPgC.offsetWidth;
        var lastItemWidth = LASTITEM_WIDTH * cw;
        // only resize when the container width changes, NOTE: IE7 has a resize event handler issue.
        if (!resizeHdlr.cwidth || cw !== resizeHdlr.cwidth) {
            var sw = (cw >= (ITEM_WIDTH.max * 2 + lastItemWidth + ITEM_PADDING * 3 + MSBRAND_WITTH))          // if the container element's width is enough for the max width
                   ? ITEM_WIDTH.max                                                            // set the max width
                   : Math.max(((cw - lastItemWidth - MSBRAND_WITTH) / 2 - ITEM_PADDING * 2), ITEM_WIDTH.min); // set the min ~ computed out width
            var s1 = (elmPgi1 && elmPgi1.style) || {};
            var s2 = (elmPgi2 && elmPgi2.style) || {};
            s1.width = s2.width = sw + UNIT_PX;
            resizeHdlr.cwidth = cw;
        }
        // Reset IE 7 hasLayout property by change style.zoom value, reference: http://www.satzansatz.de/cssd/onhavinglayout.html
        if ('currentStyle' in elmPgC && 'hasLayout' in elmPgC.currentStyle) {
            var postResize = function () {
                // to update the zoom twice to make sure the hasLayout attribute could be set by IE7
                elmPgC.style.zoom = 'normal';
                elmPgC.style.zoom = '1';
            };
            sb_st(postResize, 1);
        }
    };

    _.show = function (duration, callback) {
        if (!_showing) {
            duration && _pgBarAnim.updateDur(duration);
            _pgBarAnim.start(callback);
            _showing = true;
        }
    };

    _.hide = function (duration, callback) {
        if (_showing) {
            duration && _pgBarAnim.updateDur(duration);
            _pgBarAnim.revert(callback);
            _showing = false;
        }
    };

    _.reset = function () {
        init();
    };

    init();
    
    // Reduce the remaining post load events and fire RBComplete if we have finished all the post load events being tracked. 
    if (_w.g_NPLE && !--_w.g_NPLE) {
        sj_evt.fire("onRBComplete");
    }

})(_w.bhppgb = _w.bhppgb || {});﻿var imageInfoMap = {};
(function (_) {

    // some records
    var nowCategoryIndex = -1;
    var nextCaterogyIndexRecord = 0;
    var categoryImageStatusList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];   
    var isNavbarShowing = false;
    var navIsOpenedBefore = false;
    var userActionOrder = 0;
    var touchStartX;
    var touchEndX;
    var isIeTouchGoing = false;
    var touchStartTime;   
    
    // constant
    var CATEGORY_COUNT = 10;  // 10 categories total;
    var CATEGORYLID_PREFIX = "hpnC";
    var CATEGORYBID_PREFIX = "hpnB";
    var BASEIMAGE_HEIGHT = 90;
    var BASEIMAGE_WIDTH = 210;
    var IMAGE_SIZE = "LARGE";    // this is the subfolder for image, could be set JUST ONCE!;
    var NAVBARMIN_WIDTH = 1080;  // this is the min-width for navbar, could be set JUST ONCE!;
    var CATEGORYMIN_WIDTH = 1060;  // this is the min-height for navbar, could be set JUST ONCE!;
    var NAVBAR_HEIGHT = 378;
    var ANIMATION_DURATION_H = 800;
    var ANIMATION_DURATION_V = 500;
    var storeNumber = 10;

    // objects
    var scrollList;
    var hpImageContainer; // this is used as a fundamental elements and we just want to get the clientWidth from it, so READONLY!;
    var leftArrow;
    var rightArrow;
    var leftArrowWraper;
    var rightArrowWraper;
    var elmPgbar;
    var elmPgnav;
    var elmNavbar;
    var elmNavbarCloseS;
    var elmNavbarCloseB;
    var elmNavbarCloseW;
    var elmNavbarCloseWR;
    var elmNavbarCateSec;
    var backImage;
    var personalGroup;
    
    var navBarAnim;
    var localStore;
    var formatStrings
    
    var bingRobotPromotionLink;
    var isbingRobotPromotionOpened = false;

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (val) {
            var value = this;
            for (var i = 0; i < value.length; i++) {
                if (value[i] == val) return i;
            }
            return -1;
        };
    }

    var init = function () {
        // Check Elements are all valid
        scrollList = _ge("nav_lb");
        hpImageContainer = _ge("hp_container");
        leftArrow = _ge("nav_ln");
        leftArrowWraper = _ge("ln_w");
        rightArrow = _ge("nav_rn");
        rightArrowWraper = _ge("rn_w");
        elmPgbar = _ge('hp_pgbar');          // programbar(with nav) root element
        elmPgnav = _ge('hp_pgNav');          // programbar nav section
        elmNavbar = _ge("hp_nav");           // navigation bar root Element
        elmNavbarCloseS = _ge("nav_cls");    // navigation bar close section
        elmNavbarCloseB = _ge("nav_closer"); // navigation bar close section
        elmNavbarCloseW = _ge("nav_clw");    // navigation bar close wrapper
        elmNavbarCloseWR = _ge("nav_clwr");  // navigation bar close at the right top

        elmNavbarCateSec = _ge("nav_cs");    // category section 
        backImage = _ge("bgDiv");            // back ground Image

        bingRobotPromotionLink = _ge("hp_pgmlink");

        if (!(scrollList && hpImageContainer && elmPgbar && elmPgnav && elmNavbar && elmNavbarCloseS && elmNavbarCloseB && elmNavbarCloseW && elmNavbarCateSec && elmNavbarCloseWR && backImage)) {
            return;
        }

        // set the basic size
        initialConstant();

        personalGroup = new PersonalGroup(IMAGE_SIZE);

        localStore = personalGroup.getLocaolStore();

        formatStrings = personalGroup.getFormatString();

        // Event binding to interactive elements
        bindEvents();

        // Initial Animation
        navBarAnim = _anim.animE(elmNavbar, 'height', 20, NAVBAR_HEIGHT, { duration: ANIMATION_DURATION_V, unit: "px" });

        // Initial Default Blocks
        initialDefaultBlock();

        // Check if open the bar automatically
        initialNavBarStatus();
    }

    var initialDefaultBlock = function () {
        
        nowCategoryIndex = 0;
        setLeftAttribute();
        nowCategoryIndex = -1;

        initialBlocks(0);
    }

    var initialConstant = function () {

        if (_w.screen.width <= 1024) {
            IMAGE_SIZE = "SMALL";
            BASEIMAGE_HEIGHT = 80;
            BASEIMAGE_WIDTH = 180;
            NAVBARMIN_WIDTH = 920;
            CATEGORYMIN_WIDTH = 980;
            NAVBAR_HEIGHT = 358;
        }
        else if (_w.screen.height <= 768) {
            IMAGE_SIZE = "LARGE";
            BASEIMAGE_HEIGHT = 90;
            BASEIMAGE_WIDTH = 210;
            NAVBARMIN_WIDTH = 1080;
            CATEGORYMIN_WIDTH = 1080;
            NAVBAR_HEIGHT = 366;
        }
        else {
            IMAGE_SIZE = "LARGE";
            BASEIMAGE_HEIGHT = 90;
            BASEIMAGE_WIDTH = 210;
            NAVBARMIN_WIDTH = 1080;
            CATEGORYMIN_WIDTH = 1080;
            NAVBAR_HEIGHT = 378;
        }
    }

    // Resize acts like an Initial here for every new client size
    var resize = function (setElement) {
        var element = _ge(CATEGORYBID_PREFIX + nextCaterogyIndexRecord);
        var totalWidth = hpImageContainer.clientWidth - NAVBARMIN_WIDTH;
        if (totalWidth < 0) {
            totalWidth = 0;
        }

        element.style.paddingLeft = totalWidth / 2 + "px";
        element.style.paddingRight = totalWidth / 2 + "px";

        totalWidth = hpImageContainer.clientWidth - CATEGORYMIN_WIDTH;
        if (totalWidth < 0) {
            totalWidth = 0;
        }

        if (IMAGE_SIZE == "SMALL") {
            elmNavbarCateSec.style.paddingLeft = totalWidth / 2 + "px";
        }
        else {
            if (totalWidth > 30) {
                elmNavbarCloseS.style.paddingLeft = "30px";
                var paddingRight = ((totalWidth / 2 -50) > 30) ? (totalWidth / 2 -50) : 30;
                elmNavbarCloseS.style.paddingRight = paddingRight + "px";
                elmNavbarCloseB.style.left = "100px";
            }
            else {
                totalWidth = totalWidth / 3;
                elmNavbarCloseS.style.paddingLeft = totalWidth + "px";
                elmNavbarCloseS.style.paddingRight = totalWidth + 30 + "px";
                elmNavbarCloseB.style.left = totalWidth + 70 + "px";
            }
        }

        if (setElement) {
            setElementPosition();
        }
    }

    var closureWrapper = function (label, index)
    {
        sj_be(label, "click", function (evt) {initialBlocks(index, evt); });
    }

    var bindEvents = function () {
        for (var index = 0; index < CATEGORY_COUNT; index++ ) {
            var label = _ge(CATEGORYLID_PREFIX + index);
            if (label) {
                closureWrapper(label, index);
                sj_be(label, "mouseover", sj_wf(hoverCategoryLabel, label, true));
                sj_be(label, "mouseout", sj_wf(hoverCategoryLabel, label, false));
            }

            var block = _ge(CATEGORYBID_PREFIX + index);
            if (block && index > 0) {
                var imagesList = block.getElementsByTagName("div");
                var imageCount = imagesList.length;

                for (var imageIndex = 0; imageIndex < imageCount; imageIndex++) {
                    var imageBlock = imagesList[imageIndex];
                    var urlName = imageBlock.parentNode.getAttribute("href");
                    var positionX = (-BASEIMAGE_WIDTH) * (imageIndex % 5);
                    imageIndex = imageIndex % 15;
                    var positionY = (-BASEIMAGE_HEIGHT) * ((imageIndex - (imageIndex % 5)) / 5);
                    sj_be(imageBlock, "mouseover", sj_wf(hoverImage, imageBlock, positionX, positionY, -2));
                    sj_be(imageBlock, "mouseout", sj_wf(hoverImage, imageBlock, positionX, positionY, 0));
                    sj_be(imageBlock, "click", sj_wf(personalGroup.writeStorage, imageBlock, urlName));
                }
            }
        }

        if (leftArrow && leftArrowWraper) {
            sj_be(leftArrowWraper, "mouseover", sj_wf(hoverArrow, leftArrow, true));
            sj_be(leftArrowWraper, "mouseout", sj_wf(hoverArrow, leftArrow, false));
            sj_be(leftArrowWraper, "click", function (evt) { initialBlocksMinus(true, evt); });
        }
        if (rightArrow && rightArrowWraper) {
            sj_be(rightArrowWraper, "mouseover", sj_wf(hoverArrow, rightArrow, true));
            sj_be(rightArrowWraper, "mouseout", sj_wf(hoverArrow, rightArrow, false));
            sj_be(rightArrowWraper, "click", function (evt) { initialBlocksAdd(true, evt); });
        }

        if (sb_i8l) {
            var closeButton = _ge("nav_clr");
            var closeButtonHover = _ge("nav_clh");
            sj_be(elmNavbarCloseWR, "mouseover", function () { showHide(closeButton, true); showHide(closeButtonHover, false); });
            sj_be(elmNavbarCloseWR, "mouseout", function () { showHide(closeButtonHover, true); showHide(closeButton, false); });
        }

        // bind other elements
        sj_be(elmPgnav, "click", function (evt) { openNavBar(evt); });
        sj_be(elmNavbarCloseW, "click", function (evt) { closeNavBar(evt); });
        sj_be(elmNavbarCloseWR, "click", function (evt) { closeNavBar(evt); });
        sj_be(backImage, "click", function (evt) { closeNavBar(evt); });
        sj_be(_w, "resize", sj_wf(resize, true));

        if (_w.navigator.msPointerEnabled) {
            // bind touch events for IE
            sj_be(scrollList, "MSPointerDown", msTouchStart);
            sj_be(scrollList, "MSPointerOver", msTouchEnd);
            scrollList.style.msTouchAction = "none";
        }
        else {
            // bind touch events for Non-IE
            sj_be(scrollList, "touchstart", touchStart);
            sj_be(scrollList, "touchend", touchEnd);
            sj_be(scrollList, "touchmove", touchMove);
        }

        if (sb_i6) {
            sj_be(_w, "unload", removeEventBinding);
        }

        var brp = _ge("brp");
        if (bingRobotPromotionLink && bingRobotPromotionLink != null && brp && brp != null) {
            sj_be(bingRobotPromotionLink, "click", function (evt) {
                brp.style.display = isbingRobotPromotionOpened ? "none" : "block";
                isbingRobotPromotionOpened = !isbingRobotPromotionOpened;
                sj_sp(sj_ev(evt));
            });

            sj_be(_d, "click", function () {
                brp.style.display = "none";
                isbingRobotPromotionOpened = false;
            });
        }
    }

    // public animation function for touch
    var touchAction = function () {
        var totalWidth = hpImageContainer.clientWidth;
        var touchStep = touchEndX - touchStartX;
        var touchDuration = Date.now() - touchStartTime;

        // condition to switch category now is speed and distance
        if (touchDuration < 300 || Math.abs(touchStep) > totalWidth / 4) {
            if (touchStep > 0) {
                initialBlocksMinus(false);
            }
            else if (touchStep < 0) {
                initialBlocksAdd(false);
            }
        }
    }

    // IE touch start event handler
    var msTouchStart = function (evt) {
        var e = sj_ev(evt);

        if (e.pointerType == e.MSPOINTER_TYPE_TOUCH) {
            touchStartX = e.pageX;
            touchStartTime = Date.now();
            isIeTouchGoing = true;
        }
    }

    // IE touch end event handler
    var msTouchEnd = function (evt) {
        var e = sj_ev(evt);
        touchEndX = e.pageX;

        if (isIeTouchGoing && e.pointerType == e.MSPOINTER_TYPE_TOUCH && touchEndX != touchStartX) {
            isIeTouchGoing = false;
            touchAction();
        }
    }

    // touch start event handler
    var touchStart = function (evt) {
        var e = sj_ev(evt);
        touchStartX = e.targetTouches[0].pageX;
        touchStartTime = Date.now();
    }

    // touch move event handler
    var touchMove = function (evt) {
        var e = sj_ev(evt);
        if (touchStartX != e.targetTouches[0].pageX) {
            e.preventDefault();
        }
    }

    // touch end event handler
    var touchEnd = function (evt) {
        var e = sj_ev(evt);
        touchEndX = e.changedTouches[0].pageX;
        touchAction();
    }

    var hoverImage = function (imageBlock, positionX, positionY, offsite) {
        if (sb_i6) {
            imageBlock.style.height = BASEIMAGE_HEIGHT + offsite * 2 + "px";
            imageBlock.style.width = BASEIMAGE_WIDTH + offsite * 2 + "px";
            imageBlock.style.borderWidth = -offsite + "px";
        }
        imageBlock.style.backgroundPosition = (positionX + offsite) + "px " + (positionY + offsite) + "px";
    }

    var hoverArrow = function (element, isHover) {
        var newPositionY = isHover ? -58 : 0;
        element.style.backgroundPositionY = newPositionY + "px";
    }

    var hoverCategoryLabel = function (element, isHover) {
        if (element && element != _ge(CATEGORYLID_PREFIX + nowCategoryIndex)) {
            if (isHover) {
                element.style.backgroundColor = "#a0a0a0";
            }
            else {
                element.style.backgroundColor = "#2b2b2b";
            }
        }
    }

    var initialImages = function (categoryIndex) {
        if (categoryIndex < 0 || categoryIndex >= CATEGORY_COUNT) {
            return;
        }
        if (categoryImageStatusList[categoryIndex] == 0 && categoryIndex != 0) {
            var categoryBlock = _ge(CATEGORYBID_PREFIX + categoryIndex);
            var imagesList = categoryBlock.getElementsByTagName("div");
            var imageCount = imagesList.length;
            for (var index = imageCount - 1; index >= 0 ; index--) {
                var imageBlock = imagesList[index];
                var imageSizeUsed = (IMAGE_SIZE == "SMALL") ? ("SmallImageURL") : ("LargeImageURL");
                var imageURL = imageInfoMap[imageBlock.parentNode.href][imageSizeUsed];
                var statusIndex = categoryIndex * 15 + index;
                var imageIndex = imageInfoMap[imageBlock.parentNode.href]["ImageIndex"];
                var positionX = (-BASEIMAGE_WIDTH) * (imageIndex % 5);
                imageIndex = imageIndex % 15;
                var positionY = (-BASEIMAGE_HEIGHT) * ((imageIndex - (imageIndex % 5)) / 5);
                imageBlock.style.backgroundPosition = positionX + "px " + positionY + "px";
                imageBlock.style.backgroundImage = imageURL;
            }
            categoryImageStatusList[categoryIndex] = 1;
        }
    }

    var initialBlocksMinus = function (arrowClicked, evt) {
        var nextCate = nowCategoryIndex - 1;
        if (!arrowClicked) {
            clienActionLog("Left_Touch", nextCate);
        }
        // enable loop arrow
        var isLoop = false;
        if (nextCate == -1) {
            var totalWidth = hpImageContainer.clientWidth;
            nextCate = CATEGORY_COUNT - 1;
            var loopElement = _ge(CATEGORYBID_PREFIX + nextCate);
            loopElement.style.left = -totalWidth + "px";
            isLoop = true;
        }
        initialBlocks(nextCate, evt, isLoop);
    }

    var initialBlocksAdd = function (arrowClicked, evt) {
        var nextCate = nowCategoryIndex + 1;
        if (!arrowClicked) {
            clienActionLog("Right_Touch", nextCate);
        }
        // enable loop arrow
        var isLoop = false;
        if (nextCate == CATEGORY_COUNT) {
            var totalWidth = hpImageContainer.clientWidth;
            nextCate = 0;
            var loopElement = _ge(CATEGORYBID_PREFIX + nextCate);
            loopElement.style.left = totalWidth + "px";
            isLoop = true;
        }
        initialBlocks(nextCate, evt, isLoop);
    }

    var initialBlocks = function (nextCategoryIndex, evt, isLoop) {

        var nowCategoryLabel, nextCategoryLabel, nowCategoryBlock, nextCategoryBlock;

        // Check whether a valid category
        if ((nextCategoryIndex == nowCategoryIndex) || (nextCategoryIndex >= CATEGORY_COUNT) || (nextCategoryIndex < 0)) {
            evt && sj_pd(evt);
            return;
        }

        nextCategoryLabel = _ge(CATEGORYLID_PREFIX + nextCategoryIndex);
        nextCategoryBlock = _ge(CATEGORYBID_PREFIX + nextCategoryIndex);

        if (!(nextCategoryLabel && nextCategoryBlock)) {
            return;
        }

        nextCaterogyIndexRecord = nextCategoryIndex;
        resize(false);

        if (nowCategoryIndex != -1) {

            nowCategoryLabel = _ge(CATEGORYLID_PREFIX + nowCategoryIndex);
            nowCategoryBlock = _ge(CATEGORYBID_PREFIX + nowCategoryIndex);
            if (!(nowCategoryLabel && nowCategoryBlock)) {
                return;
            }

            nowCategoryLabel.style.backgroundColor = "#2b2b2b";
            nowCategoryLabel.style.opacity = "0.9";
            nowCategoryLabel.style.color = "#fff";
        }
        nextCategoryLabel.style.backgroundColor = "#ff8c00";
        nextCategoryLabel.style.color = "#000";
        nextCategoryLabel.style.opacity = "1.0";
        nextCategoryBlock.style.display = "block";

        // bind the div with background image src
        initialImages(nextCategoryIndex);

        if (nowCategoryIndex != -1) {

            var totalWidth = hpImageContainer.clientWidth;
            var direction = (nextCategoryIndex > nowCategoryIndex) ? 1 : -1;
            // loop Arrow
            if (isLoop) {
                if (nextCategoryIndex == 0 && nowCategoryIndex == CATEGORY_COUNT - 1) {
                    direction = 1;
                }
                else if (nextCategoryIndex == CATEGORY_COUNT - 1 && nowCategoryIndex == 0) {
                    direction = -1;
                }
            }

            var originalLeft = (direction * totalWidth);
            nowCategoryIndex = nextCategoryIndex;

            // Animation
            var nowBlockAnimation = _anim.animE(nowCategoryBlock, 'left', 0, (-direction * totalWidth), { duration: ANIMATION_DURATION_H, unit: "px" });
            nowBlockAnimation.start();
            var nextBlockAnimation = _anim.animE(nextCategoryBlock, 'left', originalLeft, 0, { duration: ANIMATION_DURATION_H, unit: "px" });
            nextBlockAnimation.start(setLeftAttribute);
        }
        else {
            nowCategoryIndex = nextCategoryIndex;
        }

        // Reset some Elements
        setElementPosition();

        evt && sj_pd(evt);
    }

    var setLeftAttribute = function () {
        // Post handling
        var totalWidth = hpImageContainer.clientWidth;
        for (var index = 0; index < nowCategoryIndex; index++) {
            var preBlock = _ge(CATEGORYBID_PREFIX + index);
            if (preBlock) {
                preBlock.style.left = -totalWidth + "px";
                preBlock.style.display = "none";
            }
        }
        for (var index = nowCategoryIndex + 1; index < CATEGORY_COUNT; index++) {
            var afterBlock = _ge(CATEGORYBID_PREFIX + index);
            if (afterBlock) {
                afterBlock.style.left = totalWidth + "px";
                afterBlock.style.display = "none";
            }
        }

        var nowBlock = _ge(CATEGORYBID_PREFIX + nowCategoryIndex);
        nowBlock.style.left = "0px";
        nowBlock.style.display = "block";

        //bind the images in left block
        initialImages(nowCategoryIndex - 1);
        initialImages(nowCategoryIndex + 1);
    }

    var setElementPosition = function () {

        var paddingWidth = (hpImageContainer.clientWidth - NAVBARMIN_WIDTH) / 2;
        var ArrowPadding = (IMAGE_SIZE == "SMALL") ? 2 : 30;
        var MaxWraperWidth = ArrowPadding * 2 + 30;
        var wrapperWidth = (paddingWidth > MaxWraperWidth) ? MaxWraperWidth : paddingWidth;

        if (!(leftArrow && leftArrowWraper && rightArrow && rightArrowWraper)) {
            return;
        }

        if (paddingWidth < ArrowPadding + 30) {
            leftArrowWraper.style.display = "none";
            leftArrow.style.display = "none";
            rightArrowWraper.style.display = "none";
            rightArrow.style.display = "none";
            return;
        }
        else {
            leftArrowWraper.style.display = "block";
            leftArrow.style.display = "block";
            rightArrowWraper.style.display = "block";
            rightArrow.style.display = "block";
        }

        // LeftArrow position
        leftArrowWraper.style.width = wrapperWidth + "px";

        // rightArrow position
        rightArrow.style.left = wrapperWidth - 30 - ArrowPadding + "px";
        rightArrowWraper.style.left = hpImageContainer.clientWidth - wrapperWidth + "px";
        rightArrowWraper.style.width = wrapperWidth + "px";
    }

    var openNavBar = function (evt) {
        if (!isNavbarShowing) {
            personalGroup.initPersonalGroup();
            showHide(elmNavbarCloseWR, false);
            showHide(elmPgbar, true);
            showHide(elmNavbar, false);
            navBarAnim.start(setElementPosition);
            handleHotSpot(true);
            isNavbarShowing = true;
            if (sj_cook.get("SRCHHPGUSR", "NAV") != 1) {
                sj_cook.set("SRCHHPGUSR", "NAV", "1", 1, "/");
            }
            clienActionLog("NavOpen");
        }
        evt && sj_pd(evt);
    }

    var closeNavBar = function (evt) {
        if (isNavbarShowing) {
            showHide(elmNavbarCloseWR, true);
            navBarAnim.revert(function () { showHide(elmNavbar, true); showHide(elmPgbar, false); });
            handleHotSpot(false);
            isNavbarShowing = false;
            if (sj_cook.get("SRCHHPGUSR", "NAV") != 0) {
                sj_cook.set("SRCHHPGUSR", "NAV", "0", 1, "/");
            }
            clienActionLog("NavClose");
        }
        evt && sj_pd(evt);
    }

    var clienActionLog = function (logDescrip, cateGoryIndex) {
        var LogString = userActionOrder + "_" + logDescrip;
        if (cateGoryIndex != null) {
            LogString += "_" + cateGoryIndex;
        }
        Log.Log("Click", "HPNAV2", LogString, false);
        userActionOrder++;
    }

    var showHide = function (elem, hide) {
        elem && elem.style && (elem.style.display = (hide ? 'none' : 'block'));
    }

    var handleHotSpot = function (hide) {
        var hotSpotList = [_ge("sc_hst1"), _ge("sc_hst2"), _ge("sc_hst3"), _ge("sc_hst4")];
        for (var index = 0; index < 4; index++) {
            if (hotSpotList[index]) {
                showHide(hotSpotList[index], hide);
            }
        }
    }

    // Determine if open Nav Bar by default;
    var initialNavBarStatus = function () {
        if (IsDefaultOpenNavBar()) {
            openNavBar();
            setElementPosition();
        }
    }

    var GetQueryStringParam = function (queryString, parameterName) {
        var re = new RegExp(("[\?&]{1}" + parameterName) + "=([^&]+)");
        var match = queryString.match(re);
        return match ? match[1] : null;
    }

    var IsDefaultOpenNavBar = function () {
        return (sj_cook.get("SRCHHPGUSR", "NAV") == 1);
    }

    var removeEventBinding = function () {
        // unbind category labels
        for (var index = 0; index <= CATEGORY_COUNT; index++) {
            var categorylabel = _ge(CATEGORYLID_PREFIX + index);
            if (categorylabel) {
                sj_ue(categorylabel, "click", initialBlocks);
                sj_ue(categorylabel, "mouseover", hoverCategoryLabel);
                sj_ue(categorylabel, "mouseout", hoverCategoryLabel);
            }
        }

        // unbind left arrow and right arrow
        if (leftArrow) {
            sj_ue(leftArrow, "mouseover", hoverArrow);
            sj_ue(leftArrow, "mouseout", hoverArrow);
            sj_ue(leftArrow, "click", initialBlocksMinus);
        }
        if (rightArrow) {
            sj_ue(rightArrow, "mouseover", hoverArrow);
            sj_ue(rightArrow, "mouseout", hoverArrow);
            sj_ue(rightArrow, "click", initialBlocksAdd);
        }

        // unbind other elements
        sj_ue(elmPgnav, "click", openNavBar);
        sj_ue(elmNavbarCloseW, "click", closeNavBar);
        sj_ue(elmNavbarCloseWR, "click", closeNavBar);
        sj_ue(backImage, "click", closeNavBar);
        sj_ue(_w, "resize", resize);
    }

    // Public functions for FullScreen
    _.hide = function () {
        if (isNavbarShowing) {
            navBarAnim.revert(sj_wf(showHide, elmNavbar, true));
        }

        navIsOpenedBefore = isNavbarShowing; // record the status before fullscreen action; 
        isNavbarShowing = false;
    }

    _.show = function () {
        if (navIsOpenedBefore) {
            openNavBar();
        }

        isNavbarShowing = navIsOpenedBefore; // record the status before fullscreen action;
    }

    _.initial = function () {
        init();
    }

})(_w.bhpnav = _w.bhpnav || {});

var initialAjaxNavigationBar = (function () {
    var elmPgbar = _ge('hp_pgbar');          // programbar(with nav) root element
    var elmNavbar = _ge("hp_nav");           // navigation bar root Element
    var elmTaskbar = _ge("hp_tbar");
    var elmJsonWrap = _ge("personalGroupJson");

    if (!elmPgbar || !elmNavbar || !_w.bhpnav || !elmTaskbar || !elmJsonWrap) {
        return;
    }
    elmTaskbar.appendChild(elmPgbar);
    elmTaskbar.appendChild(elmNavbar);
    var jsonSoruce = elmJsonWrap.innerText ? elmJsonWrap.innerText : elmJsonWrap.textContent;
    if (jsonSoruce != null && JSON && JSON.parse) {
        imageInfoMap = JSON.parse(jsonSoruce);
        elmJsonWrap.style.display = "none";
    }
    
    _w.bhppgb && _w.bhppgb.reset();
    pgSiteSearch && pgSiteSearch.init();
    _w.bhpnav && _w.bhpnav.initial();
});

var hpNavigationRequest = (function () {
    // attach CSS
    !!sc_attachModStyles && sc_attachModStyles();
    var request = sj_gx();
    var urlParams = hp_pushparams([]);
    var appendCssToHead = function (css) {
        var headElement = _d.head || _d.getElementsByTagName("head")[0];

        for (var i = 0, l = css.length; i < l; i++) {
            var styleElement = sj_ce("style");
            styleElement.setAttribute("type", "text/css");

            if (styleElement.textContent !== undefined) {
                styleElement.textContent = css[i];
            }
            else {
                styleElement.styleSheet.cssText = css[i];
            }

            headElement.appendChild(styleElement);
        }
    };

    // Instrumetation values - insertion point
    _w._navIID && urlParams.push("IID=" + _navIID);
    // Add additional parameters to the URL
    _G && _G.IG && urlParams.push("IG=" + _G.IG);

    var requestUrl = "/NavigationBar?" + urlParams.join("&");
    request.open("GET", requestUrl, true);
    request.onreadystatechange = function () {
        if (4 == request.readyState) {
            if (200 == request.status && request.responseText) {
                var response = sj_ce("div");
                sj_b.appendChild(response);
                response.style.display = "none";
         
                var css = [];

                var text = request.responseText.replace(/<style\s+[^>]+>([\s\S]+)<\/style>/g,
                    function (m, cssContent) {
                        css.push(cssContent);
                        return '';
                    });

                // Append CSS to the <head> tag
                appendCssToHead(css);
                response.innerHTML = text;
                // initialize Navigation Bar
                initialAjaxNavigationBar();
                // Reduce the remaining post load events and fire RBComplete if we have finished all the post load events being tracked. 
                if (_w.g_NPLE && !--_w.g_NPLE) {
                    sj_evt.fire("onRBComplete");
                }
            }
            try { request.onreadystatechange = null; } catch (e) { }
        }
    };
    request.send(null);
});

sj_evt.bind("onBgSet", hpNavigationRequest, 1);