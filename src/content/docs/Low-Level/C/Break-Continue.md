---
title: 'Break-Continue'
sidebar:
  order: 2
---

 

In C programming, the `break` and `continue` statements are used to control the flow of loops. These statements provide a way to exit or skip iterations in loops, respectively.





The `break` statement is used to terminate the execution of the nearest enclosing loop or switch statement in which it appears. When a `break` statement is encountered inside a loop, the loop is immediately terminated, and the program control resumes at the next statement following the loop.



```c

break;

```



```c



int main() {

    for (int i = 0; i < 10; i++) {

        if (i == 5) {

            break; // Exit the loop when i is 5

        }

        printf("%d\n", i);

    }

    return 0;

}

```

In this example, the loop will print numbers from 0 to 4. When `i` becomes 5, the `break` statement will terminate the loop.





The `continue` statement is used to skip the current iteration of the loop and proceed with the next iteration. When a `continue` statement is encountered, the remaining code inside the loop for the current iteration is skipped, and the loop proceeds with the next iteration.



```c

continue;

```



```c



int main() {

    for (int i = 0; i < 10; i++) {

        if (i % 2 == 0) {

            continue; // Skip the current iteration if i is even

        }

        printf("%d\n", i);

    }

    return 0;

}

```

In this example, the loop will print only odd numbers from 1 to 9. When `i` is even, the `continue` statement will skip the rest of the loop body and proceed with the next iteration.



Understanding how to use `break` and `continue` statements effectively can help you control the flow of your loops and make your code more efficient and readable.
