---
title: 'Abstraction'
sidebar:
  order: 0
---

 

Abstraction is a fundamental concept in object-oriented programming. It allows us to create classes that define the structure and behavior of objects, without specifying the implementation details.



In Java, abstraction is achieved through abstract classes and interfaces. 



An abstract class is a class that cannot be instantiated, but can be subclassed. It can contain both abstract and non-abstract methods. Abstract methods are declared without an implementation and must be implemented by the subclasses.



Here's an example of an abstract class in Java:



```java

public abstract class Shape {

    public abstract double calculateArea();

    public abstract double calculatePerimeter();

}

```



In this example, the `Shape` class is abstract and contains two abstract methods: `calculateArea()` and `calculatePerimeter()`. Any class that extends the `Shape` class must provide an implementation for these methods.



Interfaces, on the other hand, define a contract that a class must adhere to. They can contain only abstract methods and constants. A class can implement multiple interfaces.



Here's an example of an interface in Java:



```java

public interface Drawable {

    void draw();

    void resize(int width, int height);

}

```



In this example, the `Drawable` interface defines two abstract methods: `draw()` and `resize()`. Any class that implements the `Drawable` interface must provide an implementation for these methods.



Abstraction allows us to create code that is more flexible, maintainable, and reusable. By defining abstract classes and interfaces, we can separate the interface from the implementation, making our code easier to understand and modify.
