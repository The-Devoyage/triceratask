-- Add up migration script here
CREATE TABLE todo_access (
    id integer PRIMARY KEY AUTOINCREMENT,
    todo_uuid INT NOT NULL,
    user_uuid INT NOT NULL,
    view BOOLEAN NOT NULL DEFAULT TRUE,
    edit BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid),
    FOREIGN KEY (todo_uuid) REFERENCES todo (uuid)
);

-- After insert on todo, insert into todo_access
CREATE TRIGGER todo_access_insert
    AFTER INSERT ON todo
    BEGIN
        INSERT INTO todo_access (user_uuid, todo_uuid)
        VALUES (NEW.user_uuid, NEW.uuid);
    END;

-- Populate todo_access with existing todos
INSERT INTO todo_access (user_uuid, todo_uuid)
  SELECT created_by, uuid
  FROM todo;

