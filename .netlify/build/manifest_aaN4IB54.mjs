import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_DHPEU6ON.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Admin/Desktop/PeraltaAsociados/","cacheDir":"file:///C:/Users/Admin/Desktop/PeraltaAsociados/node_modules/.astro/","outDir":"file:///C:/Users/Admin/Desktop/PeraltaAsociados/dist/","srcDir":"file:///C:/Users/Admin/Desktop/PeraltaAsociados/src/","publicDir":"file:///C:/Users/Admin/Desktop/PeraltaAsociados/public/","buildClientDir":"file:///C:/Users/Admin/Desktop/PeraltaAsociados/dist/","buildServerDir":"file:///C:/Users/Admin/Desktop/PeraltaAsociados/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":true,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto/index.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derecho-administrativo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derecho-administrativo","isIndex":true,"type":"page","pattern":"^\\/derecho-administrativo\\/?$","segments":[[{"content":"derecho-administrativo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derecho-administrativo/index.astro","pathname":"/derecho-administrativo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derecho-civil/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derecho-civil","isIndex":true,"type":"page","pattern":"^\\/derecho-civil\\/?$","segments":[[{"content":"derecho-civil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derecho-civil/index.astro","pathname":"/derecho-civil","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derecho-constitucional/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derecho-constitucional","isIndex":true,"type":"page","pattern":"^\\/derecho-constitucional\\/?$","segments":[[{"content":"derecho-constitucional","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derecho-constitucional/index.astro","pathname":"/derecho-constitucional","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"derecho-laboral/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/derecho-laboral","isIndex":true,"type":"page","pattern":"^\\/derecho-laboral\\/?$","segments":[[{"content":"derecho-laboral","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/derecho-laboral/index.astro","pathname":"/derecho-laboral","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"exito/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/exito","isIndex":false,"type":"page","pattern":"^\\/exito\\/?$","segments":[[{"content":"exito","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/exito.astro","pathname":"/exito","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"politica-privacidad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/politica-privacidad","isIndex":false,"type":"page","pattern":"^\\/politica-privacidad\\/?$","segments":[[{"content":"politica-privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politica-privacidad.astro","pathname":"/politica-privacidad","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/contacto/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/derecho-administrativo/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/derecho-civil/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/derecho-constitucional/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/derecho-laboral/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/exito.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Desktop/PeraltaAsociados/src/pages/politica-privacidad.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/contacto/index@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/derecho-administrativo/index@_@astro":"pages/derecho-administrativo.astro.mjs","\u0000@astro-page:src/pages/derecho-civil/index@_@astro":"pages/derecho-civil.astro.mjs","\u0000@astro-page:src/pages/derecho-constitucional/index@_@astro":"pages/derecho-constitucional.astro.mjs","\u0000@astro-page:src/pages/derecho-laboral/index@_@astro":"pages/derecho-laboral.astro.mjs","\u0000@astro-page:src/pages/exito@_@astro":"pages/exito.astro.mjs","\u0000@astro-page:src/pages/politica-privacidad@_@astro":"pages/politica-privacidad.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_aaN4IB54.mjs","C:/Users/Admin/Desktop/PeraltaAsociados/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BFDSEu3i.mjs","C:/Users/Admin/Desktop/PeraltaAsociados/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DCRybRVz.js","C:/Users/Admin/Desktop/PeraltaAsociados/src/components/ContactoComponents/ContactHeader.astro?astro&type=script&index=0&lang.ts":"_astro/ContactHeader.astro_astro_type_script_index_0_lang.DADakgPA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Admin/Desktop/PeraltaAsociados/src/components/Header.astro?astro&type=script&index=0&lang.ts","const c=document.querySelector(\"#mobile-menu-button\"),a=document.querySelector(\"#close-menu\"),e=document.querySelector(\"#mobile-menu\"),s=document.querySelector(\"#hamburger-icon\"),o=document.querySelector(\"#close-icon\"),l=e?.querySelectorAll(\"a\"),i=()=>{e.classList.contains(\"hidden\")?(e.classList.remove(\"hidden\"),requestAnimationFrame(()=>{e.style.transform=\"translateX(0)\",e.style.opacity=\"1\"}),s.style.opacity=\"0\",o.style.opacity=\"1\"):(e.style.transform=\"translateX(100%)\",e.style.opacity=\"0\",s.style.opacity=\"1\",o.style.opacity=\"0\",e.addEventListener(\"transitionend\",()=>{e.classList.add(\"hidden\")},{once:!0})),document.body.classList.toggle(\"overflow-hidden\");const d=e.classList.contains(\"hidden\");c.setAttribute(\"aria-expanded\",(!d).toString())},n=()=>{e.classList.contains(\"hidden\")||i()},r=t=>{t.key===\"Escape\"&&!e.classList.contains(\"hidden\")&&n()};l?.forEach(t=>{t.addEventListener(\"click\",()=>{setTimeout(n,150)})});e?.addEventListener(\"click\",t=>{t.target===e&&n()});c.addEventListener(\"click\",i);a.addEventListener(\"click\",n);document.addEventListener(\"keydown\",r);"],["C:/Users/Admin/Desktop/PeraltaAsociados/src/components/ContactoComponents/ContactHeader.astro?astro&type=script&index=0&lang.ts","const s=document.querySelector(\"#mobile-menu-button\"),o=document.querySelector(\"#close-menu\"),e=document.querySelector(\"#mobile-menu\"),n=()=>{const t=e.classList.contains(\"hidden\");t?(e.classList.remove(\"hidden\"),requestAnimationFrame(()=>{e.style.transform=\"translateX(0)\",e.style.opacity=\"1\"})):(e.style.transform=\"translateX(100%)\",e.style.opacity=\"0\",e.addEventListener(\"transitionend\",()=>{e.classList.add(\"hidden\")},{once:!0})),document.body.classList.toggle(\"overflow-hidden\"),s.setAttribute(\"aria-expanded\",t.toString())},i=t=>{t.key===\"Escape\"&&!e.classList.contains(\"hidden\")&&n()};s.addEventListener(\"click\",n);o.addEventListener(\"click\",n);document.addEventListener(\"keydown\",i);"]],"assets":["/_astro/source-serif-4-v8-latin-ext-regular.BuDiVHIt.woff2","/_astro/lady-justice.vCIWVt73.webp","/_astro/vision-legal.Ch_ze-i7.webp","/_astro/mision-legal.CheKJeq8.webp","/_astro/derechoCivil.BSNEwYBw.webp","/_astro/derechoLaboral.D1wGsv1U.webp","/_astro/derechoAdministrativo.Con_Aij8.webp","/_astro/derechoConstitucional.BpJvDF_m.webp","/_astro/profile.C_7qUrAz.webp","/_astro/index.7_Ie8sTO.css","/favicon-dark.svg","/favicon-light.svg","/robots.txt","/sitemap.xml","/images/logo.png","/images/og-image.jpg","/404.html","/contacto/index.html","/derecho-administrativo/index.html","/derecho-civil/index.html","/derecho-constitucional/index.html","/derecho-laboral/index.html","/exito/index.html","/politica-privacidad/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"/3kZCANyUSjGkMaAI+5Syfg37MiMyMN05iBM9KLdCvk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
