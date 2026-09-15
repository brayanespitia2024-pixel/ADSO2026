# SmartBI Analytics Suite — Prototipo de sustentación

Prototipo estático (HTML/CSS/JS, sin backend) construido para la sustentación
del 21 de septiembre de 2026. Es un repositorio independiente del repositorio
principal de desarrollo del proyecto; aquí solo vive la organización y el
flujo de navegación del prototipo.

## Estructura

```
proyecto-sustentacion/
├── index.html                 # Landing page — punto de entrada obligatorio
├── login.html                 # Inicio de sesión (simulado con JS)
├── recuperar-password.html    # Recuperación de contraseña (simulada con JS)
├── dashboard.html             # Hub post-login: KPIs + acceso a los 6 módulos
├── css/
│   ├── variables.css          # Tokens de color, tipografía y layout
│   ├── base.css                # Reset y tipografía base
│   ├── components.css          # Botones, formularios, tarjetas, sidebar, tablas
│   └── pages.css               # Estilos específicos de landing y auth
├── js/
│   ├── auth.js                 # Lógica simulada de login y recuperación
│   └── app.js                  # Sidebar activo, usuario de sesión, logout
└── modules/
    ├── etl.html                 # Carga de datos
    ├── kpis.html                 # Dashboard y KPIs
    ├── filtros.html               # Filtros y Drill-Down
    ├── anomalias.html              # Detección de Anomalías
    ├── reportes.html                # Reportes Automáticos
    └── administracion.html          # Administración
```

## Flujo de navegación

```
index.html ──(botón "Entrar al sistema")──► login.html
login.html ──(enlace "¿Olvidaste tu contraseña?")──► recuperar-password.html
recuperar-password.html ──("Volver a iniciar sesión")──► login.html
login.html ──(formulario, JS simulado)──► dashboard.html
dashboard.html ──(sidebar / tarjetas de módulo)──► modules/*.html
modules/*.html ──(sidebar "Inicio" o breadcrumb)──► dashboard.html
dashboard.html / modules/*.html ──("Cerrar sesión")──► login.html
```

## Notas importantes

- El login y la recuperación de contraseña son **simulados**: cualquier
  usuario/contraseña no vacíos permiten entrar (guardado en
  `sessionStorage`, no hay backend real todavía).
- Los datos de KPIs, tablas y alertas son de ejemplo (hardcoded), tal como
  lo indica la documentación del proyecto en la sección "Current state".
- Las páginas de `modules/` tienen estructura básica (header + sidebar +
  un par de secciones) pero sin funcionalidad real — es intencional para
  esta fase de sustentación.
- Los 6 colores de módulo (`--mod-etl`, `--mod-kpis`, `--mod-filtros`,
  `--mod-anomalias`, `--mod-reportes`, `--mod-admin` en `css/variables.css`)
  coinciden con el código de colores ya usado en la documentación del
  proyecto (azul, verde, morado, rojo, café, gris).

## Cómo probarlo localmente

Abre `index.html` con la extensión Live Server de VS Code (o cualquier
servidor estático) — no funciona bien con doble clic directo porque los
`fetch`/rutas relativas de algunos navegadores se comportan distinto con
`file://`. Con Live Server, todo el flujo funciona de punta a punta.
