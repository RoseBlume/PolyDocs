---
title: 'Casting'
sidebar:
  order: 12
---

 

In TypeScript, casting is a way to tell the compiler to treat a variable as a different type. This can be useful when you know more about the type of a variable than the compiler does. There are two main ways to cast in TypeScript: using the `as` keyword and using angle-bracket syntax.





The `as` keyword is the preferred way to cast in TypeScript. Here is an example:



```typescript

let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;

```



In this example, `someValue` is of type `unknown`, but we know it's a string. We use `as string` to tell the compiler to treat `someValue` as a string, allowing us to access the `length` property.





Angle-bracket syntax is another way to cast in TypeScript, but it's not recommended for use in JSX files because it conflicts with JSX syntax. Here is an example:



```typescript

let someValue: unknown = "this is a string";

let strLength: number = (<string>someValue).length;

```



This example achieves the same result as the previous one, but uses angle brackets instead of the `as` keyword.





Sometimes you might have a variable that can be `null` or `undefined`, but you know for certain that it is not. In such cases, you can use the non-null assertion operator (`!`) to tell the compiler that the variable is not `null` or `undefined`:



```typescript

let someValue: string | null = "this is a string";

let strLength: number = someValue!.length;

```



In this example, `someValue` is of type `string | null`, but we use `!` to assert that `someValue` is not `null`.





Casting in TypeScript is a powerful tool that allows you to tell the compiler more about the types of your variables. Use the `as` keyword for most cases, and be cautious with the non-null assertion operator to avoid runtime errors.


