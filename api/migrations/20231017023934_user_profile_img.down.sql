-- Remove column profile_img from table subgraph_user
ALTER TABLE subgraph_user DROP COLUMN profile_img;

-- Drop trigger default_profile_img
DROP TRIGGER IF EXISTS default_profile_img;

