---
title: 'Sum'
sidebar:
  order: 1
---

 ```sql

SELECT SUM(column_name) AS total_sum

FROM table_name;

```

In the above SQL code, replace `column_name` with the name of the column you want to calculate the sum for, and `table_name` with the name of the table where the column resides.



The `SUM()` function is used to calculate the sum of all values in the specified column. It returns the total sum as a single value.



For example, if you have a table called `orders` with a column `amount` that stores the order amounts, you can calculate the total sum of all order amounts using the following SQL query:



```sql

SELECT SUM(amount) AS total_sum

FROM orders;

```



This will return the total sum of all order amounts in the `amount` column.



Remember to include the `AS total_sum` part to give a meaningful name to the result column.



You can use the `SUM()` function in combination with other SQL functions and clauses to perform more complex calculations and filtering operations.