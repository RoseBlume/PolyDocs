---
title: 'Access Specifiers'
sidebar:
  order: 6
---

 In C++, access specifiers are keywords that set the accessibility of classes, methods, and other members. They determine whether the members of a class can be accessed from outside the class or not. There are three primary access specifiers in C++:



Members declared as `public` are accessible from outside the class. This means that any other class or function can access and modify these members.



```cpp

class MyClass {

public:

    int publicVar;



    void publicMethod() {

        // Code

    }

};

```



Members declared as `private` are only accessible within the class itself. They cannot be accessed or modified from outside the class. This is useful for encapsulation and data hiding.



```cpp

class MyClass {

private:

    int privateVar;



    void privateMethod() {

        // Code

    }

};

```



Members declared as `protected` are similar to private members but with one key difference: they can be accessed in derived classes. This is useful in inheritance scenarios.



```cpp

class BaseClass {

protected:

    int protectedVar;



    void protectedMethod() {

        // Code

    }

};



class DerivedClass : public BaseClass {

    void accessProtected() {

        protectedVar = 10; // Allowed

        protectedMethod(); // Allowed

    }

};

```



Understanding and using access specifiers correctly is crucial for designing robust and maintainable C++ programs. They help in enforcing encapsulation, which is a fundamental principle of object-oriented programming.