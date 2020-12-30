import sanityClient from "@sanity/client"

export default sanityClient({
    projectId:"zyhvrtgp",
    dataset: "production",
    useCdn: true
})