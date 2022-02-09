import SanityClient from './sanity';

const blogPostFields = `
	title,
	subtitle,
	'slug': slug.current,
	date,
	'author': author->{fullname, 'avatar': avatar.asset->url},
	'coverImage': coverImage.asset->url
`;

const worksFields = `
	title,
	description,
	githubUrl,
	liveUrl,
	'projectImage': projectImage.asset->url
	
`;

export const getAllBlogPosts = async () => {
	const res = await SanityClient.fetch(`*[_type == "blog"]{${blogPostFields}}`);
	return res;
};

export const getAllProjects = async () => {
	const res = await SanityClient.fetch(`*[_type == "works"]{${worksFields}}`);
	return res;
};
