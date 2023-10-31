-- Create the todos table
CREATE TABLE IF NOT EXISTS todo (
    id integer PRIMARY KEY AUTOINCREMENT,
    uuid uuid UNIQUE,
    title text NOT NULL,
    description text NOT NULL,
    completed boolean NOT NULL DEFAULT false,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    completed_by uuid,
    created_by uuid,
    updated_by uuid,
    FOREIGN KEY (completed_by) REFERENCES subgraph_user (uuid),
    FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid),
    FOREIGN KEY (updated_by) REFERENCES subgraph_user (uuid)
);

-- After create on todo, create the uuid
CREATE TRIGGER IF NOT EXISTS create_todo_uuid
  AFTER INSERT ON todo
  BEGIN
    UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
  END;


-- Create the subgraph_user table
CREATE TABLE IF NOT EXISTS subgraph_user (
  uuid uuid NOT NULL UNIQUE,
  identifier TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL
);


-- Trigger to update the updated_at column
CREATE TRIGGER IF NOT EXISTS update_todo_updated_at 
  AFTER UPDATE ON todo
  BEGIN
    UPDATE todo SET updated_at = CURRENT_TIMESTAMP WHERE id = old.id;
  END;


-- Trigger to update the completed_at column
CREATE TRIGGER IF NOT EXISTS update_todo_completed_at
AFTER UPDATE ON todo
FOR EACH ROW
WHEN OLD.completed = 0 AND NEW.completed = 1
  BEGIN
    UPDATE todo SET completed_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

-- Trigger to remove the completed_at column
CREATE TRIGGER IF NOT EXISTS remove_todo_completed_at 
AFTER UPDATE ON todo
WHEN OLD.completed = 1 AND NEW.completed = 0
  BEGIN
    UPDATE todo SET completed_at = NULL WHERE id = NEW.id;
  END;
