---
title: 'Select Top'
sidebar:
  order: 20
---

 

In SQL, the `SELECT TOP` clause is used to specify the number of records to return. This is particularly useful when dealing with large datasets where you only need a subset of the data.





```sql

SELECT TOP number|percent column_name(s)

FROM table_name

WHERE condition;

```



- `number|percent`: Specifies the number of records to return. You can either specify a fixed number or a percentage of records.

- `column_name(s)`: The columns you want to retrieve.

- `table_name`: The table from which to retrieve the data.

- `condition`: Optional. Filters the records to be returned.







```sql

SELECT TOP 10 * 

FROM Employees;

```



This query retrieves the first 10 records from the `Employees` table.





```sql

SELECT TOP 5 PERCENT * 

FROM Employees;

```



This query retrieves the top 5 percent of records from the `Employees` table.





- The `SELECT TOP` clause is specific to SQL Server. Other SQL databases like MySQL use `LIMIT`, and Oracle uses `ROWNUM`.

- When using `SELECT TOP`, the order of the returned records is not guaranteed unless you use an `ORDER BY` clause.





```sql

SELECT TOP 10 * 

FROM Employees

ORDER BY Salary DESC;

```



This query retrieves the top 10 highest-paid employees from the `Employees` table.



By using the `SELECT TOP` clause, you can efficiently manage and retrieve a subset of data from large datasets.
