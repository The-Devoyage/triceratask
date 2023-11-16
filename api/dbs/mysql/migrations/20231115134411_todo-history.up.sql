-- Up Migration

-- Create todo_history table
CREATE TABLE IF NOT EXISTS todo_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) UNIQUE DEFAULT (UUID()),
  todo_uuid CHAR(36) NOT NULL,
  created_by CHAR(36),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  property TEXT NOT NULL,
  old_value TEXT,
  new_value TEXT,
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL,
  FOREIGN KEY (todo_uuid) REFERENCES todo (uuid) ON DELETE CASCADE
);

-- After update on todo, create title history
DROP TRIGGER IF EXISTS update_todo_history_title;
CREATE TRIGGER update_todo_history_title
AFTER UPDATE ON todo
FOR EACH ROW
BEGIN
  IF OLD.title <> NEW.title THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'title', OLD.title, NEW.title);
  END IF;
END;

-- After update todo, create description history
DROP TRIGGER IF EXISTS update_todo_history_description;
CREATE TRIGGER update_todo_history_description
AFTER UPDATE ON todo
FOR EACH ROW
BEGIN
  IF OLD.description <> NEW.description THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'description', OLD.description, NEW.description);
  END IF;
END;

-- After update todo, create completed history
DROP TRIGGER IF EXISTS update_todo_history_completed;
CREATE TRIGGER update_todo_history_completed
AFTER UPDATE ON todo
FOR EACH ROW
BEGIN
  IF OLD.completed <> NEW.completed THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'completed', CAST(OLD.completed AS CHAR), CAST(NEW.completed AS CHAR));
  END IF;
END;

-- After update todo, create completed_at history
DROP TRIGGER IF EXISTS update_todo_history_completed_at;
CREATE TRIGGER update_todo_history_completed_at
AFTER UPDATE ON todo
FOR EACH ROW
BEGIN
  IF OLD.completed_at <> NEW.completed_at THEN
    INSERT INTO todo_history (todo_uuid, created_by, property, old_value, new_value)
    VALUES (OLD.uuid, NEW.updated_by, 'completed_at', CAST(OLD.completed_at AS CHAR), CAST(NEW.completed_at AS CHAR));
  END IF;
END;
