import {at, defineMigration, set} from 'sanity/migrate'

type LegacyGalleryItem = {
  _key: string
  _type: 'galleryImage'
  image?: Record<string, unknown>
  caption?: string
}

// imageGallery items used to be `galleryImage` objects wrapping an image.
// They're now plain images with a caption field, which lets the studio
// accept multi-file drag and drop. Unwrap each legacy item.
export default defineMigration({
  title: 'Unwrap listing gallery images',
  documentTypes: ['listing'],
  migrate: {
    document(doc) {
      const gallery = doc.imageGallery as Array<{_type: string}> | undefined
      if (!Array.isArray(gallery) || !gallery.some((item) => item._type === 'galleryImage')) return

      const next = gallery.map((item) => {
        if (item._type !== 'galleryImage') return item
        const {_key, image, caption} = item as LegacyGalleryItem
        return {
          ...(image ?? {}),
          _key,
          _type: 'image',
          ...(caption ? {caption} : {}),
        }
      })

      return at('imageGallery', set(next))
    },
  },
})
