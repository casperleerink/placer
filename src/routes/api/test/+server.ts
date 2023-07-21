import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '../../../db/config';
import { posts } from '../../../db/schema';
import { sql } from 'drizzle-orm';

export const GET = (async () => {
	// const allPosts = await db.select().from(posts);
	const allPosts = [{ id: 1, title: 'test', body: 'test' }];
	return json(allPosts);
}) satisfies RequestHandler;
