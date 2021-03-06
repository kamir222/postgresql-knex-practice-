CREATE TABLE famous_people (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  birthdate DATE
);

INSERT INTO famous_people (first_name, last_name, birthdate)
  VALUES ('Abraham', 'Lincoln', '1809-02-12');
INSERT INTO famous_people (first_name, last_name, birthdate)
  VALUES ('Mahatma', 'Gandhi', '1869-10-02');
INSERT INTO famous_people (first_name, last_name, birthdate)
  VALUES ('Paul', 'Rudd', '1969-04-06');


SELECT * FROM famous_people; -- should give us back all 3
SELECT * FROM famous_people WHERE birthdate >= '1920-01-01';
SELECT * FROM famous_people WHERE birthdate < '1920-01-01';
