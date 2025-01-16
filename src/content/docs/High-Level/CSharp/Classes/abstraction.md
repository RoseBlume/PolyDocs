---
title: 'Abstraction'
sidebar:
  order: 0
---

 



Abstraction is a fundamental concept in object-oriented programming that allows us to hide complex implementation details and only expose the essential features of an object. It helps in creating more modular and maintainable code.



In C#, abstraction is achieved through the use of abstract classes and interfaces.





An abstract class is a class that cannot be instantiated and is meant to be inherited by other classes. It can contain both abstract and non-abstract methods.



```csharp

public abstract class Shape

{

    public abstract double CalculateArea();

    public void Display()

    {

        Console.WriteLine("This is a shape.");

    }

}



public class Circle : Shape

{

    public override double CalculateArea()

    {

        // Calculate area of circle

    }

}



public class Rectangle : Shape

{

    public override double CalculateArea()

    {

        // Calculate area of rectangle

    }

}

```



In the above example, the `Shape` class is an abstract class that defines the `CalculateArea` method as an abstract method. The `Circle` and `Rectangle` classes inherit from the `Shape` class and provide their own implementation of the `CalculateArea` method.





An interface is a contract that defines a set of methods and properties that a class must implement. It provides a way to achieve multiple inheritance in C#.



```csharp

public interface IResizable

{

    void Resize(int width, int height);

}



public class Image : IResizable

{

    public void Resize(int width, int height)

    {

        // Resize the image

    }

}



public class Button : IResizable

{

    public void Resize(int width, int height)

    {

        // Resize the button

    }

}

```



In the above example, the `IResizable` interface defines the `Resize` method that must be implemented by any class that implements the interface. The `Image` and `Button` classes both implement the `IResizable` interface and provide their own implementation of the `Resize` method.



Abstraction is a powerful concept in C# that allows us to create flexible and extensible code. By hiding implementation details and only exposing essential features, we can create more maintainable and scalable applications.


