# Mejora: Accesibilidad

**Completado:** 2025-06-11

---

## Correcciones aplicadas

- `h1` duplicados en Header/ContactHeader → cambiados a `<span>`
- IDs de `aria-labelledby` corregidos en EmailSection y LocationSection (apuntaban a `whatsapp-description` en vez de `email-description` y `ubicacion-description`)
- Jerarquía de encabezados: `h1` → `h2` en Equipo, Contacto y FormasContact para que solo haya un `h1` por página
- Skip-link "Saltar al contenido principal" agregado al Layout
- `aria-label` agregado a 12 `<section>` que no tenían
