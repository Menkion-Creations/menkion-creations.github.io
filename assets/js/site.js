'use strict';
// Navegación sin dependencias. La web pública no requiere iniciar sesión.
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.navlinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
