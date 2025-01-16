---
title: 'Structs'
sidebar:
  order: 6
---

 

Structs in Rust are a way to define custom data types that can hold multiple values of different types. They are similar to structs in other programming languages like C or C++. 



Here's an example of how to define a struct in Rust:



```rust

struct Person {

    name: String,

    age: u32,

    is_student: bool,

}

```



In the above example, we define a struct called `Person` with three fields: `name` of type `String`, `age` of type `u32` (unsigned 32-bit integer), and `is_student` of type `bool`.



You can create an instance of the `Person` struct and access its fields like this:



```rust

let person = Person {

    name: String::from("John Doe"),

    age: 25,

    is_student: true,

};



println!("Name: {}", person.name);

println!("Age: {}", person.age);

println!("Is Student: {}", person.is_student);

```



Structs can also have methods associated with them using the `impl` keyword. Here's an example:



```rust

impl Person {

    fn introduce(&self) {

        println!("Hi, my name is {} and I'm {} years old.", self.name, self.age);

    }

}



let person = Person {

    name: String::from("John Doe"),

    age: 25,

    is_student: true,

};



person.introduce();

```



In the above example, we define an `impl` block for the `Person` struct and define a method called `introduce` that takes a reference to `self` (the instance of the struct) and prints a message introducing the person.



Structs in Rust are a powerful way to organize and manipulate data. They provide a flexible and efficient way to define custom data types with their own fields and methods.
