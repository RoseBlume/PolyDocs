---
title: 'Ranges'
sidebar:
  order: 7
---

 



Ranges in C# provide a concise and expressive way to work with a subset of elements in an array or a collection. They allow you to easily specify a range of indices or positions to access or manipulate.





The basic syntax for defining a range in C# is `[start..end]`, where `start` and `end` are the indices or positions of the elements you want to include in the range. The `start` index is inclusive, while the `end` index is exclusive.



Here's an example that demonstrates the basic range syntax:



```csharp

int[] numbers = { 1, 2, 3, 4, 5 };



// Accessing a range of elements

int[] range = numbers[1..4]; // [2, 3, 4]

```



In the above example, we have an array of numbers and we use the range `[1..4]` to access elements at indices 1, 2, and 3.





C# provides two range operators: `..` and `..^`. The `..` operator specifies a range from the start index to the end index, while the `..^` operator specifies a range from the start index to the end index, excluding the last element.



Here's an example that demonstrates the use of range operators:



```csharp

int[] numbers = { 1, 2, 3, 4, 5 };



// Accessing a range of elements using range operators

int[] range1 = numbers[1..^1]; // [2, 3, 4]

int[] range2 = numbers[..^2]; // [1, 2, 3]

```



In the above example, `range1` uses the `..^1` operator to exclude the last element, while `range2` uses the `..^2` operator to exclude the last two elements.





Ranges in C# provide a powerful and concise way to work with subsets of arrays or collections. They allow you to easily specify a range of indices or positions to access or manipulate. By understanding the basic syntax and range operators, you can leverage the full potential of ranges in your C# code.



For more information, refer to the [official documentation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/ranges).
