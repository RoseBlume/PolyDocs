---
title: 'Booleans'
sidebar:
  order: 2
---

 In C++, the `bool` data type is used to represent Boolean values. A Boolean variable can hold one of two values: `true` or `false`.





To declare a Boolean variable in C++, you use the `bool` keyword. Here is an example:



```cpp

bool isRaining = true;

bool isSunny = false;

```



In this example, `isRaining` is set to `true`, and `isSunny` is set to `false`.





Boolean expressions are expressions that evaluate to a Boolean value (`true` or `false`). They are commonly used in control flow statements such as `if`, `while`, and `for` loops. Here are some examples:



```cpp

int a = 10;

int b = 20;



bool result = (a < b); // result is true because 10 is less than 20

```





C++ provides several logical operators that can be used to create complex Boolean expressions:



- `&&` (logical AND): Returns `true` if both operands are true.

- `||` (logical OR): Returns `true` if at least one operand is true.

- `!` (logical NOT): Returns `true` if the operand is false.



Here are some examples:



```cpp

bool a = true;

bool b = false;



bool result1 = a && b; // result1 is false because b is false

bool result2 = a || b; // result2 is true because a is true

bool result3 = !a;     // result3 is false because a is true

```





Booleans are often used in control flow statements to determine the flow of the program. Here is an example using an `if` statement:



```cpp

bool isRaining = true;



if (isRaining) {

    std::cout << "Don't forget to take an umbrella!" << std::endl;

} else {

    std::cout << "It's a sunny day!" << std::endl;

}

```



In this example, the message "Don't forget to take an umbrella!" will be printed because `isRaining` is `true`.



Understanding how to use Booleans effectively is crucial for controlling the flow of your C++ programs. They allow you to make decisions and execute code conditionally based on certain criteria.