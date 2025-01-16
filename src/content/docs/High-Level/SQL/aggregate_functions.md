---
title: 'Aggregate Functions'
sidebar:
  order: 40
---

 

In SQL, aggregate functions are used to perform calculations on a set of values and return a single value as the result. These functions are commonly used in queries to summarize or manipulate data.





1. **COUNT**: This function is used to count the number of rows in a table or a specific column.

2. **SUM**: It calculates the sum of all values in a column.

3. **AVG**: It calculates the average of all values in a column.

4. **MIN**: It returns the minimum value from a column.

5. **MAX**: It returns the maximum value from a column.





The general syntax for using aggregate functions in SQL is as follows:



```sql

SELECT aggregate_function(column_name)

FROM table_name

WHERE condition;

```





Let's look at some examples to understand how aggregate functions work:



1. Count the number of employees in the "employees" table:



```sql

SELECT COUNT(*) AS total_employees

FROM employees;

```



2. Calculate the total salary of all employees:



```sql

SELECT SUM(salary) AS total_salary

FROM employees;

```



3. Find the average salary of employees in the "sales" department:



```sql

SELECT AVG(salary) AS average_salary

FROM employees

WHERE department = 'sales';

```



4. Get the minimum and maximum salary from the "employees" table:



```sql

SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary

FROM employees;

```





Aggregate functions are powerful tools in SQL that allow you to perform calculations on data sets. They can be used to summarize data, calculate totals, averages, and more. Understanding how to use these functions is essential for working with SQL databases effectively.
