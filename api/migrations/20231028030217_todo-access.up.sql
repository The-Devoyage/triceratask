-- Add up migration script here
CREATE TABLE todo_access (
    id integer PRIMARY KEY AUTOINCREMENT,
    todo_id INT NOT NULL,
    user_uuid UUID NOT NULL,
    view BOOLEAN NOT NULL DEFAULT TRUE,
    edit BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (todo_id) REFERENCES todo (id),
    FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid)
);

-- Drop trigger create_todo_uuid
DROP TRIGGER IF EXISTS create_todo_uuid;

-- After insert on todo, insert into todo_access
CREATE TRIGGER todo_access_insert
    AFTER INSERT ON todo
    BEGIN
        UPDATE todo SET uuid = uuid4() WHERE id = NEW.id;
        INSERT INTO todo_access (user_uuid, todo_id)
        VALUES (NEW.created_by, NEW.id);
    END;

-- Populate todo_access with existing todos
INSERT INTO todo_access (user_uuid, todo_id)
  SELECT created_by, id
  FROM todo;

