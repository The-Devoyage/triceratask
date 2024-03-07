-- Add up migration script here

-- -- Update the foreign keys to use ID instead of UUID
-- PRAGMA foreign_keys=off;

-- ALTER TABLE todo RENAME TO todo_temp;

-- -- Create the todo_temp table
-- CREATE TABLE IF NOT EXISTS todo (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     uuid UUID UNIQUE,
--     title TEXT NOT NULL,
--     description TEXT NOT NULL,
--     goal_date TIMESTAMP,
--     completed BOOLEAN NOT NULL DEFAULT false,
--     completed_by INTEGER,
--     completed_at TIMESTAMP,
--     created_by INTEGER,
--     updated_by INTEGER,
--     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (completed_by) REFERENCES subgraph_user (id) ON DELETE SET NULL,
--     FOREIGN KEY (created_by) REFERENCES subgraph_user (id) ON DELETE SET NULL,
--     FOREIGN KEY (updated_by) REFERENCES subgraph_user (id) ON DELETE SET NULL
-- );

-- -- Copy the data from the old table to the new table
-- INSERT INTO todo (id, uuid, title, description, goal_date, completed, completed_by, completed_at, created_by, updated_by, created_at, updated_at)
--   SELECT id, uuid, title, description, goal_date, completed, 
--     (SELECT id FROM subgraph_user WHERE uuid = todo_temp.completed_by), 
--     completed_at, 
--     (SELECT id FROM subgraph_user WHERE uuid = todo_temp.created_by), 
--     (SELECT id FROM subgraph_user WHERE uuid = todo_temp.updated_by),
--     created_at, updated_at FROM todo_temp;

-- -- Recreate the triggers
-- DROP TRIGGER IF EXISTS update_todo_updated_at;
-- CREATE TRIGGER update_todo_updated_at 
--   AFTER UPDATE ON todo
--   BEGIN
--     UPDATE todo SET updated_at = CURRENT_TIMESTAMP WHERE id = old.id;
--   END;

-- DROP TRIGGER IF EXISTS update_todo_completed_at;
-- CREATE TRIGGER update_todo_completed_at
--   AFTER UPDATE ON todo
--   FOR EACH ROW
--   WHEN OLD.completed = 0 AND NEW.completed = 1
--   BEGIN
--     UPDATE todo SET completed_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
--   END;

-- DROP TRIGGER IF EXISTS remove_todo_completed_at;
-- CREATE TRIGGER remove_todo_completed_at 
--   AFTER UPDATE ON todo
--   WHEN OLD.completed = 1 AND NEW.completed = 0
--   BEGIN
--     UPDATE todo SET completed_at = NULL WHERE id = NEW.id;
--   END;

-- DROP TRIGGER IF EXISTS update_todo_history_title;
-- CREATE TRIGGER update_todo_history_title
--   AFTER UPDATE ON todo
--   WHEN OLD.title <> NEW.title
--   BEGIN
--     INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'title', OLD.title, NEW.title);
--   END;

-- DROP TRIGGER IF EXISTS update_todo_history_description;
-- CREATE TRIGGER update_todo_history_description
--   AFTER UPDATE ON todo
--   WHEN OLD.description <> NEW.description
--   BEGIN
--     INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'description', OLD.description, NEW.description);
--   END;

-- DROP TRIGGER IF EXISTS update_todo_history_completed;
-- CREATE TRIGGER update_todo_history_completed
--   AFTER UPDATE ON todo
--   WHEN OLD.completed <> NEW.completed
--   BEGIN
--     INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'completed', OLD.completed, NEW.completed);
--   END;

-- DROP TRIGGER IF EXISTS update_todo_history_completed_at;
-- CREATE TRIGGER update_todo_history_completed_at
--   AFTER UPDATE ON todo
--   WHEN OLD.completed_at <> NEW.completed_at
--   BEGIN
--     INSERT INTO todo_history (todo_uuid, created_by,  property, old_value, new_value) VALUES (OLD.uuid, NEW.updated_by, 'completed_at', OLD.completed_at, NEW.completed_at);
--   END;

-- DROP TRIGGER IF EXISTS todo_created;
-- CREATE TRIGGER todo_created
-- AFTER INSERT ON todo
--   BEGIN
--     UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
--     UPDATE todo SET completed_at = CURRENT_TIMESTAMP WHERE id = NEW.id AND NEW.completed = 1;
--   END;

-- DROP TRIGGER IF EXISTS todo_access_insert;
-- CREATE TRIGGER todo_access_insert
--     AFTER INSERT ON todo
--     BEGIN
--         UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
--         INSERT INTO todo_access (user_uuid, todo_id)
--         VALUES (NEW.created_by, NEW.id);
--     END;

-- PRAGMA foreign_keys=on;
