-- Add up migration script here
-- Drop trigger if it exists
DROP TRIGGER IF EXISTS todo_created;

-- Create trigger
CREATE TRIGGER todo_created
AFTER INSERT ON todo
FOR EACH ROW
BEGIN
  IF NEW.completed THEN
    UPDATE todo
    SET completed_at = CURRENT_TIMESTAMP
    WHERE uuid = NEW.uuid;
  END IF;
END;
