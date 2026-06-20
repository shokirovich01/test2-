*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
height:100vh;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(
135deg,
#06131a,
#0d2530,
#102c38
);
}

/* PARTICLES */

#particles{
position:fixed;
inset:0;
overflow:hidden;
pointer-events:none;
}

.particle{
position:absolute;
width:4px;
height:4px;
border-radius:50%;
background:#8fffe0;
opacity:.5;
animation:float linear infinite;
}

@keyframes float{

from{
transform:translateY(100vh);
}

to{
transform:translateY(-100px);
}

}

/* ROBOT */

.container{
position:relative;
text-align:center;
}

#speech{
position:absolute;
top:-80px;
left:50%;
transform:translateX(-50%);
background:white;
padding:12px 20px;
border-radius:20px;
font-weight:bold;
box-shadow:0 5px 15px rgba(0,0,0,.2);
white-space:nowrap;
}

#heart{
position:absolute;
top:-130px;
left:50%;
transform:translateX(-50%);
font-size:40px;
opacity:0;
}

.showHeart{
animation:heartUp 2s forwards;
}

@keyframes heartUp{

0%{
opacity:1;
transform:translateX(-50%) translateY(0);
}

100%{
opacity:0;
transform:translateX(-50%) translateY(-80px);
}

}

#robot{
position:relative;
animation:breathe 3s infinite ease-in-out;
cursor:pointer;
}

@keyframes breathe{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-8px);
}

}

/* HEAD */

.head{
width:180px;
height:130px;
background:#98f0d2;
border:5px solid #3e8b73;
border-radius:30px;
position:relative;
z-index:2;
}

.eyes{
display:flex;
justify-content:space-around;
padding-top:40px;
}

.eye{
width:30px;
height:30px;
background:white;
border-radius:50%;
position:relative;
overflow:hidden;
}

.pupil{
width:12px;
height:12px;
background:black;
border-radius:50%;
position:absolute;
left:9px;
top:9px;
transition:.08s;
}

#mouth{
width:50px;
height:6px;
background:#333;
margin:25px auto;
border-radius:20px;
transition:.3s;
}

/* BODY */

.body{
width:130px;
height:150px;
background:#6de0b9;
border:5px solid #3e8b73;
border-radius:30px;
margin:auto;
margin-top:-10px;
}

/* ARMS */

.arms{
position:absolute;
top:120px;
left:-25px;
width:230px;
display:flex;
justify-content:space-between;
z-index:1;
}

.arm{
width:28px;
height:90px;
background:#6de0b9;
border:5px solid #3e8b73;
border-radius:30px;
animation:wave 3s infinite;
}

.right{
animation-delay:1.5s;
}

@keyframes wave{

0%,100%{
transform:rotate(0deg);
}

50%{
transform:rotate(20deg);
}

}
