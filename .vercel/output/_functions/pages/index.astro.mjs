import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$Default } from '../chunks/Default_mBGJLeJK.mjs';
import { $ as $$CTA } from '../chunks/CTA_Crx7gJKc.mjs';
import { $ as $$FullscreenHero } from '../chunks/FullscreenHero_D3Oz-L_H.mjs';
import 'clsx';
import { $ as $$ProjectBlock } from '../chunks/ProjectBlock_BL8LtC-R.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
/* empty css                                 */
import { S as ServiceLinks } from '../chunks/index_BG6C6zDl.mjs';
import { s as sanityClient } from '../chunks/sanityClient_DxVeBFpp.mjs';
import { G as GET_HOME_PAGE_PROJECTS } from '../chunks/projects_Ty29-49X.mjs';
import { $ as $$ProjectGallery } from '../chunks/ProjectGallery_D2GbiJGb.mjs';
import { g as getAllListingPreviews } from '../chunks/propertyTypeFormatter_BQ5xwLpq.mjs';
import { L as ListingGallery } from '../chunks/ListingGallery_COHfZ8vb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://wittnerwollman.com");
const $$Stat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Stat;
  const { bgColor = "bg-wwRed", title, descriptor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${bgColor} p-6 sm:p-16 min-w-64 xl:min-w-64 2xl:min-w-64 flex items-center justify-center h-64`, "class")}> <div class="flex items-center gap-4 mr-auto sm:block sm:items-start"> <h2 class="text-white">${title}</h2> <p class="text-lg text-white">${descriptor}</p> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Stat.astro", void 0);

const BGImage = new Proxy({"src":"/_astro/bg_backdrop.DGBu0GK-.png","width":1440,"height":956,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/images/bg_backdrop.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://wittnerwollman.com");
const $$StatBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatBlock;
  const { title, description, facts = [], bgImageUrl, id } = Astro2.props;
  const bgColors = ["bg-wwRed", "bg-wwBlack", "bg-wwLogoPink", "bg-wwLogoRed"];
  return renderTemplate`${maybeRenderHead()}<div class="relative"${addAttribute(id, "id")}> <div class="absolute z-10 w-full xl:h-auto mt-16"> <div class="global-margin-x py-0 lg:py-16"> <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-16"> <h2 class="flex-1">${title}</h2> ${description && renderTemplate`<p class="text-center xl:text-right max-w-3xl">${description}</p>`} </div> <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 global-space-x global-space-y"> ${facts.map((f, i) => {
    const bgIndex = i % bgColors.length;
    const bgColor = bgColors[bgIndex];
    return renderTemplate`<div class="transition-transform duration-300 ease-out opacity-100 md:hover:-translate-y-1"> ${renderComponent($$result, "Stat", $$Stat, { "bgColor": bgColor, "title": f.factStat, "descriptor": f.factDescription })} </div>`;
  })} </div> </div> </div>  ${bgImageUrl ? renderTemplate`<img${addAttribute(bgImageUrl, "src")} alt="stats-bg" class="w-full min-h-[48rem] xl:h-64 opacity-20 object-cover" loading="lazy">` : renderTemplate`<img${addAttribute(BGImage.src, "src")} alt="stats-bg" class="w-full min-h-[48rem] xl:h-64 opacity-20 object-cover" loading="lazy">`} </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Blocks/StatBlock.astro", void 0);

const LOGOS = [
  {
    src: "src/assets/logos/christ-umc-logo.png",
    alt: "Christ United Methodist Church logo"
  },
  {
    src: "src/assets/logos/city-st-petersburg-logo.png",
    alt: "City of St. Petersburg logo"
  },
  {
    src: "src/assets/logos/clear-ph-logo.png",
    alt: "ClearPH branding agency logo"
  },
  { src: "src/assets/logos/datz-logo.png", alt: "Datz Restaurant Group logo" },
  {
    src: "src/assets/logos/everglades-university-logo.png",
    alt: "Everglades University logo"
  },
  {
    src: "src/assets/logos/feldmans-equities-logo.png",
    alt: "Feldman Equities commercial real estate logo"
  },
  {
    src: "src/assets/logos/fulmer-leroy-albee-logo.webp",
    alt: "Fulmer Leroy Albee law firm logo"
  },
  {
    src: "src/assets/logos/good-intentions-logo.png",
    alt: "Good Intentions vegan restaurant logo"
  },
  {
    src: "src/assets/logos/hp-capital-group-logo.png",
    alt: "HP Capital Group real estate logo"
  },
  {
    src: "src/assets/logos/intermezzo-logo.png",
    alt: "Intermezzo Coffee & Cocktails logo"
  },
  {
    src: "src/assets/logos/keiser-university-logo.png",
    alt: "Keiser University logo"
  },
  {
    src: "src/assets/logos/kw-st-pete-logo.png",
    alt: "Keller Williams St. Pete Real Estate logo"
  },
  { src: "src/assets/logos/lids-logo.svg", alt: "Lids retail logo" },
  {
    src: "src/assets/logos/paradeco-logo.webp",
    alt: "Paradeco Coffee Roasters logo"
  },
  {
    src: "src/assets/logos/pmg-logo.png",
    alt: "PMG real estate and development logo"
  },
  {
    src: "src/assets/logos/puregreen-logo.png",
    alt: "Pure Green juice bar logo"
  },
  {
    src: "src/assets/logos/related-logo.png",
    alt: "Related Group real estate development logo"
  },
  {
    src: "src/assets/logos/skyward-living-logo.png",
    alt: "Skyward Living real estate logo"
  },
  {
    src: "src/assets/logos/st-pete-athletic.png",
    alt: "St. Pete Athletic logo"
  },
  {
    src: "src/assets/logos/the-bank-of-tampa.png",
    alt: "The Bank of Tampa logo"
  },
  {
    src: "src/assets/logos/the-denunzio-group-logo.png",
    alt: "The Denunzio Group logo"
  },
  {
    src: "src/assets/logos/the-floridian-logo.png",
    alt: "The Floridian social club logo"
  },
  {
    src: "src/assets/logos/waterview-marinas-logo.png",
    alt: "Waterview Marinas logo"
  },
  {
    src: "src/assets/logos/belpointe-logo.png",
    alt: "Belpointe real estate investment logo"
  }
];
const CompanyGallery = ({ displayHeader = "no" }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "global-margin-y", children: [
    displayHeader === "yes" && /* @__PURE__ */ jsx("h2", { className: "text-center mb-12", children: "Companies We've Helped" }),
    /* @__PURE__ */ jsx("div", { className: "global-margin-x", children: /* @__PURE__ */ jsx("div", { className: "scroller", "data-direction": "left", "data-speed": "slow", children: /* @__PURE__ */ jsx("div", { className: "scroller__inner", children: LOGOS.map((logo, i) => /* @__PURE__ */ jsx(
      "img",
      {
        src: logo.src,
        alt: logo.alt,
        className: "h-24 w-auto object-contain mx-16",
        loading: "lazy"
      },
      i
    )) }) }) })
  ] });
};

const $$Astro$1 = createAstro("https://wittnerwollman.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service, className = "" } = Astro2.props;
  const { title, shortDescription, slug, image } = service ?? {};
  const href = slug ? `/services/${slug}` : "#";
  const sanitizedDescription = shortDescription?.replace(/\s/g, " ");
  const imageUrl = image?.imageUrl;
  const imageAlt = image?.alt || title || "Service image";
  const iconType = title?.toLowerCase();
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`w-full h-full block ${className}`, "class")}> <div class="flex gap-2 relative group">  <div class="flex items-center justify-center sm:block w-full h-full lg:h-auto lg:w-64
             border-b-4 border-wwSecondary border-opacity-50 bg-gray-50/75
             absolute top-0 left-0 px-4 lg:px-8 py-4 z-10"> <div> <div class="flex flex-col items-center sm:block sm:items-start max-w-min"> <div class="bg-wwRed p-4 mb-4 rounded-full inline-flex"> ${iconType === "leasing" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clip-rule="evenodd"></path> </svg>`} ${iconType === "sales" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"></path> <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"></path> </svg>`} ${iconType === "acquisition" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path> </svg>`} ${iconType === "consulting" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clip-rule="evenodd"></path> </svg>`} </div> <div class="flex items-center gap-6 mb-2"> <h5 class="font-bold">${title}</h5> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden sm:block size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path> </svg> </div> ${sanitizedDescription && renderTemplate`<p class="hidden sm:block text-sm text-wwBlack"> ${sanitizedDescription} </p>`} </div> </div> </div>  <div class="transition-opacity opacity-0 group-hover:opacity-20
             bg-gray-50 w-full h-full absolute top-0 left-0"></div>  ${imageUrl && renderTemplate`<img${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-full object-cover" loading="lazy">`} </div> </a>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Cards/ServiceCard.astro", void 0);

const $$Astro = createAstro("https://wittnerwollman.com");
const $$ServiceBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceBlock;
  const { services = [], displayHeader = "yes" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="global-margin-x space-y-24 my-40"> ${displayHeader === "yes" && renderTemplate`<div class="flex md:justify-between justify-center items-center"> <h2 class="md:text-left text-center">Our Services</h2> </div>`} <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:justify-items-start justify-items-center"> ${services.map((service) => renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "service": service })}`)} </div> <div class="md:hidden flex justify-center"> <a class="btn-primary"${addAttribute(ServiceLinks.relLink, "href")}> LEARN MORE </a> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Blocks/ServiceBlock.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const facts = [
    { factStat: "150+", factDescription: "Transactions closed" },
    { factStat: "98%", factDescription: "Client satisfaction rate" },
    { factStat: "12", factDescription: "Years in Tampa Bay" },
    { factStat: "24/7", factDescription: "Support for our clients" }
  ];
  const services = [
    {
      title: "Leasing",
      slug: "leasing",
      image: {
        imageUrl: "src/assets/services/leasing-service-hero.webp",
        alt: "Leasing Service"
      }
    },
    {
      title: "Consulting",
      slug: "consulting",
      image: {
        imageUrl: "src/assets/services/consulting-service-hero.webp",
        alt: "Consulting Service"
      }
    },
    {
      title: "Acquisition",
      slug: "acquisition",
      image: {
        imageUrl: "src/assets/services/acquisition-service-hero.webp",
        alt: "Acquisition Service"
      }
    },
    {
      title: "Sales",
      slug: "sales",
      image: {
        imageUrl: "src/assets/services/sales-service-hero.webp",
        alt: "Sales Service"
      }
    }
  ];
  const projects = await sanityClient.fetch(GET_HOME_PAGE_PROJECTS);
  const listings = await getAllListingPreviews();
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "FullscreenHero", $$FullscreenHero, { "headerText": "WITTNER WOLLMAN GROUP: TRANSFORMING THE FUTURE OF ST. PETE & TAMPA BAY", "bodyText": [
    "Our team of stellar commercial and residential agents have a talent for envisioning the future of our town. Partner with us to make your mark."
  ], "videoUrl": "https://ww-group.nyc3.cdn.digitaloceanspaces.com/website_vid.mp4", "backupImageUrl": "src/assets/images/reflection-eagle-pov.webp", "centeredText": false, "gradient": "black", "links": [
    { href: "/team", label: "MEET THE TEAM", appearance: "primary" },
    {
      href: "/listings",
      label: "VIEW LISTINGS",
      appearance: "secondary"
    }
  ] })} ${renderComponent($$result2, "StatBlock", $$StatBlock, { "id": "stats", "title": "By the Numbers", "facts": facts })} ${renderComponent($$result2, "ProjectBlock", $$ProjectBlock, { "title": "SHAPING THE URBAN LANDSCAPE & COMMUNITY", "description": "Our team has exceptional talent and experience in commercial real estate, development services, and luxury residential real estate.", "imageSrc": "src/assets/images/team-portrait-img.webp", "imageAlt": "team image", "imagePosition": "right", "colorScheme": "red", "links": [{ href: "/team", label: "MEET THE TEAM", appearance: "secondary" }] })} ${renderComponent($$result2, "ServiceGallery", $$ServiceBlock, { "services": services, "displayHeader": "yes" })} ${renderComponent($$result2, "ProjectGallery", $$ProjectGallery, { "projects": projects })} ${renderComponent($$result2, "ListingGallery", ListingGallery, { "listings": listings, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Gallery/ListingGallery", "client:component-export": "ListingGallery" })} ${renderComponent($$result2, "CompanyScroll", CompanyGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/Company/CompanyScroll", "client:component-export": "default" })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
