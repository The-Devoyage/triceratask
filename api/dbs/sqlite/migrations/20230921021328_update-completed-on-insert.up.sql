-- Add up migration script here
DROP TRIGGER IF EXISTS create_todo_uuid;
CREATE TRIGGER IF NOT EXISTS todo_created
AFTER INSERT ON todo
  BEGIN
    UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
    UPDATE todo SET completed_at = CURRENT_TIMESTAMP WHERE id = NEW.id AND NEW.completed = 1;
  END;
