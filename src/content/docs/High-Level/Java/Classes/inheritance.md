---
title: 'Inheritance'
sidebar:
  order: 6
---

 

Inheritance is a fundamental concept in object-oriented programming languages like Java. It allows a class to inherit properties and behaviors from another class, known as the superclass or parent class.



To demonstrate inheritance in Java, consider the following example:



```java

public class Animal {

    protected String name;

    

    public Animal(String name) {

        this.name = name;

    }

    

    public void eat() {

        System.out.println(name + " is eating.");

    }

}



public class Dog extends Animal {

    public Dog(String name) {

        super(name);

    }

    

    public void bark() {

        System.out.println(name + " is barking.");

    }

}



public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog("Buddy");

        dog.eat(); // Output: Buddy is eating.

        dog.bark(); // Output: Buddy is barking.

    }

}

```



In this example, the `Animal` class is the superclass, and the `Dog` class is the subclass. The `Dog` class inherits the `name` property and the `eat()` method from the `Animal` class. It also adds its own method, `bark()`. 



When we create an instance of the `Dog` class, we can access both the inherited method `eat()` and the subclass-specific method `bark()`.



This is just a basic example of inheritance in Java. In real-world scenarios, inheritance allows for code reuse, promotes modularity, and enables polymorphism.



Remember, in Java, a class can only inherit from one superclass, but it can implement multiple interfaces.