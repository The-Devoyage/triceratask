-- Add down migration script here
DROP TRIGGER IF EXISTS todo_created;

CREATE TRIGGER IF NOT EXISTS create_todo_uuid
  AFTER INSERT ON todo
  BEGIN
    UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
  END;

