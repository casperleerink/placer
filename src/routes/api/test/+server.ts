import { json } from '@sveltejs/kit';
import { db } from '../../../db/config';
import { posts } from '../../../db/schema';
import type { RequestHandler } from './$types';

export const GET = (async () => {
	const allPosts = await db.select().from(posts);

	return json(allPosts);
}) satisfies RequestHandler;
