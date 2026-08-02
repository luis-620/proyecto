const $ = (selector) => document.querySelector(selector);
window.addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 900));

const canvas = $('#particles'), context = canvas.getContext('2d');
let dots = [];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;dots=Array.from({length:Math.min(85,innerWidth/16)},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+.4,v:Math.random()*.45+.12,c:Math.random()>.72?'255,74,174':'0,202,255'}));}
function paint(){context.clearRect(0,0,canvas.width,canvas.height);dots.forEach(d=>{d.y-=d.v;d.x+=Math.sin(d.y*.01)*.18;if(d.y<-5)d.y=canvas.height+5;context.fillStyle=`rgba(${d.c},${.25+d.r/7})`;context.beginPath();context.arc(d.x,d.y,d.r,0,Math.PI*2);context.fill();});requestAnimationFrame(paint)}resize();paint();addEventListener('resize',resize);

const eye=$('#sharingan'), ball=$('#rasengan');
addEventListener('pointermove',e=>{eye.style.left=e.clientX+'px';eye.style.top=e.clientY+'px';eye.style.transform='translate(-50%,-50%) scale(1)';if(ball){const x=(e.clientX/innerWidth-.5)*16,y=(e.clientY/innerHeight-.5)*16;ball.style.margin=`${y}px 0 0 ${x}px`;}});
addEventListener('pointerleave',()=>eye.style.transform='translate(-50%,-50%) scale(0)');
$('#mode').addEventListener('click',()=>document.body.classList.toggle('shinobi'));
$('.menu-toggle').addEventListener('click',()=>$('.sidebar').classList.toggle('open'));
$('#sound').addEventListener('click',e=>{e.currentTarget.classList.toggle('active');e.currentTarget.textContent=e.currentTarget.classList.contains('active')?'♫':'♩';});
