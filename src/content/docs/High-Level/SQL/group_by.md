---
title: 'Group By'
sidebar:
  order: 32
---

 

In SQL, the `GROUP BY` statement is used to arrange identical data into groups. This is often used with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MAX()`, and `MIN()` to perform operations on each group of data.





```sql

SELECT column_name(s), aggregate_function(column_name)

FROM table_name

WHERE condition

GROUP BY column_name(s);

```





Consider a table `Sales` with the following data:



| SaleID | Product | Quantity | Price |

|--------|---------|----------|-------|

| 1      | Apple   | 10       | 1.00  |

| 2      | Banana  | 5        | 0.50  |

| 3      | Apple   | 7        | 1.00  |

| 4      | Orange  | 3        | 0.75  |

| 5      | Banana  | 8        | 0.50  |



To find the total quantity sold for each product, you can use the `GROUP BY` statement:



```sql

SELECT Product, SUM(Quantity) as TotalQuantity

FROM Sales

GROUP BY Product;

```



This will produce the following result:



| Product | TotalQuantity |

|---------|---------------|

| Apple   | 17            |

| Banana  | 13            |

| Orange  | 3             |





- The `GROUP BY` statement must follow the `WHERE` clause in a SQL query.

- All columns in the `SELECT` statement that are not part of aggregate functions must be included in the `GROUP BY` clause.



By using the `GROUP BY` statement, you can easily summarize and analyze data in your SQL databases.
