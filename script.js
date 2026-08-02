/*====================================================
        BORUTO WEB
        Luis Alexander Yugsi Parra
====================================================*/


//======================================
// BOTON
//======================================

const boton = document.getElementById("btnMision");

const chakra = document.getElementById("chakra");

const rango = document.getElementById("rango");

const loader = document.getElementById("loader");

const musica = document.getElementById("musica");

const click = document.getElementById("click");

let energia = 0;


//======================================
// LOADER
//======================================

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.display="none";

},3000);

});


//======================================
// INICIAR MISION
//======================================

boton.addEventListener("click",()=>{

energia++;

chakra.innerHTML=energia;


//========================
// SONIDO
//========================

if(click){

click.currentTime=0;

click.play();

}


//========================
// RANGOS
//========================

if(energia<=5){

rango.innerHTML="Novato";

}

else if(energia<=10){

rango.innerHTML="Genin";

}

else if(energia<=20){

rango.innerHTML="Chunin";

}

else if(energia<=35){

rango.innerHTML="Jonin";

}

else{

rango.innerHTML="Kage";

}


//========================
// EFECTO BOTON
//========================

boton.style.transform="scale(0.92)";

setTimeout(()=>{

boton.style.transform="scale(1)";

},120);


//========================
// EFECTO HERO
//========================

const hero=document.querySelector(".hero-image");

hero.style.filter="drop-shadow(0 0 40px cyan)";

setTimeout(()=>{

hero.style.filter="drop-shadow(0 0 0px cyan)";

},600);


//========================
// MENSAJES
//========================

switch(rango.innerHTML){

case "Novato":

alert("🌱 Has comenzado tu entrenamiento.");

break;

case "Genin":

alert("⚡ Has ascendido a Genin.");

break;

case "Chunin":

alert("🔥 Ya eres un Chunin.");

break;

case "Jonin":

alert("💎 Has alcanzado el rango Jonin.");

break;

case "Kage":

alert("👑 ¡Felicidades! Ahora eres un Kage.");

break;

}

});


//======================================
// EFECTO MENU
//======================================

const menu=document.querySelectorAll("nav a");

menu.forEach((item)=>{

item.addEventListener("mouseenter",()=>{

item.style.textShadow="0 0 15px cyan";

});

item.addEventListener("mouseleave",()=>{

item.style.textShadow="none";

});

});


//======================================
// BOTONES
//======================================

const botones=document.querySelectorAll("button");

botones.forEach((b)=>{

b.addEventListener("mouseenter",()=>{

b.style.boxShadow="0 0 30px cyan";

});

b.addEventListener("mouseleave",()=>{

b.style.boxShadow="none";

});

});


//======================================
// TARJETAS
//======================================

const tarjetas=document.querySelectorAll(".unidad");

tarjetas.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


//======================================
// GALERIA
//======================================

const imagenes=document.querySelectorAll(".card-galeria img");

imagenes.forEach((img)=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

img.style.transition=".5s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});
/*====================================================
            EFECTO CURSOR
====================================================*/

document.addEventListener("mousemove",(e)=>{

const punto=document.createElement("div");

punto.className="cursor-chakra";

punto.style.left=e.pageX+"px";

punto.style.top=e.pageY+"px";

document.body.appendChild(punto);

setTimeout(()=>{

punto.remove();

},500);

});


/*====================================================
        EXPLOSION DE CHAKRA
====================================================*/

document.addEventListener("click",(e)=>{

for(let i=0;i<18;i++){

const chakra=document.createElement("span");

chakra.className="particula";

chakra.style.left=e.pageX+"px";

chakra.style.top=e.pageY+"px";

const x=(Math.random()*240)-120;

const y=(Math.random()*240)-120;

chakra.style.setProperty("--x",x+"px");

chakra.style.setProperty("--y",y+"px");

document.body.appendChild(chakra);

setTimeout(()=>{

chakra.remove();

},1000);

}

});


/*====================================================
        REVELAR AL HACER SCROLL
====================================================*/

const elementos=document.querySelectorAll(

".unidad,.card-galeria,.card-estadistica"

);

const mostrar=()=>{

const alto=window.innerHeight;

elementos.forEach((el)=>{

const posicion=el.getBoundingClientRect().top;

if(posicion<alto-120){

el.classList.add("mostrar");

}

});

};

window.addEventListener("scroll",mostrar);

mostrar();


/*====================================================
            MUSICA
====================================================*/

let reproduciendo=false;

document.addEventListener("keydown",(e)=>{

if(e.key==="m"){

if(!musica) return;

if(reproduciendo){

musica.pause();

reproduciendo=false;

}else{

musica.volume=.3;

musica.play();

reproduciendo=true;

}

}

});


/*====================================================
        RELOJ
====================================================*/

function actualizarHora(){

const ahora=new Date();

const hora=ahora.toLocaleTimeString();

const reloj=document.getElementById("hora");

if(reloj){

reloj.innerHTML=hora;

}

}

setInterval(actualizarHora,1000);


/*====================================================
        SALUDO
====================================================*/

window.addEventListener("load",()=>{

const horas=new Date().getHours();

let saludo="";

if(horas<12){

saludo="☀️ Buenos días Luis Alexander";

}else if(horas<18){

saludo="🌤 Buenas tardes Luis Alexander";

}else{

saludo="🌙 Buenas noches Luis Alexander";

}

console.log(saludo);

});


/*====================================================
        EFECTO TITULO
====================================================*/

let texto=document.title;

let posicion=0;

setInterval(()=>{

document.title=

texto.substring(posicion)+

texto.substring(0,posicion);

posicion++;

if(posicion>=texto.length){

posicion=0;

}

},300);


/*====================================================
        CONTADOR VISUAL
====================================================*/

function animarNumero(id,final){

let numero=0;

const elemento=document.getElementById(id);

if(!elemento)return;

const intervalo=setInterval(()=>{

numero++;

elemento.innerHTML=numero;

if(numero>=final){

clearInterval(intervalo);

}

},30);

}

animarNumero("chakra",0);


/*====================================================
        MENSAJE FINAL
====================================================*/

console.log("Boruto Web cargada correctamente.");