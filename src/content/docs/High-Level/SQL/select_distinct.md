---
title: 'Select Distinct'
sidebar:
  order: 19
---

 



The `SELECT DISTINCT` statement is used to retrieve unique values from a specified column in a table. It eliminates duplicate rows and returns only distinct values.



In the above example, replace `column_name` with the name of the column you want to retrieve distinct values from, and `table_name` with the name of the table.



For example, to retrieve distinct values from the `city` column in a table called `customers`, you would use the following SQL query:



```sql

SELECT DISTINCT city

FROM customers;

```



This query would return a list of unique cities from the `customers` table.



Note that the `SELECT DISTINCT` statement applies to all columns specified in the `SELECT` clause. If you want to retrieve distinct values from multiple columns, you can separate them with commas:



```sql

SELECT DISTINCT column1, column2, ...

FROM table_name;

```



Remember to replace `column1`, `column2`, etc. with the actual column names you want to retrieve distinct values from.
