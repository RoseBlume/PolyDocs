---
title: 'Operators'
sidebar:
  order: 5
---

 In C programming, operators are special symbols that perform operations on variables and values. They are categorized based on the type of operation they perform. Here are some of the most commonly used operators in C:



Arithmetic operators are used to perform basic mathematical operations such as addition, subtraction, multiplication, and division.



- `+` : Addition

- `-` : Subtraction

- `*` : Multiplication

- `/` : Division

- `%` : Modulus (remainder of division)



Example:

```c

int a = 10, b = 5;

int sum = a + b; // sum = 15

int difference = a - b; // difference = 5

int product = a * b; // product = 50

int quotient = a / b; // quotient = 2

int remainder = a % b; // remainder = 0

```



Relational operators are used to compare two values. They return either true (1) or false (0).



- `==` : Equal to

- `!=` : Not equal to

- `>` : Greater than

- `<` : Less than

- `>=` : Greater than or equal to

- `<=` : Less than or equal to



Example:

```c

int a = 10, b = 5;

bool result;



result = (a == b); // result = 0 (false)

result = (a != b); // result = 1 (true)

result = (a > b); // result = 1 (true)

result = (a < b); // result = 0 (false)

result = (a >= b); // result = 1 (true)

result = (a <= b); // result = 0 (false)

```



Logical operators are used to combine multiple conditions.



- `&&` : Logical AND

- `||` : Logical OR

- `!` : Logical NOT



Example:

```c

bool a = true, b = false;

bool result;



result = (a && b); // result = false

result = (a || b); // result = true

result = !a; // result = false

```



Assignment operators are used to assign values to variables.



- `=` : Simple assignment

- `+=` : Add and assign

- `-=` : Subtract and assign

- `*=` : Multiply and assign

- `/=` : Divide and assign

- `%=` : Modulus and assign



Example:

```c

int a = 10;



a += 5; // a = 15

a -= 3; // a = 12

a *= 2; // a = 24

a /= 4; // a = 6

a %= 3; // a = 0

```



These operators are used to increase or decrease the value of a variable by one.



- `++` : Increment

- `--` : Decrement



Example:

```c

int a = 10;



a++; // a = 11

a--; // a = 10

```



Bitwise operators are used to perform operations on individual bits of a number.



- `&` : Bitwise AND

- `|` : Bitwise OR

- `^` : Bitwise XOR

- `~` : Bitwise NOT

- `<<` : Left shift

- `>>` : Right shift



Example:

```c

int a = 5, b = 3;

int result;



result = a & b; // result = 1

result = a | b; // result = 7

result = a ^ b; // result = 6

result = ~a; // result = -6

result = a << 1; // result = 10

result = a >> 1; // result = 2

```



Understanding these operators is crucial for performing various operations in C programming. They form the foundation for more complex expressions and logic in your code.