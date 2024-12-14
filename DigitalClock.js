const dhour=document.querySelector("#dhour");
const dminute=document.querySelector("#dminute");
const dsecond=document.querySelector("#dsecond");

let now=new Date();
dhour.textContent=now.getHours();
dminute.textContent=now.getMinutes();
dsecond.textContent=now.getSeconds();

function format(x){
    if(Math.floor(x/10)==0) return "0"+x;
    return x;
}

function settime(){
    let now=new Date();
    dhour.textContent=format(now.getHours());
    dminute.textContent=format(now.getMinutes());
    dsecond.textContent=format(now.getSeconds());
}

setInterval(settime,1000);

/////////////////////////////////////////////////////////////////////////////////////////////////

const minute=document.querySelector("#minute");
const second=document.querySelector("#second");
const millisecond=document.querySelector("#millisecond");
const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const reset=document.querySelector("#reset");

/////////////// VARIABLES ////////////////

let starttime=Date.now();
let sofar=0;
let intervalId;
isrunning=false;

/////////////// LISTENERS ////////////////

start.onclick=()=>{
    if(isrunning) return ;
    isrunning=true;
    starttime=Date.now();
    intervalId=setInterval(setstime,10);
}

stop.onclick=()=>{
    if(isrunning)sofar+=Date.now()-starttime;
    else sofar=0;
    isrunning=false;
    clearInterval(intervalId);
}

reset.onclick=()=>{
    isrunning=false;
    clearInterval(intervalId);
    sofar=0;
    millisecond.textContent="00";
    second.textContent="00";
    minute.textContent="00";
}

/////////////// FUNCTIONS ////////////////

function format(x){
    if(Math.floor(x/10)==0) return "0"+x;
    return x;
}

function setstime(){
    let passed=Date.now()-starttime+sofar;
    millisecond.textContent=format(Math.floor(((passed)/10))%100);
    second.textContent=format(Math.floor(((passed)/1000)%60));
    minute.textContent=format(Math.floor(((passed)/60000))%60);
}