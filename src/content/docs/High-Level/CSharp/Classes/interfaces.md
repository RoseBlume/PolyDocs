---
title: 'Interfaces'
sidebar:
  order: 7
---

 



In C#, an interface defines a contract that a class must adhere to. It specifies a set of methods, properties, and events that the implementing class must provide.



Here's an example of an interface declaration:



```csharp

public interface IShape

{

    void Draw();

    double CalculateArea();

}

```



To implement an interface, a class must use the `implements` keyword and provide implementations for all the members defined in the interface. For example:



```csharp

public class Circle : IShape

{

    public void Draw()

    {

        Console.WriteLine("Drawing a circle");

    }



    public double CalculateArea()

    {

        // Calculate and return the area of the circle

    }

}

```





A class in C# can implement multiple interfaces. This allows the class to inherit and provide implementations for multiple sets of methods, properties, and events.



Here's an example of a class implementing multiple interfaces:



```csharp

public interface IResizable

{

    void Resize(int width, int height);

}



public class Rectangle : IShape, IResizable

{

    public void Draw()

    {

        Console.WriteLine("Drawing a rectangle");

    }



    public double CalculateArea()

    {

        // Calculate and return the area of the rectangle

    }



    public void Resize(int width, int height)

    {

        // Resize the rectangle to the specified width and height

    }

}

```



In the above example, the `Rectangle` class implements both the `IShape` and `IResizable` interfaces.



Remember, interfaces provide a way to achieve abstraction and define contracts for classes to follow. They are a powerful tool in C# programming.
