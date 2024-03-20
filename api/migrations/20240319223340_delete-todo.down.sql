-- Add down migration script here

ALTER TABLE todo DROP COLUMN deleted_at;
