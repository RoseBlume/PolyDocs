---
title: 'Break-Continue'
sidebar:
  order: 11
---

 



The `break` statement is used to exit a loop prematurely. It is commonly used in situations where you want to terminate the loop based on a certain condition.



Here's an example of using the `break` statement in a `for` loop:



```csharp

for (int i = 0; i < 10; i++)

{

    if (i == 5)

    {

        break;

    }

    Console.WriteLine(i);

}

```



In this example, the loop will iterate from 0 to 9. However, when `i` becomes 5, the `break` statement is encountered, and the loop is terminated.





The `continue` statement is used to skip the rest of the current iteration and move to the next iteration of a loop. It is commonly used in situations where you want to skip certain iterations based on a certain condition.



Here's an example of using the `continue` statement in a `while` loop:



```csharp

int i = 0;

while (i < 10)

{

    i++;

    if (i % 2 == 0)

    {

        continue;

    }

    Console.WriteLine(i);

}

```



In this example, the loop will iterate from 1 to 10. However, when `i` is an even number, the `continue` statement is encountered, and the rest of the code in the current iteration is skipped.



Remember to use the `break` and `continue` statements judiciously to control the flow of your loops effectively.


