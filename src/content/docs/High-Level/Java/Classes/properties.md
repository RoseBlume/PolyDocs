---
title: 'Properties'
sidebar:
  order: 11
---

 

In Java, properties are a way to encapsulate data and provide access to it through getter and setter methods. They are commonly used to ensure data encapsulation and maintain data integrity.



Here's an example of a class with properties in Java:



```java

public class Person {

    private String name;

    private int age;



    public String getName() {

        return name;

    }



    public void setName(String name) {

        this.name = name;

    }



    public int getAge() {

        return age;

    }



    public void setAge(int age) {

        this.age = age;

    }

}

```



In the above example, the `Person` class has two properties: `name` and `age`. The properties are declared as private, which means they can only be accessed within the class. To access or modify the properties, getter and setter methods are provided.



Here's how you can use the `Person` class:



```java

public class Main {

    public static void main(String[] args) {

        Person person = new Person();

        person.setName("John Doe");

        person.setAge(25);



        System.out.println("Name: " + person.getName());

        System.out.println("Age: " + person.getAge());

    }

}

```



In the above example, we create a new `Person` object, set the name and age using the setter methods, and then retrieve and print the values using the getter methods.



Properties in Java provide a way to control access to data and ensure data integrity. They are an important concept in object-oriented programming and are widely used in Java development.
