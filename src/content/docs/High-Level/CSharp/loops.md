---
title: 'Loops'
sidebar:
  order: 6
---

 



In C#, loops are used to repeatedly execute a block of code. They are useful when you want to perform a certain action multiple times or iterate over a collection of items.





The `for` loop is commonly used when you know the number of iterations in advance. It consists of an initialization, a condition, and an increment or decrement statement.



```csharp

for (int i = 0; i < 5; i++)

{

    Console.WriteLine("Iteration: " + i);

}

```



This loop will execute the code block 5 times, with `i` starting from 0 and incrementing by 1 in each iteration.





The `while` loop is used when you want to repeat a block of code as long as a certain condition is true.



```csharp

int count = 0;

while (count < 3)

{

    Console.WriteLine("Count: " + count);

    count++;

}

```



In this example, the loop will continue executing as long as `count` is less than 3. The `count` variable is incremented by 1 in each iteration.





The `do-while` loop is similar to the `while` loop, but the condition is checked at the end of the loop. This guarantees that the code block is executed at least once.



```csharp

int num = 1;

do

{

    Console.WriteLine("Number: " + num);

    num++;

} while (num <= 5);

```



In this case, the code block will be executed once, and then the condition `num <= 5` will be checked. If the condition is true, the loop will continue executing.



These are the basic loop structures in C#. They provide powerful ways to control the flow of your program and perform repetitive tasks efficiently.


