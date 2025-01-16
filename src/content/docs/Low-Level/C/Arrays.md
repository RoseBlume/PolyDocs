---
title: 'Arrays'
sidebar:
  order: 15
---

 Arrays in C are a collection of variables of the same type that are stored in contiguous memory locations. They are used to store multiple values in a single variable, instead of declaring separate variables for each value.



To declare an array in C, you specify the type of the elements and the number of elements required by an array as follows:

```c

type arrayName[arraySize];

```

For example, to declare an array of 10 integers:

```c

int numbers[10];

```



You can initialize an array at the time of declaration by providing a comma-separated list of values enclosed in curly braces:

```c

int numbers[5] = {1, 2, 3, 4, 5};

```

If you do not initialize all elements, the remaining elements will be set to zero:

```c

int numbers[5] = {1, 2}; // numbers[2], numbers[3], and numbers[4] will be 0

```



Array elements are accessed using the index, with the first element at index 0:

```c

int value = numbers[0]; // Access the first element

numbers[1] = 10; // Set the second element to 10

```



You can use loops to iterate through array elements. Here is an example using a `for` loop:

```c

for (int i = 0; i < 5; i++) {

    printf("%d\n", numbers[i]);

}

```



C supports multidimensional arrays. The simplest form is the two-dimensional array, which can be declared as follows:

```c

type arrayName[rows][columns];

```

For example, to declare a 2x3 array of integers:

```c

int matrix[2][3];

```

You can initialize a two-dimensional array in a similar way:

```c

int matrix[2][3] = {

    {1, 2, 3},

    {4, 5, 6}

};

```

Accessing elements in a two-dimensional array is done using two indices:

```c

int value = matrix[0][1]; // Access the element at the first row and second column

matrix[1][2] = 10; // Set the element at the second row and third column to 10

```



Arrays are a fundamental concept in C programming and are widely used in various applications. Understanding how to declare, initialize, and manipulate arrays is essential for any C programmer.