import sanityClient from '@sanity/client';

const options = {
	dataset: process.env.SANITY_DATASET_NAME,
	projectId: process.env.SANITY_PROJECT_ID,
	apiVersion: '2022-02-11',
	useCdn: process.env.NODE_ENV === 'production',
	// useCdn === true, gives you fast reponse
	// it will get you cached data
	// useCend === false, gives you a bit slower response,
	// but latest data
};

export const previewClient = sanityClient({
	...options,
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
});

export default sanityClient(options);
