export default {
    title: 'Houses',
    name: 'houses',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {
            name: 'location',
            title: 'Location',
            type: 'reference',
            to: {type: 'location'}
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
              {
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
            ],
          },
          {
            name: 'floor',
            title: 'Floor Area',
            type: 'string',
          },
          {
            name: 'lot',
            title: 'Lot Area',
            type: 'string',
          },
          {
            name: 'price',
            title: 'Price',
            type: 'string',
          },
          {
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'string',
          },
          {
            name: 'bathrooms',
            title: 'Bathrooms',
            type: 'string',
          },
          {
            name: 'carparks',
            title: 'Carparks',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          {
            title: 'Home Features',
            name: 'homefeatures',
            type: 'array',
            of: [{type: 'string'}]
          },
          {
            title: 'Neighborhood Features',
            name: 'neighborhoodfeatures',
            type: 'array',
            of: [{type: 'string'}]
          },
          {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
          },
          {
            name: 'thumb',
            title: 'Thumbnail',
            type: 'image',
          }
    ]
}