import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { A as ALL_COMMUNITY_RESOURCES_QUERY, $ as $$CommunityResourceGallery } from '../chunks/CommunityResourceGallery_k0-BnGc8.mjs';
import { s as sanityClient } from '../chunks/sanityClient_DxVeBFpp.mjs';
import { $ as $$Default } from '../chunks/Default_mBGJLeJK.mjs';
import { $ as $$DefaultHero } from '../chunks/DefaultHero_tOhIkf8A.mjs';
import { H as HeroImg } from '../chunks/Community_Resources_Header_6Ky_mJYx.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const resources = await sanityClient.fetch(ALL_COMMUNITY_RESOURCES_QUERY);
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DefaultHero", $$DefaultHero, { "header": "Community Resources", "body": [], "imageSrc": HeroImg.src })} ${renderComponent($$result2, "CommunityResourceGallery", $$CommunityResourceGallery, { "communityResources": resources })} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/community-resources/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/community-resources/index.astro";
const $$url = "/community-resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
