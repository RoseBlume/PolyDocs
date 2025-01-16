---
title: 'Exists'
sidebar:
  order: 34
---

 

The `EXISTS` operator is used in SQL to check if a subquery returns any rows. It returns `TRUE` if the subquery returns at least one row, and `FALSE` otherwise.





The basic syntax of the `EXISTS` operator is as follows:



```sql

SELECT column1, column2, ...

FROM table_name

WHERE EXISTS (subquery);

```





Let's say we have two tables: `Customers` and `Orders`. We want to find all customers who have placed an order. We can use the `EXISTS` operator to achieve this:



```sql

SELECT *

FROM Customers

WHERE EXISTS (SELECT *

        FROM Orders

        WHERE Customers.CustomerID = Orders.CustomerID);

```



This query will return all customers who have placed at least one order.





The `EXISTS` operator is a useful tool in SQL for checking the existence of rows in a subquery. It can be used in various scenarios to filter data based on certain conditions.


