---
title: 'Addressing Modes'
sidebar:
  order: 3
---

 

1. Immediate addressing: The operand is a constant value. It is specified directly in the instruction. For example:

  ```asm

  mov eax, 42

  ```



2. Register addressing: The operand is stored in a register. For example:

  ```asm

  mov eax, ebx

  ```



3. Direct addressing: The operand is located at a specific memory address. For example:

  ```asm

  mov eax, [0x12345678]

  ```



4. Indirect addressing: The operand is stored in memory, and its address is stored in a register. For example:

  ```asm

  mov eax, [ebx]

  ```



5. Base addressing: The operand is calculated by adding a displacement to the value in a base register. For example:

  ```asm

  mov eax, [ebp-4]

  ```



6. Indexed addressing: The operand is calculated by adding a displacement and an index register. For example:

  ```asm

  mov eax, [ebx+ecx*4]

  ```



These are just a few examples of addressing modes in NASM assembly. They provide flexibility in accessing data and instructions, allowing you to write efficient and concise code.