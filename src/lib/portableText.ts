import { toHTML } from '@portabletext/to-html'
import { urlFor } from './sanityImage'

export function portableTextToHtml(body: any) {
  return toHTML(body, {
    components: {
      types: {
        image: ({ value }) => {
          const alt = value?.alt || ''
          const src = urlFor(value).width(1200).url()

          return `
            <figure>
              <img src="${src}" alt="${alt}" loading="lazy" />
              ${alt ? `<figcaption>${alt}</figcaption>` : ''}
            </figure>
          `
        },
      },
    },
  })
}
