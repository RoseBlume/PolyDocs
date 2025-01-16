---
title: 'Polymorphism'
sidebar:
  order: 10
---

 



Polymorphism is a fundamental concept in object-oriented programming that allows objects of different types to be treated as objects of a common base type. This enables code to be written that can work with objects of different classes, providing flexibility and extensibility.





One way to achieve polymorphism in C# is through method overriding. Method overriding allows a derived class to provide its own implementation of a method that is already defined in its base class. This allows objects of the derived class to be used interchangeably with objects of the base class.



Here's an example:



```csharp

public class Shape

{

    public virtual void Draw()

    {

        Console.WriteLine("Drawing a shape");

    }

}



public class Circle : Shape

{

    public override void Draw()

    {

        Console.WriteLine("Drawing a circle");

    }

}



public class Square : Shape

{

    public override void Draw()

    {

        Console.WriteLine("Drawing a square");

    }

}



public class Program

{

    public static void Main()

    {

        Shape shape1 = new Circle();

        Shape shape2 = new Square();



        shape1.Draw(); // Output: Drawing a circle

        shape2.Draw(); // Output: Drawing a square

    }

}

```



In the above example, the `Shape` class defines a virtual method `Draw()`, which is then overridden in the `Circle` and `Square` classes. The `Main()` method demonstrates polymorphism by creating objects of the derived classes and calling the `Draw()` method on them.





Polymorphism is a powerful concept in C# that allows for code reusability and flexibility. By leveraging method overriding, objects of different classes can be treated as objects of a common base type, enabling more generic and extensible code.
