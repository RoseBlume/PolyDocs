---
title: 'User Input'
sidebar:
  order: 14
---

 In C++, handling user input is a fundamental aspect of creating interactive programs. The most common way to get user input is by using the `cin` object, which is part of the iostream library.





To read input from the user, you can use the `cin` object along with the extraction operator (`>>`). Here is an example:



```cpp



int main() {

    int age;

    std::cout << "Enter your age: ";

    std::cin >> age;

    std::cout << "You are " << age << " years old." << std::endl;

    return 0;

}

```



In this example, the program prompts the user to enter their age, reads the input using `cin`, and then prints the age back to the user.





You can use `cin` to read different types of data, such as `int`, `float`, `double`, `char`, and `std::string`. Here is an example that demonstrates reading different types of data:



```cpp



int main() {

    int number;

    double decimal;

    char character;

    std::string text;



    std::cout << "Enter an integer: ";

    std::cin >> number;

    std::cout << "Enter a decimal number: ";

    std::cin >> decimal;

    std::cout << "Enter a character: ";

    std::cin >> character;

    std::cin.ignore(); // To ignore the newline character left in the buffer

    std::cout << "Enter a string: ";

    std::getline(std::cin, text);



    std::cout << "You entered: " << number << ", " << decimal << ", " << character << ", " << text << std::endl;

    return 0;

}

```





When reading user input, it's important to handle potential errors. For example, if the user enters a non-numeric value when an integer is expected, `cin` will enter a fail state. You can check for this state and handle the error appropriately:



```cpp



int main() {

    int number;

    std::cout << "Enter an integer: ";

    std::cin >> number;



    if (std::cin.fail()) {

        std::cin.clear(); // Clear the error flag

        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Ignore the rest of the input

        std::cout << "Invalid input. Please enter a valid integer." << std::endl;

    } else {

        std::cout << "You entered: " << number << std::endl;

    }



    return 0;

}

```



In this example, if the user enters invalid input, the program clears the error state and ignores the rest of the input, then prompts the user to enter a valid integer.



By mastering user input in C++, you can create more interactive and user-friendly programs. Practice using `cin` with different data types and handling errors to become proficient in managing user input.