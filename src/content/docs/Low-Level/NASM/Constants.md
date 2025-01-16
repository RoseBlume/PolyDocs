---
title: 'Constants'
sidebar:
  order: 4
---

 Constants in NASM assembly are values that remain fixed throughout the execution of a program. They are typically used to represent fixed values or predefined values that are used repeatedly in the code.



To define a constant in NASM, you can use the `equ` directive. Here's an example:



```asm

section .data

  MY_CONSTANT equ 42



section .text

  global _start



_start:

  mov eax, MY_CONSTANT

  ; Rest of the code...

```



In the above example, `MY_CONSTANT` is defined as 42 using the `equ` directive. This constant can then be used in the code by referencing its name.



Constants can also be used in arithmetic operations. Here's an example:



```asm

section .data

  PI equ 3.14159

  RADIUS equ 5



section .text

  global _start



_start:

  fld dword [PI]

  fld dword [RADIUS]

  fmul

  ; Rest of the code...

```



In this example, `PI` and `RADIUS` are defined as constants. The `fld` instruction is used to load the values of these constants onto the FPU stack, and `fmul` is used to multiply them.



Using constants in NASM assembly can make your code more readable and maintainable, as it allows you to give meaningful names to fixed values and reuse them throughout your program.
