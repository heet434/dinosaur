function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


const dino=document.getElementById("dino");
const cactus=document.getElementsByClassName("cactus");
const ground=document.getElementById("ground");

var score = 0;
var cacnum = 0;
var clicknum = 1;
x = ground.style.left.replace('px', '');
y = ground.style.width.replace('px', '');

dino.style.top='190px';
console.log(dino.style.top);  
p = Number(dino.style.top.replace('px',''));
pfix = p;  
console.log(pfix, typeof(pfix));
pmax = p-160; 
var move;  
var moveground = () => {
    
    move = setInterval(function () {
        x = x - 2;
        y = y + 2 ;
        ground.style.left = x + 'px';
        ground.style.width = y + 'px';
        // console.log(cactus .getBoundingClientRect().left); 
        var condition = dino.getBoundingClientRect().right > cactus[parseInt(score)].getBoundingClientRect().left && dino.getBoundingClientRect().bottom > cactus[parseInt(score)].getBoundingClientRect().top && dino.getBoundingClientRect().left < cactus[parseInt(score)].getBoundingClientRect().right;  
        if(condition)
            {
            clearInterval(move); 
            }
        else if( dino.getBoundingClientRect().right >=   cactus[parseInt(score)].getBoundingClientRect().left + 10 && dino.getBoundingClientRect().right <= cactus[parseInt(score)].getBoundingClientRect().left + 12){
            score= score+1   ;
            var kill = Math.round(score); 
            console.log(score); 
            document.getElementById('scorebox').innerText= 'Score :' + kill;    
        } 

        if(dino.getBoundingClientRect().right <= cactus[cacnum].getBoundingClientRect().left - 1  && dino.getBoundingClientRect().right >= cactus[cacnum].getBoundingClientRect().left - 4 ){
            cacnum = cacnum+1;
            var temp = cactus[cacnum-1].cloneNode(false);
            temp.className='cactus';
            ground.appendChild(temp);  
            console.log(cactus[cacnum-1].style.left); 
            cactus[cacnum].style.left=Number(cactus[cacnum-1].style.left.replace('px','')) + getRandomInt(1000,2000 ) + 'px';  
            // cactus[cacnum].style.left = '100px';
        } 
    }, 1 );  
     
}
 
var dinojump = () =>{
    var jump = setInterval(() => {  
        
            p = p - 4; 
            dino.style.top = p + 'px'; 
            if( p < pmax){
                clearInterval(jump);
                var jumpdown = setInterval(() => {
                    p = p + 4;
                    dino.style.top = p + 'px';
                    if( p > pfix - 2 ){
                        clearInterval(jumpdown);
                    }
                }, 6);   
            }
    }, 6);
}

document.addEventListener('keydown', (e) => {
    if (e.key === " ") {
        if(clicknum==1){
            moveground();
        }
        else{
            dinojump();
        }
       clicknum+=1;
        
    }
});

