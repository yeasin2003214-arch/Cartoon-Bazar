const links = document.querySelectorAll('.nav-links a');

links.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();

    links.forEach(l=>l.classList.remove('active'));
    link.classList.add('active');

    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior:'smooth' });
  });
});
