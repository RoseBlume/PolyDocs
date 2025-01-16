---
title: 'Polymorphism'
sidebar:
  order: 10
---

 



Polymorphism is a fundamental concept in object-oriented programming (OOP) languages like Java. It allows objects of different classes to be treated as objects of a common superclass.





```java

class Animal {

  public void makeSound() {

    System.out.println("Animal is making a sound");

  }

}



class Dog extends Animal {

  public void makeSound() {

    System.out.println("Dog is barking");

  }

}



class Cat extends Animal {

  public void makeSound() {

    System.out.println("Cat is meowing");

  }

}



public class Main {

  public static void main(String[] args) {

    Animal animal1 = new Dog();

    Animal animal2 = new Cat();



    animal1.makeSound(); // Output: Dog is barking

    animal2.makeSound(); // Output: Cat is meowing

  }

}

```



In the above example, we have a superclass `Animal` and two subclasses `Dog` and `Cat`. The `makeSound()` method is overridden in both subclasses. We create objects of the subclasses and assign them to variables of the superclass type. When we call the `makeSound()` method on these objects, the appropriate version of the method is executed based on the actual type of the object.



This is an example of polymorphism in Java, where objects of different classes can be treated as objects of a common superclass and the appropriate method is called based on the actual type of the object.



Polymorphism is a powerful concept in OOP as it allows for code reusability, flexibility, and extensibility.