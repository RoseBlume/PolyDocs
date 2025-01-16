---
title: 'Functions'
sidebar:
  order: 3
---

 

Functions in Rust allow you to encapsulate a block of code that can be reused and called multiple times. They are defined using the `fn` keyword followed by the function name, optional parameters, and a return type.



Here's an example of a simple function in Rust:



```rust

fn greet(name: &str) {

    println!("Hello, {}!", name);

}

```



In this example, the `greet` function takes a parameter `name` of type `&str` (a string slice) and prints a greeting message using the `println!` macro.



You can call the `greet` function like this:



```rust

greet("Alice");

```



This will output:



```

Hello, Alice!

```



Functions can also have a return type. Here's an example of a function that calculates the sum of two numbers and returns the result:



```rust

fn add(a: i32, b: i32) -> i32 {

    a + b

}

```



In this example, the `add` function takes two parameters `a` and `b` of type `i32` (32-bit signed integer) and returns the sum of `a` and `b`.



You can call the `add` function and store the result in a variable like this:



```rust

let result = add(3, 5);

println!("The sum is: {}", result);

```



This will output:



```

The sum is: 8

```



Functions in Rust can also have default parameter values, variable-length arguments, and closures. You can explore these advanced topics in the Rust documentation.



Remember to always define your functions before calling them in your code.
