---
title: 'Insert Into Select'
sidebar:
  order: 17
---

 

The `INSERT INTO SELECT` statement is used to insert data into a table by selecting data from another table. This is useful for copying data from one table to another or for archiving data.





```sql

INSERT INTO target_table (column1, column2, column3, ...)

SELECT column1, column2, column3, ...

FROM source_table

WHERE condition;

```



- `target_table`: The table where the data will be inserted.

- `source_table`: The table from which the data will be selected.

- `column1, column2, column3, ...`: The columns to be inserted and selected.

- `condition`: Optional. The condition to filter the data to be selected.





Suppose we have two tables, `employees` and `employees_archive`. We want to copy all employees who joined before the year 2020 from the `employees` table to the `employees_archive` table.



```sql

INSERT INTO employees_archive (id, name, position, join_date)

SELECT id, name, position, join_date

FROM employees

WHERE join_date < '2020-01-01';

```



In this example:

- We are inserting data into the `employees_archive` table.

- We are selecting data from the `employees` table.

- We are filtering the data to include only employees who joined before January 1, 2020.





- The columns in the `INSERT INTO` statement must match the columns in the `SELECT` statement in terms of order and data type.

- If the target table has constraints (e.g., primary key, foreign key), ensure that the data being inserted does not violate these constraints.



By using the `INSERT INTO SELECT` statement, you can efficiently copy and transform data between tables in your SQL database.
