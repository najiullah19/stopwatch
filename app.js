


            // STOPWATCH


var min=00;
var sec=00
var msec=00
var hours=00
var timer;

var stopwatchE = document.querySelector('.stopwatch');
var lapsContainer =document.querySelector('.laps')

var minHeading =document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var hoursHeading =document.getElementById("hours")


function timer(){
    msec++
    msecHeading.innerHTML =msec;
    if(msec>=100){
        sec++
        secHeading.innerHTML=sec
        msec=0
    }else if(sec>=60){
        min++
        minHeading.innerHTML=min;
        sec=00
    }else if(min>=60){
        Hours++
        hoursHeading.innerHTML=hours
        min=00
    }


}

function start() {
    interval = setInterval(timer,10)
    document.getElementById("abtn").style.visibility="hidden"


    
}
function stop() {
   clearInterval(interval)
   document.getElementById("abtn").style.visibility="visible"

   
}

function reset(){
    min =00;
    sec=00;
    msec=00;
    minHeading.innerHTML=min
    secHeading.innerHTML=sec
    msecHeading.innerHTML=msec
    clearInterval(interval)
    document.getElementById("btn").style.visibility="visible"
    
}


 interval =setInterval (timer,10);


 function lap(){
     if(timer){
         var li =document.createElement('li');
         li.innerHTML =getTimer();
         lapContainer.appendChild(li);
     }
 }



