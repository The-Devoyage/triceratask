-- Add down migration script here
DROP TRIGGER IF EXISTS create_todo_access;

ALTER TABLE todo_access DROP COLUMN uuid;
ALTER TABLE todo_access DROP COLUMN todo_uuid;
ALTER TABLE todo_access DROP COLUMN revoked;
ALTER TABLE todo_access DROP COLUMN created_at;
ALTER TABLE todo_access DROP COLUMN updated_at;

DROP INDEX IF EXISTS todo_access_user_uuid_todo_uuid;
