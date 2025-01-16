---
title: 'Interfaces'
sidebar:
  order: 7
---

 

In Java, an interface is a collection of abstract methods. It defines a contract that a class must adhere to if it implements the interface. 



Here's an example of an interface declaration:



```java

public interface Drawable {

    void draw();

}

```



To implement an interface, a class must use the `implements` keyword and provide an implementation for all the methods defined in the interface. 



```java

public class Circle implements Drawable {

    public void draw() {

        // implementation goes here

    }

}

```





A class in Java can implement multiple interfaces. This allows the class to inherit the abstract methods from all the interfaces it implements. 



Here's an example of a class implementing multiple interfaces:



```java

public interface Playable {

    void play();

}



public class MusicPlayer implements Drawable, Playable {

    public void draw() {

        // implementation goes here

    }

    

    public void play() {

        // implementation goes here

    }

}

```



By implementing multiple interfaces, a class can exhibit behavior from different aspects of the application.
