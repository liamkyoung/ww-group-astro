import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, d as createAstro, b as addAttribute, m as maybeRenderHead, r as renderComponent } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import { clsx } from 'clsx';
/* empty css                          */
import { a as SITE_TITLE } from './consts_BUCA18RE.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'react';
import './_astro_assets_CFp-S9Ud.mjs';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

const ContactLink = {
  relLink: "/contact"
};

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Logo$1 = createSvgComponent({"meta":{"src":"/_astro/logo.BQBFPgtX.svg","width":74,"height":58,"format":"svg"},"attributes":{"viewBox":"0 0 74 58","fill":"none"},"children":"\r\n<path d=\"M9.17069 2.25L0.435547 17.5457L22.513 56.0246L31.4877 40.6736L9.17069 2.25Z\" fill=\"#722320\" />\r\n<path d=\"M35.4508 1.73438L26.4023 17.2512L48.4613 56.4672L57.8415 41.2821L35.4508 1.73438Z\" fill=\"#B63D37\" stroke=\"#B63D37\" strokeWidth=\"1.3\" stroke-miterlimit=\"10\" />\r\n<path d=\"M62.7796 2.78516L53.9707 18.4679L63.5167 35.1273L72.5651 18.947L62.7796 2.78516Z\" fill=\"#C67573\" stroke=\"#C67573\" strokeWidth=\"1.3\" stroke-miterlimit=\"10\" />\r\n"});

const $$Astro$1 = createAstro("https://ww-group-astro.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = Logo$1 } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/BaseHead.astro", void 0);

const DefaultSocials = {
  phoneNumber: "(727) 777-4808",
  email: "contact@wwgre.com",
  address: "360 Central Ave, St. Petersburg, FL 33701",
  instagram: {
    platformName: "instagram",
    username: "wittnerwollmangroup",
    profileLink: "https://www.instagram.com/wittnerwollmangroup"
  },
  facebook: {
    platformName: "facebook",
    username: "Wittner Wollman Group",
    profileLink: "https://www.facebook.com/profile.php?id=61564518925276"
  }
};
const GoogleMapsDefaults = {
  mapCenter: { lat: 27.77, lng: -82.64 }
};
const GoogleMapOfficeURL = "https://maps.app.goo.gl/sb8n7CoCXDeCm6Ss7";

const ProjectLinks = {
  title: "Featured Deals",
  relLink: "/projects"
};

const TeamLinks = {
  title: "Our Team",
  relLink: "/team"
};
const InvolvementLinks = {
  title: "Community Involvement",
  relLink: "/involvement"
};
const AboutLinks = {
  title: "About Us",
  relLink: "/team",
  subNavigation: [TeamLinks, ProjectLinks, InvolvementLinks]
};

const NewsLink = {
  title: "News",
  relLink: "/news"
};
const CommunityResourcesLink = {
  title: "Community Resources",
  relLink: "/community-resources"
};
const CommunityLinks = {
  title: "Community",
  relLink: "/news",
  subNavigation: [NewsLink, CommunityResourcesLink]
};

const ListingLinks = {
  title: "Listings",
  relLink: "/listings"
  // subNavigation: [{ title: "Our Listings", relLink: "/listings" }],
};

const LeasingService = {
  title: "Leasing",
  relLink: "/services/leasing"
};
const SalesService = {
  title: "Sales",
  relLink: "/services/sales"
};
const AcquisitionService = {
  title: "Acquisition",
  relLink: "/services/acquisition"
};
const ConsultingService = {
  title: "Consulting",
  relLink: "/services/consulting"
};
const ServiceLinks = {
  title: "Services",
  relLink: "",
  subNavigation: [
    LeasingService,
    SalesService,
    AcquisitionService,
    ConsultingService
  ]
};

const InternalLinks = [
  ServiceLinks,
  ListingLinks,
  AboutLinks,
  CommunityLinks
];

const Logo = new Proxy({"src":"/_astro/wwg_fullmark.B-S7JfvI.png","width":602,"height":379,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/branding/wwg_fullmark.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://ww-group-astro.vercel.app");
const $$SocialIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  const {
    type,
    href,
    label,
    showLabel = true,
    colorScheme = "default"
  } = Astro2.props;
  let colorStyle = "default-social-icons";
  let textColor = "text-white";
  if (colorScheme === "red") {
    colorStyle = "contact-social-icons";
    textColor = "text-wwBlack";
  } else if (colorScheme === "yellow") {
    colorStyle = "profile-social-icons";
    textColor = "text-white";
  }
  const showText = showLabel && label;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}> <span${addAttribute(`inline-flex gap-4 ${textColor}`, "class")}> ${type === "email" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(colorStyle, "class")}> <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path> <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path> </svg>`} ${type === "facebook" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"${addAttribute(colorStyle, "class")}> <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path> </svg>`} ${type === "instagram" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"${addAttribute(colorStyle, "class")}> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path> </svg>`} ${type === "linkedin" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"${addAttribute(colorStyle, "class")}> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path> </svg>`} ${type === "phone" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(colorStyle, "class")}> <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"></path> </svg>`} ${showText && renderTemplate`<span>${label}</span>`} </span> </a>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/SocialIcon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-wwBlack text-white py-16"> <div class="global-margin-x flex flex-col xl:flex-row justify-between gap-8"> <div class="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-8 xl:gap-16 xl:mb-16"> <a href="/" class="block"> <img${addAttribute(Logo.src, "src")} alt="WW-Logo" class="w-36 md:w-30 xl:w-36"> </a> <!-- TODO: <NewsletterInputFooter /> --> </div> <div class="flex flex-col text-center xl:text-left items-center md:items-start md:grid grid-cols-1 md:grid-cols-4 xl:justify-items-center gap-8"> ${InternalLinks.map((group, i) => renderTemplate`<div> ${group.relLink ? renderTemplate`<a${addAttribute(group.relLink, "href")}> <h6 class="text-white">${group.title}</h6> </a>` : renderTemplate`<h6 class="text-white">${group.title}</h6>`} <div class="space-y-2 mt-4"> ${group.subNavigation && group.subNavigation.map((n) => renderTemplate`<p class="text-sm text-white"> <a${addAttribute(n.relLink, "href")}>${n.title}</a> </p>`)} </div> </div>`)} </div> </div> <div class="global-margin-x flex justify-center md:justify-between mt-24"> <div class="hidden md:flex flex-col gap-4"> <span class="text-white inline-flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-wwRed"> <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path> <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path> </svg> <a${addAttribute(`mailto:${DefaultSocials.email}`, "href")}> ${DefaultSocials.email} </a> </span> <span class="text-white inline-flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-wwRed"> <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"></path> </svg> <a${addAttribute(`tel:${DefaultSocials.phoneNumber}`, "href")}> ${DefaultSocials.phoneNumber} </a> </span> <span class="text-white inline-flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-wwRed"> <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"></path> </svg>
Keller Williams St. Pete
<br> ${DefaultSocials.address} </span> </div> <div class="flex gap-4 items-center justify-center md:justify-start"> ${DefaultSocials.instagram && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "instagram", "href": DefaultSocials.instagram.profileLink, "colorScheme": "red" })}`} ${DefaultSocials.facebook && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "facebook", "href": DefaultSocials.facebook.profileLink, "colorScheme": "red" })}`} ${DefaultSocials.linkedin && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "linkedin", "href": DefaultSocials.linkedin.profileLink, "colorScheme": "red" })}`} <div class="flex items-center gap-4 md:hidden"> ${renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "email", "href": `mailto:${DefaultSocials.email}`, "label": DefaultSocials.email, "colorScheme": "red" })}`} ${renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "phone", "href": `tel:${DefaultSocials.phoneNumber}`, "label": DefaultSocials.phoneNumber, "colorScheme": "red" })}`} <a${addAttribute(GoogleMapOfficeURL, "href")}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-wwRed"> <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Footer.astro", void 0);

const KWLogo = new Proxy({"src":"/_astro/kw_logo.ZoP_wvJB.png","width":1876,"height":596,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/branding/kw_logo.png";
							}
							
							return target[name];
						}
					});

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

function DesktopHeader({}) {
  return /* @__PURE__ */ jsxs("nav", { className: "font-semibold items-center justify-between my-5 hidden lg:flex global-margin-x", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx("img", { src: Logo$1.src, alt: "WW-Logo", className: "h-14 w-auto" }),
      /* @__PURE__ */ jsx("img", { src: KWLogo.src, alt: "KW-Logo", className: "h-9 w-auto" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-8", children: InternalLinks.map((navGroup) => {
      if (navGroup.subNavigation) {
        return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx("p", { className: "hover:text-gray-500 cursor-pointer bg-white", children: navGroup.title }) }),
          /* @__PURE__ */ jsx(DropdownMenuContent, { className: "w-56 bg-white ", children: /* @__PURE__ */ jsx(DropdownMenuGroup, { children: navGroup.subNavigation.map((subNav) => /* @__PURE__ */ jsx("a", { href: subNav.relLink, children: /* @__PURE__ */ jsx(DropdownMenuItem, { className: "hover:cursor-pointer hover:bg-wwRed hover:text-white", children: subNav.title }) }, subNav.title)) }) })
        ] }, navGroup.title);
      } else {
        return /* @__PURE__ */ jsx("a", { href: navGroup.relLink, children: /* @__PURE__ */ jsx("p", { className: "hover:text-gray-500", children: navGroup.title }) }, navGroup.title);
      }
    }) }),
    /* @__PURE__ */ jsx("a", { className: "btn-primary", href: ContactLink.relLink, children: "CONTACT" })
  ] });
}

function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

function MobileHeader({}) {
  return /* @__PURE__ */ jsxs("nav", { className: "flex justify-between lg:hidden global-margin-x my-5", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx("img", { src: Logo$1.src, alt: "WW-Logo", className: "h-12 w-auto" }),
      /* @__PURE__ */ jsx("img", { src: KWLogo.src, alt: "KW-Logo", className: "h-7 w-auto" })
    ] }),
    /* @__PURE__ */ jsxs(Sheet, { children: [
      /* @__PURE__ */ jsx(SheetTrigger, { children: /* @__PURE__ */ jsx("div", { className: "p-2 ring-1 ring-wwRed rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "size-8 text-wwRed",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
              clipRule: "evenodd"
            }
          )
        }
      ) }) }),
      /* @__PURE__ */ jsx(SheetContent, { side: "left", className: "bg-white", children: /* @__PURE__ */ jsxs(SheetHeader, { children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsx("img", { src: Logo$1.src, alt: "WW-Logo", className: "h-12 w-auto" }),
          /* @__PURE__ */ jsx("img", { src: KWLogo.src, alt: "KW-Logo", className: "h-7 w-auto" })
        ] }) }),
        /* @__PURE__ */ jsxs(SheetDescription, { children: [
          InternalLinks.map((navGroup) => /* @__PURE__ */ jsxs("div", { className: "my-4 text-left", children: [
            /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: navGroup.relLink, children: /* @__PURE__ */ jsx("p", { className: "text-xl hover:text-gray-500 cursor-pointer", children: navGroup.title }) }) }),
            navGroup.subNavigation?.map((subNav) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: subNav.relLink, children: /* @__PURE__ */ jsx("p", { className: "mx-4 hover:text-gray-500 cursor-pointer text-left", children: subNav.title }) }) }, navGroup.title))
          ] }, navGroup.title)),
          /* @__PURE__ */ jsx("div", { className: "pt-12 justify-self-start", children: /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx("a", { className: "btn-primary", href: ContactLink.relLink, children: "CONTACT" }) }) })
        ] })
      ] }) })
    ] })
  ] });
}

function Nav() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(DesktopHeader, {}),
    /* @__PURE__ */ jsx(MobileHeader, {})
  ] });
}

export { $$SocialIcon as $, ContactLink as C, DefaultSocials as D, GoogleMapsDefaults as G, ListingLinks as L, Nav as N, ProjectLinks as P, ServiceLinks as S, $$BaseHead as a, $$Footer as b, cn as c, createSvgComponent as d };
