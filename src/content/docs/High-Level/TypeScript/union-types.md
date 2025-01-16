---
title: 'Union Types'
sidebar:
  order: 2
---

 Union types in TypeScript allow you to define a variable that can hold more than one type. This is particularly useful when a value can be of different types at different times. To define a union type, you use the pipe (`|`) symbol between the types.





Let's start with a simple example. Suppose you have a variable that can either be a string or a number:



```typescript

let value: string | number;

value = "Hello";

value = 42;

```



In this example, the `value` variable can hold either a string or a number. This flexibility can be very useful in scenarios where a variable's type can change.





Union types can also be used in function parameters. For instance, you might have a function that accepts either a string or a number:



```typescript

function printValue(value: string | number) {

    console.log(value);

}



printValue("Hello");

printValue(42);

```



Here, the `printValue` function can accept either a string or a number, making it more versatile.





You can also create arrays that hold multiple types using union types. For example:



```typescript

let values: (string | number)[] = ["Hello", 42, "World"];

```



In this case, the `values` array can contain both strings and numbers.





When working with union types, you often need to determine the type of a variable at runtime. TypeScript provides type guards to help with this. A type guard is a function that returns a boolean indicating whether a variable is of a specific type. Here's an example:



```typescript

function isString(value: any): value is string {

    return typeof value === "string";

}



function processValue(value: string | number) {

    if (isString(value)) {

        console.log("String value:", value.toUpperCase());

    } else {

        console.log("Number value:", value.toFixed(2));

    }

}



processValue("Hello");

processValue(42);

```



In this example, the `isString` function is a type guard that checks if a value is a string. The `processValue` function uses this type guard to handle strings and numbers differently.





Union types are a powerful feature in TypeScript that allow you to write more flexible and expressive code. By using union types, you can define variables, function parameters, and arrays that can hold multiple types. Additionally, type guards help you work with union types safely by determining the type of a variable at runtime.



Practice using union types in your TypeScript code to become more comfortable with this feature. As you gain experience, you'll find many situations where union types can simplify your code and make it more robust.