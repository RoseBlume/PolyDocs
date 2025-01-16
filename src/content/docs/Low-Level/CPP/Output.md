---
title: 'Output'
sidebar:
  order: 13
---

 In C++, output operations are performed using the standard output stream, which is represented by `std::cout`. This stream is part of the iostream library, so you need to include this library at the beginning of your program.



```cpp

```



The `std::cout` object is used in conjunction with the insertion operator (`<<`) to send data to the standard output, typically the console. Here is a simple example:



```cpp



int main() {

    std::cout << "Hello, World!" << std::endl;

    return 0;

}

```



In this example, the program prints "Hello, World!" to the console. The `std::endl` is used to insert a newline character and flush the output buffer.





C++ provides several ways to format output. You can use manipulators from the `<iomanip>` library to control the appearance of the output. For example:



```cpp



int main() {

    double pi = 3.14159;

    std::cout << "Default: " << pi << std::endl;

    std::cout << "Fixed: " << std::fixed << pi << std::endl;

    std::cout << "Scientific: " << std::scientific << pi << std::endl;

    std::cout << "Precision 2: " << std::setprecision(2) << pi << std::endl;

    return 0;

}

```



This code demonstrates different ways to format the floating-point number `pi`.





You can also output the values of variables. Here is an example:



```cpp



int main() {

    int age = 25;

    std::string name = "Alice";

    std::cout << "Name: " << name << ", Age: " << age << std::endl;

    return 0;

}

```



In this example, the program outputs the values of the `name` and `age` variables.



Output in C++ is a fundamental concept that allows you to display information to the user. By mastering the use of `std::cout` and various formatting techniques, you can create more user-friendly and readable programs.