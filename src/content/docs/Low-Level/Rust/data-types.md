---
title: 'Data Types'
sidebar:
  order: 1
---

 In Rust, there are several built-in data types that you can use to define variables. Here are some of the commonly used data types:





Rust provides a variety of integer types, which differ in size and signedness. Here are a few examples:



- `i8`: Signed 8-bit integer (-128 to 127)

- `u16`: Unsigned 16-bit integer (0 to 65,535)

- `i32`: Signed 32-bit integer (-2,147,483,648 to 2,147,483,647)



Example:



```rust

let age: u8 = 25;

let count: i32 = -10;

```





Rust supports two floating-point types: `f32` and `f64`. The `f32` type is a single-precision float, while `f64` is a double-precision float.



Example:



```rust

let pi: f32 = 3.14;

let gravity: f64 = 9.8;

```





The boolean type in Rust is `bool`, which can have two possible values: `true` or `false`.



Example:



```rust

let is_rust_fun: bool = true;

let is_python_fun: bool = false;

```





The character type in Rust is `char`, which represents a Unicode scalar value.



Example:



```rust

let heart_emoji: char = '❤';

let smiley_emoji: char = '😊';

```





Rust has a built-in string type called `String`, which is a growable, UTF-8 encoded string.



Example:



```rust

let greeting: String = String::from("Hello, world!");

let name: String = "Alice".to_string();

```



These are just a few examples of the data types available in Rust. You can explore more data types and their usage in the Rust documentation.
