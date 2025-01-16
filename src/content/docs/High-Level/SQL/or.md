---
title: 'Or'
sidebar:
  order: 26
---

 

In SQL, the `OR` operator is used to combine multiple conditions in a `WHERE` clause. If any of the conditions separated by `OR` is true, the entire `WHERE` clause evaluates to true.





```sql

SELECT column1, column2, ...

FROM table_name

WHERE condition1 OR condition2 OR condition3 ...;

```





Consider the following `employees` table:



| id | name    | department | salary |

|----|---------|------------|--------|

| 1  | John    | HR         | 5000   |

| 2  | Jane    | IT         | 6000   |

| 3  | Alice   | HR         | 5500   |

| 4  | Bob     | IT         | 7000   |

| 5  | Charlie | Finance    | 6500   |



To select employees who work in the HR department or have a salary greater than 6000, you can use the `OR` operator:



```sql

SELECT *

FROM employees

WHERE department = 'HR' OR salary > 6000;

```



This query will return:



| id | name  | department | salary |

|----|-------|------------|--------|

| 1  | John  | HR         | 5000   |

| 3  | Alice | HR         | 5500   |

| 4  | Bob   | IT         | 7000   |

| 5  | Charlie | Finance  | 6500   |



In this example, the `OR` operator allows us to filter the results to include employees who meet either of the specified conditions.





The `OR` operator is a powerful tool in SQL for combining multiple conditions in a query. It helps in retrieving data that meets any of the given criteria, making it easier to work with complex datasets.


