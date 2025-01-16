---
title: 'Classes'
sidebar:
  order: 16
---

 In C++, a class is a blueprint for creating objects. A class encapsulates data for the object and methods to manipulate that data. Here is a basic example of a class in C++:



```cpp

class MyClass {

public:

    int myNumber;

    void myFunction() {

        std::cout << "Hello World!" << std::endl;

    }

};

```





To define a class, you use the `class` keyword followed by the class name and a pair of curly braces. Inside the curly braces, you can define member variables and member functions.





C++ classes have three access specifiers:



- `public`: Members declared as public are accessible from outside the class.

- `private`: Members declared as private are accessible only from within other members of the same class.

- `protected`: Members declared as protected are accessible from within the class and by derived class.





Once a class is defined, you can create objects of that class type. Here is how you can create an object of `MyClass`:



```cpp

MyClass myObj;

myObj.myNumber = 15;

myObj.myFunction();

```





A constructor is a special member function that is executed when an object of that class is created. A destructor is a special member function that is executed when an object of that class is destroyed.



```cpp

class MyClass {

public:

    MyClass() {

        std::cout << "Constructor called!" << std::endl;

    }

    ~MyClass() {

        std::cout << "Destructor called!" << std::endl;

    }

};

```





Inheritance allows a class to inherit properties and behavior from another class. The class that inherits is called the derived class, and the class being inherited from is called the base class.



```cpp

class Base {

public:

    void baseFunction() {

        std::cout << "Base function called!" << std::endl;

    }

};



class Derived : public Base {

public:

    void derivedFunction() {

        std::cout << "Derived function called!" << std::endl;

    }

};

```





Polymorphism allows methods to do different things based on the object it is acting upon. It is commonly achieved through function overloading and overriding.



```cpp

class Base {

public:

    virtual void display() {

        std::cout << "Display Base class" << std::endl;

    }

};



class Derived : public Base {

public:

    void display() override {

        std::cout << "Display Derived class" << std::endl;

    }

};

```





Classes are a fundamental concept in C++ that allow you to create complex data structures and manage them efficiently. Understanding classes, access specifiers, constructors, destructors, inheritance, and polymorphism is crucial for mastering C++ programming.