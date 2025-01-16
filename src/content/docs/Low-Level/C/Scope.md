---
title: 'Scope'
sidebar:
  order: 11
---

 

In the C programming language, scope refers to the visibility and lifetime of variables and functions within a program. Understanding scope is crucial for writing efficient and error-free code. There are several types of scope in C:





Variables declared inside a block (enclosed in `{}`) have block scope. They are only accessible within that block and are destroyed once the block is exited.



```c



int main() {

    int x = 10; // x has block scope within main

    {

        int y = 20; // y has block scope within this inner block

        printf("x = %d, y = %d\n", x, y);

    }

    // y is not accessible here

    return 0;

}

```





Labels (used with `goto` statements) have function scope. They are visible throughout the function in which they are defined.



```c



void example() {

    goto label;

    printf("This will be skipped.\n");

label:

    printf("This will be printed.\n");

}



int main() {

    example();

    return 0;

}

```





Variables and functions declared outside of any function have file scope. They are accessible from the point of declaration to the end of the file.



```c



int globalVar = 100; // globalVar has file scope



void printGlobalVar() {

    printf("globalVar = %d\n", globalVar);

}



int main() {

    printGlobalVar();

    return 0;

}

```





In function prototypes, the parameter names have function prototype scope. They are only visible within the prototype itself and do not affect the actual function definition.



```c



void example(int x, int y); // x and y have function prototype scope



void example(int a, int b) {

    printf("a = %d, b = %d\n", a, b);

}



int main() {

    example(5, 10);

    return 0;

}

```



Understanding these different types of scope helps in managing variable lifetimes and avoiding naming conflicts in your C programs.
