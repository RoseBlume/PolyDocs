---
title: 'Drop Table'
sidebar:
  order: 6
---

 In SQL, the `DROP TABLE` statement is used to remove an existing table from the database. This operation is irreversible, meaning that once a table is dropped, all the data stored in it is permanently deleted.





```sql

DROP TABLE table_name;

```



- `table_name`: The name of the table you want to drop.





Consider a table named `employees` that you want to remove from your database. The SQL statement would be:



```sql

DROP TABLE employees;

```



Executing this statement will delete the `employees` table and all the data it contains.





- Ensure that you have the necessary permissions to drop a table.

- Be cautious when using the `DROP TABLE` statement, as it will permanently delete the table and its data.

- It is a good practice to back up your data before performing a drop operation.



By understanding and using the `DROP TABLE` statement, you can effectively manage the structure of your database.
