-- Add down migration script here

DROP TABLE todo_history;

DROP TRIGGER IF EXISTS update_todo_history_title;
DROP TRIGGER IF EXISTS update_todo_history_description;
DROP TRIGGER IF EXISTS update_todo_history_completed;
DROP TRIGGER IF EXISTS update_todo_history_completed_at;

