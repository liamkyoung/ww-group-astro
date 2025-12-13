import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$CardInfo } from './CardInfo_B570dobN.mjs';
import { P as ProjectLinks } from './index_BG6C6zDl.mjs';
import { u as urlFor } from './sanityImage_zNuXR53M.mjs';

const $$Astro$1 = createAstro("https://wittnerwollman.com");
const $$DefaultCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DefaultCard;
  const {
    size = "medium",
    title,
    imageSrc,
    accentText,
    description,
    address,
    additionalInfo,
    textOnRight = false,
    squareImage = false,
    link = "/"
  } = Astro2.props;
  const sizeMap = {
    small: "w-24",
    medium: "w-64",
    large: "w-72",
    xl: "w-96"
  };
  const cardWidth = sizeMap[size] ?? "w-64";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`inline-block ${cardWidth}`, "class")}> <a${addAttribute(link, "href")} class="hover:opacity-90 block"> <!-- Layout: image left or right --> <div${addAttribute(textOnRight ? "flex gap-4" : "space-y-4", "class")}> <!-- IMAGE --> <div class="relative"> <img${addAttribute(imageSrc, "src")}${addAttribute(title, "alt")}${addAttribute(`${squareImage ? "aspect-square w-full object-cover" : "w-full h-64 object-cover"}`, "class")} loading="lazy"> ${accentText && renderTemplate`<div class="bg-gray-50 absolute -bottom-1 -left-1 p-2 rounded-md shadow-sm"> <p class="text-wwRed font-bold text-sm">${accentText}</p> </div>`} </div> <!-- TEXT --> <div${addAttribute(!textOnRight ? "" : "max-w-64", "class")}> <h4 class="my-2">${title}</h4> ${renderComponent($$result, "CardInfo", $$CardInfo, { "address": address, "description": description, "additionalInfo": additionalInfo })} </div> </div> </a> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Cards/DefaultCard.astro", void 0);

const $$Astro = createAstro("https://wittnerwollman.com");
const $$ProjectGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectGallery;
  const { projects, displayHeader = "yes" } = Astro2.props;
  const hasProjects = Array.isArray(projects) && projects.length > 0;
  return renderTemplate`${hasProjects && renderTemplate`${maybeRenderHead()}<div class="global-margin-x space-y-24 my-40">${displayHeader === "yes" && renderTemplate`<div class="flex justify-center md:justify-between items-center"><h2 class="text-center md:text-left">Featured Deals</h2><div class="hidden md:block"><a class="btn-primary"${addAttribute(ProjectLinks.relLink, "href")}>
VIEW MORE
</a></div></div>`}<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-16 3xl:gap-32
             justify-items-center lg:justify-items-start">${projects.map((project) => renderTemplate`<div class="w-full">${renderComponent($$result, "DefaultCard", $$DefaultCard, { "title": project.title, "imageSrc": urlFor(project.image).url() })}</div>`)}</div><div class="md:hidden flex justify-center"><a class="btn-primary"${addAttribute(ProjectLinks.relLink, "href")}>
VIEW MORE
</a></div></div>`}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Gallery/ProjectGallery.astro", void 0);

export { $$ProjectGallery as $ };
