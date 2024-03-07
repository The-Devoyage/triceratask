-- Add down migration script here
DROP TABLE IF EXISTS todo_access;
DROP TRIGGER IF EXISTS todo_access_insert;

DROP TRIGGER IF EXISTS create_todo_uuid;
-- Revert trigger
CREATE TRIGGER IF NOT EXISTS create_todo_uuid
  AFTER INSERT ON todo
  BEGIN
    UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
  END;

