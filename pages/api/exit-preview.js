export default function exitPreview(_, res) {
	res.clearPreviewData();
	res.writeHead(307, { Location: '/blog' });
	res.end();
}
