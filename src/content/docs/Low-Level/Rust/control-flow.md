---
title: 'Control Flow'
sidebar:
  order: 4
---

 Control flow in Rust allows you to dictate the order in which statements and expressions are executed. It includes conditional statements, loops, and branching.



Conditional statements:

Rust provides the `if`, `else if`, and `else` keywords for conditional execution. Here's an example:



```rust

let number = 7;



if number < 5 {

    println!("Number is less than 5");

} else if number == 5 {

    println!("Number is equal to 5");

} else {

    println!("Number is greater than 5");

}

```



Loops:

Rust offers different types of loops, such as `loop`, `while`, and `for`. Here's an example of a `for` loop:



```rust

let numbers = [1, 2, 3, 4, 5];



for number in numbers.iter() {

    println!("Number: {}", number);

}

```



Branching:

Rust provides the `match` keyword for pattern matching and branching. Here's an example:



```rust

let fruit = "apple";



match fruit {

    "apple" => println!("It's an apple"),

    "banana" => println!("It's a banana"),

    _ => println!("It's something else"),

}

```



These are just a few examples of control flow in Rust. You can explore more advanced concepts like `if let` and `while let` for more specific scenarios.
