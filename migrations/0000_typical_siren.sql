CREATE TABLE IF NOT EXISTS "postpivot" (
	"from_post_id" integer NOT NULL,
	"to_post_id" integer NOT NULL,
	CONSTRAINT postpivot_from_post_id_to_post_id PRIMARY KEY("from_post_id","to_post_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"content" json,
	"author_id" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" varchar(255)
);
