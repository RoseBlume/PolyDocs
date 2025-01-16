---
title: 'Arrays'
sidebar:
  order: 11
---

 Arrays in C++ are a collection of elements of the same type placed in contiguous memory locations. They are used to store multiple values in a single variable, instead of declaring separate variables for each value.



To declare an array in C++, specify the type of elements and the number of elements required by an array as follows:

```cpp

type arrayName[arraySize];

```

For example, to declare an array of 10 integers:

```cpp

int numbers[10];

```



You can initialize an array at the time of declaration by enclosing the values in curly braces:

```cpp

int numbers[5] = {1, 2, 3, 4, 5};

```

If you omit the size of the array, the compiler will automatically set it to the number of elements provided:

```cpp

int numbers[] = {1, 2, 3, 4, 5};

```



Array elements are accessed using their index number. The index of the first element is 0, the second element is 1, and so on:

```cpp

cout << numbers[0]; // Outputs 1

cout << numbers[2]; // Outputs 3

```



You can use loops to iterate through arrays. Here’s an example using a `for` loop:

```cpp

for(int i = 0; i < 5; i++) {

    cout << numbers[i] << " ";

}

```



C++ supports multidimensional arrays. The simplest form of a multidimensional array is the two-dimensional array:

```cpp

type arrayName[rowSize][columnSize];

```

For example, to declare a 2x3 array of integers:

```cpp

int matrix[2][3];

```

You can initialize a two-dimensional array during declaration:

```cpp

int matrix[2][3] = {

    {1, 2, 3},

    {4, 5, 6}

};

```

Accessing elements in a two-dimensional array is similar to a one-dimensional array:

```cpp

cout << matrix[0][0]; // Outputs 1

cout << matrix[1][2]; // Outputs 6

```



Arrays are a fundamental concept in C++ that allow you to store and manipulate collections of data efficiently. Understanding how to declare, initialize, and access arrays is essential for any C++ programmer.

In C++, you can pass arrays to functions. When passing an array to a function, you need to specify the array's type and use empty square brackets to indicate that it is an array. Here is an example of a function that takes an array of integers and its size as arguments:

```cpp

void printArray(int arr[], int size) {

    for(int i = 0; i < size; i++) {

        cout << arr[i] << " ";

    }

    cout << endl;

}

```

You can call this function by passing an array and its size:

```cpp

int numbers[] = {1, 2, 3, 4, 5};

int size = sizeof(numbers) / sizeof(numbers[0]);

printArray(numbers, size);

```



In C++, arrays and pointers are closely related. The name of an array acts as a pointer to its first element. This means that you can use pointers to access and manipulate array elements. Here is an example:

```cpp

int numbers[] = {1, 2, 3, 4, 5};

int* ptr = numbers;

cout << *ptr << endl; // Outputs 1

ptr++;

cout << *ptr << endl; // Outputs 2

```

You can also use pointer arithmetic to iterate through an array:

```cpp

for(int* ptr = numbers; ptr < numbers + 5; ptr++) {

    cout << *ptr << " ";

}

cout << endl;

```



In C++, you can create dynamic arrays using pointers and the `new` keyword. Dynamic arrays allow you to allocate memory at runtime. Here is an example of creating and using a dynamic array:

```cpp

int* numbers = new int[5];

for(int i = 0; i < 5; i++) {

    numbers[i] = i + 1;

}

for(int i = 0; i < 5; i++) {

    cout << numbers[i] << " ";

}

cout << endl;

delete[] numbers; // Don't forget to free the allocated memory

```



C++ also provides a standard library array class called `std::array` which is part of the `<array>` header. This class provides a safer and more convenient way to work with arrays. Here is an example:

```cpp

using namespace std;



array<int, 5> numbers = {1, 2, 3, 4, 5};

for(int i = 0; i < numbers.size(); i++) {

    cout << numbers[i] << " ";

}

cout << endl;

```

The `std::array` class provides various member functions such as `size()`, `at()`, `front()`, and `back()` to make array manipulation easier and safer.



Understanding these advanced concepts related to arrays will help you write more efficient and flexible C++ programs. Arrays are a powerful tool in C++ that, when used correctly, can greatly enhance the performance and readability of your code.