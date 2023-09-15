-- Add up migration script here
CREATE TABLE IF NOT EXISTS subgraph_user (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  identifier TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL
);
