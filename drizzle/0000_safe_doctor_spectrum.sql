CREATE TABLE IF NOT EXISTS "productImages" (
	"id" serial PRIMARY KEY NOT NULL,
	"productId" varchar(256) NOT NULL,
	"imageUrl" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" integer PRIMARY KEY NOT NULL,
	"userId" varchar(256) NOT NULL,
	"category" text,
	"name" varchar(256) NOT NULL,
	"slug" varchar(256) NOT NULL,
	"type" varchar(256) NOT NULL,
	"price" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL
);
