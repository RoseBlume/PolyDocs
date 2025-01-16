---
title: 'Loops'
sidebar:
  order: 9
---

 

In C programming, loops are used to execute a block of code repeatedly until a specified condition is met. There are three main types of loops in C:





The `for` loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.



```c

for (initialization; condition; increment) {

    // Code to be executed

}

```



Example:



```c



int main() {

    for (int i = 0; i < 5; i++) {

        printf("Iteration %d\n", i);

    }

    return 0;

}

```





The `while` loop is used when the number of iterations is not known and depends on a condition. The loop continues as long as the condition is true.



```c

while (condition) {

    // Code to be executed

}

```



Example:



```c



int main() {

    int i = 0;

    while (i < 5) {

        printf("Iteration %d\n", i);

        i++;

    }

    return 0;

}

```





The `do-while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once before the condition is tested.



```c

do {

    // Code to be executed

} while (condition);

```



Example:



```c



int main() {

    int i = 0;

    do {

        printf("Iteration %d\n", i);

        i++;

    } while (i < 5);

    return 0;

}

```



Understanding these loops is crucial for controlling the flow of your programs and performing repetitive tasks efficiently.
