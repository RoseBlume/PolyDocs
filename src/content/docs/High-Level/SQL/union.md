---
title: 'Union'
sidebar:
  order: 31
---

 

In SQL, the `UNION` operator is used to combine the result sets of two or more `SELECT` statements. Each `SELECT` statement within the `UNION` must have the same number of columns in the result sets with similar data types. The columns in each `SELECT` statement must also be in the same order.





```sql

SELECT column1, column2, ...

FROM table1

UNION

SELECT column1, column2, ...

FROM table2;

```





Consider two tables, `Employees` and `Managers`, with the following data:



**Employees Table:**

| ID | Name    |

|----|---------|

| 1  | Alice   |

| 2  | Bob     |

| 3  | Charlie |



**Managers Table:**

| ID | Name    |

|----|---------|

| 2  | Bob     |

| 4  | David   |



To get a list of all unique names from both tables, you can use the `UNION` operator:



```sql

SELECT Name FROM Employees

UNION

SELECT Name FROM Managers;

```



**Result:**

| Name    |

|---------|

| Alice   |

| Bob     |

| Charlie |

| David   |





- The `UNION` operator removes duplicate records by default. If you want to include duplicates, use `UNION ALL`.

- The number of columns and their data types must match in both `SELECT` statements.

- The order of columns must be the same in all `SELECT` statements.





If you want to include all records, including duplicates, you can use `UNION ALL`:



```sql

SELECT Name FROM Employees

UNION ALL

SELECT Name FROM Managers;

```



**Result:**

| Name    |

|---------|

| Alice   |

| Bob     |

| Charlie |

| Bob     |

| David   |



By understanding and using the `UNION` operator, you can efficiently combine results from multiple tables and queries in SQL.
