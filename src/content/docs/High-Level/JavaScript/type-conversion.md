---
title: 'Type Conversion'
sidebar:
  order: 13
---

 

Type conversion in JavaScript is the process of converting one data type to another. JavaScript provides several built-in functions and operators to facilitate this. Understanding how type conversion works is crucial for writing robust and error-free code.







To convert a value to a string, you can use the `String()` function or concatenate the value with an empty string (`''`).



```javascript

let num = 42;

let str = String(num);

console.log(typeof str); // Output: string

```



Alternatively:



```javascript

let num = 42;

let str = num + '';

console.log(typeof str); // Output: string

```





To convert a value to a number, use the `Number()` function or the unary plus operator (`+`).



```javascript

let str = '42';

let num = Number(str);

console.log(typeof num); // Output: number

```



Alternatively:



```javascript

let str = '42';

let num = +str;

console.log(typeof num); // Output: number

```





JavaScript's `Boolean()` function converts a value to a boolean. The following values are considered falsy and convert to `false`: `0`, `NaN`, `null`, `undefined`, `false`, and an empty string (`''`). All other values are truthy and convert to `true`.



```javascript

let num = 0;

let bool = Boolean(num);

console.log(bool); // Output: false

```



Alternatively:



```javascript

let num = 0;

let bool = !!num;

console.log(bool); // Output: false

```





JavaScript also performs implicit type conversion in certain situations. For example, using the `+` operator with a string and a number converts the number to a string and concatenates them.



```javascript

let num = 42;

let str = 'The answer is ' + num;

console.log(str); // Output: The answer is 42

```



Implicit type conversion can sometimes lead to unexpected results:



```javascript

console.log('5' - 3); // Output: 2

console.log('5' + 3); // Output: 53

```



In the first example, the `-` operator converts the string `'5'` to a number before performing the subtraction. In the second example, the `+` operator concatenates the string `'5'` with the number `3`.







JavaScript provides `parseInt()` and `parseFloat()` functions to convert strings to integers and floating-point numbers, respectively.



```javascript

let str = '42.5';

let intNum = parseInt(str);

let floatNum = parseFloat(str);

console.log(intNum); // Output: 42

console.log(floatNum); // Output: 42.5

```





To convert a date to a number (timestamp), use the `getTime()` method or the unary plus operator (`+`).



```javascript

let date = new Date();

let timestamp = date.getTime();

console.log(timestamp); // Output: 1633024800000 (example)



let timestamp2 = +date;

console.log(timestamp2); // Output: 1633024800000 (example)

```





JavaScript provides `JSON.stringify()` to convert an object to a JSON string and `JSON.parse()` to convert a JSON string back to an object.



```javascript

let obj = { name: 'John', age: 30 };

let jsonString = JSON.stringify(obj);

console.log(jsonString); // Output: '{"name":"John","age":30}'



let parsedObj = JSON.parse(jsonString);

console.log(parsedObj); // Output: { name: 'John', age: 30 }

```



Understanding these type conversion methods will help you handle data more effectively in your JavaScript programs.
