CREATE DATABASE IF NOT EXISTS gymbuddy;

use gymbuddy;

CREATE TABLE IF NOT EXISTS routines_v0 (
  id INT PRIMARY KEY,
  weekDays VARCHAR(7),
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS exercises_v0 (
  exerciseName VARCHAR(100) NOT NULL UNIQUE,
  routine_id INT NOT NULL,
  setNumber INT NOT NULL,
  maxRep INT NOT NULL,
  initialWeight INT NOT NULL,
  PRIMARY KEY (exerciseName, routine_id),
  FOREIGN KEY (routine_id) REFERENCES routines_v0(id)
);
