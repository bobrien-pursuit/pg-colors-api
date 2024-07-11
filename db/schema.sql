DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    is_favorite BOOLEAN
);