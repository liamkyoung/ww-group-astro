import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, u as unescapeHTML, r as renderComponent } from '../../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$Default } from '../../chunks/Default_CqVhy9UU.mjs';
import { a as getTeammateBySlug, b as getAllTeammateSlugs } from '../../chunks/teammate_BrnK_ssu.mjs';
import { p as portableTextToHtml } from '../../chunks/portableText_xC2Jm7AS.mjs';
import 'clsx';
import { u as urlFor } from '../../chunks/sanityImage_zNuXR53M.mjs';
import { $ as $$SocialIcon } from '../../chunks/index_CDtGpoOw.mjs';
import { i as instagramHandleToUrl } from '../../chunks/instgramHandleToURL_BQVn5MlZ.mjs';
import { a as getProjectsByTeammateSlug } from '../../chunks/projects_Ty29-49X.mjs';
import { $ as $$ProjectGallery } from '../../chunks/ProjectGallery_D-yIoVWw.mjs';
import { g as getCommunityResourcesByTeammateSlug, $ as $$CommunityResourceGallery } from '../../chunks/CommunityResourceGallery_CG8u0KCf.mjs';
import { h as getListingPreviewsByAgentSlug } from '../../chunks/propertyTypeFormatter_BQ5xwLpq.mjs';
import { L as ListingGallery } from '../../chunks/ListingGallery_BYxDC34f.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://ww-group-astro.vercel.app");
const $$TeammateHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TeammateHero;
  const {
    name,
    jobTitle,
    shortDescription,
    yearsOfExperience,
    strength,
    fullBodyImage
  } = Astro2.props;
  const imageUrl = fullBodyImage ? urlFor(fullBodyImage).width(600).height(900).url() : void 0;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center xl:flex-row xl:justify-between"> <div class="block xl:flex items-center gap-8"> <!-- Back link (shown on desktop only, like original) --> <a href="/team" class="xl:hidden block"> <h6 class="text-gray-800">Team /</h6> </a> <!-- Mobile image --> <div class="xl:hidden block"> ${imageUrl && renderTemplate`<img${addAttribute(imageUrl, "src")}${addAttribute(name, "alt")} class="w-full max-w-96 object-contain mx-auto shadow-md" loading="lazy">`} </div> <div> <!-- Back link above name for desktop --> <a href="/team" class="hidden xl:block"> <h6 class="text-gray-800">Team /</h6> </a> <h1 class="mb-2 mt-6 text-center xl:text-left">${name}</h1> <h6 class="mb-2 text-center xl:text-left">${jobTitle}</h6> <p class="text-center xl:text-left xl:w-3/4 w-full leading-8"> ${shortDescription} </p> ${(yearsOfExperience || strength) && renderTemplate`<p class="mt-4 text-sm text-gray-600 text-center xl:text-left"> ${yearsOfExperience && `${yearsOfExperience} years of experience`} ${yearsOfExperience && strength && " \xB7 "} ${strength && strength} </p>`} </div> </div> <!-- Desktop image --> <div class="hidden xl:block"> ${imageUrl && renderTemplate`<img${addAttribute(imageUrl, "src")}${addAttribute(name, "alt")} class="xl:min-w-96 max-w-[20rem] shadow-md object-contain" loading="lazy">`} </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Hero/TeammateHero.astro", void 0);

const $$Astro$1 = createAstro("https://ww-group-astro.vercel.app");
const $$ContactAndBio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactAndBio;
  const {
    email,
    phoneNumber,
    officeNumber,
    linkedin,
    facebook,
    instagram,
    bioHtml
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-wwRed p-4 sm:p-8 lg:p-16 my-24"> <div class="flex flex-col-reverse lg:flex-row gap-8"> <!-- Left Column: Contact --> <div class="space-y-8 border-t-2 border-white lg:border-none pt-10 lg:pt-0"> <h2 class="text-white text-center lg:text-left">Contact</h2> <div class="flex flex-col gap-4"> ${email && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "email", "href": `mailto:${email}`, "label": email, "colorScheme": "yellow", "showLabel": true })}`} ${phoneNumber && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "phone", "href": `tel:${phoneNumber}`, "label": phoneNumber, "colorScheme": "yellow", "showLabel": true })}`} ${officeNumber && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "phone", "href": `tel:${officeNumber}`, "label": `Office: ${officeNumber}`, "colorScheme": "yellow", "showLabel": true })}`} ${linkedin && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "linkedin", "href": linkedin, "label": "LinkedIn", "colorScheme": "yellow", "showLabel": true })}`} ${instagram && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "instagram", "href": instagramHandleToUrl(instagram), "label": instagram, "colorScheme": "yellow", "showLabel": true })}`} ${facebook && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "facebook", "href": facebook, "label": "Facebook", "colorScheme": "yellow", "showLabel": true })}`} </div> </div> <!-- Right Column: Biography --> <div class="space-y-8"> <h2 class="text-white text-center lg:text-left pl-0 sm:pl-10">
Biography
</h2> <div class="**:text-white lg:border-l-2 lg:border-white pl-0 sm:pl-10 text-center lg:text-left leading-loose text-white space-y-4">${unescapeHTML(bioHtml)}</div> </div> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/ContactAndBio.astro", void 0);

const $$Astro = createAstro("https://ww-group-astro.vercel.app");
const prerender = false;
async function getStaticPaths() {
  const slugs = await getAllTeammateSlugs();
  return slugs.map((slug) => ({
    params: { slug },
    props: { slug }
    // optional but handy
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const teammate = await getTeammateBySlug(slug);
  if (!teammate) {
    throw new Error(`Teammate not found for slug: ${slug}`);
  }
  const {
    title,
    jobTitle,
    profilePic,
    profileIntroduction,
    bioParagraph,
    strengths,
    yearsOfExperience,
    phoneNumber,
    officeNumber,
    email,
    instagram,
    facebook,
    linkedin
  } = teammate;
  const bioHtml = portableTextToHtml(bioParagraph);
  const projects = await getProjectsByTeammateSlug(slug);
  const commResources = await getCommunityResourcesByTeammateSlug(slug);
  const listings = await getListingPreviewsByAgentSlug(slug);
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="global-margin-x my-24 space-y-12"> ${renderComponent($$result2, "TeammateHero", $$TeammateHero, { "name": title, "jobTitle": jobTitle, "shortDescription": profileIntroduction, "yearsOfExperience": yearsOfExperience, "strength": strengths, "fullBodyImage": profilePic })} ${renderComponent($$result2, "ContactAndBio", $$ContactAndBio, { "email": email, "phoneNumber": phoneNumber, "officeNumber": officeNumber, "linkedin": linkedin, "instagram": instagram, "facebook": facebook, "bioHtml": bioHtml })} </section> ${renderComponent($$result2, "ListingGallery", ListingGallery, { "listings": listings })} ${projects && renderTemplate`${renderComponent($$result2, "ProjectGallery", $$ProjectGallery, { "projects": projects })}`}<section> <div class="global-margin-x mb-10"> <h2>My Favorite Places in Tampa Bay</h2> </div> ${renderComponent($$result2, "CommunityResourceGallery", $$CommunityResourceGallery, { "displayHeader": "yes", "communityResources": commResources })} </section> ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/team/[...slug].astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/team/[...slug].astro";
const $$url = "/team/[...slug]";

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
