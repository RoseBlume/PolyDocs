---
title: 'Enums'
sidebar:
  order: 10
---

 

Enums (short for enumerations) are a feature in TypeScript that allows you to define a set of named constants. They make it easier to document intent or create a set of distinct cases. TypeScript provides both numeric and string-based enums.





Numeric enums are the default in TypeScript. They are auto-incremented, starting from 0 if not specified otherwise.



```typescript

enum Direction {

    Up,

    Down,

    Left,

    Right

}



let direction: Direction = Direction.Up;

console.log(direction); // Output: 0

```



You can also manually set the values of the enum members:



```typescript

enum Direction {

    Up = 1,

    Down,

    Left,

    Right

}



console.log(Direction.Up); // Output: 1

console.log(Direction.Down); // Output: 2

```





String enums are similar to numeric enums, but their values are strings instead of numbers.



```typescript

enum Direction {

    Up = "UP",

    Down = "DOWN",

    Left = "LEFT",

    Right = "RIGHT"

}



let direction: Direction = Direction.Up;

console.log(direction); // Output: "UP"

```



String enums are useful when the meaning of the value is more important than the numeric value.





TypeScript also allows enums to contain both string and numeric values. However, this is not a common practice and should be used sparingly.



```typescript

enum BooleanLikeHeterogeneousEnum {

    No = 0,

    Yes = "YES"

}



console.log(BooleanLikeHeterogeneousEnum.No); // Output: 0

console.log(BooleanLikeHeterogeneousEnum.Yes); // Output: "YES"

```





Enum members can be either constant or computed. Constant members are evaluated at compile time, while computed members are evaluated at runtime.



```typescript

enum FileAccess {

    None,

    Read = 1 << 1,

    Write = 1 << 2,

    ReadWrite = Read | Write,

    G = "123".length

}



console.log(FileAccess.ReadWrite); // Output: 6

console.log(FileAccess.G); // Output: 3

```





Enum members can be used as types. This can be useful for type-checking and ensuring that only valid enum values are used.



```typescript

enum ShapeKind {

    Circle,

    Square

}



interface Circle {

    kind: ShapeKind.Circle;

    radius: number;

}



interface Square {

    kind: ShapeKind.Square;

    sideLength: number;

}



let circle: Circle = {

    kind: ShapeKind.Circle,

    radius: 10

};



let square: Square = {

    kind: ShapeKind.Square,

    sideLength: 5

};

```





TypeScript enums support reverse mapping. This means you can get the name of an enum member from its value.



```typescript

enum Enum {

    A

}



let a = Enum.A;

let nameOfA = Enum[a]; // "A"



console.log(nameOfA); // Output: "A"

```





Const enums are a special kind of enum that are completely removed during compilation. They are used to avoid the overhead of extra generated code and additional indirection when accessing enum values.



```typescript

const enum Direction {

    Up,

    Down,

    Left,

    Right

}



let directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];

```



In the compiled JavaScript, the above code will be transformed to:



```javascript

var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

```





Ambient enums are used to describe the shape of enums that are defined elsewhere. This is useful when working with existing JavaScript codebases or libraries.



```typescript

declare enum Enum {

    A = 1,

    B,

    C = 2

}

```





Enums in TypeScript provide a way to define a set of named constants, making your code more readable and maintainable. They can be numeric, string-based, or even a mix of both. Understanding how to use enums effectively can help you write more robust TypeScript code.


