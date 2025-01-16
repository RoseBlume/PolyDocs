---
title: 'Variables'
sidebar:
  order: 0
---

 

In C++, variables are used to store data that can be manipulated by the program. Each variable in C++ must be declared with a specific data type, which determines the kind of data it can hold.





To declare a variable, you need to specify the data type followed by the variable name. Here is the basic syntax:



```cpp

data_type variable_name;

```



For example:



```cpp

int age;

double salary;

char grade;

```



In the above examples, `age` is an integer variable, `salary` is a double-precision floating-point variable, and `grade` is a character variable.





You can also initialize a variable at the time of declaration:



```cpp

int age = 25;

double salary = 50000.50;

char grade = 'A';

```





The scope of a variable is the region of the program where the variable is accessible. Variables can be declared inside a function (local variables) or outside any function (global variables).





Local variables are declared inside a function and can only be used within that function:



```cpp

void myFunction() {

    int localVar = 10;

    // localVar can be used here

}

// localVar cannot be used here

```





Global variables are declared outside of all functions and can be accessed by any function in the program:



```cpp

int globalVar = 20;



void myFunction() {

    // globalVar can be used here

}

```





If you want to declare a variable whose value cannot be changed, you can use the `const` keyword:



```cpp

const int DAYS_IN_WEEK = 7;

```





Variables are fundamental to programming in C++. They allow you to store and manipulate data within your programs. Understanding how to declare, initialize, and use variables, as well as knowing their scope, is essential for writing effective C++ code.
