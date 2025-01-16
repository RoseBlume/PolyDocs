---
title: 'Constructors'
sidebar:
  order: 2
---

 



In C#, a constructor is a special method that is used to initialize an object of a class. It is called automatically when an object is created.



Here is an example of a constructor in C#:



```csharp

public class Person

{

    public string Name { get; set; }

    public int Age { get; set; }



    // Constructor

    public Person(string name, int age)

    {

        Name = name;

        Age = age;

    }

}



// Creating an object using the constructor

Person person = new Person("John", 25);

```



In the above example, we have a `Person` class with two properties: `Name` and `Age`. The constructor of the `Person` class takes two parameters: `name` and `age`, and assigns them to the corresponding properties.



To create an object of the `Person` class, we use the `new` keyword followed by the constructor arguments.



Constructors can also be overloaded, meaning you can have multiple constructors with different parameter lists. This allows you to create objects in different ways depending on the arguments passed to the constructor.



That's it! You now know how to use constructors in C#. Happy coding!
