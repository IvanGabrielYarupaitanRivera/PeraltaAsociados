# Especificación: Mejoras SEO

**Creado:** 2025-06-11
**Prioridad:** Alta
**Duración estimada:** ~10 min
**Skills relacionados:** `peralta-asociados` (contexto del proyecto)

---

## 📋 Pasos a seguir

### Paso 1 — Actualizar `lastmod` en `public/sitemap.xml`

**Archivo:** `public/sitemap.xml`

**Problema:** Todas las URLs tienen `lastmod: 2024-02-29`, hace más de 1 año. Google interpreta contenido desactualizado.

**Solución:** Cambiar todas las fechas a `2025-06-11`.

---

### Paso 2 — Agregar metadatos a `src/pages/index.astro`

**Archivo:** `src/pages/index.astro`

**Problema:** La página principal no pasa `title`, `description` ni `keywords` al Layout, usa los defaults genéricos.

**Solución:** Agregar props específicos para la home:

```astro
<Layout
  title="Peralta Asociados | Abogado en Huancavelica — Consulta Gratuita"
  description="Estudio jurídico líder en Huancavelica. Abogado especialista en derecho civil, laboral, administrativo y constitucional. +15 años de experiencia. ¡Consulta gratuita!"
  keywords="abogado huancavelica, estudio jurídico huancavelica, asesoría legal, abogado civil huancavelica, abogado laboral huancavelica, derecho administrativo huancavelica, consulta legal gratuita, peralta asociados"
>
  <Welcome />
</Layout>
```

---

### Paso 3 — Agregar `noindex, nofollow` a `src/pages/exito.astro`

**Archivo:** `src/pages/exito.astro`

**Problema:** La página `/exito` es una confirmación de formulario sin valor SEO. Los bots pueden indexarla.

**Solución:** Agregar `<meta name="robots" content="noindex, nofollow" />` dentro del `<head>`.

Como `Layout` ya tiene `<meta name="robots" content="index, follow" />`, necesito pasar una prop para sobrescribirlo. El Layout soporta props, así que puedo definir un `robots` opcional.

**Enfoque:** Modificar `Layout.astro` para que acepte una prop `robots` (default: `"index, follow"`) y usarla en el meta tag. Luego en `exito.astro` pasar `robots="noindex, nofollow"`.

---

## Checklist de verificación

- [ ] `public/sitemap.xml` — `lastmod` actualizado a `2025-06-11`
- [ ] `src/pages/index.astro` — metadatos específicos (title, description, keywords)
- [ ] `src/pages/exito.astro` — `robots="noindex, nofollow"`
- [ ] `src/layouts/Layout.astro` — prop `robots` opcional
- [ ] Build sin errores (`npm run build`)
