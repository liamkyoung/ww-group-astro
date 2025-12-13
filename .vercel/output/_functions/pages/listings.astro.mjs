import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$Default } from '../chunks/Default_mBGJLeJK.mjs';
import { g as getAllListingPreviews } from '../chunks/propertyTypeFormatter_BQ5xwLpq.mjs';
import { L as ListingGallery } from '../chunks/ListingGallery_COHfZ8vb.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const listings = await getAllListingPreviews();
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ListingGallery", ListingGallery, { "listings": listings, "displayHeader": "no", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Gallery/ListingGallery", "client:component-export": "ListingGallery" })} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/listings/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/listings/index.astro";
const $$url = "/listings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
