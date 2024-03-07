-- Add up migration script here
CREATE TABLE notification (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uuid UUID UNIQUE,
  user INTEGER NOT NULL,
  notification_message ID NOT NULL,
  todo INTEGER,
  read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by INTEGER NOT NULL,
  FOREIGN KEY (user) REFERENCES subgraph_user (id) ON DELETE CASCADE,
  FOREIGN KEY (todo) REFERENCES todo (id) ON DELETE CASCADE
);

-- Create reference table to store the notification_messages that will be sent to the user
CREATE TABLE notification_message (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  identifier TEXT NOT NULL UNIQUE,
  message TEXT NOT NULL
);

-- Insert options into notification_message table
INSERT INTO notification_message (identifier, message) VALUES ("todo_modified", "Task modified.");
INSERT INTO notification_message (identifier, message) VALUES ("todo_shared", "Task shared with you.");
INSERT INTO notification_message (identifier, message) VALUES ("todo_access_updated", "Task access updated.");
INSERT INTO notification_message (identifier, message) VALUES ("todo_access_revoked", "Task access revoked.");
INSERT INTO notification_message (identifier, message) VALUES ("todo_access_reenabled", "Task access re-enabled.");

-- Update UUID when notification is created
DROP TRIGGER IF EXISTS notification_created;
CREATE TRIGGER notification_created
AFTER INSERT ON notification
FOR EACH ROW
BEGIN
  UPDATE notification SET uuid = uuid4() WHERE id = NEW.id;
END;

-- Add notification when todo is updated
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
END;

-- Add notification when todo is shared with a user
DROP TRIGGER IF EXISTS access_added_notification;
CREATE TRIGGER access_added_notification
AFTER INSERT ON todo_access
FOR EACH ROW
  BEGIN
  INSERT INTO notification (user, notification_message, todo, created_by)
  SELECT DISTINCT todo_access.user, notification_message.id, todo_access.todo, todo_access.created_by
  FROM todo_access
    INNER JOIN notification_message ON notification_message.identifier = "todo_shared" 
    WHERE todo_access.todo = NEW.todo AND todo_access.user <> NEW.created_by;
END;

-- Add notification when todo access is updated
DROP TRIGGER IF EXISTS access_updated_notification;
CREATE TRIGGER access_updated_notification
AFTER UPDATE ON todo_access
WHEN OLD.edit <> NEW.edit OR OLD.manage <> NEW.manage
BEGIN
  INSERT INTO notification (user, notification_message, todo, created_by)
  SELECT DISTINCT todo_access.user, notification_message.id, todo_access.todo, todo_access.updated_by
  FROM todo_access
    INNER JOIN notification_message ON notification_message.identifier = "todo_access_updated"
    WHERE todo_access.todo = NEW.todo AND todo_access.user <> NEW.updated_by AND todo_access.revoked = 0;
END;


-- Add notification when todo is unshared with a user
DROP TRIGGER IF EXISTS access_removed_notification;
CREATE TRIGGER access_removed_notification
AFTER UPDATE ON todo_access
WHEN NEW.revoked = 1 AND OLD.revoked = 0
BEGIN
  INSERT INTO notification (user, notification_message, todo, created_by)
  SELECT DISTINCT todo_access.user, notification_message.id, todo_access.todo, todo_access.updated_by
  FROM todo_access
    INNER JOIN notification_message ON notification_message.identifier = "todo_access_revoked"
    WHERE todo_access.todo = OLD.todo AND todo_access.user <> OLD.updated_by;
END;

-- Add notification when access is re-enabled
DROP TRIGGER IF EXISTS access_reenabled_notification;
CREATE TRIGGER access_reenabled_notification
AFTER UPDATE ON todo_access
WHEN NEW.revoked = 0 AND OLD.revoked = 1
BEGIN
  INSERT INTO notification (user, notification_message, todo, created_by)
  SELECT DISTINCT todo_access.user, notification_message.id, todo_access.todo, todo_access.updated_by
  FROM todo_access
    INNER JOIN notification_message ON notification_message.identifier = "todo_access_reenabled"
    WHERE todo_access.todo = OLD.todo AND todo_access.user <> OLD.updated_by;
END;
