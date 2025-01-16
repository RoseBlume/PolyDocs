---
title: 'Enums'
sidebar:
  order: 3
---

 



Enums in C# are a way to define a set of named constants. They allow you to create a custom data type with a fixed set of possible values.



Here's an example of how to define an enum in C#:



```csharp

enum DaysOfWeek

{

    Monday,

    Tuesday,

    Wednesday,

    Thursday,

    Friday,

    Saturday,

    Sunday

}

```



In the above example, we have defined an enum called `DaysOfWeek` with seven possible values representing the days of the week.



Enums can be used to improve code readability and maintainability. They provide a way to represent a set of related values in a more expressive manner.



You can use enums in various scenarios, such as switch statements, method parameters, and class properties.



Here's an example of how to use an enum in a switch statement:



```csharp

DaysOfWeek day = DaysOfWeek.Monday;



switch (day)

{

    case DaysOfWeek.Monday:

        Console.WriteLine("It's Monday!");

        break;

    case DaysOfWeek.Tuesday:

        Console.WriteLine("It's Tuesday!");

        break;

    // ... other cases

    default:

        Console.WriteLine("It's another day of the week.");

        break;

}

```



In the above example, we use the `DaysOfWeek` enum to determine the day of the week and print a corresponding message.



Enums are a powerful feature in C# that can help you write cleaner and more maintainable code.