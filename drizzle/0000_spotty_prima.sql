CREATE TABLE IF NOT EXISTS "products" (
	"id" integer PRIMARY KEY NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"category" text,
	"name" varchar(256) NOT NULL,
	"slug" varchar(256) NOT NULL,
	"type" varchar(256) NOT NULL,
	"price" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL
);
