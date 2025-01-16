---
title: 'Stacks'
sidebar:
  order: 26
---

 

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Stacks are used in various applications, such as expression evaluation, backtracking algorithms, and function call management in programming languages.





There are several basic operations that can be performed on a stack:



- **push**: Add an element to the top of the stack.

- **pop**: Remove the top element from the stack.

- **peek**: Retrieve the top element without removing it.

- **isEmpty**: Check if the stack is empty.

- **size**: Get the number of elements in the stack.





Here is a simple implementation of a stack using an array in C++:



```cpp



class Stack {

    int top;

public:

    int a[MAX]; // Maximum size of Stack



    Stack() { top = -1; }

    bool push(int x);

    int pop();

    int peek();

    bool isEmpty();

};



bool Stack::push(int x) {

    if (top >= (MAX - 1)) {

        std::cout << "Stack Overflow";

        return false;

    } else {

        a[++top] = x;

        std::cout << x << " pushed into stack\n";

        return true;

    }

}



int Stack::pop() {

    if (top < 0) {

        std::cout << "Stack Underflow";

        return 0;

    } else {

        int x = a[top--];

        return x;

    }

}



int Stack::peek() {

    if (top < 0) {

        std::cout << "Stack is Empty";

        return 0;

    } else {

        int x = a[top];

        return x;

    }

}



bool Stack::isEmpty() {

    return (top < 0);

}



int main() {

    Stack s;

    s.push(10);

    s.push(20);

    s.push(30);

    std::cout << s.pop() << " Popped from stack\n";

    return 0;

}

```





In the above code, we define a `Stack` class with an array `a` to store the elements and an integer `top` to keep track of the top element's index. The `push` method adds an element to the stack, the `pop` method removes the top element, the `peek` method returns the top element without removing it, and the `isEmpty` method checks if the stack is empty.



Stacks are a fundamental data structure in computer science, and understanding how to implement and use them in C++ is essential for solving various problems. Practice implementing stacks using different methods, such as linked lists, to deepen your understanding.