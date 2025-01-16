---
title: 'Create Table'
sidebar:
  order: 5
---

 

Creating tables is a fundamental aspect of working with SQL databases. A table is a collection of related data held in a structured format within a database. It consists of columns and rows.





To create a table, you use the `CREATE TABLE` statement. The basic syntax is as follows:



```sql

CREATE TABLE table_name (

    column1 datatype constraints,

    column2 datatype constraints,

    ...

    columnN datatype constraints

);

```



- `table_name`: The name of the table you want to create.

- `column1, column2, ... columnN`: The names of the columns in the table.

- `datatype`: The type of data the column can hold (e.g., INTEGER, VARCHAR, DATE).

- `constraints`: Optional constraints like PRIMARY KEY, NOT NULL, UNIQUE, etc.





Here is an example of creating a table named `employees`:



```sql

CREATE TABLE employees (

    employee_id INT PRIMARY KEY,

    first_name VARCHAR(50) NOT NULL,

    last_name VARCHAR(50) NOT NULL,

    email VARCHAR(100) UNIQUE,

    hire_date DATE,

    salary DECIMAL(10, 2)

);

```



In this example:

- `employee_id` is an integer and the primary key.

- `first_name` and `last_name` are variable character fields with a maximum length of 50 characters and cannot be null.

- `email` is a variable character field with a maximum length of 100 characters and must be unique.

- `hire_date` is a date field.

- `salary` is a decimal field with up to 10 digits, including 2 decimal places.





When creating tables, consider the following:

- Choose appropriate data types for each column to ensure data integrity and optimize storage.

- Use constraints to enforce rules on the data, such as primary keys for unique identification and foreign keys for relationships between tables.

- Plan the table structure carefully to accommodate future data requirements and avoid the need for significant changes later.



By understanding and using the `CREATE TABLE` statement effectively, you can design robust and efficient database schemas.


