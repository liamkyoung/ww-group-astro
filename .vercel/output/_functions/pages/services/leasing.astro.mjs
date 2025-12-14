import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$CTA } from '../../chunks/CTA_BhA7SPkh.mjs';
import { $ as $$DefaultHero } from '../../chunks/DefaultHero_CWR6b45T.mjs';
import { $ as $$Default } from '../../chunks/Default_CqVhy9UU.mjs';
import { l as leasingHero } from '../../chunks/leasing-service-hero_Dg9MAURS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DefaultHero", $$DefaultHero, { "header": "Leasing Service", "imageSrc": leasingHero, "body": [
    "Our acquisitions services focus on matching developers with properties that align with their vision for growth, development, or assemblage. We specialize in identifying opportunities that support innovative projects, whether facilitating transitions for business growth or downsizing, or repurposing properties for adaptive reuse.",
    "With expertise in navigating complex acquisitions, we've successfully guided projects like the assemblage of the Dr. BBQ property by PTM, which paved the way for a transformative 22-story tower. By leveraging market insights and fostering collaborative relationships, we ensure acquisitions are tailored to meet both immediate goals and long-term value creation."
  ] })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/services/leasing/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/services/leasing/index.astro";
const $$url = "/services/leasing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
