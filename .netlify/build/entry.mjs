import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_aaN4IB54.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/contacto.astro.mjs');
const _page2 = () => import('./pages/derecho-administrativo.astro.mjs');
const _page3 = () => import('./pages/derecho-civil.astro.mjs');
const _page4 = () => import('./pages/derecho-constitucional.astro.mjs');
const _page5 = () => import('./pages/derecho-laboral.astro.mjs');
const _page6 = () => import('./pages/exito.astro.mjs');
const _page7 = () => import('./pages/politica-privacidad.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/contacto/index.astro", _page1],
    ["src/pages/derecho-administrativo/index.astro", _page2],
    ["src/pages/derecho-civil/index.astro", _page3],
    ["src/pages/derecho-constitucional/index.astro", _page4],
    ["src/pages/derecho-laboral/index.astro", _page5],
    ["src/pages/exito.astro", _page6],
    ["src/pages/politica-privacidad.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "acea74c0-9768-4fbf-909f-f54fc4915a69"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
