---
title: 'OOP'
sidebar:
  order: 9
---

 



Object Oriented Programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. Java is a popular programming language that fully supports OOP concepts.





In Java, a class is a blueprint for creating objects. It defines the properties and behaviors that objects of that class will have. Here's an example of a simple class in Java:



```java

public class Person {

    private String name;

    private int age;



    public Person(String name, int age) {

        this.name = name;

        this.age = age;

    }



    public void sayHello() {

        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");

    }

}

```



In the above example, we have a `Person` class with two private fields `name` and `age`. We also have a constructor that takes in the `name` and `age` as parameters and initializes the fields. The `sayHello` method prints a greeting message with the person's name and age.





Once we have defined a class, we can create objects of that class. Here's how we can create a `Person` object and call its `sayHello` method:



```java

public class Main {

    public static void main(String[] args) {

        Person person = new Person("John", 25);

        person.sayHello();

    }

}

```



In the above example, we create a `Person` object named `person` with the name "John" and age 25. We then call the `sayHello` method on the `person` object, which prints the greeting message.





One of the key features of OOP is inheritance, which allows classes to inherit properties and behaviors from other classes. In Java, we can use the `extends` keyword to create a subclass that inherits from a superclass. Here's an example:



```java

public class Student extends Person {

    private String major;



    public Student(String name, int age, String major) {

        super(name, age);

        this.major = major;

    }



    public void study() {

        System.out.println(name + " is studying " + major);

    }

}

```



In the above example, we have a `Student` class that extends the `Person` class. It adds a new field `major` and a `study` method. The `super` keyword is used to call the superclass constructor.





This is just a brief introduction to Object Oriented Programming in Java. There are many more concepts and features to explore. OOP provides a powerful way to organize and structure code, making it easier to understand and maintain.
