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

export function urlFor(source) {
	return builder.image(source);
}

export async function getAllBlogPosts({ offset } = { offset: 0 }) {
	const res = await sanityClient.fetch(
		`*[_type == "blog"] | order(date desc){${blogPostFields}}[${offset}...${
			offset + 3
		}]`
	);
	return res;
}

export async function getSinglePostBySlug(slug) {
	const res = await sanityClient
		.fetch(
			`*[_type == "blog" && slug.current == $slug] {
		${blogPostFields}content[]{..., "asset": asset->}
	}`,
			{ slug }
		)
		.then((res) => res?.[0]);

	return res;
}

export async function getAllProjects() {
	const res = await sanityClient.fetch(`*[_type == "works"]{${worksFields}}`);
	return res;
}
