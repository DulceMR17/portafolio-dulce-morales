const COMPONENTS = {
  navbar: "components/navbar.html",
  footer: "components/footer.html"
};

async function loadComponent(id, path) {
  const target = document.getElementById(id);
  if (!target) return;
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`No se pudo cargar ${path}`);
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

async function loadComponents() {
  const prefix = window.location.pathname.includes('/pages/') ? '../' : './';
  await Promise.all([
    loadComponent('navbar', prefix + COMPONENTS.navbar),
    loadComponent('footer', prefix + COMPONENTS.footer)
  ]);
  document.dispatchEvent(new CustomEvent('components:loaded'));
}
