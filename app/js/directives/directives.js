;(function(root,factory){
    var angular=window.angular;
    var $=window.$;
    var _=window._;
    factory.call(root,angular,$,_);
}(this,function(angular,$,_){
    'use strict';
    //dev branch
    //featureA
    //whx update
    //fuwei update;
    angular.module('appDirectives',[]).
        directive('dragXDirective',dragXDirective).
        directive('cropperDirective',cropperDirective).
        directive('dragSetDirective',dragSetDirective).
        directive('commonDirective',commonDirective).
        directive('lotteryDirective',lotteryDirective).
        directive('cutDirective',cutDirective).
        directive('cut2Directive',cut2Directive).
        directive('styleReinitDirective',styleReinitDirective).
        directive('musicDirective',musicDirective).
        directive('btn',btn).
        directive('myScroll',myScroll).
        directive('btnDragDirective',btnDragDirective).
        directive('setmusicDirective',setmusicDirective);
    //公用指令
    function commonDirective(){
        return {
            restrict:'A',
            controller:function($scope,$element,$transclude,lotteryProvider,flipProvider,magasProvider,findActiveProvider,tapProvider){
                $scope.Lottery=lotteryProvider;
                $scope.Flip=flipProvider;
                $scope.magasProvider=magasProvider;
                $scope.findActive=findActiveProvider;
                $scope.tapProvider=tapProvider;
            }   
        }
    }


    function styleReinitDirective(){
        return {
            restrict:'A'
        }
    }
    //翻页特效
    function cut2Directive(){
        return{
            require:'^commonDirective',
            restrict:'A',
            controller:function($scope,magasProvider,findActiveProvider){
                $scope.findActive=findActiveProvider;
                $scope.newMaga=magasProvider.getNewMaga();
            },
            link:function(scope,element,attrs){
                var stage = $(element[0]),
                    findActive=scope.findActive,
                    newMaga=scope.newMaga,
                    isPreview=stage.hasClass('preview'),
                    pages=stage.find('.page'),
                    maga=scope.magasProvider.getNewMaga(),
                    viewHeight = 960,
                    step = 1/4,
                    nowIndex = 0,
                    nextorprevIndex = 0,
                    page,
                    delta=0,
                    isMove=false,
                    startY,
                    scale,
                    timeStart=0,
                    long_floatage,
                    bBtn = true;
                    stage.css('height',viewHeight);

                stage.on('touchstart',function(){
                    page = stage.find(".page");
                    // console.log(page);
                });
                _.delay(function(){
                    stage.on("touchstart",'.page',function(ev){
                        if(ev.target.tagName==='CANVAS'){return;}
                        long_floatage = stage.find(".s_floatage")
                        page = stage.find(".page");
                        timeStart=Date.now();
                        startY=ev.changedTouches[0].pageY;
                        if(bBtn)
                        {
                            bBtn = false;
                            long_floatage.on("longTap",showCropperLayer)  //绑定长按事件
                            nowIndex = $(this).index();
                            page.on("touchmove.move",touchsmove)
                            page.on("touchend.move",touchsend) 
                        }
                        nowIndex=stage.find('.current').index();
                    });
                    stage.on('transitionEnd webkitTransitionEnd','.page',function(ev){
                    /*if( !page.is(ev.target) ){ return; }*/
                        resetFn();
                        bBtn = true;


                    });
                    
                    //longTap  长按事件里禁止页面拖动
                    function showCropperLayer(){
                       // if(newMaga.mubanId!=0){
                       //  return;
                       // }
                        $(this).addClass('active').siblings().removeClass('active');
                        page.off("touchmove.move");
                        page.off("touchend.move");
                        isMove = false;
                        var activeFloatage=findActive(newMaga,$(this).attr('id'));
                        newMaga.activeFloatage=activeFloatage;
                      
                    }
                    
                    
                    function touchsmove(ev){
                        long_floatage.removeClass('active');
                        long_floatage.off("longTap");    
                        isMove=true;
                        if(ev.target.tagName==='CANVAS'){return;}
                        $(this).siblings().removeClass('current');
                        var downY=ev.changedTouches[0].pageY;
                        delta=downY;

                        if(downY < startY ){
                            nextorprevIndex = nowIndex == page.length-1 ? 0 : nowIndex + 1;
                            page.eq(nextorprevIndex).css('-webkit-transform','translate(0,'+( viewHeight + downY - startY )+'px)');
                        }else{
                            nextorprevIndex = nowIndex == 0 ? page.length-1 : nowIndex - 1;
                            page.eq(nextorprevIndex).css('-webkit-transform','translate(0,'+( -viewHeight + downY - startY )+'px)');
                        }
                    
                        page.eq(nextorprevIndex).addClass('current').addClass('zIndex');
                        scale = 1 - Math.abs((downY- startY))*step / viewHeight;
                        $(this).css('-webkit-transform','translate(0,'+ (downY - startY)*step +'px) scale('+( scale )+')');
                        // console.log('%c'+nextorprevIndex,'color:pink;')
                    }
                    
                    
                    function touchsend(ev){
                        
                        if(isMove){
                            var downY = ev.changedTouches[0].pageY;
                            if(downY < startY)
                            {
                                page.eq(nowIndex).css('-webkit-transform','translate(0,'+(-viewHeight * step)+'px) scale('+(1 - step)+')');
                                }else{
                                page.eq(nowIndex).css('-webkit-transform','translate(0,'+(viewHeight * step)+'px) scale('+(1 - step)+')');
                            }
                            
                            page.eq(nowIndex).css('-webkit-transition','.3s');
                            page.eq(nextorprevIndex).css('-webkit-transform','translate(0,0)');
                            page.eq(nextorprevIndex).css('-webkit-transition','.3s');
                            page.off('.move');   
                            maga.active=nextorprevIndex;
                            scope.state.active=nextorprevIndex;
                            pages.removeClass('current');
                            pages.eq(nextorprevIndex).addClass('current');
                        }
                        isMove=false;
                        var duration=(Date.now()-timeStart)
                        if(Math.abs(delta)<=20&&duration<=200&& !isPreview){
                            var img=$(ev.target).find('img');
                            var isImg=$(ev.target).hasClass('s_img');
                            var text=$(ev.target).parent();
                            
                             
                            if(img && img.length===1&&isImg){
                                
                                var hash=window.location.hash;
                                hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
                                hash=hash+'?-img:'+img.parents('.s_floatage').attr('id')+'-'+Math.random();
                                window.location.hash=hash;
                                $(ev.target).parents('.page').addClass('current');
                                maga.flOrBk='floatage';
                                 
                            }
                            
                            if(text.hasClass("text"))
                            {
                                
                                var floatage=_.find(maga.pages[maga.active].floatages,
                                function(item,index){
                                        return item.uniqueId == text.parent().parent().attr("id");  
                                });
                                maga.activeText=floatage;
                                //var value = floatage.value.join('/n');
                                 console.log(maga.activeText.style)
                                window.location.hash="/text"
                                
                            }
                        }
                        delta=0;
                        page.off("touchmove.move");
                        page.off("touchend.move");
                        // console.log("%c"+nextorprevIndex,'color:red;');      
                    }
                    
                    function resetFn(){
                        page.css('-webkit-transform','');
                        page.css('-webkit-transition','');
                        page.eq(nextorprevIndex).removeClass('zIndex').siblings().removeClass('current');       
                    }
                    
                    //退出编辑
                    if(!isPreview){
                        $(".stage_bj").on('tap',cancellEdit);

                    }

                    function cancellEdit(e){
                            page = stage.find(".page");
                            page.find(".s_floatage").removeClass("active");
                            $('.animation-operate').addClass('hide');
                            $('.stage-nav').removeClass('hide');
                            //重新绑定页面拖动事件
                            page.on("touchmove.move",touchsmove);
                            page.on("touchend.move",touchsend);
                            // isMove = true; 
                    }
                },100)
                
                
                
        
            }
        }
    }
    //转场指令
    function cutDirective(){
        return {
            require:'^commonDirective',
            restrict:'A',
            link:function(scope,ele,attrs){
                ele=$(ele[0]);
                var Flip=scope.Flip,
                    newMaga=scope.magasProvider.getNewMaga(),
                    pages=ele.find('.page'),
                    cut={
                        current:0,
                        height:0
                    },
                    poly={
                        style:document.createElement('div').style,
                        vendor:function() {
                                    var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                                        transform,
                                        i = 0,
                                        l = vendors.length;
                            
                                    for ( ; i < l; i++ ) {
                                        transform = vendors[i] + 'ransform';
                                        if ( transform in this.style ) return vendors[i].substr(0, vendors[i].length-1);
                                    }
                                    return false;
                                },
                        prefix:function (style) {
                                    if ( this.vendor() === false ) return false;
                                    if ( this.vendor() === '' ) return style;
                                    return this.vendor() + style.charAt(0).toUpperCase() + style.substr(1);
                                }
                    },
                    logic={
                        next:0,
                        now:0,
                        up:function(){
                            var now=cut.current-1;
                            if(now<0)now=0;
                            this.next=now;
                            return pages.eq(now);
                        },
                        down:function(){
                            var now=cut.current+1;
                            if(now>(pages.length-1))now=pages.length-1;
                            this.next=now;
                            return pages.eq(now)
                        },
                        where:function(){
                            var next=this.next;
                            if(next==cut.current){
                                
                            }else if(next<cut.current){

                                this.appear(pages.eq(next));
                                this.transform(next);
                                this.effect(next);

                            }else if(next>cut.current){

                                this.appear(pages.eq(next));
                                this.transform(next);
                                this.effect(next);

                            }
                        },
                        current:function(){
                            pages=ele.find('.page');
                            pages.each(function(index,value){
                                if(value.classList.contains('current')){
                                    cut.current=index;
                                }
                            });
                            pages.removeClass('cut');
                            cut.height=ele.height();  
                        },
                        appear:function(who){
                            who.addClass('appear');
                        },
                        transform:function(next){
                            if(next<cut.current){
                                var transform=poly.prefix('transform');
                                pages.get(next).style[transform]='translate3d(0,-'+cut.height+'px,0)';
                                pages.eq(next).addClass('st');
                                logic.now=cut.current;
                            }else if(next>cut.current){
                                var transform=poly.prefix('transform');
                                pages.get(next).style[transform]='translate3d(0,'+cut.height+'px,0)';
                                pages.eq(next).addClass('st');
                                logic.now=cut.current;
                            }
                        },
                        effect:function(next){
                            var _this=this;
                            _.delay(function(){
                                    pages.get(next).style[poly.prefix('transform')]='translate3d(0,0,0)';
                                    _.delay(function(){
                                        _this.build();
                                    }, 300);
                                },100);
                        },
                        build:function(){
                            scope.state.active=logic.next;
                            newMaga.active=logic.next;
                            pages.eq(logic.now).removeClass('current');
                            pages.eq(logic.next).addClass('current');
                            pages.eq(logic.next).removeClass('appear');
                            pages.eq(logic.next).removeClass('st');

                        }
                    },
                    handler={
                        start:function(){
                            logic.current();
                        },
                        up:function(){
                            logic.down();
                            logic.where();
                        },
                        down:function(){
                            logic.up();
                            logic.where();
                        }
                    };
                var flip=new Flip;
                flip.init({
                    target:ele[0],
                    container:ele[0],
                    start:handler.start,
                    up:handler.up,
                    down:handler.down
                });

                //退出编辑
                ele.on('tap',cancellEdit);
                function cancellEdit(e){
                    if(e.target.classList.contains('page')){
                        var active=e.target.querySelector('.active');
                        active&&active.classList.remove('active');
                        $('.animation-operate').addClass('hide');
                        $('.stage-nav').removeClass('hide');
                    }
                }
            }
        }
    }
    //涂抹效果
    function lotteryDirective(){
        return {
            require:'^commonDirective',
            restrict:'A',
            link:function(scope,element,attrs){
                var maga=scope.magasProvider.getNewMaga();
                var now=$(element[0]).index();
                var page=maga.pages[now];
                var isPreview=$('.stage').hasClass('preview');
                var data=_.findWhere(page.effects,{type:'lottery'});
                if((!data)||(data.ended&&(!isPreview))){
                    return;
                }
                // if(!$(element[0]).index()===maga.active){
                //     return;
                // }
                _.delay(function(){
                    if(typeof data.value==='string'){
                        data.value=JSON.parse(data.value);
                    }
                    var target=element[0],
                        dim=getComputedStyle(target,false),
                        width=parseInt(dim.width),
                        height=parseInt(dim.height),
                        Lottery=scope.Lottery,
                        lottery=new Lottery(target,data.value.src,'image',640,960,cb,data.value.scale,data.value.content);
                    lottery.init();                    
                    function cb(wrapper,move,end){
                        wrapper.removeChild(wrapper.querySelector('.lottery'));
                        lottery=null;
                        wrapper.removeEventListener('touchmove',move);
                        wrapper.removeEventListener('touchend',end);
                        data.ended=true;
                    }
                },200);
            }   
        }
    }
    //制作页面导航拖拽
    function dragXDirective(){
        return {
            scope:{},
            restrict:'A',
            link:function(scope,ele,attrs){
                ele=$(ele[0]).find('.dragpro');
                var width=ele.children().children().width()+10,
                    wrapperWidth=width*ele.children(),
                    touchPos={
                    startX:0,
                    x:0,
                    deltaX:0
                };
                ele.css({
                    'webkitTransition':'all ease 0.5s',
                    'transition':'all ease 0.5s',
                    '-webkit-transition':'all ease 0.5s'
                });
                ele.on('touchstart',sometime);
                ele.on('touchmove',drag);
                function sometime(e){
                    touchPos.startX=e.touches[0].pageX;
                }
                function drag(e){
                    touchPos.x=e.touches[0].pageX;
                    touchPos.deltaX=touchPos.x-touchPos.startX;
                    if(Math.abs(touchPos.deltaX)>100){
                        if(touchPos.deltaX>0){
                            ele.css({
                                    'webkitTransform':'translate(0,0)',
                                    'transform':'translate(0,0)',
                                    '-webkit-transform':'translate(0,0)'
                                });
                        }else{
                            ele.css({
                                    'webkitTransform':'translate(-'+width+'px,0)',
                                    'transform':'translate(-'+width+'px,0)',
                                    '-webkit-transform':'translate(-'+width+'px,0)'
                                });
                        }
                    }
                }
            }
        }
    };


    //音乐
    function musicDirective(){
        return {
            restrict:'E',
            templateUrl:'partials/coffee.html',
            link:function(scope,ele,attrs){
                var ele=$(ele[0]);
                //定义zepto的动画模块
                ;(function($, undefined){
                  var prefix = '', eventPrefix, endEventName, endAnimationName,
                    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
                    document = window.document, testEl = document.createElement('div'),
                    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                    transform,
                    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
                    animationName, animationDuration, animationTiming, animationDelay,
                    cssReset = {}

                  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
                  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

                  $.each(vendors, function(vendor, event){
                    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
                      prefix = '-' + vendor.toLowerCase() + '-'
                      eventPrefix = event
                      return false
                    }
                  })

                  transform = prefix + 'transform'
                  cssReset[transitionProperty = prefix + 'transition-property'] =
                  cssReset[transitionDuration = prefix + 'transition-duration'] =
                  cssReset[transitionDelay    = prefix + 'transition-delay'] =
                  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
                  cssReset[animationName      = prefix + 'animation-name'] =
                  cssReset[animationDuration  = prefix + 'animation-duration'] =
                  cssReset[animationDelay     = prefix + 'animation-delay'] =
                  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

                  $.fx = {
                    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
                    speeds: { _default: 400, fast: 200, slow: 600 },
                    cssPrefix: prefix,
                    transitionEnd: normalizeEvent('TransitionEnd'),
                    animationEnd: normalizeEvent('AnimationEnd')
                  }

                  $.fn.animate = function(properties, duration, ease, callback, delay){
                    if ($.isFunction(duration))
                      callback = duration, ease = undefined, duration = undefined
                    if ($.isFunction(ease))
                      callback = ease, ease = undefined
                    if ($.isPlainObject(duration))
                      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
                    if (duration) duration = (typeof duration == 'number' ? duration :
                                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
                    if (delay) delay = parseFloat(delay) / 1000
                    return this.anim(properties, duration, ease, callback, delay)
                  }

                  $.fn.anim = function(properties, duration, ease, callback, delay){
                    var key, cssValues = {}, cssProperties, transforms = '',
                        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
                        fired = false

                    if (duration === undefined) duration = $.fx.speeds._default / 1000
                    if (delay === undefined) delay = 0
                    if ($.fx.off) duration = 0

                    if (typeof properties == 'string') {
                      // keyframe animation
                      cssValues[animationName] = properties
                      cssValues[animationDuration] = duration + 's'
                      cssValues[animationDelay] = delay + 's'
                      cssValues[animationTiming] = (ease || 'linear')
                      endEvent = $.fx.animationEnd
                    } else {
                      cssProperties = []
                      // CSS transitions
                      for (key in properties)
                        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
                        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

                      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
                      if (duration > 0 && typeof properties === 'object') {
                        cssValues[transitionProperty] = cssProperties.join(', ')
                        cssValues[transitionDuration] = duration + 's'
                        cssValues[transitionDelay] = delay + 's'
                        cssValues[transitionTiming] = (ease || 'linear')
                      }
                    }

                    wrappedCallback = function(event){
                      if (typeof event !== 'undefined') {
                        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
                        $(event.target).unbind(endEvent, wrappedCallback)
                      } else
                        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

                      fired = true
                      $(this).css(cssReset)
                      callback && callback.call(this)
                    }
                    if (duration > 0){
                      this.bind(endEvent, wrappedCallback)
                      // transitionEnd is not always firing on older Android phones
                      // so make sure it gets fired
                      setTimeout(function(){
                        if (fired) return
                        wrappedCallback.call(that)
                      }, (duration * 1000) + 25)
                    }

                    // trigger page reflow so new elements can animate
                    this.size() && this.get(0).clientLeft

                    this.css(cssValues)

                    if (duration <= 0) setTimeout(function() {
                      that.each(function(){ wrappedCallback.call(this) })
                    }, 0)

                    return this
                  }

                  testEl = null
                })(window.Zepto||window.jQuery||window.$)
                // 音符的漂浮的插件制作--zpeto扩展
                ;(function($){
                  // 利用zpeto的animate的动画-css3的动画-easing为了css3的easing(zpeto没有提供easing的扩展)
                    $.fn.coffee = function(option){
                    // 动画定时器
                    var __time_val=null;
                    var __time_wind=null;
                    var __flyFastSlow = 'cubic-bezier(.09,.64,.16,.94)';

                    // 初始化函数体，生成对应的DOM节点
                        var $coffee = $(this);
                        var opts = $.extend({},$.fn.coffee.defaults,option);  // 继承传入的值

                    // 漂浮的DOM
                    var coffeeSteamBoxWidth = opts.steamWidth;
                    var $coffeeSteamBox = $('<div class="coffee-steam-box"></div>')
                      .css({
                        'height'   : opts.steamHeight,
                        'width'    : opts.steamWidth,
                        'left'     : 60,
                        'top'      : -50,
                        'position' : 'absolute',
                        'overflow' : 'hidden',
                        'z-index'  : 0 
                      })
                      .appendTo($coffee);

                    // 动画停止函数处理
                    $.fn.coffee.stop = function(){
                      clearInterval(__time_val);
                      clearInterval(__time_wind);
                    }

                    // 动画开始函数处理
                    $.fn.coffee.start = function(){
                      __time_val = setInterval(function(){
                        steam();
                      }, rand( opts.steamInterval / 2 , opts.steamInterval * 2 ));

                      __time_wind = setInterval(function(){
                        wind();
                      },rand( 100 , 1000 )+ rand( 1000 , 3000))
                    }
                        return $coffee;
                        
                    // 生成漂浮物
                    function steam(){   
                      // 设置飞行体的样式
                            var fontSize = rand( 8 , opts.steamMaxSize  ) ;     // 字体大小
                      var steamsFontFamily = randoms( 1, opts.steamsFontFamily ); // 字体类型
                      var color = '#'+ randoms(6 , '0123456789ABCDEF' );  // 字体颜色
                            var position = rand( 0, 44 );                       // 起初位置
                            var rotate = rand(-90,89);                          // 旋转角度
                            var scale = rand02(0.4,1);                          // 大小缩放
                      var transform =  $.fx.cssPrefix+'transform';        // 设置音符的旋转角度和大小
                          transform = transform+':rotate('+rotate+'deg) scale('+scale+');'

                      // 生成fly飞行体
                            var $fly = $('<span class="coffee-steam">'+ randoms( 1, opts.steams ) +'</span>');
                            var left = rand( 0 , coffeeSteamBoxWidth - opts.steamWidth - fontSize );
                            if( left > position ) left = rand( 0 , position );
                            $fly
                        .css({
                          'position'     : 'absolute',
                          'left'         : position,
                          'top'          : opts.steamHeight,
                          'font-size:'   : fontSize+'px',
                          'color'        : color,
                          'font-family'  : steamsFontFamily,
                          'display'      : 'block',
                          'opacity'      : 1
                        })
                        .attr('style',$fly.attr('style')+transform)
                        .appendTo($coffeeSteamBox)
                        .animate({
                                top     : rand(opts.steamHeight/2,0),
                                left    : left,
                                opacity : 0
                              },rand( opts.steamFlyTime / 2 , opts.steamFlyTime * 1.2 ),__flyFastSlow,function(){
                                  $fly.remove();
                                  $fly = null;          
                             });
                        };
                        
                    // 风行，可以让漂浮体，左右浮动
                        function wind(){
                      // 左右浮动的范围值
                      var left = rand( -10 , 10 );
                      left += parseInt($coffeeSteamBox.css('left'));
                      if(left>=54) left=54;
                      else if(left<=34) left=34;

                      // 移动的函数
                      $coffeeSteamBox.animate({
                        left  : left 
                      } , rand( 1000 , 3000) ,__flyFastSlow);
                        };
                        
                    // 随即一个值
                    // 可以传入一个数组和一个字符串
                    // 传入数组的话，随即获取一个数组的元素
                    // 传入字符串的话，随即获取其中的length的字符
                        function randoms( length , chars ) {
                            length = length || 1 ;
                            var hash = '';                  // 
                            var maxNum = chars.length - 1;  // last-one
                            var num = 0;                    // fisrt-one
                            for( var i = 0; i < length; i++ ) {
                                num = rand( 0 , maxNum - 1  );
                                hash += chars.slice( num , num + 1 );
                            }
                            return hash;
                        };

                    // 随即一个数值的范围中的值--整数
                        function rand(mi,ma){   
                            var range = ma - mi;
                            var out = mi + Math.round( Math.random() * range) ; 
                            return parseInt(out);
                        };  

                    // 随即一个数值的范围中的值--浮点
                        function rand02(mi,ma){   
                            var range = ma - mi;
                            var out = mi + Math.random() * range;   
                            return parseFloat(out);
                        };      
                    };

                    $.fn.coffee.defaults = {
                        steams                  : ['jQuery','HTML5','HTML6','CSS2','CSS3','JS','$.fn()','char','short','if','float','else','type','case','function','travel','return','array()','empty()','eval','C++','JAVA','PHP','JSP','.NET','while','this','$.find();','float','$.ajax()','addClass','width','height','Click','each','animate','cookie','bug','Design','Julying','$(this)','i++','Chrome','Firefox','Firebug','IE6','Guitar' ,'Music' ,'攻城师' ,'旅行' ,'王子墨','啤酒'], /*漂浮物的类型，种类*/
                        steamsFontFamily    : ['Verdana','Geneva','Comic Sans MS','MS Serif','Lucida Sans Unicode','Times New Roman','Trebuchet MS','Arial','Courier New','Georgia'],  /*漂浮物的字体类型*/
                        steamFlyTime          : 5000 , /*Steam飞行的时间,单位 ms 。（决定steam飞行速度的快慢）*/
                        steamInterval       : 500 ,  /*制造Steam时间间隔,单位 ms.*/
                        steamMaxSize          : 30 ,   /*随即获取漂浮物的字体大小*/
                        steamHeight       : 200,   /*飞行体的高度*/
                        steamWidth        : 300    /*飞行体的宽度*/
                    };
                    $.fn.coffee.version = '2.0.0'; // 更新为音符的悬浮---重构的代码
                })(window.Zepto||window.jQuery||window.$);
                var service={
                    audioPlay:audioPlay,
                    audioPause:audioPause,
                    init:init
                };
                var audio=ele.find('audio')[0];
                var played=true;
                init(scope.music.src);
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
                    audio.load();
                    ele.find('#coffee_flow').coffee({
                        steams              : ["<img src='img/audio_widget_01@2x.png' />","<img src='img/audio_widget_01@2x.png' />"], 
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
                
            }
        }           
    };
    //图片截取指令
    function cropperDirective(){
        return {
            restrict:'A',
            templateUrl:'partials/cropper.html',
            transclude:true,
            link:function(scope,ele,attrs){
                    
                    // if(!scope.floatage.type==='image'){
                    //     return;
                    // }
                    var ele=$(ele[0]),
                        newMaga=scope.magasProvider.getNewMaga(),
                        Flip=scope.Flip,
                        eff='fadeIn fadeOut zoomIn rotateIn ring slideDown slideUp slideLeft expandUp expandOpen pullUp pullDown stretchLeft stretchRight rotateIn flipInX flipInY lightSpeedIn moveDown moveUp moveLeft moveRight rotateInDownRight rotateInDownLeft zoomInDown fadeInNormal',
                        Tap=scope.tapProvider,
                        findActive=scope.findActive,
                        stage_bj=$('.stage_bj')[0],
                        closeAnimation=$('.clear-animation'),//清除动画按钮
                        animationOperate=$('.animation-operate'),//动画编辑浮层
                        stageNav=$('.stage-nav'),//导航浮层
                        fadeInBtn=$('.fadeInBtn'),//淡入按钮
                        fadeOutBtn=$('.fadeOutBtn'),//淡出按钮
                        amplifyBtn=$('.amplifyBtn'),//放大按钮
                        rotationBtn=$('.rotationBtn'),//旋转按钮
                        shakeBtn=$('.shakeBtn'),//抖动按钮
                        span100000=ele.find('.left_t'),
                        span010000=ele.find('.center_t'),
                        span001000=ele.find('.right_t'),
                        span000100=ele.find('.left_b'),
                        span000010=ele.find('.center_b'),
                        span000001=ele.find('.right_b'),
                        pos={
                                start:{
                                        x:null,
                                        y:null
                                    },
                                move:{
                                        x:null,
                                        y:null
                                    },
                                end:{
                                        x:null,
                                        y:null
                                    },
                                now:{
                                    left:null,
                                    top:null
                                },
                                delta:{
                                    x:null,
                                    y:null
                                }
                            };
                    // if( newMaga.mubanId != 0){
                    //     console.log('进来了')
                    //      return;  
                    // }
                    init();
                    function init(){
                        ele.on('touchstart',sometime);//漂浮物的拖拽
                        if(!closeAnimation.data('only')){
                            closeAnimation.data('only', true);
                            closeAnimation.on('tap',clearAnimation);
                            fadeInBtn.on('tap',addAnimation.bind(ele,'fadeIn'));
                            fadeOutBtn.on('tap',addAnimation.bind(ele,'fadeOut'));
                            amplifyBtn.on('tap',addAnimation.bind(ele,'zoomIn'));
                            rotationBtn.on('tap',addAnimation.bind(ele,'rotateIn'));
                            shakeBtn.on('tap',addAnimation.bind(ele,'ring'));
                              // $(document).on('contextmenu',controll);
                            $('.stage_bj').on('touchmove.scroll',controll);
                            $('.stage_bj').on('scroll.scroll',controll);
                        }
                        /*ele.on('longTap',showCropperLayer);*/
                         
                        ele.find('.anim').on('touchstart',showAnimationLayer);
                        ele.find('.del').on('touchstart',delActive);
                        ele.find('img').on('touchend',defaultAndPropagation);
                        //漂浮物的裁剪
                        cropper100000();
                        cropper010000();
                        cropper001000();
                        cropper000100();
                        cropper000010();
                        cropper000001();
                        //替换图片
                        // replaceImage();
                    }
                    //获取漂浮物尺寸和位置
                    function rect(obj){
                        return obj.getBoundingClientRect();
                        
                    }
                    // function replaceImage(){
                    //     _.delay(function(){
                    //         ele.on('tap',
                    //             function(){
                    //                 var img=ele.find('img');
                    //                 if(img.length===1){
                    //                     var hash=window.location.hash;
                    //                     hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
                    //                     hash=hash+'?-img:'+scope.floatage.uniqueId+'-'+Math.random();
                    //                     window.location.hash=hash;
                    //                     $(this).parents('.page').addClass('current');
                    //                     newMaga.flOrBk='floatage';
                    //                 }
                    //             });
                    //                 // var img=ele.find('img');
                    //                 // if(img.length===1){
                    //                 //     // console.log(img[0],$(img[0]).parents('.page')[0])
                    //                 //     var tap=new Tap;
                    //                 //     tap.init({
                    //                 //         target:img[0],
                    //                 //         container:$(img[0]).parents('.page')[0],
                    //                 //         fn:function(){
                    //                 //             var hash=window.location.hash;
                    //                 //             hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
                    //                 //             hash=hash+'?-img:'+scope.floatage.uniqueId+'-'+Math.random();
                    //                 //             window.location.hash=hash;
                    //                 //             $(img[0]).parents('.page').addClass('current');
                    //                 //             newMaga.flOrBk='floatage';
                    //                 //         }
                    //                 //     });
                    //                 // }
                    //     },100);
                    // }
                    function controll(){
                        
                        return false;
                    }
                    function defaultAndPropagation(e){
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    function sync(left,top,width,height){
                            if(left!==undefined)scope.floatage.style.left=left+'px';
                            if(top!==undefined)scope.floatage.style.top=top+'px';
                            if(width!==undefined)scope.floatage.style.width=width+'px';
                            if(height!==undefined)scope.floatage.style.height=height+'px';
                    }
                    function cropper100000(){
                        var flip=new Flip();
                        flip.init({
                                target:span100000[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                            console.log(parseInt(ele.css('left')),data.width)
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width-e._x,
                                height=dim.height-e._y;
                            var left=pos.left+e._x,
                                top=pos.top+e._y;
                            ele.css({
                                width: width+'px',
                                height: height+'px',
                                left:left+'px',
                                top:top+'px'
                            });
                            sync(left,top,width,height);
                            
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                    }
                    function cropper010000(){
                        var flip=new Flip();
                        flip.init({
                                target:span010000[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var height=dim.height-e._y;
                            var top=pos.top+e._y;
                            var left;
                            var width;
                            ele.css({
                                height: height+'px',
                                top:top+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                    }
                    function cropper001000(){
                        var flip=new Flip();
                        flip.init({
                                target:span001000[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width+e._x,
                                height=dim.height-e._y;
                            var top=pos.top+e._y;
                            var left;
                            ele.css({
                                width: width+'px',
                                height: height+'px',
                                top:top+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function cropper000100(){
                        var flip=new Flip();
                        flip.init({
                                target:span000100[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width-e._x,
                                height=dim.height+e._y;
                            var left=pos.left+e._x;
                            var top;
                            ele.css({
                                width: width+'px',
                                height: height+'px',
                                left:left+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function cropper000010(){
                        var flip=new Flip();
                        flip.init({
                                target:span000010[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var left,top,width;
                            var height=dim.height+e._y;
                            ele.css({
                                height:height+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function cropper000001(){
                        var flip=new Flip();
                        flip.init({
                                target:span000001[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width+e._x,
                                height=dim.height+e._y;
                            var left;
                            var top;
                            ele.css({
                                width: width+'px',
                                height: height+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function addAnimation(effectName){
                        var active=$('#'+newMaga.activeFloatage.uniqueId);
                        // var activeId=active.attr('id');
                        // var floatage=findActive(newMaga,activeId);
                        var floatage=newMaga.activeFloatage;
                        var classList=['fadeIn','fadeOut','zoomIn','rotateIn','ring'];
                        active.removeClass(effectName);
                        active.offsetWidth=active.offsetWidth;
                        floatage.effects=_.difference(floatage.effects,classList);
                        floatage.effects=_.union(floatage.effects,[effectName]);
                        _.delay(function(){
                            classList.forEach(function(item,index,classList){
                                    active.removeClass(item);
                                });
                            active.addClass(effectName);
                        },10);
                    }
                    /*function showCropperLayer(){
                        var parent=ele.parent();
                        var siblings=parent.find('.active');
                        siblings.removeClass('active');
                        ele.addClass('active');
                        var activeFloatage=findActive(newMaga,ele.attr('id'));
                        newMaga.activeFloatage=activeFloatage;
                        scope.$apply(function(){
                            
                        });
                        return false;
                    }*/

                    function showAnimationLayer(){
                        $('.stage .active').removeClass('active');
                        animationOperate.removeClass('hide');
                        stageNav.addClass('hide');

                        ele.find('img').off('contextmenu',controll);
                        ele.find('img').on('contextmenu',controll);
                        return false;

                    }
                    function closeAnimationLayer(){
                        // animationOperate.addClass('hide');
                        // stageNav.removeClass('hide');
                        clearAnimation();
                        
                    }
                    function clearAnimation(id){
                        var active=getAcitve();
                        var id=active.uniqueId;
                        var floatage=document.querySelector('#'+id);
                        console.log(floatage);
                        floatage.style.animationDuration='';
                        floatage.style.webkitAnimationDuration='';
                        floatage.style.animationDelay='';
                        floatage.style.webkitAnimationDelay='';
                        delete active.style.animationDuration;
                        delete active.style.webkitAnimationDuration;
                        delete active.style.animationDelay;
                        delete active.style.webkitAnimationDelay;
                        $(floatage).removeClass(eff);
                        active.effects=_.difference(active.effects,eff.split(' '));
                    }
                    function getAcitve(){
                        return newMaga.activeFloatage;
                    }
                    function delActive(){
                        var target=$('.active');
                        var id=target.attr('id');
                        target.remove();
                        var floatages=newMaga.pages[newMaga.active].floatages;
                        var des=_.find(floatages,
                            function(item,index){
                                return item.uniqueId==id;
                            });
                        var index=_.indexOf(floatages,des)
                        floatages.splice(index,1);
                        // closeAnimation.trigger('tap');
                        console.log(ele)
                    }

                    function sometime(e){
                        if(!this.classList.contains('active')){
                            return;
                        }
                        e.stopImmediatePropagation();
                        updateStartPos(e);
                        updateNowPos();
                        ele.on('touchmove',drag);
                        ele.on('touchend',drop);
                    }

                    function drag(e){
                        updateMovePos(e);
                        updateDelta();
                        setPos();
                    }
                    function drop(){
                        ele.off('touchmove',drag);
                        ele.off('touchend',drop);
                    }
                    function updateStartPos(e){
                        pos.start.x=e.touches[0].pageX;
                        pos.start.y=e.touches[0].pageY;
                    }
                    function updateMovePos(e){
                        pos.move.x=e.touches[0].pageX;
                        pos.move.y=e.touches[0].pageY;
                    }
                    function updateNowPos(){
                        pos.now.left=parseInt(ele.css('left'))||0;
                        pos.now.top=parseInt(ele.css('top'))||0;
                    }
                    function updateDelta(){
                        pos.delta.x=pos.move.x-pos.start.x;
                        pos.delta.y=pos.move.y-pos.start.y;
                    }
                    function setPos(){
                        var left=pos.now.left+pos.delta.x+'px';
                        var top=pos.now.top+pos.delta.y+'px';
                        ele.css({
                                'left':left,
                                'top':top,
                            });
                        scope.floatage.style.left=left;
                        scope.floatage.style.top=top;
                    }
                    function prevent(e){
                        e.preventDefault();
                    }
                    function stop(e){
                        e.stopPropagation();
                    }
                }
        }
    }
    // 拖拽设置值指令
    function dragSetDirective(){
        return {
            scope:{
                'defaultx':'=',
                'big':'=',
                'unit':'@',
                'type':'@'
            },
            templateUrl:'partials/dragSet.html',
            controller:function($scope,magasProvider,findActiveProvider){
                $scope.newMaga=magasProvider.getNewMaga();
                $scope.findActive=findActiveProvider;
            },
            link:function(scope,ele,attrs){

                var ele=$(ele[0]),
                    newMaga=scope.newMaga,
                    findActive=scope.findActive,
                    setLine=ele.find('.set-line'),
                    setBtn=ele.find('.set-btn'),
                    setLineWidth=setLine.width(),
                    eleWidth=ele.width(),
                    values=ele.find('.values span'),
                    big=scope.big,
                    type=scope.type.slice(0,1).toUpperCase()+scope.type.slice(1),
                    realValue=scope.defaultx,
                    pos={
                        startX:0,
                        moveX:0,
                        endX:0,
                        deltaX:0,
                        now:0
                    };
                setBtn.on('touchstart',sometime);
                init();
                function init(){
                    var temp=$('.animation-operate').removeClass('hide');
                    setLineWidth=setLine.width();
                    temp.addClass('hide');
                    setBtn.css('left',parseInt(setLineWidth)/scope.big*scope.defaultx+'px')
                    values.html(scope.defaultx)
                }
                function sometime(e){
                    ele.on('touchmove',drag);
                    ele.on('touchend',drop);
                    setLineWidth=setLine.width()
                    var now=parseInt(setBtn.css('left'));
                    pos.now=now;
                    pos.startX=e.touches[0].pageX;

                }  
                function drag(e){
                    pos.moveX=e.touches[0].pageX;
                    pos.deltaX=e.touches[0].pageX-pos.startX;
                    var value=pos.now+pos.deltaX;
                    if(value<0){
                        value=0;
                    }else if(value>setLineWidth){
                        value=setLineWidth;
                    }
                    setBtn.css('left',value);
                    realValue=parseFloat(value/setLineWidth*big).toFixed(1);
                    values.html(realValue);
                }
                function getAcitve(){
                    return newMaga.activeFloatage;
                }
                function drop(e){
                    var active=getAcitve();
                    var activeId=getAcitve().uniqueId;
                    console.log(active);
                    var dom=document.querySelector('#'+activeId);
                    $(this).off(drop).off(drag);
                    var floatage=newMaga.activeFloatage;
                    floatage.style['webkitAnimation'+type]=realValue+'s';
                    floatage.style['animation'+type]=realValue+'s';
                    dom.style['webkitAnimation'+type]=realValue+'s';
                    dom.style['animation'+type]=realValue+'s';
                }
            }
        };
    }

    //超链接底部导航
    function btn(){
        return {
            scope:{},
            restrict:'A',
            link:function(scope,element,attrs){
                var obj = $(element[0]);
                var btn_list = obj.find(".edit_text_nav").find("div");
                var edit_box = obj.find(".edit_box");
                var area = edit_box.find(".display_area");
                var now=null;
                var show=false;
                var btnLink=false;
                btn_list.each(function(i){  
                        $(this).on("tap",function(){ 
                                if(i==4)
                                {
                                    area.css("visibility","hidden");
                                    if(!btnLink)
                                    {
                                        $(".add_btn_link").css("visibility","inherit");
                                        $(this).addClass("act").siblings().removeClass("act");
                                        /*edit_box.removeClass("edit_show");*/
                                        btnLink=true;
    
                                    
                                    }else{
                                        $(".add_btn_link").css("visibility","hidden");
                                        /*edit_box.addClass("edit_show");*/
                                        btnLink=false;
                                        $(this).removeClass("act");
                                        

                                    }
                                    
                                }else{
                                    if(now==i)
                                        {
                                            if(!show)
                                            {
                                                area.eq(i).css("visibility","hidden");
                                                $(this).removeClass("act");
                                                /*edit_box.removeClass("edit_show");*/
                                                show=true;
                                                
                                            }else{
                                                area.eq(i).css("visibility","inherit");
                                                $(this).addClass("act");
                                                /*edit_box.addClass("edit_show");*/
                                                show=false; 
                                        }                           
                                    }else{
                                        show=false;
                                        btnLink=false;  
                                        $(this).addClass("act").siblings().removeClass("act");
                                        /*edit_box.addClass("edit_show");*/
                                        area.eq(i).css("visibility","inherit").siblings().css("visibility","hidden");
                                        $(".add_btn_link").css("visibility","hidden");
                                         
                                    }
                                }   
                                    
                                now=i
                        });   
                })
            }   
        }
    }

    //拖拽设置
    function myScroll(){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                maxnum : '@',
                minnum : '@',
                thisnum: '=',
            },
            template: ' <div>'+
                            '<div class="set-l">小</div>'+
                            '<div class="set-line">'+
                                '<div class="set-btn">'+
                                    '<div class="set-btn-bj">'+
                                    '<div class="values_box">'+
                                        '<span class="values">{{thisnum}}</span>'+
                                        '<span class="units"></span>'+
                                    '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="set-r">大</div>'+
                        '</div>',
        
            link : function(scope,element,attr){
                
                var element=$(element[0]);
                var obj1 = element.find(".set-btn");
                var obj2 = element.find(".set-line");
                var obj3 = element.find(".values");
                var obj4 = element.find(".units");
                var obj5 = element.find(".set-btn-bj");
                var len = obj2.width();
                 obj1.css("left", ( parseInt(scope.thisnum) -  parseInt(scope.minnum) )/ parseInt(scope.maxnum ) * len);
                 
                obj1.on("touchstart",function(ev){
                    
                    var disX=ev.targetTouches[0].pageX - obj1.position().left;
                    var disY=ev.targetTouches[0].pageY - obj1.position().top;  
                    function drag(ev){    
                        var l=ev.targetTouches[0].pageX-disX;   
                        if(l<0)
                        {
                            l=0;
                        }else if(l > obj2.width() - obj5.width())
                        {
                            l = obj2.width() - obj5.width()
                        }
                        obj1.css("left",l); 
                        var sacle=l/(obj2.width() - obj5.width());
                        scope.$apply(function(){
                            scope.thisnum = parseInt((sacle * scope.maxnum ) + parseInt(scope.minnum))+'px';
                        })
                        
                        obj4.show()
                         
                    }
                    
                    function drop(){
                        $(document).off("touchmove",drag);
                        $(document).off("touchend",drop);
                        
                    }
                    
                    $(document).on("touchmove",drag);
                    $(document).on("touchend",drop);
                   /* ev.preventDefault(); */   
                    
                });  
            },
        }   
    }

    
    //添加按钮拖拽
    function btnDragDirective(){
        return{
            restrict: 'AE',
            replace: true,
            scope:{
                myFn : '&' ,
                myData : '='    
            },
            template : '<div class="bj_color" >'+
                       '<div class="bj_color_par">'+
                       '<span ng-repeat="color in myData" ng-click="myFn({num:$index})" style="background:{{color.val}}"></span> '+
                       '</div>'+
                       '</div>',
            link:function(scope,element,attrs){
                var element=$(element[0]);
                var obj1 = element.find(".bj_color_par");
                var span,w ;

                _.delay(function(){
                    span = obj1.find("span");
                    w = span.width() * span.length + 10;
                    obj1.width(w)
    
                },100);
                
                obj1.on("touchstart",function(ev){
                    
                    var disX=ev.targetTouches[0].pageX - obj1.position().left;
                    
                    function drag(ev){
                        var l=ev.targetTouches[0].pageX-disX;   
                        console.log( -(obj1.width() - element.width()))
                        if(l>0)
                        {
                            l=0;
                        }else if(l < -(obj1.width() - element.width())   )
                        {
                            l = -(obj1.width() - element.width())
                        }
                        
                        obj1.css("left",l);  
                    }
                    function drop(){
                        $(document).off("touchmove",drag);
                        $(document).off("touchend",drop);   
                    }
                    
                    $(document).on("touchmove",drag);
                    $(document).on("touchend",drop);
                    /*ev.preventDefault(); */
                    
                });
            }
        }
    }
    
    //设置音乐
    function setmusicDirective(){
        return{
            restrict:'A',
            controller:function($scope,magasProvider){
                $scope.maga = magasProvider.getNewMaga();
                
            },
            link:function(scope,element,attrs){
                var element=$(element[0]);
                var dd;
                _.delay(function(){     
                    dd=element.find("dd");
                    dd.on("tap",function(){ 
                        dd.removeClass("act");
                        $(this).addClass("act");
                        scope.id = this.id;     
                    })
                },500)
                
            }
        }
        
    }
}));