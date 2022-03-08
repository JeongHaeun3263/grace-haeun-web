import sanityClient, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogPostFields = `
	title,
	subtitle,
	'slug': slug.current,
	date,
	'author': author->{fullname, 'avatar': avatar.asset->url},
	coverImage,
`;

const builder = imageUrlBuilder(sanityClient);
const getClient = (preview) => (preview ? previewClient : sanityClient);

export function urlFor(source) {
	return builder.image(source);
}

export async function getAllBlogPosts() {
	const res = await sanityClient.fetch(
		`*[_type == "blog"] | order(date desc){${blogPostFields}}`
	);
	return res;
}

export async function getSinglePostBySlug(slug, preview) {
	const currentClient = getClient(preview);
	const res = await currentClient
		.fetch(
			`*[_type == "blog" && slug.current == $slug] {
		${blogPostFields}content[]{..., "asset": asset->}
	}`,
			{ slug }
		)

		.then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));

	return res;
}
