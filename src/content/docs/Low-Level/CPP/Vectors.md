---
title: 'Vectors'
sidebar:
  order: 27
---

 

Vectors in C++ are part of the Standard Template Library (STL) and provide a dynamic array functionality. Unlike arrays, vectors can change their size dynamically, which makes them more flexible and easier to use in many situations.





To create a vector, you need to include the `<vector>` header:



```cpp

```



You can then declare a vector like this:



```cpp

std::vector<int> myVector;

```



This creates an empty vector of integers.





You can add elements to a vector using the `push_back` method:



```cpp

myVector.push_back(10);

myVector.push_back(20);

myVector.push_back(30);

```



This will add the elements 10, 20, and 30 to the vector.





You can access elements in a vector using the `at` method or the subscript operator `[]`:



```cpp

int firstElement = myVector.at(0); // Using at()

int secondElement = myVector[1];   // Using []

```





You can iterate over a vector using a range-based for loop:



```cpp

for (int value : myVector) {

    std::cout << value << std::endl;

}

```



Or using an iterator:



```cpp

for (std::vector<int>::iterator it = myVector.begin(); it != myVector.end(); ++it) {

    std::cout << *it << std::endl;

}

```





You can remove elements from a vector using the `pop_back` method, which removes the last element:



```cpp

myVector.pop_back();

```



To remove a specific element, you can use the `erase` method:



```cpp

myVector.erase(myVector.begin() + 1); // Removes the second element

```





You can get the size of a vector using the `size` method:



```cpp

std::cout << "Size of vector: " << myVector.size() << std::endl;

```



Vectors in C++ are a powerful and flexible way to manage dynamic arrays. They provide many useful methods and are an essential part of the STL.
