-- Add up migration script here
DROP TRIGGER IF EXISTS todo_created ON todo;

CREATE OR REPLACE FUNCTION todo_created_function()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.completed THEN
    NEW.completed_at := CURRENT_TIMESTAMP;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER todo_created
AFTER INSERT ON todo
FOR EACH ROW
EXECUTE FUNCTION todo_created_function();

