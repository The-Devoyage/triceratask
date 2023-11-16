-- Add down migration script here
PRAGMA foreign_keys=off;

DROP TABLE todo;

ALTER TABLE todo_temp RENAME TO todo;

DROP TRIGGER IF EXISTS update_todo_updated_at;
CREATE TRIGGER update_todo_updated_at 
  AFTER UPDATE ON todo
  BEGIN
    UPDATE todo SET updated_at = CURRENT_TIMESTAMP WHERE id = old.id;
  END;

DROP TRIGGER IF EXISTS update_todo_completed_at;
CREATE TRIGGER update_todo_completed_at
  AFTER UPDATE ON todo
  FOR EACH ROW
  WHEN OLD.completed = 0 AND NEW.completed = 1
  BEGIN
    UPDATE todo SET completed_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

DROP TRIGGER IF EXISTS remove_todo_completed_at;
CREATE TRIGGER remove_todo_completed_at 
  AFTER UPDATE ON todo
  WHEN OLD.completed = 1 AND NEW.completed = 0
  BEGIN
    UPDATE todo SET completed_at = NULL WHERE id = NEW.id;
  END;

DROP TRIGGER IF EXISTS update_todo_history_title;
CREATE TRIGGER update_todo_history_title
  AFTER UPDATE ON todo
  WHEN OLD.title <> NEW.title
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'title', OLD.title, NEW.title);
  END;

DROP TRIGGER IF EXISTS update_todo_history_description;
CREATE TRIGGER update_todo_history_description
  AFTER UPDATE ON todo
  WHEN OLD.description <> NEW.description
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'description', OLD.description, NEW.description);
  END;

DROP TRIGGER IF EXISTS update_todo_history_completed;
CREATE TRIGGER update_todo_history_completed
  AFTER UPDATE ON todo
  WHEN OLD.completed <> NEW.completed
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'completed', OLD.completed, NEW.completed);
  END;

DROP TRIGGER IF EXISTS update_todo_history_completed_at;
CREATE TRIGGER update_todo_history_completed_at
  AFTER UPDATE ON todo
  WHEN OLD.completed_at <> NEW.completed_at
  BEGIN
    INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'completed_at', OLD.completed_at, NEW.completed_at);
  END;

DROP TRIGGER IF EXISTS todo_created;
CREATE TRIGGER todo_created
AFTER INSERT ON todo
  BEGIN
    UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
    UPDATE todo SET completed_at = CURRENT_TIMESTAMP WHERE id = NEW.id AND NEW.completed = 1;
  END;

DROP TRIGGER IF EXISTS todo_access_insert;
CREATE TRIGGER todo_access_insert
    AFTER INSERT ON todo
    BEGIN
        UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
        INSERT INTO todo_access (user_uuid, todo_id)
        VALUES (NEW.created_by, NEW.id);
    END;

PRAGMA foreign_keys=on;
