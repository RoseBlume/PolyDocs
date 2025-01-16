---
title: 'Insert Into'
sidebar:
  order: 16
---

 

The `INSERT INTO` statement is used to insert new records into a table in a database. It specifies the table name and the columns to insert data into. The `VALUES` keyword is followed by a list of values to be inserted into the corresponding columns.



For example, to insert a new record into a table called `employees` with columns `id`, `name`, and `salary`, you can use the following SQL statement:



```sql

INSERT INTO employees (id, name, salary)

VALUES (1, 'John Doe', 50000);

```



This will insert a new record with an `id` of 1, a `name` of 'John Doe', and a `salary` of 50000 into the `employees` table.



You can also insert multiple records at once by specifying multiple sets of values separated by commas:



```sql

INSERT INTO employees (id, name, salary)

VALUES (2, 'Jane Smith', 60000),

  (3, 'Mike Johnson', 55000),

  (4, 'Emily Davis', 52000);

```



This will insert three new records into the `employees` table.



Remember to ensure that the values you are inserting match the data types of the corresponding columns in the table.



For more information on the `INSERT INTO` statement and other SQL commands, refer to the documentation of your specific database management system.
