# Contexto del Proyecto

Quiero realizar una página para el emprendimiento de mi padre que es abogado, su emprendimiento se llama "Peralta Asociados" y es sobre brindar asesoría jurídica en la ciudad de Huancavelica. Tengo pensado realizar su página web con Astro y Tailwind CSS.

### Diseño de la Página

Paleta de Colores

- Azul Principal: #171E60 (azul oscuro/naval para transmitir confianza y profesionalidad).
- Dorado: #D4AF37 (dorado clásico para elegancia y distinción).
- Neutros: #FFFFFF (blanco para fondos), #F5F5F5 (gris claro para secciones secundarias).

Tipografía

- Títulos: Fuente serif clásica como "Playfair Display" (usar font-serif de tailwind).

Resumen del diseño

- Prefiero un diseño clásico, bordes dorados, espacios limpios, minimalista y profesional.
- Me gustaría incluir elementos visuales como íconos de justicia

### Tono del Contenido

- Me gustaría que fuera cercano, que no use palabras tan complicadas y que sea fácil de entender para el usuario que no tiene conocimiento alguno sobre las leyes.

## Sobre el código

Principio KISS (Keep It Simple, Stupid):

- Implementa soluciones con la mínima complejidad necesaria
- Evita over-engineering y abstracciones prematuras
- Prioriza componentes con una sola responsabilidad

Minimalismo efectivo:

- Sugiere solo elementos esenciales para cumplir el objetivo
- Optimiza para performance (menos HTTP requests, menor tamaño de JS)
- Usa características nativas del navegador cuando sean suficientes

HTML Semántico:

- Usar siempre etiquetas semánticas
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
