---
title: 'Function Overloading'
sidebar:
  order: 1
---

 Function overloading in C++ allows you to define multiple functions with the same name, but with different parameter lists. This is a form of polymorphism, which is a core concept in object-oriented programming.





When you overload a function, you create multiple versions of that function, each with a unique set of parameters. The compiler determines which version of the function to call based on the arguments passed to it.





```cpp

using namespace std;



// Function to add two integers

int add(int a, int b) {

    return a + b;

}



// Function to add three integers

int add(int a, int b, int c) {

    return a + b + c;

}



// Function to add two doubles

double add(double a, double b) {

    return a + b;

}



int main() {

    cout << "add(1, 2): " << add(1, 2) << endl;

    cout << "add(1, 2, 3): " << add(1, 2, 3) << endl;

    cout << "add(1.1, 2.2): " << add(1.1, 2.2) << endl;

    return 0;

}

```



In this example, we have three overloaded versions of the `add` function:

- `add(int, int)`

- `add(int, int, int)`

- `add(double, double)`



The compiler selects the appropriate function based on the number and type of arguments provided.





1. **Different Parameter Types**: Functions must differ in the type and/or number of their parameters.

2. **Return Type**: The return type alone is not sufficient to distinguish overloaded functions.

3. **Default Arguments**: Be cautious with default arguments, as they can lead to ambiguities.





```cpp

int func(int a);

double func(int a); // Error: Only return type differs

```



This will result in a compilation error because the functions differ only by their return type.





- **Code Readability**: Makes the code easier to read and maintain.

- **Flexibility**: Allows functions to handle different types and numbers of parameters.



Function overloading is a powerful feature in C++ that enhances the flexibility and readability of your code. By understanding and utilizing this feature, you can write more efficient and maintainable programs.