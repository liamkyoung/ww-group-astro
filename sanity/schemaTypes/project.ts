// /schemas/project.ts
import {defineType, defineField} from 'sanity'

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
      name: 'address',
      title: 'Property Address',
      type: 'string',
      group: 'overview',
      validation: (Rule) => Rule.required(),
      // In Payload you used a custom address search component.
      // In Sanity, you could add a custom input component here later.
      // components: { input: CustomAddressInput },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'overview',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'neighborhood',
      title: 'Neighborhood',
      type: 'string',
      group: 'overview',
    }),

    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
      group: 'overview',
      hidden: true, // matches admin.hidden: true
    }),

    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
      group: 'overview',
      hidden: true,
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
      validation: (Rule) => Rule.min(2).max(10),
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
