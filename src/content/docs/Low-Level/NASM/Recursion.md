---
title: 'Recursion'
sidebar:
  order: 12
---

 

Recursion is a powerful programming technique that allows a function to call itself. In NASM Assembly, recursion can be used to solve problems that can be divided into smaller subproblems.



To illustrate recursion in NASM Assembly, let's consider an example of calculating the factorial of a number. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n.



Here's an example implementation of a recursive factorial function in NASM Assembly:



```asm

section .data

  result db 0



section .text

global _start



_start:

  mov ecx, 5  ; calculate factorial of 5

  call factorial



  ; Print the result

  mov eax, 4

  mov ebx, 1

  mov edx, 1

  int 0x80



  ; Exit the program

  mov eax, 1

  xor ebx, ebx

  int 0x80



factorial:

  push ebp

  mov ebp, esp



  mov eax, [ebp + 8]  ; get the argument

  cmp eax, 1

  jle return_one



  dec eax

  push eax

  call factorial

  add esp, 4



  mov ebx, [ebp + 8]  ; get the argument

  imul eax, ebx



return_one:

  mov [result], eax



  mov esp, ebp

  pop ebp

  ret

```



In this example, the `factorial` function calculates the factorial of a given number using recursion. It first checks if the argument is less than or equal to 1. If so, it returns 1 as the base case. Otherwise, it decrements the argument, calls itself with the decremented argument, and multiplies the result with the original argument.



The program then calls the `factorial` function with an argument of 5 and prints the result.



Recursion can be a powerful tool in NASM Assembly programming, but it should be used with caution to avoid infinite loops or excessive stack usage.
