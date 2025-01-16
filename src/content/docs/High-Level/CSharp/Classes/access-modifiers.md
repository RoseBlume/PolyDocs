---
title: 'Access Modifiers'
sidebar:
  order: 1
---

 

Access modifiers in C# are keywords that specify the accessibility of types and members in a program. They control the visibility and accessibility of classes, methods, properties, and other members.



There are five access modifiers in C#:



1. **public**: The public access modifier allows a type or member to be accessed from any other code in the same assembly or in a different assembly that references it.



```csharp

public class MyClass

{

    public int MyProperty { get; set; }

    

    public void MyMethod()

    {

        // Code goes here

    }

}

```



2. **private**: The private access modifier restricts the accessibility of a type or member to within its own class. It cannot be accessed from outside the class.



```csharp

public class MyClass

{

    private int myField;

    

    private void MyMethod()

    {

        // Code goes here

    }

}

```



3. **protected**: The protected access modifier allows a type or member to be accessed within its own class and by derived classes.



```csharp

public class MyBaseClass

{

    protected int myField;

}



public class MyDerivedClass : MyBaseClass

{

    public void MyMethod()

    {

        myField = 10; // Accessing protected member from derived class

    }

}

```



4. **internal**: The internal access modifier allows a type or member to be accessed within the same assembly, but not from another assembly.



```csharp

internal class MyClass

{

    internal int MyProperty { get; set; }

    

    internal void MyMethod()

    {

        // Code goes here

    }

}

```



5. **protected internal**: The protected internal access modifier allows a type or member to be accessed within the same assembly or by derived classes, even if they are in a different assembly.



```csharp

public class MyBaseClass

{

    protected internal int myField;

}



public class MyDerivedClass : MyBaseClass

{

    public void MyMethod()

    {

        myField = 10; // Accessing protected internal member from derived class

    }

}

```



Understanding access modifiers is crucial for designing well-structured and secure C# programs.
