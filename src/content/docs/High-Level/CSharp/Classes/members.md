---
title: 'Members'
sidebar:
  order: 8
---

 



In C#, class members are the variables, methods, properties, events, and indexers that are defined within a class. They define the behavior and data associated with the class.





Variables are used to store data within a class. They can be of different types, such as integers, strings, or custom objects. Here's an example of declaring and initializing a variable in C#:



```csharp

int age = 25;

string name = "John";

```





Methods are used to define the behavior of a class. They can perform specific actions or calculations. Here's an example of a method in C#:



```csharp

public void SayHello()

{

    Console.WriteLine("Hello, world!");

}

```





Properties provide a way to access and modify the data stored in a class. They encapsulate the internal state of an object. Here's an example of a property in C#:



```csharp

private string _name;



public string Name

{

    get { return _name; }

    set { _name = value; }

}

```





Events are used to notify other parts of the program when something happens within a class. They allow for communication between different components. Here's an example of an event in C#:



```csharp

public event EventHandler ButtonClicked;



private void OnButtonClicked()

{

    ButtonClicked?.Invoke(this, EventArgs.Empty);

}

```





Indexers provide a way to access elements in a class using an index. They are similar to properties but allow for accessing elements using an index value. Here's an example of an indexer in C#:



```csharp

private string[] _names = { "John", "Jane", "Alice" };



public string this[int index]

{

    get { return _names[index]; }

    set { _names[index] = value; }

}

```



These are some of the class members that can be defined in C#. They allow for creating reusable and modular code.