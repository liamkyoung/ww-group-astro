// /schemas/involvement.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'involvement',
  title: 'Involvement',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Group Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Group Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image', // Or change to a reference if you use a "media" document type
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'linkToGroupWebsite',
      title: 'Link To Group',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
  ],
})
