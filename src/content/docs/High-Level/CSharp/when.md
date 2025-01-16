---
title: 'When'
sidebar:
  order: 12
---

 



The `when` statement is used in C# to add conditions to a pattern-matching expression. It allows you to specify additional criteria that must be met for a pattern to match.



Here's an example of using the `when` statement:



```csharp

int number = 5;



switch (number)

{

    case < 0:

        Console.WriteLine("Negative number");

        break;

    case > 0 when number % 2 == 0:

        Console.WriteLine("Positive even number");

        break;

    case > 0 when number % 2 != 0:

        Console.WriteLine("Positive odd number");

        break;

    default:

        Console.WriteLine("Zero");

        break;

}

```



In the above example, the `when` statement is used to add conditions to the `case` statements. The first `case` checks if the number is less than 0, the second `case` checks if the number is greater than 0 and even, and the third `case` checks if the number is greater than 0 and odd. The `default` case is executed if none of the previous cases match.



The `when` statement is a powerful feature in C# that allows you to add additional conditions to pattern matching, making your code more expressive and flexible.
