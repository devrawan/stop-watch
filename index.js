
// var p1= document.querySelector("body > div.parent > div:nth-child(1) > button.\31 ");
//  var con1 = document.querySelector("body > div.parent")
//  p1.addEventListener("click",func1());
//  function func1(){
// con2.style.display="none";
//  }

 
var stopp= document.getElementById("parent1");
var tim= document.getElementById("parentt2");

function myFunction1() {
  // stopp.style.display = "block";
    tim.style.display="none";
    stopp.style.display = "flex";
   
   
}

function myFunction2(){
  // tim.style.display="block";
  stopp.style.display = "none";
  tim.style.display="flex";
}
var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;


var miliSec1 = 0;
var sec1 = 0;
var min1 = 0;
var hour1 = 0; 

var x;
var startini = 0;

function startStop() { 

  startini = startini + 1;

  if (startini === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startini === 2) {
    document.getElementById("start").innerHTML = "Start";
    startini = 0;
    stop();
  }

}


function start() {
  x = setInterval(timer, 10);
} 

function stop() {
  clearInterval(x);
} 




function timer() {
  miliSec1 = checkTime(milisec);
  sec1 = checkTime(sec);
  min1 = checkTime(min);
  hour1 = checkTime(hour);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
   
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
   
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;
    document.getElementById("milisec").style.color="green";
  }


  document.getElementById("milisec").innerHTML = miliSec1;
 
  document.getElementById("sec").innerHTML = sec1;
 
  document.getElementById("min").innerHTML = min1;
 
  document.getElementById("hour").innerHTML = hour1;
 
}
/* style  stop */
document.getElementById("milisec").style.color="red";
document.getElementById("sec").style.color="blue";
document.getElementById("min").style.color="green";
document.getElementById("hour").style.color = "pink";

/* style timer*/ 
document.getElementById("milisecc").style.color="red";
document.getElementById("secc").style.color="blue";
document.getElementById("minn").style.color="green";
document.getElementById("hourr").style.color = "pink";

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function resett() {
  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;
  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";

}
