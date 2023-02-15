import  sanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

// To see the below details, go to the terminal and type sanity manage

export const client = sanityClient({
    projectId: 'bfu5796i', //Id with which sanity will connect the project
    dataset: 'production', //So that we know that are we in development or production
    apiVersion: '2023-02-15',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);