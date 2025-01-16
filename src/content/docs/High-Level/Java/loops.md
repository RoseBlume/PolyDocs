---
title: 'Loops'
sidebar:
  order: 6
---

 

In Java, loops are used to repeatedly execute a block of code until a certain condition is met. There are three types of loops in Java: `for`, `while`, and `do-while`.





The `for` loop is used when you know the number of times you want to execute a block of code. It consists of three parts: initialization, condition, and increment/decrement.



```java

for (int i = 0; i < 5; i++) {

    System.out.println("Iteration: " + i);

}

```



This `for` loop will execute the code block 5 times, printing the iteration number each time.





The `while` loop is used when you want to repeatedly execute a block of code as long as a certain condition is true.



```java

int i = 0;

while (i < 5) {

    System.out.println("Iteration: " + i);

    i++;

}

```



This `while` loop will execute the code block as long as `i` is less than 5, printing the iteration number each time.





The `do-while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once, even if the condition is false.



```java

int i = 0;

do {

    System.out.println("Iteration: " + i);

    i++;

} while (i < 5);

```



This `do-while` loop will execute the code block at least once, and then continue executing it as long as `i` is less than 5, printing the iteration number each time.



These are the basic loop structures in Java. They allow you to repeat code execution and are essential for implementing iterative algorithms and performing repetitive tasks.
