---
title: 'When'
sidebar:
  order: 11
---

 When working with PHP, the `when` keyword is not a built-in feature. However, you can achieve similar functionality using conditional statements like `if`, `else if`, and `else`.



Here's an example of how you can use the `when` concept in PHP:



```php

$dayOfWeek = "Monday";



if ($dayOfWeek == "Monday") {

  echo "It's the start of the week!";

} else if ($dayOfWeek == "Friday") {

  echo "It's almost the weekend!";

} else {

  echo "It's just another day.";

}

```



In this example, we use the `if` statement to check the value of the `$dayOfWeek` variable. If it is equal to "Monday", we output "It's the start of the week!". If it is equal to "Friday", we output "It's almost the weekend!". Otherwise, we output "It's just another day."



You can extend this concept to handle more complex conditions and multiple `else if` statements as needed.