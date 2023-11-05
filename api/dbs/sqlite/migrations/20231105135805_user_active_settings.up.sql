-- Add up migration script here
ALTER TABLE subgraph_user ADD COLUMN share_active BOOLEAN NOT NULL DEFAULT TRUE;
