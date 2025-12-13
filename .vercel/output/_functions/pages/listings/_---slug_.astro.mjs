import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { s as sanityClient } from '../../chunks/sanityClient_DxVeBFpp.mjs';
import { f as formatDollarAmount, a as formatPropertyType, b as formatListingType, c as formatPaymentFrequency, d as formatZoningType, L as LISTING_SLUGS_QUERY, e as LISTING_BY_SLUG_QUERY } from '../../chunks/propertyTypeFormatter_BQ5xwLpq.mjs';
import 'clsx';
import { L as ListingLinks } from '../../chunks/index_BG6C6zDl.mjs';
import { $ as $$Default } from '../../chunks/Default_mBGJLeJK.mjs';
import { u as urlFor } from '../../chunks/sanityImage_zNuXR53M.mjs';
import { G as GoogleMap } from '../../chunks/GoogleMap_EiZjh-RC.mjs';
import { $ as $$SocialList } from '../../chunks/SocialList_B_Xi2ZsZ.mjs';
import { i as instagramHandleToUrl } from '../../chunks/instgramHandleToURL_BQVn5MlZ.mjs';
import { $ as $$CTA } from '../../chunks/CTA_Crx7gJKc.mjs';
import { toHTML } from '@portabletext/to-html';
import { $ as $$ProjectBlock } from '../../chunks/ProjectBlock_BL8LtC-R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$4 = createAstro("https://wittnerwollman.com");
const $$ListingHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ListingHero;
  const {
    streetAddress,
    city,
    state,
    zipCode,
    sqFt,
    sqFtLand,
    sqFtLot,
    propertyType,
    isPriceNegotiable,
    price,
    rentalPrice,
    flyer,
    zillowLink,
    virtualTourLink,
    paymentFrequency,
    listingType
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center"> <div class="space-y-4"> <a${addAttribute(ListingLinks.relLink, "href")}> <h6 class="text-gray-600 hover:text-gray-400 text-center lg:text-left">
Listings /
</h6> </a> <div class="text-center lg:text-left"> <h3>${streetAddress}</h3> <h6> ${city}, ${state} ${zipCode} </h6> </div> <div> <div class="flex gap-x-2 text-center lg:text-left"> <span class="inline-flex items-center gap-2">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-wwBlack"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd"></path> </svg> ${sqFt} sq ft
</span> ${sqFtLand && renderTemplate`<span>${sqFtLand} land sq ft</span>`} ${sqFtLot && renderTemplate`<span>${sqFtLot} acre lot</span>`} ${propertyType && renderTemplate`<span class="inline-flex items-center gap-2">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-wwBlack"> <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z"></path> <path fill-rule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clip-rule="evenodd"></path> </svg> ${formatPropertyType(propertyType)} </span>`} </div> ${listingType && renderTemplate`<div class="my-4 flex gap-4"> <span class="bg-wwRed p-4 text-white font-semibold block lg:mx-0 mx-auto"> ${formatListingType(listingType)} </span> </div>`} </div> </div> <div> <div class="space-y-4"> <h1 class="bg-wwRed p-6 text-white text-right"> ${isPriceNegotiable ? "Negotiable" : formatDollarAmount(price)} </h1> ${rentalPrice && rentalPrice > 0 && renderTemplate`<div class="flex items-end bg-wwRed p-4 justify-end max-w-min whitespace-nowrap lg:ml-auto mx-auto lg:mr-0"> <h3 class="text-white text-right"> ${formatDollarAmount(rentalPrice)} </h3> <span class="text-white text-xl bg-wwRed font-medium"> ${formatPaymentFrequency(paymentFrequency)} </span> </div>`} </div> ${flyer && flyer.url && renderTemplate`<a${addAttribute(flyer.url, "href")} target="_blank" rel="noreferrer"> <div class="btn-secondary max-w-min mt-4 lg:ml-auto mx-auto lg:mr-0"> <span class="flex items-center gap-2 font-bold whitespace-nowrap">
Listing Flyer
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"> <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L18.53 17.47a.75.75 0 0 1-1.06 1.06L5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> <path fill-rule="evenodd" d="M9 4.5A.75.75 0 0 1 9.75 3.75H19.5a.75.75 0 0 1 .75.75V14.25a.75.75 0 0 1-1.5 0V6.31L6.53 18.78a.75.75 0 1 1-1.06-1.06L17.69 5.25H9.75A.75.75 0 0 1 9 4.5Z" clip-rule="evenodd"></path> </svg> </span> </div> </a>`} ${zillowLink && renderTemplate`<a${addAttribute(zillowLink, "href")} target="_blank" rel="noreferrer"> <div class="btn-secondary max-w-min mt-2"> <span class="flex items-center gap-2 font-bold whitespace-nowrap">
Zillow
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"> <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L18.53 17.47a.75.75 0 0 1-1.06 1.06L5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> <path fill-rule="evenodd" d="M9 4.5A.75.75 0 0 1 9.75 3.75H19.5a.75.75 0 0 1 .75.75V14.25a.75.75 0 0 1-1.5 0V6.31L6.53 18.78a.75.75 0 1 1-1.06-1.06L17.69 5.25H9.75A.75.75 0 0 1 9 4.5Z" clip-rule="evenodd"></path> </svg> </span> </div> </a>`} ${virtualTourLink && renderTemplate`<a${addAttribute(virtualTourLink, "href")} target="_blank" rel="noreferrer"> <div class="btn-secondary max-w-min mt-2"> <span class="flex items-center gap-2 font-bold whitespace-nowrap">
Virtual Tour
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"> <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L18.53 17.47a.75.75 0 0 1-1.06 1.06L5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> <path fill-rule="evenodd" d="M9 4.5A.75.75 0 0 1 9.75 3.75H19.5a.75.75 0 0 1 .75.75V14.25a.75.75 0 0 1-1.5 0V6.31L6.53 18.78a.75.75 0 1 1-1.06-1.06L17.69 5.25H9.75A.75.75 0 0 1 9 4.5Z" clip-rule="evenodd"></path> </svg> </span> </div> </a>`} </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Hero/ListingHero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://wittnerwollman.com");
const $$PhotoGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PhotoGallery;
  const { imageGallery } = Astro2.props;
  const hasImages = imageGallery && imageGallery.length > 0;
  const getImageUrl = (img) => img?.image?.asset?.url ?? "";
  const getAlt = (img, fallbackIndex) => img?.image?.alt || img?.caption || `Listing image ${fallbackIndex + 1}`;
  const galleryId = `gallery-${Math.random().toString(36).slice(2, 8)}`;
  return renderTemplate(_a || (_a = __template(["", '<script>\n  (() => {\n    const root = document.getElementById("{galleryId}");\n    if (!root) return;\n\n    const overlay = root.querySelector("[data-lightbox-overlay]");\n    const openBtn = root.querySelector("[data-lightbox-open]");\n    const closeBtn = root.querySelector("[data-lightbox-close]");\n    const prevBtn = root.querySelector("[data-lightbox-prev]");\n    const nextBtn = root.querySelector("[data-lightbox-next]");\n    const slides = Array.from(\n      root.querySelectorAll("[data-lightbox-slide]"),\n    ) as HTMLElement[];\n\n    if (!overlay || !openBtn || !closeBtn || slides.length === 0) return;\n\n    let currentIndex = 0;\n\n    const showSlide = (index: number) => {\n      if (index < 0) index = slides.length - 1;\n      if (index >= slides.length) index = 0;\n      currentIndex = index;\n\n      slides.forEach((slide, i) => {\n        if (i === currentIndex) {\n          slide.classList.remove("hidden");\n          slide.classList.add("block");\n        } else {\n          slide.classList.remove("block");\n          slide.classList.add("hidden");\n        }\n      });\n    };\n\n    const openLightbox = () => {\n      overlay.classList.remove("hidden");\n      overlay.classList.add("flex");\n      showSlide(currentIndex);\n      document.body.style.overflow = "hidden";\n    };\n\n    const closeLightbox = () => {\n      overlay.classList.remove("flex");\n      overlay.classList.add("hidden");\n      document.body.style.overflow = "";\n    };\n\n    openBtn.addEventListener("click", openLightbox);\n    closeBtn.addEventListener("click", closeLightbox);\n\n    prevBtn?.addEventListener("click", () => showSlide(currentIndex - 1));\n    nextBtn?.addEventListener("click", () => showSlide(currentIndex + 1));\n\n    // Close on overlay click (but not when clicking image / controls)\n    overlay.addEventListener("click", (event) => {\n      if (event.target === overlay) {\n        closeLightbox();\n      }\n    });\n\n    // Escape key closes lightbox\n    window.addEventListener("keydown", (event) => {\n      if (event.key === "Escape" && !overlay.classList.contains("hidden")) {\n        closeLightbox();\n      }\n    });\n  })();\n<\/script>'])), hasImages && renderTemplate`${maybeRenderHead()}<div${addAttribute(galleryId, "id")} class="w-full"><div class="flex gap-4 mt-8"><div class="lg:w-3/4 w-full">${imageGallery.map(
    (img, index) => index === 0 && renderTemplate`<div><img${addAttribute(urlFor(img?.image).url(), "src")}${addAttribute(getAlt(img, index), "alt")} class="w-full h-auto object-cover rounded-md" loading="eager"></div>`
  )}</div><div class="hidden w-1/4 lg:flex flex-col gap-8">${imageGallery.map(
    (img, index) => index !== 0 && index < 3 && renderTemplate`<div><img${addAttribute(urlFor(img?.image).url(), "src")}${addAttribute(getAlt(img, index), "alt")} class="w-full h-auto object-cover rounded-md" loading="lazy"></div>`
  )}</div></div><div class="flex justify-center mt-4"><button type="button" class="btn-primary" data-lightbox-open>
SEE FULL GALLERY
</button></div><div class="fixed inset-0 z-50 hidden items-center justify-center bg-black/80" data-lightbox-overlay><button type="button" class="absolute top-4 right-4 text-white text-2xl" aria-label="Close gallery" data-lightbox-close>
×
</button><button type="button" class="absolute left-4 text-white text-3xl px-3 py-2 bg-black/40 rounded-full" aria-label="Previous image" data-lightbox-prev>
‹
</button><button type="button" class="absolute right-4 text-white text-3xl px-3 py-2 bg-black/40 rounded-full" aria-label="Next image" data-lightbox-next>
›
</button><div class="max-w-5xl w-full px-4"><div class="relative w-full">${imageGallery.map((img, index) => renderTemplate`<figure${addAttribute(index, "key")}${addAttribute(`w-full ${index === 0 ? "block" : "hidden"}`, "class")} data-lightbox-slide${addAttribute(index, "data-index")}><img${addAttribute(getImageUrl(img), "src")}${addAttribute(getAlt(img, index), "alt")} class="w-full h-auto object-contain max-h-[80vh] rounded-md" loading="lazy">${img.caption && renderTemplate`<figcaption class="mt-2 text-center text-sm text-gray-200">${img.caption}</figcaption>`}</figure>`)}</div></div></div></div>`);
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/PhotoGallery.astro", void 0);

const $$Astro$2 = createAstro("https://wittnerwollman.com");
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    bedrooms,
    bathrooms,
    sqFt,
    yearBuilt,
    yearRenovated,
    propertyType,
    isPriceNegotiable,
    price,
    sqFtLand,
    status,
    area,
    zipCode,
    zoningType,
    occupancy,
    cool,
    heat,
    lighting,
    electricity,
    water,
    waste,
    sewer,
    internet,
    hasParking,
    parkingDescription,
    buildingClass,
    sqFtLot
  } = Astro2.props;
  const rawFeatures = [
    { label: "Status", description: status },
    { label: "Bedrooms", description: bedrooms },
    { label: "Bathrooms", description: bathrooms },
    { label: "Square Footage", description: sqFt },
    { label: "Year Built", description: yearBuilt },
    { label: "Year Renovated", description: yearRenovated },
    {
      label: "Building Type",
      description: propertyType ? formatPropertyType(propertyType) : null
    },
    { label: "Building Class", description: buildingClass },
    {
      label: "Zoning Type",
      description: zoningType ? formatZoningType(zoningType) : null
    },
    { label: "Area", description: area },
    { label: "Zip Code", description: zipCode },
    {
      label: "Occupancy",
      description: typeof occupancy === "number" ? `${occupancy}%` : null
    },
    {
      label: "Price",
      description: isPriceNegotiable || !price ? "Negotiable" : formatDollarAmount(price)
    },
    { label: "Land Square Footage", description: sqFtLand },
    { label: "Lot Square Footage", description: sqFtLot },
    { label: "Cooling", description: cool },
    { label: "Heating", description: heat },
    { label: "Lighting", description: lighting },
    { label: "Electricity", description: electricity },
    { label: "Water", description: water },
    { label: "Sewage", description: sewer },
    { label: "Waste", description: waste },
    { label: "Internet", description: internet },
    {
      label: "Parking",
      description: hasParking != null ? hasParking ? "Yes" : "No" : null
    },
    {
      label: "Parking Spots",
      description: hasParking ? parkingDescription : null
    }
  ];
  const features = rawFeatures.filter(
    (f) => f.description !== void 0 && f.description !== null && f.description !== "n_a"
  );
  const mid = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, mid);
  const rightFeatures = features.slice(mid);
  return renderTemplate`${features.length > 0 && renderTemplate`${maybeRenderHead()}<div><h2>Features</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 my-16"><div class="space-y-8">${leftFeatures.map((f) => renderTemplate`<div class="flex justify-between items-end"><h6>${f.label}</h6><h3>${f.description?.toString()}</h3></div>`)}</div><div class="space-y-8">${rightFeatures.map((f) => renderTemplate`<div class="flex justify-between items-end"><h6>${f.label}</h6><h3>${f.description?.toString()}</h3></div>`)}</div></div></div>`}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Features.astro", void 0);

const $$Astro$1 = createAstro("https://wittnerwollman.com");
const $$ListingCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListingCTA;
  const { agent } = Astro2.props;
  const instagramHandle = agent.instagram;
  const facebookHandle = agent.facebook ?? null;
  const profilePic = agent.profilePic;
  const profilePicUrl = profilePic ? urlFor(profilePic).width(400).height(400).url() : null;
  return renderTemplate`${maybeRenderHead()}<div class="bg-wwRed relative py-8"> <div class="global-margin-x grid lg:grid-cols-3 grid-cols-1"> <div class="lg:row-span-2 row-span-1"> <h2 class="text-white mb-8 text-center lg:text-left lg:whitespace-nowrap whitespace-normal">
Schedule a Tour With <br> <span class="text-wwYellow">${agent.title}</span> </h2> <div> <h4 class="text-white mb-4 text-center lg:text-left">Contact Info</h4> ${renderComponent($$result, "SocialList", $$SocialList, { "email": agent.email, "phoneNumber": agent.phoneNumber, "instagram": instagramHandle ? {
    username: instagramHandle,
    profileLink: instagramHandleToUrl(instagramHandle)
  } : null, "facebook": facebookHandle ? {
    username: facebookHandle,
    profileLink: `https://facebook.com/${facebookHandle}`
  } : null })} </div> </div> ${profilePicUrl && renderTemplate`<img${addAttribute(profilePicUrl, "src")}${addAttribute(profilePic?.alt ?? agent.title ?? "Listing agent", "alt")} class="absolute z-10 bottom-0 -right-16 xl:right-16 mr-24 size-80 hidden lg:block object-cover rounded-full" loading="lazy">`} </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/ListingCTA.astro", void 0);

const $$Astro = createAstro("https://wittnerwollman.com");
const prerender = false;
async function getStaticPaths() {
  const slugDocs = await sanityClient.fetch(LISTING_SLUGS_QUERY);
  const paths = await Promise.all(
    slugDocs.map(async ({ slug }) => {
      const listing = await sanityClient.fetch(
        LISTING_BY_SLUG_QUERY,
        { slug }
      );
      return {
        params: { slug },
        props: { listing }
      };
    })
  );
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { listing } = Astro2.props;
  if (!listing) {
    throw new Error("Listing not found");
  } else if (!listing.location) {
    throw new Error(`Listing not found ${listing.title}`);
  }
  typeof listing.price === "number" ? new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(listing.price) : null;
  const htmlDesc = toHTML(listing.fullDescription);
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="global-margin-x mt-24 space-y-24"> ${renderComponent($$result2, "ListingHero", $$ListingHero, { "streetAddress": listing.location.streetAddress ?? listing.location.streetAddress ?? listing.title, "city": listing.location.city ?? listing.location.city, "state": listing.location.state ?? listing.location.state, "zipCode": listing.location.zipCode ?? listing.location.zipCode, "sqFt": listing.sqFt ?? 0, "sqFtLand": listing.sqFtLand ?? 0, "sqFtLot": listing.sqFtLot ?? 0, "propertyType": listing.propertyTypes, "isPriceNegotiable": listing.isPriceNegotiable, "price": listing.price ?? 0, "rentalPrice": listing.rentalPrice ?? 0, "flyer": listing.listingFlyer, "zillowLink": listing.zillowLink ?? "", "virtualTourLink": listing.virtualTourLink })} ${renderComponent($$result2, "PhotoGallery", $$PhotoGallery, { "imageGallery": listing.imageGallery ?? [] })} ${renderComponent($$result2, "ProjectBlock", $$ProjectBlock, { "title": listing.title, "subheading": listing.location.streetAddress, "subheadingType": "location", "imageSrc": urlFor(listing.coverImage).url(), "colorScheme": "red", "description": listing.overviewText })} <div class="space-y-8 mb-24"> <h2>Property Description</h2> <div>${unescapeHTML(htmlDesc)}</div> </div> ${renderComponent($$result2, "Features", $$Features, { "bedrooms": listing.bedCount, "bathrooms": listing.bathroomCount, "sqFt": listing.sqFt, "yearBuilt": listing.yearBuilt, "yearRenovated": listing.yearRenovated, "propertyType": listing.propertyTypes, "isPriceNegotiable": listing.isPriceNegotiable, "price": listing.price, "sqFtLand": listing.sqFtLand, "status": void 0, "occupancy": listing.occupancy, "area": listing.areaOverview, "zipCode": listing.location.zipCode ?? listing.location.zipCode, "zoningType": listing.zoningType, "cool": listing.cool, "heat": listing.heat, "lighting": listing.lighting, "electricity": listing.electricity, "water": listing.water, "waste": listing.waste, "sewer": listing.sewer, "internet": listing.internet, "hasParking": listing.hasParking, "parkingDescription": listing.parkingDescription, "buildingClass": listing.buildingClass, "sqFtLot": listing.sqFtLot })} </div> ${renderComponent($$result2, "GoogleMap", GoogleMap, { "fullscreen": true, "pins": [
    {
      name: "",
      coords: {
        lat: listing.location.latitude,
        lng: listing.location.longitude
      },
      slug: listing.slug,
      coverImg: listing.coverImage,
      address: listing.location.streetAddress,
      price: listing.price || 0
    }
  ], "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/GoogleMap/GoogleMap", "client:component-export": "GoogleMap" })} ${listing.agents ? renderTemplate`${renderComponent($$result2, "ListingCTA", $$ListingCTA, { "agent": listing.agents[0] })}` : renderTemplate`${renderComponent($$result2, "CTA", $$CTA, {})}`}` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/listings/[...slug].astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/listings/[...slug].astro";
const $$url = "/listings/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
