import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { u as urlFor } from '../chunks/sanityImage_zNuXR53M.mjs';
import { $ as $$SocialIcon } from '../chunks/index_BG6C6zDl.mjs';
import { i as instagramHandleToUrl } from '../chunks/instgramHandleToURL_BQVn5MlZ.mjs';
import { $ as $$FullscreenHero } from '../chunks/FullscreenHero_D3Oz-L_H.mjs';
import { $ as $$Default } from '../chunks/Default_mBGJLeJK.mjs';
import { g as getAllTeammates } from '../chunks/teammate_BrnK_ssu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://wittnerwollman.com");
const $$TeammateCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeammateCard;
  const { doc: teammate, title: titleFromProps } = Astro2.props;
  const {
    slug,
    title,
    strengths,
    email,
    phoneNumber,
    instagram,
    facebook,
    linkedin,
    profilePic,
    jobTitle
  } = teammate;
  const titleToUse = titleFromProps ?? title;
  const linkedinUrl = linkedin && linkedin.startsWith("http") ? linkedin : linkedin ? `https://www.linkedin.com/in/${linkedin.replace(/^@/, "")}` : void 0;
  return renderTemplate`${maybeRenderHead()}<div class="teammate-card"> <a${addAttribute(`/team/${slug}`, "href")} class="group inline-block"> <div class="bg-gradient-to-b from-gray-50 to-[#949495] w-64 sm:w-72mb-2 shadow-md overflow-hidden"> ${profilePic && renderTemplate`<img${addAttribute(urlFor(profilePic).url(), "src")}${addAttribute(titleToUse ? `${titleToUse} headshot` : "Team member headshot", "alt")} class="size-64 object-contain mx-auto" loading="lazy">`} ${strengths && renderTemplate`<p class="bg-wwYellow px-3 py-4 font-bold text-wwBlack flex items-center justify-center gap-2"> <span class="inline-flex items-center gap-2"> ${strengths === "Residential" || strengths === "Condominium Sales" ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"> <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z"></path> <path fill-rule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clip-rule="evenodd"></path> </svg>` : strengths === "Commercial" ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"> <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path> </svg>` : strengths === "Marketing" ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"> <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z"></path> </svg>` : null} ${strengths} </span> </p>`} </div> <div class="inline-flex gap-2 items-center max-w-64 sm:max-w-72 mt-1"> <h4 class="text-white whitespace-nowrap font-semibold">${titleToUse}</h4> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="hidden sm:block size-6 text-wwYellow"> <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"></path> </svg> </div> ${jobTitle && renderTemplate`<p class="text-white w-64 sm:w-72">${jobTitle}</p>`} </a> <div class="mt-4 flex gap-4"> ${email && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "email", "href": `mailto:${email}`, "label": email, "showLabel": false, "colorScheme": "default" })}`} ${phoneNumber && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "phone", "href": `tel:${phoneNumber}`, "label": phoneNumber, "showLabel": false, "colorScheme": "default" })}`} ${linkedinUrl && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "linkedin", "href": linkedinUrl, "label": "LinkedIn", "showLabel": false, "colorScheme": "default" })}`} ${instagram && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "instagram", "href": instagramHandleToUrl(instagram), "label": instagram, "showLabel": false, "colorScheme": "default" })}`} ${facebook && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "facebook", "href": facebook.startsWith("http") ? facebook : `https://facebook.com/${facebook.replace(/^@/, "")}`, "label": "Facebook", "showLabel": false, "colorScheme": "default" })}`} </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Cards/TeammateCard.astro", void 0);

const $$Astro = createAstro("https://wittnerwollman.com");
const $$TeammateGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeammateGallery;
  const { teammates = [], displayHeader = "no" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-wwRed pb-36"> <div class="global-margin-x"> ${displayHeader === "yes" && renderTemplate`<div class="bg-wwRed pt-24"> <h2 class="text-white text-center sm:text-left">
The Wittner Wollman Group
</h2> </div>`} <div class="bg-wwRed place-items-center lg:place-items-start grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24 py-24"> ${teammates.map((t) => renderTemplate`${renderComponent($$result, "TeammateCard", $$TeammateCard, { "doc": t })}`)} </div> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Gallery/TeammateGallery.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const teammates = await getAllTeammates();
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "FullscreenHero", $$FullscreenHero, { "headerText": "MEET THE WITTNER WOLLMAN GROUP", "bodyText": [
    "The Wittner Wollman Group was founded on a commitment to growth, collaboration, and community. Co-founded by Jon Wittner - a real estate veteran with 35+ years of experience in the Tampa Bay area - and Jake Wollman - a commercial powerhouse with over a decade of success - our group offers unparalleled industry insight. Our goal is to foster a culture of growth and excellence that extends to the clients we serve. We understand that every client has unique goals, whether they are buying their first home, investing in commercial properties, enhancing their development portfolio, or leasing a prime retail space. Our team goes above and beyond to provide personalized service, leveraging deep market knowledge and innovative strategies to deliver exceptional results. From guiding clients through complex transactions to identifying opportunities for growth, we prioritize building lasting relationships and creating value every step of the way.",
    "Our mission for our agents is to build a thriving environment where team members are empowered to excel both personally and professionally. We are passionate about turning talented professionals into industry leaders, and we know that success knows no limits. Through intentional mentorship, meaningful support, and a team-first culture, we inspire every agent to achieve their fullest potential. Our goal is for all our agents to become secure with an active pipeline by their second year, and we invest the time, guidance, and resources needed to make that goal a reality. We are selective in recruiting individuals who not only understand our market and the opportunities within it but are also committed to embracing and contributing to the vibrant culture of St. Pete and Tampa Bay.",
    "Success for us is not just about closing deals\u2014it's about making a meaningful impact. Our agents are deeply connected to the communities we serve, with leadership roles in nonprofits like Take Mar, contributions to local culture through the St. Pete Arts Alliance board, and support for the community\u2019s real estate future as CCIM scholars. By strengthening the neighborhoods we call home throughout St. Pete and the greater Tampa Bay region, we\u2019re committed to shaping a brighter future for both our clients and our community."
  ], "backupImageUrl": "/src/assets/images/team-portrait-img.webp" })} ${renderComponent($$result2, "TeammateGallery", $$TeammateGallery, { "teammates": teammates })} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/team/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/team/index.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
