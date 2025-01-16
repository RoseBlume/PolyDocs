---
title: 'Operators'
sidebar:
  order: 1
---

 

In PHP, arithmetic operators are used to perform mathematical operations on variables or values. Here are some commonly used arithmetic operators:



- Addition: `+`

- Subtraction: `-`

- Multiplication: `*`

- Division: `/`

- Modulus: `%`

- Exponentiation: `**`



Example:



```php

$a = 10;

$b = 5;



// Addition

$result = $a + $b;

echo "Addition: " . $result . "<br>";



// Subtraction

$result = $a - $b;

echo "Subtraction: " . $result . "<br>";



// Multiplication

$result = $a * $b;

echo "Multiplication: " . $result . "<br>";



// Division

$result = $a / $b;

echo "Division: " . $result . "<br>";



// Modulus

$result = $a % $b;

echo "Modulus: " . $result . "<br>";



// Exponentiation

$result = $a ** $b;

echo "Exponentiation: " . $result . "<br>";

```





Comparison operators are used to compare two values in PHP. They return either `true` or `false` based on the comparison result. Here are some commonly used comparison operators:



- Equal to: `==`

- Not equal to: `!=`

- Identical to: `===`

- Not identical to: `!==`

- Greater than: `>`

- Less than: `<`

- Greater than or equal to: `>=`

- Less than or equal to: `<=`



Example:



```php

$a = 10;

$b = 5;



// Equal to

$result = $a == $b;

echo "Equal to: " . var_export($result, true) . "<br>";



// Not equal to

$result = $a != $b;

echo "Not equal to: " . var_export($result, true) . "<br>";



// Identical to

$result = $a === $b;

echo "Identical to: " . var_export($result, true) . "<br>";



// Not identical to

$result = $a !== $b;

echo "Not identical to: " . var_export($result, true) . "<br>";



// Greater than

$result = $a > $b;

echo "Greater than: " . var_export($result, true) . "<br>";



// Less than

$result = $a < $b;

echo "Less than: " . var_export($result, true) . "<br>";



// Greater than or equal to

$result = $a >= $b;

echo "Greater than or equal to: " . var_export($result, true) . "<br>";



// Less than or equal to

$result = $a <= $b;

echo "Less than or equal to: " . var_export($result, true) . "<br>";

```



These are just a few examples of operators in PHP. There are many more operators available for different purposes. Make sure to refer to the PHP documentation for a complete list and detailed explanations.