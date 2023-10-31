-- Add up migration script here
-- Add the goal_date column to the todo table
ALTER TABLE todo ADD COLUMN goal_date TIMESTAMPTZ DEFAULT NULL;
-- Populate the goal_date column as NULL for all existing rows
UPDATE todo SET goal_date = NULL;

