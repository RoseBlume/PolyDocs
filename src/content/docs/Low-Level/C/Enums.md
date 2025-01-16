---
title: 'Enums'
sidebar:
  order: 17
---

 

In C, an enumeration, or `enum`, is a user-defined data type that consists of integral constants. To define an enumeration, the `enum` keyword is used. Enums are a way to assign names to integral constants, making a program easier to read and maintain.





Here is the syntax to define an enumeration:



```c

enum enum_name {

    constant1,

    constant2,

    ...,

    constantN

};

```



For example, to define an enumeration for days of the week:



```c

enum Day {

    SUNDAY,

    MONDAY,

    TUESDAY,

    WEDNESDAY,

    THURSDAY,

    FRIDAY,

    SATURDAY

};

```



By default, the values of the constants start from 0 and increment by 1. Therefore, `SUNDAY` is 0, `MONDAY` is 1, and so on.





You can declare variables of the `enum` type. For example:



```c

enum Day today;

today = WEDNESDAY;

```



Enums can also be used in switch statements:



```c

switch (today) {

    case SUNDAY:

        printf("Today is Sunday.\n");

        break;

    case MONDAY:

        printf("Today is Monday.\n");

        break;

    // Add cases for other days

    default:

        printf("Invalid day.\n");

}

```





You can assign custom values to the constants in an enum:



```c

enum Day {

    SUNDAY = 1,

    MONDAY,

    TUESDAY,

    WEDNESDAY,

    THURSDAY,

    FRIDAY,

    SATURDAY

};

```



In this case, `SUNDAY` will be 1, `MONDAY` will be 2, and so on.



You can also assign specific values to some constants:



```c

enum Day {

    SUNDAY = 1,

    MONDAY = 3,

    TUESDAY = 5,

    WEDNESDAY = 7,

    THURSDAY = 9,

    FRIDAY = 11,

    SATURDAY = 13

};

```





Enums can also be used to represent bit flags. For example:



```c

enum FilePermission {

    READ = 1,    // 0001

    WRITE = 2,   // 0010

    EXECUTE = 4  // 0100

};

```



You can combine these flags using the bitwise OR operator:



```c

int permission = READ | WRITE;

```



This sets the `permission` variable to have both read and write permissions.



Enums provide a convenient way to work with sets of related constants and can make your code more readable and maintainable.
