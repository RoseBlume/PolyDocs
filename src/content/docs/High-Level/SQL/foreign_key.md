---
title: 'Foreign Key'
sidebar:
  order: 10
---

 

In SQL, a foreign key is a field or a combination of fields that is used to establish a link between two tables. It creates a relationship between the tables based on the values of the foreign key and the primary key of another table.





Foreign keys are used to enforce referential integrity in a database. They ensure that the values in the foreign key column(s) of a table match the values in the primary key column(s) of another table. This helps maintain data consistency and prevents orphaned records.





To create a foreign key, you need to specify the column(s) that will act as the foreign key in the referencing table, and the column(s) in the referenced table that will be referenced by the foreign key.



The syntax for creating a foreign key constraint in SQL is as follows:



```sql

ALTER TABLE referencing_table

ADD CONSTRAINT constraint_name

FOREIGN KEY (referencing_column(s))

REFERENCES referenced_table(referenced_column(s));

```





Let's say we have two tables: `orders` and `customers`. The `orders` table has a foreign key column `customer_id` that references the primary key column `id` in the `customers` table.



```sql

CREATE TABLE customers (

  id INT PRIMARY KEY,

  name VARCHAR(50)

);



CREATE TABLE orders (

  id INT PRIMARY KEY,

  order_number VARCHAR(10),

  customer_id INT,

  FOREIGN KEY (customer_id) REFERENCES customers(id)

);

```



In this example, the foreign key constraint ensures that the `customer_id` values in the `orders` table exist in the `id` column of the `customers` table.





Foreign keys are an essential concept in SQL databases. They establish relationships between tables and enforce referential integrity. By using foreign keys, you can maintain data consistency and prevent data inconsistencies.


