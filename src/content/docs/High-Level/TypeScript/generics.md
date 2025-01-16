---
title: 'Generics'
sidebar:
  order: 9
---

 

Generics provide a way to create reusable components in TypeScript. They allow you to define functions, classes, and interfaces that work with a variety of types rather than a single one. This makes your code more flexible and scalable.





Consider a function that returns the first element of an array:



```typescript

function getFirstElement(arr: any[]): any {

    return arr[0];

}

```



This function works, but it has a drawback: it loses type information. The return type is `any`, which means you lose the benefits of TypeScript's type checking. Generics solve this problem by preserving the type information.





Here's how you can rewrite the `getFirstElement` function using generics:



```typescript

function getFirstElement<T>(arr: T[]): T {

    return arr[0];

}

```



In this example, `T` is a type parameter that acts as a placeholder for the type you pass in. When you call the function, TypeScript will infer the type based on the argument you provide:



```typescript

const numbers = [1, 2, 3];

const firstNumber = getFirstElement(numbers); // Type is number



const words = ['hello', 'world'];

const firstWord = getFirstElement(words); // Type is string

```





Generics can also be used with classes. Here's an example of a generic class that represents a stack:



```typescript

class Stack<T> {

    private items: T[] = [];



    push(item: T): void {

        this.items.push(item);

    }



    pop(): T | undefined {

        return this.items.pop();

    }



    peek(): T | undefined {

        return this.items[this.items.length - 1];

    }



    isEmpty(): boolean {

        return this.items.length === 0;

    }

}

```



You can create instances of this class with different types:



```typescript

const numberStack = new Stack<number>();

numberStack.push(10);

numberStack.push(20);

console.log(numberStack.pop()); // Output: 20



const stringStack = new Stack<string>();

stringStack.push('a');

stringStack.push('b');

console.log(stringStack.pop()); // Output: 'b'

```





Interfaces can also be generic. Here's an example:



```typescript

interface Pair<T, U> {

    first: T;

    second: U;

}



const numberStringPair: Pair<number, string> = {

    first: 1,

    second: 'one'

};



const booleanArrayPair: Pair<boolean, boolean[]> = {

    first: true,

    second: [false, true]

};

```





Sometimes you want to limit the types you can use with generics. You can achieve this using constraints. Here's an example where we constrain the type to be an object with a `length` property:



```typescript

interface Lengthwise {

    length: number;

}



function logLength<T extends Lengthwise>(arg: T): void {

    console.log(arg.length);

}



logLength({ length: 10, value: 'hello' }); // Output: 10

// logLength(10); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

```





You can also provide default types for your generic parameters:



```typescript

function createArray<T = string>(length: number, value: T): T[] {

    return Array(length).fill(value);

}



const stringArray = createArray(3, 'x'); // Type is string[]

const numberArray = createArray<number>(3, 5); // Type is number[]

```





Generics are a powerful feature in TypeScript that allow you to write flexible, reusable, and type-safe code. By understanding and using generics, you can create more robust and maintainable applications.


