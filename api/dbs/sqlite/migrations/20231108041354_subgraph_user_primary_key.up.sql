-- Add up migration script here
-- Create new temp table and move all of subgraph_user to it
PRAGMA foreign_keys=off;

ALTER TABLE subgraph_user RENAME TO subgraph_user_temp;

CREATE TABLE IF NOT EXISTS subgraph_user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uuid UUID NOT NULL UNIQUE,
  identifier VARCHAR(42) UNIQUE NOT NULL,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL,
  profile_img TEXT DEFAULT NULL,
  last_active TIMESTAMP DEFAULT NULL,
  share_active BOOLEAN DEFAULT TRUE,
  status VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Copy all of the data from subgraph_user to subgraph_user_temp
INSERT INTO subgraph_user (uuid, identifier, created_at, updated_at, registration_state, passkey, authentication_state, profile_img, last_active, share_active, status)
SELECT uuid, identifier, created_at, updated_at, registration_state, passkey, authentication_state, profile_img, last_active, share_active, status FROM subgraph_user_temp;

-- Recreate triggers
DROP TRIGGER IF EXISTS user_connection_identifier_subgraph_user_trigger;
CREATE TRIGGER IF NOT EXISTS user_connection_identifier_subgraph_user_trigger
AFTER INSERT ON "subgraph_user"
FOR EACH ROW
BEGIN
  UPDATE user_connection 
  SET connected_user_uuid = (SELECT uuid FROM "subgraph_user" WHERE identifier = NEW.identifier) 
  WHERE identifier = NEW.identifier;
END;


DROP TRIGGER IF EXISTS default_profile_img;
CREATE TRIGGER IF NOT EXISTS default_profile_img
AFTER INSERT ON "subgraph_user"
BEGIN
    UPDATE "subgraph_user"
    SET profile_img = 'https://source.boringavatars.com/beam/500/' || identifier || '?square&colors=264653,2a9d8f,e9c46a,f4a261,e76f51'
    WHERE uuid = NEW.uuid;
END;

PRAGMA foreign_keys=on;
