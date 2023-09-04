CREATE TABLE IF NOT EXISTS todo (
    id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    title text NOT NULL,
    description text NOT NULL,
    completed boolean NOT NULL DEFAULT false,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

