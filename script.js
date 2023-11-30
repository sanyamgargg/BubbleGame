var timer = 60 ; 
var score = 0 ;
var hitnumber ;

function bubbles(){
    var clutter = "" ;


    for(var i=1; i<221; i++){
    var number = Math.floor(Math.random()*10) ;
    
    clutter += `<div class="bubble">${number}</div>` ;
    }
    document.querySelector("#bottom").innerHTML = clutter ;

}
function hitMe(){
    hitnumber = Math.floor(Math.random()*10) ;
    document.querySelector("#hitbox").textContent = hitnumber ;
}
function timerBox(){
    
    var timerbug = setInterval(function(){
        if(timer>0){
            timer -- ;
        document.querySelector("#timerbox").textContent = timer ; 
        }
        else{
            clearInterval("timerbug") ;
            document.querySelector("#bottom").innerHTML = `<h1>Game Over <br> Your Score ${score}</h1>` ;
            
        }
       
        
    },1000) ;

}
function scoreInc(){
    score += 10;
    document.querySelector("#scorebox").textContent = score ; 
}
var a = document.querySelector("#bottom") ;
a.addEventListener("click",function(random){
    var number = Number(random.target.textContent);
    if(hitnumber == number){
        scoreInc() ;
        hitMe() ;
        bubbles() ;
        
    }
    else{
        bubbles();
    }

})



bubbles() ;
hitMe() ;
timerBox() ;
