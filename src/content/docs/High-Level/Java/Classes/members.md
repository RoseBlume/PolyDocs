---
title: 'Members'
sidebar:
  order: 8
---

 

In Java, class members are the variables and methods defined within a class. They can be accessed and used by objects of the class.





Variables in a class are used to store data. They can be of different types such as int, double, String, etc. Here's an example of declaring and initializing a variable in Java:



```java

public class MyClass {

    int myVariable = 10;

}

```





Methods in a class are used to perform specific actions. They can have parameters and return values. Here's an example of a method in Java:



```java

public class MyClass {

    public void printMessage(String message) {

        System.out.println(message);

    }

}

```



In the above example, the `printMessage` method takes a `String` parameter called `message` and prints it to the console.



Class members are accessed using the dot operator (`.`) with an object of the class. For example:



```java

public class Main {

    public static void main(String[] args) {

        MyClass myObject = new MyClass();

        System.out.println(myObject.myVariable); // Output: 10

        myObject.printMessage("Hello, world!"); // Output: Hello, world!

    }

}

```



In the above example, we create an object of the `MyClass` class and access its `myVariable` and `printMessage` methods.



That's it! You now have a basic understanding of class members in Java.
