/* 
*
*
* Egzzzz
*
*
*/

let basketImg = document.querySelector('#basket');
let width = basketImg.width;
let left = basketImg.style.left;

let score = 0;
let stop = false;
let allDroppedIntervals = [];
let allMovingIntervals = [];
// let music = document.createElement('embed');
// music.src="fluffing-a-Duck.mp3";
// // music.hidden = false;
// music.setAttribute('autostart',"true");
// music.loop = true
// console.log(music)

let playNow = function(){
    backToDefault(false,true);
    // document.body.append(music)
    // music.autostart="true";

    function handlePlay(){
        document.querySelector('video').muted=false;
        document.querySelector('video').play=true;
    }

    let intervalDropEggId = setInterval( function(){
        
        allDroppedIntervals.push(intervalDropEggId);

        let randLeft = Math.floor(Math.random() * 1250); // for new egg
        let randTop = Math.ceil(Math.random() * 100); // for new egg

        let egg = document.createElement('img');
        egg.src="egg.png";
        egg.classList.add("egg");
        egg.style.width="80px";
        egg.style.padding='10px';
        egg.style.height="90px";
        egg.style.borderRadius="50%";
        egg.style.left = `${randLeft}px`;
        egg.style.top = `${randTop}px`;
        
        basketImg.insertAdjacentElement('beforebegin',egg);
        
        moveEgg(egg,randTop,intervalDropEggId);
        // let result = checkTouching(egg,basketImg);
        
    },1000);

    document.addEventListener('mousemove',function(e){
    
        moveImage(e,width,stop);
    
    });
}

playNow();