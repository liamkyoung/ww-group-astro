import rss from '@astrojs/rss';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_BUCA18RE.mjs';
import { getAllPosts } from '../chunks/posts_BolUBvXf.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getAllPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      link: `/blog/${post._id}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
