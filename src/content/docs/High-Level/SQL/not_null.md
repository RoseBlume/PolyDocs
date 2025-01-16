---
title: 'Not Null'
sidebar:
  order: 12
---

 

In SQL, the `NOT NULL` constraint is used to ensure that a column does not contain any null values. 



When a column is defined with the `NOT NULL` constraint, it means that every row in the table must have a value for that column. If a null value is inserted or updated into a column with the `NOT NULL` constraint, an error will occur.



Here's an example of creating a table with a column that has the `NOT NULL` constraint:



```sql

CREATE TABLE employees (

  id INT NOT NULL,

  name VARCHAR(50) NOT NULL,

  age INT

);

```



In the above example, both the `id` and `name` columns have the `NOT NULL` constraint. This means that every row in the `employees` table must have a non-null value for both `id` and `name`.



If you try to insert a row without providing a value for the `id` or `name` column, an error will be thrown.



The `NOT NULL` constraint is useful when you want to enforce data integrity and ensure that certain columns always have values.


