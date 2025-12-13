import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { C as ContactLink } from '../chunks/index_BG6C6zDl.mjs';
import { $ as $$Default } from '../chunks/Default_mBGJLeJK.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Default", $$Default, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:py-48 lg:px-8"> <div class="text-center"> <p class="text-base font-semibold text-wwRed">404</p> <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
Page not found
</h1> <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
Sorry, we couldn&apos;t find the page you&apos;re looking for.
</p> <div class="mt-10 flex items-center justify-center gap-x-6"> <a href="/" class="btn-primary">
Go back home
</a> <a${addAttribute(ContactLink.relLink, "href")} class="text-sm font-semibold text-gray-900">
Contact a team member <span aria-hidden="true">&rarr;</span> </a> </div> </div> </main> ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
