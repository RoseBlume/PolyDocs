---
title: 'Auto Increment'
sidebar:
  order: 15
---

 In SQL, the `AUTO_INCREMENT` attribute is used to generate a unique identifier for new rows in a table. This is particularly useful for primary keys, where each row needs a unique value.





To use `AUTO_INCREMENT`, you define it on a column of a table during the table creation. Here is the basic syntax:



```sql

CREATE TABLE table_name (

  column1 INT AUTO_INCREMENT,

  column2 VARCHAR(255),

  PRIMARY KEY (column1)

);

```





Let's create a table called `users` with an `id` column that auto-increments:



```sql

CREATE TABLE users (

  id INT AUTO_INCREMENT,

  username VARCHAR(50) NOT NULL,

  email VARCHAR(100) NOT NULL,

  PRIMARY KEY (id)

);

```



When you insert data into the `users` table, you do not need to specify a value for the `id` column. It will automatically increment with each new row:



```sql

INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');

INSERT INTO users (username, email) VALUES ('jane_doe', 'jane@example.com');

```



After these inserts, the `users` table will look like this:



| id | username | email          |

|----|----------|----------------|

| 1  | john_doe | john@example.com |

| 2  | jane_doe | jane@example.com |





- The `AUTO_INCREMENT` value starts at 1 by default and increments by 1 for each new row.

- You can change the starting value using the `AUTO_INCREMENT` table option.

- Only one `AUTO_INCREMENT` column is allowed per table, and it must be indexed (usually as a primary key).





To change the starting value of the `AUTO_INCREMENT` column, use the following syntax:



```sql

ALTER TABLE table_name AUTO_INCREMENT = starting_value;

```



For example, to start the `id` column at 1000:



```sql

ALTER TABLE users AUTO_INCREMENT = 1000;

```



Now, the next inserted row will have an `id` of 1000.





The `AUTO_INCREMENT` attribute is a powerful tool in SQL for generating unique identifiers automatically. It simplifies the process of managing primary keys and ensures that each row has a unique value.