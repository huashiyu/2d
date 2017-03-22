window.onload=function(){
    //下雪
    var w=document.documentElement.clientWidth;
    var h=document.documentElement.clientHeight;
    var arr=[];

    for (i=0;i<100;i++) {
        var div=document.createElement("div");
        div.style.cssText="width:3px;height:8px;background:#fff;position: absolute;left:"+(50+(w-100)*Math.random())+"px;top:-20px;"
        div.style.transition="transform 2s linear"+" "+2*Math.random()+"s";
        document.body.appendChild(div);
        arr.push(div);
    }
    setTimeout(function(){
        for (i=0;i<arr.length;i++) {
            arr[i].style.transform="translate(0,"+h+"px)";

            arr[i].addEventListener("webkitTransitionEnd",function(){
                this.style.transform="translate(0,0)";
                this.style.transition="none";
                var that=this;
                setTimeout(function(){
                    that.style.transition="transform 2s linear"+" "+2*Math.random()+"s";
                    that.style.transform="translate(0,"+h+"px)";
//
                },0)
            })
        }
    },0)
}
