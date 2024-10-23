let unmute = document.querySelector(".ri-volume-up-line");
let mute   = document.querySelector(".ri-volume-mute-line");
let btn = document.querySelector("#mute");
let video = document.querySelector(".video");

let count = 0

btn.addEventListener("click",function(){
    if(count==0)
    {
        unmute.style.display="block";
        mute.style.display="none";
        video.muted=!video.muted;
        video.innerHTML.volume="100";
        count++;
    }
    else
    {
        unmute.style.display="none";
        mute.style.display="block";
        video.muted=!video.unmuted;
        video.innerHTML.volume="0";
        count--;
    }
    
});


let nav = document.querySelector("#nav");

window.addEventListener("scroll",function(){
    if(window.pageYOffset>1)
    {
        nav.style.backgroundColor="rgba(49, 31, 31, 0.516)";
        
    }
    else
    {
        nav.style.backgroundColor="black";
    }
});



