document.addEventListener('DOMContentLoaded',
 function(){
    "use strict";
    let videoButton1 = document.getElementById('videoButton1');
    let videoButton2 = document.getElementById('videoButton2');
    let videoButton3 = document.getElementById('videoButton3');
    let videoButton4 = document.getElementById('videoButton4');
    let videoButton5 = document.getElementById('videoButton5');
    let videoButton6 = document.getElementById('videoButton6');
    let videoButton7 = document.getElementById('videoButton7');
    let videoButton8 = document.getElementById('videoButton8');
    let video1 = document.getElementById('video21');
    let videoFor1 = document.getElementById('videoFor21');
    let buttons = [
        {
            'button':videoButton1,
            'src':'./videos/фин грам сж 1.mp4'
        },
        {
            'button':videoButton2,
            'src':'./videos/нейр сж 6.mp4'
        },
        {
            'button':videoButton3,
            'src':'./videos/нейр сж 7.mp4'
        },
        {
            'button':videoButton4,
            'src':'./videos/2024-03-31 15.17.22.mp4'
        },
        {
            'button':videoButton5,
            'src':'./videos/2024-03-31 15.16.31.mp4'
        },
        {
            'button':videoButton6,
            'src':'./videos/2024-03-31 15.18.46.mp4'
        },
        {
            'button':videoButton7,
            'src':'./videos/виза сж.mp4'
        },
        {
            'button':videoButton8,
            'src':'./videos/2024-03-31 15.19.31.mp4'
        },
    ]

    for (let i =0; i<buttons.length; i++){
        buttons[i].button.addEventListener("click",
        function(){
            videoFor1.src = buttons[i].src;
            video1.style.display = 'flex';
            videoFor1.play();
        })
    }
    videoFor1.addEventListener('ended', function(){
        video1.style.display = 'none';
    })
    video1.addEventListener('click', function(){
        if(event.target === video1){
            videoFor1.pause();
            video1.style.display = 'none';
        }
    })

 })