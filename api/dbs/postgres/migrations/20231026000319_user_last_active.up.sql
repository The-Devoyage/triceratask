-- Add up migration script here
ALTER TABLE subgraph_user ADD COLUMN last_active TIMESTAMPTZ DEFAULT NULL;
