---
title: 'File Handling'
sidebar:
  order: 18
---

 File handling in C is a crucial aspect of programming that allows you to create, read, write, and manipulate files. This chapter will guide you through the basics of file handling in C.





To open a file in C, you use the `fopen` function, which is defined in the `stdio.h` library. The `fopen` function takes two arguments: the name of the file and the mode in which you want to open the file. The mode can be one of the following:



- `"r"`: Open a file for reading. The file must exist.

- `"w"`: Create an empty file for writing. If a file with the same name already exists, its content is erased.

- `"a"`: Append to a file. Writing operations append data at the end of the file. The file is created if it does not exist.

- `"r+"`: Open a file for both reading and writing. The file must exist.

- `"w+"`: Create an empty file for both reading and writing. If a file with the same name already exists, its content is erased.

- `"a+"`: Open a file for both reading and appending. The file is created if it does not exist.



Here is an example of how to open a file for reading:



```c

FILE *filePointer;

filePointer = fopen("example.txt", "r");



if (filePointer == NULL) {

    printf("Error opening file.\n");

    return 1;

}

```





After you are done with a file, it is important to close it using the `fclose` function. This ensures that all data is properly written to the file and resources are freed. Here is how you close a file:



```c

fclose(filePointer);

```





To read data from a file, you can use functions like `fgetc`, `fgets`, or `fread`. Here is an example using `fgets` to read a line from a file:



```c

char buffer[100];

if (fgets(buffer, 100, filePointer) != NULL) {

    printf("Read line: %s", buffer);

}

```





To write data to a file, you can use functions like `fputc`, `fputs`, or `fwrite`. Here is an example using `fputs` to write a string to a file:



```c

fputs("Hello, World!\n", filePointer);

```





Here is a complete example program that demonstrates opening a file, writing to it, reading from it, and then closing it:



```c



int main() {

    FILE *filePointer;



    // Open file for writing

    filePointer = fopen("example.txt", "w");

    if (filePointer == NULL) {

        printf("Error opening file for writing.\n");

        return 1;

    }

    fputs("Hello, World!\n", filePointer);

    fclose(filePointer);



    // Open file for reading

    filePointer = fopen("example.txt", "r");

    if (filePointer == NULL) {

        printf("Error opening file for reading.\n");

        return 1;

    }

    char buffer[100];

    if (fgets(buffer, 100, filePointer) != NULL) {

        printf("Read line: %s", buffer);

    }

    fclose(filePointer);



    return 0;

}

```



This example program creates a file named `example.txt`, writes "Hello, World!" to it, reads the content back, and prints it to the console.