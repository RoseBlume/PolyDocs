---
title: 'Access Modifiers'
sidebar:
  order: 1
---

 

Access modifiers in Java are keywords that determine the accessibility of classes, methods, and variables. There are four types of access modifiers in Java:



1. **Public**: Public access modifier allows classes, methods, and variables to be accessed from anywhere, both within and outside the package. For example:



```java

public class MyClass {

    public int myVariable;

    

    public void myMethod() {

        // code here

    }

}

```



2. **Private**: Private access modifier restricts the access to only within the same class. It is commonly used to encapsulate data and prevent direct access from outside the class. For example:



```java

public class MyClass {

    private int myVariable;

    

    private void myMethod() {

        // code here

    }

}

```



3. **Protected**: Protected access modifier allows access within the same package and subclasses in different packages. For example:



```java

public class MyClass {

    protected int myVariable;

    

    protected void myMethod() {

        // code here

    }

}

```



4. **Default (no modifier)**: Default access modifier allows access within the same package only. It is used when no access modifier is specified. For example:



```java

class MyClass {

    int myVariable;

    

    void myMethod() {

        // code here

    }

}

```



It is important to choose the appropriate access modifier based on the desired level of accessibility and encapsulation in your Java code.
