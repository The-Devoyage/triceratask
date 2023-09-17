-- Remove triggers and tables
DROP TRIGGER IF EXISTS update_todo_updated_at;
DROP TRIGGER IF EXISTS update_todo_completed_at;
DROP TRIGGER IF EXISTS remove_todo_completed_at;
DROP TRIGGER IF EXISTS create_todo_uuid;
DROP TABLE IF EXISTS todo;
-- DROP TABLE IF EXISTS subgraph_user;

