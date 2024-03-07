-- Add up migration script here

DROP TABLE todo_access;

CREATE TABLE todo_access (
    id integer PRIMARY KEY AUTOINCREMENT,
    uuid UUID,
    todo INT NOT NULL,
    user INT NOT NULL,
    edit BOOLEAN NOT NULL DEFAULT TRUE, 
    manage BOOLEAN DEFAULT true,
    revoked BOOLEAN DEFAULT false,
    created_by INT NOT NULL,
    updated_by INT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (todo) REFERENCES "todo" (id),
    FOREIGN KEY (user) REFERENCES "subgraph_user" (id),
    FOREIGN KEY (created_by) REFERENCES "subgraph_user" (id),
    FOREIGN KEY (updated_by) REFERENCES "subgraph_user" (id)
);

CREATE UNIQUE INDEX IF NOT EXISTS todo_access_user_uuid_todo_uuid ON todo_access (user, todo);

DROP TRIGGER IF EXISTS create_todo_access;

CREATE TRIGGER create_todo_access
  AFTER INSERT ON todo_access
  BEGIN
    UPDATE todo_access SET uuid = uuid4() WHERE id = NEW.id;
  END;

-- Populate todo_access with existing todos
INSERT INTO todo_access (todo, user, created_by, updated_by)
  SELECT 
    id, 
    (SELECT id FROM subgraph_user WHERE uuid = todo.created_by),
    (SELECT id FROM subgraph_user WHERE uuid = todo.created_by),
    (SELECT id FROM subgraph_user WHERE uuid = todo.updated_by)
  FROM todo;
