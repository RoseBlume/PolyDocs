---
title: 'Arrays'
sidebar:
  order: 9
---

 



In Java, an array is a data structure that allows you to store multiple values of the same type. Each value in the array is called an element, and each element is accessed by its index.





To declare an array in Java, you need to specify the type of elements it will hold, followed by the array name and square brackets `[]`. For example, to declare an array of integers:



```java

int[] numbers;

```





After declaring an array, you can initialize it with values using the `new` keyword. For example, to initialize an array of integers with 5 elements:



```java

int[] numbers = new int[5];

```



You can also initialize an array with values directly:



```java

int[] numbers = {1, 2, 3, 4, 5};

```





Array elements are accessed using their index, which starts from 0. For example, to access the first element of the `numbers` array:



```java

int firstNumber = numbers[0];

```





You can modify the value of an array element by assigning a new value to it. For example, to change the value of the second element of the `numbers` array:



```java

numbers[1] = 10;

```





The length of an array can be obtained using the `length` property. For example, to get the length of the `numbers` array:



```java

int length = numbers.length;

```





Arrays are a fundamental data structure in Java that allow you to store and manipulate multiple values of the same type. Understanding how to declare, initialize, access, and modify array elements is essential for writing Java programs.
