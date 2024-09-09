CREATE TABLE `proxy` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile` text NOT NULL,
	`user_id` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `proxy_group` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`proxies` text NOT NULL,
	`is_enabled` integer,
	`token` text NOT NULL,
	`user_id` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `subscription` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`proxy_providers` text NOT NULL,
	`is_enabled` integer,
	`token` text NOT NULL
);
