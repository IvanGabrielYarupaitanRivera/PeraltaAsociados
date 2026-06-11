# ⚖️ Peralta Asociados — Estudio Jurídico en Huancavelica

Sitio web profesional para **Peralta Asociados**, un estudio de abogados con más de 15 años de experiencia brindando asesoría legal especializada en **Huancavelica, Perú**. El proyecto pertenece al abogado **Ciro Gabriel Yarupaitan Peralta**.

**🌐 Demo en vivo:** [peraltaasociados.com](https://peraltaasociados.com/)

---

## 📋 Tabla de Contenidos

- [Stack Tecnológico](#-stack-tecnológico)
- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Páginas](#-páginas)
- [Componentes](#-componentes)
- [Estilos y Tema](#-estilos-y-tema)
- [SEO y Metadatos](#-seo-y-metadatos)
- [Despliegue](#-despliegue)
- [Comandos](#-comandos)
- [Créditos](#-créditos)

---

## 🚀 Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| **[Astro](https://astro.build/)** | ^5.2.1 | Framework web estático (Islas/SSG) |
| **[Tailwind CSS](https://tailwindcss.com/)** | ^4.0.1 | Estilos utilitarios |
| **[Astro Icon](https://github.com/natemoo-re/astro-icon)** | ^1.1.5 | Iconos SVG (Material Design Icons) |
| **[Netlify](https://www.netlify.com/)** | — | Hosting + despliegue continuo |
| **[TypeScript](https://www.typescriptlang.org/)** | — | Tipado estricto |

### Dependencias principales

```json
{
  "@astrojs/netlify": "^6.1.0",
  "@iconify-json/mdi": "^1.2.3",
  "@tailwindcss/vite": "^4.0.1",
  "astro": "^5.2.1",
  "tailwindcss": "^4.0.1",
  "astro-icon": "^1.1.5"
}
```

---

## ✨ Características

- ✅ **Diseño elegante y profesional** — Paleta de colores azul oscuro (`#171E60`) y dorado (`#D4AF37`) que transmite confianza.
- ✅ **100% responsivo** — Experiencia óptima en móviles, tablets y escritorio.
- ✅ **SEO optimizado** — Open Graph, Twitter Cards, Schema.org (LawFirm), meta tags geográficos.
- ✅ **Formulario de contacto** — Integrado con Netlify Forms (sin backend).
- ✅ **Chatbot legal** — Enlace al asistente virtual `chat.peraltaasociados.com`.
- ✅ **Accesibilidad** — Roles ARIA, etiquetas `sr-only`, navegación semántica.
- ✅ **Rendimiento** — Imágenes optimizadas en WebP, carga diferida (`loading="lazy"`), fuente self-hosted.

---

## 📁 Estructura del Proyecto

```
peraltaasociados/
├── .netlify/                    # Configuración de Netlify
│   └── v1/config.json           # Cache headers para assets estáticos
├── .vscode/
│   ├── extensions.json          # Recomendación: extensión Astro
│   └── launch.json              # Configuración para depuración
├── public/                      # Archivos estáticos (sin procesar)
│   ├── favicon-dark.svg         # Favicon para modo oscuro
│   ├── favicon-light.svg        # Favicon para modo claro
│   ├── images/
│   │   ├── logo.png             # Logo corporativo
│   │   └── og-image.jpg         # Imagen para Open Graph
│   ├── robots.txt               # Configuración de crawlers
│   └── sitemap.xml              # Mapa del sitio XML
├── src/
│   ├── assets/
│   │   ├── icons/               # Iconos SVG personalizados (.astro)
│   │   ├── images/              # Imágenes optimizadas en WebP
│   │   │   ├── contacto/
│   │   │   ├── equipo/
│   │   │   ├── nosotros/
│   │   │   └── servicios/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/              # Componentes reutilizables
│   ├── layouts/                 # Layout base
│   ├── pages/                   # Rutas y páginas
│   ├── styles/                  # Estilos globales y fuentes
│   ├── astro.config.mjs         # Configuración de Astro
│   ├── package.json             # Dependencias y scripts
│   ├── tsconfig.json            # Configuración de TypeScript
│   └── .gitignore               # Archivos ignorados
```

---

## 📄 Páginas

El sitio cuenta con las siguientes rutas:

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `src/pages/index.astro` | **Página principal** — Hero + Servicios + Nosotros + Equipo + Contacto |
| `/contacto/` | `src/pages/contacto/index.astro` | **Página de contacto** — Hero + formas de contacto + formulario |
| `/derecho-administrativo/` | `src/pages/derecho-administrativo/index.astro` | Servicio: Derecho Administrativo |
| `/derecho-civil/` | `src/pages/derecho-civil/index.astro` | Servicio: Derecho Civil |
| `/derecho-laboral/` | `src/pages/derecho-laboral/index.astro` | Servicio: Derecho Laboral |
| `/derecho-constitucional/` | `src/pages/derecho-constitucional/index.astro` | Servicio: Derecho Constitucional |
| `/exito` | `src/pages/exito.astro` | Página de éxito tras enviar formulario |
| `/politica-privacidad` | `src/pages/politica-privacidad.astro` | Política de privacidad |
| `*` (404) | `src/pages/404.astro` | Página de error 404 personalizada |

---

## 🧩 Componentes

### Estructurales

| Componente | Archivo | Descripción |
|---|---|---|
| **Layout** | `src/layouts/Layout.astro` | Layout base con SEO, Schema.org, Open Graph, favicons |
| **Header** | `src/components/Header.astro` | Header principal con dos filas (redes + navegación), menú móvil |
| **Footer** | `src/components/Footer.astro` | Footer con datos de contacto, redes sociales, copyright |
| **Welcome** | `src/components/Welcome.astro` | Página principal que ensambla Hero + Servicios + Nosotros + Equipo + Contacto |

### Página principal

| Componente | Archivo | Descripción |
|---|---|---|
| **Hero** | `src/components/Hero.astro` | Sección hero con CTA "Consulta Gratuita" |
| **Servicios** | `src/components/Servicios.astro` | Grid de 4 tarjetas con servicios legales |
| **Nosotros** | `src/components/Nosotros.astro` | Misión y visión con imágenes de fondo |
| **Equipo** | `src/components/Equipo.astro` | Perfil del Dr. Ciro Yarupaitan + valores |
| **Contacto** | `src/components/Contacto.astro` | Formulario de contacto con Netlify Forms |

### Páginas de servicio

| Componente | Archivo | Descripción |
|---|---|---|
| **ServicioPage** | `src/components/ServicioComponents/ServicioPage.astro` | Layout para páginas de cada servicio (Header + Hero + Ventajas + Footer) |
| **ServiciosHero** | `src/components/ServicioComponents/ServiciosHero.astro` | Hero para cada servicio con CTA a WhatsApp |
| **ServicioVentajas** | `src/components/ServicioComponents/ServicioVentajas.astro` | Grid de 6 ventajas con iconos |

### Página de contacto

| Componente | Archivo | Descripción |
|---|---|---|
| **ContactoPage** | `src/components/ContactoComponents/ContactoPage.astro` | Layout para la página de contacto |
| **ContactHeader** | `src/components/ContactoComponents/ContactHeader.astro` | Header específico para la página de contacto (navegación interna) |
| **ContactHero** | `src/components/ContactoComponents/ContactHero.astro` | Hero de la página de contacto |
| **FormasContact** | `src/components/ContactoComponents/FormasContact.astro` | Grid con 5 formas de contacto |
| **WhatsAppSection** | `src/components/ContactoComponents/WhatsAppSection.astro` | Tarjeta de contacto vía WhatsApp |
| **EmailSection** | `src/components/ContactoComponents/EmailSection.astro` | Tarjeta de contacto vía correo |
| **LocationSection** | `src/components/ContactoComponents/LocationSection.astro` | Tarjeta con ubicación física |
| **FacebookSection** | `src/components/ContactoComponents/FacebookSection.astro` | Tarjeta de enlace a Facebook |
| **ChatbotSection** | `src/components/ContactoComponents/ChatbotSection.astro` | Tarjeta del asistente virtual |

### Iconos SVG personalizados

| Archivo | Descripción |
|---|---|
| `src/assets/icons/PeraltaAsociados.astro` | Logo principal (color primario) |
| `src/assets/icons/PeraltaAsociadosLight.astro` | Logo versión clara |
| `src/assets/icons/FacebookLogo.astro` | Icono de Facebook |
| `src/assets/icons/WhatsAppLogo.astro` | Icono de WhatsApp |
| `src/assets/icons/PhoneIcon.astro` | Icono de teléfono |
| `src/assets/icons/ChatBot.astro` | Icono de chatbot |
| `src/assets/icons/BulbIcon.astro` | Icono de bombillo |
| `src/assets/icons/EyeIcon.astro` | Icono de ojo |

---

## 🎨 Estilos y Tema

### Colores

```css
--color-primary:   #171E60  (azul oscuro)
--color-secondary: #D4AF37  (dorado)
--color-neutral:   #f5f5f5  (fondo gris claro)
```

### Tipografía

- **Fuente principal:** `Source Serif 4` (serif) — self-hosted en `.woff2`
- **Peso:** 400 (regular)

### Archivos de estilo

| Archivo | Descripción |
|---|---|
| `src/styles/global.css` | Estilos globales con Tailwind v4, fuente, scroll suave |
| `src/styles/fonts/source-serif-4-v8-latin-ext-regular.woff2` | Fuente autoalojada |

---

## 🔍 SEO y Metadatos

### Schema.org

El layout principal incluye `LawFirm` schema con:

- Nombre, logo, eslogan, descripción
- Dirección física (`Jr. Mayta Cápac N° 215`, Huancavelica)
- Coordenadas geográficas
- Teléfono, email, horario de atención
- Fundador: *Dr. Ciro Gabriel Yarupaitan Peralta*
- Redes sociales (Facebook)

### Meta Tags

- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Meta tags geográficos (`geo.region`, `geo.position`, `ICBM`)
- Palabras clave por página
- Canonical URL
- Verificación de Google Search Console

### Archivos SEO

| Archivo | Descripción |
|---|---|
| `public/robots.txt` | Permite rastreo completo, apunta al sitemap |
| `public/sitemap.xml` | Sitemap con 7 URLs, prioridades y frecuencias |

---

## 🌐 Despliegue

### Netlify (configurado)

El proyecto está preconfigurado para desplegarse en **Netlify**:

- **Adaptador:** `@astrojs/netlify` (server-side rendering opcional)
- **Forms:** El formulario de contacto usa `netlify-honeypot` (sin backend)
- **Cache:** Assets estáticos tienen `Cache-Control: public, max-age=31536000, immutable`

### Despliegue manual

```bash
npm run build        # Genera la carpeta dist/
npm run preview      # Previsualiza la build localmente
```

En Netlify, conecta el repositorio y automáticamente:
1. Ejecuta `npm run build`
2. Publica la carpeta `dist/`

---

## 💻 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev           # Servidor local (http://localhost:4321)

# Build para producción
npm run build         # Genera ./dist/

# Previsualizar build
npm run preview

# CLI de Astro
npm run astro         # Comandos adicionales de Astro
```

---

## 🗺️ Información de Contacto

| Dato | Valor |
|---|---|
| **Dirección** | Jr. Mayta Cápac N° 215, Huancavelica |
| **Teléfono** | +51 976 762 237 |
| **Correo** | cyarupaitanp@gmail.com |
| **Facebook** | [PeraltaAsociadosPeru](https://www.facebook.com/PeraltaAsociadosPeru/) |
| **WhatsApp** | [wa.me/51976762237](https://wa.me/51976762237) |
| **Chatbot** | [chat.peraltaasociados.com](https://chat.peraltaasociados.com/) |
| **Horario** | Lunes a Viernes — 8:00 AM a 8:00 PM |

---

## 👨‍💻 Créditos

- **Abogado:** Dr. Ciro Gabriel Yarupaitan Peralta
- **Desarrollador:** [Ivan Yarupaitan Rivera](https://vanchi.pro/)
  - 📧 [ivangyr321@gmail.com](mailto:ivangyr321@gmail.com)
  - 🔗 [LinkedIn](https://www.linkedin.com/in/ivan-yarupaitan-rivera/)
  - 🐙 [GitHub](https://github.com/IvanGabrielYarupaitanRivera)

---

## 📝 Licencia

© 2024 - Peralta Asociados. Todos los derechos reservados.
