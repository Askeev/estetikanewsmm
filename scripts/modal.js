document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let modalDialog = document.getElementById('modalDialog');
    let modal = document.getElementById('modal');
    let openModalButton1 = document.getElementById('openModalButton1');
    let openModalButton2 = document.getElementById('openModalButton2');
    let openModalButton3 = document.getElementById('openModalButton3');
    let openModalButton4 = document.getElementById('openModalButton4');
    let openModalButton5 = document.getElementById('openModalButton5');
    let openModalButton6 = document.getElementById('openModalButton6');
    let openModalButton7 = document.getElementById('openModalButton7');
    let closeModalButton = document.getElementById('closeModal');
    let openModalButtons = [openModalButton1, openModalButton2, openModalButton3, openModalButton4, openModalButton5, openModalButton6, openModalButton7];
    

    function openModal(){
        modal.style.display = 'flex'
        setTimeout(function(){
            modalDialog.style.height = '50%';
        }, 200);
    }
    function closeModal(){
        if (event.target === modal || event.target ===closeModal) {
            modalDialog.style.height = '0';
            setTimeout(function(){
                modal.style.display = 'none';;
            }, 500);
        }
    }
    for (let i = 0; i < openModalButtons.length; i++){
        openModalButtons[i].addEventListener('click', openModal);
    }
    modal.addEventListener('click', closeModal);
    closeModalButton.addEventListener('click', closeModal)
    
    
})