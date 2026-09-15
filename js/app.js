// Comportamiento compartido por dashboard.html y las páginas de modules/.

document.addEventListener('DOMContentLoaded', function () {
  markActiveLink();
  showDemoUser();
  initLogout();
});

function markActiveLink() {
  const links = document.querySelectorAll('.sidebar a[data-page]');
  const current = document.body.getAttribute('data-page');
  links.forEach(function (link) {
    if (link.getAttribute('data-page') === current) {
      link.classList.add('active');
    }
  });
}

function showDemoUser() {
  const el = document.getElementById('current-user');
  if (!el) return;
  const usuario = sessionStorage.getItem('smartbi_demo_user');
  el.textContent = usuario || 'invitado';
}

function initLogout() {
  const btn = document.getElementById('logout-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    sessionStorage.removeItem('smartbi_demo_user');
    const isModulePage = window.location.pathname.includes('/modules/');
    window.location.href = isModulePage ? '../login.html' : 'login.html';
  });
}
