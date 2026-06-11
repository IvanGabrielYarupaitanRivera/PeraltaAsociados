---
name: peralta-asociados
description: Skill de proyecto para Peralta Asociados - sitio web de estudio jurídico en Huancavelica con Astro 5 + Tailwind CSS 4. Incluye guías de branding, componentes, páginas, SEO y despliegue.
---

# ⚖️ Peralta Asociados — Project Skill

## Stack

- **Framework:** Astro 5 (SSG)
- **Estilos:** Tailwind CSS 4 (vía `@tailwindcss/vite`)
- **Iconos:** `astro-icon` + `@iconify-json/mdi` (Material Design Icons)
- **Hosting:** Netlify (con Netlify Forms para el formulario)
- **Fuente:** Source Serif 4 (self-hosted)
- **TypeScript:** `astro/tsconfigs/strict`

## Branding

### Colores

```css
--color-primary:   #171E60  /* Azul oscuro - confianza, profesionalismo */
--color-secondary: #D4AF37  /* Dorado - elegancia, prestigio */
```

### Tipografía

- **Principal:** `Source Serif 4` (serif) — regular 400
- Aplicada globalmente a través de `font-sans` (configurado en global.css)

### Estructura visual

- Fondos de secciones: `bg-neutral-100` con patrón SVG decorativo sutíl
- Cards: Fondo blanco con sombra (`shadow-sm` a `shadow-xl` en hover)
- Encabezados de sección: Líneas decorativas doradas y texto en secondary
- Botones CTA: Primario azul oscuro, hover cambia a secondary
- Header: Sticky con backdrop-blur
- Hero: Gradiente `from-blue-900 via-primary to-blue-900`

## Arquitectura de Componentes

### Página principal (`src/pages/index.astro`)
```
Welcome (ensamblador)
├── Header
├── Hero
├── Servicios
├── Nosotros
├── Equipo
└── Contacto + Footer
```

### Páginas de servicio (`src/pages/derecho-{area}/index.astro`)
```
Layout + ServicioPage
├── Header
├── ServiciosHero (título + descripción + CTA WhatsApp)
├── ServicioVentajas (grid de 6 ventajas con iconos)
└── Footer
```

### Página de contacto (`src/pages/contacto/index.astro`)
```
Layout + ContactoPage
├── ContactHeader (Header con navegación interna)
├── ContactHero
├── FormasContact (grid de 5 cards)
│   ├── WhatsAppSection
│   ├── EmailSection
│   ├── LocationSection
│   ├── FacebookSection
│   └── ChatbotSection
├── Contacto (formulario Netlify)
└── Footer
```

## Páginas del Sitio

| Ruta | Archivo | Propósito |
|---|---|---|
| `/` | `index.astro` | Landing page |
| `/contacto/` | `contacto/index.astro` | Contacto detallado |
| `/derecho-administrativo/` | `derecho-administrativo/index.astro` | Servicio |
| `/derecho-civil/` | `derecho-civil/index.astro` | Servicio |
| `/derecho-laboral/` | `derecho-laboral/index.astro` | Servicio |
| `/derecho-constitucional/` | `derecho-constitucional/index.astro` | Servicio |
| `/exito` | `exito.astro` | Post-formulario |
| `/politica-privacidad` | `politica-privacidad.astro` | Legal |
| `*` (404) | `404.astro` | Error page |

## SEO & Schema

- **Schema:** `LawFirm` con dirección, coordenadas, teléfono, email, horario, fundador
- **Layout:** Open Graph, Twitter Cards, meta geográficos, canonical, keywords
- **Verificación:** Google Search Console (`X9ZpfzQYW6XW9Qskd50SJe1JMEgTGkCHv7uQbQxxD1o`)

## Despliegue

```bash
npm run build    # Genera dist/
npm run preview  # Vista previa local
```

Netlify detecta automáticamente Astro y despliega.
El formulario usa Netlify Forms (`data-netlify="true"` + honeypot).

## Comandos Útiles

```bash
npm run dev      # Desarrollo en localhost:4321
npm run build    # Build producción
npm run astro    # CLI de Astro
```

## Convenciones

- Usar `Image` de `astro:assets` para imágenes (WebP, lazy loading)
- Usar `Icon` de `astro-icon/components` para iconos MDI
- Todas las imágenes en `src/assets/images/` organizadas por sección
- Iconos SVG personalizados en `src/assets/icons/`
- Layout envuelve todo con metadatos SEO
- Formulario usa Netlify Forms con honeypot anti-spam
