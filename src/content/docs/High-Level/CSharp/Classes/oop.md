---
title: 'OOP'
sidebar:
  order: 9
---

 



Object-oriented programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. C# is a powerful language that fully supports OOP concepts. In this guide, we will explore the key principles of OOP in C# and provide examples to illustrate each concept.





A class is a blueprint for creating objects. It defines the properties and behaviors that an object of that class will have. Here's an example of a simple class in C#:



```csharp

public class Person

{

    public string Name { get; set; }

    public int Age { get; set; }



    public void SayHello()

    {

        Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");

    }

}

```



In the above example, we have defined a `Person` class with two properties (`Name` and `Age`) and a method (`SayHello`). We can create objects of this class and access their properties and methods as shown below:



```csharp

Person person = new Person();

person.Name = "John";

person.Age = 25;

person.SayHello(); // Output: Hello, my name is John and I am 25 years old.

```





Inheritance is a mechanism that allows a class to inherit properties and behaviors from another class. The class that is being inherited from is called the base class or parent class, and the class that inherits from it is called the derived class or child class. Here's an example:



```csharp

public class Animal

{

    public string Name { get; set; }



    public void Eat()

    {

        Console.WriteLine($"{Name} is eating.");

    }

}



public class Dog : Animal

{

    public void Bark()

    {

        Console.WriteLine($"{Name} is barking.");

    }

}

```



In the above example, the `Dog` class inherits from the `Animal` class. This means that a `Dog` object will have access to the `Name` property and the `Eat` method defined in the `Animal` class, as well as its own `Bark` method.



```csharp

Dog dog = new Dog();

dog.Name = "Buddy";

dog.Eat(); // Output: Buddy is eating.

dog.Bark(); // Output: Buddy is barking.

```





Polymorphism allows objects of different classes to be treated as objects of a common base class. This enables us to write code that can work with objects of different types without knowing their specific types at compile time. Here's an example:



```csharp

public abstract class Shape

{

    public abstract double CalculateArea();

}



public class Rectangle : Shape

{

    public double Width { get; set; }

    public double Height { get; set; }



    public override double CalculateArea()

    {

        return Width * Height;

    }

}



public class Circle : Shape

{

    public double Radius { get; set; }



    public override double CalculateArea()

    {

        return Math.PI * Radius * Radius;

    }

}

```



In the above example, we have an abstract `Shape` class with an abstract method `CalculateArea`. The `Rectangle` and `Circle` classes inherit from the `Shape` class and provide their own implementations of the `CalculateArea` method.



```csharp

Shape rectangle = new Rectangle() { Width = 5, Height = 3 };

Shape circle = new Circle() { Radius = 2 };



Console.WriteLine(rectangle.CalculateArea()); // Output: 15

Console.WriteLine(circle.CalculateArea()); // Output: 12.566370614359172

```



These are just a few examples of the powerful OOP concepts supported by C#. By understanding and applying these concepts, you can write clean, modular, and maintainable code in C#.
