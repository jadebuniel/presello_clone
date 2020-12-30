export default {
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'location',
                maxLength: 96,
            },
        },
    ]
}