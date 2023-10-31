-- Postgres
-- Create the todos table

-- Add uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the subgraph_user table
CREATE TABLE IF NOT EXISTS subgraph_user (
  id SERIAL PRIMARY KEY,
  uuid UUID UNIQUE DEFAULT uuid_generate_v4() NOT NULL,
  identifier VARCHAR(42) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL
);


CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    uuid UUID UNIQUE DEFAULT uuid_generate_v4() NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    completed_by UUID,
    created_by UUID,
    updated_by UUID,
    FOREIGN KEY (completed_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL
);

-- Trigger to update the updated_at column
CREATE OR REPLACE FUNCTION update_todo_updated_at_function()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todo_updated_at
BEFORE UPDATE ON todo
FOR EACH ROW
EXECUTE FUNCTION update_todo_updated_at_function();


-- Trigger to update the completed_at column
CREATE OR REPLACE FUNCTION update_todo_completed_at_function()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.completed = false AND NEW.completed = true THEN
        NEW.completed_at = CURRENT_TIMESTAMP;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todo_completed_at
BEFORE UPDATE ON todo
FOR EACH ROW
EXECUTE FUNCTION update_todo_completed_at_function();

-- Trigger to remove the completed_at column
CREATE OR REPLACE FUNCTION update_todo_remove_completed_at_function()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.completed = true AND NEW.completed = false THEN
        NEW.completed_at = NULL;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todo_remove_completed_at
BEFORE UPDATE ON todo
FOR EACH ROW
EXECUTE FUNCTION update_todo_remove_completed_at_function();
