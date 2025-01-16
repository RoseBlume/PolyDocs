---
title: 'Arithmetic Instructions'
sidebar:
  order: 6
---

 

Arithmetic instructions in NASM assembly language allow you to perform various mathematical operations on data. These instructions can be used to add, subtract, multiply, and divide values.



Here are some examples of arithmetic instructions in NASM:



1. Addition:

  ```asm

  add eax, ebx  ; Adds the value in EBX to EAX and stores the result in EAX

  ```



2. Subtraction:

  ```asm

  sub ecx, edx  ; Subtracts the value in EDX from ECX and stores the result in ECX

  ```



3. Multiplication:

  ```asm

  imul esi, edi  ; Multiplies the value in EDI with ESI and stores the result in ESI

  ```



4. Division:

  ```asm

  idiv ebx      ; Divides the value in EDX:EAX by EBX, quotient is stored in EAX and remainder in EDX

  ```



These are just a few examples of arithmetic instructions available in NASM assembly. You can refer to the NASM documentation for a complete list of arithmetic instructions and their usage.



Remember to use appropriate registers and operands based on your specific requirements when using arithmetic instructions in NASM assembly.
