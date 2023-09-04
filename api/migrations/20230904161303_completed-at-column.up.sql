-- Add up migration script here
ALTER TABLE todo 
ADD COLUMN completed_at TIMESTAMP WITH TIME ZONE
DEFAULT NULL;

CREATE TRIGGER IF NOT EXISTS completed_at
AFTER UPDATE ON todo
FOR EACH ROW
WHEN OLD.completed = 0 AND NEW.completed = 1
  BEGIN
    UPDATE todo SET completed_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

CREATE TRIGGER IF NOT EXISTS commpleted_at_remove
AFTER UPDATE ON todo
WHEN OLD.completed = 1 AND NEW.completed = 0
  BEGIN
    UPDATE todo SET completed_at = NULL WHERE id = NEW.id;
  END;

UPDATE todo SET completed_at = updated_at WHERE completed = true;
