---
title: 'Ranges'
sidebar:
  order: 6
---

 Ranges in PHP allow you to specify a sequence of values in a concise and efficient way. They are commonly used in loops, array generation, and other scenarios where you need to work with a consecutive set of values.



To create a range in PHP, you can use the `range()` function. It takes three arguments: the starting value, the ending value, and an optional step value. The function returns an array containing all the values in the specified range.



Here's an example of creating a range of numbers from 1 to 10:



```php

$numbers = range(1, 10);

print_r($numbers);

```



Output:

```

Array

(

  [0] => 1

  [1] => 2

  [2] => 3

  [3] => 4

  [4] => 5

  [5] => 6

  [6] => 7

  [7] => 8

  [8] => 9