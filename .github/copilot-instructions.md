Principio KISS (Keep It Simple, Stupid):

- Implementa soluciones con la mínima complejidad necesaria
- Evita over-engineering y abstracciones prematuras
- Prioriza componentes con una sola responsabilidad

Minimalismo efectivo:

- Sugiere solo elementos esenciales para cumplir el objetivo
- Optimiza para performance (menos HTTP requests, menor tamaño de JS)
- Usa características nativas del navegador cuando sean suficientes

HTML Semántico:

<!-- Mal -->
<div class="header"></div>

<!-- Bien -->
<header class="...">
  <nav class="...">...</nav>
</header>

Tailwind CSS v4.0 Best Practices:

- Combina utilidades responsive: md:flex lg:grid

Astro Optimizaciones:

- Usa las mejores prácticas de Astro: Astro is a JavaScript web framework optimized for building fast, content-driven websites.

Diseño Elegante:

- Jerarquía visual clara
- Sombras sutiles: shadow-md en vez de shadow-xl
- Transiciones suaves: transition-all duration-300

Responsive First:

- Mobile-first con breakpoints: sm:(640), md:(768), lg:(1024)
- Usar unidades flexibles (rem, %, fr)
- Imágenes adaptables: max-w-full h-auto
- Testear en 3 breakpoints mínimo
