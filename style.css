const pupil1=document.getElementById("pupil1");
const pupil2=document.getElementById("pupil2");

const robot=document.getElementById("robot");
const speech=document.getElementById("speech");
const mouth=document.getElementById("mouth");
const heart=document.getElementById("heart");

let clickCount=0;
let sleepTimer;

/* PARTICLES */

const particles=document.getElementById("particles");

for(let i=0;i<50;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=
(5+Math.random()*10)+"s";

particles.appendChild(p);

}

/* EYES */

document.addEventListener("mousemove",(e)=>{

clearTimeout(sleepTimer);

moveEye(pupil1,e);
moveEye(pupil2,e);

const rect=
robot.getBoundingClientRect();

const centerX=
rect.left+rect.width/2;

const centerY=
rect.top+rect.height/2;

const dx=e.clientX-centerX;
const dy=e.clientY-centerY;

const dist=
Math.sqrt(dx*dx+dy*dy);

if(dist<120){

speech.innerText="😲 Juda yaqin!";

mouth.style.width="20px";
mouth.style.height="20px";
mouth.style.borderRadius="50%";

}else{

speech.innerText="👀 Seni kuzatyapman";

mouth.style.width="50px";
mouth.style.height="6px";
mouth.style.borderRadius="20px";

}

sleepTimer=setTimeout(()=>{
sleepMode();
},5000);

});

function moveEye(pupil,e){

const rect=
pupil.parentElement.getBoundingClientRect();

const x=e.clientX-(rect.left+15);
const y=e.clientY-(rect.top+15);

const angle=Math.atan2(y,x);

const moveX=Math.cos(angle)*6;
const moveY=Math.sin(angle)*6;

pupil.style.transform=
`translate(${moveX}px,${moveY}px)`;

}

/* CLICK */

robot.addEventListener("click",()=>{

clickCount++;

showHeart();

if(clickCount<5){

speech.innerText="😂 Haha!";

mouth.style.height="18px";
mouth.style.borderRadius=
"0 0 30px 30px";

}else{

speech.innerText="😡 Yetar endi!";

mouth.style.height="4px";

}

});

/* HEART */

function showHeart(){

heart.classList.remove("showHeart");

setTimeout(()=>{
heart.classList.add("showHeart");
},50);

}

/* SLEEP */

function sleepMode(){

speech.innerText="😴 Zzzz...";

pupil1.style.height="2px";
pupil2.style.height="2px";

pupil1.style.top="14px";
pupil2.style.top="14px";

}
