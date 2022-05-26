-- If elections database does not exist it creates then uses
-- You cannot create a table that already exists though so..

-- CAREFUL
-- Should only use DROP when database has dummy data
DROP DATABASE IF EXISTS election

CREATE DATABASE election;
USE election;