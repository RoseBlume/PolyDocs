---
title: 'Conditions'
sidebar:
  order: 8
---

 Conditions in NASM assembly refer to the various conditional jump instructions that allow the program to branch to different parts of the code based on certain conditions. These conditions are typically evaluated by comparing the values of registers or memory locations.



Here are some examples of conditional jump instructions in NASM assembly:



1. Jump if Equal (JE): This instruction jumps to a specified label if the previous comparison resulted in equality. For example:

```asm

cmp eax, ebx

je equal_label

```



2. Jump if Not Equal (JNE): This instruction jumps to a specified label if the previous comparison resulted in inequality. For example:

```asm

cmp eax, ebx

jne not_equal_label

```



3. Jump if Greater (JG): This instruction jumps to a specified label if the previous comparison resulted in the first operand being greater than the second operand. For example:

```asm

cmp eax, ebx

jg greater_label

```



4. Jump if Less (JL): This instruction jumps to a specified label if the previous comparison resulted in the first operand being less than the second operand. For example:

```asm

cmp eax, ebx

jl less_label

```



5. Jump if Zero (JZ): This instruction jumps to a specified label if the previous operation resulted in a zero value. For example:

```asm

test eax, eax

jz zero_label

```



These are just a few examples of the conditional jump instructions available in NASM assembly. They provide a powerful way to control the flow of execution based on different conditions.
