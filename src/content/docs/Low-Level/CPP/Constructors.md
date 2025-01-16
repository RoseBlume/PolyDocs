---
title: 'Constructors'
sidebar:
  order: 2
---

 Constructors are special member functions of a class that are executed whenever new objects of that class are created. A constructor has the same name as the class and does not have a return type.





A default constructor is a constructor that takes no arguments. If no constructors are defined in a class, the compiler provides a default constructor.



```cpp

class Example {

public:

    Example() {

        // Default constructor

    }

};

```



A parameterized constructor is a constructor that takes arguments. This allows different objects of the same class to be initialized with different values.



```cpp

class Example {

public:

    int value;

    Example(int val) {

        value = val;

    }

};

```



A copy constructor is a constructor that initializes an object using another object of the same class.



```cpp

class Example {

public:

    int value;

    Example(const Example &obj) {

        value = obj.value;

    }

};

```



Constructors can also use initialization lists to initialize member variables before the constructor body executes.



```cpp

class Example {

public:

    int value;

    Example(int val) : value(val) {

        // Initialization list

    }

};

```



A destructor is a special member function of a class that is executed whenever an object of its class goes out of scope or is explicitly deleted. It has the same name as the class but is preceded by a tilde (~).



```cpp

class Example {

public:

    ~Example() {

        // Destructor

    }

};

```



Understanding constructors and destructors is crucial for managing resources and ensuring proper initialization and cleanup in C++ programs.