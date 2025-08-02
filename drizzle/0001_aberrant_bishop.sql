CREATE TABLE "chat" (
	"id" text PRIMARY KEY NOT NULL,
	"prompt" text NOT NULL,
	"chat" text NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;