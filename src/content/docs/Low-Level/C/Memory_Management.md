---
title: 'Memory Management'
sidebar:
  order: 13
---

 Memory management in C is a crucial aspect of programming that involves the allocation, deallocation, and management of memory. Understanding how memory works in C can help you write more efficient and bug-free code.





In C, memory is divided into two main areas: the stack and the heap.





The stack is used for static memory allocation. It stores local variables and function call information. When a function is called, its local variables are pushed onto the stack, and when the function returns, they are popped off. The stack is fast but limited in size.





The heap is used for dynamic memory allocation. It allows you to allocate memory at runtime using functions like `malloc`, `calloc`, `realloc`, and `free`. The heap is larger than the stack but can become fragmented over time, leading to inefficient memory use.





Dynamic memory allocation allows you to request memory at runtime. This is useful when you don't know the size of the data structures at compile time.





The `malloc` function allocates a specified number of bytes and returns a pointer to the allocated memory. If the allocation fails, it returns `NULL`.



```c

int *ptr = (int *)malloc(sizeof(int) * 10);

if (ptr == NULL) {

    // Handle memory allocation failure

}

```





The `calloc` function allocates memory for an array of elements, initializes them to zero, and returns a pointer to the allocated memory.



```c

int *ptr = (int *)calloc(10, sizeof(int));

if (ptr == NULL) {

    // Handle memory allocation failure

}

```





The `realloc` function changes the size of previously allocated memory. It can expand or shrink the memory block.



```c

ptr = (int *)realloc(ptr, sizeof(int) * 20);

if (ptr == NULL) {

    // Handle memory allocation failure

}

```





The `free` function deallocates previously allocated memory, making it available for future allocations.



```c

free(ptr);

ptr = NULL; // Avoid dangling pointer

```







A memory leak occurs when allocated memory is not freed. Over time, this can consume all available memory, leading to program crashes.





A dangling pointer points to memory that has been freed. Accessing this memory can lead to undefined behavior.





Double free occurs when you try to free the same memory block more than once. This can corrupt the heap and lead to program crashes.





A buffer overflow occurs when you write more data to a buffer than it can hold. This can overwrite adjacent memory and lead to undefined behavior.



By understanding and properly managing memory in C, you can write more efficient and reliable programs.