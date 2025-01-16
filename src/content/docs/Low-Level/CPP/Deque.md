---
title: 'Deque'
sidebar:
  order: 21
---

 A `deque` (double-ended queue) is a sequence container that allows fast insertion and deletion at both its beginning and end. It is part of the C++ Standard Library and is defined in the `<deque>` header.





To create a `deque`, you need to include the `<deque>` header and use the `std::deque` class template. Here is an example:



```cpp



int main() {

    std::deque<int> myDeque;



    // Adding elements to the deque

    myDeque.push_back(10);

    myDeque.push_front(20);



    // Displaying the elements

    for (int elem : myDeque) {

        std::cout << elem << " ";

    }



    return 0;

}

```



In this example, we create a `deque` of integers and add elements to both the front and back of the deque. The output will be `20 10`.







- `push_back(value)`: Adds an element to the end of the deque.

- `push_front(value)`: Adds an element to the beginning of the deque.





- `pop_back()`: Removes the last element of the deque.

- `pop_front()`: Removes the first element of the deque.





- `front()`: Returns a reference to the first element.

- `back()`: Returns a reference to the last element.

- `at(index)`: Returns a reference to the element at the specified position.

- `operator[]`: Provides direct access to the element at the specified position.





- `size()`: Returns the number of elements in the deque.

- `empty()`: Checks whether the deque is empty.





Here is a more comprehensive example demonstrating various operations on a `deque`:



```cpp



int main() {

    std::deque<int> myDeque = {1, 2, 3, 4, 5};



    // Insert elements

    myDeque.push_back(6);

    myDeque.push_front(0);



    // Access elements

    std::cout << "Front element: " << myDeque.front() << std::endl;

    std::cout << "Back element: " << myDeque.back() << std::endl;



    // Remove elements

    myDeque.pop_front();

    myDeque.pop_back();



    // Display the deque

    std::cout << "Deque elements: ";

    for (int elem : myDeque) {

        std::cout << elem << " ";

    }



    return 0;

}

```
