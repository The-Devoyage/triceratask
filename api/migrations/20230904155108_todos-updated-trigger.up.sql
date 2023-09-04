-- Add up migration script here
CREATE TRIGGER IF NOT EXISTS todos_updated_at
  AFTER UPDATE ON todo
  BEGIN
    UPDATE todo SET updated_at = CURRENT_TIMESTAMP WHERE id = old.id;
  END;



