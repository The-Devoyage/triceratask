-- Add up migration script here
-- Add column email and phone to subgraph_user table
ALTER TABLE subgraph_user ADD COLUMN email VARCHAR(255) DEFAULT NULL; 
ALTER TABLE subgraph_user ADD COLUMN phone VARCHAR(255) DEFAULT NULL;
