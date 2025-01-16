---
title: 'Constructors'
sidebar:
  order: 2
---

 

In Java, a constructor is a special method that is used to initialize objects of a class. It has the same name as the class and does not have a return type.



Here is an example of a constructor in Java:



```java

public class Car {

    private String brand;

    private String color;



    // Constructor

    public Car(String brand, String color) {

        this.brand = brand;

        this.color = color;

    }



    // Other methods and properties...

}

```



In the above example, we have a `Car` class with two private properties: `brand` and `color`. The constructor takes two parameters, `brand` and `color`, and assigns them to the corresponding properties using the `this` keyword.



Constructors can be overloaded, which means you can have multiple constructors with different parameter lists. This allows you to create objects in different ways.



```java

public class Car {

    private String brand;

    private String color;



    // Constructor with brand parameter

    public Car(String brand) {

        this.brand = brand;

        this.color = "Unknown";

    }



    // Constructor with color parameter

    public Car(String color) {

        this.brand = "Unknown";

        this.color = color;

    }



    // Other methods and properties...

}

```



In the above example, we have two overloaded constructors: one that takes a `brand` parameter and sets the `color` to "Unknown", and another that takes a `color` parameter and sets the `brand` to "Unknown".



Constructors are called automatically when an object is created using the `new` keyword. They are used to ensure that the object is properly initialized before it can be used.



That's it! Constructors are an important concept in Java and are used to create objects and initialize their state.
