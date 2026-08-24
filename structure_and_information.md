# Structure and Information.md

## Estructura Oficial de la Landing y Contenido

La landing debe tener una narrativa progresiva distribuida en los siguientes bloques principales, en este orden exacto:

### 1. Header
- Menú desktop con anchors a secciones
- Menú mobile (hamburger)
- Todos los anchors deben funcionar correctamente

### 2. Hero
- La sección más importante de la landing
- Posicionamiento B2B inmediato
- Capacidad tecnológica comunicada
- Impacto visual fuerte
- CTA hacia WhatsApp principal
- Evitar apariencia de plantilla genérica

### 3. Clientes / Trust Bar
- Empresas que ya confían en Beira
- Construir confianza inicial

### 4. Propuesta de valor
- Qué ofrecen y para quién
- Diferenciación clara

### 5. Servicios (ubicada después de la propuesta)
- Lista de servicios ofrecidos
- Para quién trabajan
- Estructura: después de que el usuario entienda qué hace Beira, para quién y qué servicios ofrece

### 6. Formulario / Lead hacia WhatsAP
- Debe aparecer después de Servicios, NO al final
- El usuario debe haber entendido primero la oferta
- Ofrece conversión inmediatamente
- Campos definidos en structure_and_information.md
- Flujo: usuario completa formulario → validación → generar mensaje → encodeURIComponent() → abrir WhatsApp → usuario confirma envío
- Validación antes de abrir WhatsApp
- Mostrar errores claros (ej. "Ingresá tu nombre", "Contanos brevemente qué necesitás resolver")
- No usar: "Campo inválido", "Error" si puede expresarse de forma más útil

### 7. Casos de éxito
- Proyectos que demuestran experiencia
- 2-3 cases (evitar sliders innecesarios)
- Cards editoriales de gran formato
- Mostrar experiencia y capacidad técnica

### 8. Diferenciadores
- Por qué elegir Beira sobre la competencia
- 4 puntos clave como mínimo
- Experiencia comprobada, enfoque B2B, metodología ágil, equipo experto

### 9. Metodología
- Cómo trabajan los proyectos
- Progress line, timeline o storytelling sticky
- Sin perjudicar navegación mobile
- 4 pasos o stages del proceso

### 10. Tecnologías
- Tecnologías que utilizan
- Movimiento suave, marquee controlado o agrupación interactiva
- No utilizar marquee infinito si afecta lectura o accesibilidad
- Cards o groups de tecnología

### 11. Equipo
- Quién está detrás del proyecto
- Fotos, nombres, roles
- Genera confianza al conocer al equipo

### 12. FAQ
- Preguntas frecuentes que eliminen objeciones
- Eliminar objeciones antes de la conversión
- Formato: pregunta y respuesta

### 13. CTA final
- Segunda oportunidad de conversión
- Sin repetir innecesariamente contenido anterior
- Ofrecer nuevamente la conversación por WhatsApp

### 14. Footer
- Cierre institucional
- No ser una segunda landing
- Sólo información definida en structure_and_information.md
- No agregar columnas o enlaces ficticios

## Contenido por Sección

### Hero
- Posicionamiento B2B
- Capacidad tecnológica
- Llamado a acción WhatsApp

### Servicios
- Qué hace Beira
- Para quién trabaja
- Lista de servicios ofrecidos

### Formulario (después de Servicios)
- Nombre completo
- Qué necesitás resolver (área de texto)
- Validación antes de WhatsApp
- Generar mensaje dinámico

### Casos de Éxito
- 2-3 casos seleccionados
- Sin sliders innecesarios
- Cards editoriales de gran formato
- Resultados medidos cuando sea posible

### Metodología
- Steps 1-4 o stages del proceso
- Descubrimiento, diseño, desarrollo, deploy
- Opciones: progress line, timeline, sticky storytelling

### Tecnologías
- Icons o logos de tecnologías usadas
- React, Node.js, TypeScript, Python, AWS, Docker u otras relevantes
- Agrupación visual coherente

### Equipo
- Miembros clave del equipo
- Fotos profesionales o illustrations
- Roles: CTO, Fullstack, Diseñador, etc.

### FAQ
- 4-6 preguntas frecuentes
- Preguntas que eliminen objeciones comunes
- Formato: pregunta → respuesta

### CTA Final
- Llamado a la acción final
- WhatsApp nuevamente
- Mensaje diferente o reforzado

### Footer
- Años (2024, etc.)
- Contacto: hola@beira.ar
- WhatsApp link
- Enlaces sociales si corresponde
- Derechos reservados

## SEO Estructural

- H1 único por página
- Headings correctos jerárquicos (h2 para secciones principales, h3 para servicios, casos, subsecciones)
- Título meta configurable y editable
- Description meta configurable
- Canonical URL
- Open Graph tags completos
- Twitter Cards
- robots.txt preparado
- Sitemap.xml
- JSON-LD: Organization, ProfessionalService, Service, FAQPage

## Tipo de Contenido

- B2B (Business to Business)
- Consultora tecnológica
- Enfoque en conversión WhatsApp
- Sin contenido de emprendedores individuales
- Sin plantillas genéricas de agencia
- Sin portfolios personales

## Fuentes de Verdad

- `design.md` como fuente de verdad visual (colores, tipografías, espaciado, componentes, estados, responsive, comportamiento visual)
- `structure_and_information.md` como fuente de verdad estructural y de contenido (orden de secciones, títulos, textos, servicios, CTAs, casos, metodología, tecnologías, equipo, FAQ, contacto, estructura SEO)

**No modificar contenido comercial importante sin una justificación técnica evidente.**

## Advertencias Importantes

- No inventar datos: métricas, testimonios, integrantes, resultados, clientes, certificaciones cuando indiquen "Pendiente"
- Mantener estructura preparada para recibirlos posteriormente
- Si una sección no tiene suficiente información real: mantener estructura preparada, no generar información falsa, ocultar temporalmente elementos vacíos si degradan UX
- Evitar expresiones de validación poco útiles: "Campo inválido", "Error" (usar "Ingresá tu nombre", "Contanos brevemente qué necesitás resolver")
- No copiar estilos que contradigan design.md
- No introducir colores nuevos fuera de la paleta definida
- No abusar de glow o efectos futuristas genéricos
- No convertir el sitio en una demo de componentes

## Jerarquía Visual

- Cada sección debe tener variación compositiva respecto a la anterior
- Evitar landing formada únicamente por: título → texto → grid de cards → título → texto → grid de cards
- Generar variación compositiva entre secciones para mantener interés visual
- Coherencia absoluta entre desktop y mobile

## Motion Design

- La página debe sentirse viva y refinada, no estática
- Lenguaje de movimiento consistente
- Animaciones breves y naturales
- Hover states en todos los elementos interactivos
- Transiciones suaves y consistentes
- Evitar rebotes exagerados, efectos cartoon, elasticidad excesiva, animaciones lentas
- Personalidad: tech + corporativa + moderna
- Reduced motion media query must work: `@media (prefers-reduced-motion: reduce)`

## Accesibilidad WCAG AA

- Contraste adecuado entre texto y fondo
- Navegación completa mediante teclado
- Foco claramente visible
- `aria-label` donde corresponda
- Labels reales en formularios (no placeholders como único texto)
- Alt descriptivos en imágenes
- Landmarks (header, nav, main, section, footer)
- Botones semánticos y links semánticos
- Targets táctiles adecuados (mínimo 44px-48px)

## Motion Accessibility

- Todo efecto no esencial debe respetar `@media (prefers-reduced-motion: reduce)`
- En modo reduce motion:
  - Desactivar parallax
  - Eliminar desplazamientos innecesarios
  - Reducir animaciones a cambios de estado esenciales
  - Mantener únicamente lo estrictamente necesario

## Mobile

- Mobile-first: diseñar para 320px primero
- Evitar parallax complejo en mobile
- Reducir efectos decorativos en pantallas pequeñas
- Simplificar animaciones manteniendo esencia
- Mantener jerarquía clara, el CTA debe ser prioritario
- Evitar cards demasiado altas para thumb reach
- Asegurar botones cómodos de tocar
- Mantener WhatsApp accesible en mobile
- El Hero mobile debe seguir siendo visualmente atractivo sin depender del efecto desktop

## Performance

- LCP < 2.5 s
- INP < 200 ms
- CLS < 0.1
- Idealmente aspirar a mejores valores

### Imágenes

- Utilizar herramientas nativas de Astro (AVIF, WebP, srcset, sizes, lazy loading)
- La imagen principal del Hero puede cargarse de manera prioritaria
- No lazy-loadear el elemento responsable del LCP

### JavaScript

- Minimizar JavaScript enviado al cliente
- Revisar cada componente interactivo y preguntarse: "¿Esto puede resolverse sin hidratar React?"
- Si la respuesta es sí, usar Astro/CSS

## Componentes Reutilizables

Crear componentes sólo donde aporten consistencia real:

- Container
- SectionHeader
- CTAButton
- WhatsAppButton
- ServiceCard
- CaseStudyCard
- TechnologyGroup
- ProcessStep
- FAQItem

No abstraer elementos utilizados una única vez si eso dificulta lectura.

## Contenido Provisional

Cuando structure_and_information.md indique "Pendiente":

- No inventar datos
- Esto incluye especialmente: métricas, testimonios, integrantes, resultados, clientes, certificaciones
- Mantener el componente preparado para recibirlos posteriormente

## Estados Incompletos

Si una sección no tiene suficiente información real para mostrarse correctamente:

1. Mantener la estructura preparada
2. No generar información falsa
3. Ocultar temporalmente elementos vacíos si degradan UX

## Criterios Visuales Importantes

Aunque el sistema visual esté definido en design.md, la implementación debe respetar:

- Apariencia premium
- Fuerte jerarquía tipográfica
- Espacios amplios
- Composición editorial
- Contraste claro entre secciones
- Evitar saturación visual
- Motion discreto pero perceptible
- Cards sólo cuando tengan función real
- Coherencia absoluta entre desktop y mobile

No construir una landing formada únicamente por:
- título → texto → grid de cards → título → texto → grid de cards

Generar variación compositiva entre secciones para mantener interés visual.

## No Usar (Explicitamente)

- glassmorphism excesivo
- blobs aleatorios
- gradientes multicolor ajenos a la marca
- purple tech aesthetic
- neon
- glow permanente
- partículas sin propósito
- scroll horizontal forzado
- scroll-jacking
- cursor personalizado
- animaciones que dificulten leer
- carruseles para contenido que podría mostrarse directamente

## Progressive Enhancement

- El contenido principal debe permanecer accesible incluso si JavaScript falla
- Sin JavaScript el usuario todavía debe poder:
  - leer la página
  - conocer los servicios
  - navegar mediante anchors
  - acceder a links básicos
  - identificar canales de contacto

## Preparación para Evolución Futura

Aunque el MVP es una landing, desarrollar con una arquitectura preparada para crecer posteriormente hacia:

- /servicios/
- /casos/
- /nosotros/

No es necesario crear esas rutas ahora. Sólo evitar una arquitectura que impida hacerlo fácilmente.

## QA Obligatorio

Antes de considerar terminado el trabajo, verificar:

### Funcional

- todos los anchors
- menú desktop
- menú mobile
- todos los CTAs
- generación de WhatsApp
- formulario
- botón flotante
- links externos

### SEO

- H1 único
- headings correctos
- title
- description
- canonical
- Open Graph
- JSON-LD
- sitemap
- robots

### Responsive

- sin overflow horizontal
- formulario usable
- cards sin contenido cortado
- CTAs accesibles
- Hero correcto

### Accesibilidad

- teclado
- focus
- labels
- alt
- contraste
- reduced motion

### Performance

Ejecutar y revisar:
- npm run build
- o: astro build

Corregir cualquier warning relevante.

## Resultado Esperado

La implementación final debe sentirse como la web de una **consultora tecnológica B2B seria y moderna**, no como:

- una plantilla genérica de agencia
- un portfolio personal
- una landing para emprendedores
- una demo de efectos visuales

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