import { s as sanityClient } from './sanityClient_DxVeBFpp.mjs';
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$CardInfo } from './CardInfo_B570dobN.mjs';
import { u as urlFor } from './sanityImage_zNuXR53M.mjs';

const ALL_COMMUNITY_RESOURCES_QUERY = `
  *[_type == "communityResource"]{
    _id,
    title,
    address,
    description,
    categories->{
      _id,
      title,
      slug
    },
    image{
      asset->{
        _id,
        url
      },
      alt
    }
  } | order(title asc)
`;
const COMMUNITY_RESOURCES_BY_TEAMMATE_SLUG_QUERY = `
    *[
      _type == "communityResource" &&
      _id in *[
        _type == "teammate" &&
        slug.current == $slug
      ][0].favoritePlaces[]._ref
    ] | order(title asc) {
      _id,
      title,
      address,
      description,
      categories->{
        _id,
        title,
        slug
      },
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    }
  `;
async function getCommunityResourcesByTeammateSlug(slug) {
  return sanityClient.fetch(COMMUNITY_RESOURCES_BY_TEAMMATE_SLUG_QUERY, {
    slug
  });
}

const $$Astro$1 = createAstro("https://wittnerwollman.com");
const $$CommunityResourceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommunityResourceCard;
  const { className = "", doc } = Astro2.props;
  const title = doc?.title ?? "";
  const image = doc?.image;
  const description = doc?.description ?? "";
  const address = doc?.address ?? "";
  const sanitizedDescription = description ? description.replace(/\s/g, " ") : "";
  const shortenedAddressParts = address ? address.split(",") : [];
  const displayAddress = shortenedAddressParts.length >= 2 ? `${shortenedAddressParts[0]}, ${shortenedAddressParts[1]}` : address;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-64 md:w-96 lg:w-72 space-y-4 ${className}`, "class")}> <div class="space-y-2"> <h5>${title}</h5> ${renderComponent($$result, "CardInfo", $$CardInfo, { "address": displayAddress })} </div> ${image && renderTemplate`<img class="size-64 object-cover"${addAttribute(urlFor(image).url(), "src")}${addAttribute(image.alt ?? title, "alt")}>`} ${sanitizedDescription && renderTemplate`<p class="border-l-4 border-wwRed pl-2">${sanitizedDescription}</p>`} </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Cards/CommunityResourceCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://wittnerwollman.com");
const $$CommunityResourceGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CommunityResourceGallery;
  const { communityResources = [], displayHeader = "no" } = Astro2.props;
  const options = [
    { label: "All", shorthand: "a" },
    { label: "Bars & Breweries", shorthand: "bb" },
    { label: "Coffee", shorthand: "cof" },
    { label: "Dining", shorthand: "din" },
    { label: "Disaster Relief", shorthand: "dr" },
    { label: "Entertainment", shorthand: "ent" },
    { label: "Exercise", shorthand: "ex" },
    { label: "Parks and Rec", shorthand: "pr" },
    { label: "Realtor Resources", shorthand: "rr" },
    { label: "Shopping", shorthand: "sh" },
    { label: "Volunteering", shorthand: "v" }
  ];
  const sortedResources = [...communityResources].sort((a, b) => {
    const titleA = (a.title || "").toLowerCase();
    const titleB = (b.title || "").toLowerCase();
    return titleA.localeCompare(titleB);
  });
  return renderTemplate(_a || (_a = __template(["", '<div class="global-margin-x"> ', " ", ' </div> <script type="module">\n  const mobileSelect = document.querySelector("#resource-tabs");\n  const desktopButtons = Array.from(\n    document.querySelectorAll("button[data-shorthand]")\n  );\n  const cards = Array.from(\n    document.querySelectorAll(".resource-card")\n  );\n\n  function applyFilter(label) {\n    const trimmedLabel = (label || "").trim();\n    cards.forEach((card) => {\n      const category = card.dataset.category || "";\n      const show =\n        !trimmedLabel ||\n        trimmedLabel === "All" ||\n        category.includes(trimmedLabel);\n      card.style.display = show ? "" : "none";\n    });\n  }\n\n  function setActive(shorthand) {\n    desktopButtons.forEach((btn) => {\n      const isSelected = btn.dataset.shorthand === shorthand;\n      btn.classList.toggle("text-wwRed", isSelected);\n      btn.classList.toggle("border-wwRed", isSelected);\n      btn.classList.toggle("text-gray-500", !isSelected);\n      btn.classList.toggle("border-transparent", !isSelected);\n    });\n  }\n\n  // Initial state: "All"\n  const firstButton = desktopButtons[0];\n  const defaultLabel = firstButton?.dataset.label || "All";\n  const defaultShorthand = firstButton?.dataset.shorthand || "a";\n\n  applyFilter(defaultLabel);\n  setActive(defaultShorthand);\n  if (mobileSelect) {\n    mobileSelect.value = defaultShorthand;\n  }\n\n  // Desktop tab click handler\n  desktopButtons.forEach((btn) => {\n    btn.addEventListener("click", () => {\n      const label = btn.dataset.label;\n      const shorthand = btn.dataset.shorthand;\n      applyFilter(label);\n      setActive(shorthand);\n      if (mobileSelect) {\n        mobileSelect.value = shorthand;\n      }\n    });\n  });\n\n  // Mobile select change handler\n  if (mobileSelect) {\n    mobileSelect.addEventListener("change", (event) => {\n      const select = event.target;\n      const selectedShorthand = select.value;\n      const selectedOption = select.selectedOptions[0];\n      const label = selectedOption?.dataset.label;\n      applyFilter(label);\n      setActive(selectedShorthand);\n    });\n  }\n<\/script>'])), maybeRenderHead(), displayHeader === "yes" && renderTemplate`<h2 class="mb-16 lg:hidden block">Community Resources</h2>`, sortedResources.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`  <div> <!-- Mobile select --> <div class="md:hidden"> <label for="resource-tabs" class="sr-only">
Select a category
</label> <select id="resource-tabs" name="resource-tabs" class="text-black block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-wwRed focus:outline-none focus:ring-wwRed sm:text-sm"> ${options.map((o) => renderTemplate`<option${addAttribute(o.shorthand, "value")}${addAttribute(o.label, "data-label")}> ${o.label} </option>`)} </select> </div> <!-- Desktop tabs --> <div class="hidden md:block"> <div class="border-b border-gray-200"> <nav class="-mb-px flex space-x-8 justify-start" aria-label="Tabs"> ${options.map((o, idx) => renderTemplate`<button type="button"${addAttribute(
    idx === 0 ? "text-wwRed whitespace-nowrap border-b-2 border-wwRed px-1 py-4 text-sm font-medium" : "text-gray-500 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700",
    "class"
  )}${addAttribute(o.shorthand, "data-shorthand")}${addAttribute(o.label, "data-label")}> ${o.label} </button>`)} </nav> </div> </div> </div>  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 my-24 lg:place-items-start place-items-center resource-grid"> ${sortedResources.map((r) => {
    let categoryTitle = "";
    const cat = r.categories;
    if (cat && typeof cat === "object" && "title" in cat) {
      categoryTitle = cat.title || "";
    }
    return renderTemplate`<div class="resource-card"${addAttribute(categoryTitle, "data-category")}> ${renderComponent($$result2, "CommunityResourceCard", $$CommunityResourceCard, { "doc": r })} </div>`;
  })} </div> ` })}` : renderTemplate`<p class="text-center font-bold flex items-center justify-center my-24">
There are no community resources available.
</p>`);
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Gallery/CommunityResourceGallery.astro", void 0);

export { $$CommunityResourceGallery as $, ALL_COMMUNITY_RESOURCES_QUERY as A, getCommunityResourcesByTeammateSlug as g };
