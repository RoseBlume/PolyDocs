---
title: 'Variables'
sidebar:
  order: 5
---

 Variables in NASM are used to store and manipulate data during program execution. They provide a way to store values that can be accessed and modified throughout the program.



To declare a variable in NASM, you need to specify its name and data type. NASM supports various data types such as byte, word, double word, and quad word, which determine the size of the variable and the range of values it can hold.



Here's an example of declaring a variable in NASM:



```asm

section .data

  myVariable db 10     ; Declaring a byte variable with initial value 10

  anotherVariable dw 1000   ; Declaring a word variable with initial value 1000

  yetAnotherVariable dd 12345   ; Declaring a double word variable with initial value 12345

  finalVariable dq 987654321   ; Declaring a quad word variable with initial value 987654321



section .text

  ; Code goes here

```



In the above example, `myVariable` is a byte variable, `anotherVariable` is a word variable, `yetAnotherVariable` is a double word variable, and `finalVariable` is a quad word variable. The initial values are assigned using the `db`, `dw`, `dd`, and `dq` directives respectively.



Once declared, variables can be accessed and modified using instructions such as `mov`, `add`, `sub`, etc. For example:



```asm

section .text

  mov al, [myVariable]   ; Move the value of myVariable into the AL register

  add word [anotherVariable], 10   ; Add 10 to the value of anotherVariable

  sub dword [yetAnotherVariable], 100   ; Subtract 100 from the value of yetAnotherVariable

  mov rax, [finalVariable]   ; Move the value of finalVariable into the RAX register

```



Remember to use the appropriate size specifier (`byte`, `word`, `dword`, `qword`) when accessing the variables to ensure correct memory operations.



Variables in NASM are typically declared in the `.data` section, which is used for static data. The `.text` section is used for executable instructions.
