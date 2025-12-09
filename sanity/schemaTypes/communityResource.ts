// /schemas/communityResource.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'communityResource',
  title: 'Community Resource',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      // If you later build a custom input for address search,
      // you can wire it up here via `components: { input: CustomAddressInput }`
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      // Payload had `relationship` to `categories` (singular).
      // If you want a *single* category, keep `type: 'reference'`.
      // If you want multiple, change this to `type: 'array'` with `of: [{ type: 'reference', to: [...] }]`.
      type: 'reference',
      to: [{type: 'category'}], // 👈 adjust `category` to match your actual category schema name
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image', // or reference to a `media` document if you’re modeling media as a collection
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
