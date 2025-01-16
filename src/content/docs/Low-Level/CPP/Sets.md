---
title: 'Sets'
sidebar:
  order: 25
---

 In C++, a set is a container that stores unique elements following a specific order. The `std::set` is part of the C++ Standard Library and provides an efficient way to manage collections of unique items.





To create a set, you need to include the `<set>` header:



```cpp

```



You can then declare a set of a specific type:



```cpp

std::set<int> mySet;

```





To add elements to a set, you can use the `insert` method:



```cpp

mySet.insert(10);

mySet.insert(20);

mySet.insert(30);

```





To remove elements, you can use the `erase` method:



```cpp

mySet.erase(20);

```





To check if an element exists in the set, you can use the `find` method:



```cpp

if (mySet.find(10) != mySet.end()) {

    // Element found

}

```





You can iterate over the elements of a set using iterators:



```cpp

for (std::set<int>::iterator it = mySet.begin(); it != mySet.end(); ++it) {

    std::cout << *it << std::endl;

}

```





Sets support various operations like union, intersection, and difference. These can be performed using algorithms from the `<algorithm>` header.





To compute the union of two sets:



```cpp

std::set<int> set1 = {1, 2, 3};

std::set<int> set2 = {3, 4, 5};

std::set<int> resultSet;



std::set_union(set1.begin(), set1.end(), set2.begin(), set2.end(), std::inserter(resultSet, resultSet.begin()));

```





To compute the intersection of two sets:



```cpp

std::set<int> resultSet;

std::set_intersection(set1.begin(), set1.end(), set2.begin(), set2.end(), std::inserter(resultSet, resultSet.begin()));

```





To compute the difference of two sets:



```cpp

std::set<int> resultSet;

std::set_difference(set1.begin(), set1.end(), set2.begin(), set2.end(), std::inserter(resultSet, resultSet.begin()));

```



The `std::set` is a powerful container in C++ that ensures all elements are unique and provides efficient operations for managing collections of items. Understanding how to use sets effectively can greatly enhance your ability to write efficient and clean C++ code.