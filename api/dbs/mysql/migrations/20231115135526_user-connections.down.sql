-- Add down migration script here
DROP TABLE user_connections;
DROP TRIGGER IF EXISTS user_connection_accepted_trigger;
DROP TRIGGER IF EXISTS user_connection_updated_at_trigger;
DROP TRIGGER IF EXISTS user_connection_revoked_at_trigger;
DROP TRIGGER IF EXISTS user_connection_revoked_at_null_trigger;
DROP TRIGGER IF EXISTS user_connection_revoked_accepted_trigger;
DROP TRIGGER IF EXISTS user_connection_accepted_revoked_trigger;
DROP TRIGGER IF EXISTS user_connection_accepted_at_trigger;
