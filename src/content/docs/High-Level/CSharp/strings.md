---
title: 'Strings'
sidebar:
  order: 8
---

 



In C#, a string is a sequence of characters. It is one of the most commonly used data types in programming. Here are some examples of working with strings in C#:





To declare a string variable in C#, you can use the `string` keyword. Here's an example:



```csharp

string message = "Hello, world!";

```





You can concatenate two or more strings together using the `+` operator. Here's an example:



```csharp

string firstName = "John";

string lastName = "Doe";

string fullName = firstName + " " + lastName;

```





String interpolation is a convenient way to embed expressions within a string. It allows you to include variables or expressions directly within the string. Here's an example:



```csharp

string name = "Alice";

int age = 25;

string message = $"My name is {name} and I am {age} years old.";

```





To get the length of a string in C#, you can use the `Length` property. Here's an example:



```csharp

string text = "Hello, world!";

int length = text.Length;

```



These are just a few examples of working with strings in C#. Strings are a versatile and powerful data type that you will frequently encounter in your C# programming journey.
