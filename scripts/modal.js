document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let contentBlock = document.getElementById('content');
    let modalDialog = document.getElementById('modalDialog');
    let modal = document.getElementById('modal');
    let openModalButton2 = document.getElementById('openModalButton2');
    let openModalButton3 = document.getElementById('openModalButton3');
    let openModalButton4 = document.getElementById('openModalButton4');
    let openModalButton5 = document.getElementById('openModalButton5');
    let openModalButton6 = document.getElementById('openModalButton6');
    let openModalButton7 = document.getElementById('openModalButton7');
    let closeModalButton = document.getElementById('closeModal');
    let openSecondModal1 = document.getElementById('openSecondModal1');
    let modalText = document.getElementById('modalText');
    let modalTitle = document.getElementById('modalTitle');
    let openSecondModal2 = document.getElementById('openSecondModal2');

    let sendForm = document.getElementById('sendForm');
    let openModalButtons = [openModalButton2, openModalButton3, openModalButton4, openModalButton5, openModalButton6, openModalButton7];

    function openModal(){
        modal.style.display = 'flex';
        contentBlock.style.filter ='blur(4px)';
        setTimeout(function(){
            modalDialog.style.height = 'fit-content';
        }, 200);
    }
    function closeModal(){
        if (event.target === modal || event.target ===closeModalButton) {
            modalDialog.style.height = '0';
            contentBlock.style.filter ='none';
            setTimeout(function(){
                modal.style.display = 'none';
            }, 500);
            modalText.innerHTML = 'Наш менеджер ответит на все вопросы, подберет лучшее решение для вас.';
            modalTitle.innerHTML = 'Оставьте заявку';
        }
    }

    openSecondModal1.addEventListener('click', function(){
        modalText.innerHTML = 'Наш менеджер ответит на все вопросы и проведет презентацию нашего агентства.';
        modalTitle.innerHTML = 'Персональная презентация';
        openModal();
    })
    openSecondModal2.addEventListener('click', function(){
        modalText.innerHTML = 'Наш менеджер ответит на все вопросы и проведет презентацию нашего агентства.';
        modalTitle.innerHTML = 'Персональная презентация';
        openModal();
    })

    for (let i = 0; i < openModalButtons.length; i++){
        openModalButtons[i].addEventListener('click', openModal);
    }
    modal.addEventListener('click', closeModal);
    closeModalButton.addEventListener('click', closeModal)
    
    

    // sendForm.addEventListener('click', ()=>window.location.href = "./thanks.html")
})