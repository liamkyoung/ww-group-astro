import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://wittnerwollman.com");
const $$FullscreenHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FullscreenHero;
  const {
    headerText,
    bodyText = [],
    links = [],
    videoUrl,
    backupImageUrl,
    centeredText = false,
    gradient = "none"
  } = Astro2.props;
  function getGradientColor(g) {
    if (g === "red") return "to-wwRed";
    if (g === "black") return "to-wwBlack";
    return "";
  }
  const gradientColor = getGradientColor(gradient);
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <div class="relative group"> <!-- Text + CTA overlay --> <div${addAttribute(`absolute z-20 flex flex-col h-full justify-center md:space-y-16 space-y-4 global-margin-x ` + (!centeredText ? "lg:w-3/5" : ""), "class")}> <div${addAttribute(`space-y-8 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity ` + (!centeredText ? "lg:text-left" : "text-center lg:text-center"), "class")}> <h1 class="md:font-normal text-white text-3xl sm:text-3xl font-semibold md:text-5xl lg:text-6xl"> ${headerText} </h1> ${bodyText && renderTemplate`<div class="overflow-y-scroll max-h-64 sm:max-h-96 no-scrollbar"> ${bodyText.map((paragraph) => renderTemplate`<p${addAttribute(`md:text-lg font-medium text-sm text-white ${!centeredText ? "lg:w-full" : ""} mb-6`, "class")}> ${paragraph} </p>`)} </div>`} </div> <!-- Buttons --> <div class="flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"> ${links.map((link) => {
    const appearance = link.appearance ?? "primary";
    const baseClass = appearance === "secondary" ? "btn-secondary" : "btn-primary";
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(baseClass, "class")}> ${link.label} </a>`;
  })} </div> </div> <!-- Black overlay --> <div class="bg-wwBlack absolute inset-0 z-10 opacity-90 md:opacity-0 group-hover:opacity-90 transition-opacity pointer-events-none"></div> <!-- Desktop media: video or image --> ${videoUrl ? renderTemplate`<video class="sm:w-full sm:h-screen lg:h-auto object-cover hidden sm:block"${addAttribute(videoUrl, "src")} autoplay muted loop playsinline></video>` : backupImageUrl ? renderTemplate`<img${addAttribute(backupImageUrl, "src")}${addAttribute(headerText, "alt")} class="sm:w-full sm:h-screen lg:h-auto object-cover hidden sm:block" loading="lazy">` : renderTemplate`<div class="hidden sm:block sm:w-full sm:h-screen lg:h-auto bg-wwBlack"></div>`} <!-- Mobile: always show backup image / fallback --> ${backupImageUrl ? renderTemplate`<img${addAttribute(backupImageUrl, "src")}${addAttribute(headerText, "alt")} class="w-full h-96 object-cover sm:hidden block" loading="lazy">` : renderTemplate`<div class="w-full h-96 bg-wwBlack sm:hidden block"></div>`} </div> <!-- Bottom gradient --> ${gradientColor && renderTemplate`<div${addAttribute(`w-full bg-gradient-to-b from-wwBlack/0 ${gradientColor} pointer-events-none h-24 bottom-0 z-20 absolute`, "class")}></div>`} </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Hero/FullscreenHero.astro", void 0);

export { $$FullscreenHero as $ };
