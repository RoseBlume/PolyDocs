---
title: 'File Management'
sidebar:
  order: 15
---

 File management in NASM assembly involves performing operations on files, such as opening, reading, writing, and closing them. These operations are typically done using system calls provided by the operating system.



To open a file, you can use the `open` system call. Here's an example:



```asm

section .data

  filename db 'example.txt', 0

  mode     db 0o666

  file     dd 0



section .text

  global _start



_start:

  ; Open the file

  mov eax, 5        ; System call number for open

  mov ebx, filename ; File name

  mov ecx, 0        ; Flags (0 for read-only)

  mov edx, mode     ; File permissions

  int 0x80          ; Call the kernel



  ; Store the file descriptor

  mov [file], eax



  ; Rest of your code goes here



  ; Close the file

  mov eax, 6        ; System call number for close

  mov ebx, [file]   ; File descriptor

  int 0x80          ; Call the kernel



  ; Exit the program

  mov eax, 1        ; System call number for exit

  xor ebx, ebx      ; Exit status

  int 0x80          ; Call the kernel

```



In this example, we first define the file name (`example.txt`), the file mode (`0o666` for read and write permissions), and a variable to store the file descriptor (`file`). We then use the `open` system call to open the file, passing the file name, flags, and file permissions as arguments. The file descriptor returned by the system call is stored in the `file` variable.



After opening the file, you can perform various operations on it, such as reading or writing data. Once you're done with the file, you can close it using the `close` system call.



Remember to include the necessary NASM directives and linker options to compile and run the assembly code.
