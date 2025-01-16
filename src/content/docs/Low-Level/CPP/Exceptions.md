---
title: 'Exceptions'
sidebar:
  order: 18
---

 In C++, exceptions provide a way to react to exceptional circumstances (like runtime errors) in programs by transferring control to special functions called handlers. To throw an exception, use the `throw` keyword followed by an exception object. To handle exceptions, use the `try` and `catch` blocks.





You can throw an exception using the `throw` statement:



```cpp

throw std::runtime_error("An error occurred");

```





To handle exceptions, enclose the code that might throw an exception in a `try` block, and follow it with one or more `catch` blocks to handle specific exceptions:



```cpp

try {

    // Code that may throw an exception

} catch (const std::exception& e) {

    // Code to handle the exception

    std::cerr << "Exception caught: " << e.what() << std::endl;

}

```





C++ provides a set of standard exceptions defined in the `<stdexcept>` header. Some common ones include:



- `std::exception`: Base class for all standard exceptions.

- `std::runtime_error`: Represents errors that can only be detected during runtime.

- `std::logic_error`: Represents errors in the program logic.





You can also define your own exception classes by inheriting from `std::exception` or any of the standard exception classes:



```cpp

class MyException : public std::exception {

public:

    const char* what() const noexcept override {

        return "My custom exception";

    }

};

```





- Use exceptions for error handling, not for control flow.

- Catch exceptions by reference to avoid slicing.

- Always clean up resources in the presence of exceptions, using RAII (Resource Acquisition Is Initialization) where possible.



By understanding and using exceptions effectively, you can write more robust and maintainable C++ code.