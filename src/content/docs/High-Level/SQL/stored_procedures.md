---
title: 'Stored Procedures'
sidebar:
  order: 46
---

 



In SQL, a stored procedure is a set of pre-compiled SQL statements that are stored in the database and can be executed repeatedly. It provides a way to encapsulate and reuse complex SQL logic, improving code modularity and maintainability.





- **Code Reusability**: Stored procedures can be called from multiple places in your application, reducing code duplication.

- **Improved Performance**: Since stored procedures are pre-compiled, they can be executed faster than dynamically generated SQL queries.

- **Enhanced Security**: Stored procedures can be granted specific permissions, allowing fine-grained control over database access.

- **Transaction Management**: Stored procedures can be used to perform multiple database operations within a single transaction, ensuring data integrity.





To create a stored procedure, you can use the `CREATE PROCEDURE` statement followed by the procedure name and the SQL statements enclosed in a block. Here's an example:



```sql

CREATE PROCEDURE GetCustomerOrders

AS

BEGIN

  SELECT * FROM Orders WHERE CustomerId = @CustomerId;

END

```



In the above example, we create a stored procedure named `GetCustomerOrders` that retrieves all orders for a specific customer.





To execute a stored procedure, you can use the `EXECUTE` or `EXEC` statement followed by the procedure name. Here's an example:



```sql

EXEC GetCustomerOrders;

```



You can also pass parameters to a stored procedure using the `@` symbol. Here's an example:



```sql

EXEC GetCustomerOrders @CustomerId = 123;

```



In the above example, we pass the `CustomerId` parameter with a value of 123 to the `GetCustomerOrders` stored procedure.





Stored procedures are a powerful feature of SQL that can greatly enhance the functionality and performance of your database applications. They provide a way to encapsulate complex logic, improve code reusability, and enhance security. Start using stored procedures in your SQL projects to take advantage of these benefits.
