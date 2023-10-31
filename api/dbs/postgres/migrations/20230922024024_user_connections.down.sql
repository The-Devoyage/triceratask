-- Add down migration script here
-- Drop triggers
DROP TRIGGER IF EXISTS user_connection_accepted_trigger ON user_connection;
DROP FUNCTION IF EXISTS user_connection_accepted_trigger_function();
DROP TRIGGER IF EXISTS user_connection_updated_at_trigger ON user_connection;
DROP FUNCTION IF EXISTS user_connection_updated_at_trigger_function();
DROP TRIGGER IF EXISTS user_connection_revoked_at_trigger ON user_connection;
DROP FUNCTION IF EXISTS user_connection_revoked_at_trigger_function();
DROP TRIGGER IF EXISTS user_connection_revoked_at_null_trigger ON user_connection;
DROP FUNCTION IF EXISTS user_connection_revoked_at_null_trigger_function();
DROP TRIGGER IF EXISTS user_connection_revoked_accepted_trigger ON user_connection;
DROP FUNCTION IF EXISTS user_connection_revoked_accepted_trigger_function();
DROP TRIGGER IF EXISTS user_connection_accepted_revoked_trigger ON user_connection;
DROP FUNCTION IF EXISTS user_connection_accepted_revoked_trigger_function();
DROP TRIGGER IF EXISTS user_connection_accepted_at_trigger ON user_connection;
DROP FUNCTION IF EXISTS user_connection_accepted_at_trigger_function();

-- Drop user_connection table
DROP TABLE IF EXISTS user_connection;

