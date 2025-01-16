---
title: 'Data Structures'
sidebar:
  order: 1
---

 

Data structures are a fundamental concept in computer science and programming. They are used to store and organize data in a way that enables efficient access and modification. In C++, data structures can be implemented using various techniques and can be categorized into different types based on their characteristics and usage.







An array is a collection of elements of the same type stored in contiguous memory locations. Arrays allow for constant-time access to elements using an index.



```cpp

int arr[5] = {1, 2, 3, 4, 5};

```





A linked list is a linear data structure where each element is a separate object, called a node. Each node contains a data part and a reference (or link) to the next node in the sequence.



```cpp

struct Node {

    int data;

    Node* next;

};

```





A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements can be added and removed only from the top of the stack.



```cpp

std::stack<int> s;

s.push(1);

s.push(2);

int top = s.top();

s.pop();

```





A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the back and removed from the front.



```cpp

std::queue<int> q;

q.push(1);

q.push(2);

int front = q.front();

q.pop();

```





A tree is a hierarchical data structure consisting of nodes, with a single node as the root and zero or more child nodes. Trees are used to represent hierarchical relationships.



```cpp

struct TreeNode {

    int data;

    TreeNode* left;

    TreeNode* right;

};

```





A graph is a collection of nodes (vertices) and edges connecting pairs of nodes. Graphs can be used to represent networks, such as social networks or communication networks.



```cpp

struct Graph {

    int V;

    std::vector<int> *adj;

    Graph(int V) {

        this->V = V;

        adj = new std::vector<int>[V];

    }

    void addEdge(int v, int w) {

        adj[v].push_back(w);

    }

};

```


