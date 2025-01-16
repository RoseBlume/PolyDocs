---
title: 'Between'
sidebar:
  order: 36
---

 The `BETWEEN` operator in SQL is used to filter the result set within a certain range. The values can be numbers, text, or dates.





```sql

SELECT column_name(s)

FROM table_name

WHERE column_name BETWEEN value1 AND value2;

```





Consider the following `Employees` table:



| EmployeeID | Name    | Age | Salary |

|------------|---------|-----|--------|

| 1          | John    | 28  | 50000  |

| 2          | Jane    | 32  | 60000  |

| 3          | Michael | 40  | 75000  |

| 4          | Sarah   | 25  | 48000  |

| 5          | David   | 35  | 62000  |



To find employees whose age is between 30 and 40, you can use the following query:



```sql

SELECT Name, Age

FROM Employees

WHERE Age BETWEEN 30 AND 40;

```



This will return:



| Name    | Age |

|---------|-----|

| Jane    | 32  |

| Michael | 40  |

| David   | 35  |





- The `BETWEEN` operator is inclusive; it includes the values specified in the range.

- You can also use `NOT BETWEEN` to exclude a range of values.





Try writing a query to find employees with a salary between 50000 and 70000.



```sql

SELECT Name, Salary

FROM Employees

WHERE Salary BETWEEN 50000 AND 70000;

```