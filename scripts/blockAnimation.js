document.addEventListener('DOMContentLoaded', function(){
    let first = document.getElementById('firstAnimated');
    let second = document.getElementById('secondAnimated');
    let third = document.getElementById('thirdAnimated');
    let fourth = document.getElementById('fourthAnimated');
    let fifth = document.getElementById('fifthAnimated');
    let greenMark = document.getElementById('greenAnimated');
    
    setTimeout(function(){
        first.style.top = '0';
    }, 5200);
    setTimeout(function(){
        second.style.top = '0';
    }, 5300);
    setTimeout(function(){
        third.style.top = '0';
    }, 5400);
    setTimeout(function(){
        fourth.style.top = '0';
    }, 5600);
    setTimeout(function(){
        fifth.style.top = '0';
    }, 5800);
    setTimeout(function(){
        fifth.style.top = '0';
    }, 6000);
    setTimeout(function(){
        greenMark.style.left = '0';
    }, 6500);
})