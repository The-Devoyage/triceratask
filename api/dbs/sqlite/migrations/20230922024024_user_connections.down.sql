-- Add down migration script here
DROP TABLE IF EXISTS user_connection;
DROP TRIGGER IF EXISTS user_connection_accepted_trigger;
DROP TRIGGER IF EXISTS user_connection_updated_at_trigger;
DROP TRIGGER IF EXISTS user_connection_identifier_trigger;
DROP TRIGGER IF EXISTS user_connection_identifier_subgraph_user_trigger;

