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
    ]
}