import SanityClient from './sanity';

const blogPostFields = `
	title,
	subtitle,
	'slug': slug.current,
	date,
	'author': author->{fullname, 'avatar': avatar.asset->url},
	'coverImage': coverImage.asset->url
`;

export const getAllBlogPosts = async () => {
	const res = await SanityClient.fetch(`*[_type == "blog"]{${blogPostFields}}`);
	console.log(res);

	return res;
};
