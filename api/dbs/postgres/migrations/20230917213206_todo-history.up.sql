-- Up Migration

-- Create todo_history table
CREATE TABLE IF NOT EXISTS todo_history (
  id SERIAL PRIMARY KEY,
  uuid UUID UNIQUE DEFAULT uuid_generate_v4() NOT NULL,
  todo_uuid UUID NOT NULL,
  created_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  property TEXT NOT NULL,
  old_value TEXT,
  new_value TEXT,
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL,
  FOREIGN KEY (todo_uuid) REFERENCES todo (uuid) ON DELETE CASCADE
);

-- After update on todo, create title history
CREATE OR REPLACE FUNCTION update_todo_history_title_function()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.title <> NEW.title THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'title', OLD.title, NEW.title);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todo_history_title
AFTER UPDATE ON todo
FOR EACH ROW
EXECUTE FUNCTION update_todo_history_title_function();

-- After update todo, create description history
CREATE OR REPLACE FUNCTION update_todo_history_description_function()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.description <> NEW.description THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'description', OLD.description, NEW.description);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todo_history_description
AFTER UPDATE ON todo
FOR EACH ROW
EXECUTE FUNCTION update_todo_history_description_function();

-- After update todo, create completed history
CREATE OR REPLACE FUNCTION update_todo_history_completed_function()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.completed <> NEW.completed THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'completed', OLD.completed::TEXT, NEW.completed::TEXT);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todo_history_completed
AFTER UPDATE ON todo
FOR EACH ROW
EXECUTE FUNCTION update_todo_history_completed_function();

-- After update todo, create completed_at history
CREATE OR REPLACE FUNCTION update_todo_history_completed_at_function()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.completed_at IS DISTINCT FROM NEW.completed_at THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'completed_at', OLD.completed_at::TEXT, NEW.completed_at::TEXT);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todo_history_completed_at
AFTER UPDATE ON todo
FOR EACH ROW
EXECUTE FUNCTION update_todo_history_completed_at_function();
