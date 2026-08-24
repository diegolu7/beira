# Directrices de Implementación — Beira.ar

## Objetivo general

Construir una landing page B2B moderna, atractiva, sólida y orientada a conversión para **Beira.ar**, una consultora tecnológica enfocada en desarrollo de software, productos digitales, e-commerce, gestión de proyectos y consultoría IT.

El sitio debe transmitir principalmente:

- Confianza
- Experiencia
- Capacidad técnica
- Profesionalismo
- Claridad
- Solidez
- Innovación sin caer en recursos visuales genéricos o excesivos

El objetivo principal de negocio es convertir visitantes en **conversaciones comerciales por WhatsApp**.

El público objetivo son:

- CTOs
- CIOs
- Gerentes de IT
- Responsables de tecnología
- Responsables de producto
- Tomadores de decisión B2B
- Empresas que necesitan desarrollar, mejorar, integrar o escalar soluciones digitales

---

# Archivos de referencia obligatorios

Antes de comenzar cualquier implementación, leer y respetar completamente los siguientes archivos:

## 1. `design.md`

Contiene el sistema visual oficial del proyecto.

Debe tomarse como **fuente de verdad para cualquier decisión estética**:

- colores;
- tipografías;
- tamaños;
- espaciados;
- bordes;
- superficies;
- componentes;
- estados;
- botones;
- responsive;
- comportamiento visual.

No inventar una nueva paleta ni reinterpretar el sistema visual si ya está definido allí.

---

## 2. `structure_and_information.md`

Contiene la estructura oficial de la landing y el contenido correspondiente a cada sección.

Debe respetarse como fuente de verdad para:

- orden de las secciones;
- títulos;
- textos;
- servicios;
- CTAs;
- casos;
- metodología;
- tecnologías;
- equipo;
- FAQ;
- contacto;
- estructura SEO.

No modificar contenido comercial importante sin una justificación técnica evidente.

---

# Stack tecnológico

## Framework

**Astro + TypeScript**

La solución debe aprovechar Astro como framework principal, priorizando:

- generación estática;
- performance;
- SEO;
- carga mínima de JavaScript;
- componentización;
- mantenibilidad.

---

## Interactividad

Usar **React únicamente cuando exista una necesidad real de interacción del lado del cliente**.

No convertir componentes estáticos en React sin necesidad.

Priorizar componentes `.astro` para:

- Header
- Hero
- Servicios
- Clientes
- Casos
- Metodología
- Tecnologías
- Equipo
- FAQ estructural
- Footer

React puede utilizarse para elementos como:

- navegación móvil avanzada;
- componentes interactivos complejos;
- animaciones específicas;
- accordions si realmente requieren estado;
- efectos avanzados del Hero.

---

## TypeScript

Todo código interactivo o lógica de aplicación debe escribirse con TypeScript.

Evitar:

```text
any
```

salvo casos excepcionales y debidamente justificados.

Crear interfaces o tipos para estructuras repetitivas como:

- servicios;
- casos;
- tecnologías;
- FAQ;
- navegación;
- equipo;
- CTAs.

---

# Arquitectura de componentes

Construir la página de forma modular.

Estructura orientativa:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   │
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── ClientTrust.astro
│   │   ├── ValueProposition.astro
│   │   ├── Services.astro
│   │   ├── ContactLead.astro
│   │   ├── CaseStudies.astro
│   │   ├── Differentiators.astro
│   │   ├── Methodology.astro
│   │   ├── Technologies.astro
│   │   ├── Team.astro
│   │   ├── FAQ.astro
│   │   └── FinalCTA.astro
│   │
│   └── ui/
│       ├── Button.astro
│       ├── SectionHeader.astro
│       ├── Container.astro
│       └── ...
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   └── index.astro
│
├── data/
│   └── site.ts
│
└── styles/
```

No es obligatorio reproducir exactamente esta estructura si existe una solución técnicamente mejor, pero mantener una separación clara entre:

- layout;
- secciones;
- componentes UI reutilizables;
- contenido;
- lógica.

---

# Fuente de contenido

Evitar hardcodear repetidamente datos dentro de los componentes.

Centralizar cuando sea conveniente:

- servicios;
- navegación;
- tecnologías;
- FAQ;
- metodología;
- casos;
- equipo;
- WhatsApp.

Ejemplo:

```text
src/data/site.ts
```

Los componentes deben consumir estas estructuras para facilitar mantenimiento futuro.

---

# Estructura de la Landing

Implementar exactamente la jerarquía establecida en `structure_and_information.md`.

Orden principal:

```text
Header
Hero
Clientes / Trust Bar
Propuesta de valor
Servicios
Formulario / Lead hacia WhatsApp
Casos de éxito
Diferenciadores
Metodología
Tecnologías
Equipo
FAQ
CTA final
Footer
```

El formulario de contacto **NO debe quedar relegado al final de la página**.

Debe aparecer después de Servicios, cuando el usuario ya entendió:

1. qué hace Beira;
2. para quién trabaja;
3. qué servicios ofrece.

El resto de la landing debe reforzar confianza para quienes todavía no estén listos para convertir.

---

# Hero

El Hero es la sección más importante de la landing.

Debe tener una presencia visual fuerte e inmediata.

Objetivos:

- comunicar posicionamiento B2B;
- transmitir capacidad tecnológica;
- generar impacto visual;
- conducir rápidamente hacia WhatsApp;
- evitar apariencia de plantilla genérica.

---

## Interacción visual del Hero

Implementar una experiencia visual sofisticada pero controlada.

Se permite utilizar:

- parallax;
- depth layers;
- movimiento suave basado en scroll;
- transformación sutil de imágenes;
- elementos flotantes;
- máscaras;
- líneas;
- grids;
- efectos de profundidad;
- microinteracciones.

La experiencia debe sentirse moderna y premium.

No utilizar efectos por simple decoración.

Cada interacción debe reforzar percepción de:

- tecnología;
- profundidad;
- precisión;
- dinamismo.

---

## Parallax

El parallax puede utilizarse principalmente en el Hero.

Debe ser sutil.

Ejemplo conceptual:

```text
background      → movimiento mínimo
imagen principal → velocidad intermedia
elementos UI     → velocidad ligeramente superior
contenido textual → estable
```

Evitar scroll-jacking.

Nunca bloquear ni modificar el scroll natural del navegador.

---

## Restricciones de performance

Los efectos del Hero no deben perjudicar Core Web Vitals.

Priorizar:

- CSS transforms;
- `translate3d`;
- `opacity`;
- `will-change` sólo donde corresponda;
- requestAnimationFrame si fuera necesario.

Evitar animar continuamente:

- width;
- height;
- margin;
- top;
- left.

---

# Motion Design

La página debe sentirse viva y refinada, no estática.

Implementar un lenguaje de movimiento consistente.

---

## Entrada de secciones

Las secciones pueden aparecer progresivamente mediante:

- fade;
- translate vertical leve;
- stagger;
- reveal.

Ejemplo:

```text
opacity: 0 → 1
translateY: 20px → 0
```

Mantener animaciones breves y naturales.

---

## Scroll animations

Aplicar selectivamente en:

- títulos;
- cards;
- métricas;
- metodología;
- casos;
- logos;
- tecnologías.

No animar cada párrafo individualmente.

---

## Hover states

Todo elemento interactivo debe responder claramente al hover.

Ejemplos:

- botones;
- tarjetas de servicios;
- casos;
- enlaces;
- logos con vínculo;
- iconos.

Los estados hover pueden incluir:

- desplazamiento de 2–4px;
- cambio de borde;
- cambio de fondo;
- transición de icono;
- arrow animation;
- reveal de contenido secundario.

---

## Transiciones

Utilizar transiciones suaves y consistentes.

Evitar:

- rebotes exagerados;
- efectos cartoon;
- elasticidad excesiva;
- animaciones lentas.

La personalidad debe ser:

**tech + corporativa + moderna.**

---

# Librerías de animación

No agregar dependencias pesadas sin necesidad.

Si el proyecto ya incluye Framer Motion y existe una razón válida, puede utilizarse en componentes React específicos.

Para animaciones simples preferir:

- CSS;
- IntersectionObserver;
- Web Animations API.

No convertir toda la página a React únicamente para usar Framer Motion.

---

# Aceternity UI

Puede utilizarse como fuente de inspiración o para elementos gráficos modernos, pero:

- no copiar estilos que contradigan `design.md`;
- no introducir colores nuevos;
- no abusar de glow;
- no utilizar fondos futuristas genéricos;
- no convertir el sitio en una demo de componentes.

Usarlo únicamente cuando aporte valor visual real.

---

# Dirección UX

La landing debe tener una narrativa progresiva.

## Primer bloque

Debe responder:

```text
¿Quiénes son?
¿Qué hacen?
¿Por qué debería interesarme?
¿Cómo los contacto?
```

---

## Segundo bloque

Debe responder:

```text
¿Alguien ya confió en ellos?
```

---

## Servicios

Debe responder:

```text
¿Pueden resolver mi problema?
```

---

## Formulario intermedio

Debe ofrecer conversión inmediatamente.

---

## Casos + metodología + tecnología

Deben responder:

```text
¿Tienen experiencia?
¿Cómo trabajan?
¿Son técnicamente capaces?
```

---

## Equipo

Debe responder:

```text
¿Quién está detrás?
```

---

## FAQ

Debe eliminar objeciones.

---

## CTA final

Debe ofrecer nuevamente conversión sin repetir innecesariamente contenido anterior.

---

# WhatsApp como conversión principal

Todos los CTAs principales deben utilizar WhatsApp según lo definido en `structure_and_information.md`.

Crear una función reutilizable para generar URLs.

Ejemplo conceptual:

```ts
getWhatsAppUrl(message: string)
```

No duplicar manualmente URLs completas en cada componente.

---

## Formularios

El formulario ubicado después de Servicios debe construir dinámicamente el mensaje.

Campos definidos en `structure_and_information.md`.

Flujo:

```text
Usuario completa formulario
        ↓
Validación
        ↓
Generar mensaje
        ↓
encodeURIComponent()
        ↓
Abrir WhatsApp
        ↓
Usuario confirma envío
```

No enviar datos silenciosamente sin que el usuario vea la conversación.

---

# Tracking de conversiones

Preparar los CTAs para tracking.

Agregar atributos consistentes como:

```html
data-analytics="whatsapp" data-location="hero"
```

Ejemplos de ubicaciones:

```text
header
hero
services
lead-form
case-study
methodology
final-cta
floating-button
```

La implementación debe quedar preparada para conectar posteriormente:

- Google Tag Manager;
- GA4;
- Meta Pixel si fuera necesario.

---

# Botón flotante de WhatsApp

Implementar un botón flotante persistente.

Debe:

- no tapar contenido;
- mantenerse visible;
- tener `aria-label`;
- ser accesible con teclado;
- utilizar el mensaje genérico definido para la landing.

Evitar animaciones permanentes tipo pulso.

Puede utilizar una entrada inicial muy sutil.

---

# SEO

SEO es prioridad de implementación.

La página debe generarse como HTML semántico real.

---

## Jerarquía

Sólo un:

```html
<h1></h1>
```

Usar:

```html
<h2></h2>
```

para secciones principales.

Y:

```html
<h3></h3>
```

para servicios, casos y subsecciones.

No utilizar headings sólo por tamaño visual.

---

## Metadata

Configurar como mínimo:

```text
title
description
canonical
Open Graph
Twitter Cards
robots

Todos los valores deben centralizarse y ser fáciles de editar.

---

# Structured Data

Preparar JSON-LD para:

- Organization;
- ProfessionalService;
- Service;
- FAQPage.

No crear datos ficticios.

Si falta información, dejar estructura preparada o excluir el dato.

---

# URLs y navegación

Como el MVP será una landing:

```text
/
```

Los links del menú deben utilizar anchors.

Ejemplo:

```text
#servicios
#casos
#metodologia
#equipo
#contacto
```

Implementar scroll suave sólo si no afecta accesibilidad.

Respetar:

```css
prefers-reduced-motion
```

---

# HTML semántico

Priorizar elementos correctos:

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <aside>
            <footer></footer>
          </aside>
        </article>
      </section>
    </main>
  </nav>
</header>
```

No construir toda la página mediante `<div>`.

---

# Accesibilidad

Cumplir como mínimo WCAG AA.

---

## Requisitos

- contraste adecuado;
- navegación completa mediante teclado;
- foco claramente visible;
- `aria-label` donde corresponda;
- labels reales en formularios;
- alt descriptivos;
- landmarks;
- botones semánticos;
- links semánticos;
- targets táctiles adecuados.

---

## Motion accessibility

Todo efecto no esencial debe respetar:

```css
@media (prefers-reduced-motion: reduce);
```

En este modo:

- desactivar parallax;
- eliminar desplazamientos;
- reducir animaciones;
- mantener únicamente cambios de estado necesarios.

---

# Responsive

Diseñar mobile-first.

Validar como mínimo:

```text
320px
375px
430px
768px
1024px
1280px
1440px+
```

No asumir desktop como diseño base.

---

# Mobile

En dispositivos pequeños:

- evitar parallax complejo;
- reducir efectos decorativos;
- simplificar animaciones;
- mantener jerarquía clara;
- priorizar CTA;
- evitar cards demasiado altas;
- asegurar botones cómodos;
- mantener WhatsApp accesible.

El Hero mobile debe seguir siendo visualmente atractivo sin depender del efecto desktop.

---

# Performance

Objetivos:

```text
LCP < 2.5 s
INP < 200 ms
CLS < 0.1
```

Idealmente aspirar a mejores valores.

---

## Imágenes

Utilizar herramientas nativas de Astro cuando correspondan.

Priorizar:

```text
AVIF
WebP
responsive images
srcset
sizes
lazy loading
```

La imagen principal del Hero puede cargarse de manera prioritaria.

No lazy-loadear el elemento responsable del LCP.

---

## JavaScript

Minimizar JavaScript enviado al cliente.

Revisar cada componente interactivo y preguntarse:

> ¿Esto puede resolverse sin hidratar React?

Si la respuesta es sí, usar Astro/CSS.

---

# Calidad de código

Mantener:

- código simple;
- componentes pequeños;
- responsabilidades claras;
- tipos reutilizables;
- nombres descriptivos;
- cero duplicación innecesaria.

Evitar sobreingeniería.

---

# Componentes reutilizables

Crear componentes sólo donde aporten consistencia real.

Posibles componentes:

```text
Container
SectionHeader
CTAButton
WhatsAppButton
ServiceCard
CaseStudyCard
TechnologyGroup
ProcessStep
FAQItem
```

No abstraer elementos utilizados una única vez si eso dificulta lectura.

---

# Contenido provisional

Cuando `structure_and_information.md` indique:

```text
Pendiente
```

no inventar datos.

Esto incluye especialmente:

- métricas;
- testimonios;
- integrantes;
- resultados;
- clientes;
- certificaciones.

Mantener el componente preparado para recibirlos posteriormente.

---

# Estados incompletos

Si una sección no tiene suficiente información real para mostrarse correctamente:

1. mantener la estructura preparada;
2. no generar información falsa;
3. ocultar temporalmente elementos vacíos si degradan UX.

---

# Formularios y validación

La validación debe ocurrir antes de abrir WhatsApp.

Mostrar errores claros.

Ejemplos:

```text
Ingresá tu nombre.
Contanos brevemente qué necesitás resolver.
```

No utilizar:

```text
Campo inválido
Error
```

si puede expresarse de forma más útil.

---

# Seguridad

No incorporar secretos dentro del frontend.

No utilizar variables privadas dentro de componentes ejecutados en cliente.

El número de WhatsApp puede ser público.

---

# Footer

El footer debe funcionar como cierre institucional, no como una segunda landing.

Incluir únicamente la información definida en `structure_and_information.md`.

No agregar columnas o enlaces ficticios.

---

# Criterios visuales importantes

Aunque el sistema visual esté definido en `design.md`, la implementación debe respetar los siguientes principios:

- apariencia premium;
- fuerte jerarquía tipográfica;
- espacios amplios;
- composición editorial;
- contraste claro entre secciones;
- evitar saturación visual;
- motion discreto pero perceptible;
- cards sólo cuando tengan función real;
- coherencia absoluta entre desktop y mobile.

No construir una landing formada únicamente por:

```text
título
texto
grid de cards
título
texto
grid de cards
```

Generar variación compositiva entre secciones para mantener interés visual.

---

# Innovación visual

Se permite experimentar en puntos concretos.

Especialmente:

## Hero

Puede incorporar:

- parallax;
- UI floating elements;
- clipping;
- masks;
- visual layers;
- subtle grid;
- animated lines;
- hover depth;
- mouse interaction controlada.

---

## Metodología

Puede utilizar:

- progress line;
- timeline;
- sticky storytelling;
- step reveal.

Sin perjudicar navegación mobile.

---

## Tecnologías

Puede incorporar movimiento suave, marquee controlado o agrupación interactiva.

No utilizar un marquee infinito si afecta lectura o accesibilidad.

---

## Casos

Puede utilizar cards editoriales de gran formato.

Evitar sliders innecesarios para apenas 2–3 casos.

---

# No usar

Evitar explícitamente:

- glassmorphism excesivo;
- blobs aleatorios;
- gradientes multicolor ajenos a la marca;
- purple tech aesthetic;
- neon;
- glow permanente;
- partículas sin propósito;
- scroll horizontal forzado;
- scroll-jacking;
- cursor personalizado;
- animaciones que dificulten leer;
- carruseles para contenido que podría mostrarse directamente.

---

# Progressive Enhancement

El contenido principal debe permanecer accesible incluso si JavaScript falla.

Sin JavaScript el usuario todavía debe poder:

- leer la página;
- conocer los servicios;
- navegar mediante anchors;
- acceder a links básicos;
- identificar canales de contacto.

---

# Preparación para evolución futura

Aunque el MVP es una landing, desarrollar con una arquitectura preparada para crecer posteriormente hacia:

```text
/servicios/
/casos/
/nosotros/
```

No es necesario crear esas rutas ahora.

Solo evitar una arquitectura que impida hacerlo fácilmente.

---

# QA obligatorio

Antes de considerar terminado el trabajo, verificar:

## Funcional

- todos los anchors;
- menú desktop;
- menú mobile;
- todos los CTAs;
- generación de WhatsApp;
- formulario;
- botón flotante;
- links externos.

## SEO

- H1 único;
- headings correctos;
- title;
- description;
- canonical;
- Open Graph;
- JSON-LD;
- sitemap;
- robots.

## Responsive

- sin overflow horizontal;
- formulario usable;
- cards sin contenido cortado;
- CTAs accesibles;
- Hero correcto.

## Accesibilidad

- teclado;
- focus;
- labels;
- alt;
- contraste;
- reduced motion.

## Performance

Ejecutar y revisar:

```bash
npm run build
```

o:

```bash
astro build
```

Corregir cualquier warning relevante.

---

# Resultado esperado

La implementación final debe sentirse como la web de una **consultora tecnológica B2B seria y moderna**, no como:

- una plantilla genérica de agencia;
- un portfolio personal;
- una landing para emprendedores;
- una demo de efectos visuales.

Debe combinar:

```text
Confianza
+
Capacidad técnica
+
Impacto visual
+
Excelente performance
+
SEO
+
Conversión
```

El visitante debe poder comprender rápidamente:

> Beira entiende tecnología y negocio, tiene experiencia real, puede ejecutar proyectos complejos y es fácil iniciar una conversación con su equipo.

La implementación debe tomar:

**`design.md` como fuente de verdad visual**

y

**`structure_and_information.md` como fuente de verdad estructural y de contenido.**

Ante cualquier conflicto entre decisiones propias y estos documentos, priorizar siempre esos archivos.