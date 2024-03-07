-- Add down migration script here
DROP TRIGGER IF EXISTS notification_created;
DROP TRIGGER IF EXISTS todo_updated_notification;
DROP TRIGGER IF EXISTS access_added_notification;
DROP TRIGGER IF EXISTS access_updated_notification;
DROP TRIGGER IF EXISTS access_removed_notification;
DROP TABLE notification;
DROP TABLE notification_message;


