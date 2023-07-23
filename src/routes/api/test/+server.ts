import { json } from '@sveltejs/kit';
import { getPostInBbox } from '../../../db/query';


// export const POST = async (request: RequestHandler) => {
// 	const { postId, radius } = request.params;
// 	const relatedPosts = await query.getRelatedPosts(parseInt(postId), parseInt(radius));
// 	return json(relatedPosts);

// }

export const GET = async () => {
	const bbox = {
		xMin: 1,
		xMax: 2,
		yMin: 1,
		yMax: 2,
	}
	const posts = await getPostInBbox(bbox);
	return json(posts);
}
