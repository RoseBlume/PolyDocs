---
title: 'Tuples'
sidebar:
  order: 6
---

 

In TypeScript, a tuple is a typed array with a fixed number of elements. The types of the elements are known, and can be different from each other. Tuples are useful when you want to represent a collection of values with a specific structure.





To define a tuple, you specify the types of its elements in an array-like syntax:



```typescript

let tuple: [string, number];

tuple = ["hello", 10]; // OK

tuple = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'.

```





You can access tuple elements using their index, just like arrays:



```typescript

console.log(tuple[0]); // Output: hello

console.log(tuple[1]); // Output: 10

```





You can perform various operations on tuples, such as pushing new elements, but be cautious as it can lead to unexpected behavior:



```typescript

tuple.push(20); // OK, but the type is not checked

console.log(tuple); // Output: ["hello", 10, 20]

```





TypeScript supports destructuring tuples, allowing you to extract values into variables:



```typescript

let [greeting, number] = tuple;

console.log(greeting); // Output: hello

console.log(number); // Output: 10

```





Tuples in TypeScript provide a way to handle arrays with fixed sizes and known types, offering more type safety and structure to your code. They are particularly useful when you need to return multiple values from a function or represent a collection of related values.


