---
title: 'If-Else'
sidebar:
  order: 4
---

 If-Else statements in PHP allow you to execute different blocks of code based on certain conditions. The syntax for an if-else statement is as follows:



```php

if (condition) {

  // code to be executed if the condition is true

} else {

  // code to be executed if the condition is false

}

```



The `condition` is an expression that evaluates to either true or false. If the condition is true, the code inside the if block will be executed. If the condition is false, the code inside the else block will be executed.



Here's an example that demonstrates the usage of if-else statements in PHP:



```php

$age = 25;



if ($age >= 18) {

  echo "You are eligible to vote.";

} else {

  echo "You are not eligible to vote.";

}

```



In this example, if the value of `$age` is greater than or equal to 18, the message "You are eligible to vote." will be displayed. Otherwise, the message "You are not eligible to vote." will be displayed.



You can also have multiple conditions using elseif:



```php

$score = 85;



if ($score >= 90) {

  echo "You got an A.";

} elseif ($score >= 80) {

  echo "You got a B.";

} elseif ($score >= 70) {

  echo "You got a C.";

} else {

  echo "You need to improve your score.";

}

```



In this example, the code checks the value of `$score` and displays a corresponding message based on the score range.



Remember to end your if-else statements with a semicolon after each statement or block of code.
