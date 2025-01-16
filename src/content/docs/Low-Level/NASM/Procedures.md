---
title: 'Procedures'
sidebar:
  order: 11
---

 

In NASM assembly, procedures are used to encapsulate a block of code that can be called from multiple locations in a program. They provide a way to organize and reuse code, making assembly programming more modular.



To define a procedure, you can use the `PROC` directive followed by the procedure name. Here's an example:



```asm

PROC myProcedure

  ; Procedure code goes here

  ret

ENDP

```



Within a procedure, you can include any valid assembly instructions. The `ret` instruction is used to return from the procedure.



To call a procedure, you can use the `CALL` instruction followed by the procedure name. Here's an example:



```asm

CALL myProcedure

```



You can also pass arguments to a procedure by pushing them onto the stack before calling the procedure. The procedure can then access the arguments using the `ebp` register. Here's an example:



```asm

PROC myProcedure

  push ebp

  mov ebp, esp



  ; Access arguments using ebp



  mov esp, ebp

  pop ebp

  ret

ENDP

```



Procedures can also have a return value. The return value is typically stored in a register, such as `eax`. Here's an example:



```asm

PROC myProcedure

  ; Procedure code goes here



  mov eax, 42 ; Set return value to 42



  ret

ENDP

```



That's a basic overview of procedures in NASM assembly. They are a powerful tool for organizing and reusing code in assembly programs.
