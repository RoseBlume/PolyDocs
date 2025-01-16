---
title: 'Recursion'
sidebar:
  order: 8
---

 Recursion is a powerful tool in C++ that allows a function to call itself. This technique can simplify the code for problems that have a natural recursive structure, such as tree traversals, factorial calculations, and the Fibonacci sequence.





To understand recursion, you need to understand two main concepts: the base case and the recursive case.





The base case is the condition under which the recursion ends. Without a base case, the function would call itself indefinitely, leading to a stack overflow.





The recursive case is where the function calls itself with a modified argument, gradually moving towards the base case.





The factorial of a number `n` is the product of all positive integers less than or equal to `n`. It is denoted as `n!`. The factorial can be defined recursively as:



- `0! = 1` (base case)

- `n! = n * (n - 1)!` (recursive case)



Here is a C++ function to calculate the factorial of a number using recursion:



```cpp



int factorial(int n) {

    if (n == 0) {

        return 1; // base case

    } else {

        return n * factorial(n - 1); // recursive case

    }

}



int main() {

    int number = 5;

    std::cout << "Factorial of " << number << " is " << factorial(number) << std::endl;

    return 0;

}

```





The Fibonacci sequence is another example where recursion can be applied. The sequence is defined as:



- `F(0) = 0` (base case)

- `F(1) = 1` (base case)

- `F(n) = F(n - 1) + F(n - 2)` (recursive case)



Here is a C++ function to calculate the nth Fibonacci number using recursion:



```cpp



int fibonacci(int n) {

    if (n <= 1) {

        return n; // base case

    } else {

        return fibonacci(n - 1) + fibonacci(n - 2); // recursive case

    }

}



int main() {

    int number = 10;

    std::cout << "Fibonacci number " << number << " is " << fibonacci(number) << std::endl;

    return 0;

}

```







- Simplifies code for problems with a natural recursive structure.

- Easier to read and understand for certain problems.





- Can lead to high memory usage due to function call stack.

- May be less efficient than iterative solutions for some problems.



Recursion is a fundamental concept in C++ that can simplify the implementation of complex algorithms. However, it is important to use it judiciously, considering both its advantages and potential drawbacks.