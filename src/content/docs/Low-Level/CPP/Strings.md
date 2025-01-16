---
title: 'Strings'
sidebar:
  order: 12
---

 Strings in C++ are used to represent sequences of characters. The C++ Standard Library provides a `std::string` class to handle strings efficiently. In this section, we will explore the basics of using strings in C++.





You can create a string in C++ using the `std::string` class. Here is an example:



```cpp



int main() {

    std::string greeting = "Hello, World!";

    std::cout << greeting << std::endl;

    return 0;

}

```



In this example, we include the `<string>` header and create a string variable named `greeting` initialized with "Hello, World!".







You can concatenate two strings using the `+` operator:



```cpp

std::string firstName = "John";

std::string lastName = "Doe";

std::string fullName = firstName + " " + lastName;

std::cout << fullName << std::endl; // Outputs: John Doe

```





You can access individual characters in a string using the `[]` operator or the `at()` method:



```cpp

std::string str = "Hello";

char ch1 = str[0]; // 'H'

char ch2 = str.at(1); // 'e'

```





Strings can be modified using various methods such as `append()`, `insert()`, `erase()`, and `replace()`:



```cpp

std::string str = "Hello";

str.append(" World"); // str becomes "Hello World"

str.insert(5, ","); // str becomes "Hello, World"

str.erase(5, 1); // str becomes "Hello World"

str.replace(6, 5, "Universe"); // str becomes "Hello Universe"

```





Strings can be compared using the comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`):



```cpp

std::string str1 = "Apple";

std::string str2 = "Banana";



if (str1 < str2) {

    std::cout << str1 << " is less than " << str2 << std::endl;

}

```


