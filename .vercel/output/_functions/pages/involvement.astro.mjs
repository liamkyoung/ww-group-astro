import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { s as sanityClient } from '../chunks/sanityClient_DxVeBFpp.mjs';
import { $ as $$Default } from '../chunks/Default_mBGJLeJK.mjs';
import { $ as $$DefaultHero } from '../chunks/DefaultHero_tOhIkf8A.mjs';
import { H as HeroImg } from '../chunks/Community_Resources_Header_6Ky_mJYx.mjs';
import 'clsx';
import { u as urlFor } from '../chunks/sanityImage_zNuXR53M.mjs';
export { renderers } from '../renderers.mjs';

const INVOLVEMENT_QUERY = `
  *[_type == "involvement"] | order(title asc) {
    _id,
    _type,
    title,
    highlight,
    description,
    linkToGroupWebsite,
    image {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions, palette }
      },
      alt
    }
  }
`;

const $$Astro = createAstro("https://wittnerwollman.com");
const $$InvolvementCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InvolvementCard;
  const { doc } = Astro2.props;
  const { title, image, description, highlight, linkToGroupWebsite } = doc || {};
  const sanitizedDescription = description ? description.replace(/\s/g, " ") : "";
  const hasLink = !!linkToGroupWebsite;
  return renderTemplate`${doc && renderTemplate`${maybeRenderHead()}<div${addAttribute(`min-w-64`, "class")}>${hasLink ? renderTemplate`<a${addAttribute(linkToGroupWebsite, "href")} class="hover:opacity-90 block" target="_blank" rel="noreferrer"><div class="max-w-64"><div class="relative">${image && renderTemplate`<img${addAttribute(urlFor(image).url(), "src")} class="size-64 object-contain">`}</div><div class="my-4 space-y-3">${title && renderTemplate`<h4>${title}</h4>`}${highlight && renderTemplate`<div class="flex items-center gap-2"><div class="inline-flex gap-2"><div class="p-1 rounded-full bg-wwRed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-white"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"></path></svg></div></div><p class="text-sm font-bold">${highlight}</p></div>`}${sanitizedDescription && renderTemplate`<p>${sanitizedDescription}</p>`}</div></div></a>` : renderTemplate`<div class="max-w-64"><div class="relative">${image && renderTemplate`<img${addAttribute(urlFor(image).url(), "src")} class="size-64 object-contain">`}</div><div class="my-4 space-y-3">${title && renderTemplate`<h4>${title}</h4>`}${highlight && renderTemplate`<div class="flex items-center gap-2"><div class="inline-flex gap-2"><div class="p-1 rounded-full bg-wwRed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-white"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"></path></svg></div></div><p class="text-sm font-bold">${highlight}</p></div>`}${sanitizedDescription && renderTemplate`<p>${sanitizedDescription}</p>`}</div></div>`}</div>`}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Cards/InvolvementCard.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const involvement = await sanityClient.fetch(INVOLVEMENT_QUERY);
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DefaultHero", $$DefaultHero, { "header": "Making a BOLD Impact In Our Community", "body": [
    "Our team members are heavily involved in Tampa Bay throughout a variety of organizations spanning the arts, the environment, sports and more."
  ], "imageSrc": HeroImg.src })} ${maybeRenderHead()}<div class="my-24"> <div class="w-full h-full mt-16"> <div class="global-margin-x space-y-16"> ${involvement.length > 0 ? renderTemplate`<div class="grid sm:grid-cols-2 xl:grid-cols-4 lg:place-items-start place-items-center gap-16"> ${involvement.map((g) => renderTemplate`${renderComponent($$result2, "InvolvementCard", $$InvolvementCard, { "doc": g })}`)} </div>` : renderTemplate`<p class="text-center font-semibold my-12">
There are currently no involvement groups to display.
</p>`} </div> </div> </div> ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/involvement/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/involvement/index.astro";
const $$url = "/involvement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
