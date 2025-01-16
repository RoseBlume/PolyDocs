---
title: 'Ownership'
sidebar:
  order: 5
---

 

In Rust, ownership is a unique feature that helps ensure memory safety and prevent data races. It is a key concept that sets Rust apart from other programming languages.





1. Each value in Rust has a variable that is its owner.

2. There can only be one owner at a time.

3. When the owner goes out of scope, the value is dropped.





To allow multiple references to a value without taking ownership, Rust introduces the concept of borrowing. Borrowing can be done through references, which are pointers to a value.



```rust

fn main() {

    let s = String::from("Hello, world!");



    // Borrowing the value using a reference

    let len = calculate_length(&s);



    println!("The length of '{}' is {}.", s, len);

}



fn calculate_length(s: &String) -> usize {

    s.len()

}

```





Ownership can be transferred using the `move` keyword. This is useful when you want to transfer ownership of a value to a different scope.



```rust

fn main() {

    let s1 = String::from("Hello");

    let s2 = take_ownership(s1);



    println!("{}", s2);

}



fn take_ownership(s: String) -> String {

    s

}

```





When a value is passed to a function, ownership is transferred unless the value is borrowed using references.





Understanding ownership is crucial in Rust programming. It allows for safe and efficient memory management, preventing common issues like dangling pointers and data races.
