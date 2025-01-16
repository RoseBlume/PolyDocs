---
title: 'Iterators'
sidebar:
  order: 28
---

 Iterators are a fundamental part of C++ that allow you to traverse containers, such as arrays, vectors, lists, and other data structures. They provide a way to access the elements of a container sequentially without exposing the underlying representation.





Input iterators are used to read elements from a container. They can only move forward and are typically used in single-pass algorithms.



Output iterators are used to write elements to a container. Like input iterators, they can only move forward and are used in single-pass algorithms.



Forward iterators can read and write elements and can move forward through a container. They can be used in multi-pass algorithms.



Bidirectional iterators can move both forward and backward through a container. They are more powerful than forward iterators and can be used in more complex algorithms.



Random access iterators can move freely to any element in a container, providing the most flexibility. They support all the operations of bidirectional iterators and also allow direct access to any element.





Here is an example of using iterators with a `std::vector`:



```cpp



int main() {

    std::vector<int> numbers = {1, 2, 3, 4, 5};



    // Using an iterator to traverse the vector

    for (std::vector<int>::iterator it = numbers.begin(); it != numbers.end(); ++it) {

        std::cout << *it << " ";

    }



    return 0;

}

```



In this example, `it` is an iterator that starts at the beginning of the vector and moves to the end, printing each element.





Returns an iterator to the first element of the container.



Returns an iterator to the element following the last element of the container.



Returns a reverse iterator to the last element of the container.



Returns a reverse iterator to the element preceding the first element of the container.



Returns a constant iterator to the first element of the container.



Returns a constant iterator to the element following the last element of the container.



Returns a constant reverse iterator to the last element of the container.



Returns a constant reverse iterator to the element preceding the first element of the container.



Understanding and using iterators effectively can greatly enhance your ability to work with C++ containers and algorithms.