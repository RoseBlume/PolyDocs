---
title: 'Functions'
sidebar:
  order: 47
---

 

In SQL, functions are used to perform calculations, manipulate data, and return results. They can be categorized into two main types: 



1. **Aggregate Functions**: These functions operate on a set of values and return a single value. Common aggregate functions include:

    - `COUNT()`: Returns the number of rows.

    - `SUM()`: Returns the sum of a numeric column.

    - `AVG()`: Returns the average value of a numeric column.

    - `MIN()`: Returns the smallest value.

    - `MAX()`: Returns the largest value.



2. **Scalar Functions**: These functions operate on a single value and return a single value. Common scalar functions include:

    - `UCASE()`: Converts a string to uppercase.

    - `LCASE()`: Converts a string to lowercase.

    - `ROUND()`: Rounds a numeric value to a specified number of decimal places.

    - `LEN()`: Returns the length of a string.

    - `NOW()`: Returns the current date and time.







To find the total sales from a `sales` table:



```sql

SELECT SUM(amount) AS total_sales

FROM sales;

```





To convert a customer's name to uppercase:



```sql

SELECT UCASE(customer_name) AS upper_name

FROM customers;

```



Understanding and using these functions effectively can greatly enhance your ability to manipulate and analyze data in SQL.
