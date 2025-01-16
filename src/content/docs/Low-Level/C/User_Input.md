---
title: 'User Input'
sidebar:
  order: 19
---

 In C, handling user input is a fundamental aspect of creating interactive programs. The standard library provides several functions to read input from the user, with `scanf` and `gets` being among the most commonly used.





The `scanf` function reads formatted input from the standard input (stdin). It is often used to read various types of data, such as integers, floating-point numbers, and strings. Here is an example of how to use `scanf` to read an integer from the user:



```c



int main() {

    int number;

    printf("Enter an integer: ");

    scanf("%d", &number);

    printf("You entered: %d\n", number);

    return 0;

}

```



In this example, the `scanf` function reads an integer from the user and stores it in the variable `number`. The format specifier `%d` indicates that the input should be interpreted as an integer.





The `gets` function reads a line of text from the standard input and stores it in a string. However, `gets` is considered unsafe because it does not perform bounds checking, which can lead to buffer overflows. Here is an example of using `gets`:



```c



int main() {

    char str[100];

    printf("Enter a string: ");

    gets(str);

    printf("You entered: %s\n", str);

    return 0;

}

```



In this example, the `gets` function reads a line of text from the user and stores it in the array `str`. However, it is important to note that `gets` has been deprecated in the C11 standard due to its security risks.





A safer alternative to `gets` is the `fgets` function, which allows you to specify the maximum number of characters to read, thus preventing buffer overflows. Here is an example of using `fgets`:



```c



int main() {

    char str[100];

    printf("Enter a string: ");

    fgets(str, sizeof(str), stdin);

    printf("You entered: %s\n", str);

    return 0;

}

```



In this example, the `fgets` function reads a line of text from the user and stores it in the array `str`. The second argument specifies the maximum number of characters to read, including the null terminator.



By using these functions, you can effectively handle user input in your C programs. Always remember to choose the appropriate function based on the type of input and the security considerations of your application.