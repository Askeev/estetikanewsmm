document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let first = document.getElementById('firstAnimated');
    let second = document.getElementById('secondAnimated');
    let third = document.getElementById('thirdAnimated');
    let fourth = document.getElementById('fourthAnimated');
    let fifth = document.getElementById('fifthAnimated');
    let greenMark = document.getElementById('greenAnimated');
    let greenMark1 = document.getElementById('greenAnimatedSecond')
    var myVideo = document.getElementById("video1");
    var myVideo2 = document.getElementById("video2");
    var myVideo3 = document.getElementById("video3");
    var myVideo4 = document.getElementById("video4");
    var myVideo5 = document.getElementById("video5");
    var myVideo6 = document.getElementById("video6");
    let openMenuButton = document.getElementById('openMenuButton');
    if (myVideo) {
        myVideo.muted = true; // Извините, аудиофилы, но видео нужно замутить для обеспечения автозапуска!
        myVideo.play();
        myVideo2.play();
        myVideo3.play();
        myVideo4.play();
        myVideo5.play();
        myVideo6.play();
    }

    
    
    setTimeout(function(){
        first.style.top = '0';
    }, 4500);
    setTimeout(function(){
        second.style.top = '0';
    }, 4600);
    setTimeout(function(){
        third.style.top = '0';
    }, 4700);
    setTimeout(function(){
        fourth.style.top = '0';
    }, 4900);
    setTimeout(function(){
        fifth.style.top = '0';
    }, 5100);
    setTimeout(function(){
        fifth.style.top = '0';
    }, 5300);
    setTimeout(function(){
        greenMark.style.left = '0';
    }, 5800);
    setTimeout(function(){
        greenMark1.style.left = '0';
    }, 6300);
})