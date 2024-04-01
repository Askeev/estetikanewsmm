document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let openMenuButton = document.getElementById('openMenuButton');
    let menu = document.getElementById('menu');
    openMenuButton.addEventListener('click', function(){
        menu.style.display = 'flex';
    })
    menu.addEventListener('click', function(){
        menu.style.display = 'none';
    })
})