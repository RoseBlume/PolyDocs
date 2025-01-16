---
title: 'Enums'
sidebar:
  order: 3
---

 Enums in Java are a powerful feature that allows you to define a set of named constants. They provide a way to represent a fixed number of values, making your code more readable and maintainable.



Here's an example of how to define an enum in Java:



```java

public enum DayOfWeek {

  MONDAY,

  TUESDAY,

  WEDNESDAY,

  THURSDAY,

  FRIDAY,

  SATURDAY,

  SUNDAY

}

```



In this example, we have defined an enum called `DayOfWeek` with seven constants representing the days of the week.



Enums can also have methods and fields. Here's an example that demonstrates this:



```java

public enum Direction {

  NORTH("N"),

  EAST("E"),

  SOUTH("S"),

  WEST("W");



  private final String abbreviation;



  Direction(String abbreviation) {

    this.abbreviation = abbreviation;

  }



  public String getAbbreviation() {

    return abbreviation;

  }

}

```



In this example, the `Direction` enum has a field called `abbreviation` and a constructor that initializes it. It also has a method called `getAbbreviation()` that returns the abbreviation.



Enums are commonly used in switch statements, as they provide a concise way to handle different cases. Here's an example:



```java

public class Main {

  public static void main(String[] args) {

    DayOfWeek day = DayOfWeek.MONDAY;



    switch (day) {

      case MONDAY:

        System.out.println("It's Monday!");

        break;

      case TUESDAY:

        System.out.println("It's Tuesday!");

        break;

      // ... other cases

      default:

        System.out.println("It's not a weekday.");

    }

  }

}

```



In this example, we use the `DayOfWeek` enum in a switch statement to print a message based on the current day.



Enums are a powerful tool in Java that can greatly improve the readability and maintainability of your code. They provide a way to define a set of named constants and can have methods and fields.