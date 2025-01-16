---
title: 'Variables'
sidebar:
  order: 2
---

 

In C programming, variables are used to store data that can be manipulated by the program. A variable is essentially a name given to a memory location, and it can hold different types of data such as integers, floating-point numbers, characters, and more.





Before you can use a variable in C, you must declare it. Declaration involves specifying the type of the variable and its name. Here is the syntax for declaring a variable:



```c

type variable_name;

```



For example, to declare an integer variable named `age`, you would write:



```c

int age;

```





You can also initialize a variable at the time of declaration by assigning it a value. Here is the syntax for initializing a variable:



```c

type variable_name = value;

```



For example, to declare and initialize an integer variable named `age` with a value of 25, you would write:



```c

int age = 25;

```





C supports several basic data types, including:



- `int`: Used to store integers.

- `float`: Used to store floating-point numbers.

- `double`: Used to store double-precision floating-point numbers.

- `char`: Used to store single characters.



Here are some examples of variable declarations for different types:



```c

int count;

float temperature;

double distance;

char grade;

```





The scope of a variable determines where it can be accessed within the code. In C, variables can have different scopes:



- **Local Variables**: Declared inside a function or block and can only be accessed within that function or block.

- **Global Variables**: Declared outside of all functions and can be accessed by any function in the program.

- **Static Variables**: Retain their value between function calls and are only accessible within the file they are declared in.





Here is a simple example program that demonstrates variable declaration, initialization, and usage:



```c



int main() {

    int age = 25; // Declare and initialize an integer variable

    float height = 5.9; // Declare and initialize a float variable

    char grade = 'A'; // Declare and initialize a char variable



    printf("Age: %d\n", age);

    printf("Height: %.1f\n", height);

    printf("Grade: %c\n", grade);



    return 0;

}

```



In this program, we declare and initialize three variables: `age`, `height`, and `grade`. We then use the `printf` function to print their values to the console.



Understanding variables is fundamental to programming in C, as they are used to store and manipulate data throughout your programs.
