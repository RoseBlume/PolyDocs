---
title: 'System Calls'
sidebar:
  order: 10
---

 

1. Exit Program:

To terminate a program, you can use the `exit` system call. Here's an example:



```asm

section .data

  message db 'Exiting program', 0  ; Define a message to be printed



section .text

  global _start



_start:

  ; Print message

  mov eax, 4  ; System call number for printing

  mov ebx, 1  ; File descriptor for standard output

  mov ecx, message  ; Address of the message

  mov edx, 14  ; Length of the message

  int 0x80  ; Call the system interrupt



  ; Exit program

  mov eax, 1  ; System call number for program termination

  xor ebx, ebx  ; Exit status

  int 0x80  ; Call the system interrupt

```



2. Read Input:

To read input from the user, you can use the `read` system call. Here's an example:



```asm

section .data

  message db 'Enter a number: ', 0  ; Define a message to prompt for input

  buffer resb 16  ; Reserve space for input buffer



section .text

  global _start



_start:

  ; Print message

  mov eax, 4  ; System call number for printing

  mov ebx, 1  ; File descriptor for standard output

  mov ecx, message  ; Address of the message

  mov edx, 16  ; Length of the message

  int 0x80  ; Call the system interrupt



  ; Read input

  mov eax, 3  ; System call number for reading

  mov ebx, 0  ; File descriptor for standard input

  mov ecx, buffer  ; Address of the input buffer

  mov edx, 16  ; Maximum number of bytes to read

  int 0x80  ; Call the system interrupt



  ; Process input

  ; ...



  ; Exit program

  mov eax, 1  ; System call number for program termination

  xor ebx, ebx  ; Exit status

  int 0x80  ; Call the system interrupt

```



3. File Operations:

To perform file operations like opening, reading, writing, and closing files, you can use system calls such as `open`, `read`, `write`, and `close`. Here's an example of reading a file:



```asm

section .data

  filename db 'input.txt', 0  ; Define the filename

  buffer resb 1024  ; Reserve space for file data



section .text

  global _start



_start:

  ; Open file

  mov eax, 5  ; System call number for opening a file

  mov ebx, filename  ; Address of the filename

  mov ecx, 0  ; File access mode

  mov edx, 0  ; File permissions

  int 0x80  ; Call the system interrupt



  ; Read file

  mov eax, 3  ; System call number for reading

  mov ebx, eax  ; File descriptor

  mov ecx, buffer  ; Address of the buffer

  mov edx, 1024  ; Maximum number of bytes to read

  int 0x80  ; Call the system interrupt



  ; Process file data

  ; ...



  ; Close file

  mov eax, 6  ; System call number for closing a file

  mov ebx, eax  ; File descriptor

  int 0x80  ; Call the system interrupt



  ; Exit program

  mov eax, 1  ; System call number for program termination

  xor ebx, ebx  ; Exit status

  int 0x80  ; Call the system interrupt

```



These are just a few examples of system calls in NASM assembly. System calls provide a powerful way to interact with the operating system and extend the functionality of your assembly programs.