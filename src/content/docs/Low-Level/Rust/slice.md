---
title: 'Slice'
sidebar:
  order: 8
---

 The slice type in Rust allows you to reference a contiguous sequence of elements in a collection. It is represented by the `&[T]` type, where `T` is the type of the elements in the slice.



Slices are commonly used to work with arrays, vectors, and other collections. They provide a flexible and efficient way to access and manipulate subsets of data without needing to copy the entire collection.



Here are a few examples of using slices in Rust:



1. Creating a slice from an array:

```rust

let numbers = [1, 2, 3, 4, 5];

let slice = &numbers[1..4]; // creates a slice containing elements 2, 3, and 4

```



2. Passing a slice as a function parameter:

```rust

fn sum(numbers: &[i32]) -> i32 {

    let mut total = 0;

    for &num in numbers {

        total += num;

    }

    total

}



let numbers = [1, 2, 3, 4, 5];

let result = sum(&numbers); // pass a slice of the array to the function

```



3. Modifying a slice:

```rust

let mut numbers = [1, 2, 3, 4, 5];

let slice = &mut numbers[1..4]; // creates a mutable slice

slice[0] = 10; // modifies the second element of the slice



assert_eq!(numbers, [1, 10, 3, 4, 5]); // original array is modified

```



Slices provide a convenient way to work with subsets of data in Rust, allowing you to avoid unnecessary copying and improve performance.
