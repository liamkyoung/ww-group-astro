import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Czi9iYuq.mjs';
import { manifest } from './manifest_CUwcIMfj.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/community-resources.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/involvement.astro.mjs');
const _page6 = () => import('./pages/listings.astro.mjs');
const _page7 = () => import('./pages/listings/_---slug_.astro.mjs');
const _page8 = () => import('./pages/news.astro.mjs');
const _page9 = () => import('./pages/news/_---slug_.astro.mjs');
const _page10 = () => import('./pages/projects.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/services/acquisition.astro.mjs');
const _page13 = () => import('./pages/services/consulting.astro.mjs');
const _page14 = () => import('./pages/services/leasing.astro.mjs');
const _page15 = () => import('./pages/services/sales.astro.mjs');
const _page16 = () => import('./pages/services.astro.mjs');
const _page17 = () => import('./pages/team.astro.mjs');
const _page18 = () => import('./pages/team/_---slug_.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/community-resources/index.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/involvement/index.astro", _page5],
    ["src/pages/listings/index.astro", _page6],
    ["src/pages/listings/[...slug].astro", _page7],
    ["src/pages/news/index.astro", _page8],
    ["src/pages/news/[...slug].astro", _page9],
    ["src/pages/projects/index.astro", _page10],
    ["src/pages/rss.xml.js", _page11],
    ["src/pages/services/acquisition/index.astro", _page12],
    ["src/pages/services/consulting/index.astro", _page13],
    ["src/pages/services/leasing/index.astro", _page14],
    ["src/pages/services/sales/index.astro", _page15],
    ["src/pages/services/index.astro", _page16],
    ["src/pages/team/index.astro", _page17],
    ["src/pages/team/[...slug].astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "54d0b63a-8b22-4063-85de-8df1d07001e5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
