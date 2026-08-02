(() => {
    const loader = document.getElementById("loader");
    const chakraCounter = document.getElementById("chakra");
    const missionButton = document.getElementById("btnMision");
    const cards = document.querySelectorAll(".card");
    const particles = document.getElementById("particles");
    const hero = document.querySelector(".hero");
    const title = document.querySelector(".hero-center h1");
    const avatar = document.querySelector(".foto");
    const boruto = document.querySelector(".boruto");
    const portal = document.querySelector(".portal");
    const btnTop = document.getElementById("btnTop");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.display = "none";
        }, 1600);
    }

    let chakra = 0;
    if (chakraCounter && missionButton) {
        missionButton.addEventListener("click", () => {
            chakra += 10;
            chakraCounter.textContent = chakra;
            missionButton.style.transform = "scale(0.96)";
            setTimeout(() => {
                missionButton.style.transform = "scale(1)";
            }, 140);
        });
    }

    cards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 18;
            const rotateX = ((y / rect.height) - 0.5) * -18;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    });

    if (particles) {
        for (let i = 0; i < 60; i += 1) {
            const particle = document.createElement("span");
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${6 + Math.random() * 8}s`;
            particle.style.animationDelay = `${Math.random() * 6}s`;
            particles.appendChild(particle);
        }

        for (let i = 0; i < 8; i += 1) {
            const spark = document.createElement("div");
            spark.className = "spark";
            spark.style.left = `${Math.random() * 100}%`;
            spark.style.top = `${Math.random() * 100}%`;
            spark.style.animationDuration = `${3 + Math.random() * 3}s`;
            spark.style.animationDelay = `${Math.random() * 2}s`;
            particles.appendChild(spark);
        }
    }

    if (hero) {
        window.addEventListener("mousemove", (event) => {
            const x = (window.innerWidth / 2 - event.clientX) / 40;
            const y = (window.innerHeight / 2 - event.clientY) / 40;
            hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        });
    }

    if (title) {
        const text = title.innerText;
        title.innerHTML = "";
        let index = 0;
        const writer = setInterval(() => {
            title.innerHTML += text.charAt(index);
            index += 1;
            if (index >= text.length) {
                clearInterval(writer);
            }
        }, 60);
    }

    if (avatar) {
        avatar.addEventListener("mouseenter", () => {
            avatar.style.transform = "scale(1.06)";
        });
        avatar.addEventListener("mouseleave", () => {
            avatar.style.transform = "scale(1)";
        });
    }

    if (boruto) {
        setInterval(() => {
            boruto.style.filter = "drop-shadow(0 0 40px cyan)";
            setTimeout(() => {
                boruto.style.filter = "drop-shadow(0 0 20px cyan)";
            }, 700);
        }, 2200);
    }

    if (portal) {
        let degrees = 0;
        setInterval(() => {
            degrees += 0.6;
            portal.style.transform = `rotate(${degrees}deg)`;
        }, 20);
    }

    if (btnTop) {
        window.addEventListener("scroll", () => {
            btnTop.classList.toggle("mostrar", window.scrollY > 400);
        });
        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const cursor = document.createElement("div");
    cursor.className = "cursor-chakra";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    document.addEventListener("mousedown", () => {
        cursor.classList.add("click");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("click");
    });

    document.addEventListener("click", (event) => {
        const burst = document.createElement("span");
        burst.className = "chakra-burst";
        burst.style.left = `${event.pageX}px`;
        burst.style.top = `${event.pageY}px`;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar-seccion");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    const titleLoop = document.querySelector(".hero h1");
    if (titleLoop) {
        setInterval(() => {
            titleLoop.classList.toggle("brillo");
        }, 1400);
    }

    document.title = "⚡ Universidad Técnica de Cotopaxi";
    console.log("Página cargada correctamente");
})();
