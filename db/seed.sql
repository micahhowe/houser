CREATE TABLE house(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zipcode NUMERIC
);

INSERT INTO house (name, address, city, state, zipcode)
VALUES ('big mommas house', '567 Windy Road', 'Nowhere', 'Ohio', 84578);

ALTER TABLE house
ADD price NUMERIC,
ADD monthly_morgage_amount NUMERIC,
ADD desired_rent NUMERIC;