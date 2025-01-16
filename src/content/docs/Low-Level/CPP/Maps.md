---
title: 'Maps'
sidebar:
  order: 23
---

 Maps in C++ are part of the Standard Template Library (STL) and are used to store key-value pairs. They are implemented as balanced binary trees, which means that the elements are stored in a sorted order based on the keys.





To create a map, you need to include the `<map>` header and use the `std::map` class template. Here is an example:



```cpp



int main() {

    std::map<int, std::string> myMap;

    myMap[1] = "One";

    myMap[2] = "Two";

    myMap[3] = "Three";



    for (const auto& pair : myMap) {

        std::cout << pair.first << ": " << pair.second << std::endl;

    }



    return 0;

}

```



In this example, we create a map that associates integers with strings. We then insert some key-value pairs into the map and print them out.





You can access elements in a map using the `[]` operator or the `at` method. The `[]` operator will insert a new element if the key does not exist, while the `at` method will throw an exception if the key is not found.



```cpp

std::cout << myMap[1] << std::endl; // Outputs: One

std::cout << myMap.at(2) << std::endl; // Outputs: Two

```





You can iterate over a map using iterators or range-based for loops. Here is an example using iterators:



```cpp

for (auto it = myMap.begin(); it != myMap.end(); ++it) {

    std::cout << it->first << ": " << it->second << std::endl;

}

```



And here is an example using a range-based for loop:



```cpp

for (const auto& pair : myMap) {

    std::cout << pair.first << ": " << pair.second << std::endl;

}

```





You can modify a map by inserting, erasing, or updating elements. Here are some examples:



```cpp

myMap.insert({4, "Four"});

myMap.erase(2);

myMap[3] = "Three Updated";

```



Maps are a powerful and flexible way to store and manage key-value pairs in C++. They provide efficient access, insertion, and deletion operations, making them a valuable tool in any C++ programmer's toolkit.