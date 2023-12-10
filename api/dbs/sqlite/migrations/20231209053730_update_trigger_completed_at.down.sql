-- Down

PRAGMA foreign_keys=off;

DROP TRIGGER IF EXISTS user_connection_identifier_subgraph_user_trigger;
DROP TRIGGER IF EXISTS user_connection_revoked_by;
DROP TRIGGER IF EXISTS user_connection_inserted;

CREATE TABLE user_connection_NEW (
  id INTEGER PRIMARY KEY,
  uuid UUID,
  identifier VARCHAR(255) NOT NULL,
  user_uuid UUID NOT NULL,
  connected_user_uuid UUID,
  status BOOLEAN NOT NULL DEFAULT FALSE,
  accepted BOOLEAN NOT NULL DEFAULT FALSE,
  accepted_at TIMESTAMP,
  created_by UUID NOT NULL,
  updated_by UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  revoked BOOLEAN NOT NULL DEFAULT FALSE,
  revoked_at TIMESTAMP,
  FOREIGN KEY (user_uuid) REFERENCES "subgraph_user" (uuid),
  FOREIGN KEY (created_by) REFERENCES "subgraph_user" (uuid)
);

INSERT INTO user_connection_NEW 
  SELECT 
    id, 
    uuid, 
    identifier, 
    (SELECT uuid FROM "subgraph_user" WHERE id = user), 
    (SELECT uuid FROM "subgraph_user" WHERE id = connected_user), 
    status, 
    accepted, 
    accepted_at, 
    (SELECT uuid FROM "subgraph_user" WHERE id = created_by), 
    (SELECT uuid FROM "subgraph_user" WHERE id = updated_by), 
    created_at, 
    updated_at, 
    revoked, 
    revoked_at 
  FROM user_connection;

DROP TABLE user_connection;

ALTER TABLE user_connection_NEW RENAME TO user_connection;

-- Recreate triggers
CREATE TRIGGER IF NOT EXISTS user_connection_identifier_subgraph_user_trigger
AFTER INSERT ON "subgraph_user"
FOR EACH ROW
BEGIN
  UPDATE user_connection 
  SET connected_user_uuid = (SELECT uuid FROM "subgraph_user" WHERE identifier = NEW.identifier) 
  WHERE identifier = NEW.identifier;
END;

PRAGMA foreign_keys=on;
