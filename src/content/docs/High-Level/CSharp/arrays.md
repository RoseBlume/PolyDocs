---
title: 'Arrays'
sidebar:
  order: 9
---

 



In C#, an array is a collection of elements of the same type. It allows you to store multiple values in a single variable. Each value in the array is called an element, and each element is accessed by its index.





To declare an array in C#, you need to specify the type of elements it will hold, followed by the name of the array and square brackets `[]`. For example, to declare an array of integers:



```csharp

int[] numbers;

```





After declaring an array, you can initialize it with values using the `new` keyword. For example, to initialize an array of integers with three elements:



```csharp

int[] numbers = new int[3];

```





You can access individual elements of an array using their index. The index starts from 0 for the first element and increments by 1 for each subsequent element. For example, to access the first element of the `numbers` array:



```csharp

int firstNumber = numbers[0];

```





You can modify the value of an array element by assigning a new value to it. For example, to change the value of the second element of the `numbers` array:



```csharp

numbers[1] = 10;

```





The length of an array is the number of elements it can hold. You can get the length of an array using the `Length` property. For example, to get the length of the `numbers` array:



```csharp

int length = numbers.Length;

```



Arrays are a fundamental data structure in C# and are widely used in various programming scenarios. Understanding how to work with arrays is essential for building robust and efficient applications.


