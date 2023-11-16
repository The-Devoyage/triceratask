-- Add up migration script here
-- Create todo_access table
CREATE TABLE todo_access (
    id INT AUTO_INCREMENT PRIMARY KEY,
    todo_uuid CHAR(36) NOT NULL,
    user_uuid CHAR(36) NOT NULL,
    view BOOLEAN NOT NULL DEFAULT TRUE,
    edit BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid) ON DELETE CASCADE,
    FOREIGN KEY (todo_uuid) REFERENCES todo (uuid) ON DELETE CASCADE
);

-- After insert on todo, insert into todo_access
CREATE TRIGGER todo_access_insert
AFTER INSERT ON todo
FOR EACH ROW
INSERT INTO todo_access (user_uuid, todo_uuid)
VALUES (NEW.created_by, NEW.uuid);

-- Populate todo_access with existing todos
INSERT INTO todo_access (user_uuid, todo_uuid)
SELECT created_by, uuid
FROM todo;

