// /schemas/project.ts
import {defineType, defineField} from 'sanity'
import {AddressInput} from '../components/AddressInput'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  groups: [
    {name: 'overview', title: 'Overview', default: true},
    {name: 'features', title: 'Features'},
    {name: 'socials', title: 'Socials'},
    {name: 'content', title: 'Content'},
    {name: 'meta', title: 'Meta'},
  ],

  fields: [
    // -------------------------
    // OVERVIEW
    // -------------------------
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      group: 'overview',
      components: {
        input: AddressInput, // <-- your custom component
      },
      fields: [
        {name: 'address', title: 'Full Address', type: 'string'},
        {name: 'streetAddress', title: 'Street', type: 'string'},
        {name: 'neighborhood', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'county', type: 'string'},
        {name: 'state', type: 'string'},
        {name: 'zipCode', type: 'string'},
        {name: 'latitude', type: 'number'},
        {name: 'longitude', type: 'number'},
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rank',
      title: 'Order in List',
      type: 'number',
      group: 'overview',
      validation: (Rule) =>
        Rule.required().integer().min(1).error('Rank must be a non-negative integer'),
    }),

    // -------------------------
    // FEATURES
    // -------------------------
    defineField({
      name: 'price',
      title: 'Price (in USD)',
      type: 'string', // Payload used text for price
      group: 'features',
    }),

    defineField({
      name: 'agents',
      title: 'Teammates on Project',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'reference',
          to: [{type: 'teammate'}], // 👈 assumes you defined `teammate` schema already
        },
      ],
    }),

    defineField({
      name: 'slider',
      title: 'Image Slider',
      type: 'array',
      group: 'features',
      validation: (Rule) => Rule.min(1).max(10),
      of: [
        defineField({
          name: 'slide',
          type: 'object',
          title: 'Slide',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
            prepare(selection) {
              const {title, media} = selection
              return {
                title: title || 'Slide',
                media,
              }
            },
          },
        }),
      ],
      // Payload used a custom RowLabel. Sanity preview covers that use case.
    }),

    // -------------------------
    // SOCIALS
    // -------------------------
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      group: 'socials',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram Username',
      type: 'string',
      group: 'socials',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          return value.startsWith('@') ? true : 'Instagram handle must start with @'
        }),
    }),

    // -------------------------
    // META / SIDEBAR
    // -------------------------
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      group: 'meta',
      hidden: true, // hide in UI
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'meta',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
