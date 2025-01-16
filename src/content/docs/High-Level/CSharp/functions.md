---
title: 'Functions'
sidebar:
  order: 4
---

 



In C#, functions are a fundamental building block of any program. They allow you to encapsulate a block of code that can be reused and called from different parts of your program.



Here's an example of a simple function in C#:



```csharp

public int Add(int a, int b)

{

    return a + b;

}

```



In this example, we define a function called `Add` that takes two integer parameters `a` and `b`. The function returns the sum of `a` and `b`.



To call this function, you can simply use its name followed by parentheses and provide the arguments:



```csharp

int result = Add(5, 3);

Console.WriteLine(result); // Output: 8

```



Functions can also have a return type of `void`, which means they don't return any value. Here's an example:



```csharp

public void Greet(string name)

{

    Console.WriteLine($"Hello, {name}!");

}

```



In this example, the `Greet` function takes a string parameter `name` and prints a greeting message to the console.



To call this function, you can pass a string argument:



```csharp

Greet("John"); // Output: Hello, John!

```



Functions can be defined inside classes or outside of any class. They can also be overloaded, which means you can have multiple functions with the same name but different parameter lists.



That's a brief introduction to functions in C#. Happy coding!


