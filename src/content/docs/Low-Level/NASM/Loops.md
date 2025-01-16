---
title: 'Loops'
sidebar:
  order: 9
---

 Loops in NASM Assembly:



Loops are an essential part of programming, allowing us to repeat a block of code multiple times. In NASM Assembly, we can implement loops using conditional jumps.



Here's an example of a loop that prints the numbers 1 to 10:



```asm

section .data

  msg db "Number: %d", 10, 0



section .text

  global _start



_start:

  mov ecx, 1  ; initialize counter



loop_start:

  push ecx  ; save counter value



  push msg  ; push format string

  push ecx  ; push counter value

  call printf  ; call printf function

  add esp, 8  ; clean up the stack



  pop ecx  ; restore counter value

  inc ecx  ; increment counter



  cmp ecx, 11  ; compare counter with 11

  jne loop_start  ; jump to loop_start if not equal



  mov eax, 1  ; exit system call

  xor ebx, ebx

  int 0x80

```



In this example, we use the `ecx` register as a counter to keep track of the current number. We start by initializing `ecx` to 1. Inside the loop, we push the counter value onto the stack, print it using the `printf` function, and then increment the counter. We compare the counter with 11 and if they are not equal, we jump back to the `loop_start` label to repeat the loop. Once the counter reaches 11, we exit the program.



Loops are a powerful tool in NASM Assembly that allow us to perform repetitive tasks efficiently. Experiment with different loop structures and conditions to achieve the desired functionality.
