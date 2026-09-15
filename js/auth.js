// Autenticación simulada para el prototipo de sustentación.
// No hay backend real todavía: valida que los campos no estén vacíos
// y guarda una sesión de demostración en sessionStorage.

function initLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;

  const message = document.getElementById('login-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!usuario || !password) {
      showMessage(message, 'error', 'Ingresa tu usuario y tu contraseña.');
      return;
    }

    // Sesión de demostración: en la versión real, aquí se llamará a la API
    // de autenticación (RF-01) y se guardará el token que devuelva el backend.
    sessionStorage.setItem('smartbi_demo_user', usuario);

    showMessage(message, 'success', 'Ingresando…');
    window.setTimeout(function () {
      window.location.href = 'dashboard.html';
    }, 400);
  });
}

function initRecoveryForm() {
  const form = document.getElementById('recovery-form');
  if (!form) return;

  const message = document.getElementById('recovery-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value.trim();

    if (!correo) {
      showMessage(message, 'error', 'Ingresa el correo asociado a tu cuenta.');
      return;
    }

    // En la versión real (RF-03), esto dispara el envío de un enlace
    // temporal de restablecimiento al correo registrado.
    showMessage(
      message,
      'success',
      'Si el correo existe en el sistema, enviamos un enlace de recuperación.'
    );
    form.reset();
  });
}

function showMessage(el, type, text) {
  if (!el) return;
  el.textContent = text;
  el.classList.remove('success', 'error');
  el.classList.add('show', type);
}

document.addEventListener('DOMContentLoaded', function () {
  initLoginForm();
  initRecoveryForm();
});
