---
title: 'Wildcards'
sidebar:
  order: 41
---

 

Wildcards in SQL are special characters that are used to match patterns in data. They are commonly used in conjunction with the `LIKE` operator in SQL queries.



Here are some commonly used wildcards in SQL:



- `%` (percent sign): This wildcard matches any sequence of characters, including zero characters. For example, if you want to find all names that start with "J", you can use the pattern `J%`.



- `_` (underscore): This wildcard matches any single character. For example, if you want to find all names that have exactly three characters, you can use the pattern `___`.



- `[]` (square brackets): This wildcard matches any single character within the specified range or set. For example, if you want to find all names that start with "A", "B", or "C", you can use the pattern `[ABC]%`.



Here are some examples of using wildcards in SQL queries:



- `SELECT * FROM customers WHERE name LIKE 'J%'`: This query selects all customers whose names start with "J".



- `SELECT * FROM products WHERE name LIKE '%book%'`: This query selects all products whose names contain the word "book".



- `SELECT * FROM employees WHERE name LIKE '_a%'`: This query selects all employees whose names have a second character of "a".



Remember to always use the appropriate wildcard and pattern to match the desired data in your SQL queries.
