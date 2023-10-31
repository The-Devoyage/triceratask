-- Drop triggers and functions
DROP TRIGGER IF EXISTS create_todo_history_uuid ON todo_history;
DROP FUNCTION IF EXISTS create_todo_history_uuid_function();
DROP TRIGGER IF EXISTS update_todo_history_title ON todo;
DROP FUNCTION IF EXISTS update_todo_history_title_function();
DROP TRIGGER IF EXISTS update_todo_history_description ON todo;
DROP FUNCTION IF EXISTS update_todo_history_description_function();
DROP TRIGGER IF EXISTS update_todo_history_completed ON todo;
DROP FUNCTION IF EXISTS update_todo_history_completed_function();
DROP TRIGGER IF EXISTS update_todo_history_completed_at ON todo;
DROP FUNCTION IF EXISTS update_todo_history_completed_at_function();

-- Drop tables
DROP TABLE IF EXISTS todo_history;
