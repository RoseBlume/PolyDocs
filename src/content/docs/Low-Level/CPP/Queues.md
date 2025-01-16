---
title: 'Queues'
sidebar:
  order: 24
---

 

A queue is a data structure that follows the First In First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. Queues are commonly used in scenarios where you need to manage tasks in a specific order, such as in scheduling algorithms, breadth-first search in graphs, and handling requests in web servers.





There are several basic operations that can be performed on a queue:



- **Enqueue**: Add an element to the end of the queue.

- **Dequeue**: Remove an element from the front of the queue.

- **Front**: Get the front element of the queue without removing it.

- **Rear**: Get the last element of the queue without removing it.

- **IsEmpty**: Check if the queue is empty.

- **Size**: Get the number of elements in the queue.





In C++, a queue can be implemented using arrays, linked lists, or the STL (Standard Template Library) `queue` container. Below is an example of how to implement a queue using the STL `queue` container:



```cpp



int main() {

    std::queue<int> q;



    // Enqueue elements

    q.push(10);

    q.push(20);

    q.push(30);



    // Display the front element

    std::cout << "Front element: " << q.front() << std::endl;



    // Dequeue elements

    q.pop();

    std::cout << "Front element after dequeue: " << q.front() << std::endl;



    // Check if the queue is empty

    if (q.empty()) {

        std::cout << "Queue is empty" << std::endl;

    } else {

        std::cout << "Queue is not empty" << std::endl;

    }



    // Display the size of the queue

    std::cout << "Size of the queue: " << q.size() << std::endl;



    return 0;

}

```



Queues are an essential data structure in computer science and are widely used in various applications. Understanding how to implement and use queues in C++ will help you manage data efficiently and solve problems that require ordered processing of elements.