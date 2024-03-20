-- Add down migration script here

DROP TRIGGER IF EXISTS update_todo_history_goal_date;
DROP TRIGGER IF EXISTS update_todo_history_completed_by;
DROP TRIGGER IF EXISTS update_todo_history_deleted_at;
CREATE TRIGGER IF NOT EXISTS update_todo_history_completed_at
  AFTER UPDATE ON todo
  WHEN OLD.completed_at <> NEW.completed_at
  BEGIN
    INSERT INTO todo_history (todo, created_by, property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'completed_at', OLD.completed_at, NEW.completed_at);
  END;
