-- Add up migration script here
-- Add column share_active to subgraph_user
ALTER TABLE subgraph_user ADD COLUMN share_active BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE subgraph_user ADD COLUMN status VARCHAR(255) DEFAULT NULL;
