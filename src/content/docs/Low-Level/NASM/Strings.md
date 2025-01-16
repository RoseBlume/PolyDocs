---
title: 'Strings'
sidebar:
  order: 16
---

 

In NASM assembly, strings are sequences of characters stored in memory. They are typically terminated by a null character (`'\0'`). Here's an example of declaring and initializing a string:



```asm

section .data

  myString db 'Hello, World!', 0



section .text

  global _start



_start:

  ; Print the string

  mov eax, 4

  mov ebx, 1

  mov ecx, myString

  mov edx, 13

  int 0x80



  ; Exit the program

  mov eax, 1

  xor ebx, ebx

  int 0x80

```



In the above example, we declare a string named `myString` in the `.data` section and initialize it with the value `'Hello, World!'`. The null character (`0`) is added at the end to terminate the string.



To print the string, we use the `write` system call. The file descriptor `1` represents standard output. We pass the address of the string (`myString`) in the `ecx` register and the length of the string (`13`) in the `edx` register.



Finally, we exit the program using the `exit` system call.



Remember to include the necessary NASM assembly directives and linker commands to compile and run the program.
