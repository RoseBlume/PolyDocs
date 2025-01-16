---
title: 'Constraints'
sidebar:
  order: 8
---

 In SQL, constraints are used to enforce rules and restrictions on the data stored in database tables. They ensure the integrity and consistency of the data by defining certain conditions that must be met.





1. **Primary Key Constraint**: A primary key constraint is used to uniquely identify each record in a table. It ensures that the primary key column(s) have unique values and cannot contain null values.



2. **Foreign Key Constraint**: A foreign key constraint is used to establish a relationship between two tables. It ensures that the values in the foreign key column(s) of one table match the values in the primary key column(s) of another table.



3. **Unique Constraint**: A unique constraint ensures that the values in a column or a group of columns are unique. It allows null values, but if a column is marked as unique, only one null value is allowed.



4. **Check Constraint**: A check constraint is used to specify a condition that must be satisfied for each row in a table. It allows you to define custom rules to restrict the values that can be inserted or updated in a column.



5. **Not Null Constraint**: A not null constraint ensures that a column cannot contain null values. It enforces the requirement that a value must be provided for the column.





Here are some examples of how constraints can be used in SQL:



```sql

CREATE TABLE Customers (

  CustomerID INT PRIMARY KEY,

  FirstName VARCHAR(50) NOT NULL,

  LastName VARCHAR(50) NOT NULL,

  Email VARCHAR(100) UNIQUE,

  Country VARCHAR(50),

  CONSTRAINT FK_Order_Customer FOREIGN KEY (CustomerID) REFERENCES Orders (CustomerID)

);



CREATE TABLE Orders (

  OrderID INT PRIMARY KEY,

  OrderDate DATE,

  CustomerID INT,

  CONSTRAINT FK_Order_Customer FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID)

);

```



In the above example, we have two tables: Customers and Orders. The Customers table has a primary key constraint on the CustomerID column, and the Orders table has a foreign key constraint referencing the CustomerID column in the Customers table.





Constraints play a crucial role in maintaining data integrity in SQL databases. They help ensure that the data stored in tables follows certain rules and restrictions, making the database more reliable and consistent.
