---
title: 'Loops'
sidebar:
  order: 5
---

 ```php



In PHP, loops are used to repeatedly execute a block of code until a certain condition is met. There are several types of loops available in PHP:





The `for` loop is used when you know the number of times you want to execute a block of code. It consists of three parts: initialization, condition, and increment/decrement.



```php

for ($i = 0; $i < 5; $i++) {

  // code to be executed

}

```





The `while` loop is used when you want to execute a block of code as long as a certain condition is true.



```php

$i = 0;

while ($i < 5) {

  // code to be executed

  $i++;

}

```





The `do-while` loop is similar to the `while` loop, but the condition is checked after executing the block of code. This means that the block of code will always be executed at least once.



```php

$i = 0;

do {

  // code to be executed

  $i++;

} while ($i < 5);

```





The `foreach` loop is used to iterate over arrays or objects. It automatically assigns the current value of the array or object to a variable.



```php

$fruits = ["apple", "banana", "orange"];

foreach ($fruits as $fruit) {

  // code to be executed

  echo $fruit;

}

```



These are the basic loop structures in PHP. They allow you to efficiently repeat code and perform repetitive tasks. Choose the appropriate loop based on your specific requirements.

```