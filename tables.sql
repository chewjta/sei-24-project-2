CREATE TABLE IF NOT EXISTS questions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    topic TEXT,
    question TEXT,
    markdown TEXT,
    vote INTEGER
);

CREATE TABLE IF NOT EXISTS answers (
    id SERIAL PRIMARY KEY,
    question_id INTEGER,
    user_id INTEGER,
    answer TEXT,
    verified TEXT,
    markdown TEXT,
    vote INTEGER
);

CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    type TEXT
);

