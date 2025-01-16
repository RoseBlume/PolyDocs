---
title: 'Default'
sidebar:
  order: 13
---

 

In SQL, the `DEFAULT` constraint is used to provide a default value for a column. This means that if no value is specified for the column when a row is inserted, the default value will be used.





The basic syntax for adding a `DEFAULT` constraint to a column is as follows:



```sql

CREATE TABLE table_name (

    column1 datatype DEFAULT default_value,

    column2 datatype,

    ...

);

```



You can also add a `DEFAULT` constraint to an existing table using the `ALTER TABLE` statement:



```sql

ALTER TABLE table_name

MODIFY column_name datatype DEFAULT default_value;

```





Let's look at an example. Suppose we have a table called `employees`:



```sql

CREATE TABLE employees (

    id INT PRIMARY KEY,

    name VARCHAR(100),

    hire_date DATE DEFAULT CURRENT_DATE

);

```



In this example, if no hire date is specified when a new employee is added, the current date will be used as the default value.





When inserting data into a table with a `DEFAULT` constraint, you can omit the column with the default value:



```sql

INSERT INTO employees (id, name) VALUES (1, 'John Doe');

```



In this case, the `hire_date` will automatically be set to the current date.





The `DEFAULT` constraint is a powerful feature in SQL that helps ensure data integrity by providing default values for columns. This can simplify data entry and ensure that certain columns always have valid data.
