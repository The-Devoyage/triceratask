-- Add down migration script here
DROP TRIGGER IF EXISTS todo_updated_notification;

CREATE TRIGGER todo_updated_notification 
AFTER UPDATE ON todo
WHEN 
  OLD.title <> NEW.title 
    OR OLD.description <> NEW.description 
    OR OLD.completed <> NEW.completed 
    OR OLD.goal_date <> NEW.goal_date
BEGIN
    INSERT INTO notification (user, notification_message, todo, created_by) 
    SELECT DISTINCT todo_access.user, notification_message.id, NEW.id, NEW.updated_by
    FROM todo_access
      INNER JOIN notification_message ON notification_message.identifier = "todo_modified"
      WHERE todo_access.todo = NEW.id AND todo_access.user <> NEW.updated_by;
END 
