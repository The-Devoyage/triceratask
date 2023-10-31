-- Add down migration script here
-- Drop trigger
DROP TRIGGER IF EXISTS default_profile_img ON subgraph_user;
DROP FUNCTION IF EXISTS set_default_profile_img();
-- Drop profile_img column
ALTER TABLE subgraph_user DROP COLUMN IF EXISTS profile_img;

