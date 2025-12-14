import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { getAllPosts } from '../chunks/posts_BolUBvXf.mjs';
import { u as urlFor } from '../chunks/sanityImage_zNuXR53M.mjs';
import { $ as $$Default } from '../chunks/Default_CqVhy9UU.mjs';
import { $ as $$CTA } from '../chunks/CTA_BhA7SPkh.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getAllPosts();
  if (!posts) {
    throw new Error(`No posts found: ${posts}`);
  }
  const mainFeature = posts[0];
  const sideFeatures = posts.slice(1, 3);
  const latest = posts.slice(3);
  const getSlug = (slug) => `/news/${slug}`;
  return renderTemplate`${renderComponent($$result, "Default", $$Default, { "data-astro-cid-xzrtoo6z": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="blog-page" data-astro-cid-xzrtoo6z> <!-- HERO SECTION --> <div class="hero-grid" data-astro-cid-xzrtoo6z> ${mainFeature && renderTemplate`<article class="hero-main" data-astro-cid-xzrtoo6z> <a${addAttribute(getSlug(mainFeature.slug.current), "href")} class="hero-main__link" data-astro-cid-xzrtoo6z> ${mainFeature && mainFeature.mainImage && renderTemplate`<img${addAttribute(urlFor(mainFeature.mainImage).url(), "src")}${addAttribute(mainFeature.title, "alt")} data-astro-cid-xzrtoo6z>`} <div class="hero-main__overlay" data-astro-cid-xzrtoo6z> <h2 class="text-white" data-astro-cid-xzrtoo6z>${mainFeature.title}</h2> </div> <button class="hero-nav hero-nav--left" aria-label="Previous" data-astro-cid-xzrtoo6z> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-astro-cid-xzrtoo6z> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" data-astro-cid-xzrtoo6z></path> </svg> </button> <button class="hero-nav hero-nav--right" aria-label="Next" data-astro-cid-xzrtoo6z> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-astro-cid-xzrtoo6z> <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" data-astro-cid-xzrtoo6z></path> </svg> </button> <div class="hero-dots" aria-hidden="true" data-astro-cid-xzrtoo6z> <span class="dot dot--active" data-astro-cid-xzrtoo6z></span> <span class="dot" data-astro-cid-xzrtoo6z></span> <span class="dot" data-astro-cid-xzrtoo6z></span> </div> </a> </article>`} <div class="hero-side" data-astro-cid-xzrtoo6z> ${sideFeatures.map((post) => renderTemplate`<article class="hero-side__item" data-astro-cid-xzrtoo6z> <a${addAttribute(getSlug(post.slug.current), "href")} class="hero-side__link" data-astro-cid-xzrtoo6z> <img${addAttribute(urlFor(post.mainImage).url(), "src")}${addAttribute(post.title, "alt")} data-astro-cid-xzrtoo6z> <div class="hero-side__overlay" data-astro-cid-xzrtoo6z> <h3 class="text-white" data-astro-cid-xzrtoo6z>${post.title}</h3> </div> </a> </article>`)} </div> </div> <!-- LATEST SECTION --> <section class="latest" data-astro-cid-xzrtoo6z> <header class="latest__header" data-astro-cid-xzrtoo6z> <h2 data-astro-cid-xzrtoo6z>Latest</h2> </header> <div class="latest-grid" data-astro-cid-xzrtoo6z> ${latest && latest.map((post) => renderTemplate`<article class="card" data-astro-cid-xzrtoo6z> <a${addAttribute(getSlug(post.slug.current), "href")} class="card__link" data-astro-cid-xzrtoo6z> <div class="card__image-wrapper" data-astro-cid-xzrtoo6z> <img${addAttribute(urlFor(post.mainImage).url(), "src")}${addAttribute(post.title, "alt")} data-astro-cid-xzrtoo6z> </div> <div class="card__content" data-astro-cid-xzrtoo6z> <h3 data-astro-cid-xzrtoo6z>${post.title}</h3> ${post.excerpt && renderTemplate`<p data-astro-cid-xzrtoo6z>${post.excerpt}</p>`} </div> </a> </article>`)} </div> </section> </section>  ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-xzrtoo6z": true })} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/news/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
