---
title: 'Get Started'
sidebar:
  order: 0
---

 

Before we dive into coding, you need to set up your development environment. Follow these steps to get started:



1. **Install a C Compiler**: The most common compiler for C is GCC (GNU Compiler Collection). You can install it on your system using the following commands:

    - **Linux**: `sudo apt-get install gcc`

    - **MacOS**: `brew install gcc`

    - **Windows**: Download and install MinGW from [mingw.org](http://mingw.org/)



2. **Choose an IDE or Text Editor**: While you can write C code in any text editor, using an Integrated Development Environment (IDE) can make your life easier. Some popular choices include:

    - Visual Studio Code

    - CLion

    - Code::Blocks



3. **Verify Your Installation**: Open your terminal or command prompt and type `gcc --version` to ensure that GCC is installed correctly.





Let's write our first C program. Open your text editor or IDE and create a new file named `hello.c`. Enter the following code:



```c



int main() {

     printf("Hello, World!\n");

     return 0;

}

```



This simple program prints "Hello, World!" to the console. Let's break it down:



- `#include <stdio.h>`: This line includes the Standard Input Output library, which is necessary for using the `printf` function.

- `int main() { ... }`: This is the main function where the execution of the program begins.

- `printf("Hello, World!\n");`: This line prints the text "Hello, World!" followed by a newline character.

- `return 0;`: This line indicates that the program ended successfully.





To compile and run your program, follow these steps:



1. Open your terminal or command prompt.

2. Navigate to the directory where your `hello.c` file is located.

3. Compile the program using GCC:

    ```

    gcc hello.c -o hello

    ```

    This command compiles `hello.c` and creates an executable named `hello`.



4. Run the executable:

    - **Linux/MacOS**: `./hello`

    - **Windows**: `hello`



You should see the output:

```

Hello, World!

```



Congratulations! You've just written, compiled, and executed your first C program.





Now that you've successfully run your first program, let's explore some basic concepts in C:





In C, you need to declare variables before using them. Here are some common data types:



- `int`: Integer type

- `float`: Floating-point type

- `char`: Character type



Example:

```c

int age = 25;

float height = 5.9;

char initial = 'J';

```





C provides several control structures for decision-making and looping:



- **if-else**:

  ```c

  if (age > 18) {

        printf("You are an adult.\n");

  } else {

        printf("You are a minor.\n");

  }

  ```



- **for loop**:

  ```c

  for (int i = 0; i < 5; i++) {

        printf("i = %d\n", i);

  }

  ```



- **while loop**:

  ```c

  int count = 0;

  while (count < 5) {

        printf("count = %d\n", count);

        count++;

  }

  ```





Functions allow you to break your code into reusable blocks. Here's an example of a simple function:



```c



void greet() {

     printf("Hello from a function!\n");

}



int main() {

     greet();

     return 0;

}

```



In this example, the `greet` function is defined to print a message, and it is called from the `main` function.



With these basics, you're well on your way to becoming proficient in C programming. Keep practicing and exploring more advanced topics as you progress.