-- Add down migration script here
-- Remove triggers and functions
DROP TRIGGER IF EXISTS update_todo_updated_at;
DROP TRIGGER IF EXISTS update_todo_completed_at;
DROP TRIGGER IF EXISTS remove_todo_completed_at;

-- Remove tables
DROP TABLE IF EXISTS todo;
DROP TABLE IF EXISTS subgraph_user;

