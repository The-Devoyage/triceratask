-- Add up migration script here

-- After update on todo, create goal_date history
CREATE TRIGGER IF NOT EXISTS update_todo_history_goal_date
  AFTER UPDATE ON todo
  FOR EACH ROW
  WHEN OLD.goal_date IS NULL AND NEW.goal_date IS NOT NULL OR OLD.goal_date <> NEW.goal_date
  BEGIN
    INSERT INTO todo_history (todo, created_by, property, old_value, new_value) VALUES (OLD.id, NEW.updated_by, 'goal_date', OLD.goal_date, NEW.goal_date);
  END;

-- After update on todo, create history - completed_by
CREATE TRIGGER IF NOT EXISTS update_todo_history_completed_by
  AFTER UPDATE ON todo
  WHEN OLD.completed_by <> NEW.completed_by
  BEGIN
    INSERT INTO todo_history (todo, created_by, property, old_value, new_value) 
    VALUES (
      OLD.id, 
      NEW.updated_by, 
      'completed_by', 
      (SELECT identifier FROM subgraph_user WHERE id = OLD.completed_by),
      (SELECT identifier FROM subgraph_user WHERE id = NEW.completed_by)
    );
  END;
-- After update on todo, create history - deleted_at
CREATE TRIGGER IF NOT EXISTS update_todo_history_deleted_at
  AFTER UPDATE ON todo
  FOR EACH ROW
  WHEN OLD.deleted_at IS NULL AND NEW.deleted_at IS NOT NULL OR OLD.deleted_at <> NEW.deleted_at
  BEGIN
    INSERT INTO todo_history (todo, created_by, property, old_value, new_value) VALUES (OLD.id, NEW.updated_by, 'deleted_at', OLD.deleted_at, NEW.deleted_at);
  END;

-- Drop the completed at trigger - It is not working, and we have the completed column history.
DROP TRIGGER IF EXISTS update_todo_history_completed_at;

