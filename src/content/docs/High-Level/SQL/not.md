---
title: 'Not'
sidebar:
  order: 27
---

 

In SQL, the `NOT` operator is used to negate a condition or expression. It is often used in conjunction with other operators to create more complex conditions.





The syntax of the `NOT` operator is as follows:



```sql

SELECT column1, column2, ...

FROM table_name

WHERE NOT condition;

```





Consider the following table named `employees`:



| id | name   | age | salary |

|----|--------|-----|--------|

| 1  | John   | 25  | 5000   |

| 2  | Alice  | 30  | 6000   |

| 3  | Bob    | 35  | 7000   |

| 4  | Claire | 40  | 8000   |



To retrieve all the employees who are not 30 years old, you can use the `NOT` operator as follows:



```sql

SELECT *

FROM employees

WHERE NOT age = 30;

```



This query will return the following result:



| id | name   | age | salary |

|----|--------|-----|--------|

| 1  | John   | 25  | 5000   |

| 3  | Bob    | 35  | 7000   |

| 4  | Claire | 40  | 8000   |





The `NOT` operator is a powerful tool in SQL that allows you to negate conditions and expressions. It can be used to filter data based on specific criteria.