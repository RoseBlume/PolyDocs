---
title: 'Constants'
sidebar:
  order: 4
---

 

In C programming, constants are fixed values that do not change during the execution of a program. They are used to make code more readable and maintainable. Constants can be of any basic data type, such as integer, floating-point, character, or string.





Integer constants are whole numbers without any fractional part. They can be written in different number systems:

- **Decimal**: Base 10 (e.g., `10`, `255`)

- **Octal**: Base 8, prefixed with `0` (e.g., `012`, `0377`)

- **Hexadecimal**: Base 16, prefixed with `0x` or `0X` (e.g., `0xA`, `0xFF`)



Floating-point constants represent real numbers with a fractional part. They can be written in decimal form or scientific notation:

- **Decimal form**: (e.g., `3.14`, `0.001`)

- **Scientific notation**: (e.g., `1.5e3`, `2.5E-4`)



Character constants are single characters enclosed in single quotes. They represent individual characters:

- **Examples**: `'a'`, `'1'`, `'\n'` (newline character)



String constants are sequences of characters enclosed in double quotes. They represent text:

- **Examples**: `"Hello, World!"`, `"C programming"`





The `#define` directive is used to define symbolic constants. It replaces occurrences of the constant name with its value during preprocessing:

```c

```



The `const` keyword is used to declare constant variables. These variables cannot be modified after initialization:

```c

const int DAYS_IN_WEEK = 7;

const float GRAVITY = 9.81;

```



Here is an example program that demonstrates the use of constants in C:

```c





int main() {

    const int RADIUS = 5;

    float area;



    area = PI * RADIUS * RADIUS;

    printf("Area of the circle: %f\n", area);



    return 0;

}

```



In this example, `PI` is defined using the `#define` directive, and `RADIUS` is declared as a constant variable using the `const` keyword. The program calculates and prints the area of a circle.



Constants play a crucial role in making programs more understandable and easier to maintain. By using meaningful names for constants, you can make your code self-documenting and reduce the likelihood of errors.
