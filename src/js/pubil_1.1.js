function move(dom,attr,target,fn){
    /* 
    move:
        实现dom这个节点的attr属性缓动到target位置（实现div这个节点缓慢移动）
    形参：
        dom：元素节点
        attr：要缓动的属性，字符串
        target：属性要运动到的目标位置，数值型，如果是透明度请乘以100传入
        fn：是一个函数，这个函数会在动画完成之后执行，是可选参数
    */
   //在函数内部定义的timer是局部变量，只能在本次调用的时候获得，下次调用就会重新产生一个timer

   clearInterval(dom.timer);
   dom.timer=setInterval(function(){
        if(attr=="opacity"){
            var start = parseInt(getStyle(dom,attr)*100);
        }
        else if(attr=="zIndex"){
            var start = attr;
        }
        else{
            var start = parseInt(getStyle(dom,attr));
        }
        var speed = (target - start)/10;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);

        var next = start+speed;

        if(attr=="opacity"){
            dom.style[attr]=next/100;
            dom.style.filter = "alpha(opacity="+next+")"
        }
        else if(attr=="zIndex"){
            dom.style[attr]=next;
        }
        else{
            dom.style[attr]=next+"px";
        }

        if(target==next){
            clearInterval(dom.timer);
            if(fn){
                fn();
            }
        }
   },1000/60)
}


function animation(dom,json,callback){
    /* 
        animation:
            实现dom元素缓动到json里面定义的位置
        形参：
            dom：要运动的节点
            json：
                格式如：{left：800，top：600，opacity：50，zIndex：90000}，这个对象用于定义要运动到的目标集合
                属性名要求驼峰命名
                如果属性是透明度，目标值要乘以100传入
            callback：运动完以后调用的函数，可选
    */

    clearInterval(dom.timer);
    dom.timer=setInterval(function(){
        var flag = true;
        //json里面有几个键值对，就要运动几次，那么就需要遍历json对象
        for(key in json){
            var target = json[key];
            if(key=="opacity"){
                var start = parseInt(getStyle(dom,key)*100);
            }
            else if(key=="zIndex"){
                var start =json[key];//如果是zIndex,他是不需要运动的，所以设置速度为0，start==target；
            }
            else{
                var start = parseInt(getStyle(dom,key));
            }

            var speed = (target-start)/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            var next = start+speed;

            if(key=="opacity"){
                dom.style.opacity=next/100;
                dom.style.filter="alpha(opacity="+next+")"
            }
            else if(key=="zIndex"){
                dom.style.zIndex = next;
            }
            else{
                dom.style[key]=next+"px";
            }

            if(next!=target){
                flag=false;
            }
        }

        if(flag==true){
            clearInterval(dom.timer);
            if(callback){
                callback();
            }
        }
    },1000/60)
}

//为了考虑兼容性，单独封装一个方法，用于获取元素的某个属性值，并返回
function getStyle(dom,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(dom,null)[attr];
    }else{
        return dom.currentStyle[attr];
    }
}

//获取页面滚动的距离
function getScroll(){
    return{
        left:document.body.scrollLeft||document.documentElement.scrollLeft,
        top:document.body.scrollTop||document.documentElement.scrollTop
    }
}

// 获取当前系统时间
function getTime() {
    var time = new Date();

    var h = time.getHours();
    h = h < 10 ? "0" + h : h

    var m = time.getMinutes();
    m = m < 10 ? "0" + m : m

    var s = time.getSeconds()
    s = s < 10 ? "0" + s : s

    return h + ' : ' + m + ' : ' + s
}