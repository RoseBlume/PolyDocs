---
title: 'Booleans'
sidebar:
  order: 9
---

 

In PHP, a boolean is a data type that represents either `true` or `false`. Booleans are commonly used in programming to make decisions and control the flow of a program.





You can create a boolean variable in PHP by assigning the values `true` or `false` to it. For example:



```php

$loggedIn = true;

$isAdmin = false;

```





PHP provides several comparison operators that return boolean values. These operators are used to compare two values and determine if a certain condition is true or false. Some of the commonly used comparison operators in PHP are:



- `==` (equal to)

- `!=` (not equal to)

- `>` (greater than)

- `<` (less than)

- `>=` (greater than or equal to)

- `<=` (less than or equal to)





PHP also provides logical operators that can be used to combine multiple boolean values or expressions. The commonly used logical operators in PHP are:



- `&&` (logical AND)

- `||` (logical OR)

- `!` (logical NOT)



These operators are used to create complex conditions by combining multiple boolean values or expressions.





Conditional statements in PHP allow you to execute different blocks of code based on certain conditions. The most commonly used conditional statement in PHP is the `if` statement. Here's an example:



```php

if ($loggedIn && $isAdmin) {

  echo "Welcome, admin!";

} else {

  echo "Access denied.";

}

```



In the above example, if both `$loggedIn` and `$isAdmin` are `true`, the message "Welcome, admin!" will be displayed. Otherwise, the message "Access denied." will be displayed.





Understanding booleans and how to use them in PHP is essential for writing conditional logic and making decisions in your programs. By using booleans, you can control the flow of your code and create dynamic behavior.
