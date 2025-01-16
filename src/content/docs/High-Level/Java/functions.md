---
title: 'Functions'
sidebar:
  order: 4
---

 



In Java, a function is a block of code that performs a specific task. It allows you to break down your program into smaller, reusable pieces of code. Functions are also known as methods in Java.





The syntax for defining a function in Java is as follows:



```java

returnType functionName(parameter1, parameter2, ...) {

    // code to be executed

    return returnValue;

}

```



- `returnType`: The data type of the value that the function returns. Use `void` if the function doesn't return any value.

- `functionName`: The name of the function.

- `parameter1, parameter2, ...`: The input parameters that the function accepts.

- `returnValue`: The value that the function returns. Use `void` if the function doesn't return any value.





Here's an example of a function that calculates the sum of two numbers in Java:



```java

public class Main {

    public static void main(String[] args) {

        int num1 = 5;

        int num2 = 10;

        int sum = calculateSum(num1, num2);

        System.out.println("The sum is: " + sum);

    }



    public static int calculateSum(int a, int b) {

        return a + b;

    }

}

```



In the above example, we define a function called `calculateSum` that takes two integer parameters `a` and `b` and returns their sum. The `main` function calls the `calculateSum` function and prints the result.



Functions are an essential part of Java programming as they help in organizing code and making it more modular and reusable.



Remember to save your file and compile it before running the program.



That's it! You now have a basic understanding of functions in Java.


