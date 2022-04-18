import sanity from '@sanity/client'

export const sanityClient = sanity({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "prduction",
    useCdn: false,
    token: process.env.SANITY_PROJECT_TOKEN,
    apiVersion: "v1"
})