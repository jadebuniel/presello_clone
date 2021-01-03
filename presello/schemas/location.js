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
        {
            name: 'thumb',
            title: 'Thumbnail',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: "popular",
            title: "popular",
            type: "boolean"
        }
    ]
}