---
title: 'Logical Instructions'
sidebar:
  order: 7
---

 Logical instructions in NASM Assembly are used to perform bitwise operations on operands. These operations manipulate individual bits of the operands based on specific rules.





The `AND` instruction performs a bitwise AND operation between two operands. It takes the destination operand and performs a logical AND with the source operand. The result is stored in the destination operand.



Syntax: `AND destination, source`



Example:

```asm

MOV AX, 0xFF00

AND AX, 0x00FF

```



In the above example, the `AND` instruction performs a bitwise AND operation between the value in `AX` register (0xFF00) and the immediate value (0x00FF). The result is stored back in the `AX` register, resulting in `AX` containing 0x0000.





The `OR` instruction performs a bitwise OR operation between two operands. It takes the destination operand and performs a logical OR with the source operand. The result is stored in the destination operand.



Syntax: `OR destination, source`



Example:

```asm

MOV AX, 0xFF00

OR AX, 0x00FF

```



In the above example, the `OR` instruction performs a bitwise OR operation between the value in `AX` register (0xFF00) and the immediate value (0x00FF). The result is stored back in the `AX` register, resulting in `AX` containing 0xFFFF.





The `XOR` instruction performs a bitwise XOR operation between two operands. It takes the destination operand and performs a logical XOR with the source operand. The result is stored in the destination operand.



Syntax: `XOR destination, source`



Example:

```asm

MOV AX, 0xFF00

XOR AX, 0x00FF

```



In the above example, the `XOR` instruction performs a bitwise XOR operation between the value in `AX` register (0xFF00) and the immediate value (0x00FF). The result is stored back in the `AX` register, resulting in `AX` containing 0xFF00.





The `NOT` instruction performs a bitwise NOT operation on a single operand. It takes the operand and inverts each bit. The result is stored in the operand itself.



Syntax: `NOT operand`



Example:

```asm

MOV AX, 0xFF00

NOT AX

```



In the above example, the `NOT` instruction performs a bitwise NOT operation on the value in `AX` register (0xFF00). The result is stored back in the `AX` register, resulting in `AX` containing 0x00FF.





The `TEST` instruction performs a bitwise AND operation between two operands, but does not store the result. It updates the flags register based on the result.



Syntax: `TEST operand1, operand2`



Example:

```asm

MOV AX, 0xFF00

TEST AX, 0x00FF

```



In the above example, the `TEST` instruction performs a bitwise AND operation between the value in `AX` register (0xFF00) and the immediate value (0x00FF). The result is not stored, but the flags register is updated based on the result.
