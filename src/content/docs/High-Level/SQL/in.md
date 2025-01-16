---
title: 'In'
sidebar:
  order: 38
---

 

The `IN` operator is a powerful tool in SQL that allows you to specify multiple values in a `WHERE` clause. It is commonly used to filter data based on a specific set of values.





The basic syntax of the `IN` operator is as follows:



```sql

SELECT column_name(s)

FROM table_name

WHERE column_name IN (value1, value2, value3, ...);

```





Let's say we have a table called `employees` with the following data:



| id | name   | department |

|----|--------|------------|

| 1  | John   | HR         |

| 2  | Jane   | IT         |

| 3  | Mike   | Sales      |

| 4  | Sarah  | HR         |

| 5  | Robert | IT         |



If we want to retrieve the names of employees whose department is either "HR" or "IT", we can use the `IN` operator like this:



```sql

SELECT name

FROM employees

WHERE department IN ('HR', 'IT');

```



This will return the following result:



| name   |

|--------|

| John   |

| Jane   |

| Sarah  |

| Robert |





The `IN` operator is a useful tool in SQL that allows you to filter data based on a specific set of values. It can be used in various scenarios to simplify your queries and make them more efficient.
