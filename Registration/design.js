var m = document.getElementById("indv");
var g = document.getElementById("group");
var c = document.getElementById("floating");
m.addEventListener("click",function(){
    if(e= true){
        m.style.opacity=0;
        g.style.opacity=0;
        m.style.transition="0.3s all ease-out";
        g.style.transition="0.3s all ease-out";
        g.style.transitionDelay="0.2s";
        c.style.animation = "float 2s";
        c.style.animationDelay = "0.3s";
        c.style.animationFillMode="forward";

    }
})