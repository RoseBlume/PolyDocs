---
title: 'Data Types'
sidebar:
  order: 3
---

 In C, data types are declarations for variables. This determines the type and size of data associated with variables. The language provides several standard data types, which can be categorized as follows:





- **int**: The most commonly used integer type. Typically, it is 4 bytes in size.

- **short**: A shorter integer type, usually 2 bytes.

- **long**: A longer integer type, typically 4 or 8 bytes.

- **long long**: An extended integer type, usually 8 bytes.



- **float**: Single-precision floating-point. Typically 4 bytes.

- **double**: Double-precision floating-point. Usually 8 bytes.

- **long double**: Extended precision floating-point. Size can vary, but often 10, 12, or 16 bytes.



- **char**: Used to store single characters. Typically 1 byte.





Arrays are collections of elements of the same type. They are defined with a specific size.



```c

int numbers[10];

char name[50];

```



Pointers store memory addresses of variables. They are declared using the `*` operator.



```c

int *ptr;

char *str;

```



Structures are user-defined data types that group different types of variables.



```c

struct Person {

    char name[50];

    int age;

    float salary;

};

```



Unions are similar to structures but use shared memory for all their members.



```c

union Data {

    int i;

    float f;

    char str[20];

};

```



Enumerations are user-defined types that consist of named integer constants.



```c

enum Color { RED, GREEN, BLUE };

```





The `const` qualifier indicates that a variable's value cannot be changed.



```c

const int max = 100;

```



The `volatile` qualifier tells the compiler that a variable's value may change at any time, preventing optimization.



```c

volatile int timer;

```



The `restrict` qualifier is used with pointers to indicate that the object pointed to is accessed only through that pointer.



```c

int * restrict ptr;

```



Understanding these data types and their qualifiers is fundamental to programming in C, as they form the basis for variable declaration and manipulation.