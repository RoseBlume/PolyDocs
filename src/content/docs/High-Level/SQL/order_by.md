---
title: 'Order By'
sidebar:
  order: 28
---

 

In SQL, the `ORDER BY` clause is used to sort the result set of a query by one or more columns. By default, the sorting is done in ascending order. However, you can specify descending order using the `DESC` keyword.





```sql

SELECT column1, column2, ...

FROM table_name

ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;

```





Consider a table named `Employees`:



| EmployeeID | FirstName | LastName | Salary |

|------------|-----------|----------|--------|

| 1          | John      | Doe      | 50000  |

| 2          | Jane      | Smith    | 60000  |

| 3          | Alice     | Johnson  | 55000  |

| 4          | Bob       | Brown    | 45000  |



To sort the employees by `LastName` in ascending order:



```sql

SELECT * FROM Employees

ORDER BY LastName ASC;

```



To sort the employees by `Salary` in descending order:



```sql

SELECT * FROM Employees

ORDER BY Salary DESC;

```



You can also sort by multiple columns. For example, to sort by `LastName` in ascending order and then by `FirstName` in descending order:



```sql

SELECT * FROM Employees

ORDER BY LastName ASC, FirstName DESC;

```





The `ORDER BY` clause is a powerful tool in SQL that allows you to organize your query results in a meaningful way. By mastering this clause, you can present your data in a more readable and useful format.
