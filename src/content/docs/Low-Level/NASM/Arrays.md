---
title: 'Arrays'
sidebar:
  order: 17
---

 

In NASM assembly, arrays are a way to store multiple values of the same data type in contiguous memory locations. They provide a convenient way to work with collections of data.



To declare an array in NASM, you need to specify the size of the array and the data type of its elements. Here's an example of declaring an array of integers:



```asm

section .data

  myArray:    dd  1, 2, 3, 4, 5

  arraySize:  equ $ - myArray

```



In the above example, `myArray` is an array of integers with initial values 1, 2, 3, 4, and 5. The `arraySize` variable is used to store the size of the array, which is calculated by subtracting the address of `myArray` from the current address (`$`).



To access individual elements of the array, you can use indexing. NASM uses zero-based indexing, so the first element of the array is at index 0. Here's an example of accessing and modifying elements of the array:



```asm

section .text

  global _start



_start:

  mov eax, [myArray]      ; Load the first element of the array into EAX

  add eax, 10             ; Add 10 to the value in EAX

  mov [myArray], eax      ; Store the modified value back into the first element



  mov ebx, 2              ; Index of the second element

  mov eax, [myArray + ebx * 4]  ; Load the value at index 2 into EAX

  ; Perform operations on the value



  ; Continue with the rest of the program

```



In the above example, we load the first element of the array into the `EAX` register, add 10 to it, and store the modified value back into the first element. Then, we access the second element of the array by using the index `2` and perform operations on it.



Remember to adjust the index by multiplying it with the size of each element (`4` in this case, since we are using `dd` to declare integers).



Arrays in NASM assembly provide a powerful way to work with collections of data efficiently. Make sure to handle array bounds carefully to avoid accessing memory outside the array's allocated space.
