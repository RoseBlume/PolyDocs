---
title: 'Scope'
sidebar:
  order: 31
---

 In C++, scope refers to the visibility and lifetime of variables and functions within a program. Understanding scope is crucial for writing efficient and error-free code. There are several types of scope in C++:



Local scope refers to variables declared within a function or a block of code. These variables are only accessible within that specific function or block. Once the function or block ends, the variables are destroyed.



```cpp

void exampleFunction() {

    int localVar = 10; // localVar is only accessible within exampleFunction

    // code using localVar

} // localVar is destroyed here

```



Global scope refers to variables declared outside of all functions. These variables are accessible from any part of the program after their declaration.



```cpp

int globalVar = 20; // globalVar is accessible from any function



void anotherFunction() {

    // code using globalVar

}

```



Namespace scope allows you to group related variables, functions, and other declarations under a single name. This helps to avoid naming conflicts in larger projects.



```cpp

namespace MyNamespace {

    int namespaceVar = 30; // namespaceVar is accessible within MyNamespace



    void namespaceFunction() {

        // code using namespaceVar

    }

}

```



Class scope refers to variables and functions declared within a class. These members are accessible according to their access specifiers (public, protected, private).



```cpp

class MyClass {

public:

    int publicVar; // accessible from outside the class



private:

    int privateVar; // only accessible within MyClass

};

```



Understanding these different types of scope will help you manage variable lifetimes and access levels effectively in your C++ programs.