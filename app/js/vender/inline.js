var ldzx = ldzx || {
    userId: null
};
(function(e, n) {
    var t = e.documentElement,
        i = "orientationchange" in window ? "orientationchange" : "resize",
        d = function() {
            var e = t.clientWidth;
            if (!e) return;
            t.style.fontSize = 20 * (e / 320) + "px"
        };
    if (!e.addEventListener) return;
    n.addEventListener(i, d, false);
    e.addEventListener("DOMContentLoaded", d, false)
})(document, window);
var mengvalue = -1;
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 640;

var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
    var version = parseFloat(RegExp.$1);
    if (version > 2.3) {
        document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
    } else {
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
ldzx.ctrl={
    _prevent:function(e){
        e.preventDefault();
    },
    stop:function(){
        $(window).on('touchmove.scroll',ldzx.ctrl._prevent);
        $(window).on('scroll.scroll',ldzx.ctrl._prevent);
    },
    start:function(){
        $(window).off('touchmove.scroll',ldzx.ctrl._prevent);
        $(window).off('scroll.scroll',ldzx.ctrl._prevent);
    }
};