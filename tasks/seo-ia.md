# Especificación: Optimización para IA (AIO / GEO)

**Creado:** 2025-06-11
**Prioridad:** Alta
**Duración estimada:** ~20 min

---

## Objetivo

Preparar el sitio para que **ChatGPT, Gemini, Perplexity, Claude** y **Google AI Overviews** recomienden a Peralta Asociados cuando alguien pregunte "necesito un abogado en Huancavelica".

---

## 📋 Pasos a seguir

### Paso 1 — Ampliar el Schema `LawFirm` con `knowsAbout` + `hasOfferCatalog`

**Archivo:** `src/layouts/Layout.astro`

Agregar dos propiedades al `schemaData`:

**`knowsAbout`** (array de strings):
```json
"knowsAbout": [
  "Derecho Civil",
  "Derecho Laboral",
  "Derecho Administrativo",
  "Derecho Constitucional",
  "Litigios Locales en Huancavelica"
]
```

**`hasOfferCatalog`** con 4 servicios dentro de un `OfferCatalog` → `Offer` → `Service`, cada uno con `name` y `description` descriptivas.

También agregar `legalName` y un `@id`.

### Paso 2 — Crear `public/llms.txt`

**Archivo:** `public/llms.txt`

Archivo Markdown ultraestructurado para que los agentes IA (`gptbot`, `claudebot`, `perplexitybot`) entiendan el negocio sin scrapear el DOM entero.

**Secciones del archivo:**
- Título y descripción corta
- Datos de contacto (NOMBRE, DIRECCIÓN, TELÉFONO, CORREO, WEB)
- Horario de atención
- Áreas de práctica (4 servicios con descripción de 1 línea)
- FAQ (3 preguntas frecuentes con respuestas sobre trámites en Huancavelica)

### Paso 3 — Agregar FAQ + `FAQPage` schema a cada página de servicio

**Archivos afectados:**
- `src/pages/derecho-civil/index.astro`
- `src/pages/derecho-laboral/index.astro`
- `src/pages/derecho-administrativo/index.astro`
- `src/pages/derecho-constitucional/index.astro`

Cada página agregará:
1. Una sección visual de FAQ al final de la página (después de `ServicioVentajas`)
2. Schema `FAQPage` con las mismas preguntas/respuestas

**Ejemplo para Derecho Civil:**
- P: "¿Cuánto tarda un proceso de prescripción adquisitiva en Huancavelica?"
- R: "Depende del caso, pero generalmente entre 6 y 18 meses..."
- P: "¿Qué documentos necesito para una demanda de alimentos?"
- R: "Partida de nacimiento del menor, DNI del demandante..."
- P: "¿Es obligatorio intentar conciliación extrajudicial antes de demandar?"
- R: "Sí, en la mayoría de casos civiles es requisito..."

**Ejemplo para Derecho Laboral:**
- P: "¿Me despidieron sin motivo, puedo pedir reposición?"
- R: "Sí, en Perú la reposición laboral es un derecho..."
- P: "¿Cuánto tiempo tengo para reclamar mis beneficios sociales?"
- R: "El plazo de prescripción es de 4 años..."
- P: "¿Qué hago si no me pagan la CTS?"

### Paso 4 — Mejorar contenido de las páginas de servicio (descripciones más largas)

**Archivos afectados:** los mismos 4 de arriba.

Agregar un párrafo de **escenarios reales** en Huancavelica antes de las ventajas, para dar contexto semántico profundo a los LLMs.

Ejemplo para Derecho Civil:
> "Asesoramos a ciudadanos y familias en Huancavelica que enfrentan problemas de titulación de tierras, contratos de compraventa de inmuebles, procesos de prescripción adquisitiva ante la Corte Superior de Justicia de Huancavelica, así como demandas de pensión de alimentos, conciliaciones extrajudiciales y ejecución de acuerdos conciliatorios."

### Paso 5 — Verificar compilación

```bash
npm run build
```

---

## Respuesta de Gemini (resumen)

| Recomendación | Acción a tomar |
|---|---|
| `knowsAbout` en el schema | ✅ Paso 1 |
| `hasOfferCatalog` + servicios | ✅ Paso 1 |
| `/llms.txt` | ✅ Paso 2 |
| FAQ con `FAQPage` schema | ✅ Paso 3 |
| Contenido semántico con escenarios reales | ✅ Paso 4 |
| Consistencia NAP con Google Maps | — Ya tenemos nombre, dirección y teléfono consistentes |
| **No duplicar** `LocalBusiness` | — Ya usamos `LawFirm`, que hereda de `LocalBusiness` |

---

## Checklist de verificación

- [ ] `Layout.astro` — schema con `knowsAbout` + `hasOfferCatalog` + `@id` + `legalName`
- [ ] `public/llms.txt` — creado con secciones: contacto, servicios, FAQ
- [ ] Cada página de servicio — sección FAQ con `FAQPage` schema (3 preguntas c/u)
- [ ] Cada página de servicio — párrafo de escenarios reales en Huancavelica
- [ ] Build sin errores (`npm run build`)
