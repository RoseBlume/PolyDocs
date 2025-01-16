---
title: 'Arrays'
sidebar:
  order: 5
---

 

Arrays are a fundamental part of TypeScript, allowing you to store multiple values in a single variable. They are particularly useful when you need to work with a collection of data.





In TypeScript, you can declare an array in two ways:



1. Using square brackets (`[]`):

    ```typescript

    let numbers: number[] = [1, 2, 3, 4, 5];

    ```



2. Using the `Array` generic type:

    ```typescript

    let fruits: Array<string> = ['apple', 'banana', 'cherry'];

    ```





You can access elements in an array using their index, which starts at 0:

```typescript

console.log(numbers[0]); // Output: 1

console.log(fruits[1]); // Output: banana

```





TypeScript arrays come with a variety of built-in methods to manipulate and interact with the data:



- `push()`: Adds one or more elements to the end of an array.

    ```typescript

    numbers.push(6);

    ```



- `pop()`: Removes the last element from an array.

    ```typescript

    numbers.pop();

    ```



- `map()`: Creates a new array with the results of calling a provided function on every element in the array.

    ```typescript

    let doubled = numbers.map(num => num * 2);

    ```



- `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.

    ```typescript

    let evenNumbers = numbers.filter(num => num % 2 === 0);

    ```





You can iterate over arrays using loops such as `for`, `for...of`, and `forEach`:



- Using `for` loop:

    ```typescript

    for (let i = 0; i < numbers.length; i++) {

        console.log(numbers[i]);

    }

    ```



- Using `for...of` loop:

    ```typescript

    for (let num of numbers) {

        console.log(num);

    }

    ```



- Using `forEach` method:

    ```typescript

    numbers.forEach(num => console.log(num));

    ```





Arrays are a versatile and essential feature in TypeScript, providing a powerful way to handle collections of data. By understanding how to declare, access, and manipulate arrays, you can effectively manage and utilize data in your TypeScript applications.
