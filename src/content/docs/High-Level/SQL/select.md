---
title: 'Select'
sidebar:
  order: 18
---

 

The `SELECT` statement is used to retrieve data from a database. It allows you to specify which columns you want to retrieve from a table. You can select one or multiple columns by separating them with commas.



To use the `SELECT` statement, you need to specify the table name from which you want to retrieve data. This is done using the `FROM` keyword followed by the table name.



For example, to select all columns from a table called `employees`, the SQL query would be:



```sql

SELECT *

FROM employees;

```



You can also specify specific columns to retrieve by listing them after the `SELECT` keyword. For example, to select only the `name` and `age` columns from the `employees` table, the SQL query would be:



```sql

SELECT name, age

FROM employees;

```



Additionally, you can use the `DISTINCT` keyword to retrieve unique values from a column. For example, to select all unique values from the `city` column in the `employees` table, the SQL query would be:



```sql

SELECT DISTINCT city

FROM employees;

```



These are just some basic examples of using the `SELECT` statement in SQL. There are many more advanced features and clauses that can be used to retrieve and manipulate data.