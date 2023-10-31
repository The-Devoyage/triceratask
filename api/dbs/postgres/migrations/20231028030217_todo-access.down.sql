-- Add down migration script here
-- Drop triggers and functions
DROP TRIGGER IF EXISTS todo_access_insert ON todo;
DROP FUNCTION IF EXISTS todo_access_insert_function();

-- Drop todo_access table
DROP TABLE IF EXISTS todo_access;

