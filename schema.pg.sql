CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  number_of_members INT NOT NULL
);

CREATE TABLE store (
  id SERIAL PRIMARY KEY,
  team_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  location TEXT NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);

CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  team_id INT NOT NULL,
  user_id uuid NOT NULL,
  store_id INT NOT NULL,
  is_active BOOLEAN NOT NULL,
  role VARCHAR(255) NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
  FOREIGN KEY (store_id) REFERENCES store(id) ON DELETE CASCADE
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  color VARCHAR(255),
  team_id INT NOT NULL,
  is_active BOOLEAN NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);

CREATE TABLE partner (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  phone BIGINT NOT NULL,
  email VARCHAR(255),
  team_id INT NOT NULL,
  is_active BOOLEAN NOT NULL,
  type VARCHAR(255) NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  identifier INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  price_cost NUMERIC(10,2) NOT NULL,
  price_sale NUMERIC(10,2),
  stock_quantity INT NOT NULL,
  min_stock_quantity INT,
  category_id INT,
  supplier_id INT,
  store_id INT NOT NULL,
  is_active BOOLEAN NOT NULL,
  unit VARCHAR(255),
  type VARCHAR(255) NOT NULL,
  image TEXT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL,
  FOREIGN KEY (supplier_id) REFERENCES partner(id) ON DELETE SET NULL,
  FOREIGN KEY (store_id) REFERENCES store(id) ON DELETE CASCADE
);

CREATE TABLE product_option (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  identifier VARCHAR(255) NOT NULL,
  product_id INT NOT NULL,
  supplier_id INT,
  price_cost NUMERIC(10,2) NOT NULL,
  price_sale NUMERIC(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
  FOREIGN KEY (supplier_id) REFERENCES partner(id) ON DELETE SET NULL
);

CREATE TABLE sale (
  id SERIAL PRIMARY KEY,
  receipt_no VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  discount NUMERIC(10,2) NOT NULL,
  advance NUMERIC(10,2) NOT NULL, 
  item_numbers INT NOT NULL,
  customer_id INT,
  store_id INT NOT NULL,
  status VARCHAR(255) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES partner(id) ON DELETE SET NULL,
  FOREIGN KEY (store_id) REFERENCES store(id) ON DELETE CASCADE
);

CREATE TABLE sale_item (
  id SERIAL PRIMARY KEY,
  sale_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  discount NUMERIC(10,2) NOT NULL DEFAULT 0,
  FOREIGN KEY (sale_id) REFERENCES sale(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE RESTRICT
);

CREATE TABLE stock_replenishment (
  id SERIAL PRIMARY KEY,
  supplier_id INT,
  store_id INT NOT NULL,
  total_amount_order NUMERIC(10,2) NOT NULL,
  pay_amount NUMERIC(10,2) NOT NULL,
  status VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL,
  FOREIGN KEY (supplier_id) REFERENCES partner(id) ON DELETE SET NULL,
  FOREIGN KEY (store_id) REFERENCES store(id) ON DELETE CASCADE
);

CREATE TABLE stock_replenishment_item (
  id SERIAL PRIMARY KEY,
  stock_id INT NOT NULL,
  product_id INT NOT NULL,
  initial_quantity INT NOT NULL,
  new_quantity INT NOT NULL,
  price_cost NUMERIC(10,2) NOT NULL,
  price_sale NUMERIC(10,2) NOT NULL,
  date TIMESTAMP NOT NULL,
  FOREIGN KEY (stock_id) REFERENCES stock_replenishment(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE RESTRICT  
);

CREATE TABLE price_history (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  old_price_cost NUMERIC(10,2) NOT NULL,
  old_price_sale NUMERIC(10,2) NOT NULL,
  new_price_cost NUMERIC(10,2) NOT NULL, 
  new_price_sale NUMERIC(10,2) NOT NULL,
  supplier_id INT,
  date TIMESTAMP NOT NULL,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
  FOREIGN KEY (supplier_id) REFERENCES partner(id) ON DELETE SET NULL
);