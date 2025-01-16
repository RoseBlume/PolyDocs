---
title: 'Math'
sidebar:
  order: 20
---

 



C++ supports all basic arithmetic operations such as addition, subtraction, multiplication, and division. Here are some examples:



```cpp

int a = 10;

int b = 5;



int sum = a + b;        // Addition

int difference = a - b; // Subtraction

int product = a * b;    // Multiplication

int quotient = a / b;   // Division

```





C++ provides a rich set of mathematical functions through the `<cmath>` library. Some commonly used functions include:



- `sqrt(x)`: Computes the square root of `x`.

- `pow(x, y)`: Computes `x` raised to the power of `y`.

- `sin(x)`, `cos(x)`, `tan(x)`: Trigonometric functions.

- `log(x)`: Computes the natural logarithm of `x`.



Example usage:



```cpp



int main() {

    double x = 9.0;

    double y = 2.0;



    std::cout << "Square root of " << x << " is " << sqrt(x) << std::endl;

    std::cout << x << " raised to the power of " << y << " is " << pow(x, y) << std::endl;



    return 0;

}

```





Generating random numbers is a common task in many applications. C++ provides facilities for this through the `<cstdlib>` and `<ctime>` libraries.



Example:



```cpp



int main() {

    std::srand(std::time(0)); // Seed the random number generator

    int random_number = std::rand(); // Generate a random number



    std::cout << "Random number: " << random_number << std::endl;



    return 0;

}

```



Understanding and utilizing mathematical functions in C++ is crucial for developing efficient and effective programs. Practice these concepts to become proficient in handling mathematical operations in your C++ projects.