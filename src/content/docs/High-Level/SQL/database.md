---
title: 'Database'
sidebar:
  order: 2
---

 SQL (Structured Query Language) is a powerful language used for managing and manipulating relational databases. In this lesson, we will explore the fundamentals of SQL databases and learn how to perform common operations.





A database is an organized collection of data stored and accessed electronically. It provides a structured way to store, retrieve, and manage data efficiently. SQL databases are based on the relational model, which organizes data into tables with rows and columns.





SQL allows us to perform various operations on a database, such as creating tables, inserting data, querying data, updating records, and deleting data. It provides a standardized way to interact with databases across different platforms.





To create a database, we use the `CREATE DATABASE` statement followed by the name of the database. For example:



```sql

CREATE DATABASE mydatabase;

```





Tables are used to store data in a structured format. We can create tables using the `CREATE TABLE` statement. Here's an example:



```sql

CREATE TABLE customers (

  id INT PRIMARY KEY,

  name VARCHAR(50),

  email VARCHAR(100)

);

```





To retrieve data from a table, we use the `SELECT` statement. It allows us to specify the columns we want to retrieve and apply conditions to filter the data. For example:



```sql

SELECT * FROM customers;

```





To update existing records in a table, we use the `UPDATE` statement. It allows us to modify the values of specific columns based on certain conditions. Here's an example:



```sql

UPDATE customers

SET email = 'newemail@example.com'

WHERE id = 1;

```





To remove data from a table, we use the `DELETE` statement. It allows us to delete specific rows based on certain conditions. For example:



```sql

DELETE FROM customers

WHERE id = 1;

```





In this lesson, we have covered the basics of SQL databases. We learned about creating databases, creating tables, querying data, updating records, and deleting data. SQL is a powerful language that allows us to manage and manipulate data efficiently. With further practice and exploration, you will become proficient in SQL and be able to work with databases effectively.
