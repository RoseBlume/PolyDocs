---
title: 'Inheritance'
sidebar:
  order: 6
---

 

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows classes to inherit properties and behaviors from other classes. In C#, you can create a new class by deriving it from an existing class, known as the base class.



To demonstrate inheritance in C#, consider the following example:



```csharp

public class Animal

{

    public string Name { get; set; }

    

    public void Eat()

    {

        Console.WriteLine("The animal is eating.");

    }

}



public class Dog : Animal

{

    public void Bark()

    {

        Console.WriteLine("The dog is barking.");

    }

}

```



In the example above, we have a base class called `Animal` with a property `Name` and a method `Eat()`. We then create a derived class called `Dog` that inherits from `Animal` and adds a method `Bark()`.



With inheritance, the `Dog` class automatically has access to the `Name` property and `Eat()` method defined in the `Animal` class. Additionally, it introduces its own method `Bark()`.



This allows us to create instances of the `Dog` class and call both the inherited methods and the methods specific to the `Dog` class:



```csharp

Dog dog = new Dog();

dog.Name = "Max";

dog.Eat(); // Output: The animal is eating.

dog.Bark(); // Output: The dog is barking.

```



In conclusion, inheritance in C# enables code reuse and promotes a hierarchical structure in your object-oriented designs. It allows you to create specialized classes that inherit and extend the functionality of base classes.
