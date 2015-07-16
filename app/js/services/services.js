;(function(root,factory){
    var angular=window.angular;
    factory.call(root,angular);
}(this,function(angular){
    'use strict';
    angular.module('appServices',[]).
        provider('magaProvider',magaProvider).
        provider('magasProvider',magasProvider).
        provider('flipProvider',flipProvider).
        provider('parseDataProvider',parseDataProvider).
        provider('transformDataProvider',transformDataProvider).
        provider('findActiveProvider',findActiveProvider).
        provider('tapProvider',tapProvider).
        provider('lotteryProvider',lotteryProvider);
    //寻找激活的漂浮物;
    function findActiveProvider(){
        return {
            $get:function(){
                return function(maga,id){
                    var target;
                    _.find(maga.pages,
                        function(page,index){
                            return _.find(page.floatages,
                                        function(floatage,index){
                                            if(floatage.uniqueId===id){
                                                target=floatage;
                                            }
                                            return floatage.uniqueId===id;
                                        });
                        });
                    return target;
                };
            }
        };
    }
    //数据解析服务
    function parseDataProvider(){
        return {
            $get:function(){
                return function(data) {
                    var maga = {};
                    data = data.obj;
                    // maga.id = data.id;
                    // maga.wgUser = data.wgUser;
                    // maga.media={
                    //     audio:{}
                    // };
                    maga.id=data.id;
                    maga.wgUser=data.wgUser;
                    maga.music={
                        src:data.sound,
                        musicId:"2"
                    }; 
                    maga.pages = _.map(data.pageslist,
                        function(item, index) {
                            var page = {
                                uniqueId:_.uniqueId('page_'),
                                order: item.pageNum,
                                effects:[],
                                background: {
                                    style:{
                                        //背景图片样式
                                        backgroundColor: item.backgroundImage.fillcolor,
                                        backgroundImage: item.backgroundImage.image&&'url('+item.backgroundImage.image.url+')',
                                        backgroundRepeat:'no-repeat',
                                        // backgroundPosition:'30px 30px',
                                        backgroundSize:'cover',
                                        // background:item.backgroundImage.image?item.backgroundImage.image.url:''
                                    },
                                    effects:_.map(item.backgroundImage.styles,
                                        function(item,index){
                                            return item.key;
                                        })
                                },
                                floatages: _.map(item.elementsList,
                                    function(item, index) {
                                        var element;
                                        switch (item.elementType) {
                                            case 'img':
                                                element={
                                                    type:'image',
                                                    style:{
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.elementChild.width,
                                                        height:item.elementChild.height,
                                                        position:"absolute",
                                                        //背景色
                                                        // backgroundColor:item.elementChild.fillColor,
                                                        opacity:item.opacityOpacity,
                                                        // transform:item.rotation,
                                                        // shadow:item.shadow,
                                                    },
                                                    src:item.elementChild.image.url,
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                            case 'shape':
                                                element={
                                                    type:'shape',
                                                    style:{
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.elementChild.width,
                                                        height:item.elementChild.height,
                                                        backgroundColor:item.elementChild.fillColor,
                                                        opacity:item.opacityOpacity,
                                                        shadow:item.shadow||'',
                                                    },
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                            case 'btn':
                                                element={
                                                    type:'btn',
                                                    style:{
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.elementChild.width,
                                                        height:item.elementChild.height,
                                                        color:item.elementChild.fontcolor,
                                                        opacity:item.opacityOpacity,
                                                        // transform:item.rotation,
                                                        shadow:item.shadow,
                                                        fontSize:item.elementChild.fontsize,
                                                        backgroundColor:item.elementChild.backgroundcolor,
                                                        borderColor:item.elementChild.border,
                                                        borderWidth:item.elementChild.borderstyle,
                                                        borderStyle:item.elementChild.bordercrude,
                                                    },
                                                    src:item.elementChild.url,
                                                    value:item.elementChild.context,
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                            case 'text':
                                                element={
                                                    type:'text',
                                                    style:{
                                                        alignmentFunction:item.elementChild.alignmentFunction||'',
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.width,
                                                        height:item.height,
                                                        backgroundColor:item.elementChild.backgroundColor,
                                                        fontColor:item.elementChild.color,
                                                        opacity:item.opacityOpacity,
                                                        transform:item.rotation,
                                                        shadow:item.shadow,
                                                        borderColor:item.border,
                                                        fontSize:item.elementChild.fontsize,
                                                        // backgroundColor:item.elementChild.backgroundColor,
                                                        // borderColor:item.elementChild.border,
                                                        borderWidth:item.elementChild.borderStyle,
                                                        fontStyle:item.elementChild.fontStyle,
                                                        lineHeight:item.elementChild.lineHeight,
                                                        borderStyle:item.elementChild.bordercrude,
                                                    },
                                                    value:item.elementChild.content.split('##'),
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                        }
                                        if(element)element.uniqueId=_.uniqueId('floatage_');
                                        return element;
                                    })
                            };
                            return page;
                        });
                    return maga;
                };
            }
        }
    }
    //数据转换服务
    function transformDataProvider(){
        return {
            $get:function(){
                 
                return  function(data) {
                    // console.log(data)
                            return {
                                "magazine": {
                                    // "music":{
                                    //     "musicId":data.music.musicId,
                                    //     "src":data.music.musicId
                                    // },
                                    
                                    // fenxiangnote:data.wx.con||'',
                                    // fenxiangtitle:data.wx.title||'',
                                    // fenxiangimg:data.wx.img||'',
                                    "sound":data.music.src,
                                    "id":data.id,
                                    // "wgUser":data.wgUser,
                                    "varName":data.name,
                                    "pageslist": _.map(data.pages,
                                        function(item, index) {
                                            var page= {
                                                "effects":_.map(item.effects,
                                                    function(item,index){
                                                        var effects={};
                                                        effects.type=item.type;
                                                        effects.value=JSON.stringify(item.value);
                                                        // item.value=JSON.stringify(item.value);
                                                        // console.log(item.value);
                                                        return effects;
                                                    }),
                                                "backgroundImage": {
                                                    "image": {
                                                        "url": item.background.style.backgroundImage || "",
                                                        "sourceName": "",
                                                        "uid": "",
                                                        "type": ""
                                                    },
                                                    "fillcolor":item.background.style.backgroundColor||"",
                                                    "pageId": index,
                                                    "opacityOpacity": item.background.style.opacity||"",
                                                    "fuzzy": "",
                                                    "id": index
                                                },
                                                "elementsList": _.map(item.floatages,
                                                    function(item, index) {
                                                        var element;
                                                        switch (item.type) {
                                                            case 'image':
                                                                element = {
                                                                    "elementType": "img",
                                                                    "elementChild": {
                                                                        "fuzzyImg":0,
                                                                        "width":item.style.width,
                                                                        "height":item.style.height,
                                                                        "image": {
                                                                            "url": item.src,
                                                                            "sourceName": "",
                                                                            "uid": "",
                                                                            "id": "",
                                                                            "type": ""
                                                                        }
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "pageId": "",
                                                                    "opacityOpacity": item.style.opacity||"",
                                                                    "fillet": "",
                                                                    "rotation": "",
                                                                    "positionX": item.style.left||"",
                                                                    "positionY": item.style.top||"",
                                                                    "shadow": item.style.boxShadow||"",
                                                                    "id": ""
                                                                };
                                                                break;
                                                            case 'shape':
                                                                element = {
                                                                    "elementType": "shape",
                                                                    "elementChild": {
                                                                        "fillColor": item.style.backgroundColor||"",
                                                                        "styleId": "",
                                                                        "height": item.style.height||"",
                                                                        "width": item.style.width||""
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "opacityOpacity": item.style.opacity||"",
                                                                    "fillet": item.style.backgroundColor||"",
                                                                    "rotation": "",
                                                                    "positionX": item.style.left||"",
                                                                    "positionY": item.style.top||"",
                                                                    "shadow": item.style.boxShadow||"",
                                                                    "id": ""
                                                                };
                                                                break;
                                                            case 'btn':
                                                                element = {
                                                                    "elementType": "btn",
                                                                    "elementChild": {
                                                                        "fontcolor": item.style.color||"",
                                                                        "fontsize":item.style.fontSize,
                                                                        "backgroundcolor": item.style.backgroundColor||"",
                                                                        "border": item.style.borderColor||"",
                                                                        "borderstyle": item.style.borderWidth||"",
                                                                        "bordercrude": item.style.borderStyle||"",
                                                                        "height": item.style.height||"",
                                                                        "width": item.style.width||"",
                                                                        "url": item.href||"",
                                                                        "context": item.value||""
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "height": item.style.height||"",
                                                                    "width": item.style.width||"",
                                                                    opacityOpacity: item.style.opacity||"",
                                                                    fillet: item.style.borderRadius||"",
                                                                    rotation: "",
                                                                    positionX: item.style.left||"",
                                                                    positionY: item.style.top||"",
                                                                    shadow: item.style.boxShadow||"",
                                                                    id: ""
                                                                };
                                                                break;
                                                            case 'text':
                                                                element = {
                                                                    "elementType": 'text',
                                                                    "elementChild": {
                                                                        "width":item.style.width,
                                                                        "height":item.style.height,
                                                                        "alignmentFunction": item.style.textAlign||"",
                                                                        "fontsize": item.style.fontSize||"",
                                                                        "border": item.style.borderColor||"",
                                                                        "bordercrude": item.style.borderStyle||"",
                                                                        "borderStyle": item.style.borderWidth||"",
                                                                        "fontstyle": item.style.fontStyle||"",
                                                                        "color": item.style.color||"",
                                                                        "backgroundColor": item.style.backgroundColor||"",
                                                                        "lineHeight": item.style.lineHeight||"",
                                                                        "content": item.value.join('##')||""
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "width":item.style.width,
                                                                    "height":item.style.height,
                                                                    "opacityOpacity": item.style.opacity||"",
                                                                    "fillet": "",
                                                                    "rotation": "",
                                                                    "positionX": item.style.left||0,
                                                                    "positionY": item.style.top||"",
                                                                    "shadow": item.style.boxShadow||"",
                                                                    "id": ""
                                                                };
                                                                break;
                                                        }
                                                        if(item.effects.length>0){//配合后台做数据检测才这样写的
                                                            element.styles=_.map(item.effects,
                                                                function(item,index){
                                                                    return {
                                                                        type:'action',
                                                                        key:item
                                                                    };
                                                                });
                                                        }
                                                        if(item.style.animationDuration){
                                                            element.animationDuration=item.style.animationDuration;
                                                        }
                                                        if(item.style.animationDelay){
                                                            element.animationDelay=item.style.animationDelay;
                                                        }
                                                        return element;
                                                    })
                                            }
                                            if(item.background.effects.length>0){//配合后台做数据检测才这样写的
                                                page.style=_.map(item.background.effects,
                                                    function(item,index){
                                                        return {
                                                            type:'action',
                                                            key:item
                                                        }
                                                    });
                                            }
                                            if(!page.backgroundImage.image.url){
                                                delete page.backgroundImage.image;
                                            }
                                            return page;
                                        })
                                }
                            }
                        }
            }
        }
    }
    // 涂抹服务
    function lotteryProvider(){
        return {
            $get:function(){
                function Lottery(node, cover, coverType, width, height, drawPercentCallback,scale,txt) {
                    //canvas
                    this.conNode = node; 

                    // 背景canvas
                    this.background = null;
                    this.backCtx = null;

                    // 蒙板canvas
                    this.mask = null;
                    this.maskCtx = null;

                    // 背景图
                    this.lottery = null;
                    this.lotteryType = 'image';

                    // 蒙板图
                    this.cover = cover || "#000"; 
                    this.coverType = coverType;
                    this.pixlesData = null;

                    // canvas宽高
                    this.width = width;
                    this.height = height;

                    this.lastPosition = null;
                    // 回调函数
                    this.drawPercentCallback = drawPercentCallback;

                    this.vail = false;
                    this.scale=scale;
                    this.txt=txt;
                }

                Lottery.prototype = {
                    // 创建元素
                    createElement: function (tagName, attributes) {
                        var ele = document.createElement(tagName);
                        for (var key in attributes) {
                            ele.setAttribute(key, attributes[key]);
                        }
                        return ele;
                    },

                    // 获取当前canvas透明像素的百分比
                    getTransparentPercent: function(ctx, width, height) {
                        // 获取画布的像素点
                        var imgData = ctx.getImageData(0, 0, width, height),
                            pixles = imgData.data,
                            transPixs = [];

                        // 计算画布中，透明程度（第四个值为透明度0-255）
                        for (var i = 0, j = pixles.length; i < j; i += 4) {
                            var a = pixles[i + 3];
                            if (a < 128) {
                                transPixs.push(i);
                            }
                        }
                        return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
                    },

                    // 重置画布
                    resizeCanvas: function (canvas, width, height) {
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').clearRect(0, 0, width, height);
                    },

                    resizeCanvas_w : function(canvas, width, height){
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').clearRect(0, 0, width, height);

                        // canvas画布，生成对应的DOM开始--(前者判断是否生成背景图)
                        if(this.vail) this.drawLottery();
                        else this.drawMask();
                    },

                    // 画布上画点
                    drawPoint: function (x, y, fresh) {
                        this.maskCtx.beginPath();
                        this.maskCtx.arc(x, y, 30, 0, Math.PI * 2);
                        this.maskCtx.fill();

                        // 蒙板-路径还是记录
                        this.maskCtx.beginPath();

                        // 画笔大小
                        this.maskCtx.lineWidth = 60;
                        // 前者是线的末端样式，后者是线连接处的样式---圆
                        this.maskCtx.lineCap = this.maskCtx.lineJoin = 'round';

                        // 画点
                        if (this.lastPosition) {
                            this.maskCtx.moveTo(this.lastPosition[0], this.lastPosition[1]);
                        }
                        this.maskCtx.lineTo(x, y);
                        this.maskCtx.stroke();

                        this.lastPosition = [x,y];

                        this.mask.style.zIndex = (this.mask.style.zIndex == 20) ? 21 : 20;
                    },

                    // 事件处理
                    bindEvent: function () {
                        var _this = this;
                        // 判断是否为移动端
                        var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
                        var clickEvtName = device ? 'touchstart' : 'mousedown';
                        var moveEvtName = device? 'touchmove': 'mousemove';
                        if (!device) {
                            var isMouseDown = false;
                            _this.conNode.addEventListener('mouseup', up, false);
                        } else {
                            _this.conNode.addEventListener("touchmove", move, false);
                            _this.conNode.addEventListener('touchend', end, false);

                        }
                        function up(e) {
                            e.preventDefault();

                            isMouseDown = false;
                            var per = _this.getTransparentPercent(_this.maskCtx, _this.width, _this.height);

                            if(per>=_this.scale){
                                // 执行回调函数
                                if(typeof(_this.drawPercentCallback)=='function') _this.drawPercentCallback();
                            }
                        }
                        function move(e) {
                                if (isMouseDown) {
                                    e.preventDefault();
                                }
                                if (e.cancelable) { e.preventDefault(); }else{window.event.returnValue = false;}
                            }

                        function end(e) {
                            isMouseDown = false;
                            var per = _this.getTransparentPercent(_this.maskCtx, _this.width, _this.height);
                            if(per>=_this.scale){
                                // 执行回调函数
                                if(typeof(_this.drawPercentCallback)=='function') _this.drawPercentCallback(_this.conNode,move,end);
                            }
                        }

                        // move事件来画点
                        this.mask.addEventListener(clickEvtName, function (e) {
                            e.preventDefault();

                            // 记录开始move
                            isMouseDown = true;

                            var x = (device ? e.touches[0].pageX : e.pageX||e.x);
                            var y = (device ? e.touches[0].pageY : e.pageY||e.y);

                            // 画点
                            _this.drawPoint(x, y,isMouseDown);
                        }, false);

                        this.mask.addEventListener(moveEvtName, function (e) {
                            e.preventDefault();

                            // 记录是否开始move
                            if (!isMouseDown)  return false; 
                            e.preventDefault();

                            var x = (device ? e.touches[0].pageX : e.pageX||e.x);
                            var y = (device ? e.touches[0].pageY : e.pageY||e.y);

                            // 画点
                            _this.drawPoint(x, y,isMouseDown);
                        }, false);
                    },

                    // 画背景图
                    drawLottery: function () {
                        if (this.lotteryType == 'image') {
                            var image = new Image(),
                                _this = this;
                            image.onload = function () {
                                this.width = _this.width;
                                this.height = _this.height;                
                                _this.resizeCanvas(_this.background, _this.width, _this.height);
                                _this.backCtx.drawImage(this, 0, 0, _this.width, _this.height);
                                _this.drawMask();
                            }
                            image.src = this.lottery;
                        } else if (this.lotteryType == 'text') {
                            this.width = this.width;
                            this.height = this.height;
                            this.resizeCanvas(this.background, this.width, this.height);
                            this.backCtx.save();
                            this.backCtx.fillStyle = '#FFF';
                            this.backCtx.fillRect(0, 0, this.width, this.height);
                            this.backCtx.restore();
                            this.backCtx.save();
                            var fontSize = 30;
                            this.backCtx.font = 'Bold ' + fontSize + 'px Arial';
                            this.backCtx.textAlign = 'center';
                            this.backCtx.fillStyle = '#F60';
                            this.backCtx.fillText(this.lottery, this.width / 2, this.height / 2 + fontSize / 2);
                            this.backCtx.restore();
                            this.drawMask();
                        }
                    },

                    // 画蒙板
                    drawMask: function() {
                        var _this=this;
                        if (this.coverType == 'color') {
                            this.maskCtx.fillStyle = this.cover;
                            this.maskCtx.fillRect(0, 0, this.width, this.height);
                            this.maskCtx.globalCompositeOperation = 'destination-out';
                        } else if (this.coverType == 'image'){
                            var image = new Image(),
                                _this = this;
                            image.onload = function () {
                                _this.resizeCanvas(_this.mask, _this.width, _this.height);

                                var android = (/android/i.test(navigator.userAgent.toLowerCase()));

                                _this.maskCtx.globalAlpha=0.98;
                                // _this.maskCtx.drawImage(this, 0, 0,_this.width, _this.height);
                                _this.maskCtx.drawImage(this,0,0,this.width,this.height,0,0,_this.width,_this.height);
                                
                                var fontSize = 50;
                                var txt = _this.txt;
                                var gradient=_this.maskCtx.createLinearGradient(0,0,_this.width,0);
                                    gradient.addColorStop("0","#fff");
                                    gradient.addColorStop("1.0","#000");

                                _this.maskCtx.font = 'Bold ' + fontSize + 'px Arial';
                                _this.maskCtx.textAlign = 'left';
                                _this.maskCtx.fillStyle = gradient;
                                txt&&_this.maskCtx.fillText(txt,_this.width/2-_this.maskCtx.measureText(txt).width/2, 100);

                                _this.maskCtx.globalAlpha=1;

                                _this.maskCtx.globalCompositeOperation = 'destination-out';
                            }
                            image.src = this.cover;
                        }
                    },

                    // 函数初始化
                    init: function (lottery, lotteryType) {
                        // 判断是否传入背景图参数，并储存值
                        // 生成背景图的DOM
                        if(lottery){
                            this.lottery = lottery;
                            this.lottery.width = this.width;
                            this.lottery.height = this.height;
                            this.lotteryType = lotteryType || 'image';

                            this.vail = true;
                        }
                        if(this.vail){
                            this.background = this.background || this.createElement('canvas', {
                                style: 'position:fixed;left:50%;top:0;width:640px;margin-left:-320px;height:100%;background-color:transparent;'
                            });
                        }

                        // 生成蒙板DOM
                        this.mask = this.mask || this.createElement('canvas', {
                            style: 'background-color:transparent;position:absolute;'
                        });
                        this.mask.classList.add('lottery');
                        this.mask.style.zIndex = 9999;

                        // 将目标wrapDOM的HTML内容全部清空--(canvas-clear）
                        if (true){
                            if(this.vail) this.conNode.appendChild(this.background);
                            this.conNode.appendChild(this.mask);
                            this.bindEvent();
                        }
                        if(this.vail) this.backCtx = this.backCtx || this.background.getContext('2d');
                        this.maskCtx = this.maskCtx || this.mask.getContext('2d');

                        // canvas画布，生成对应的DOM开始--(前者判断是否生成背景图)
                        if(this.vail) this.drawLottery();
                        else this.drawMask();

                        var _this = this;
                        window.addEventListener('resize',function(){
                            // canvas宽高
                            _this.width = document.documentElement.clientWidth;
                            _this.height = document.documentElement.clientHeight;

                            _this.resizeCanvas_w(_this.mask, _this.width, _this.height);
                        },false);
                    }
                }
                return Lottery;
            }
        }
    }
    //当前要制作的杂志服务
    function magaProvider(){
        return {
            $get:function(){
                var magaSuper={
                    addPage:function(){
                            this.pages.splice(this.active+1,0,{
                                    background:{
                                        effects:[],
                                        style:{},
                                    },
                                    floatages:[],
                                    effects:[],
                                    order:this.active===-1?0:(this.pages[this.active].order+1),
                                    uniqueId:_.uniqueId('page_')
                                })
                            this.active++;
                        }
                };
                return function(){
                    return Object.create(magaSuper,{
                        'pages':{
                            value:[],
                            writable:true,
                            configurable:true,
                            enumerable:true
                        }
                    });
                };
            }
        }
    }
    //本次应用周期内制作的杂志列表服务
    function magasProvider(){
        return {
            $get:function(){
                return {
                    swift:true,
                    magaList:[],
                    addMaga:function(newMaga){
                        newMaga.uniqueId=_.uniqueId('maga_');
                        this.magaList.push(newMaga);
                    },
                    getNewMaga:function(){
                        return this.magaList[this.magaList.length-1];
                    },
                    replaceImg:function(id,url){

                        var floatage=null;
                        _.each(this.getNewMaga().pages,
                            function(item,index){
                                _.each(item.floatages,
                                    function(item,index){
                                        if(item.uniqueId===id){
                                            item.src=url;
                                            floatage=item;
                                        }
                                    });
                            });
                        $scope.$apply(function(){
                                floatage.img_loading=true;
                            });
                        this.loading(floatage);
                        // document.querySelector('#'+id).src=url;
                    },
                    loading:function(floatage){
                         var img=new Image();
                         img.onload=function(){
                            $scope.$apply(function(){
                                floatage.img_loading=false;
                            });
                         }
                         img.src=floatage.src;
                    },
                    loadingBk:function(page,url){
                        var img=new Image();
                        img.onload=function(){
                            $scope.$apply(function(){
                                page.img_loading=false;
                            });
                        };
                        img.src=url;
                    },
                    uploadShareImg:function(url){
                        var maga=this.getNewMaga();
                        maga.wx.img=url;
                        var img=document.querySelector('.up_img');
                        if(img){
                            img.style.backgroundImage='url('+url+')';
                            img.style.backgroundSize='cover';
                        }
                    },
                    toShape:function(){
                        window.location.hash='/shapes';
                    },
                    addFloatage:function(page,url,type){
                        var maga=this.getNewMaga();
                        // var page=_.findWhere(maga.pages,{uniqueId:page});
                        var page=maga.pages[maga.active];
                        var floatage;
                        var _this=this;
                        // window.location.hash='/make';
                        window.$scope.$apply(function(){
                            if(type==="image"){
                                floatage={
                                    type:'image',
                                    style:{
                                        left:Math.random()*100+'px',
                                        top:200+Math.random()*200-100+'px',
                                        width:400+Math.random()*100-50+'px',
                                        height:'auto',
                                        color:'',
                                        opacity:''
                                    },
                                    src:url,
                                    effects:[],
                                    uniqueId:_.uniqueId('floatage_'),
                                    img_loading:true
                                };
                                _this.loading(floatage);
                                page.floatages.push(floatage);
                            }
                        });
                        if(type==='shape'){
                            floatage={
                                type:'image',
                                style:{
                                    left:Math.random()*100+'px',
                                    top:200+Math.random()*200-100+'px',
                                    width:400+Math.random()*100-50+'px',
                                    height:'auto',
                                    color:'',
                                    opacity:''
                                },
                                src:url,
                                effects:[],
                                uniqueId:_.uniqueId('floatage_'),
                                img_loading:true
                            };
                            _this.loading(floatage);
                            page.floatages.push(floatage);
                        }
                    },
                    replaceBk:function(id,url){
                        // _.each(this.getNewMaga().pages,
                        //     function(item,index){
                        //         if(item.uniqueId===id){
                        //             item.background.style.backgroundImage='url('+url+')';
                        //             document.querySelector('#'+id).style.backgroundImage='url('+url+')';
                        //         }
                        //     });
                        var _this=this;
                        var maga=this.getNewMaga();
                        var page=maga.pages[maga.active];
                        var target=document.querySelector('#'+page.uniqueId);
                        page.background.style.backgroundImage='url('+url+')';
                        $scope.$apply(function(){
                                page.img_loading=true;
                         });

                        this.loadingBk(page,url);
                        // page.background.style.backgroundSize='contain';
                        // page.background.style.backgroundPosition='center';
                        // page.background.style.backgroundRepeat='no-repeat';
                        if(target){
                            target.style.backgroundImage='url('+url+')';
                        }
                    },
                    setFloatageOrBk:function(type){
                        this.getNewMaga().flOrBk=type;
                    },
                    listen:function($scope){
                        window.aaa=$scope;
                    }
                };
            }
        }
    }
    //拖拽服务
    function flipProvider(){
        return {
            $get:function(){
                return function(){
                        var step=60,
                        target=null,
                        touch={},
                        hasDefault,
                        sensitivity=1,
                        stepY=66,
                        stepX=44,
                        supportTouch='ontouchstart' in window,
                        S=supportTouch?'touchstart':'mousedown',
                        M=supportTouch?'touchmove':'mousemove',
                        E=supportTouch?'touchend':'mouseup',
                        cb={
                          start:null,
                          move:null,
                          end:null,
                          left:null,
                          right:null,
                          up:null,
                          down:null
                        },
                        container=document,
                        _dir=[];
                        function swipeDirection(x1,x2,y1,y2,sensitivity) {
                            var _x=Math.abs(x1-x2),
                                _y=Math.abs(y1-y2),
                                dir=_x>=_y?(x1-x2>0?'left':'right'):(y1-y2>0?'up':'down');
                            if(sensitivity){
                                if(dir=='left'||dir=='right'){
                                    if(((_y/_x)>sensitivity)||_x<stepX){dir='';}
                                }else if(dir=='up'||dir=='down'){
                                    if(((_x/_y)>sensitivity)||_y<stepY){dir='';}
                                }
                            }

                            return dir;
                        }
                        function _start(e){
                            var pos=(e.touches&&e.touches[0])||e;
                            touch.x1=pos.pageX;
                            touch.y1=pos.pageY;
                            e.x=touch.x1;
                            e.y=touch.y1;
                            typeof cb.start==='function'&&cb.start(e);
                            container.addEventListener(M,_move,false);
                            container.addEventListener(E,_end,false);
                        }
                        function _move(e){
                            var pos=(e.touches&&e.touches[0])||e;
                            touch.x2=pos.pageX;
                            touch.y2 = pos.pageY;
                            e.x=touch.x2;
                            e.y=touch.y2;
                            e._x=e.x-touch.x1;
                            e._y=e.y-touch.y1;
                            if(!hasDefault){e.preventDefault();}
                            typeof cb.move==='function'&&cb.move(e);
                        }
                        function _end(e){
                            e.x=touch.x2;
                            e.y=touch.y2;
                            e._x=e.x-touch.x1;
                            e._y=e.y-touch.y1;
                            if((touch.x2&&Math.abs(touch.x1-touch.x2)>step)||(touch.y2&&Math.abs(touch.y1-touch.y2)>step)){
                                var dir_=swipeDirection(touch.x1,touch.x2,touch.y1,touch.y2,sensitivity);
                                typeof cb[dir_] === 'function'&&cb[dir_](e);
                            }
                            typeof cb.end==='function'&&cb.end(e);
                            container.removeEventListener(M,_move,false);
                            container.removeEventListener(E,_end,false);
                            touch.x1=null;
                            touch.y1=null;
                            touch.x2=null;
                            touch.y2=null;
                        }
                        function flip(el,hasDefault, sensitivity) {
                            if(!el)return;
                            el.addEventListener(S,_start,false);
                        }
                        function flipRevoke(el) {
                            if(!el){return;}
                            el.removeEventListener(S,_start,false);
                            el.removeEventListener(M,_move,false);
                            el.removeEventListener(E,_end,false);
                        }


                        function render(target,hasDefault,sensitivity){
                            flip(target,hasDefault,sensitivity);
                        }

                        return {
                          target:null,
                          conf:{},
                          init:function(opts){
                              container=opts.container||document;                       
                              this.target=target=opts.target;
                              step=opts.step||step;
                              stepX=opts.stepX||stepX;
                              stepY=opts.stepY||stepY;
                              sensitivity=opts.sensitivity||sensitivity;
                              var dir=['up','down','left','right','start','move','end'],l=dir.length;
                              while(l--){
                                if(opts[dir[l]]){
                                  cb[dir[l]]=opts[dir[l]];
                                  _dir.push(dir[l]);
                                }
                              }
                              render(target,opts.hasDefault,sensitivity);
                          },
                          cancel:function(){
                              flipRevoke(target);
                          }
                        }
                    }

            }
        }
    }
    //tap服务
    function tapProvider(){
        return {
            $get:function(){
                    function Tap(){
                        var touch={};
                        var callback;
                        var action_click='ontouchstart' in window?'touchstart':'mousedown';
                        var action_move='ontouchmove' in window?'touchmove':'mousemove';
                        var action_up='ontouchend' in window?'touchend':'mouseup';

                        function rendor(target,callback,container){
                            console.log(action_click)
                            target.addEventListener(action_click,function(e){
                                console.log(3);
                                var pos=(e.touches&&e.touches[0])||e;
                                touch.x1=pos.pageX;
                                touch.y1=pos.pageY;
                                container.addEventListener(action_move,move,false);
                                container.addEventListener(action_up,end,false);
                            },false);

                            function move(e){
                                var pos=(e.touches&&e.touches[0])||e;
                                touch.x2=pos.pageX;
                                touch.y2 = pos.pageY;
                            }
                            function end(e){
                                touch.x3=touch.x2;
                                touch.y3=touch.x2;
                                var x=touch.x2-touch.x1;
                                var y=touch.y2-touch.y1;
                                if((Math.abs(x)<30&&Math.abs(y)<30)||typeof touch.x2==='undefined'){
                                    alert(3);
                                    callback(e);
                                }
                                container.removeEventListener(action_move,move,false);
                                container.removeEventListener(action_up,end,false);
                                touch={};
                            }
                        }
                        return {
                            init:function(opts){
                                var target=this.target=opts.target;
                                callback=opts.fn;
                                rendor(target,callback,opts.container);
                            }
                        }
                    }
                    return Tap;
            }
        }
    }
}));