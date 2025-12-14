import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import { D as DefaultSocials, $ as $$SocialIcon } from './index_CDtGpoOw.mjs';

const $$Astro = createAstro("https://ww-group-astro.vercel.app");
const $$SocialList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialList;
  const {
    email = DefaultSocials.email,
    phoneNumber = DefaultSocials.phoneNumber,
    officeNumber = DefaultSocials.phoneNumber,
    instagram = DefaultSocials.instagram,
    facebook = DefaultSocials.facebook,
    linkedin = DefaultSocials.linkedin,
    colorScheme = "default"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-start gap-8 mx-auto"> ${email && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "email", "href": `mailto:${email}`, "label": email, "showLabel": true, "colorScheme": colorScheme })}`} ${phoneNumber && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "phone", "href": `tel:${phoneNumber}`, "label": phoneNumber, "showLabel": true, "colorScheme": colorScheme })}`} ${officeNumber && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "phone", "href": `tel:${officeNumber}`, "label": officeNumber, "showLabel": true, "colorScheme": colorScheme })}`} ${instagram && instagram.profileLink && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "instagram", "href": instagram.profileLink, "label": instagram.username, "showLabel": !!instagram.username, "colorScheme": colorScheme })}`} ${facebook && facebook.profileLink && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "facebook", "href": facebook.profileLink, "label": facebook.username, "showLabel": !!facebook.username, "colorScheme": colorScheme })}`} ${linkedin && linkedin.profileLink && renderTemplate`${renderComponent($$result, "SocialIcon", $$SocialIcon, { "type": "linkedin", "href": linkedin.profileLink, "label": linkedin.username, "showLabel": !!linkedin.username, "colorScheme": colorScheme })}`} </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/SocialList.astro", void 0);

export { $$SocialList as $ };
