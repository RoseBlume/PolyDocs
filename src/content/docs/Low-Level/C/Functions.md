---
title: 'Functions'
sidebar:
  order: 10
---

 Functions in C are a fundamental building block for creating reusable code. They allow you to encapsulate a block of code and call it whenever needed. Here’s how you can define and use functions in C.





A function definition in C has the following syntax:



```c

return_type function_name(parameter_list) {

    // body of the function

}

```



- `return_type`: The data type of the value the function returns. If the function does not return a value, use `void`.

- `function_name`: The name of the function. Choose a meaningful name that describes what the function does.

- `parameter_list`: A comma-separated list of parameters that the function takes. Each parameter must have a data type and a name.





Here’s an example of a simple function that adds two integers:



```c

int add(int a, int b) {

    return a + b;

}

```



In this example:

- The function `add` takes two integer parameters, `a` and `b`.

- It returns the sum of `a` and `b`.





To call a function, use the function name followed by parentheses containing the arguments:



```c

int result = add(5, 3);

```



This calls the `add` function with arguments `5` and `3`, and stores the result in the variable `result`.





In C, it’s a good practice to declare a function prototype before defining the function. A function prototype provides the compiler with information about the function’s name, return type, and parameters. This allows you to call the function before its definition.





```c



// Function prototype

int add(int a, int b);



int main() {

    int result = add(5, 3);

    printf("The result is %d\n", result);

    return 0;

}



// Function definition

int add(int a, int b) {

    return a + b;

}

```



In this example:

- The function prototype `int add(int a, int b);` is declared before the `main` function.

- The function `add` is defined after the `main` function.





A function in C can call itself; this is known as recursion. Recursion is useful for solving problems that can be broken down into smaller, similar problems.





Here’s an example of a recursive function that calculates the factorial of a number:



```c

int factorial(int n) {

    if (n == 0) {

        return 1;

    } else {

        return n * factorial(n - 1);

    }

}

```



In this example:

- The `factorial` function calls itself with the argument `n - 1` until `n` is `0`.

- The base case is when `n` is `0`, at which point the function returns `1`.



Understanding functions in C is crucial for writing efficient and maintainable code. Practice defining and calling functions to become proficient in their use.