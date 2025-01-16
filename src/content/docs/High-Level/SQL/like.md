---
title: 'Like'
sidebar:
  order: 37
---

 ```sql

SELECT * FROM customers WHERE name LIKE 'John%';

```



The `LIKE` operator in SQL is used to search for a specified pattern in a column. In the example above, we are selecting all rows from the `customers` table where the `name` column starts with 'John'.



You can also use wildcard characters with the `LIKE` operator. The `%` character represents any number of characters, while the `_` character represents a single character. For example, to find all names that end with 'son', you can use the following query:



```sql

SELECT * FROM customers WHERE name LIKE '%son';

```



This will return all rows where the `name` column ends with 'son'.



Additionally, you can use the `NOT LIKE` operator to exclude rows that match a specific pattern. For example, to find all customers whose name does not start with 'John', you can use the following query:



```sql

SELECT * FROM customers WHERE name NOT LIKE 'John%';

```



Remember to use the appropriate wildcard characters and patterns to match your desired criteria when using the `LIKE` operator in SQL.