---
title: 'Syntax'
sidebar:
  order: 1
---

 

In C, variables must be declared before they are used. A variable declaration specifies the type and name of the variable. For example:



```c

int age;

float salary;

char initial;

```





C provides several data types, including:



- `int`: Integer type

- `float`: Floating point type

- `double`: Double precision floating point type

- `char`: Character type





C supports a variety of operators, including:



- Arithmetic operators: `+`, `-`, `*`, `/`, `%`

- Relational operators: `==`, `!=`, `>`, `<`, `>=`, `<=`

- Logical operators: `&&`, `||`, `!`





C provides several control structures for managing the flow of the program:





The `if` statement allows conditional execution of code:



```c

if (condition) {

    // code to execute if condition is true

}

```





The `for` loop is used for iterating over a range of values:



```c

for (initialization; condition; increment) {

    // code to execute in each iteration

}

```





The `while` loop continues to execute as long as the condition is true:



```c

while (condition) {

    // code to execute while condition is true

}

```





Functions in C are blocks of code that perform a specific task. They are declared with a return type, name, and parameters:



```c

returnType functionName(parameter1, parameter2) {

    // code to execute

}

```



For example:



```c

int add(int a, int b) {

    return a + b;

}

```