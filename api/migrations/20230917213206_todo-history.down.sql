-- Add down migration script here
-- Drop todo_history table
DROP TABLE IF EXISTS todo_history;
-- Drop create_todo_history_uuid trigger
DROP TRIGGER IF EXISTS create_todo_history_uuid;
-- Drop update_todo_history trigger
DROP TRIGGER IF EXISTS update_todo_history_title;
DROP TRIGGER IF EXISTS update_todo_history_description;
DROP TRIGGER IF EXISTS update_todo_history_completed;
DROP TRIGGER IF EXISTS update_todo_history_completed_at;

