---
title: 'Functions'
sidebar:
  order: 7
---

 Functions in C++ are blocks of code that perform a specific task. They help in organizing code into manageable sections and promote code reusability. Here, we will discuss the syntax, declaration, and usage of functions in C++.





A function must be declared before it is used. The declaration provides the compiler with the function's name, return type, and parameters. The syntax for declaring a function is:



```cpp

return_type function_name(parameter_list);

```



For example:



```cpp

int add(int a, int b);

```





The function definition contains the actual body of the function. It includes the code that will be executed when the function is called. The syntax for defining a function is:



```cpp

return_type function_name(parameter_list) {

    // function body

}

```



For example:



```cpp

int add(int a, int b) {

    return a + b;

}

```





To use a function, you need to call it in your code. A function call includes the function name followed by arguments in parentheses. For example:



```cpp

int result = add(5, 3);

```





The `return` statement is used to return a value from a function. The type of the value returned must match the function's return type. For example:



```cpp

return a + b;

```





Functions can take parameters, which are variables passed to the function. Parameters can be passed by value or by reference.





When parameters are passed by value, a copy of the argument is made. Changes to the parameter within the function do not affect the original argument.



```cpp

void increment(int a) {

    a++;

}

```





When parameters are passed by reference, the function operates on the actual argument. Changes to the parameter within the function affect the original argument.



```cpp

void increment(int &a) {

    a++;

}

```





C++ allows multiple functions with the same name but different parameters. This is called function overloading. The compiler differentiates the functions based on the number and type of parameters.



```cpp

int add(int a, int b) {

    return a + b;

}



double add(double a, double b) {

    return a + b;

}

```





Inline functions are defined with the `inline` keyword. They are expanded in line where they are called, which can improve performance for small functions.



```cpp

inline int square(int x) {

    return x * x;

}

```





A function that calls itself is known as a recursive function. Recursion can be a powerful tool for solving problems that can be broken down into smaller, similar problems.



```cpp

int factorial(int n) {

    if (n <= 1) return 1;

    else return n * factorial(n - 1);

}

```



Understanding functions is crucial for mastering C++ programming. They provide a way to modularize code, making it more readable, maintainable, and reusable.