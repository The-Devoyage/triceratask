-- Add up migration script here
ALTER TABLE todo ADD COLUMN is_encrypted BOOLEAN NOT NULL DEFAULT FALSE;

