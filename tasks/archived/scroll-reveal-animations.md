# Especificación: Animaciones al hacer scroll (Scroll Reveal)

**Creado:** 2025-06-11
**Prioridad:** Media
**Duración estimada:** ~15 min

---

## Stack

- Astro 5 + Tailwind CSS 4
- Sin librerías externas
- `IntersectionObserver` nativo + CSS Transitions

---

## 📋 Pasos a seguir

### Paso 1 — Crear el componente `ScrollReveal.astro`

**Archivo:** `src/components/ScrollReveal.astro`

Componente contenedor que envuelve una sección y la anima al hacer scroll.

**Props:**
- `animation`: `"fade-up"` | `"fade-left"` | `"fade-right"` | `"scale-in"` (default: `"fade-up"`)
- `delay`: número en ms (default: `0`)
- `duration`: número en ms (default: `600`)

**Comportamiento CSS:**
- Estado inicial: `opacity: 0` + desplazamiento según variante (`translateY(30px)`, `translateX(-30px)`, `scale(0.9)`)
- Estado visible (clase `.revealed`): `opacity: 1`, `transform: translate(0, 0) scale(1)`
- Transición: `600ms ease-out` en `opacity` y `transform`
- `will-change: opacity, transform` para aceleración GPU
- `@media (prefers-reduced-motion: reduce)`: anula toda animación (opacity 1, transform none)

**Comportamiento JS:**
- `IntersectionObserver` con `threshold: 0.05`, `rootMargin: "0px 0px -60px 0px"`
- Al activarse: añade clase `.revealed` y deja de observar (`unobserve`)
- Animación single-shot (una sola vez)

**Contenido del componente:** (incluye template + style is:global + script)

---

### Paso 2 — Aplicar en la página principal (`Welcome.astro`)

Envolver cada componente de sección con `<ScrollReveal>`:

```astro
<ScrollReveal animation="fade-up" delay={0}>
  <Hero />
</ScrollReveal>

<ScrollReveal animation="fade-up" delay={100}>
  <Servicios />
</ScrollReveal>

<ScrollReveal animation="fade-up" delay={200}>
  <Nosotros />
</ScrollReveal>

<ScrollReveal animation="fade-up" delay={300}>
  <Equipo />
</ScrollReveal>

<ScrollReveal animation="fade-up" delay={400}>
  <Contacto />
</ScrollReveal>
```

---

### Paso 3 — Aplicar en las páginas de servicio (`ServicioPage.astro`)

Envolver los componentes de cada servicio:

```astro
<ScrollReveal animation="fade-up" delay={0}>
  <ServiciosHero title={title} description={description} />
</ScrollReveal>

<ScrollReveal animation="fade-up" delay={200}>
  <ServicioVentajas ventajas={ventajas} />
</ScrollReveal>
```

---

### Paso 4 — Verificar compilación y build

```bash
npm run build
```

Sin errores.

---

### Paso 5 — Probar visualmente

- `npm run dev`
- Verificar que al scrollear, cada sección aparece suavemente
- Verificar en mobile (viewport pequeño)
- Verificar en escritorio
- Verificar que `prefers-reduced-motion` funciona (desde DevTools > Rendering > Emulate CSS media feature prefers-reduced-motion: reduce)

---

## Animaciones disponibles

| Variante | Estado inicial | Efecto |
|---|---|---|
| `fade-up` | `translateY(30px)` | Aparece desde abajo |
| `fade-left` | `translateX(-30px)` | Aparece desde la izquierda |
| `fade-right` | `translateX(30px)` | Aparece desde la derecha |
| `scale-in` | `scale(0.9)` | Aparece escalando |

---

## Referencia técnica

| Decisión | Valor |
|---|---|
| Propiedades a animar | `opacity` + `transform` (no causan reflow) |
| threshold | `0.05` |
| rootMargin | `"0px 0px -60px 0px"` |
| Animación single-shot | Sí, con `observer.unobserve()` |
| prefers-reduced-motion | Anular transform, mantener opacidad |
| Scroll-Driven Animations | ❌ Descartado (Safari no lo soporta) |

---

## Checklist de verificación

- [ ] Build sin errores (`npm run build`)
- [ ] Hero aparece sin delay
- [ ] Servicios aparece al scrollear
- [ ] Nosotros aparece después
- [ ] Equipo aparece después
- [ ] Contacto aparece al final
- [ ] En mobile se ve fluido
- [ ] prefers-reduced-motion funciona
- [ ] Cada animación ocurre solo una vez
