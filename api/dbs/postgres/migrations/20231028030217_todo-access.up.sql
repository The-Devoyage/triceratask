-- Up Migration

CREATE TABLE todo_access (
    id SERIAL PRIMARY KEY,
    todo_uuid UUID NOT NULL,
    user_uuid UUID NOT NULL,
    view BOOLEAN NOT NULL DEFAULT TRUE,
    edit BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid) ON DELETE CASCADE,
    FOREIGN KEY (todo_uuid) REFERENCES todo (uuid) ON DELETE CASCADE
);

-- After insert on todo, insert into todo_access
CREATE OR REPLACE FUNCTION todo_access_insert_function()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO todo_access (user_uuid, todo_uuid)
    VALUES (NEW.created_by, NEW.uuid);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER todo_access_insert
AFTER INSERT ON todo
FOR EACH ROW
EXECUTE FUNCTION todo_access_insert_function();

-- Populate todo_access with existing todos
INSERT INTO todo_access (user_uuid, todo_uuid)
SELECT created_by, uuid
FROM todo;

