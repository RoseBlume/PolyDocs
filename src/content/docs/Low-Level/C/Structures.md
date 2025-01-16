---
title: 'Structures'
sidebar:
  order: 16
---

 

In C, a structure is a user-defined data type that allows you to combine data items of different kinds. Structures are used to represent a record. Suppose you want to keep track of books in a library. You might want to track the following attributes about each book:



- Title

- Author

- Subject

- Book ID



To define a structure, you use the `struct` keyword. Here is an example of how you can define a structure for a book:



```c

struct Book {

    char title[50];

    char author[50];

    char subject[100];

    int book_id;

};

```



This structure definition creates a new data type called `struct Book`. You can now create variables of this type:



```c

struct Book book1;

struct Book book2;

```



You can access the members of a structure using the dot operator (`.`). Here is an example of how you can assign values to the members of the `book1` variable:



```c

strcpy(book1.title, "C Programming");

strcpy(book1.author, "Dennis Ritchie");

strcpy(book1.subject, "Programming Language");

book1.book_id = 6495407;

```



Similarly, you can access and print the values of the members:



```c

printf("Book 1 title: %s\n", book1.title);

printf("Book 1 author: %s\n", book1.author);

printf("Book 1 subject: %s\n", book1.subject);

printf("Book 1 book_id: %d\n", book1.book_id);

```



Structures can also be nested, meaning you can have a structure within another structure. Here is an example:



```c

struct Library {

    struct Book book;

    char location[100];

};

```



In this example, `struct Library` contains a `struct Book` and an additional member `location`.



Using structures in C allows you to create complex data types that model real-world entities more accurately. They are essential for organizing data and making your programs more readable and maintainable.
