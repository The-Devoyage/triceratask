-- Add up migration script here

-- Create todo_history table
CREATE TABLE IF NOT EXISTS todo_history (
  id integer PRIMARY KEY AUTOINCREMENT,
  uuid uuid UNIQUE,
  todo_uuid integer NOT NULL,
  created_by uuid,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  property text NOT NULL,
  old_value text DEFAULT NULL,
  new_value text DEFAULT NULL,
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid)
  FOREIGN KEY (todo_uuid) REFERENCES todo (uuid)
);

-- After create on todo_history, create the uuid
CREATE TRIGGER IF NOT EXISTS create_todo_history_uuid
  AFTER INSERT ON todo_history
  BEGIN
    UPDATE todo_history SET uuid = uuid4() WHERE id = NEW.id;
  END;

-- After update on todo, create title history
CREATE TRIGGER IF NOT EXISTS update_todo_history_title
  AFTER UPDATE ON todo
  WHEN OLD.title <> NEW.title
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'title', OLD.title, NEW.title);
  END;

-- After update todo, create description history
CREATE TRIGGER IF NOT EXISTS update_todo_history_description
  AFTER UPDATE ON todo
  WHEN OLD.description <> NEW.description
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'description', OLD.description, NEW.description);
  END;

-- After update todo, create completed history
CREATE TRIGGER IF NOT EXISTS update_todo_history_completed
  AFTER UPDATE ON todo
  WHEN OLD.completed <> NEW.completed
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'completed', OLD.completed, NEW.completed);
  END;

-- After update todo, create completed_at history
CREATE TRIGGER IF NOT EXISTS update_todo_history_completed_at
  AFTER UPDATE ON todo
  WHEN OLD.completed_at <> NEW.completed_at
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'completed_at', OLD.completed_at, NEW.completed_at);
  END;

