---
title: 'Booleans'
sidebar:
  order: 6
---

 In C, the boolean data type is not natively supported as it is in some other programming languages. Instead, C uses integers to represent boolean values. By convention, the integer value `0` is considered `false`, and any non-zero value is considered `true`.



To work with boolean values more conveniently, the C99 standard introduced the `_Bool` type and the `stdbool.h` header file, which defines the `bool` type as well as the `true` and `false` macros.





Here's an example of how to use the `_Bool` type and the `stdbool.h` header file:



```c



int main() {

    bool isTrue = true;

    bool isFalse = false;



    if (isTrue) {

        printf("isTrue is true\n");

    }



    if (!isFalse) {

        printf("isFalse is false\n");

    }



    return 0;

}

```



In this example, we include the `stdbool.h` header file, which allows us to use the `bool` type and the `true` and `false` macros. We then declare two boolean variables, `isTrue` and `isFalse`, and use them in conditional statements.





Boolean expressions in C are expressions that evaluate to either `true` or `false`. These expressions are commonly used in control flow statements such as `if`, `while`, and `for` loops.



Here are some examples of boolean expressions:



```c

int a = 5;

int b = 10;



if (a < b) {

    printf("a is less than b\n");

}



if (a == 5) {

    printf("a is equal to 5\n");

}



if (b != 5) {

    printf("b is not equal to 5\n");

}

```



In these examples, the expressions `a < b`, `a == 5`, and `b != 5` are boolean expressions that evaluate to `true` or `false`.





C provides several logical operators that can be used to combine or modify boolean expressions:



- `&&` (logical AND): Evaluates to `true` if both operands are `true`.

- `||` (logical OR): Evaluates to `true` if at least one operand is `true`.

- `!` (logical NOT): Evaluates to `true` if the operand is `false`.



Here are some examples of using logical operators:



```c

int x = 1;

int y = 0;



if (x && y) {

    printf("Both x and y are true\n");

} else {

    printf("Either x or y is false\n");

}



if (x || y) {

    printf("At least one of x or y is true\n");

}



if (!y) {

    printf("y is false\n");

}

```



In these examples, we use the logical operators `&&`, `||`, and `!` to combine and modify boolean expressions.



Understanding how to work with boolean values and expressions is essential for controlling the flow of your C programs. By using the `_Bool` type and the `stdbool.h` header file, you can write more readable and maintainable code.