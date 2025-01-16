---
title: 'Count'
sidebar:
  order: 0
---

 The `COUNT` function in SQL is used to count the number of rows in a table that match a specified condition. It is one of the most commonly used aggregate functions in SQL.





```sql

SELECT COUNT(column_name)

FROM table_name

WHERE condition;

```



- `column_name`: The column you want to count the values of.

- `table_name`: The name of the table.

- `condition`: The condition to match for counting.







To count all rows in a table, you can use the `*` wildcard:



```sql

SELECT COUNT(*)

FROM employees;

```



This query will return the total number of rows in the `employees` table.





To count the number of non-NULL values in a specific column, specify the column name:



```sql

SELECT COUNT(department_id)

FROM employees;

```



This query will return the number of non-NULL `department_id` values in the `employees` table.





You can also count rows that match a specific condition:



```sql

SELECT COUNT(*)

FROM employees

WHERE salary > 50000;

```



This query will return the number of employees with a salary greater than 50,000.





The `COUNT` function is a powerful tool for summarizing data in SQL. Whether you need to count all rows, non-NULL values, or rows that meet certain conditions, `COUNT` can help you quickly get the information you need.