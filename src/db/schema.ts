import { integer, json, pgTable, primaryKey, serial, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: varchar('full_name', {length: 255}),
  email: varchar('email', {length: 255}).unique(),
});

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    content: json('content'),
    authorId: integer('author_id').references(() => users.id).notNull(),
    x: integer('x',).notNull(),
    y: integer('y').notNull(),
}, (table) => {
    return {
        index_x: uniqueIndex("index_x").on(table.x),
        index_y: uniqueIndex("index_y").on(table.y),
    };
});

export const postPivot = pgTable('postpivot', {
    fromPostId: integer('from_post_id').notNull(),
    toPostId: integer('to_post_id').notNull(),
}, (table) => {
    return {pk: primaryKey(table.fromPostId, table.toPostId)};
});
