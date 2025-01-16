---
title: 'Syntax'
sidebar:
  order: 0
---

 





The `SELECT` statement is used to retrieve data from a database.

```sql

SELECT column1, column2

FROM table_name;

```



The `INSERT` statement is used to add new rows to a table.

```sql

INSERT INTO table_name (column1, column2)

VALUES (value1, value2);

```



The `UPDATE` statement is used to modify existing data in a table.

```sql

UPDATE table_name

SET column1 = value1, column2 = value2

WHERE condition;

```



The `DELETE` statement is used to remove rows from a table.

```sql

DELETE FROM table_name

WHERE condition;

```





1. SQL keywords are not case-sensitive: `SELECT` is the same as `select`.

2. Statements end with a semicolon (`;`).

3. Comments can be added using `--` for single-line comments or `/* */` for multi-line comments.





Here is a simple example that demonstrates the use of the basic SQL commands:

```sql

-- Create a table

CREATE TABLE Users (

    ID int,

    Name varchar(255),

    Age int

);



-- Insert data into the table

INSERT INTO Users (ID, Name, Age)

VALUES (1, 'Alice', 30), (2, 'Bob', 25);



-- Select data from the table

SELECT * FROM Users;



-- Update data in the table

UPDATE Users

SET Age = 31

WHERE Name = 'Alice';



-- Delete data from the table

DELETE FROM Users

WHERE Name = 'Bob';

```



By understanding and practicing these basic commands, you will be well on your way to mastering SQL.
