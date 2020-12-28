export default {
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'location',
            type: 'string'
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
    ]
}