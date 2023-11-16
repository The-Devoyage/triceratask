-- Add down migration script here
DROP TABLE todo_access;
DROP TRIGGER IF EXISTS todo_access_insert;
