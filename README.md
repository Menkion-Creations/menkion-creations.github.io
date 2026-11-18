# Menkion Creations — Sitio web v0.2

Web estática en español para GitHub Pages, sin dependencias ni backend.

## Publicación

1. Descomprime el ZIP.
2. Sube **el contenido** de la carpeta a la raíz del repositorio `Menkion-Creations/menkion-creations.github.io` (no la carpeta contenedora).
3. Si ya hay `index.html`, reemplázalo con el nuevo. Conservar `.nojekyll`.
4. En GitHub: Settings → Pages → Deploy from branch → main → /(root).
5. Abre `https://menkion-creations.github.io/`.

## Estructura

- `index.html` — Inicio
- `nosotros.html` — Identidad y objetivos del estudio
- `contacto.html` — Enlace mailto, GitHub y Patreon
- `proyectos/index.html` — Catálogo
- `proyectos/*.html` — Página individual de cada proyecto
- `assets/css/styles.css` — Estilos compartidos
- `assets/js/site.js` — Navegación responsiva
- `assets/js/auth-config.example.js` — Documentación del punto de futura integración Auth. NO es una implementación de autenticación.
- `assets/img/logo-original.webp` — Logo original del usuario, tal como se entregó, convertido solo a WebP.
- `assets/img/logo-transparente.png` — Variante de logo recortada y con transparencia, generada a partir de referencia; **no es un trazado vectorial exacto del original**.
- `assets/img/favicon.png` — Recorte del original para icono temporal.
- `assets/img/*.svg` — Ilustraciones conceptuales, **no capturas reales**.

## Pendientes para una plataforma comunitaria

GitHub Pages no ejecuta backend, no almacena usuarios y no puede proteger rutas privadas solo con JavaScript. Para cuentas admin/users: definir un proveedor de autenticación y un backend, roles server-side, permisos por objeto, políticas de datos, RLS, y medidas antiabuso. No incrustar claves privadas ni secretos en el código público.

## Contenido

La identidad se presenta como proyecto/estudio independiente, sin afirmar que la empresa esté legalmente constituida. OS Menkion, Menkion Mobile e Islas Infinitas se presentan según estado experimental. Los proyectos de juego/móvil pueden quitarse del catálogo si se prefiere enfocarse exclusivamente en OS Menkion.
