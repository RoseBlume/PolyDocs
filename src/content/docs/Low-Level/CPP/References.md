---
title: 'References'
sidebar:
  order: 10
---

 

In C++, references are an alternative to pointers and provide a way to create aliases for variables. They are often used for function parameters and return types to avoid copying large objects and to allow functions to modify their arguments.





To create a reference, use the `&` symbol. Here is an example:



```cpp

int main() {

    int a = 10;

    int& ref = a; // ref is a reference to a

    ref = 20; // changes the value of a to 20

    return 0;

}

```



In this example, `ref` is a reference to the variable `a`. Any changes made to `ref` will directly affect `a`.





References are commonly used as function parameters to avoid copying large objects and to allow the function to modify the argument. Here is an example:



```cpp

void increment(int& num) {

    num++;

}



int main() {

    int a = 10;

    increment(a); // a is now 11

    return 0;

}

```



In this example, the `increment` function takes an `int` reference as a parameter and increments it. The original variable `a` is modified.





Functions can also return references. This is useful when you want to return a large object without copying it or when you want to allow the caller to modify the returned object. Here is an example:



```cpp

int& getElement(int* arr, int index) {

    return arr[index];

}



int main() {

    int arr[3] = {1, 2, 3};

    getElement(arr, 1) = 10; // arr[1] is now 10

    return 0;

}

```



In this example, the `getElement` function returns a reference to an element in the array. The caller can modify the element directly.



References in C++ provide a powerful and efficient way to work with variables and objects. They are safer and easier to use than pointers in many cases, and they help to write cleaner and more readable code.


