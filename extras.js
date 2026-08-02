const menuLinks=[...document.querySelectorAll('.topbar a,.side-nav a')];
const pageSections=[...document.querySelectorAll('main section[id]')];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;menuLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}),{rootMargin:'-35% 0px -55% 0px'});
pageSections.forEach(section=>sectionObserver.observe(section));
const dialog=document.querySelector('#lightbox');
document.querySelectorAll('.gallery-card').forEach(card=>card.addEventListener('click',()=>{dialog.querySelector('img').src=card.querySelector('img').src;dialog.querySelector('img').alt=card.querySelector('img').alt;dialog.querySelector('p').textContent=card.dataset.title;dialog.showModal();}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault();event.currentTarget.querySelector('.form-status').textContent='¡Mensaje preparado! Conecta este formulario a tu correo para enviarlo.';event.currentTarget.reset();});
