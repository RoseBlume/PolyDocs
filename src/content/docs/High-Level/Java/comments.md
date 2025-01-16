---
title: 'Comments'
sidebar:
  order: 3
---

 

In Java, comments are used to add explanatory notes or annotations to the code. They are ignored by the compiler and do not affect the execution of the program.



There are three types of comments in Java:



1. Single-line comments: These comments start with `//` and continue until the end of the line. They are used to add short descriptions or notes to specific lines of code. For example:



```java

int x = 5; // initializing x with the value 5

```



2. Multi-line comments: These comments start with `/*` and end with `*/`. They can span multiple lines and are used for longer explanations or to temporarily disable a block of code. For example:



```java

/*

This is a multi-line comment

It can span multiple lines

*/

```



3. Documentation comments: These comments start with `/**` and end with `*/`. They are used to generate documentation for classes, methods, and fields using tools like Javadoc. For example:



```java

/**

 * This method calculates the sum of two numbers.

 * @param a the first number

 * @param b the second number

 * @return the sum of a and b

 */

public int sum(int a, int b) {

    return a + b;

}

```



Comments are an essential part of writing clean and maintainable code. They help other developers understand the code and make it easier to debug and maintain.


