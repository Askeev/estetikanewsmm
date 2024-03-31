document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let stories = document.getElementById('stories');
    let neurButton = document.getElementById('neurButton');
    let kenButton = document.getElementById('kenButton');
    let imunButton = document.getElementById('imunButton');
    let visaButton = document.getElementById('visaButton');
    let closeStorieButton = document.getElementById('closeStorieButton');
    let storieVideo = document.getElementById('storieVideo');
    let storiesLine = document.getElementById('storiesLine');
    let prevStorie = document.getElementById('prevStorie');
    let nextStorie = document.getElementById('nextStorie');
    let neurLinks = ['./videos/2024-03-31 15.16.31.mp4','./videos/2024-03-31 15.17.22.mp4'];
    let kenLinks = ['./videos/2024-03-31 15.18.46.mp4'];
    let imunLinks = ['./videos/фин грам сж 1.mp4'];
    let visaLinks = ['./videos/виза сж.mp4'];
    let storieButtons = [
        {
            'button': neurButton,
            'links': neurLinks
        },
        {
            'button': kenButton,
            'links': kenLinks
        },
        {
            'button': imunButton,
            'links': imunLinks
        },
        {
            'button': visaButton,
            'links': visaLinks
        },
    ]


    
    for(let y = 0; y < storieButtons.length; y++){
        storieButtons[y].button.addEventListener('click', function(){
            let line = ''; 
            let index = 0;// Объявляем переменную line за пределами цикла
            for(let i = 0; i < storieButtons[y].links.length; i++){ // Исправляем опечатку: заменяем neurLinks,length на neurLinks.length
                line += '<div class="w-full h-[2px] bg-gray-400"></div>'; // Используем оператор += для добавления новой строки к переменной line
            }
            storiesLine.innerHTML = line; // Устанавливаем содержимое storiesLine равным значению переменной line
            stories.style.display = 'flex';
            storieVideo.src = storieButtons[y].links[index];
            storieVideo.play();
            nextStorie.addEventListener('click', function(){
                index++;
                if(index > storieButtons[y].links.length-1){
                    stories.style.display = 'none';
                    storieVideo.pause();
                    index = 0;
                }
                else{
                    storieVideo.src = storieButtons[y].links[index];
                    storieVideo.play();
                    console.log('ghgh');
                }
                
            })
            storieVideo.addEventListener('ended', function(){
                index++;
                if(index > storieButtons[y].links.length-1){
                    stories.style.display = 'none';
                    storieVideo.pause();
                    index = 0;
                }
                else{
                    storieVideo.src = storieButtons[y].links[index];
                    storieVideo.play();
                    console.log('ghgh');
                }
            })
            prevStorie.addEventListener('click', function(){
                index--;
                if(index < 0){
                    index = 0;
                }
                else{
                    storieVideo.src = storieButtons[y].links[index];
                    storieVideo.play();
                    console.log('ghgh');
                }
            })
        }); 
    }
    

    stories.addEventListener('click', function(){
        if(event.target === stories){
            stories.style.display = 'none';
            storieVideo.pause();
        }
        
    })
    closeStorieButton.addEventListener('click', function(){
        stories.style.display = 'none';
        storieVideo.pause();
    })

})