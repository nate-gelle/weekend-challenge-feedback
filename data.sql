-- Database should be reflection_board
CREATE DATABASE "reflection_board";

-- Switch to "reflection_board" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comment" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comment")
VALUES (4, 4, 5, 'Doing Great!');
