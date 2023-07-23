import type { InferModel } from 'drizzle-orm';
import {
	integer,
	json,
	pgTable,
	primaryKey,
	serial,
	uniqueIndex,
	varchar
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	fullName: varchar('full_name', { length: 255 }),
	email: varchar('email', { length: 255 }).unique()
});

export const posts = pgTable(
	'posts',
	{
		id: serial('id').primaryKey(),
		title: varchar('title').notNull(),
		content: json('content'),
		authorId: integer('author_id')
			.references(() => users.id)
			.notNull(),
		x: integer('x').notNull(),
		y: integer('y').notNull()
	},
	(table) => {
		return {
			index_xy: uniqueIndex('index_xy').on(table.x, table.y)
		};
	}
);

export const postPivot = pgTable(
	'postpivot',
	{
		fromPostId: integer('from_post_id').notNull(),
		toPostId: integer('to_post_id').notNull()
	},
	(table) => {
		return { pk: primaryKey(table.fromPostId, table.toPostId) };
	}
);

export type User = InferModel<typeof users>;
export type Post = InferModel<typeof posts>;
export type PostPivot = InferModel<typeof postPivot>;
