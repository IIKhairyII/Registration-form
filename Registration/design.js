var m = document.getElementById("indv");
var g = document.getElementById("group");
var c = document.getElementById("floating");
var f1 = document.getElementById("ind-form");
var b1 = document.getElementById("btn1");
var b2 = document.getElementById("back1");
var y = document.getElementById("main");
var f2 = document.getElementById("group-form");
var b3 = document.getElementById("btn3");
var b4 = document.getElementById("btn4");
var a = document.getElementById("container");
var o1 = document.getElementById("other1");
var o2 = document.getElementById("other2");
var d = document.getElementById("des");
m.addEventListener("click",function(){
    if(e= true){
        m.style.cursor="default";
        g.style.cursor="default";
        m.style.opacity=0;
        g.style.opacity=0;
        m.style.transition="0.3s all ease-out";
        g.style.transition="0.3s all ease-out";
        g.style.transitionDelay="0.2s";
        c.style.animation = "float 2s";
        c.style.animationDelay = "0.3s";
        c.style.animationFillMode="forwards";
        f1.style.opacity="100";
        f1.style.transition="0.3s all ease-out";
        f1.style.transitionDelay="0.9s";
        b1.style.opacity="100";
        b1.style.transition="0.3s all ease-out";
        b1.style.transitionDelay="1.5s";
        b2.style.opacity="100";
        b2.style.transition="0.3s all ease-out";
        b2.style.transitionDelay="1.8s";
        b2.style.cursor="pointer";
        f2.style.zIndex="-1";
        d.innerHTML="Individual Registration";
    }
})

b2.addEventListener("click",function(){
    if(e= true){
        m.style.cursor="pointer";
        g.style.cursor="pointer";
        m.style.opacity=100;
        g.style.opacity=100;
        m.style.transition="0.3s all ease-out";
        g.style.transition="0.3s all ease-out";
        m.style.transitionDelay="1.6s";
        g.style.transitionDelay="1.6s";
        c.style.animation = "back 2s";
        c.style.animationDelay = "0.3s";
        c.style.animationFillMode="backwards";
        f1.style.opacity="0";
        f1.style.transition="0.3s all ease-out";
        b1.style.opacity="0";
        b1.style.transition="0.3s all ease-out";
        b2.style.opacity="0";
        b2.style.transition="0.3s all ease-out";
        b2.style.cursor="default";
        d.innerHTML="Select if you are one participant or you have a team to register.";
    }
})
g.addEventListener("click",function(){
    if(e= true){
        m.style.cursor="default";
        g.style.cursor="default";
        m.style.opacity=0;
        g.style.opacity=0;
        g.style.transition="0.3s all ease-out";
        m.style.transition="0.3s all ease-out";
        m.style.transitionDelay="0.2s";
        a.style.height="200vh";
        y.style.height="75rem";
        c.style.height="80rem";
        c.style.animation = "float 2s";
        c.style.animationDelay = "0.3s";
        c.style.animationFillMode="forwards";
        f1.style.opacity="0";
        b1.style.opacity="0";
        b2.style.opacity="0";
        f2.style.zIndex="0";
        f2.style.opacity="100";
        f2.style.transition="all 0.3s ease-out";
        f2.style.transitionDelay="1s";
        b3.style.opacity="100";
        b3.style.transition="0.3s all ease-out";
        b3.style.transitionDelay="1.8s";
        b4.style.opacity="100";
        b4.style.transition="0.3s all ease-out";
        b4.style.transitionDelay="1.8s";
        d.innerHTML="Team Registration";
    }
})
b3.addEventListener("click",function(){
    m.style.cursor="pointer";
    g.style.cursor="pointer";
    m.style.opacity=100;
    g.style.opacity=100;
    m.style.transition="0.3s all ease-out";
    g.style.transition="0.3s all ease-out";
    m.style.transitionDelay="1.6s";
    g.style.transitionDelay="1.6s";
    a.style.height="100vh";
    y.style.height="35rem";
    c.style.height="40rem";
    c.style.animation = "back 2s";
    c.style.animationDelay = "0.3s";
    c.style.animationFillMode="backwards";
    f2.style.opacity="0";
    f2.style.transition="0s all ease-out";
    b3.style.opacity="0";
    b3.style.transition="0.3s all ease-out";
    b4.style.opacity="0";
    b4.style.transition="0.3s all ease-out";
    d.innerHTML="Select if you are one participant or you have a team to register.";
})
