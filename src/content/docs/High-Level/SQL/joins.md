---
title: 'Joins'
sidebar:
  order: 30
---

 

In SQL, a join is used to combine rows from two or more tables based on a related column between them. Joins are essential for retrieving data from multiple tables and creating meaningful relationships between them.



There are different types of joins in SQL, including:



- Inner Join: Returns only the matching rows from both tables.

- Left Join: Returns all the rows from the left table and the matching rows from the right table.

- Right Join: Returns all the rows from the right table and the matching rows from the left table.

- Full Outer Join: Returns all the rows from both tables, including the unmatched rows.



To perform a join, you need to specify the tables you want to join and the columns that establish the relationship between them using the `JOIN` keyword. Here's a basic syntax for an inner join:



```sql

SELECT column1, column2, ...

FROM table1

JOIN table2 ON table1.column = table2.column;

```



You can replace `JOIN` with `LEFT JOIN`, `RIGHT JOIN`, or `FULL OUTER JOIN` to perform different types of joins.



Joins are powerful tools in SQL that allow you to combine data from multiple tables and extract meaningful insights. Understanding how to use joins effectively is crucial for working with relational databases.



For more information on SQL joins, refer to the [official documentation](https://docs.microsoft.com/en-us/sql/relational-databases/performance/joins?view=sql-server-ver15).



```sql

SELECT *

FROM table1

LEFT JOIN table2

ON table1.id = table2.id;

```

In the above example, we are performing a left join between `table1` and `table2` based on the `id` column. This will return all the rows from `table1` and the matching rows from `table2`. If there is no match, NULL values will be returned for the columns of `table2`.



```sql

SELECT *

FROM table1

RIGHT JOIN table2

ON table1.id = table2.id;

```

In this example, we are performing a right join between `table1` and `table2` based on the `id` column. The result will include all rows from `table2` and the matching rows from `table1`. If there is no match, the result will contain NULL values for the columns of `table1`.



```sql

SELECT *

FROM table1

FULL OUTER JOIN table2

ON table1.id = table2.id;

```

In this example, we are performing a full outer join between `table1` and `table2` based on the `id` column. This will return all rows from both tables. If there is no match, NULL values will be returned for the columns of the table that does not have a matching row.



```sql

SELECT *

FROM table1

CROSS JOIN table2;

```

A cross join returns the Cartesian product of the two tables, meaning it will return all possible combinations of rows from `table1` and `table2`. This type of join does not require a condition to join the tables.



```sql

SELECT a.column1, b.column2

FROM table a, table b

WHERE a.common_column = b.common_column;

```

A self join is a regular join, but the table is joined with itself. This can be useful for comparing rows within the same table.



Understanding these different types of joins and how to use them will greatly enhance your ability to work with relational databases and extract meaningful data from multiple tables. Practice using these joins with different datasets to become more proficient in SQL.



For further reading and more advanced join techniques, refer to the [official SQL documentation](https://docs.microsoft.com/en-us/sql/relational-databases/performance/joins?view=sql-server-ver15).