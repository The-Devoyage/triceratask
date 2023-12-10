-- Add down migration script here
DROP TRIGGER IF EXISTS user_connection_inserted;
CREATE TRIGGER IF NOT EXISTS user_connection_inserted
AFTER INSERT ON user_connection
FOR EACH ROW
BEGIN
  UPDATE user_connection 
  SET uuid = uuid4()
  WHERE id = NEW.id;
END;
