-- Create the subgraph_user table
CREATE TABLE IF NOT EXISTS subgraph_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) UNIQUE DEFAULT (UUID()) NOT NULL,
  identifier VARCHAR(42) UNIQUE NOT NULL,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

-- Create the todo table
CREATE TABLE IF NOT EXISTS todo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid CHAR(36) UNIQUE NOT NULL DEFAULT (UUID()),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    completed TINYINT(1) NOT NULL DEFAULT 0,
    completed_at TIMESTAMP,
    completed_by CHAR(36),
    created_by CHAR(36),
    updated_by CHAR(36),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (completed_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES subgraph_user (uuid) ON DELETE SET NULL
);

-- Trigger to update the updated_at column
CREATE TRIGGER update_todo_updated_at BEFORE UPDATE ON todo
FOR EACH ROW
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END;

-- Trigger to update the completed_at column
CREATE TRIGGER update_todo_completed_at BEFORE UPDATE ON todo
FOR EACH ROW
BEGIN
    IF OLD.completed = 0 AND NEW.completed = 1 THEN
        SET NEW.completed_at = CURRENT_TIMESTAMP;
    END IF;
END;

-- Trigger to remove the completed_at column
CREATE TRIGGER update_todo_remove_completed_at BEFORE UPDATE ON todo
FOR EACH ROW
BEGIN
    IF OLD.completed = 1 AND NEW.completed = 0 THEN
        SET NEW.completed_at = NULL;
    END IF;
END;

