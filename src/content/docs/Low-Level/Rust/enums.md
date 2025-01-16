---
title: 'Enums'
sidebar:
  order: 7
---

 Enums in Rust are a powerful feature that allow you to define a type by enumerating its possible values. They are useful for representing a fixed set of options or states.



Here's an example of how to define an enum in Rust:



```rust

enum Color {

    Red,

    Green,

    Blue,

}

```



In this example, we define an enum called `Color` with three possible values: `Red`, `Green`, and `Blue`. Each value is treated as a distinct variant of the `Color` enum.



Enums can also have associated data. For example, let's say we want to represent different types of messages:



```rust

enum Message {

    Quit,

    Move { x: i32, y: i32 },

    Write(String),

    ChangeColor(Color),

}

```



In this case, the `Move` variant has associated data of type `x: i32` and `y: i32`, the `Write` variant has associated data of type `String`, and the `ChangeColor` variant has associated data of type `Color`.



Enums can be used in pattern matching to handle different cases. Here's an example:



```rust

fn process_message(message: Message) {

    match message {

        Message::Quit => println!("Received Quit message"),

        Message::Move { x, y } => println!("Received Move message: x={}, y={}", x, y),

        Message::Write(text) => println!("Received Write message: {}", text),

        Message::ChangeColor(color) => println!("Received ChangeColor message: {:?}", color),

    }

}

```



In this example, the `process_message` function takes a `Message` enum as an argument and uses pattern matching to handle each variant accordingly.



Enums in Rust provide a flexible and expressive way to define and work with different types of data. They are a fundamental concept in the language and are widely used in Rust codebases.
