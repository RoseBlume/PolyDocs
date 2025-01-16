---
title: 'Null'
sidebar:
  order: 1
---

 

In TypeScript, `null` is a special value that represents the intentional absence of any object value. It is one of the primitive values in JavaScript and TypeScript. Understanding how to work with `null` is crucial for handling cases where a variable might not have a value.





You can assign `null` to a variable explicitly:



```typescript

let value: null = null;

```



In this example, the variable `value` is explicitly set to `null`.





By default, `null` is not included in the types of variables unless you explicitly allow it. For example:



```typescript

let value: string = null; // Error: Type 'null' is not assignable to type 'string'.

```



To allow `null` as a value, you can use a union type:



```typescript

let value: string | null = null;

```



Here, `value` can be either a `string` or `null`.





When working with variables that can be `null`, you should always check for `null` before performing operations on them:



```typescript

let value: string | null = getValue();



if (value !== null) {

    console.log(value.toUpperCase());

} else {

    console.log('Value is null');

}

```



In this example, `getValue` is a function that might return `null`. We check if `value` is not `null` before calling `toUpperCase` on it.





In TypeScript, `null` and `undefined` are distinct types. `null` represents the intentional absence of any object value, while `undefined` represents a variable that has been declared but not yet assigned a value.



```typescript

let value: null = null;

let notAssigned: undefined = undefined;

```





TypeScript has a strict null checking mode which can be enabled by setting the `strictNullChecks` flag to `true` in your `tsconfig.json` file:



```json

{

  "compilerOptions": {

    "strictNullChecks": true

  }

}

```



When `strictNullChecks` is enabled, `null` and `undefined` are not assignable to any other types unless explicitly allowed.





When defining functions, you can specify that a parameter or return value can be `null`:



```typescript

function greet(name: string | null): string {

    if (name === null) {

        return 'Hello, guest!';

    } else {

        return `Hello, ${name}!`;

    }

}



console.log(greet(null)); // Output: Hello, guest!

console.log(greet('James')); // Output: Hello, James!

```



In this example, the `greet` function can accept a `string` or `null` as its parameter.





TypeScript provides a feature called optional chaining, which allows you to safely access properties on an object that might be `null` or `undefined`:



```typescript

let user: { name?: string | null } = { name: null };



console.log(user.name?.toUpperCase()); // Output: undefined

```



In this example, the `?.` operator checks if `user.name` is not `null` or `undefined` before calling `toUpperCase`.





TypeScript also supports the nullish coalescing operator (`??`), which provides a default value if the left-hand side is `null` or `undefined`:



```typescript

let value: string | null = null;

let defaultValue = 'default';



let result = value ?? defaultValue;

console.log(result); // Output: default

```



In this example, `result` will be assigned the value of `defaultValue` because `value` is `null`.





Understanding how to work with `null` in TypeScript is essential for writing robust and error-free code. By using union types, strict null checks, optional chaining, and nullish coalescing, you can handle `null` values effectively and avoid common pitfalls.


