---
title: 'Variables'
sidebar:
  order: 2
---

 

In Rust, variables are declared using the `let` keyword. By default, variables are immutable, meaning their values cannot be changed once assigned. However, you can make a variable mutable by using the `mut` keyword.



Here's an example of declaring an immutable variable:



```rust

let x = 5;

```



And here's an example of declaring a mutable variable:



```rust

let mut y = 10;

```



With mutable variables, you can change their values later in the code:



```rust

y = 20;

```



It's important to note that Rust encourages immutability by default, as it helps prevent bugs and enables better concurrency. Therefore, it's recommended to use immutable variables whenever possible and only resort to mutability when necessary.



By using immutable variables, Rust ensures that you can reason about your code more easily and avoid unexpected changes to values. This helps in writing safer and more reliable programs.
