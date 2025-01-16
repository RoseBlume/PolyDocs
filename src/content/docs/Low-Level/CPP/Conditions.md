---
title: 'Conditions'
sidebar:
  order: 4
---

 In C++, conditions are used to perform different actions based on different conditions. The most common conditional statements are `if`, `else if`, and `else`.





The `if` statement is used to execute a block of code if a specified condition is true.



```cpp

if (condition) {

    // code to be executed if condition is true

}

```





```cpp

int x = 10;

if (x > 5) {

    std::cout << "x is greater than 5" << std::endl;

}

```



In this example, the message "x is greater than 5" will be printed because the condition `x > 5` is true.





The `else if` statement specifies a new condition to test if the first condition is false.



```cpp

if (condition1) {

    // code to be executed if condition1 is true

} else if (condition2) {

    // code to be executed if condition1 is false and condition2 is true

}

```





```cpp

int x = 10;

if (x > 15) {

    std::cout << "x is greater than 15" << std::endl;

} else if (x > 5) {

    std::cout << "x is greater than 5 but less than or equal to 15" << std::endl;

}

```



In this example, the message "x is greater than 5 but less than or equal to 15" will be printed because the first condition `x > 15` is false, but the second condition `x > 5` is true.





The `else` statement executes a block of code if none of the previous conditions are true.



```cpp

if (condition1) {

    // code to be executed if condition1 is true

} else if (condition2) {

    // code to be executed if condition1 is false and condition2 is true

} else {

    // code to be executed if none of the conditions are true

}

```





```cpp

int x = 3;

if (x > 15) {

    std::cout << "x is greater than 15" << std::endl;

} else if (x > 5) {

    std::cout << "x is greater than 5 but less than or equal to 15" << std::endl;

} else {

    std::cout << "x is 5 or less" << std::endl;

}

```



In this example, the message "x is 5 or less" will be printed because both conditions `x > 15` and `x > 5` are false.





You can also use nested `if` statements, which are `if` statements inside another `if` statement.



```cpp

if (condition1) {

    if (condition2) {

        // code to be executed if both condition1 and condition2 are true

    }

}

```





```cpp

int x = 10;

int y = 20;

if (x > 5) {

    if (y > 15) {

        std::cout << "x is greater than 5 and y is greater than 15" << std::endl;

    }

}

```



In this example, the message "x is greater than 5 and y is greater than 15" will be printed because both conditions `x > 5` and `y > 15` are true.



Understanding and using conditional statements effectively is crucial for controlling the flow of your C++ programs.