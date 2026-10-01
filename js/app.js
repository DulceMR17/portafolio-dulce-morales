/* ===================== SPA ROUTER (Hash-based) ===================== */
const routes = {
    '/': 'view-home',
    '/stack': 'view-stack',
    '/about': 'view-about',
    '/projects': 'view-projects',
    '/contact': 'view-contact'
};

function router() {
    let hash = window.location.hash.replace('#', '');
    if (hash === '' || hash === '/') hash = '/';

    const viewId = routes[hash] || 'view-home';
    const views = document.querySelectorAll('.view');
    
    views.forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'instant' });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-route') === hash);
    });
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

/* ===================== NAV: HAMBURGER TOGGLE ===================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});