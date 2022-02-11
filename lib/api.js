import sanityClient from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogPostFields = `
	title,
	subtitle,
	'slug': slug.current,
	date,
	'author': author->{fullname, 'avatar': avatar.asset->url},
	coverImage,
`;

const worksFields = `
	title,
	description,
	githubUrl,
	liveUrl,
	'projectImage': projectImage.asset->url
	
`;

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
	return builder.image(source);
};

export const getAllBlogPosts = async () => {
	const res = await sanityClient.fetch(`*[_type == "blog"]{${blogPostFields}}`);
	return res;
};

export const getSinglePostBySlug = async (slug) => {
	const res = await sanityClient
		.fetch(
			`*[_type == "blog" && slug.current == $slug] {
		${blogPostFields}content[]{..., "asset": asset->}
	}`,
			{ slug }
		)
		.then((res) => res?.[0]);

	return res;
};

export const getAllProjects = async () => {
	const res = await sanityClient.fetch(`*[_type == "works"]{${worksFields}}`);
	return res;
};
