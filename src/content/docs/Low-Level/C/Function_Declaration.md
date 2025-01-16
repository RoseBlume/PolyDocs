---
title: 'Function Declaration'
sidebar:
  order: 0
---

 In C programming, a function declaration tells the compiler about a function's name, return type, and parameters. It is also known as a function prototype. The actual body of the function can be defined separately.





```c

return_type function_name(parameter_list);

```



- `return_type`: The data type of the value the function returns. If the function does not return a value, use `void`.

- `function_name`: The name of the function. Function names follow the same naming rules as variables.

- `parameter_list`: A comma-separated list of parameters that the function takes. Each parameter is defined by a data type and a name. If the function does not take any parameters, use `void`.





Here is an example of a function declaration and its corresponding definition:



```c



// Function declaration

int add(int a, int b);



int main() {

    int result = add(5, 3);

    printf("The sum is %d\n", result);

    return 0;

}



// Function definition

int add(int a, int b) {

    return a + b;

}

```



In this example, the function `add` is declared at the beginning. The function takes two integer parameters and returns their sum. The actual definition of the function is provided after the `main` function.





- Function declarations are usually placed at the beginning of the file or in a header file.

- The compiler needs to know the function's signature before it is called in the code.

- Function definitions can be placed anywhere in the code, but it is a common practice to place them after the `main` function or in separate source files.



By understanding function declarations, you can write modular and reusable code in C.