---
title: 'Break-Continue'
sidebar:
  order: 10
---

 



In PHP, the `break` and `continue` statements are used to control the flow of loops.





The `break` statement is used to exit a loop prematurely. It is commonly used with the `while`, `do-while`, `for`, and `switch` statements.



Here's an example of using `break` in a `while` loop:



```php

$i = 0;

while ($i < 10) {

  if ($i === 5) {

    break;

  }

  echo $i;

  $i++;

}

```



In the above example, the loop will terminate when the value of `$i` becomes 5.





The `continue` statement is used to skip the rest of the current iteration and move to the next iteration of a loop. It is also commonly used with the `while`, `do-while`, `for`, and `foreach` statements.



Here's an example of using `continue` in a `for` loop:



```php

for ($i = 0; $i < 10; $i++) {

  if ($i % 2 === 0) {

    continue;

  }

  echo $i;

}

```



In the above example, the loop will skip even numbers and only print odd numbers.



Both `break` and `continue` statements are powerful tools for controlling the flow of loops in PHP.
