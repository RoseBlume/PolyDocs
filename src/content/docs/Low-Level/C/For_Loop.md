---
title: 'For Loop'
sidebar:
  order: 0
---

 

In C programming, the `for` loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The `for` loop is typically used when the number of iterations is known before entering the loop.



The syntax of a `for` loop in C is as follows:



```c

for (initialization; condition; increment) {

    // Code to be executed

}

```



- **Initialization**: This step is executed first and only once. It allows you to declare and initialize any loop control variables.

- **Condition**: This is evaluated before each iteration. If the condition is true, the loop body is executed. If the condition is false, the loop terminates.

- **Increment**: This step is executed after each iteration of the loop body. It is typically used to update the loop control variable.



Here is an example of a `for` loop in C:



```c



int main() {

    int i;

    for (i = 0; i < 5; i++) {

        printf("Iteration %d\n", i);

    }

    return 0;

}

```



In this example, the loop will execute 5 times, printing the iteration number each time. The loop control variable `i` is initialized to 0, and the loop continues as long as `i` is less than 5. After each iteration, `i` is incremented by 1.



The `for` loop is a powerful tool in C programming, allowing you to efficiently repeat tasks with minimal code.
