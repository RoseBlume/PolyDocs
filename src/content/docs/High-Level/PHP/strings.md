---
title: 'Strings'
sidebar:
  order: 7
---

 

In PHP, strings are a fundamental data type used to store and manipulate text. PHP provides a wide range of functions and methods for working with strings.





To concatenate two strings together, you can use the `.` operator. For example:



```php

$name = "John";

$greeting = "Hello, " . $name . "!";

echo $greeting; // Output: Hello, John!

```





To get the length of a string, you can use the `strlen()` function. For example:



```php

$text = "Hello, world!";

$length = strlen($text);

echo $length; // Output: 13

```





To extract a portion of a string, you can use the `substr()` function. It takes two parameters: the string and the starting index. For example:



```php

$text = "Hello, world!";

$substring = substr($text, 7);

echo $substring; // Output: world!

```





To replace a specific substring within a string, you can use the `str_replace()` function. It takes three parameters: the substring to be replaced, the replacement string, and the original string. For example:



```php

$text = "Hello, world!";

$newText = str_replace("world", "PHP", $text);

echo $newText; // Output: Hello, PHP!

```





PHP provides functions to convert the case of a string. For example, `strtolower()` converts a string to lowercase, and `strtoupper()` converts a string to uppercase.



```php

$text = "Hello, world!";

$lowercase = strtolower($text);

$uppercase = strtoupper($text);

echo $lowercase; // Output: hello, world!

echo $uppercase; // Output: HELLO, WORLD!

```



These are just a few examples of the string manipulation capabilities in PHP. PHP offers many more functions and methods to work with strings, so make sure to explore the PHP documentation for more information.
