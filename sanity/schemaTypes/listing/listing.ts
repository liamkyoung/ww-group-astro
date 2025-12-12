// /schemas/listing.ts
import {defineType, defineField} from 'sanity'
import {
  buildingClass,
  paymentFrequencyOptions,
  propertyTypes,
  tenancyType,
  utilitySelect,
  zoningType,
} from './types'

export default defineType({
  name: 'listing',
  title: 'Listing',
  type: 'document',

  fieldsets: [
    {
      name: 'overview',
      title: 'Overview',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'images',
      title: 'Images',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'features',
      title: 'Features',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'additional',
      title: 'Additional Information',
      options: {collapsible: true, collapsed: false},
    },
  ],

  fields: [
    // If you want a slug, uncomment this:
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

    //
    // === Overview tab ===
    //
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Property Address',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
      // You could later attach a custom input for address search here
    }),
    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      fieldset: 'overview',
      initialValue: 'forSale',
      options: {
        list: [
          {title: 'For Sale', value: 'forSale'},
          {title: 'Lease', value: 'lease'},
          {title: 'For Sale / Lease', value: 'forSaleLease'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'streetAddress',
      title: 'Street',
      type: 'string',
      fieldset: 'overview',
      hidden: true, // populated programmatically / from map
    }),
    defineField({
      name: 'neighborhood',
      title: 'Neighborhood',
      type: 'string',
      fieldset: 'overview',
      hidden: true,
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'county',
      title: 'County',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
      fieldset: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPriceNegotiable',
      title: 'Is Price Negotiable?',
      type: 'boolean',
      fieldset: 'overview',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Listing Price (in USD)',
      type: 'number',
      fieldset: 'overview',
      initialValue: 0,
      hidden: ({parent}) => parent?.isPriceNegotiable === true,
      validation: (Rule) => Rule.min(0).error('Value must be greater than or equal to 0'),
    }),
    defineField({
      name: 'rentalPrice',
      title: 'Rental Price (in USD)',
      type: 'number',
      fieldset: 'overview',
      initialValue: 0,
      hidden: ({parent}) => parent?.isPriceNegotiable === true,
    }),
    defineField({
      name: 'paymentFrequency',
      title: 'Payment Frequency',
      type: 'string',
      fieldset: 'overview',
      initialValue: 'oneTime',
      hidden: ({parent}) => parent?.isPriceNegotiable === true,
      options: {
        list: paymentFrequencyOptions,
      },
    }),
    defineField({
      name: 'agents',
      title: 'Agent(s) on Listing',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teammate'}]}],
      fieldset: 'overview',
    }),
    defineField({
      name: 'listingFlyer',
      title: 'Information Flyer (PDF)',
      type: 'file',
      fieldset: 'overview',
    }),
    defineField({
      name: 'zillowLink',
      title: 'Zillow Link',
      type: 'url',
      fieldset: 'overview',
      validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'virtualTourLink',
      title: 'Virtual Tour Link',
      type: 'url',
      fieldset: 'overview',
      validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['http', 'https']}),
    }),

    //
    // === Images tab ===
    //
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      fieldset: 'images',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageGallery',
      title: 'Additional Images',
      type: 'array',
      fieldset: 'images',
      of: [
        defineField({
          name: 'galleryImage',
          title: 'Image',
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'caption', title: 'Caption', type: 'string'},
          ],
        }),
      ],
    }),

    //
    // === Features tab ===
    //
    defineField({
      name: 'propertyTypes',
      title: 'Property Type',
      type: 'string',
      fieldset: 'features',
      options: {
        list: propertyTypes,
      },
    }),
    defineField({
      name: 'propertySubtype',
      title: 'Subtype',
      type: 'string',
      fieldset: 'features',
    }),
    defineField({
      name: 'sqFt',
      title: 'Square Footage',
      type: 'number',
      fieldset: 'features',
    }),
    defineField({
      name: 'sqFtLand',
      title: 'Land Size (Sq Ft)',
      type: 'number',
      fieldset: 'features',
    }),
    defineField({
      name: 'sqFtLot',
      title: 'Lot Size (Acres)',
      type: 'number',
      fieldset: 'features',
    }),
    defineField({
      name: 'bedCount',
      title: 'Beds',
      type: 'number',
      fieldset: 'features',
    }),
    defineField({
      name: 'bathroomCount',
      title: 'Bathrooms',
      type: 'number',
      fieldset: 'features',
    }),
    defineField({
      name: 'overviewText',
      title: 'Property Overview',
      type: 'text',
      fieldset: 'features',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'areaOverview',
      title: 'Area Overview',
      type: 'text',
      fieldset: 'features',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Property Description',
      type: 'blockContent',
      fieldset: 'features',
    }),
    defineField({
      name: 'zoningType',
      title: 'Zone',
      type: 'string',
      fieldset: 'features',
      options: {
        list: zoningType,
      },
    }),
    defineField({
      name: 'buildingClass',
      title: 'Building Class',
      type: 'string',
      fieldset: 'features',
      options: {
        list: buildingClass,
      },
    }),
    defineField({
      name: 'tenancyType',
      title: 'Tenancy Type',
      type: 'string',
      fieldset: 'features',
      options: {
        list: tenancyType,
      },
    }),
    defineField({
      name: 'yearBuilt',
      title: 'Year Built',
      type: 'number',
      fieldset: 'features',
    }),
    defineField({
      name: 'yearRenovated',
      title: 'Year Renovated',
      type: 'number',
      fieldset: 'features',
    }),
    defineField({
      name: 'occupancy',
      title: '% Occupied',
      type: 'number',
      fieldset: 'features',
      validation: (Rule) => Rule.min(0).max(100).error('Value must be between 0 and 100'),
    }),

    //
    // === Additional Information tab ===
    //
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      fieldset: 'additional',
      of: [
        defineField({
          name: 'highlight',
          title: 'Highlight',
          type: 'object',
          fields: [
            {
              name: 'highlightText',
              title: 'Highlight Text',
              type: 'string',
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).max(10),
    }),
    defineField({
      name: 'heat',
      title: 'Heating',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'cool',
      title: 'Cooling',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'electricity',
      title: 'Electricity',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'water',
      title: 'Water',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'waste',
      title: 'Waste',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'sewer',
      title: 'Sewer',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'internet',
      title: 'Internet',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'lighting',
      title: 'Lighting',
      type: 'string',
      fieldset: 'additional',
      initialValue: 'n/a',
      options: {
        list: utilitySelect,
      },
    }),
    defineField({
      name: 'hasParking',
      title: 'Parking',
      type: 'boolean',
      fieldset: 'additional',
      initialValue: false,
    }),
    defineField({
      name: 'parkingDescription',
      title: 'Parking Spot Description',
      type: 'text',
      fieldset: 'additional',
      hidden: ({parent}) => parent?.hasParking !== true,
    }),
  ],
})
