-- Add down migration script here
ALTER TABLE subgraph_user DROP COLUMN profile_img;

DROP TRIGGER IF EXISTS default_profile_img;
