---
title: 'Basic Syntax'
sidebar:
  order: 0
---

 

In assembly language programming, there are typically three sections that make up the structure of a program: the data section, the text section, and the bss section.





The data section is used to declare and initialize variables. It is typically used to store static data that will be accessed by the program during its execution. Here's an example of how the data section can be used:



```asm

section .data

  message db 'Hello, World!', 0  ; Declare and initialize the variable 'message' with the string "Hello, World!"

```



In this example, we declare a variable called `message` and initialize it with the string "Hello, World!". The `db` directive is used to define a byte-sized variable, and the `0` at the end represents the null terminator.





The text section, also known as the code section, contains the actual instructions of the program. It is where the main logic of the program resides. Here's an example of how the text section can be used:



```asm

section .text

  global _start



_start:

  mov eax, 4    ; System call number for write

  mov ebx, 1    ; File descriptor for standard output

  mov ecx, message  ; Address of the string to be written

  mov edx, 13   ; Length of the string

  int 0x80      ; Perform the system call



  mov eax, 1    ; System call number for exit

  xor ebx, ebx  ; Exit status

  int 0x80      ; Perform the system call

```



In this example, we define a global label `_start` which serves as the entry point of the program. The instructions following `_start` perform a system call to write the string stored in `message` to the standard output. Finally, the program exits by making another system call.





The bss section, short for "Block Started by Symbol," is used to declare uninitialized variables. It is typically used for variables that will be initialized at runtime. Here's an example of how the bss section can be used:



```asm

section .bss

  buffer resb 64  ; Reserve a block of memory of size 64 bytes for the variable 'buffer'

```



In this example, we declare a variable called `buffer` which will be used to store user input. The `resb` directive is used to reserve a block of memory of size 64 bytes.





Here's a complete example that demonstrates the three sections in assembly language programming by printing "Hello, World!" to the standard output:



```asm

section .data

  message db 'Hello, World!', 0  ; Declare and initialize the variable 'message' with the string "Hello, World!"



section .text

  global _start



_start:

  mov eax, 4    ; System call number for write

  mov ebx, 1    ; File descriptor for standard output

  mov ecx, message  ; Address of the string to be written

  mov edx, 13   ; Length of the string

  int 0x80      ; Perform the system call



  mov eax, 1    ; System call number for exit

  xor ebx, ebx  ; Exit status

  int 0x80      ; Perform the system call



section .bss

  buffer resb 64  ; Reserve a block of memory of size 64 bytes for the variable 'buffer'

```



This example declares the `message` variable in the data section, writes it to the standard output in the text section, and reserves memory for the `buffer` variable in the bss section.