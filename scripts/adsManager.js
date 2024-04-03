document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let adsManager = document.getElementById('adsManager');
    let openAdsButtonNeur = document.getElementById('openAdsButtonNeur');
    let openAdsButtonKen = document.getElementById('openAdsButtonKen');
    let openAdsButtonImun = document.getElementById('openAdsButtonImun');
    let openAdsButtonVisa = document.getElementById('openAdsButtonVisa');
    let closeAdsButton = document.getElementById('closeAdsButton');
    let adsManagerMask = document.getElementById('adsManagerMask');
    let adsImg = document.getElementById('adsImg');
    let adsButtons = [openAdsButtonNeur, openAdsButtonKen, openAdsButtonImun, openAdsButtonVisa];
    let imgLinks = ['./imgs/adsNeur.png', './imgs/adsKen.jpeg', './imgs/adsImun.jpeg', './imgs/adsVisa.jpeg']

    for(let i = 0; i < adsButtons.length; i++){
        adsButtons[i].addEventListener('click', function(){
            adsImg.src = imgLinks[i];
            adsManager.style.display = 'flex';
            setTimeout(function(){
                adsManager.style.opacity = '1';
            },100)
        })
    }
    
    closeAdsButton.addEventListener('click', function(){
        adsManager.style.opacity = '0';
        setTimeout(function(){
            adsManager.style.display = 'none';
        },700)
    })
    adsManagerMask.addEventListener('click', function(event) {
        if (event.target === adsManagerMask) {
            adsManager.style.opacity = '0';
            setTimeout(function() {
                adsManager.style.display = 'none';
            }, 700);
        }
    });

})