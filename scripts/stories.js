document.addEventListener('DOMContentLoaded', function(){
    "use strict";
    let stories = document.getElementById('stories');
    let neurButton = document.getElementById('neurButton');
    let kenButton = document.getElementById('kenButton');
    // let imunButton = document.getElementById('imunButton');
    let visaButton = document.getElementById('visaButton');
    let closeStorieButton = document.getElementById('closeStorieButton');
    let storiesImages = document.getElementById('storiesImages');
    let storiesLine = document.getElementById('storiesLine');
    let prevStorie = document.getElementById('prevStorie');
    let nextStorie = document.getElementById('nextStorie');
    let numberOfStorie = document.getElementById('numberOfStorie');
    let amountOfStorie = document.getElementById('amountOfStorie');
    let varLines = document.getElementById('varLines');
    let neurLinks = ['./imgs/neurt1.png','./imgs/neurt2.png'];
    let kenLinks = ['./imgs/keni1.png','./imgs/keni2.png'];
    // let imunLinks = ['./imgs/imun1.mp4','./imgs/imun2.mp4'];
    let visaLinks = ['./imgs/visas1.png','./imgs/visas2.png',];
    let storieButtons = [
        {
            'button': neurButton,
            'links': neurLinks
        },
        {
            'button': kenButton,
            'links': kenLinks
        },
        // {
        //     'button': imunButton,
        //     'links': imunLinks
        // },
        {
            'button': visaButton,
            'links': visaLinks
        },
    ]


    
    for(let y = 0; y < storieButtons.length; y++){
        storieButtons[y].button.addEventListener('click', function(){
            let line = ''; 
            let index = 0;// Объявляем переменную line за пределами цикла
            for(let i = 0; i < storieButtons[y].links.length; i++){
                let varLine = document.createElement('div')
                varLine.className = 'h-[2px] w-[48px] bg-slate-400';
                varLine.id = 'varLine'+(i+1);
                varLines.appendChild(varLine);
            }
            for(let i = 0; i < storieButtons[y].links.length; i++){
                if (i<= index){
                    document.getElementById('varLine'+(i+1)).style.backgroundColor = 'white';
                }else{
                    document.getElementById('varLine'+(i+1)).style.backgroundColor = 'rgb(148 163 184)';
                }
            }
            storiesLine.innerHTML = line; // Устанавливаем содержимое storiesLine равным значению переменной line
            stories.style.display = 'flex';
            setTimeout(function(){
                stories.style.opacity = '1';
            }, 100)
            numberOfStorie.innerHTML = index+1;
            amountOfStorie.innerHTML = storieButtons[y].links.length;
            storiesImages.src = storieButtons[y].links[index];
            
            nextStorie.addEventListener('click', function(){
                index++;
                numberOfStorie.innerHTML = index+1;
                for(let i = 0; i < storieButtons[y].links.length; i++){
                    if (i<= index){
                        document.getElementById('varLine'+(i+1)).style.backgroundColor = 'white';
                    }else{
                        document.getElementById('varLine'+(i+1)).style.backgroundColor = 'rgb(148 163 184)';
                    }
                }
                if(index > storieButtons[y].links.length-1){
                    index = 0;
                    numberOfStorie.innerHTML = index+1;
                    for(let i = 0; i < storieButtons[y].links.length; i++){
                        if (i<= index){
                            document.getElementById('varLine'+(i+1)).style.backgroundColor = 'white';
                        }else{
                            document.getElementById('varLine'+(i+1)).style.backgroundColor = 'rgb(148 163 184)';
                        }
                    }
                    storiesImages.src = storieButtons[y].links[index];
                    
                }
                else{
                    storiesImages.src = storieButtons[y].links[index];
                    
                    console.log('ghgh');
                }
                
            })
            storiesImages.addEventListener('ended', function(){
                index++;
                numberOfStorie.innerHTML = index+1;
                for(let i = 0; i < storieButtons[y].links.length; i++){
                    if (i<= index){
                        document.getElementById('varLine'+(i+1)).style.backgroundColor = 'white';
                    }else{
                        document.getElementById('varLine'+(i+1)).style.backgroundColor = 'rgb(148 163 184)';
                    }
                }
                if(index > storieButtons[y].links.length-1){
                    index = 0;
                    numberOfStorie.innerHTML = index+1;
                    for(let i = 0; i < storieButtons[y].links.length; i++){
                        if (i<= index){
                            document.getElementById('varLine'+(i+1)).style.backgroundColor = 'white';
                        }else{
                            document.getElementById('varLine'+(i+1)).style.backgroundColor = 'rgb(148 163 184)';
                        }
                    }
                    storiesImages.src = storieButtons[y].links[index];
                    
                }
                else{
                    storiesImages.src = storieButtons[y].links[index];
                    
                    console.log('ghgh');
                }
            })
            prevStorie.addEventListener('click', function(){
                index--;
                numberOfStorie.innerHTML = index+1;
                for(let i = 0; i < storieButtons[y].links.length; i++){
                    if (i<= index){
                        document.getElementById('varLine'+(i+1)).style.backgroundColor = 'white';
                    }else{
                        document.getElementById('varLine'+(i+1)).style.backgroundColor = 'rgb(148 163 184)';
                    }
                }
                if(index < 0){
                    index = 0;
                    numberOfStorie.innerHTML = index+1;
                    for(let i = 0; i < storieButtons[y].links.length; i++){
                        if (i<= index){
                            document.getElementById('varLine'+(i+1)).style.backgroundColor = 'white';
                        }else{
                            document.getElementById('varLine'+(i+1)).style.backgroundColor = 'rgb(148 163 184)';
                        }
                    }
                }
                else{
                    storiesImages.src = storieButtons[y].links[index];
                    
                    console.log('ghgh');
                }
            })
        }); 
    }
    

    stories.addEventListener('click', function(){
        if(event.target === stories){
            stories.style.display = 'none';
            varLines.innerHTML='';
            
        }
        
    })
    closeStorieButton.addEventListener('click', function(){
        stories.style.opacity ='0';
        setTimeout(function(){
           stories.style.display = 'none'; 
        },700)
        varLines.innerHTML='';
       
    })

})