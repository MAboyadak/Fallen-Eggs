
/*
*
*
*   Eggs game Functions
*
*
*/
// Helper functions

function backToDefault(stopBool,removeBool){
    score=0;
    stop= stopBool;
    // music.autostart = true;
    // music.loop = true;
    if(removeBool){
        let eggs = document.querySelectorAll('.egg')
        eggs.forEach(e=>e.remove())
    }
    allMovingIntervals.forEach(i=>clearInterval(i))
    allDroppedIntervals.forEach(i=>clearInterval(i))
}
//


/*
*
*/
//


function moveImage(e,width,stop){
    if(stop){
        return
    }
    left = e.x;
    basketImg.style.left = `${left}px`;

    if( left+width >= window.innerWidth){
        basketImg.style.left = (window.innerWidth-width)+'px';  
    }
}

function moveEgg(eggObj,top){

    let moveEggIntervalId = setInterval(function(){

        allMovingIntervals.push(moveEggIntervalId);

        top+=10;
        
        if(top < (window.innerHeight-parseInt(eggObj.style.height)) ){
            eggObj.style.top=`${top}px`;
        }

        let result = checkTouching(eggObj,basketImg);

        if(result === "untouched"){

            stop = true;
            result = "";

            // allMovingIntervals.forEach(i=>clearInterval(i))
            // allDroppedIntervals.forEach(i=>clearInterval(i))
            
            let eggs = document.querySelectorAll('.egg');
            eggs.forEach(e=>e.src='brokenegg.png')
            
            if(confirm(`Your score is : ${score} do you want play again ?`)){
                backToDefault(false,true);
                return playNow();
            }else{
                backToDefault(true,false);
                return
            }
  
        }else if(result==="touched"){
            clearInterval(moveEggIntervalId);
            eggObj.remove();
            score++;
        }

    },50);
        
}

// check touching two images
function checkTouching(fallingObj,bottomObj){

    if(parseInt(fallingObj.style.top)+parseInt(fallingObj.style.height) >= parseInt(bottomObj.style.top)
    ){
        // if(parseInt(fallingObj.style.top)+parseInt(fallingObj.style.height) >= parseInt(bottomObj.style.top) + 20){
        // console.log(parseInt(fallingObj.style.top)+parseInt(fallingObj.style.height));
        // console.log(parseInt(bottomObj.style.top) + 50);
        if(parseInt(fallingObj.style.top)+parseInt(fallingObj.style.height) >= window.innerHeight - 40)
        {
            return "untouched"
        }else{
            if(
                ( (parseInt(fallingObj.style.left) + parseInt(fallingObj.style.width) >= parseInt(bottomObj.style.left) )
                && (parseInt(fallingObj.style.left) <= parseInt(bottomObj.style.left) + parseInt(bottomObj.width) ) )
            )
            {
                return "touched";
            }
        }
        
    }
}