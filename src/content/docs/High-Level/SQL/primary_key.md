---
title: 'Primary Key'
sidebar:
  order: 9
---

 

A primary key is a column or a set of columns in a database table that uniquely identifies each record in the table. It is used to enforce data integrity and ensure that each record can be uniquely identified.



To define a primary key in SQL, you can use the `PRIMARY KEY` constraint when creating a table. For example:



```sql

CREATE TABLE employees (

  id INT PRIMARY KEY,

  name VARCHAR(50),

  age INT

);

```



In this example, the `id` column is defined as the primary key for the `employees` table. This means that each record in the table must have a unique value for the `id` column.



Primary keys have the following characteristics:



- They must contain unique values.

- They cannot contain NULL values.

- Each table can have only one primary key.



Primary keys are important for database performance and data integrity. They are used to create indexes, enforce referential integrity, and optimize query execution.



When designing a database schema, it is important to carefully choose the primary key for each table. Common choices for primary keys include auto-incrementing integers, natural keys (such as social security numbers or email addresses), or composite keys (using multiple columns).



In summary, a primary key is a crucial component of a database table that ensures each record can be uniquely identified. It is defined using the `PRIMARY KEY` constraint and has specific characteristics to enforce data integrity.





In some cases, a single column may not be sufficient to uniquely identify a record. In such scenarios, you can define a composite primary key, which consists of two or more columns. For example:



```sql

CREATE TABLE order_items (

  order_id INT,

  product_id INT,

  quantity INT,

  PRIMARY KEY (order_id, product_id)

);

```



In this example, the combination of `order_id` and `product_id` columns is used as the primary key for the `order_items` table. This ensures that each combination of `order_id` and `product_id` is unique within the table.





Selecting the appropriate primary key is a critical decision in database design. Here are some guidelines to help you choose the right primary key:



1. **Uniqueness**: Ensure that the primary key values are unique for each record.

2. **Non-nullability**: The primary key columns should not contain NULL values.

3. **Immutability**: Choose columns that are unlikely to change over time.

4. **Simplicity**: Prefer simple, single-column primary keys when possible.

5. **Performance**: Consider the impact on indexing and query performance.



By following these guidelines, you can design a robust and efficient database schema that maintains data integrity and supports optimal performance.



Remember to save the file after adding the content.