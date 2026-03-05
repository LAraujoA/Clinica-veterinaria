const toggle = document.querySelector('.menu-toggle');
const backdrop = document.querySelector('.sidebar-backdrop');
const sidebarLinks = document.querySelectorAll('.sidebar a');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);

  if (toggle) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
}

if (toggle && backdrop) {
  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('menu-open');
    setMenu(!isOpen);
  });

  backdrop.addEventListener('click', () => setMenu(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      setMenu(false);
    }
  });
}
