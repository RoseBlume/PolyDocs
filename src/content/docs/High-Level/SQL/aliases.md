---
title: 'Aliases'
sidebar:
  order: 29
---

 SQL aliases are used to give a table, column, or expression a temporary name within a query. They are particularly useful when dealing with complex queries or when joining multiple tables.



Here's an example of using aliases to simplify a query:



```sql

SELECT e.employee_id, e.first_name, d.department_name

FROM employees AS e

JOIN departments AS d ON e.department_id = d.department_id;

```



In this example, `e` is an alias for the `employees` table, and `d` is an alias for the `departments` table. By using aliases, we can refer to the tables using shorter names, making the query more readable.



Aliases can also be used for columns or expressions. Here's an example:



```sql

SELECT CONCAT(e.first_name, ' ', e.last_name) AS full_name, e.salary * 1.1 AS increased_salary

FROM employees AS e;

```



In this example, `full_name` is an alias for the concatenation of the `first_name` and `last_name` columns, and `increased_salary` is an alias for the result of multiplying the `salary` column by 1.1.



Using aliases can make your SQL queries more concise and easier to understand. They are a powerful tool for managing complex queries and improving code readability.