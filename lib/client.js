import sanityClient from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";


export const client = sanityClient({
    projectId: '4e9fw051', //to know which project we're working in
    dataset: 'production',    // to know if you're in development or production
    apiVersion:'2022-06-05',// current date
    useCdn: true, // boolean
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN // environment variations for security reasons


});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);