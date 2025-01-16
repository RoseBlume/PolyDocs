---
title: 'If-Else'
sidebar:
  order: 5
---

 



The `if-else` statement is used in C# to execute a block of code based on a condition. It allows you to specify different actions to be performed depending on whether the condition is true or false.



Here's the basic syntax of the `if-else` statement in C#:



```csharp

if (condition)

{

    // code to be executed if the condition is true

}

else

{

    // code to be executed if the condition is false

}

```



Here's an example that demonstrates the usage of the `if-else` statement in C#:



```csharp

int number = 10;



if (number > 0)

{

    Console.WriteLine("The number is positive.");

}

else

{

    Console.WriteLine("The number is non-positive.");

}

```



In this example, if the value of the `number` variable is greater than 0, the program will output "The number is positive." Otherwise, it will output "The number is non-positive."



You can also use multiple `else if` statements to specify additional conditions. Here's an example:



```csharp

int number = 0;



if (number > 0)

{

    Console.WriteLine("The number is positive.");

}

else if (number < 0)

{

    Console.WriteLine("The number is negative.");

}

else

{

    Console.WriteLine("The number is zero.");

}

```



In this example, if the value of the `number` variable is greater than 0, the program will output "The number is positive." If it's less than 0, it will output "The number is negative." Otherwise, it will output "The number is zero."



The `if-else` statement is a fundamental control structure in C# that allows you to make decisions based on conditions. It is commonly used in various programming scenarios to control the flow of execution.



Remember to use proper indentation and braces to ensure the correct execution of the `if-else` statement.
