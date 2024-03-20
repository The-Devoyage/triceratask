-- Add up migration script here

-- Add a column to mark the todo as deleted
ALTER TABLE todo ADD COLUMN deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL;

