---
title: 'Function Parameters'
sidebar:
  order: 1
---

 

In C programming, functions can accept parameters, which are values passed to the function to be used within its body. These parameters allow functions to perform tasks with varying inputs, making them more versatile and reusable.





Formal parameters are the variables defined by the function that receive the values passed to it. They are specified in the function definition.



```c

void exampleFunction(int a, float b) {

    // a and b are formal parameters

}

```



Actual parameters, also known as arguments, are the values passed to the function when it is called. These values are assigned to the corresponding formal parameters.



```c

int main() {

    exampleFunction(5, 3.14); // 5 and 3.14 are actual parameters

    return 0;

}

```





In C, parameters are typically passed by value, meaning that a copy of the actual parameter's value is made and passed to the function. Changes made to the parameter within the function do not affect the original value.



```c

void modifyValue(int x) {

    x = 10; // This change does not affect the original variable

}



int main() {

    int num = 5;

    modifyValue(num);

    // num is still 5 here

    return 0;

}

```



To allow a function to modify the original variable, you can pass a pointer to the variable. This is known as passing by reference.



```c

void modifyValue(int *x) {

    *x = 10; // This change affects the original variable

}



int main() {

    int num = 5;

    modifyValue(&num);

    // num is now 10 here

    return 0;

}

```



C does not support default parameters directly. However, you can achieve similar functionality using function overloading or by providing default values within the function body.



```c

void exampleFunction(int a, float b) {

    if (b == 0.0) {

        b = 1.0; // Default value

    }

    // Function body

}

```



Understanding how to use function parameters effectively is crucial for writing flexible and maintainable C programs. By mastering the concepts of formal and actual parameters, as well as passing by value and reference, you can create functions that are both powerful and easy to use.
