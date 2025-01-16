---
title: 'If-Else'
sidebar:
  order: 5
---

 

In Java, the `if-else` statement is used to make decisions based on certain conditions. It allows the program to execute different blocks of code depending on whether a condition is true or false.



Here's the basic syntax of the `if-else` statement in Java:



```java

if (condition) {

    // code to be executed if the condition is true

} else {

    // code to be executed if the condition is false

}

```



Here's an example that demonstrates the usage of `if-else` in Java:



```java

int number = 10;



if (number > 0) {

    System.out.println("The number is positive.");

} else {

    System.out.println("The number is non-positive.");

}

```



In this example, if the `number` variable is greater than 0, the program will print "The number is positive." Otherwise, it will print "The number is non-positive."



You can also use multiple `else if` statements to handle multiple conditions. Here's an example:



```java

int number = 0;



if (number > 0) {

    System.out.println("The number is positive.");

} else if (number < 0) {

    System.out.println("The number is negative.");

} else {

    System.out.println("The number is zero.");

}

```



In this example, if the `number` variable is greater than 0, it will print "The number is positive." If the `number` variable is less than 0, it will print "The number is negative." Otherwise, it will print "The number is zero."



That's the basic usage of the `if-else` statement in Java. It allows you to control the flow of your program based on different conditions.
