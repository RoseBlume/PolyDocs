---
title: 'Unique'
sidebar:
  order: 11
---

 



In SQL, a unique constraint is used to ensure that the values in a column or a group of columns are unique across the table. This means that no two rows can have the same values in the specified column(s).





The syntax for creating a unique constraint in SQL is as follows:



```sql

ALTER TABLE table_name

ADD CONSTRAINT constraint_name UNIQUE (column1, column2, ...)

```





Let's consider a table called `employees` with the following structure:



```sql

CREATE TABLE employees (

  id INT PRIMARY KEY,

  name VARCHAR(50),

  email VARCHAR(100) UNIQUE

);

```



In the above example, the `email` column has a unique constraint applied to it. This ensures that each email address in the table is unique.





- Ensures data integrity by preventing duplicate values in a column or group of columns.

- Provides a way to enforce business rules and constraints on the data.

- Improves query performance by allowing the database to create an index on the unique column(s).





Unique constraints are an important feature in SQL that help maintain data integrity and enforce uniqueness in a table. By using unique constraints, you can ensure that your data remains consistent and accurate.
