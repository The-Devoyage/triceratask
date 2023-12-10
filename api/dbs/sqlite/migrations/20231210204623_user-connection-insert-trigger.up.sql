-- Add up migration script here
DROP TRIGGER IF EXISTS user_connection_inserted;
CREATE TRIGGER IF NOT EXISTS user_connection_inserted
AFTER INSERT ON user_connection
FOR EACH ROW
BEGIN
  UPDATE user_connection 
  SET 
    uuid = uuid4(),
    connected_user = (SELECT id FROM "subgraph_user" WHERE identifier = NEW.identifier)
  WHERE id = NEW.id;
END;
