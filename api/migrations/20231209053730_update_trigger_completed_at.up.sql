-- Add up migration script here

PRAGMA foreign_keys=off;

DROP TRIGGER IF EXISTS user_connection_identifier_subgraph_user_trigger;
DROP TRIGGER IF EXISTS user_connection_revoked_by;
DROP TRIGGER IF EXISTS user_connection_inserted;

CREATE TABLE user_connection_NEW (
  id INTEGER PRIMARY KEY,
  uuid UUID,
  identifier VARCHAR(255) NOT NULL,
  user Int NOT NULL,
  connected_user Int,
  status BOOLEAN NOT NULL DEFAULT FALSE,
  accepted BOOLEAN NOT NULL DEFAULT FALSE,
  accepted_at TIMESTAMP,
  created_by Int NOT NULL,
  updated_by Int NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  revoked BOOLEAN NOT NULL DEFAULT FALSE,
  revoked_at TIMESTAMP,
  revoked_by Int DEFAULT NULL,
  FOREIGN KEY (user) REFERENCES "subgraph_user" (id),
  FOREIGN KEY (connected_user) REFERENCES "subgraph_user" (id),
  FOREIGN KEY (created_by) REFERENCES "subgraph_user" (id),
  FOREIGN KEY (updated_by) REFERENCES "subgraph_user" (id),
  FOREIGN KEY (revoked_by) REFERENCES "subgraph_user" (id)
);

INSERT INTO user_connection_NEW 
  SELECT 
    id, 
    uuid, 
    identifier, 
    (SELECT id FROM "subgraph_user" WHERE uuid = user_uuid), 
    (SELECT id FROM "subgraph_user" WHERE uuid = connected_user_uuid), 
    status, 
    accepted, 
    accepted_at, 
    (SELECT id FROM "subgraph_user" WHERE uuid = created_by), 
    (SELECT id FROM "subgraph_user" WHERE uuid = updated_by), 
    created_at, 
    updated_at, 
    revoked, 
    revoked_at,
    NULL
  FROM user_connection;

DROP TABLE user_connection;

ALTER TABLE user_connection_NEW RENAME TO user_connection;

-- Recreate triggers
CREATE TRIGGER IF NOT EXISTS user_connection_identifier_subgraph_user_trigger
AFTER INSERT ON "subgraph_user"
FOR EACH ROW
BEGIN
  UPDATE user_connection 
  SET connected_user = (SELECT id FROM "subgraph_user" WHERE identifier = NEW.identifier) 
  WHERE identifier = NEW.identifier;
END;

CREATE TRIGGER IF NOT EXISTS user_connection_revoked_by
AFTER UPDATE ON user_connection
FOR EACH ROW
BEGIN
  UPDATE user_connection 
  SET revoked_by = NEW.updated_by
  WHERE id = NEW.id;
END;

CREATE TRIGGER IF NOT EXISTS user_connection_inserted
AFTER INSERT ON user_connection
FOR EACH ROW
BEGIN
  UPDATE user_connection 
  SET uuid = uuid4()
  WHERE id = NEW.id;
END;

PRAGMA foreign_keys=off;
