function getCurrentPage() {
  const path = window.location.pathname.replaceAll('\\', '/');
  if (path.endsWith('/aboutme.html')) return 'about';
  if (path.endsWith('/stack.htmsl')) return 'stack';
  if (path.endsWith('/projects.html')) return 'projects';
  if (path.endsWith('/contact.html')) return 'contact';
  if (path.endsWith('/home.html')) return 'home';
  return 'home';
}

function configureNavigation() {
  const page = getCurrentPage();
  const fromPages = window.location.pathname.includes('/pages/');
  const links = {
    home: fromPages ? 'home.html' : 'pages/home.html',
    about: fromPages ? 'aboutme.html' : 'pages/aboutme.html',
    stack: fromPages ? 'stack.html' : 'pages/stack.html',
    projects: fromPages ? 'projects.html' : 'pages/projects.html',
    contact: fromPages ? 'contact.html' : 'pages/contact.html'
  };

  document.querySelectorAll('.nav-links a[data-page], .nav-logo[data-page]').forEach(link => {
    const target = link.dataset.page;
    link.href = links[target];
  });

  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    const active = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active', active);
    hamburger.setAttribute('aria-expanded', String(active));
  });

  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

document.addEventListener('components:loaded', configureNavigation);
