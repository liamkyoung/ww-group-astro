import { d as createAstro, c as createComponent, r as renderComponent, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import { Toaster } from 'react-hot-toast';
import { a as $$BaseHead, N as Nav, b as $$Footer } from './index_BG6C6zDl.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_BUCA18RE.mjs';

const $$Astro = createAstro("https://wittnerwollman.com");
const $$Default = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Default;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title || SITE_TITLE, "description": description || SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header", "client:component-export": "default" })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Toaster", Toaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "react-hot-toast", "client:component-export": "Toaster" })} </body></html>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/layouts/Default.astro", void 0);

export { $$Default as $ };
