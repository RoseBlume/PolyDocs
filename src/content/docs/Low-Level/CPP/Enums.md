---
title: 'Enums'
sidebar:
  order: 30
---

 

Enums, short for enumerations, are a user-defined type in C++ that consists of a set of named integral constants. They are used to assign names to the integral constants, which makes a program easy to read and maintain.





To define an enum, you use the `enum` keyword followed by the name of the enumeration and a list of named constants enclosed in curly braces. Here is an example:



```cpp

enum Color {

    RED,

    GREEN,

    BLUE

};

```



In this example, `Color` is an enumeration with three named constants: `RED`, `GREEN`, and `BLUE`. By default, the first named constant in an enum has the value 0, the second has the value 1, and so on.





You can declare variables of the enum type and assign them one of the named constants. For example:



```cpp

Color myColor;

myColor = RED;

```



You can also use enums in switch statements:



```cpp

switch (myColor) {

    case RED:

        // Handle red color

        break;

    case GREEN:

        // Handle green color

        break;

    case BLUE:

        // Handle blue color

        break;

}

```





You can specify the values of the named constants explicitly:



```cpp

enum Color {

    RED = 1,

    GREEN = 2,

    BLUE = 3

};

```



In this case, `RED` has the value 1, `GREEN` has the value 2, and `BLUE` has the value 3.





C++11 introduced a new type of enum called enum class (or scoped enum). Enum classes provide better type safety and scoping. Here is an example:



```cpp

enum class Color {

    RED,

    GREEN,

    BLUE

};

```



To use an enum class, you need to specify the enum name:



```cpp

Color myColor = Color::RED;

```



Enum classes do not implicitly convert to integers, which prevents accidental misuse.



Enums are a powerful feature in C++ that help make your code more readable and maintainable by giving meaningful names to integral constants.
