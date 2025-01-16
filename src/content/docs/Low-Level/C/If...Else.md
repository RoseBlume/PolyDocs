---
title: 'If...Else'
sidebar:
  order: 7
---

 

In C programming, the `if...else` statement is used to perform conditional operations. It allows the program to execute certain code blocks based on whether a condition is true or false.





```c

if (condition) {

    // Code to execute if condition is true

} else {

    // Code to execute if condition is false

}

```





Here is a simple example to demonstrate the use of `if...else`:



```c



int main() {

    int number = 10;



    if (number > 0) {

        printf("The number is positive.\n");

    } else {

        printf("The number is not positive.\n");

    }



    return 0;

}

```



In this example, the program checks if the variable `number` is greater than 0. If the condition is true, it prints "The number is positive." Otherwise, it prints "The number is not positive."





You can also nest `if...else` statements to check multiple conditions:



```c



int main() {

    int number = 0;



    if (number > 0) {

        printf("The number is positive.\n");

    } else if (number < 0) {

        printf("The number is negative.\n");

    } else {

        printf("The number is zero.\n");

    }



    return 0;

}

```



In this example, the program checks if the variable `number` is greater than 0, less than 0, or equal to 0, and prints the corresponding message.





The `if...else` statement is a fundamental control structure in C that allows you to make decisions in your code. By using `if...else`, you can execute different code blocks based on various conditions, making your programs more dynamic and flexible.
