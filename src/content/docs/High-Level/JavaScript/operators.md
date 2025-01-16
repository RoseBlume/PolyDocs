---
title: 'Operators'
sidebar:
  order: 1
---

 Operators in JavaScript are fundamental tools that allow developers to perform various operations on values or variables. They are essential for manipulating data and performing calculations, making them a cornerstone of any JavaScript program.



JavaScript offers a wide range of operators, each serving a specific purpose. Let's explore these operators in detail:



Arithmetic operators are used to perform mathematical calculations. Here are the primary arithmetic operators in JavaScript:



- **Addition (+)**: This operator adds two operands. For example, `a + b` will yield the sum of `a` and `b`.

- **Subtraction (-)**: This operator subtracts the second operand from the first. For instance, `a - b` will give the difference between `a` and `b`.

- **Multiplication (*)**: This operator multiplies two operands. For example, `a * b` results in the product of `a` and `b`.

- **Division (/)**: This operator divides the first operand by the second. For instance, `a / b` will yield the quotient of `a` divided by `b`.

- **Modulus (%)**: This operator returns the remainder of the division of two operands. For example, `a % b` gives the remainder when `a` is divided by `b`.

- **Exponentiation (**)**: This operator raises the first operand to the power of the second operand. For instance, `a ** b` results in `a` raised to the power of `b`.



Assignment operators are used to assign values to variables. Here are some common assignment operators:



- **Assignment (=)**: This operator assigns the value of the right operand to the left operand. For example, `a = b` assigns the value of `b` to `a`.

- **Addition Assignment (+=)**: This operator adds the right operand to the left operand and assigns the result to the left operand. For instance, `a += b` is equivalent to `a = a + b`.

- **Subtraction Assignment (-=)**: This operator subtracts the right operand from the left operand and assigns the result to the left operand. For example, `a -= b` is equivalent to `a = a - b`.

- **Multiplication Assignment (*=)**: This operator multiplies the left operand by the right operand and assigns the result to the left operand. For instance, `a *= b` is equivalent to `a = a * b`.

- **Division Assignment (/=)**: This operator divides the left operand by the right operand and assigns the result to the left operand. For example, `a /= b` is equivalent to `a = a / b`.

- **Modulus Assignment (%=)**: This operator takes the modulus using two operands and assigns the result to the left operand. For instance, `a %= b` is equivalent to `a = a % b`.



Comparison operators compare two values and return a boolean result. Here are some common comparison operators:



- **Equality (==)**: This operator checks if two values are equal. For example, `a == b` returns `true` if `a` and `b` are equal.

- **Strict Equality (===)**: This operator checks if two values are equal and of the same type. For instance, `a === b` returns `true` if `a` and `b` are equal and of the same type.

- **Inequality (!=)**: This operator checks if two values are not equal. For example, `a != b` returns `true` if `a` and `b` are not equal.

- **Strict Inequality (!==)**: This operator checks if two values are not equal or not of the same type. For instance, `a !== b` returns `true` if `a` and `b` are not equal or not of the same type.

- **Greater Than (>)**: This operator checks if the left operand is greater than the right operand. For example, `a > b` returns `true` if `a` is greater than `b`.

- **Greater Than or Equal (>=)**: This operator checks if the left operand is greater than or equal to the right operand. For instance, `a >= b` returns `true` if `a` is greater than or equal to `b`.

- **Less Than (<)**: This operator checks if the left operand is less than the right operand. For example, `a < b` returns `true` if `a` is less than `b`.

- **Less Than or Equal (<=)**: This operator checks if the left operand is less than or equal to the right operand. For instance, `a <= b` returns `true` if `a` is less than or equal to `b`.



Logical operators are used to combine or negate boolean values. Here are the primary logical operators in JavaScript:



- **Logical AND (&&)**: This operator returns `true` if both operands are true. For example, `a && b` returns `true` if both `a` and `b` are true.

- **Logical OR (||)**: This operator returns `true` if at least one of the operands is true. For instance, `a || b` returns `true` if either `a` or `b` is true.

- **Logical NOT (!)**: This operator returns `true` if the operand is false. For example, `!a` returns `true` if `a` is false.



Bitwise operators perform operations on binary representations of numbers. Here are some common bitwise operators:



- **Bitwise AND (&)**: This operator performs a bitwise AND operation. For example, `a & b` performs a bitwise AND on `a` and `b`.

- **Bitwise OR (|)**: This operator performs a bitwise OR operation. For instance, `a | b` performs a bitwise OR on `a` and `b`.

- **Bitwise XOR (^)**: This operator performs a bitwise XOR operation. For example, `a ^ b` performs a bitwise XOR on `a` and `b`.

- **Bitwise NOT (~)**: This operator performs a bitwise NOT operation. For instance, `~a` inverts the bits of `a`.

- **Left Shift (<<)**: This operator shifts the bits of the first operand to the left by the number of positions specified by the second operand. For example, `a << b` shifts the bits of `a` to the left by `b` positions.

- **Right Shift (>>)**: This operator shifts the bits of the first operand to the right by the number of positions specified by the second operand. For instance, `a >> b` shifts the bits of `a` to the right by `b` positions.

- **Unsigned Right Shift (>>>)**: This operator shifts the bits of the first operand to the right by the number of positions specified by the second operand, filling the leftmost bits with zeros. For example, `a >>> b` shifts the bits of `a` to the right by `b` positions, filling the leftmost bits with zeros.



Unary operators operate on a single operand. Here are some common unary operators:



- **Unary Plus (+)**: This operator converts the operand to a number. For example, `+a` converts `a` to a number.

- **Unary Minus (-)**: This operator converts the operand to a number and negates it. For instance, `-a` converts `a` to a number and negates it.

- **Increment (++)**: This operator increases the operand by one. For example, `a++` or `++a` increases `a` by one.

- **Decrement (--)**: This operator decreases the operand by one. For instance, `a--` or `--a` decreases `a` by one.

- **Logical NOT (!)**: This operator negates the boolean value of the operand. For example, `!a` returns `true` if `a` is false.

- **Typeof**: This operator returns the type of the operand. For instance, `typeof a` returns the type of `a`.

- **Delete**: This operator deletes a property from an object. For example, `delete obj.prop` deletes the property `prop` from the object `obj`.

- **Void**: This operator evaluates an expression and returns `undefined`. For instance, `void expression` evaluates `expression` and returns `undefined`.



The ternary operator is a shorthand for an if-else statement. It takes three operands and returns a value based on a condition. The syntax is `condition ? expression1 : expression2`. For example, `a > b ? 'a is greater' : 'b is greater or equal'` returns `'a is greater'` if `a` is greater than `b`, otherwise it returns `'b is greater or equal'`.



These are just a few examples of the operators available in JavaScript. Understanding and using operators effectively is crucial for writing efficient and concise code.
