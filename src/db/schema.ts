import { integer, json, pgTable, primaryKey, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: varchar('email', {length: 255}),
});

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('title'),
    content: json('content'),
    authorId: varchar('author_id', {length: 255}),
    });

export const postPivot = pgTable('postpivot', {
    fromPostId: integer('from_post_id').notNull(),
    toPostId: integer('to_post_id').notNull(),
}, (table) => {
    return {pk: primaryKey(table.fromPostId, table.toPostId)};
});
