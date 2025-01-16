---
title: 'List'
sidebar:
  order: 22
---

 In C++, a list is a sequence container that allows non-contiguous memory allocation. It is part of the Standard Template Library (STL) and provides a way to store elements in a linear sequence. Unlike arrays, lists allow efficient insertion and deletion of elements at both the beginning and the end of the sequence, as well as in the middle.





To create a list in C++, you need to include the `<list>` header and use the `std::list` class template. Here is an example of how to create a list of integers:



```cpp



int main() {

    std::list<int> myList;

    myList.push_back(10);

    myList.push_back(20);

    myList.push_back(30);



    for (int value : myList) {

        std::cout << value << " ";

    }



    return 0;

}

```







You can add elements to a list using `push_back`, `push_front`, `insert`, and `emplace` methods. Here are some examples:



```cpp

std::list<int> myList;

myList.push_back(10);  // Adds 10 to the end

myList.push_front(5);  // Adds 5 to the beginning

myList.insert(++myList.begin(), 15);  // Inserts 15 after the first element

```





Elements can be removed using `pop_back`, `pop_front`, `erase`, and `remove` methods:



```cpp

myList.pop_back();  // Removes the last element

myList.pop_front();  // Removes the first element

myList.erase(++myList.begin());  // Removes the second element

myList.remove(15);  // Removes all elements with the value 15

```





Lists do not support direct access to elements via the subscript operator (`[]`). Instead, you need to use iterators:



```cpp

std::list<int>::iterator it = myList.begin();

std::advance(it, 1);  // Move iterator to the second element

std::cout << *it << std::endl;

```





- **Dynamic Size**: Lists can grow and shrink dynamically as needed.

- **Efficient Insertions/Deletions**: Inserting or deleting elements is efficient, especially at the beginning or end of the list.

- **Bidirectional Iteration**: Lists support bidirectional iterators, allowing traversal in both directions.





- **Memory Overhead**: Lists use more memory due to the storage of pointers for each element.

- **No Random Access**: Accessing elements by index is not possible, which can lead to slower access times compared to arrays or vectors.





Lists are a powerful and flexible container in C++ that provide efficient insertion and deletion operations. However, they come with some trade-offs, such as higher memory usage and lack of random access. Understanding when to use a list versus other containers like vectors or arrays is crucial for writing efficient C++ programs.