---
title: 'For Loop'
sidebar:
  order: 0
---

 A `for` loop in C++ is used to iterate over a range of values. It is commonly used when the number of iterations is known before entering the loop. The syntax of a `for` loop is as follows:



```cpp

for (initialization; condition; increment) {

    // code to be executed

}

```





1. **Initialization**: This is executed only once at the beginning of the loop. It is typically used to initialize a loop control variable.

2. **Condition**: Before each iteration, the condition is evaluated. If it is `true`, the loop body is executed. If it is `false`, the loop terminates.

3. **Increment**: This is executed after each iteration of the loop body. It is typically used to update the loop control variable.





Here is an example of a simple `for` loop that prints numbers from 1 to 5:



```cpp



int main() {

    for (int i = 1; i <= 5; ++i) {

        std::cout << i << std::endl;

    }

    return 0;

}

```





- **Initialization**: `int i = 1` initializes the loop control variable `i` to 1.

- **Condition**: `i <= 5` checks if `i` is less than or equal to 5. If true, the loop continues; otherwise, it stops.

- **Increment**: `++i` increments the value of `i` by 1 after each iteration.





You can also nest `for` loops, which means having a `for` loop inside another `for` loop. This is useful for iterating over multi-dimensional arrays or performing complex iterations.



```cpp



int main() {

    for (int i = 1; i <= 3; ++i) {

        for (int j = 1; j <= 2; ++j) {

            std::cout << "i = " << i << ", j = " << j << std::endl;

        }

    }

    return 0;

}

```



In this example, the outer loop runs 3 times, and for each iteration of the outer loop, the inner loop runs 2 times.



The `for` loop is a powerful and flexible control structure in C++ that allows you to efficiently repeat a block of code. Understanding its components and how to use it effectively is essential for writing clear and concise code.