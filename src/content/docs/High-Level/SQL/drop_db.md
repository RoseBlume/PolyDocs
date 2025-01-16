---
title: 'Drop DB'
sidebar:
  order: 4
---

 

In SQL, the `DROP DATABASE` statement is used to delete an existing database. This action is irreversible, so it should be executed with caution. When a database is dropped, all the data, tables, and other objects within the database are permanently removed.





```sql

DROP DATABASE database_name;

```



- `database_name`: The name of the database you want to delete.





To drop a database named `test_db`, you would use the following SQL statement:



```sql

DROP DATABASE test_db;

```





- Ensure you have the necessary permissions to drop the database.

- Always double-check the database name to avoid accidental data loss.

- Consider backing up the database before dropping it.



By following these guidelines, you can safely and effectively manage your databases in SQL.
