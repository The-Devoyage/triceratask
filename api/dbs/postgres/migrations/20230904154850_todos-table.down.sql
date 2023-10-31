-- Remove triggers and functions
DROP TRIGGER IF EXISTS update_todo_updated_at ON todo;
DROP FUNCTION IF EXISTS update_todo_updated_at_function();
DROP TRIGGER IF EXISTS update_todo_completed_at ON todo;
DROP FUNCTION IF EXISTS update_todo_completed_at_function();
DROP TRIGGER IF EXISTS remove_todo_completed_at ON todo;
DROP FUNCTION IF EXISTS remove_todo_completed_at_function();

-- Remove tables
DROP TABLE IF EXISTS todo;
DROP TABLE IF EXISTS subgraph_user;

