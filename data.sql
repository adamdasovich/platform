CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    cat_name VARCHAR(45),
    cat_desc VARCHAR(200),
    Type VARCHAR(20)
);

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(200),
    price FLOAT,
    category_id INTEGER REFERENCES category (id)
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customer (id),
    cart_status INTEGER,
    delivery_date TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_date TIMESTAMP,
    order_total FLOAT,
    customer_id INTEGER REFERENCES customer (id),
    shipping_date TIMESTAMP,
    is_delivered VARCHAR(20)
);

-- Connecting cart and product tables using a many-to-many relationship
CREATE TABLE cart_product (
    cart_id INTEGER REFERENCES cart (id),
    product_id INTEGER REFERENCES product (id),
    PRIMARY KEY (cart_id, product_id)
);