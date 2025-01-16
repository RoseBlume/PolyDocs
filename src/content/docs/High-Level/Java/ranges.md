---
title: 'Ranges'
sidebar:
  order: 7
---

 

In Java, ranges are a way to represent a sequence of values between a start and an end point. They are commonly used in loops and conditional statements.





To create a range in Java, you can use the `IntStream.range` method. This method takes two arguments: the start (inclusive) and the end (exclusive) values of the range. Here's an example:



```java

IntStream.range(1, 5)

    .forEach(System.out::println);

```



This will output the numbers 1, 2, 3, and 4.





You can use a range to iterate over a sequence of values in a loop. Here's an example of iterating over a range and printing each value:



```java

for (int i = 0; i < 10; i++) {

    System.out.println(i);

}

```



This will output the numbers from 0 to 9.





Ranges can also be used in conditional statements. For example, you can check if a value is within a certain range using the `>=` and `<=` operators. Here's an example:



```java

int age = 25;



if (age >= 18 && age <= 30) {

    System.out.println("You are in the prime of your life!");

} else {

    System.out.println("You are either too young or too old.");

}

```



This will output "You are in the prime of your life!" if the age is between 18 and 30, and "You are either too young or too old." otherwise.



Remember to import the `IntStream` class at the beginning of your Java file:



```java

import java.util.stream.IntStream;

```



That's it! Now you know how to work with ranges in Java.
