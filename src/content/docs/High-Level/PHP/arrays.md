---
title: 'Arrays'
sidebar:
  order: 8
---

 



In PHP, an array is a data structure that can store multiple values of different types. It is a versatile and powerful feature of the language.





To create an array in PHP, you can use the `array()` function or the shorthand `[]` syntax. Here's an example:



```php

// Using array() function

$fruits = array("apple", "banana", "orange");



// Using shorthand syntax

$numbers = [1, 2, 3, 4, 5];

```





You can access individual elements of an array using their index. In PHP, array indices start from 0. Here's how you can access array elements:



```php

$fruits = array("apple", "banana", "orange");



echo $fruits[0]; // Output: apple

echo $fruits[1]; // Output: banana

echo $fruits[2]; // Output: orange

```





You can modify array elements by assigning new values to their respective indices. Here's an example:



```php

$fruits = array("apple", "banana", "orange");



$fruits[1] = "grape"; // Modifying the second element



echo $fruits[1]; // Output: grape

```





PHP provides a variety of built-in functions to manipulate arrays. Some commonly used array functions include:



- `count()`: Returns the number of elements in an array.

- `array_push()`: Adds one or more elements to the end of an array.

- `array_pop()`: Removes and returns the last element of an array.

- `array_merge()`: Merges two or more arrays into a single array.



These are just a few examples, and there are many more array functions available in PHP.





Arrays are an essential part of PHP programming. They allow you to store and manipulate multiple values efficiently. Understanding how to create, access, and modify arrays will greatly enhance your PHP coding skills.
