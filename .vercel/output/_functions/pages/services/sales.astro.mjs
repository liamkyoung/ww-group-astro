import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$CTA } from '../../chunks/CTA_Crx7gJKc.mjs';
import { $ as $$DefaultHero } from '../../chunks/DefaultHero_tOhIkf8A.mjs';
import { $ as $$Default } from '../../chunks/Default_mBGJLeJK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DefaultHero", $$DefaultHero, { "header": "Sales Service", "imageSrc": "/src/assets/services/sales-service-hero.webp", "body": [
    "Our sales services are driven by a record-setting commercial team. Recognized as off-market leaders in Downtown St. Petersburg, we excel in sourcing exclusive opportunities and delivering tailored solutions for developments and investments. Through our Developer Services Network, we connect clients with unparalleled resources and strategic alliances, including joint ventures and capital sourcing, ensuring every project reaches its full potential.",
    "From condominium presales at landmark developments like REFLECTION to transformative projects such as The Factory and the historic Christ United Methodist Church redevelopment\u2014St. Petersburg's first public-private partnership in 30 years\u2014we bring a proven track record of success. Whether facilitating sales, structuring joint ventures, or pioneering innovative partnerships, our team delivers results that set new standards in the real estate industry."
  ] })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/services/sales/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/services/sales/index.astro";
const $$url = "/services/sales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
