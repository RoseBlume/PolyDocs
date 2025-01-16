---
title: 'Check'
sidebar:
  order: 14
---

 In SQL, the `CHECK` constraint is used to limit the value range that can be placed in a column. If you define a `CHECK` constraint on a single column, it allows only certain values for this column. If you define a `CHECK` constraint on a table, it can limit the values in certain columns based on values in other columns in the row.





```sql

CREATE TABLE table_name (

    column1 datatype CHECK (condition),

    column2 datatype,

    ...

);

```





Consider the following example where we create a table named `Employees` with a `CHECK` constraint on the `Age` column to ensure that the age of an employee is 18 or older:



```sql

CREATE TABLE Employees (

    ID int NOT NULL,

    Name varchar(255) NOT NULL,

    Age int CHECK (Age >= 18)

);

```



In this example, the `CHECK` constraint ensures that any value entered into the `Age` column must be 18 or older. If you try to insert a row with an age less than 18, SQL will throw an error.





You can also have multiple `CHECK` constraints on a single table. For example:



```sql

CREATE TABLE Orders (

    OrderID int NOT NULL,

    Quantity int CHECK (Quantity > 0),

    Price decimal CHECK (Price > 0)

);

```



In this example, the `Orders` table has two `CHECK` constraints: one to ensure that the `Quantity` is greater than 0, and another to ensure that the `Price` is greater than 0.





You can add a `CHECK` constraint to an existing table using the `ALTER TABLE` statement:



```sql

ALTER TABLE Employees

ADD CHECK (Age >= 18);

```



This statement adds a `CHECK` constraint to the `Employees` table to ensure that the `Age` column has values of 18 or older.





The `CHECK` constraint is a powerful tool in SQL for enforcing data integrity by limiting the values that can be placed in a column. By using `CHECK` constraints, you can ensure that your data adheres to specific rules and conditions, which helps maintain the accuracy and reliability of your database.