# Especificación: Página del Fundador — Ciro Gabriel Yarupaitan Peralta

**Creado:** 2025-06-12
**Refinado:** Gemini (GEO + SEO Local + UX) + MCP Astro Docs (API Astro 6)
**Prioridad:** Alta
**Duración estimada:** ~90 min

---

## Objetivo

Crear una página individual para el fundador en la ruta `/ciro-gabriel-yarupaitan-peralta`, funcionando como **nodo de validación definitiva** (entidad biográfica) para rastreadores de IA (ChatGPT, Gemini, Perplexity) y destino de aterrizaje para tráfico referido por LLMs.

---

## 📂 Estructura de archivos

```
src/
├── pages/
│   └── ciro-gabriel-yarupaitan-peralta/
│       └── index.astro                     → Página /ciro-gabriel-yarupaitan-peralta
├── components/
│   └── ciro-gabriel-yarupaitan-peralta/
│       ├── SchemaAttorney.astro            → JSON-LD @graph Person/Attorney
│       ├── Hero.astro                      → Foto + nombre + títulos + CTA
│       ├── Bio.astro                       → Biografía + Casos de Éxito
│       └── Trayectoria.astro               → Formación + especialidades + membresías
├── assets/
│   └── images/
│       └── ciro-gabriel-yarupaitan-peralta/
│           └── (perfil-profesional.jpg)     ← Pendiente de agregar
```

---

## Paso 1 — Crear carpetas y estructura de archivos

### Instrucciones
1. Crear carpeta `src/pages/ciro-gabriel-yarupaitan-peralta/`
2. Crear carpeta `src/components/ciro-gabriel-yarupaitan-peralta/`
3. Crear carpeta `src/assets/images/ciro-gabriel-yarupaitan-peralta/`

---

## Paso 2 — Crear `SchemaAttorney.astro`

**Archivo:** `src/components/ciro-gabriel-yarupaitan-peralta/SchemaAttorney.astro`

### Objetivo
Componente standalone que emite un `<script type="application/ld+json">` con un `@graph` vinculando al fundador (`Attorney`) bidireccionalmente con el `LegalService` principal.

### Propiedades "Game Changer" (según Gemini)

| Propiedad | Impacto | Propósito |
|---|---|---|
| `sameAs` | **Game Changer** | Enlaces a perfiles verificables (LinkedIn, padrón del Colegio de Abogados) |
| `memberOf` → `Organization` | **Game Changer** | Colegio de Abogados de Huancavelica |
| `alumniOf` → `EducationalOrganization` | **Game Changer** | Universidad + enlace Wikipedia |
| `knowsAbout` | **High Impact** | Especializaciones como entidades semánticas |
| `hasCredential` | **Nice to Have** | `EducationalOccupationalCredential` |
| `worksFor` → `@id` | **Game Changer** | Enlace bidireccional con el `LegalService` |

### Detalle Astro 6 (del MCP)
- Usar `is:inline` en el `<script>` para que Astro no procese ni deduplique el JSON-LD (según docs oficiales: cualquier atributo en `<script>` desactiva el procesamiento de Astro)
- El `@id` del `LegalService` debe coincidir con el usado en `Layout.astro`

### JSON-LD

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Attorney",
      "@id": "https://peraltaasociados.com/#attorney-ciro",
      "name": "Ciro Gabriel Yarupaitan Peralta",
      "givenName": "Ciro Gabriel",
      "familyName": "Yarupaitan Peralta",
      "jobTitle": "Abogado Fundador y Director Principal",
      "telephone": "+51976762237",
      "image": "https://peraltaasociados.com/assets/images/ciro-gabriel-yarupaitan-peralta/perfil-profesional.jpg",
      "sameAs": [
        "[URL_LINKEDIN - PENDIENTE]",
        "[URL_PADRON_COLEGIO - PENDIENTE]"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "[UNIVERSIDAD - PENDIENTE]",
        "sameAs": "[URL_WIKIPEDIA_UNIVERSIDAD - PENDIENTE]"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "Colegio de Abogados de Huancavelica"
      },
      "knowsAbout": [
        "Derecho Civil",
        "Derecho Laboral",
        "Derecho Administrativo",
        "Derecho Constitucional",
        "Litigios Complejos",
        "Asesoría Jurídica en Huancavelica"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Abogado Colegiado"
      },
      "worksFor": {
        "@type": "LegalService",
        "@id": "https://peraltaasociados.com/#legal-service"
      }
    }
  ]
}
```

**Props:** ninguna (componente auto-contenido)

---

## Paso 3 — Crear `Hero.astro`

**Archivo:** `src/components/ciro-gabriel-yarupaitan-peralta/Hero.astro`

### Objetivo
Sección hero con foto profesional + nombre + títulos + CTA contextual.

### Props

```ts
interface Props {
  nombre: string;           // "Ciro Gabriel Yarupaitan Peralta"
  titulo: string;           // "Abogado Fundador y Director Principal"
  foto?: ImageMetadata;     // Imagen importada o undefined
  colegiatura: string;      // "[NÚMERO DE COLEGIATURA]"
  experiencia: string;      // "[X] años de experiencia"
  slogan: string;           // "Comprometido con la justicia en Huancavelica desde [AÑO]"
}
```

### Layout
- Dos columnas en desktop: foto izquierda + info derecha
- En mobile: foto arriba, info abajo

### Foto (con `<Picture />`)

Usar `<Picture />` de `astro:assets` según docs oficiales del MCP:
- `formats={['avif', 'webp']}` — orden: más moderno primero
- `widths={[400, 800]}` — genera srcset responsivo
- `sizes="(max-width: 768px) 100vw, 400px"` — requerido cuando se usa `widths`
- `loading="eager"` — above the fold, prioridad máxima
- `alt` obligatorio según Astro: nombre del fundador
- Clases: `w-full h-auto object-cover object-top aspect-3/4`
- Directiva `transition:name="founder-avatar"` para futuras View Transitions

### Información
- **H1**: estrictamente el nombre (`text-balance` — evita saltos de línea asimétricos)
- **Subtítulo**: cargo en `<span>` / `<p>` inmediato debajo del H1
- **Datos**: colegiatura, años de experiencia, slogan con separadores visuales
- **Tipografía**: `text-pretty` en párrafos para evitar viudas/huérfanos

### CTA
- Botón visible: "Agendar Consulta con el Dr. Yarupaitan"
- Enlace WhatsApp contextual con mensaje predefinido:
  ```
  https://wa.me/51976762237?text=Hola,%20deseo%20agendar%20una%20consulta%20legal%20directa%20con%20el%20Dr.%20Ciro%20Yarupaitan.
  ```
- Tonos: botón con `bg-secondary` (gold) sobre fondo oscuro para contraste

### Fondo
- Gradiente corporativo: `bg-linear-to-br from-primary via-primary to-blue-900`

### ScrollReveal
- `delay="0"` (primer elemento visible)

---

## Paso 4 — Crear `Bio.astro`

**Archivo:** `src/components/ciro-gabriel-yarupaitan-peralta/Bio.astro`

### Props

```ts
interface Props {
  biografia: string;    // Texto biográfico en prosa
  logros: string[];     // Array de logros destacados
  vision: string;       // Filosofía profesional
}
```

### Layout
- Sección blanca con padding generoso
- H2: "Perfil y Visión Jurídica" (sin decoración excesiva)
- Párrafo biográfico con `text-pretty` (prevenir viudas/huérfanos en textos largos)

### Casos de Éxito
- Título H3: "Casos de Éxito y Reconocimientos" (NO "Testimonios de Clientes" — suena a retail)
- Lista de logros con icono de verificación (`✓`) y tono institucional
- Cada logro enfatiza resolución de controversias, ética profesional, confidencialidad

### SEO Local (señales geo-semánticas)
Incorporar en la narrativa de la biografía:
- **"Corte Superior de Justicia de Huancavelica"** — litigios presentados
- **"Gobierno Regional de Huancavelica"** o **"Municipalidad Provincial"** — relevante para Derecho Administrativo

### ScrollReveal
- `delay="100"`

---

## Paso 5 — Crear `Trayectoria.astro`

**Archivo:** `src/components/ciro-gabriel-yarupaitan-peralta/Trayectoria.astro`

### Props

```ts
interface FormacionItem {
  titulo: string;       // Título obtenido
  institucion: string;  // Universidad / institución
  anio: string;         // Año de egreso
}

interface EspecialidadItem {
  nombre: string;
  descripcion: string;
  icono: string;        // Nombre del icono de astro-icon (mdi)
}

interface Props {
  formacion: FormacionItem[];
  especialidades: EspecialidadItem[];
  membresias: string[];
}
```

### Layout
- Fondo: `BackgroundPattern` variante `subtle` + `ScrollReveal`
- Grid responsivo: 2 columnas en desktop, 1 en mobile
- H2: "Trayectoria Académica y Distinciones"

### Bloque 1: Formación Académica (H3)
- Tarjetas con título, institución, año
- Icono académico por tarjeta

### Bloque 2: Especialidades (H3)
- Grid de tarjetas con icono, nombre, descripción corta
- Usar iconos mdi ya configurados en `astro-icon`

### Bloque 3: Membresías Profesionales (H3)
- Lista con íconos de verificación
- "Colegio de Abogados de Huancavelica" como primer ítem

### ScrollReveal
- `delay="200"`

---

## Paso 6 — Crear la página `index.astro`

**Archivo:** `src/pages/ciro-gabriel-yarupaitan-peralta/index.astro`

### Frontmatter
```astro
---
import Layout from "@layouts/Layout.astro";
import { ScrollReveal, Hero } from "@components";  // + barrel exports
import SchemaAttorney from "@components/ciro-gabriel-yarupaitan-peralta/SchemaAttorney.astro";
import HeroSection from "@components/ciro-gabriel-yarupaitan-peralta/Hero.astro";
import BioSection from "@components/ciro-gabriel-yarupaitan-peralta/Bio.astro";
import TrayectoriaSection from "@components/ciro-gabriel-yarupaitan-peralta/Trayectoria.astro";

// Placeholders hasta que el cliente entregue datos reales
const pageTitle = "Ciro Gabriel Yarupaitan Peralta — Abogado Fundador | Peralta Asociados";
const pageDescription = "Conoce al Dr. Ciro Gabriel Yarupaitan Peralta, abogado fundador de Peralta Asociados. [X] años de experiencia en Derecho Civil, Laboral, Administrativo y Constitucional en Huancavelica.";
---
```

### Metadatos (canonical URL según docs oficiales Astro)
Usar `Astro.url` para construir la canonical URL (el MCP confirma que `Astro.canonicalURL` fue removido en v2).

```astro
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
```

En `<Layout>` pasar:
- `title={pageTitle}`
- `description={pageDescription}`
- `robots="index, follow"`
- `<link rel="canonical" href={canonicalURL} />` en el `<head>` (indispensable para evitar duplicados por UTM params)

### Schema
Inyectar `<SchemaAttorney />` en el `<head>` del Layout.

### Jerarquía de títulos

```
H1: Ciro Gabriel Yarupaitan Peralta
  [span]: Abogado Fundador y Especialista en Derecho Civil y Laboral

H2: Perfil y Visión Jurídica
  Biografía en prosa con text-pretty

H2: Casos de Éxito y Reconocimientos
  Lista de logros institucionales

H2: Trayectoria Académica y Distinciones
  H3: Formación Académica
  H3: Áreas de Práctica Especializada
  H3: Membresías Profesionales
```

### Estructura visual

```
<Layout>
  <!-- SchemaAttorney en head slot -->
  <Hero />          (ScrollReveal delay="0")
  <Bio />           (ScrollReveal delay="100")
  <Trayectoria />   (ScrollReveal delay="200")
</Layout>
```

---

## 🎨 Diseño general

- **Colores:** Identidad corporativa (`#171E60` primary, `#D4AF37` secondary)
- **Tipografía:** Source Serif 4. `text-balance` en H1. `text-pretty` en párrafos.
- **Imágenes:** `<Picture />` con `avif`+`webp`, widths + sizes, `aspect-3/4`
- **CTA:** "Agendar Consulta con el Dr. Yarupaitan" con WhatsApp contextual
- **Sin foto:** La UI debe manejar el caso sin imagen (placeholder visual o layout puramente textual)

---

## 📝 Datos placeholder

| Campo | Placeholder |
|---|---|
| `nombre` | `"Ciro Gabriel Yarupaitan Peralta"` |
| `titulo` | `"Abogado Fundador y Director Principal"` |
| `colegiatura` | `"[NÚMERO DE COLEGIATURA]"` |
| `experiencia` | `"[X] años de experiencia"` |
| `slogan` | `"Comprometido con la justicia en Huancavelica desde [AÑO]"` |
| `foto` | Sin imagen (UI con placeholder visual) |
| `biografia` | `"[TEXTO BIOGRÁFICO - PENDIENTE]"` |
| `vision` | `"[FILOSOFÍA PROFESIONAL - PENDIENTE]"` |
| `logros` | `["[LOGRO 1 - PENDIENTE]", "[LOGRO 2 - PENDIENTE]"]` |
| `formacion` | `[{ titulo: "[TÍTULO - PENDIENTE]", institucion: "[UNIVERSIDAD - PENDIENTE]", anio: "[AÑO]" }]` |
| `especialidades` | 4 objetos con nombre, descripción (placeholder), icono mdi |
| `membresias` | `["Colegio de Abogados de Huancavelica"]` |
| `sameAs` | `["[URL_LINKEDIN]", "[URL_PADRON_COLEGIO]"]` |

---

## ✅ Criterios de aceptación

- [ ] Ruta `/ciro-gabriel-yarupaitan-peralta` funciona (200 OK)
- [ ] Carpetas creadas correctamente (espejo del slug)
- [ ] `SchemaAttorney.astro` con `@graph` vinculado al `LegalService`
- [ ] `<Picture />` con `formats={['avif', 'webp']}`, `widths`, `sizes` correctos
- [ ] `<script is:inline>` para el JSON-LD (no procesado por Astro)
- [ ] H1 estrictamente el nombre (cargo en span/p debajo)
- [ ] H2/H3 siguen jerarquía especificada
- [ ] `text-balance` en H1, `text-pretty` en párrafos
- [ ] CTA "Agendar Consulta con el Dr. Yarupaitan" con WhatsApp contextual
- [ ] Sección "Casos de Éxito" con tono institucional
- [ ] `BackgroundPattern` variante `subtle` en Trayectoria
- [ ] Canonical URL presente con `new URL(Astro.url.pathname, Astro.site)`
- [ ] Menciones a entidades geográficas de Huancavelica en la biografía
- [ ] `astro check` sin errores (0 errors, 0 warnings, 0 hints)
- [ ] `astro build` exitoso
- [ ] Página se ve en mobile + desktop
- [ ] Animaciones ScrollReveal funcionando
- [ ] Datos placeholder visibles y fáciles de reemplazar
