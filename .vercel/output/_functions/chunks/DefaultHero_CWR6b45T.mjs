import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import 'clsx';
import { D as DefaultSocials, C as ContactLink } from './index_CDtGpoOw.mjs';

const $$Astro = createAstro("https://ww-group-astro.vercel.app");
const $$DefaultHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DefaultHero;
  const { body, imageSrc, header } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid xl:grid-cols-2 place-items-center py-16"> <div class="global-margin-x sm:mt-24"> <div> ${header && renderTemplate`<h1 class="mb-10">${header}</h1>`} ${body && body.map((p) => renderTemplate`<p class="mb-6">${p}</p>`)} </div> <div class="flex flex-col sm:flex-row gap-8 sm:items-center justify-center xl:justify-start mt-8"> <div> <a${addAttribute(ContactLink.relLink, "href")} class="btn-primary whitespace-nowrap block max-w-min">
SEND US A MESSAGE
</a> </div> <div class="flex items-center gap-2 sm:border-l-2 border-wwRed sm:pl-8 border-t-2 sm:border-t-0 pt-4 sm:pt-0 w-48"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-wwRed"> <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"></path> </svg> <span>
Or call us at
<br> <b class="whitespace-nowrap">${DefaultSocials.phoneNumber}</b> </span> </div> </div> </div> <div>  ${imageSrc ? renderTemplate`<img${addAttribute(imageSrc, "src")} alt="service-img" class="my-12 lg:my-0 lg:pr-36 pr-0 hidden sm:block">` : renderTemplate`<div class="w-full h-full bg-wwRed text-wwRed">.</div>`} </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Hero/DefaultHero.astro", void 0);

export { $$DefaultHero as $ };
