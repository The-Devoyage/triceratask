-- Add down migration script here
PRAGMA foreign_keys=off;

DROP TABLE subgraph_user;

ALTER TABLE subgraph_user_temp RENAME TO subgraph_user;

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
