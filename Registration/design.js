var m = document.getElementById("indv");
var g = document.getElementById("group");
var c = document.getElementById("floating");
var f1 = document.getElementById("ind-form");
var b1 = document.getElementById("btn1");
var b2 = document.getElementById("back1");
var click = false;
var y = document.getElementById("main");
var f2 = document.getElementById("group-form");
var b3 = document.getElementById("btn3");
var b4 = document.getElementById("btn4");
var a = document.getElementById("container");
var o1 = document.getElementById("other1");
var o2 = document.getElementById("other2");
var d = document.getElementById("des");
var mem_add =  document.getElementById("add");
var form = document.getElementById("memb-form");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var i = 5;
m.addEventListener("click",function(){

    if(!click){
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
        if (window.innerWidth <= 600) {
            setTimeout(function() {
                c.style.opacity=0;}, 2000);
        }

        setTimeout(function() {
            f1.style.opacity="1";
            m.style.display="none";
            g.style.display="none";
            }, 500);
        
        f1.style.transition="0.5s all ease-out";
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

        f1.style.display = "flex";
        click = true
    }
})

b2.addEventListener("click",function(){
    if(e= true){
        c.style.opacity=1;
        m.style.cursor="pointer";
        g.style.cursor="pointer";
        if (window.innerWidth <= 600) {
            m.style.display="inline-block";
            g.style.display="inline-block";
        }
        else{
            m.style.display="block";
            g.style.display="block";
        }
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
        setTimeout(function() {
            f1.style.display = "none";
            m.style.opacity=1;
            g.style.opacity=1;
            }, 500);
        
        click = false
    }
})
g.addEventListener("click",function(){
    if(!click){
        m.style.cursor="default";
        g.style.cursor="default";
        m.style.opacity=0;
        g.style.opacity=0;
        a.style.transition="all 0.2s ease-out";
        g.style.transition="0.3s all ease-out";
        m.style.transition="0.3s all ease-out";
        m.style.transitionDelay="0.2s";
        a.style.height="200vh";
        if (window.innerWidth <= 600) {
            a.style.backgroundImage = "linear-gradient( to right bottom , rgba(255, 255, 255,0.7),rgba(225, 176, 111,0.7)),url(\"Untitled-2-01.png\")";
        }
        else{
            a.style.backgroundImage = "linear-gradient( to right bottom , rgba(255, 255, 255,0.7),rgba(225, 176, 111,0.7)),url(\"43-01-01.png\")";
        }
        y.style.height="75rem";
        c.style.height="80rem";
        c.style.animation = "float 2s";
        c.style.animationDelay = "0.3s";
        c.style.animationFillMode="forwards";
        f1.style.opacity="0";
        b1.style.opacity="0";
        b2.style.opacity="0";
        f2.style.zIndex="0";
        if (window.innerWidth <= 600) {
           setTimeout(function() {
                c.style.opacity=0;}, 2000);
        }
        setTimeout(function() {
            f2.style.opacity="1";
            m.style.display="none";
            g.style.display="none";
            }, 500);
        
        f2.style.transition="all 0.5s ease-out";
        f2.style.transitionDelay="1s";
        b3.style.opacity="100";
        b3.style.transition="0.3s all ease-out";
        b3.style.transitionDelay="1.8s";
        b4.style.opacity="100";
        b4.style.transition="0.3s all ease-out";
        b4.style.transitionDelay="1.8s";
        d.innerHTML="Team Registration";
        f2.style.display = "flex";
        click = true;
    }
})
b3.addEventListener("click",function(){
    c.style.opacity=1;
    m.style.cursor="pointer";
    g.style.cursor="pointer";
    a.style.transition="all 0.2s ease-out";
    m.style.transition="all 0.3s ease-out";
    g.style.transition="all 0.3s ease-out";
    m.style.transitionDelay="1.6s";
    g.style.transitionDelay="1.6s";
    console.log(window.innerWidth);
    if (window.innerWidth <= 600) {
        m.style.display="inline-block";
        g.style.display="inline-block";
        a.style.backgroundImage = "linear-gradient( to right bottom , rgba(255, 255, 255,0.7),rgba(225, 176, 111,0.7)),url(\"Untitled-2-01.png\")";
    }
    else{
        m.style.display="block";
        g.style.display="block";
        a.style.backgroundImage = "linear-gradient( to right bottom , rgba(255, 255, 255,0.7),rgba(225, 176, 111,0.7)),url(\"11-01-01.png\")";
    }
    a.style.height="100vh";
    y.style.height="35rem";
    c.style.height="40rem";
    c.style.animation = "back 2s";
    c.style.animationDelay = "0.3s";
    c.style.animationFillMode="backwards";
    f2.style.opacity="0";
    f2.style.transition="all 0s ease-out";
    b3.style.opacity="0";
    b3.style.transition="all 0.3s ease-out";
    b4.style.opacity="0";
    b4.style.transition="all 0.3s ease-out";
    d.innerHTML="Select if you are one participant or you have a team to register.";
    setTimeout(function() {
            f2.style.display = "none";
            m.style.opacity=1;
            g.style.opacity=1;

            }, 500);
    
    click = false;
});


mem_add.addEventListener("click", function(){
    if (i == 8) { return;}
    if(i==7){document.getElementById('dep-form2').style.display="none";}
    
    var div = document.createElement("div");
    div.classList = "form-group";
    div.innerHTML = "<label >"+i+"th Member</label><br>  <input name=\"name"+i+"\" type=\"text\" placeholder=\"Enter Name\"><br><label>Phone</label><br><input  name=\"phone"+i+"\" type=\"text\" placeholder=\"Phone Number\"><br>";
    form.appendChild(div);
    if (window.innerWidth <= 600) {
        y.style.height= 75+(i-4)*10 + "rem";
    }
    else {
        y.style.height= 75+(i-4)*9 + "rem";
    }
    a.style.height=  200 +(i-4)*8 +"vh";
    i = i+1;
});
b1.onclick = ()=>{form1.submit();};

b4.onclick = ()=>{form2.submit();};