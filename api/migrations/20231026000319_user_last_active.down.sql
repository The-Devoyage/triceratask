-- Add down migration script here
ALTER TABLE subgraph_user DROP COLUMN last_active;
