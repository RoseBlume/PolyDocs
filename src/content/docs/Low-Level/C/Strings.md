---
title: 'Strings'
sidebar:
  order: 14
---

 In C, strings are represented as arrays of characters terminated by a null character (`'\0'`). This null character indicates the end of the string. Here is an example of how to declare and initialize a string in C:



```c

char greeting[] = "Hello, World!";

```



Alternatively, you can declare a string as an array of characters and initialize it character by character:



```c

char greeting[] = {'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'};

```



Both of these declarations are equivalent. The size of the array is determined by the number of characters in the string, including the null character.





The C standard library provides several functions to manipulate strings. Some of the most commonly used functions are:



- `strlen()`: Returns the length of the string (excluding the null character).

- `strcpy()`: Copies one string to another.

- `strcat()`: Concatenates two strings.

- `strcmp()`: Compares two strings.





Here is an example demonstrating the use of some of these functions:



```c



int main() {

    char str1[20] = "Hello";

    char str2[20] = "World";

    char str3[40];



    // Copy str1 into str3

    strcpy(str3, str1);

    printf("strcpy(str3, str1): %s\n", str3);



    // Concatenate str1 and str2

    strcat(str1, str2);

    printf("strcat(str1, str2): %s\n", str1);



    // Get the length of str1

    int len = strlen(str1);

    printf("strlen(str1): %d\n", len);



    // Compare str1 and str2

    int result = strcmp(str1, str2);

    if (result == 0) {

        printf("str1 and str2 are equal\n");

    } else if (result > 0) {

        printf("str1 is greater than str2\n");

    } else {

        printf("str1 is less than str2\n");

    }



    return 0;

}

```



In this example, `strcpy` copies the contents of `str1` to `str3`, `strcat` concatenates `str2` to the end of `str1`, `strlen` returns the length of `str1`, and `strcmp` compares `str1` and `str2`.



Understanding how to work with strings is fundamental in C programming, as strings are used in various applications, from simple text processing to complex data manipulation.