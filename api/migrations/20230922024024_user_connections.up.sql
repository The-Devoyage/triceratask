-- Add up migration script here
CREATE TABLE IF NOT EXISTS user_connections (
  id INTEGER PRIMARY KEY,
  uuid UUID,
  user_uuid UUID,
  connected_user_uuid uuid NOT NULL,
  created_by uuid NOT NULL,
  updated_by uuid NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_uuid) REFERENCES subgraph_user (uuid),
  FOREIGN KEY (created_by) REFERENCES subgraph_user (uuid)
);

