---
title: 'Alias Interfaces'
sidebar:
  order: 13
---

 

In TypeScript, alias interfaces are a powerful way to define custom types that can be reused throughout your code. They allow you to create more readable and maintainable code by giving a name to a specific shape of data.





To define an alias interface, you use the `type` keyword followed by the name of the alias and the type definition. Here is an example:



```typescript

type Point = {

    x: number;

    y: number;

};

```



In this example, `Point` is an alias for an object type with two properties: `x` and `y`, both of which are numbers.





Once you have defined an alias interface, you can use it to type variables, function parameters, and return values. For example:



```typescript

function printPoint(point: Point): void {

    console.log(`x: ${point.x}, y: ${point.y}`);

}



const myPoint: Point = { x: 10, y: 20 };

printPoint(myPoint);

```



In this example, the `printPoint` function expects a parameter of type `Point`, and we create a variable `myPoint` of type `Point` to pass to the function.





You can also extend alias interfaces using intersection types. This allows you to combine multiple types into one. For example:



```typescript

type NamedPoint = Point & {

    name: string;

};

```



Here, `NamedPoint` is an alias for an object type that includes all properties of `Point` plus an additional `name` property.





Alias interfaces in TypeScript provide a flexible way to define and reuse custom types. They help improve code readability and maintainability by allowing you to give meaningful names to complex type definitions.


