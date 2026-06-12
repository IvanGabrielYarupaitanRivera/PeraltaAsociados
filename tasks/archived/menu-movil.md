# Mejora: Menú móvil — 3 mejoras esenciales

**Completado:** 2025-06-11

---

## Qué se hizo

### D — Links cierran el menú al hacer clic
Se agregó event listener a todos los links del menú móvil para llamar `closeMenu()` con 150ms de delay.

### F — Animación hamburguesa ↔ X
Se duplicó el SVG del botón: la hamburguesa y la X se superponen con `opacity` y transición.

### H — Cerrar con clic en el backdrop
Se agregó event listener al contenedor `#mobile-menu` que cierra el menú si el clic fue en el backdrop (no en el panel).
