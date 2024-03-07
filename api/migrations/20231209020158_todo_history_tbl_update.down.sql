-- Down
PRAGMA foreign_keys=off;

DROP TRIGGER IF EXISTS update_todo_history_description;
DROP TRIGGER IF EXISTS update_todo_history_title;
DROP TRIGGER IF EXISTS create_todo_history_uuid;
DROP TRIGGER IF EXISTS update_todo_history_completed;
DROP TRIGGER IF EXISTS update_todo_history_completed_at;

CREATE TABLE todo_history_NEW (
  id integer PRIMARY KEY AUTOINCREMENT,
  uuid uuid UNIQUE,
  todo_uuid UUID NOT NULL,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  property text NOT NULL,
  old_value text DEFAULT NULL,
  new_value text DEFAULT NULL,
  FOREIGN KEY (todo_uuid) REFERENCES todo (uuid),
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid)
);

INSERT INTO todo_history_NEW (id, uuid, todo_uuid, created_by, created_at, property, old_value, new_value)
SELECT 
    id, 
    uuid, 
    (SELECT uuid FROM todo WHERE id = todo_history.todo),
    (SELECT uuid FROM subgraph_user WHERE id = todo_history.created_by), 
    created_at, 
    property, 
    old_value, 
    new_value
  FROM todo_history;

DROP TABLE todo_history;
ALTER TABLE todo_history_NEW RENAME TO todo_history;

CREATE TRIGGER create_todo_history_uuid
  AFTER INSERT ON todo_history
  BEGIN
    UPDATE todo_history SET uuid = uuid4() WHERE id = NEW.id;
  END;

CREATE TRIGGER update_todo_history_title
  AFTER UPDATE ON todo
  WHEN OLD.title <> NEW.title
  BEGIN
    INSERT INTO "todo_history" (todo, created_by,  property, old_value, new_value) VALUES (OLD.id, NEW.updated_by, 'title', OLD.title, NEW.title);
  END;

CREATE TRIGGER update_todo_history_description
  AFTER UPDATE ON todo
  WHEN OLD.description <> NEW.description
  BEGIN
    INSERT INTO "todo_history" (todo, created_by,  property, old_value, new_value) VALUES (OLD.id, NEW.updated_by, 'description', OLD.description, NEW.description);
  END;

CREATE TRIGGER update_todo_history_completed
  AFTER UPDATE ON todo
  WHEN OLD.completed <> NEW.completed
  BEGIN
    INSERT INTO "todo_history" (todo, created_by,  property, old_value, new_value) VALUES (OLD.id, NEW.updated_by, 'completed', OLD.completed, NEW.completed);
  END;

CREATE TRIGGER update_todo_history_completed_at
  AFTER UPDATE ON todo
  WHEN OLD.completed_at <> NEW.completed_at
  BEGIN
    INSERT INTO "todo_history" (todo, created_by,  property, old_value, new_value) VALUES (OLD.id, NEW.updated_by, 'completed_at', OLD.completed_at, NEW.completed_at);
  END;

PRAGMA foreign_keys=on;
