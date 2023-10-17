-- Add up migration script here
CREATE TABLE IF NOT EXISTS user_connection (
  id INTEGER PRIMARY KEY,
  uuid UUID,
  identifier VARCHAR(255) NOT NULL,
  user_uuid UUID,
  connected_user_uuid uuid,
  status BOOLEAN NOT NULL DEFAULT FALSE,
  accepted BOOLEAN NOT NULL DEFAULT FALSE,
  accepted_at TIMESTAMP,
  created_by uuid NOT NULL,
  updated_by uuid NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  revoked BOOLEAN NOT NULL DEFAULT FALSE,
  revoked_at TIMESTAMP,
  FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid),
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid)
);

CREATE UNIQUE INDEX IF NOT EXISTS user_connection_uuid_uindex ON user_connection (uuid);
CREATE UNIQUE INDEX IF NOT EXISTS user_connection_user_uuid_connected_user_uuid_uindex ON user_connection (user_uuid, connected_user_uuid);

-- When accepted changes to true, status should be true
CREATE TRIGGER IF NOT EXISTS user_connection_accepted_trigger
  BEFORE UPDATE ON user_connection
  FOR EACH ROW
  WHEN (OLD.accepted = FALSE AND NEW.accepted = TRUE)
    BEGIN
    UPDATE user_connection SET status = TRUE WHERE id = NEW.id;
  END;

--When insert or update, updated_at should be updated
CREATE TRIGGER IF NOT EXISTS user_connection_updated_at_trigger
  BEFORE UPDATE ON user_connection
  FOR EACH ROW
    BEGIN
    UPDATE user_connection SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

--After insert, see if identifier matches a subgraph_user and populate the connected_user_uuid
CREATE TRIGGER IF NOT EXISTS user_connection_identifier_trigger
  AFTER INSERT ON user_connection
  FOR EACH ROW
    BEGIN
    UPDATE user_connection 
      SET connected_user_uuid = (SELECT uuid FROM subgraph_user WHERE identifier = NEW.identifier), 
      uuid = uuid4() 
      WHERE id = NEW.id;
  END;

--After insert on subgraph_user table, see if identifier matches a user_connection and populate the connected_user_uuid
CREATE TRIGGER IF NOT EXISTS user_connection_identifier_subgraph_user_trigger
  AFTER INSERT ON subgraph_user
  FOR EACH ROW
    BEGIN
    UPDATE user_connection 
      SET connected_user_uuid = (SELECT uuid FROM subgraph_user WHERE identifier = NEW.identifier) 
      WHERE identifier = NEW.identifier;
  END;


--When revoked changes to true, revoked_at should be updated
CREATE TRIGGER IF NOT EXISTS user_connection_revoked_at_trigger
  BEFORE UPDATE ON user_connection
  FOR EACH ROW
    WHEN (OLD.revoked = FALSE AND NEW.revoked = TRUE)
    BEGIN
    UPDATE user_connection SET revoked_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

--When revoked changes to false, revoked_at should be null
CREATE TRIGGER IF NOT EXISTS user_connection_revoked_at_null_trigger
  BEFORE UPDATE ON user_connection
  FOR EACH ROW
    WHEN (OLD.revoked = TRUE AND NEW.revoked = FALSE)
    BEGIN
    UPDATE user_connection SET revoked_at = NULL WHERE id = NEW.id;
  END;

--When revoked changes to true, accepted should be false
CREATE TRIGGER IF NOT EXISTS user_connection_revoked_accepted_trigger
  BEFORE UPDATE ON user_connection
  FOR EACH ROW
    WHEN (OLD.revoked = FALSE AND NEW.revoked = TRUE)
    BEGIN
    UPDATE user_connection SET accepted = FALSE WHERE id = NEW.id;
  END;

--When accepted changes to true, revoked should be false and revoked_at should be null
CREATE TRIGGER IF NOT EXISTS user_connection_accepted_revoked_trigger
  BEFORE UPDATE ON user_connection
  FOR EACH ROW
    WHEN (OLD.accepted = FALSE AND NEW.accepted = TRUE)
    BEGIN
    UPDATE user_connection SET revoked = FALSE, revoked_at = NULL WHERE id = NEW.id;
  END;

--When accepted changes to true, accepted_at should be updated
CREATE TRIGGER IF NOT EXISTS user_connection_accepted_at_trigger
  BEFORE UPDATE ON user_connection
  FOR EACH ROW
    WHEN (OLD.accepted = FALSE AND NEW.accepted = TRUE)
    BEGIN
    UPDATE user_connection SET accepted_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;
