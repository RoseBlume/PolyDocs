---
title: 'Date'
sidebar:
  order: 29
---

 



In this section, we will explore how to work with dates in C++. Handling dates can be a common requirement in many applications, and C++ provides several ways to manage and manipulate date information.





The `<ctime>` library in C++ provides functions to work with date and time. This library includes functions to get the current date and time, format dates, and perform date arithmetic.





To get the current date and time, you can use the `std::time` function, which returns the current time as a `std::time_t` object. This object can then be converted to a more readable format using the `std::localtime` function.



```cpp



int main() {

    std::time_t now = std::time(nullptr);

    std::tm* localTime = std::localtime(&now);



    std::cout << "Current date and time: "

              << (localTime->tm_year + 1900) << '-'

              << (localTime->tm_mon + 1) << '-'

              << localTime->tm_mday << ' '

              << localTime->tm_hour << ':'

              << localTime->tm_min << ':'

              << localTime->tm_sec << '\n';



    return 0;

}

```





The `std::strftime` function allows you to format dates and times into a string. This function takes a format string that specifies how the date and time should be formatted.



```cpp



int main() {

    std::time_t now = std::time(nullptr);

    std::tm* localTime = std::localtime(&now);



    char buffer[80];

    std::strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", localTime);



    std::cout << "Formatted date and time: " << buffer << '\n';



    return 0;

}

```





You can perform arithmetic operations on dates using the `std::mktime` function. This function converts a `std::tm` structure to a `std::time_t` object, which can then be manipulated using standard arithmetic operators.



```cpp



int main() {

    std::tm date = {};

    date.tm_year = 2023 - 1900; // Year since 1900

    date.tm_mon = 9;            // Month (0-11)

    date.tm_mday = 15;          // Day of the month



    std::time_t date_time = std::mktime(&date);

    date_time += 7 * 24 * 60 * 60; // Add 7 days



    std::tm* new_date = std::localtime(&date_time);



    std::cout << "New date: "

              << (new_date->tm_year + 1900) << '-'

              << (new_date->tm_mon + 1) << '-'

              << new_date->tm_mday << '\n';



    return 0;

}

```


