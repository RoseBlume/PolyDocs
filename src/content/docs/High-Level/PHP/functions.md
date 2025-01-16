---
title: 'Functions'
sidebar:
  order: 3
---

 Functions in PHP allow you to encapsulate a block of code that can be reused throughout your program. They help in organizing your code and making it more modular.



To define a function in PHP, you can use the `function` keyword followed by the function name and a pair of parentheses. You can also specify any parameters that the function accepts within the parentheses. Here's an example:



```php

function greet($name) {

  echo "Hello, $name!";

}

```



In the above example, we have defined a function called `greet` that accepts a parameter `$name`. The function simply echoes a greeting message with the provided name.



To call a function in PHP, you can simply use its name followed by a pair of parentheses. You can pass any required arguments within the parentheses. Here's how you can call the `greet` function:



```php

greet("John");

```



This will output: `Hello, John!`



Functions can also return values in PHP. You can use the `return` keyword followed by the value you want to return. Here's an example:



```php

function add($a, $b) {

  return $a + $b;

}

```



In the above example, we have defined a function called `add` that accepts two parameters `$a` and `$b`. The function returns the sum of the two numbers.



To use the returned value, you can assign it to a variable or use it directly. Here's how you can use the `add` function:



```php

$result = add(5, 3);

echo $result; // Output: 8

```



In this case, the value `8` will be assigned to the variable `$result` and then echoed.



Functions in PHP are a powerful tool for code reuse and organization. They allow you to write modular and maintainable code.