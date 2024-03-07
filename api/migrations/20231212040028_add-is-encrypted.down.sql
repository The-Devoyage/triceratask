-- Add down migration script here
ALTER TABLE todo DROP COLUMN is_encrypted;
