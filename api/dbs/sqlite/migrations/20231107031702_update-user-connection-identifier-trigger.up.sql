-- Add up migration script here
DROP TRIGGER IF EXISTS user_connection_identifier_trigger;
CREATE TRIGGER IF NOT EXISTS user_connection_identifier_trigger
  AFTER INSERT ON user_connection
  FOR EACH ROW
    BEGIN
    UPDATE user_connection 
      SET connected_user_uuid = (SELECT uuid FROM subgraph_user WHERE LOWER(identifier) = LOWER(NEW.identifier)), 
      uuid = uuid4() 
      WHERE id = NEW.id;
  END;
