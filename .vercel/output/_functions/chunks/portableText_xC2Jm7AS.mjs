import { toHTML } from '@portabletext/to-html';
import { u as urlFor } from './sanityImage_zNuXR53M.mjs';

function portableTextToHtml(body) {
  return toHTML(body, {
    components: {
      types: {
        image: ({ value }) => {
          const alt = value?.alt || "";
          const src = urlFor(value).width(1200).url();
          return `
            <figure>
              <img src="${src}" alt="${alt}" loading="lazy" />
              ${alt ? `<figcaption>${alt}</figcaption>` : ""}
            </figure>
          `;
        }
      }
    }
  });
}

export { portableTextToHtml as p };
