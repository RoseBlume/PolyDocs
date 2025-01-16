---
title: 'Variables'
sidebar:
  order: 0
---

 Variables in JavaScript are fundamental for storing and manipulating data. Think of them as containers that hold values, which can be of various types such as numbers, strings, booleans, or objects. Understanding how to declare and use variables effectively is crucial for writing robust JavaScript code.





In JavaScript, you can declare variables using the `var`, `let`, or `const` keywords. Each keyword has its own characteristics and specific use cases.





The `var` keyword declares variables with function scope. Variables declared with `var` are hoisted to the top of their containing function, meaning they can be used before they are declared. However, this can sometimes lead to unexpected behavior and bugs.



```javascript

var age = 25;

console.log(age); // Output: 25

```





The `let` keyword declares variables with block scope. Unlike `var`, variables declared with `let` are not hoisted and are only accessible within the block they are defined in. This makes `let` a better choice for most use cases compared to `var`.



```javascript

let name = "John";

console.log(name); // Output: John

```





The `const` keyword declares variables that cannot be reassigned. Similar to `let`, `const` also has block scope. However, the value of a `const` variable can still be mutated if it is an object or an array.



```javascript

const PI = 3.14;

console.log(PI); // Output: 3.14

```





You can declare a variable without assigning a value to it. In this case, the variable will have the value `undefined`.



```javascript

let x;

console.log(x); // Output: undefined

```



To assign a value to a variable, use the assignment operator (`=`).



```javascript

let message = "Hello, world!";

console.log(message); // Output: Hello, world!

```





Variables can be used in expressions and combined with operators to perform calculations or manipulate data.



```javascript

let num1 = 10;

let num2 = 5;

let sum = num1 + num2;

console.log(sum); // Output: 15

```





- **Use meaningful names**: Choose descriptive names for your variables to make your code more readable and maintainable.

- **Declare variables at the top**: Declare variables at the top of their scope to avoid unexpected behavior.

- **Prefer `let` and `const` over `var`**: Use `let` and `const` instead of `var` to avoid issues with variable hoisting and scope.



By following these best practices and understanding the differences between `var`, `let`, and `const`, you can write more robust and maintainable JavaScript code.
