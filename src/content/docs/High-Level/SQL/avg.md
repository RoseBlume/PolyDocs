---
title: 'Avg'
sidebar:
  order: 2
---

 The `AVG` function in SQL is used to calculate the average value of a numeric column. It is commonly used in data analysis to find the mean value of a dataset.





```sql

SELECT AVG(column_name)

FROM table_name

WHERE condition;

```



- `column_name`: The column for which you want to calculate the average.

- `table_name`: The table from which to retrieve the data.

- `condition`: Optional. The condition to filter the rows.





Consider a table `employees` with the following data:



| id | name    | salary |

|----|---------|--------|

| 1  | John    | 50000  |

| 2  | Jane    | 60000  |

| 3  | Alice   | 55000  |

| 4  | Bob     | 70000  |

| 5  | Charlie | 65000  |



To calculate the average salary of all employees, you can use the following SQL query:



```sql

SELECT AVG(salary) AS average_salary

FROM employees;

```



This query will return:



| average_salary |

|----------------|

| 60000          |





You can also use the `AVG` function with the `GROUP BY` clause to calculate the average for each group of data. For example, if you have a `department` column in the `employees` table, you can calculate the average salary for each department:



```sql

SELECT department, AVG(salary) AS average_salary

FROM employees

GROUP BY department;

```



This will return the average salary for each department.





The `AVG` function is a powerful tool in SQL for calculating the mean value of a numeric column. It can be used in various scenarios to analyze and summarize data effectively.