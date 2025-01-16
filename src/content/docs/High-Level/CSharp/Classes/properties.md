---
title: 'Properties'
sidebar:
  order: 11
---

 

In C#, properties provide a way to encapsulate data and control access to it. They are a combination of a field and methods that allow getting and setting the value of the field.





The syntax for defining a property in C# is as follows:



```csharp

public <data_type> <property_name> { get; set; }

```



Here, `<data_type>` represents the type of the property, and `<property_name>` is the name of the property.





```csharp

public class Person

{

    private string name;



    public string Name

    {

        get { return name; }

        set { name = value; }

    }

}



// Usage

Person person = new Person();

person.Name = "John";

Console.WriteLine(person.Name); // Output: John

```



In the above example, we have a `Person` class with a `Name` property. The property has a private field `name` and uses the `get` and `set` accessors to control access to it.



Properties provide a way to encapsulate data and add logic to the accessors if needed. They are widely used in C# to ensure data integrity and provide a clean interface for accessing and modifying object state.



For more information on properties in C#, you can refer to the [Microsoft documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties).
