---
title: 'Alter Table'
sidebar:
  order: 7
---

 

In SQL, the `ALTER TABLE` statement is used to modify an existing table structure. This can include adding, deleting, or modifying columns, as well as adding or dropping constraints.





To add a new column to an existing table, use the following syntax:



```sql

ALTER TABLE table_name

ADD column_name datatype;

```



Example:



```sql

ALTER TABLE Employees

ADD BirthDate DATE;

```





To remove a column from a table, use the following syntax:



```sql

ALTER TABLE table_name

DROP COLUMN column_name;

```



Example:



```sql

ALTER TABLE Employees

DROP COLUMN BirthDate;

```





To change the data type of an existing column, use the following syntax:



```sql

ALTER TABLE table_name

MODIFY COLUMN column_name new_datatype;

```



Example:



```sql

ALTER TABLE Employees

MODIFY COLUMN BirthDate VARCHAR(10);

```





To add a constraint to a table, use the following syntax:



```sql

ALTER TABLE table_name

ADD CONSTRAINT constraint_name constraint_definition;

```



Example:



```sql

ALTER TABLE Employees

ADD CONSTRAINT CHK_Age CHECK (Age >= 18);

```





To remove a constraint from a table, use the following syntax:



```sql

ALTER TABLE table_name

DROP CONSTRAINT constraint_name;

```



Example:



```sql

ALTER TABLE Employees

DROP CONSTRAINT CHK_Age;

```



By using the `ALTER TABLE` statement, you can effectively manage and modify your database schema as your requirements evolve.
