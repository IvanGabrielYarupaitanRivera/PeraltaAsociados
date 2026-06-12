# Mejora: Extraer SVG Pattern duplicado

**Completado:** 2025-06-11

---

## Qué se hizo

Se creó `src/components/BackgroundPattern.astro`, un componente reutilizable con dos variantes:

- `variant="subtle"` — patrón de círculos + líneas (usado en Servicios, Nosotros, Equipo, FormasContact, ServicioVentajas)
- `variant="triangles"` — patrón de triángulos (usado en Contacto)

## Beneficio

~60 líneas de SVG duplicado eliminadas. Mantenimiento centralizado en un solo archivo.
