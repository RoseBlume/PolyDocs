---
title: 'Update'
sidebar:
  order: 22
---

 



The `UPDATE` statement is used to modify existing records in a table. It allows you to change the values of one or more columns in a specified table based on a condition.



Here's the syntax of the `UPDATE` statement:



```sql

UPDATE table_name

SET column1 = value1, column2 = value2, ...

WHERE condition;

```



- `table_name`: The name of the table you want to update.

- `column1`, `column2`, ...: The columns you want to update and their new values.

- `value1`, `value2`, ...: The new values you want to set for the columns.

- `condition`: The condition that specifies which rows to update. If omitted, all rows in the table will be updated.



For example, let's say we have a table called `employees` with columns `id`, `name`, and `salary`. We want to update the salary of an employee with `id` 1 to 5000. Here's how we can do it:



```sql

UPDATE employees

SET salary = 5000

WHERE id = 1;

```



This will update the `salary` column of the employee with `id` 1 to 5000.



Remember to always include a `WHERE` clause in your `UPDATE` statement to avoid unintentionally updating all rows in the table.



That's it! You now know how to use the `UPDATE` statement in SQL to modify existing records in a table.