---
title: 'Select Into'
sidebar:
  order: 21
---

 

The `SELECT INTO` statement in SQL is used to create a new table and insert data into it by selecting data from an existing table. This can be particularly useful for creating backup copies of tables or for creating tables to hold the results of complex queries.





```sql

SELECT column1, column2, ...

INTO new_table

FROM existing_table

WHERE condition;

```



- `column1, column2, ...`: The columns that you want to copy to the new table.

- `new_table`: The name of the new table to be created.

- `existing_table`: The name of the existing table from which to select data.

- `condition`: An optional condition to filter the data that is inserted into the new table.





Suppose we have a table called `employees` and we want to create a backup of this table. We can use the `SELECT INTO` statement as follows:



```sql

SELECT *

INTO employees_backup

FROM employees;

```



This statement creates a new table called `employees_backup` and inserts all the data from the `employees` table into it.





You can also use conditions to filter the data that is inserted into the new table. For example, if you only want to copy employees from the `employees` table who work in the 'Sales' department, you can use the following query:



```sql

SELECT *

INTO sales_employees

FROM employees

WHERE department = 'Sales';

```



This statement creates a new table called `sales_employees` and inserts only the rows from the `employees` table where the department is 'Sales'.





The `SELECT INTO` statement is a powerful tool for creating new tables and copying data from existing tables. It can be used for a variety of purposes, such as creating backups, archiving data, or preparing data for analysis.


