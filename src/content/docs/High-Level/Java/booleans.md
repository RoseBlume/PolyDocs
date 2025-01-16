---
title: 'Booleans'
sidebar:
  order: 10
---

 

In Java, the `boolean` data type represents a boolean value, which can be either `true` or `false`. Booleans are commonly used in programming to control the flow of execution based on certain conditions.





You can declare a boolean variable in Java using the `boolean` keyword. Here's an example:



```java

boolean isRaining = true;

boolean isSunny = false;

```



In the above example, we have declared two boolean variables `isRaining` and `isSunny` and assigned them the values `true` and `false` respectively.





Boolean expressions are expressions that evaluate to a boolean value. They are commonly used in conditional statements and loops. Here are some examples of boolean expressions in Java:



```java

int x = 5;

int y = 10;



boolean isGreater = x > y; // false

boolean isEqual = x == y; // false

boolean isLessOrEqual = x <= y; // true

```



In the above example, we have used comparison operators (`>`, `==`, `<=`) to create boolean expressions.





Java provides several boolean operators that can be used to combine boolean values or evaluate boolean expressions. Here are some commonly used boolean operators in Java:



- `&&` (logical AND): Returns `true` if both operands are `true`, otherwise returns `false`.

- `||` (logical OR): Returns `true` if at least one of the operands is `true`, otherwise returns `false`.

- `!` (logical NOT): Returns the opposite boolean value of the operand.



Here's an example that demonstrates the usage of boolean operators:



```java

boolean isSunny = true;

boolean isWarm = false;



boolean isSunnyAndWarm = isSunny && isWarm; // false

boolean isSunnyOrWarm = isSunny || isWarm; // true

boolean isNotSunny = !isSunny; // false

```



In the above example, we have used the logical AND (`&&`), logical OR (`||`), and logical NOT (`!`) operators to combine or negate boolean values.





In this tutorial, we have learned about booleans in Java. We explored how to declare boolean variables, create boolean expressions, and use boolean operators. Booleans are an essential part of programming and are used extensively in decision-making and control flow.