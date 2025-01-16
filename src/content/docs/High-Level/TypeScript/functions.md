---
title: 'Functions'
sidebar:
  order: 4
---

 

Functions are one of the fundamental building blocks in TypeScript. They allow you to encapsulate code into reusable blocks. In this chapter, we will explore how to define and use functions in TypeScript.





In TypeScript, you can define a function using the `function` keyword followed by the function name, parameters, and the function body. Here is an example:



```typescript

function greet(name: string): string {

    return `Hello, ${name}!`;

}

```



In this example, the `greet` function takes a single parameter `name` of type `string` and returns a `string`.





TypeScript allows you to define the types of the parameters and the return type of a function. This helps in catching errors at compile time. Here is an example of a function with typed parameters and return type:



```typescript

function add(a: number, b: number): number {

    return a + b;

}

```



In this example, the `add` function takes two parameters `a` and `b`, both of type `number`, and returns a `number`.





TypeScript supports optional and default parameters. Optional parameters can be omitted when calling the function, and default parameters provide a default value if none is provided.





You can make a parameter optional by appending a question mark (`?`) to its name:



```typescript

function greet(name: string, greeting?: string): string {

    if (greeting) {

        return `${greeting}, ${name}!`;

    } else {

        return `Hello, ${name}!`;

    }

}

```



In this example, the `greeting` parameter is optional.





You can provide a default value for a parameter by using the assignment operator (`=`):



```typescript

function greet(name: string, greeting: string = "Hello"): string {

    return `${greeting}, ${name}!`;

}

```



In this example, the `greeting` parameter has a default value of `"Hello"`.





Rest parameters allow you to pass an arbitrary number of arguments to a function. You can define a rest parameter by prefixing the parameter name with three dots (`...`):



```typescript

function sum(...numbers: number[]): number {

    return numbers.reduce((acc, curr) => acc + curr, 0);

}

```



In this example, the `sum` function takes any number of `number` arguments and returns their sum.





TypeScript allows you to define multiple signatures for a function, known as function overloads. This is useful when a function can be called with different argument types or numbers of arguments.



```typescript

function callMe(x: string): string;

function callMe(x: number): number;

function callMe(x: any): any {

    if (typeof x === "string") {

        return `You called with a string: ${x}`;

    } else if (typeof x === "number") {

        return `You called with a number: ${x}`;

    }

}

```



In this example, the `callMe` function has two overloads: one that takes a `string` and one that takes a `number`.





Arrow functions provide a shorter syntax for writing functions. They are especially useful for writing short functions. Here is an example:



```typescript

const add = (a: number, b: number): number => a + b;

```



In this example, the `add` function is defined using arrow function syntax.





Functions are a powerful feature in TypeScript that allow you to write reusable and maintainable code. By using typed parameters, return types, optional and default parameters, rest parameters, function overloads, and arrow functions, you can write robust and flexible functions in TypeScript.


