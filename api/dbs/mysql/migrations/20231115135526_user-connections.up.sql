-- Add up migration script here
CREATE TABLE IF NOT EXISTS user_connection (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) UNIQUE DEFAULT (UUID()) NOT NULL,
  identifier VARCHAR(255) NOT NULL,
  user_uuid CHAR(36),
  connected_user_uuid CHAR(36),
  status BOOLEAN NOT NULL DEFAULT FALSE,
  accepted BOOLEAN NOT NULL DEFAULT FALSE,
  accepted_at TIMESTAMP,
  created_by CHAR(36) NOT NULL,
  updated_by CHAR(36) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  revoked BOOLEAN NOT NULL DEFAULT FALSE,
  revoked_at TIMESTAMP,
  FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid),
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid)
);

CREATE UNIQUE INDEX user_connection_user_uuid_connected_user_uuid_uindex ON user_connection (user_uuid, connected_user_uuid);

-- When accepted changes to true, status should be true
CREATE TRIGGER user_connection_accepted_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
BEGIN
  IF NOT OLD.accepted AND NEW.accepted THEN
    SET NEW.status := TRUE;
  END IF;
END;

-- When insert or update, updated_at should be updated
CREATE TRIGGER user_connection_updated_at_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
BEGIN
  SET NEW.updated_at := CURRENT_TIMESTAMP;
END;

-- After insert, see if identifier matches a subgraph_user and populate the connected_user_uuid
-- The trigger for user_connection_identifier_subgraph_user_trigger might not be necessary as it could lead to integrity issues. Please ensure the design is suitable for your specific use case.

-- When revoked changes to true, revoked_at should be updated
CREATE TRIGGER user_connection_revoked_at_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
BEGIN
  IF NOT OLD.revoked AND NEW.revoked THEN
    SET NEW.revoked_at := CURRENT_TIMESTAMP;
  END IF;
END;

-- When revoked changes to false, revoked_at should be null
CREATE TRIGGER user_connection_revoked_at_null_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
BEGIN
  IF OLD.revoked AND NOT NEW.revoked THEN
    SET NEW.revoked_at := NULL;
  END IF;
END;

-- When revoked changes to true, accepted should be false
CREATE TRIGGER user_connection_revoked_accepted_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
BEGIN
  IF NOT OLD.revoked AND NEW.revoked THEN
    SET NEW.accepted := FALSE;
  END IF;
END;

-- When accepted changes to true, revoked should be false and revoked_at should be null
CREATE TRIGGER user_connection_accepted_revoked_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
BEGIN
  IF NOT OLD.accepted AND NEW.accepted THEN
    SET NEW.revoked := FALSE;
    SET NEW.revoked_at := NULL;
  END IF;
END;

-- When accepted changes to true, accepted_at should be updated
CREATE TRIGGER user_connection_accepted_at_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
BEGIN
  IF NOT OLD.accepted AND NEW.accepted THEN
    SET NEW.accepted_at := CURRENT_TIMESTAMP;
  END IF;
END;

