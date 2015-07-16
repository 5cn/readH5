/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-06-01 16:14:58
*/
;(function(root,factory){
    //require coffee.js 
    //require vender/touch.js
    var $=window.$;
    factory.call(root,$);    
}(this,function($){
    'use strict'
    var service={
        audioPlay:audioPlay,
        audioPause:audioPause,
        init:init
    };
    var audio=new Audio();
    var played=true;
    function init(url){
        if(!url)return;//根据数据判断是否加载
        var optsAudio={
            loop: true,
            preload: "auto",
            src: url
        };
        for(var i in optsAudio){
            if(optsAudio.hasOwnProperty(i)&&(i in audio)){
                audio[i]=optsAudio[i];
            }
        }
        window.audio=audio;
        audio.load();
        var html='<section class="u-audio">'+
                    '<p id="coffee_flow" class="btn_audio"><strong class="txt_audio z-hide">关闭</strong><span class="css_sprite01 audio_open"></span></p>'+
                '</section>';
        $(html).prependTo($('body'));
        $('#coffee_flow').coffee({
            steams              : ["<img src='http://www5.5.cn/Public/newimages/audio_widget_01@2x.png' />","<img src='http://www5.5.cn/Public/newimages/audio_widget_01@2x.png' />"], 
            steamHeight         : 100,
            steamWidth          : 44 
        });

        service.audioPlay();
        $('.u-audio').on('tap',function(){
            played=!played;
            if(played){
                service.audioPlay();
            }else{
                service.audioPause();
            }
        });
    }
    function audioPlay(){
        audio.play();
        $.fn.coffee.start();
        $('.coffee-steam-box').show(500);
    }
    function audioPause(){
        audio.pause();
        $.fn.coffee.stop();
        $('.coffee-steam-box').hide(500);
    }
    return service;
}));