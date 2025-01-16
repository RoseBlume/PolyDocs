---
title: 'Where'
sidebar:
  order: 24
---

 



In SQL, the `WHERE` clause is used to filter records based on a specified condition. It allows you to retrieve only the rows that meet the specified criteria.



The syntax of the `WHERE` clause is as follows:



```sql

SELECT column1, column2, ...

FROM table_name

WHERE condition;

```



Here, `table_name` is the name of the table from which you want to retrieve data. `condition` is the condition that must be met for a row to be included in the result set.



For example, let's say we have a table called `employees` with columns `id`, `name`, and `salary`. If we want to retrieve all the employees whose salary is greater than 5000, we can use the following query:



```sql

SELECT * FROM employees WHERE salary > 5000;

```



This query will return all the rows from the `employees` table where the `salary` column is greater than 5000.



You can also use logical operators such as `AND`, `OR`, and `NOT` to combine multiple conditions in the `WHERE` clause. For example:



```sql

SELECT * FROM employees WHERE salary > 5000 AND department = 'IT';

```



This query will return all the rows from the `employees` table where the `salary` column is greater than 5000 and the `department` column is 'IT'.



Remember, the `WHERE` clause is a powerful tool that allows you to filter data based on specific conditions in SQL queries. It helps you retrieve only the data you need from a table.