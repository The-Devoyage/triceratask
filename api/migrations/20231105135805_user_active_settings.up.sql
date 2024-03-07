-- Add up migration script here
ALTER TABLE subgraph_user ADD COLUMN share_active BOOLEAN NOT NULL DEFAULT TRUE;
ALTER TABLE subgraph_user ADD COLUMN status VARCHAR(255) DEFAULT NULL;
