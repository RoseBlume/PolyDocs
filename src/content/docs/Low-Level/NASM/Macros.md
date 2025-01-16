---
title: 'Macros'
sidebar:
  order: 13
---

 Macros in NASM Assembly



Macros in NASM assembly provide a way to define reusable code snippets. They allow you to define custom instructions or sequences of instructions that can be used multiple times throughout your assembly code.



To define a macro, you can use the `%macro` directive followed by the name of the macro and its parameters. Here's an example:



```asm

%macro add_numbers 2

  mov eax, %1

  add eax, %2

%endmacro

```



In this example, we define a macro called `add_numbers` that takes two parameters. Inside the macro, we move the first parameter into the `eax` register and then add the second parameter to it.



To use the macro, you can simply call it by its name and provide the necessary arguments. Here's an example:



```asm

add_numbers 10, 20

```



This will expand to the following code:



```asm

mov eax, 10

add eax, 20

```



You can also define macros with conditional statements, loops, and other control flow constructs. Macros can greatly simplify your code and make it more readable by abstracting away repetitive or complex operations.



Remember to use macros judiciously and consider their impact on code size and performance. While macros can be powerful, excessive use can lead to bloated code and decreased performance.



That's a brief overview of macros in NASM assembly. Experiment with different macro definitions and see how they can enhance your assembly programming experience.
