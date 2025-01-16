---
title: 'Simple Types'
sidebar:
  order: 0
---

 

TypeScript is a statically typed superset of JavaScript that adds optional static types. This means you can specify the types of variables, function parameters, and function return values. This helps catch errors early and makes your code more predictable and easier to understand.







The most basic data type is the simple true/false value, which is called `boolean` in TypeScript.



```typescript

let isDone: boolean = false;

```





As in JavaScript, all numbers in TypeScript are floating point values. The `number` type covers both integers and floating-point numbers.



```typescript

let decimal: number = 6;

let hex: number = 0xf00d;

let binary: number = 0b1010;

let octal: number = 0o744;

```





Another fundamental part of creating programs is working with textual data. The `string` type is used to represent textual data.



```typescript

let color: string = "blue";

color = 'red';

```



You can also use template strings, which can span multiple lines and have embedded expressions.



```typescript

let fullName: string = `James Smith`;

let age: number = 37;

let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

```





TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways.



```typescript

let list: number[] = [1, 2, 3];

```



Alternatively, you can use a generic array type.



```typescript

let list: Array<number> = [1, 2, 3];

```





Tuple types allow you to express an array with a fixed number of elements whose types are known but need not be the same.



```typescript

let x: [string, number];

x = ["hello", 10]; // OK

// x = [10, "hello"]; // Error

```





A helpful addition to the standard set of data types from JavaScript is the `enum`. Like languages such as C#, an enum is a way of giving more friendly names to sets of numeric values.



```typescript

enum Color {

    Red,

    Green,

    Blue,

}

let c: Color = Color.Green;

```



By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members.



```typescript

enum Color {

    Red = 1,

    Green,

    Blue,

}

let c: Color = Color.Green;

```



Or, you can assign all the values in the enum.



```typescript

enum Color {

    Red = 1,

    Green = 2,

    Blue = 4,

}

let c: Color = Color.Green;

```





Sometimes, you might need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, such as user inputs or third-party libraries. In these cases, you want to opt-out of type-checking and let the values pass through compile-time checks. To do so, use the `any` type.



```typescript

let notSure: any = 4;

notSure = "maybe a string instead";

notSure = false; // okay, definitely a boolean

```





The `void` type is used to represent the absence of any type. It is commonly used as the return type of functions that do not return a value.



```typescript

function warnUser(): void {

    console.log("This is my warning message");

}

```





TypeScript has two special types, `null` and `undefined`, that have the values `null` and `undefined` respectively. By default, `null` and `undefined` are subtypes of all other types. This means you can assign `null` and `undefined` to something like a `number`.



```typescript

let u: undefined = undefined;

let n: null = null;

```





The `never` type represents the type of values that never occur. For instance, `never` is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.



```typescript

function error(message: string): never {

    throw new Error(message);

}



function fail() {

    return error("Something failed");

}



function infiniteLoop(): never {

    while (true) {}

}

```





The `object` type represents non-primitive types, i.e., anything that is not `number`, `string`, `boolean`, `symbol`, `null`, or `undefined`.



```typescript

declare function create(o: object | null): void;



create({ prop: 0 }); // OK

create(null); // OK



// create(42); // Error

// create("string"); // Error

// create(false); // Error

// create(undefined); // Error

```



These are the basic types in TypeScript. Understanding these types is crucial for writing robust and type-safe code. In the next chapter, we will explore more advanced types and how to use them effectively in your TypeScript programs.
