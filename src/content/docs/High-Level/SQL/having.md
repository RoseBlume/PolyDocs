---
title: 'Having'
sidebar:
  order: 33
---

 

The `HAVING` clause in SQL is used to filter records that work on summarized `GROUP BY` results. It is similar to the `WHERE` clause but is used for groups rather than individual rows.





```sql

SELECT column1, aggregate_function(column2)

FROM table_name

WHERE condition

GROUP BY column1

HAVING condition

ORDER BY column1;

```





Consider the following `Sales` table:



| ID | Product | Quantity | Price |

|----|---------|----------|-------|

| 1  | A       | 10       | 100   |

| 2  | B       | 20       | 150   |

| 3  | A       | 15       | 100   |

| 4  | B       | 10       | 150   |

| 5  | C       | 5        | 200   |



To find products with a total quantity greater than 20, you can use the `HAVING` clause:



```sql

SELECT Product, SUM(Quantity) as TotalQuantity

FROM Sales

GROUP BY Product

HAVING SUM(Quantity) > 20;

```



This query will return:



| Product | TotalQuantity |

|---------|---------------|

| A       | 25            |

| B       | 30            |



The `HAVING` clause filters the groups created by the `GROUP BY` clause based on the specified condition.





- The `HAVING` clause is used to filter groups, not individual rows.

- It is often used with aggregate functions like `SUM`, `COUNT`, `AVG`, `MIN`, and `MAX`.

- The `HAVING` clause comes after the `GROUP BY` clause in the SQL query.



By using the `HAVING` clause, you can filter the results of aggregate functions to get more meaningful insights from your data.
