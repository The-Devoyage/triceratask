-- Add down migration script here
ALTER TABLE subgraph_user DROP COLUMN share_active;
ALTER TABLE subgraph_user DROP COLUMN status;
