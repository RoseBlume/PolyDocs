---
title: 'Recursion'
sidebar:
  order: 21
---

 Recursion is a powerful technique in C programming where a function calls itself to solve a problem. This approach can simplify the code for problems that have a recursive structure, such as mathematical computations, tree traversals, and more.





A recursive function typically has two main components:

1. **Base Case**: The condition under which the function stops calling itself.

2. **Recursive Case**: The part of the function where it calls itself with modified arguments.



Here is a simple example of a recursive function to calculate the factorial of a number:



```c



// Function to calculate factorial

int factorial(int n) {

    if (n == 0) {

        return 1; // Base case

    } else {

        return n * factorial(n - 1); // Recursive case

    }

}



int main() {

    int number = 5;

    printf("Factorial of %d is %d\n", number, factorial(number));

    return 0;

}

```



In this example, the `factorial` function calls itself with the argument `n-1` until it reaches the base case where `n` is 0.





When a function calls itself, each call is placed on the call stack. The stack keeps track of the different states of each function call. When the base case is reached, the stack unwinds, and each function call returns its result to the previous call.



Consider the factorial example with `n = 3`:

- `factorial(3)` calls `factorial(2)`

- `factorial(2)` calls `factorial(1)`

- `factorial(1)` calls `factorial(0)`

- `factorial(0)` returns 1

- `factorial(1)` returns 1 * 1 = 1

- `factorial(2)` returns 2 * 1 = 2

- `factorial(3)` returns 3 * 2 = 6







If the base case is not defined correctly, the function may call itself indefinitely, leading to a stack overflow. For example:



```c

int faultyFunction(int n) {

    return faultyFunction(n - 1); // Missing base case

}

```





An incorrect base case can also lead to unexpected results or infinite recursion. Always ensure that the base case is well-defined and reachable.







The Fibonacci sequence is another classic example of recursion. Each number in the sequence is the sum of the two preceding ones.



```c



// Function to calculate Fibonacci number

int fibonacci(int n) {

    if (n <= 1) {

        return n; // Base case

    } else {

        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case

    }

}



int main() {

    int number = 10;

    printf("Fibonacci number at position %d is %d\n", number, fibonacci(number));

    return 0;

}

```





Recursion can also be used in algorithms like binary search, which efficiently finds an element in a sorted array.



```c



// Function to perform binary search

int binarySearch(int arr[], int low, int high, int target) {

    if (low > high) {

        return -1; // Base case: target not found

    }

    int mid = (low + high) / 2;

    if (arr[mid] == target) {

        return mid; // Base case: target found

    } else if (arr[mid] > target) {

        return binarySearch(arr, low, mid - 1, target); // Recursive case: search left half

    } else {

        return binarySearch(arr, mid + 1, high, target); // Recursive case: search right half

    }

}



int main() {

    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    int target = 7;

    int result = binarySearch(arr, 0, 9, target);

    if (result != -1) {

        printf("Element found at index %d\n", result);

    } else {

        printf("Element not found\n");

    }

    return 0;

}

```



Recursion is a versatile tool in C programming, but it should be used judiciously. Understanding the underlying mechanics and potential pitfalls will help you write efficient and effective recursive functions.