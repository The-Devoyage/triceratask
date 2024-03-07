-- Add down migration script here
ALTER TABLE subgraph_user DROP COLUMN email;
ALTER TABLE subgraph_user DROP COLUMN phone;
