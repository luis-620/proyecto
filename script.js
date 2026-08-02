/*=========================================
        CARGA DE LA PAGINA
=========================================*/
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.display = "none";
        }, 1800);

    }

});

/*=========================================
        CONTADOR DE CHAKRA
=========================================*/

let chakra=0;

const contador=document.getElementById("chakra");

const boton=document.getElementById("btnMision");

if(boton){

boton.addEventListener("click",()=>{

    chakra+=10;

    contador.innerHTML=chakra;

    boton.style.transform="scale(.95)";

    setTimeout(()=>{

        boton.style.transform="scale(1)";

    },150);

});

}


/*=========================================
        EFECTO TARJETAS
=========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*20;

const rotateX=((y/rect.height)-0.5)*-20;

card.style.transform=`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


/*=========================================
        MENU ACTIVO
=========================================*/

const enlaces=document.querySelectorAll("nav a");

enlaces.forEach(link=>{

link.addEventListener("click",()=>{

enlaces.forEach(a=>a.classList.remove("activo"));

link.classList.add("activo");

});

});


/*=========================================
        EFECTO SCROLL
=========================================*/
const elementosRevelar = document.querySelectorAll(".card,.hero-left,.hero-center,.hero-right");

const mostrarElementos = () => {

    const alto = window.innerHeight;

    elementosRevelar.forEach(el => {

        const posicion = el.getBoundingClientRect().top;

        if (posicion < alto - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


/*=========================================
        PARTICULAS
=========================================*/

const particles=document.getElementById("particles");

for(let i=0;i<70;i++){

const burbuja=document.createElement("span");

burbuja.style.left=Math.random()*100+"%";

burbuja.style.animationDuration=(6+Math.random()*8)+"s";

burbuja.style.animationDelay=Math.random()*6+"s";

particles.appendChild(burbuja);

}


/*=========================================
        RELOJ
=========================================*/

function actualizarHora(){

const fecha=new Date();

const hora=fecha.toLocaleTimeString();

console.log(hora);

}

setInterval(actualizarHora,1000);


/*=========================================
        TITULO DINAMICO
=========================================*/

const tituloOriginal=document.title;

let cambio=false;

setInterval(()=>{

document.title=cambio
?tituloOriginal
:"⚡ Bienvenido Luis Alexander";

cambio=!cambio;

},2500);


/*=========================================
        EFECTO FOTO
=========================================*/

const foto=document.querySelector(".foto");

if(foto){

foto.addEventListener("mouseenter",()=>{

foto.style.transform="scale(1.08)";

});

foto.addEventListener("mouseleave",()=>{

foto.style.transform="scale(1)";

});

}


/*=========================================
        BORUTO
=========================================*/

const boruto=document.querySelector(".boruto");

if(boruto){

setInterval(()=>{

boruto.style.filter="drop-shadow(0 0 50px cyan)";

setTimeout(()=>{

boruto.style.filter="drop-shadow(0 0 20px cyan)";

},600);

},2500);

}


/*=========================================
        FIN SCRIPT
=========================================*/

console.log("BORUTO WEB CARGADA CORRECTAMENTE");
/*=========================================
        CURSOR DE CHAKRA
=========================================*/

const cursor = document.createElement("div");
cursor.className = "cursor-chakra";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/*=========================================
        CHISPAS DEL CURSOR
=========================================*/

document.addEventListener("mousemove", (e) => {

    const particula = document.createElement("span");

    particula.className = "cursor-particula";

    particula.style.left = e.pageX + "px";
    particula.style.top = e.pageY + "px";

    document.body.appendChild(particula);

    setTimeout(() => {

        particula.remove();

    }, 700);

});


/*=========================================
        EFECTO CLICK CHAKRA
=========================================*/

document.addEventListener("click", (e) => {

    for (let i = 0; i < 15; i++) {

        const onda = document.createElement("span");

        onda.className = "onda";

        onda.style.left = e.pageX + "px";
        onda.style.top = e.pageY + "px";

        onda.style.setProperty("--x", (Math.random()*220-110)+"px");
        onda.style.setProperty("--y", (Math.random()*220-110)+"px");

        document.body.appendChild(onda);

        setTimeout(() => {

            onda.remove();

        },1000);

    }

});


/*=========================================
        EFECTO MENU
=========================================*/

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transform="translateY(-4px)";

});

link.addEventListener("mouseleave",()=>{

link.style.transform="translateY(0px)";

});

});


/*=========================================
        BOTONES
=========================================*/

document.querySelectorAll("button,.btn1,.btn2").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 35px cyan";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

});


/*=========================================
        HERO
=========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

hero.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});


/*=========================================
        ANIMAR CONTADOR
=========================================*/

function aumentarChakra(){

let numero=0;

const intervalo=setInterval(()=>{

numero++;

contador.innerHTML=numero;

if(numero>=chakra){

clearInterval(intervalo);

}

},15);

}


/*=========================================
        REVELAR TARJETAS
=========================================*/

const elementos=document.querySelectorAll(".card");

const revelar=()=>{

const pantalla=window.innerHeight;

elementos.forEach((el)=>{

const posicion=el.getBoundingClientRect().top;

if(posicion<pantalla-100){

el.style.opacity="1";

el.style.transform="translateY(0px)";

}

});

}

window.addEventListener("scroll",revelar);

revelar();


/*=========================================
        BORUTO
=========================================*/

if(boruto){

setInterval(()=>{

boruto.style.transform="translateY(-12px)";

setTimeout(()=>{

boruto.style.transform="translateY(0px)";

},1000);

},2000);

}


/*=========================================
        TITULO
=========================================*/

const mensajes=[

"⚡ Boruto Web",

"🥷 Luis Alexander",

"💙 Chakra Activado",

"🌌 Academia Shinobi"

];

let indice=0;

setInterval(()=>{

document.title=mensajes[indice];

indice++;

if(indice>=mensajes.length){

indice=0;

}

},3000);


/*=========================================
        SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(ancla=>{

ancla.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector(ancla.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});


/*=========================================
        FIN PARTE 3.2
=========================================*/

console.log("Animaciones Premium cargadas");

/*=========================================
        EFECTO PARALLAX
=========================================*/

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth-e.clientX)/60;

const y=(window.innerHeight-e.clientY)/60;

document.querySelectorAll(".hoja").forEach((hoja)=>{

hoja.style.transform=`translate(${x}px,${y}px)`;

});

});


/*=========================================
        PORTAL GIRATORIO
=========================================*/

const portal=document.querySelector(".portal");

if(portal){

let grados=0;

setInterval(()=>{

grados+=0.5;

portal.style.transform=`rotate(${grados}deg)`;

},20);

}


/*=========================================
        ENERGIA PULSANTE
=========================================*/

const energia=document.querySelector(".energia");

if(energia){

setInterval(()=>{

energia.style.transform="scale(1.08)";

setTimeout(()=>{

energia.style.transform="scale(1)";

},600);

},1200);

}


/*=========================================
        BRILLO DE LA FOTO
=========================================*/

const foto=document.querySelector(".foto");

if(foto){

setInterval(()=>{

foto.style.filter="drop-shadow(0 0 40px cyan)";

setTimeout(()=>{

foto.style.filter="drop-shadow(0 0 15px cyan)";

},800);

},1800);

}


/*=========================================
        EFECTO ESCRITURA
=========================================*/

const titulo=document.querySelector(".hero-center h1");

if(titulo){

const texto=titulo.innerText;

titulo.innerHTML="";

let i=0;

const escribir=setInterval(()=>{

titulo.innerHTML+=texto.charAt(i);

i++;

if(i>=texto.length){

clearInterval(escribir);

}

},70);

}


/*=========================================
        EFECTO FLOTANTE
=========================================*/

document.querySelectorAll(".card").forEach((card)=>{

setInterval(()=>{

card.style.transform="translateY(-8px)";

setTimeout(()=>{

card.style.transform="translateY(0px)";

},900);

},2500);

});


/*=========================================
        MENSAJES
=========================================*/

const mensajes=[

"Bienvenido Shinobi ⚡",

"Completa todas las unidades 🥷",

"Tu aventura apenas comienza 🔥",

"Universidad Técnica de Cotopaxi"

];

let mensajeActual=0;

setInterval(()=>{

console.log(mensajes[mensajeActual]);

mensajeActual++;

if(mensajeActual>=mensajes.length){

mensajeActual=0;

}

},5000);


/*=========================================
        FIN PARTE 3.3
=========================================*/

console.log("Parte 3.3 cargada");
/*=========================================
        BARRA DE ENERGIA
=========================================*/

const barra=document.querySelector(".barra");

let energiaActual=100;

function disminuirEnergia(){

    if(!barra) return;

    energiaActual--;

    if(energiaActual<=0){

        energiaActual=100;

    }

    barra.style.width=energiaActual+"%";

}

setInterval(disminuirEnergia,250);


/*=========================================
        EFECTO SHURIKEN
=========================================*/

document.addEventListener("click",(e)=>{

    const shuriken=document.createElement("img");

    shuriken.src="img/shuriken.png";

    shuriken.className="shuriken-click";

    shuriken.style.left=e.pageX+"px";

    shuriken.style.top=e.pageY+"px";

    document.body.appendChild(shuriken);

    let giro=0;

    const animar=setInterval(()=>{

        giro+=25;

        shuriken.style.transform=`translate(-50%,-50%) rotate(${giro}deg)`;

    },20);

    setTimeout(()=>{

        clearInterval(animar);

        shuriken.remove();

    },1200);

});


/*=========================================
        EFECTO KUNAI
=========================================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

const kunai=document.createElement("img");

kunai.src="img/kunai.png";

kunai.className="kunai-card";

card.appendChild(kunai);

setTimeout(()=>{

kunai.remove();

},1000);

});

});


/*=========================================
        RESPLANDOR TITULO
=========================================*/

const nombre=document.querySelector(".hero-center h1");

if(nombre){

setInterval(()=>{

nombre.style.textShadow="0 0 50px cyan";

setTimeout(()=>{

nombre.style.textShadow="0 0 15px cyan";

},900);

},1800);

}


/*=========================================
        EFECTO HERO
=========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const valor=window.scrollY;

hero.style.backgroundPositionY=valor*0.4+"px";

});


/*=========================================
        DESTELLOS
=========================================*/

setInterval(()=>{

const destello=document.createElement("div");

destello.className="destello";

destello.style.left=Math.random()*window.innerWidth+"px";

destello.style.top=Math.random()*window.innerHeight+"px";

document.body.appendChild(destello);

setTimeout(()=>{

destello.remove();

},1500);

},400);


/*=========================================
        CONTADOR VISITAS
=========================================*/

let visitas=localStorage.getItem("visitas");

if(visitas==null){

visitas=1;

}else{

visitas++;

}

localStorage.setItem("visitas",visitas);

console.log("Visitas:",visitas);


/*=========================================
        SONIDO CLICK
=========================================*/

const audioClick=new Audio("audio/click.mp3");

document.addEventListener("click",()=>{

audioClick.currentTime=0;

audioClick.play().catch(()=>{});

});


/*=========================================
        FIN PARTE 3.4
=========================================*/

console.log("Parte 3.4 cargada correctamente");
/*========================================
|          PARTE 3.5
|  EFECTO FINAL Y BOTÓN SUBIR
=========================================*/

// Botón subir
const btnTop = document.getElementById("btnTop");

if(btnTop){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){
            btnTop.classList.add("mostrar");
        }else{
            btnTop.classList.remove("mostrar");
        }

    });

    btnTop.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}



// Animación del título

const titulo=document.querySelector(".hero h1");

if(titulo){

    setInterval(()=>{

        titulo.classList.toggle("brillo");

    },1500);

}



// Animación de las tarjetas

const tarjetas=document.querySelectorAll(".card");

tarjetas.forEach((card,i)=>{

    card.style.animationDelay=`${i*0.2}s`;

});

/*=========================================
        FIN PARTE 3.5
=========================================*/

console.log("Página Premium cargada correctamente");
/*========================================
|            PARTE 4.1
|        CURSOR DE ENERGÍA
=========================================*/

const cursor = document.createElement("div");
cursor.className = "cursor-chakra";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
});

document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
});

console.log("Parte 4.1 cargada");
/*=========================================
        PARTE 4.2
        ESTRELLAS DE CHAKRA
=========================================*/

const fondo = document.getElementById("particles");

if(fondo){

    for(let i=0;i<40;i++){

        const estrella = document.createElement("span");

        estrella.className = "estrella";

        estrella.style.left = Math.random()*100 + "%";
        estrella.style.top = Math.random()*100 + "%";

        estrella.style.animationDuration =
        (3 + Math.random()*5) + "s";

        estrella.style.animationDelay =
        Math.random()*5 + "s";

        fondo.appendChild(estrella);

    }

}

console.log("Parte 4.2 cargada");
/*=========================================
        PARTE 4.3
        TARJETAS 3D PREMIUM
=========================================*/

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*18;

        const rotateX=((y/rect.height)-0.5)*-18;

        card.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});


/*=========================================
        BRILLO AUTOMÁTICO
=========================================*/

setInterval(()=>{

    document.querySelectorAll(".card").forEach(card=>{

        card.style.boxShadow="0 0 30px cyan";

        setTimeout(()=>{

            card.style.boxShadow="0 0 15px rgba(0,255,255,.4)";

        },700);

    });

},2500);


/*=========================================
        FIN PARTE 4.3
=========================================*/

console.log("Parte 4.3 cargada");
/*=========================================
        PARTE 4.4
        ANIMACIÓN DE SECCIONES
=========================================*/

const secciones = document.querySelectorAll("section");

const mostrarSeccion = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar-seccion");

        }

    });

},{
    threshold:0.2
});

secciones.forEach((seccion)=>{

    mostrarSeccion.observe(seccion);

});


/*=========================================
        EFECTO DE BRILLO EN BOTONES
=========================================*/

document.querySelectorAll("button, .btn").forEach((boton)=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.boxShadow="0 0 25px cyan";

    });

    boton.addEventListener("mouseleave",()=>{

        boton.style.boxShadow="none";

    });

});


console.log("Parte 4.4 cargada");