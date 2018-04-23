CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id	int(100)  NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity int(100),
	PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (401, "Manie's Walnuts", "Food", 2.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (402, "Resuable Glass Straws", "Kitchen", 8.99, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (403, "LeLo Computer Monitor", "Computers", 256, 43);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (404, "Big Magic", "Books & Magazines", 11.99, 2000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (405, "Dwell", "Books & Magazines", 7.99, 8000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (406, "#2 Pencils", "Education", 1.99, 4000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (407, "Heti Speakers", "Computers", 499, 87);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (408, "The Backpack", "Bags", 267, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (409, "Best Glue Ever", "Supplies", 1.50, 4500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (410, "Coffee to Go", "Food", 18.50, 390);