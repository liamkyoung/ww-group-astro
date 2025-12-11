// /schemas/teammate.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'teammate',
  title: 'Teammate',
  type: 'document',

  fieldsets: [
    {
      name: 'overview',
      title: 'Overview',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'socials',
      title: 'Socials',
      options: {collapsible: true, collapsed: false},
    },
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileIntroduction',
      title: 'Profile Introduction',
      type: 'text',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bioParagraph',
      title: 'Bio Paragraph',
      type: 'blockContent',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'strengths',
      title: 'Specialization',
      type: 'string',
      fieldset: 'overview',
      options: {
        list: ['Commercial', 'Residential', 'Marketing'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      fieldset: 'overview',
      validation: (Rule) =>
        Rule.required()
          .integer()
          .min(0)
          .error('Years of experience must be a non-negative integer'),
    }),
    defineField({
      name: 'rank',
      title: 'Order in List',
      type: 'number',
      fieldset: 'overview',
      validation: (Rule) =>
        Rule.required().integer().min(1).error('Rank must be a non-negative integer'),
    }),
    defineField({
      name: 'favoritePlaces',
      title: 'Favorite Places',
      type: 'array',
      of: [
        {
          type: 'reference',
          // adjust type name to match your Sanity community resources schema
          to: [{type: 'communityResource'}],
        },
      ],
      fieldset: 'overview',
      // Not marked required in Payload, but you can add validation if you want
    }),

    // === Socials ===
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      fieldset: 'socials',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return 'Phone number is required'
          const phoneRegex = /^\d{10}$/
          return phoneRegex.test(value) ? true : 'Phone number must be exactly 10 digits'
        }),
    }),
    defineField({
      name: 'officeNumber',
      title: 'Office Number',
      type: 'string',
      fieldset: 'socials',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true // optional
          const phoneRegex = /^\d{10}$/
          return phoneRegex.test(value) ? true : 'Office number must be exactly 10 digits'
        }),
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      fieldset: 'socials',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Username',
      type: 'string',
      fieldset: 'socials',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          return value.startsWith('@') ? true : 'Instagram handle must start with @'
        }),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Username',
      type: 'string',
      fieldset: 'socials',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Username',
      type: 'string',
      fieldset: 'socials',
    }),

    // === Slug (slugField()) ===
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
