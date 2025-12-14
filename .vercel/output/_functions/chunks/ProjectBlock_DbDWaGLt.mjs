import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro("https://ww-group-astro.vercel.app");
const $$ProjectStat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectStat;
  const { colorScheme = "default", stat, description } = Astro2.props;
  let textColor = "text-wwBlack";
  let emphasisColor = "text-wwRed";
  let borderColor = "border-wwRed";
  if (colorScheme === "red") {
    textColor = "text-white";
    emphasisColor = "text-wwYellow";
    borderColor = "border-wwYellow";
  }
  return renderTemplate`${maybeRenderHead()}<div class="min-w-36"> <h5${addAttribute(`border-l-2 pl-4 ${emphasisColor} ${borderColor}`, "class")}> ${stat} </h5> <p${addAttribute(`pl-4 ${textColor}`, "class")}> ${description} </p> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/ProjectStat.astro", void 0);

const $$Astro = createAstro("https://ww-group-astro.vercel.app");
const $$ProjectBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectBlock;
  const {
    id,
    title,
    description,
    subheading,
    subheadingType = "none",
    imageSrc,
    imageAlt = title,
    imagePosition = "right",
    colorScheme = "default",
    facts = [],
    links = []
  } = Astro2.props;
  let bgColorClass = "bg-gray-50";
  let textColorClass = "text-wwBlack";
  let buttonClass = "btn-primary";
  let emphasisColorClass = "text-wwRed";
  if (colorScheme === "red") {
    bgColorClass = "bg-wwRed";
    textColorClass = "text-white";
    buttonClass = "btn-secondary";
    emphasisColorClass = "text-wwYellow";
  }
  const hasFacts = facts && facts.length > 0;
  const hasLinks = links && links.length > 0;
  const showLocationIcon = subheading && subheadingType === "location";
  const showTextSubheading = subheading && subheadingType === "text";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`grid lg:grid-cols-2 ${bgColorClass} overflow-x-hidden`, "class")}> <!-- IMAGE LEFT ON DESKTOP --> ${imagePosition === "left" && renderTemplate`<div> <img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} class="sm:w-full max-h-96 lg:max-h-none lg:h-full object-cover" loading="lazy"> </div>`} <!-- TEXT COLUMN --> <div${addAttribute(imagePosition === "left" ? "p-8 ml-8 lg:mr-8 my-auto relative 2xl:ml-32 2xl:mr-16" : "p-8 ml-8 2xl:ml-16 2xl:mr-32 my-auto relative", "class")}> <div class="relative md:py-10 lg:pt-8 lg:pb-4"> <h2${addAttribute(`${textColorClass} text-left text-4xl lg:text-5xl`, "class")}> ${title} </h2> <div class="lg:inline-flex flex gap-2 mt-2"> ${showLocationIcon && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`size-6 ${emphasisColorClass}`, "class")}> <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"></path> </svg> <p${addAttribute(emphasisColorClass, "class")}>${subheading}</p> ` })}`} ${showTextSubheading && renderTemplate`<p${addAttribute(emphasisColorClass, "class")}>${subheading}</p>`} </div> </div> <!-- Facts (desktop, 2xl and up) --> ${hasFacts && renderTemplate`<div${addAttribute(`hidden 2xl:flex gap-4 ${bgColorClass} p-4`, "class")}> ${facts.map((f, i) => renderTemplate`${renderComponent($$result, "ProjectStat", $$ProjectStat, { "colorScheme": colorScheme, "stat": f.factStat, "description": f.factDescription })}`)} </div>`} <!-- Main description --> <p${addAttribute(`pt-8 md:pt-4 ${hasFacts ? "mb-10 2xl:mt-8" : ""} ${textColorClass} text-left`, "class")}> ${description} </p> <!-- Facts (mobile / tablet) --> ${hasFacts && renderTemplate`<div class="2xl:hidden flex flex-row flex-wrap lg:justify-start gap-8 p-4"> ${facts.map((f) => renderTemplate`${renderComponent($$result, "ProjectStat", $$ProjectStat, { "colorScheme": colorScheme, "stat": f.factStat, "description": f.factDescription })}`)} </div>`} <!-- CTAs --> ${hasLinks && renderTemplate`<div class="flex flex-col lg:justify-start sm:flex-row sm:items-center gap-4 py-8"> ${links.map((l, i) => {
    const appearance = l.appearance ?? "primary";
    const baseClass = appearance === "secondary" ? "btn-secondary whitespace-nowrap max-w-min" : buttonClass + " whitespace-nowrap max-w-min";
    return renderTemplate`<a${addAttribute(l.href, "href")}${addAttribute(baseClass, "class")}> ${l.label} </a>`;
  })} </div>`} </div> <!-- IMAGE RIGHT ON DESKTOP --> ${imagePosition === "right" && renderTemplate`<div> <img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} class="sm:w-full max-h-96 lg:max-h-none lg:h-full object-cover" loading="lazy"> </div>`} </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Blocks/ProjectBlock.astro", void 0);

export { $$ProjectBlock as $ };
