---
title: 'Delete'
sidebar:
  order: 23
---

 

```sql

DELETE FROM table_name

WHERE condition;

```



To delete data from a SQL table, you can use the `DELETE` statement. The `DELETE` statement allows you to remove one or more rows from a table based on a specified condition.



Here's the basic syntax of the `DELETE` statement:



```sql

DELETE FROM table_name

WHERE condition;

```



- `table_name` is the name of the table from which you want to delete data.

- `condition` is an optional condition that specifies which rows to delete. If you omit the `WHERE` clause, all rows in the table will be deleted.



For example, let's say we have a table called `employees` with the following data:



| id | name  | age | salary |

|----|-------|-----|--------|

| 1  | John  | 25  | 5000   |

| 2  | Alice | 30  | 6000   |

| 3  | Bob   | 35  | 7000   |



If we want to delete the row with `id` 2 from the `employees` table, we can use the following `DELETE` statement:



```sql

DELETE FROM employees

WHERE id = 2;

```



After executing this statement, the `employees` table will look like this:



| id | name  | age | salary |

|----|-------|-----|--------|

| 1  | John  | 25  | 5000   |

| 3  | Bob   | 35  | 7000   |



Remember to be cautious when using the `DELETE` statement, as it permanently removes data from the table. Always double-check your conditions before executing the statement.
