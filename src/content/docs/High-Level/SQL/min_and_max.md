---
title: 'Min and Max'
sidebar:
  order: 3
---

 

```sql

SELECT MIN(column_name) FROM table_name;

```



The `MIN()` function is used to retrieve the minimum value from a column in a table.



```sql

SELECT MAX(column_name) FROM table_name;

```



The `MAX()` function is used to retrieve the maximum value from a column in a table.



These functions are commonly used in SQL to find the smallest and largest values in a dataset.



For example, if we have a table called `employees` with a column `salary`, we can use the `MIN()` function to find the employee with the lowest salary:



```sql

SELECT MIN(salary) FROM employees;

```



Similarly, we can use the `MAX()` function to find the employee with the highest salary:



```sql

SELECT MAX(salary) FROM employees;

```



These functions can be very useful when analyzing data and finding extreme values in a dataset.



Remember to always specify the column name and the table name when using these functions in your SQL queries.