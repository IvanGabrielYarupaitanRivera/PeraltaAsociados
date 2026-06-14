# View Transitions

**Creado:** 2025-06-13
**Verificado:** MCP Astro Docs (API Astro 6) + Gemini
**Prioridad:** Media
**Duración estimada:** ~30 min

---

## Objetivo

Implementar transiciones suaves entre páginas usando el componente `<ClientRouter />` de Astro 6, mejorando la experiencia de navegación sin perder la sobriedad institucional del estudio jurídico.

---

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/layouts/Layout.astro` | Importar y colocar `<ClientRouter />` en `<head>` |
| `src/components/shared/SiteHeader.astro` | `transition:persist` + migrar script a `astro:page-load` |
| `src/components/ServicioComponents/ServicioFaq.astro` | Migrar script a `astro:page-load` |
| `src/components/WhatsAppFloat.astro` | Migrar script a `astro:page-load` |
| `src/components/ScrollReveal.astro` | Migrar script a `astro:page-load` |

---

## Paso 1 — Agregar `<ClientRouter />` al Layout

**Archivo:** `src/layouts/Layout.astro`

1. Importar `ClientRouter` de `astro:transitions`
2. Colocar `<ClientRouter />` dentro del `<head>` (antes del slot `head-extra`)
3. La transición `fade` se aplica automáticamente, no requiere configuración adicional

---

## Paso 2 — Header persistente

**Archivo:** `src/components/shared/SiteHeader.astro`

1. Agregar `transition:persist` al elemento `<header>` principal
2. Esto mantiene el header estático e inmóvil mientras el contenido cambia detrás
3. El logo y la navegación no se re-renderizan al navegar entre páginas

---

## Paso 3 — Migrar scripts a `astro:page-load`

**Archivos:** `SiteHeader.astro`, `ServicioFaq.astro`, `WhatsAppFloat.astro`, `ScrollReveal.astro`

En cada componente:

1. Identificar el script que escucha `DOMContentLoaded`
2. Reemplazar `document.addEventListener("DOMContentLoaded", ...)` por `document.addEventListener("astro:page-load", ...)`
3. Verificar que no haya listeners duplicados (en `astro:page-load`, los selectores deben buscar elementos frescos en el DOM)

---

## Paso 4 — Verificar

1. `npx astro check` sin errores
2. `npm run build` exitoso
3. Navegar entre páginas en dev y verificar:
   - Fade suave
   - Header no se mueve
   - Menú móvil funciona después de navegar
   - FAQ funciona después de navegar
   - WhatsApp float funciona después de navegar
   - ScrollReveal se re-ejecuta después de navegar
   - Anclas (`#servicios`) hacen scroll correctamente

---

## Notas técnicas

- `import { ClientRouter } from "astro:transitions"` — componente renombrado en Astro 5
- `<ClientRouter />` acepta prop `fallback="animate"` por defecto para navegadores sin soporte
- `transition:persist` funciona solo si el elemento existe tanto en la página actual como en la nueva
- `astro:page-load` es el evento correcto para scripts post-navegación (las constantes `TRANSITION_PAGE_LOAD` están deprecadas en v6 pero el evento sigue siendo válido)
- Umami no necesita cambios: al estar en `<head>` sin `data-astro-rerun`, persiste automáticamente
