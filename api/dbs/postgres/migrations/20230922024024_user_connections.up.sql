-- Add up migration script here
-- Add up migration script here
CREATE TABLE IF NOT EXISTS user_connection (
  id SERIAL PRIMARY KEY,
  uuid UUID UNIQUE DEFAULT uuid_generate_v4() NOT NULL,
  identifier VARCHAR(255) NOT NULL,
  user_uuid UUID,
  connected_user_uuid UUID,
  status BOOLEAN NOT NULL DEFAULT FALSE,
  accepted BOOLEAN NOT NULL DEFAULT FALSE,
  accepted_at TIMESTAMPTZ,
  created_by UUID NOT NULL,
  updated_by UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  revoked BOOLEAN NOT NULL DEFAULT FALSE,
  revoked_at TIMESTAMPTZ,
  FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid),
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid)
);

CREATE UNIQUE INDEX IF NOT EXISTS user_connection_user_uuid_connected_user_uuid_uindex ON user_connection (user_uuid, connected_user_uuid);

-- When accepted changes to true, status should be true
CREATE OR REPLACE FUNCTION user_connection_accepted_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT OLD.accepted AND NEW.accepted THEN
    NEW.status := TRUE;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_connection_accepted_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
EXECUTE FUNCTION user_connection_accepted_trigger_function();

-- When insert or update, updated_at should be updated
CREATE OR REPLACE FUNCTION user_connection_updated_at_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_connection_updated_at_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
EXECUTE FUNCTION user_connection_updated_at_trigger_function();

-- After insert, see if identifier matches a subgraph_user and populate the connected_user_uuid
-- The trigger for user_connection_identifier_subgraph_user_trigger might not be necessary as it could lead to integrity issues. Please ensure the design is suitable for your specific use case.

-- When revoked changes to true, revoked_at should be updated
CREATE OR REPLACE FUNCTION user_connection_revoked_at_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT OLD.revoked AND NEW.revoked THEN
    NEW.revoked_at := CURRENT_TIMESTAMP;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_connection_revoked_at_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
EXECUTE FUNCTION user_connection_revoked_at_trigger_function();

-- When revoked changes to false, revoked_at should be null
CREATE OR REPLACE FUNCTION user_connection_revoked_at_null_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.revoked AND NOT NEW.revoked THEN
    NEW.revoked_at := NULL;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_connection_revoked_at_null_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
EXECUTE FUNCTION user_connection_revoked_at_null_trigger_function();

-- When revoked changes to true, accepted should be false
CREATE OR REPLACE FUNCTION user_connection_revoked_accepted_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT OLD.revoked AND NEW.revoked THEN
    NEW.accepted := FALSE;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_connection_revoked_accepted_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
EXECUTE FUNCTION user_connection_revoked_accepted_trigger_function();

-- When accepted changes to true, revoked should be false and revoked_at should be null
CREATE OR REPLACE FUNCTION user_connection_accepted_revoked_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT OLD.accepted AND NEW.accepted THEN
    NEW.revoked := FALSE;
    NEW.revoked_at := NULL;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_connection_accepted_revoked_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
EXECUTE FUNCTION user_connection_accepted_revoked_trigger_function();

-- When accepted changes to true, accepted_at should be updated
CREATE OR REPLACE FUNCTION user_connection_accepted_at_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
  IF NOT OLD.accepted AND NEW.accepted THEN
    NEW.accepted_at := CURRENT_TIMESTAMP;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_connection_accepted_at_trigger
BEFORE UPDATE ON user_connection
FOR EACH ROW
EXECUTE FUNCTION user_connection_accepted_at_trigger_function();

