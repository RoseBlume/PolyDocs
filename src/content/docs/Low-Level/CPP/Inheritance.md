---
title: 'Inheritance'
sidebar:
  order: 4
---

 Inheritance is a fundamental concept in C++ that allows a class to inherit properties and behaviors from another class. This promotes code reusability and establishes a natural hierarchy between classes.





In C++, the class that is inherited from is called the base class, and the class that inherits is called the derived class. Here is a simple example:



```cpp

class Base {

public:

    void display() {

        std::cout << "Base class display function" << std::endl;

    }

};



class Derived : public Base {

public:

    void show() {

        std::cout << "Derived class show function" << std::endl;

    }

};

```



In this example, `Derived` inherits from `Base`. This means that `Derived` has access to the `display` function of `Base`.





When inheriting from a base class, you can specify an access specifier (`public`, `protected`, or `private`). This determines how the members of the base class are accessible in the derived class.



- **Public Inheritance**: Public members of the base class remain public in the derived class.

- **Protected Inheritance**: Public and protected members of the base class become protected in the derived class.

- **Private Inheritance**: Public and protected members of the base class become private in the derived class.



Example:



```cpp

class Base {

protected:

    int protectedVar;

public:

    int publicVar;

};



class Derived : private Base {

public:

    void accessBaseMembers() {

        protectedVar = 1; // Allowed

        publicVar = 2;    // Allowed

    }

};

```



In this example, `Derived` inherits from `Base` using private inheritance, so `protectedVar` and `publicVar` become private members of `Derived`.





Derived classes can override member functions of the base class to provide a specific implementation. This is done using the same function signature in the derived class.



```cpp

class Base {

public:

    virtual void display() {

        std::cout << "Base class display function" << std::endl;

    }

};



class Derived : public Base {

public:

    void display() override {

        std::cout << "Derived class display function" << std::endl;

    }

};

```



In this example, the `display` function in `Derived` overrides the `display` function in `Base`.





C++ does not have a `super` keyword like some other languages, but you can call the base class's member functions using the scope resolution operator `::`.



```cpp

class Base {

public:

    void display() {

        std::cout << "Base class display function" << std::endl;

    }

};



class Derived : public Base {

public:

    void display() {

        Base::display(); // Call base class display

        std::cout << "Derived class display function" << std::endl;

    }

};

```



In this example, `Derived::display` calls `Base::display` before executing its own code.



Inheritance is a powerful feature in C++ that allows you to create a new class based on an existing class. It helps in reducing code duplication and establishing a clear class hierarchy. Understanding how to use inheritance effectively is crucial for writing robust and maintainable C++ code.