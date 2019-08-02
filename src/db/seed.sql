CREATE TABLE house(
  id SERIAL PRIMARY KEY,
  name varchar(50),
  address VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zip VARCHAR(100)
);

INSERT INTO house (name, address, city, state, zip)
VALUES (350, '123 Circle Road');