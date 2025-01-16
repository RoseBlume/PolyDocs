---
title: 'Comments'
sidebar:
  order: 42
---

 

In SQL, comments are used to explain sections of your SQL code, making it easier to understand and maintain. Comments are ignored by the SQL engine and do not affect the execution of the SQL statements.





Single-line comments start with two hyphens (`--`). Everything after the `--` on that line is considered a comment.



```sql

-- This is a single-line comment

SELECT * FROM Customers;

```





Multi-line comments start with `/*` and end with `*/`. Everything between `/*` and `*/` is considered a comment, even if it spans multiple lines.



```sql

/*

This is a multi-line comment.

It can span multiple lines.

*/

SELECT * FROM Orders;

```



Use comments to document your SQL code effectively, making it easier for others (and yourself) to understand the logic and purpose behind your queries.
