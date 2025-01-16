---
title: 'Class Methods'
sidebar:
  order: 0
---

 In C++, class methods are functions that are defined inside a class and are used to manipulate the data members of the class or perform operations related to the class. There are several types of class methods, including:





Member functions are functions that have their definitions or declarations inside the class definition. They can access and modify the data members of the class. Here is an example:



```cpp

class MyClass {

public:

    void display() {

        std::cout << "Hello, World!" << std::endl;

    }

};

```



In this example, `display` is a member function of `MyClass`.





A constructor is a special type of member function that is automatically called when an object of the class is created. It is used to initialize the objects of its class. Here is an example:



```cpp

class MyClass {

public:

    MyClass() {

        std::cout << "Constructor called!" << std::endl;

    }

};

```





A destructor is a special member function that is executed when an object of the class is destroyed. It is used to release resources allocated to the object. Here is an example:



```cpp

class MyClass {

public:

    ~MyClass() {

        std::cout << "Destructor called!" << std::endl;

    }

};

```





Static member functions are functions that belong to the class rather than any object instance. They can be called using the class name. Here is an example:



```cpp

class MyClass {

public:

    static void display() {

        std::cout << "Static function called!" << std::endl;

    }

};

```



To call the static member function, you use the class name:



```cpp

MyClass::display();

```





Const member functions are functions that do not modify the object on which they are called. They are declared with the `const` keyword. Here is an example:



```cpp

class MyClass {

public:

    void display() const {

        std::cout << "Const function called!" << std::endl;

    }

};

```





Inline member functions are defined inside the class definition. They are typically small and are expanded in line where they are called to reduce the overhead of function calls. Here is an example:



```cpp

class MyClass {

public:

    void display() {

        std::cout << "Inline function called!" << std::endl;

    }

};

```



Understanding these different types of class methods is crucial for effective C++ programming. They provide the mechanisms to encapsulate and manage the behavior of objects in a structured and efficient manner.