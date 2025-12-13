import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, e as renderHead, f as renderSlot, u as unescapeHTML } from '../../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { getPostBySlug } from '../../chunks/posts_BolUBvXf.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_B4EDFosG.mjs';
import { a as $$BaseHead, N as Nav, b as $$Footer } from '../../chunks/index_BG6C6zDl.mjs';
import 'clsx';
/* empty css                                     */
import { p as portableTextToHtml } from '../../chunks/portableText_xC2Jm7AS.mjs';
import { u as urlFor } from '../../chunks/sanityImage_zNuXR53M.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://wittnerwollman.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://wittnerwollman.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, imgSrc } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description ? description : "", "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Nav", Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header", "client:component-export": "default", "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${imgSrc && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": imgSrc, "alt": "", "data-astro-cid-bvzihdzo": true })}`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://wittnerwollman.com");
async function getStaticPaths() {
  const { getAllPosts } = await import('../../chunks/posts_BolUBvXf.mjs');
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: post.slug.current }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const post = await getPostBySlug(slug);
  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  const html = portableTextToHtml(post.body);
  return renderTemplate`${maybeRenderHead()}<article></article> ${renderComponent($$result, "BlogPost", $$BlogPost, { "title": post.title, "pubDate": new Date(post.publishedAt), "description": post.description, "imgSrc": urlFor(post.mainImage).url() }, { "default": async ($$result2) => renderTemplate` <div>${unescapeHTML(html)}</div> ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/news/[...slug].astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/news/[...slug].astro";
const $$url = "/news/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
