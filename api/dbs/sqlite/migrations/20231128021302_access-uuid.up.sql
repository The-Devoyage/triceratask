-- Add up migration script here
ALTER TABLE todo_access ADD COLUMN uuid UUID;
ALTER TABLE todo_access ADD COLUMN todo_uuid UUID;
ALTER TABLE todo_access ADD COLUMN revoked BOOLEAN DEFAULT FALSE;
CREATE UNIQUE INDEX IF NOT EXISTS todo_access_user_uuid_todo_uuid ON todo_access (user_uuid, todo_id);

DROP TRIGGER IF EXISTS create_todo_access;

CREATE TRIGGER create_todo_access
  AFTER INSERT ON todo_access
  BEGIN
    UPDATE todo_access SET uuid = uuid4() WHERE id = NEW.id;
  END;

UPDATE todo_access SET uuid = uuid4();
UPDATE todo_access SET todo_uuid = (SELECT uuid FROM todo WHERE id = todo_id);
