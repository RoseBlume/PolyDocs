---
title: 'Classes'
sidebar:
  order: 13
---

 



In C#, classes are the building blocks of object-oriented programming. They allow you to define the structure and behavior of objects. An object is an instance of a class, and it can have its own unique state and behavior.





To define a class in C#, you use the `class` keyword followed by the class name. Here's an example:



```csharp

public class Person

{

    // Class members go here

}

```



In the above example, we define a class called `Person`. This class doesn't have any members yet, but we can add properties, methods, and other members to it.





Once you have defined a class, you can create objects of that class using the `new` keyword. Here's an example:



```csharp

Person person = new Person();

```



In the above example, we create a new object of the `Person` class and assign it to the `person` variable.





You can access the members of a class using the dot notation. Here's an example:



```csharp

person.Name = "John Doe";

person.Age = 30;

```



In the above example, we access the `Name` and `Age` properties of the `person` object and assign values to them.





Classes and objects are fundamental concepts in C# programming. They allow you to create reusable and modular code. By defining classes and creating objects, you can model real-world entities and implement their behavior in your applications.
