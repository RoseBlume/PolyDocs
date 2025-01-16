---
title: 'While Loop'
sidebar:
  order: 1
---

 In C programming, the `while` loop is used to repeatedly execute a block of statements as long as a given condition is true. The syntax of the `while` loop is as follows:



```c

while (condition) {

    // statements to be executed

}

```





Here is a simple example of a `while` loop that prints numbers from 1 to 5:



```c



int main() {

    int i = 1;



    while (i <= 5) {

        printf("%d\n", i);

        i++;

    }



    return 0;

}

```



In this example, the loop continues to execute as long as the condition `i <= 5` is true. The variable `i` is incremented by 1 in each iteration, and the loop stops when `i` becomes 6.





A `while` loop can also create an infinite loop if the condition never becomes false. For example:



```c



int main() {

    while (1) {

        printf("This loop will run forever.\n");

    }



    return 0;

}

```



In this case, the condition `1` is always true, so the loop will run indefinitely. To stop an infinite loop, you can use a `break` statement or an external intervention.





You can control the flow of a `while` loop using `break` and `continue` statements. The `break` statement terminates the loop, while the `continue` statement skips the rest of the loop body and proceeds with the next iteration.



```c



int main() {

    int i = 1;



    while (i <= 10) {

        if (i == 5) {

            i++;

            continue; // Skip the rest of the loop when i is 5

        }

        if (i == 8) {

            break; // Terminate the loop when i is 8

        }

        printf("%d\n", i);

        i++;

    }



    return 0;

}

```



In this example, the loop skips printing the number 5 and stops completely when the number 8 is reached.



Understanding the `while` loop is essential for controlling the flow of your programs and performing repetitive tasks efficiently.