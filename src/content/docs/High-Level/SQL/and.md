---
title: 'And'
sidebar:
  order: 25
---

 

The SQL `AND` operator is used to combine multiple conditions in a `WHERE` clause. It allows you to retrieve records that satisfy all the specified conditions.





The basic syntax of the `AND` operator is as follows:



```sql

SELECT column1, column2, ...

FROM table_name

WHERE condition1 AND condition2 AND condition3 ...;

```





Let's say we have a table called `employees` with the following columns: `id`, `name`, `age`, and `salary`. We want to retrieve all the employees who are older than 30 and have a salary greater than $50,000.



```sql

SELECT *

FROM employees

WHERE age > 30 AND salary > 50000;

```



This query will return all the records that satisfy both conditions.





- The `AND` operator requires all the conditions to be true for a record to be included in the result set.

- You can combine multiple `AND` operators to create complex conditions.



Remember to use the `AND` operator judiciously to ensure that your queries return the desired results.
