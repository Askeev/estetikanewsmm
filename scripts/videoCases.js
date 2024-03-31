document.addEventListener('DOMContentLoaded',
 function(){
    "use strict";
    let videoButton1 = document.getElementById('videoButton1');
    let video1 = document.getElementById('video21');
    let videoFor1 = document.getElementById('videoFor21');
    videoButton1.addEventListener("click",
    function(){
        video1.style.display = 'flex';
        videoFor1.play();
    })
    videoFor1.addEventListener('ended', function(){
        video1.style.display = 'none';
    })
 })