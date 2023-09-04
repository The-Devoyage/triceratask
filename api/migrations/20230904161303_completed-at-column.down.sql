-- Add down migration script here
ALTER TABLE todo DROP COLUMN completed_at;

DROP TRIGGER IF EXISTS completed_at;
DROP TRIGGER IF EXISTS completed_at_remove;

