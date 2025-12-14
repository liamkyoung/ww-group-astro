import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$Default } from '../chunks/Default_CqVhy9UU.mjs';
import { g as getAllProjects } from '../chunks/projects_Ty29-49X.mjs';
import { $ as $$ProjectBlock } from '../chunks/ProjectBlock_DbDWaGLt.mjs';
import { u as urlFor } from '../chunks/sanityImage_zNuXR53M.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { C as ContactLink, D as DefaultSocials } from '../chunks/index_CDtGpoOw.mjs';
import { G as GoogleMap } from '../chunks/GoogleMap_DXOcb-Yi.mjs';
import { $ as $$DefaultHero } from '../chunks/DefaultHero_CWR6b45T.mjs';
import { i as instagramHandleToUrl } from '../chunks/instgramHandleToURL_BQVn5MlZ.mjs';
export { renderers } from '../renderers.mjs';

const ProjectHero = ({ pins }) => {
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-16 lg:mt-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "global-margin-x sm:mx-0 my-16 lg:my-auto pl-0 lg:pl-16 sm:pl-10 md:pl-20 xl:pl-36", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-10", children: "Featured Deals" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-8 justify-center md:justify-normal w-5/6 md:mx-0 items-start md:items-center", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: ContactLink.relLink,
            className: "btn-primary whitespace-nowrap block max-w-min",
            children: "SEND US A MESSAGE"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-t-2 md:border-t-0 md:border-l-2 border-wwRed md:pl-8 pt-2 w-48", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "size-6 text-wwRed",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("span", { children: [
            "Or call us at",
            /* @__PURE__ */ jsx("br", {}),
            " ",
            /* @__PURE__ */ jsx("b", { children: DefaultSocials.phoneNumber })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(GoogleMap, { pins, pinType: "project" })
  ] });
};

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getAllProjects();
  const pins = projects?.map((p) => ({
    name: p.title,
    coords: {
      lat: p.location.latitude,
      lng: p.location.longitude
    },
    slug: p.slug.current,
    coverImg: p.slider ? p.slider[0].image : void 0,
    address: p.location.address
  }));
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate`${pins ? renderTemplate`${renderComponent($$result2, "ProjectHero", ProjectHero, { "pins": pins, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Hero/ProjectHero", "client:component-export": "ProjectHero" })}` : renderTemplate`${renderComponent($$result2, "DefaultHero", $$DefaultHero, { "header": "Featured Deals" })}`}${projects && projects.map((p, i) => {
    let links = [];
    if (p.website)
      links.push({
        href: p.website,
        label: "Visit Website",
        appearance: "primary"
      });
    if (p.instagram)
      links.push({
        href: instagramHandleToUrl(p.instagram),
        label: "Instagram",
        appearance: "secondary"
      });
    return renderTemplate`${renderComponent($$result2, "ProjectBlock", $$ProjectBlock, { "title": p.title, "description": p.description, "subheading": p.location && p.location.address, "subheadingType": "location", "imageSrc": p.slider ? urlFor(p.slider[0].image).url() : "", "imagePosition": i % 2 == 0 ? "left" : "right", "colorScheme": i % 2 == 0 ? "red" : "default", "links": links })}`;
  })}` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
