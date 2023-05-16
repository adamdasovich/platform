CREATE TABLE "customers" (
  id SERIAL PRIMARY KEY,
  name varchar(40),
  address varchar(50),
  email varchar(50)
);

CREATE TABLE "products" (
  id SERIAL PRIMARY KEY,
  name varchar(40),
  description varchar(200),
  price money,
  customer_id integer
);

CREATE TABLE "carts" (
  id SERIAL PRIMARY KEY,
  customer_id integer,
  order_id integer,
  create_date date,
  CONSTRAINT "FK_carts.customer_id"
    FOREIGN KEY ("customer_id")
      REFERENCES "customers"("id")
);

CREATE TABLE "orders" (
  id SERIAL PRIMARY KEY,
  cart_id integer,
  order_date date,
  total_amount money
);

CREATE INDEX "Key" ON  "orders" ("order_date", "total_amount");

