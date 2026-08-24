# Beira.ar — Landing page B2B

Landing page corporativa para **Beira.ar**, consultora tecnológica B2B (desarrollo de software, productos digitales, e-commerce, gestión de proyectos y consultoría IT). El objetivo principal de conversión es WhatsApp.

Construida con **Astro + TypeScript**, generación estática, mínima carga de JS y foco en SEO, performance y accesibilidad (WCAG AA).

## Stack

- **Astro 5** (estático) + **TypeScript**
- **React** solo donde hay interactividad real (islands `client:load`/`client:visible`)
- **Framer Motion** para animaciones (parallax, float, tilt, reveals)
- Efectos **estilo Aceternity UI** (Spotlight con mouse) implementados con el sistema de diseño propio
- CSS vanilla con **design tokens** (sin Tailwind) — ver `new_design.md`
- **Inter** (variable) tipografía
- **@astrojs/sitemap** para SEO

## Requisitos

- Node.js ≥ 20.3
- npm

## Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Comandos

| Comando            | Descripción                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Servidor de desarrollo local                     |
| `npm run build`    | Build local (entorno `local`)                    |
| `npm run build:gh` | Build para GitHub Pages (demo)                   |
| `npm run build:prod` | Build para producción (`beira.ar`)             |
| `npm run preview`  | Previsualizar el build en localhost              |
| `npm run check`    | Typecheck + lint de Astro (`astro check`)        |

## Estructura

```
├── .github/workflows/
│   └── deploy.yml              # Deploy a GitHub Pages (solo main)
├── public/
│   ├── favicon.webp
│   ├── icon-beira-white.webp   # Logo (variante blanca/lima)
│   └── logos/                  # Logos de clientes (trust bar)
└── src/
    ├── assets/                 # Imágenes procesadas por astro:assets
    ├── components/
    │   ├── icons/              # Iconos SVG (incl. TechIcon con 18 techs)
    │   ├── layout/             # Header, Footer, FloatingWhatsApp
    │   ├── react/              # Islands de React (HeroSection)
    │   ├── sections/           # Secciones de la landing
    │   └── ui/                 # Componentes UI reutilizables
    ├── data/site.ts            # TODO el contenido centralizado (fuente de verdad)
    ├── layouts/BaseLayout.astro # SEO, JSON-LD, fuentes, scripts
    ├── pages/                  # index.astro + robots.txt.ts
    ├── scripts/reveal.ts       # Animaciones de entrada (IntersectionObserver)
    ├── styles/                 # Tokens de diseño globales + CSS por sección
    └── utils/whatsapp.ts       # getWhatsAppUrl()
```

## Contenido y datos

Todo el contenido editable está centralizado en **`src/data/site.ts`**:

- Datos del sitio (nombre, URL, contacto, mensaje WhatsApp)
- Navegación (`nav`)
- Servicios (`services`)
- Clientes / logos de confianza (`clients`)
- Metodología (`processSteps`)
- Tecnologías (`technologies`)
- FAQ (`faq`)
- Casos y equipo (`caseStudies`, `team`) — actualmente vacíos (sin datos reales aún), las secciones se auto-ocultan

**Importante:** el número de WhatsApp está en `site.contact.whatsappNumber` (placeholder `5491100000000` — reemplazar por el real).

### Agregar un logo de cliente

1. Colocar la imagen en `logos/`.
2. Procesar (recortar margen transparente + convertir a WebP) hacia `public/logos/`.
3. Agregar el entry en `clients` en `src/data/site.ts` (id, name, `logo: import.meta.env.BASE_URL + 'logos/xxx.webp'`).

## Sistema visual

`new_design.md` es la fuente de verdad visual: negro `#111111`, acento lima `#c6d92e`, fondos casi blancos, superficies blancas, botones pill (`999px`), tipografía Inter, espaciado múltiplo de 4/8px. Los tokens viven en `src/styles/global.css`.

## Deploy

### Entornos (auto-switch)

El build cambia de sitio/base según `DEPLOY_TARGET` en `astro.config.mjs`:

| `DEPLOY_TARGET` | Sitio                          | Base      | Uso                        |
| --------------- | ------------------------------ | --------- | -------------------------- |
| `local` (default) | `http://localhost:4321`      | `/`       | `npm run dev` / build local |
| `gh-pages`      | `https://diegolu7.github.io`   | `/beira/` | Demo / preview             |
| `production`    | `https://beira.ar`             | `/`       | Producción (por ahora inactiva) |

Los assets (`public/`), `site.url`, canonical, JSON-LD y `robots.txt` se generan acordes al entorno (`import.meta.env.SITE` / `BASE_URL`).

### GitHub Pages (demo)

1. Push a la rama `main`.
2. El workflow `.github/workflows/deploy.yml` corre `npm run build:gh`, sube el artifact y despliega con `actions/deploy-pages`.
3. **Configurar una sola vez** en el repo: **Settings → Pages → Source: "GitHub Actions"**.
4. Demo en: `https://diegolu7.github.io/beira/`

> Nota: GitHub Pages sirve un único sitio por repo. El modo producción (`beira.ar`) está preparado en el código pero desactivado en el workflow; si se activa, requeriría dominio custom + DNS (CNAME `beira.ar → diegolu7.github.io` o registros A de GitHub Pages).

## QA

Antes de considerar terminado:

```bash
npm run build && npm run check
```

El repo está configurado para verificar:
- HTML semántico, H1 único, jerarquía de headings
- `prefers-reduced-motion` respetado (Framer Motion via `MotionConfig`, CSS, parallax desactivado)
- Responsive mobile-first (320px → 1440px+)
- Accesibilidad WCAG AA (labels, focus visible, aria, landmarks)
- Performance (LCP/INP/CLS) y JS mínimo (solo islands necesarios)
