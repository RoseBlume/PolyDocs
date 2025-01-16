---
title: 'Conditions'
sidebar:
  order: 2
---

 Conditions in JavaScript allow you to control the flow of your code based on certain criteria being met. They are essential for creating dynamic and interactive applications. In this chapter, we will delve into the different types of conditions and how to use them effectively.





The `if` statement is the most fundamental type of condition in JavaScript. It enables you to execute a block of code only if a specified condition evaluates to true. The syntax is straightforward:



```javascript

if (condition) {

    // code to be executed if the condition is true

}

```



**Example:**



Consider a scenario where you want to check if a person is an adult:



```javascript

let age = 18;

if (age >= 18) {

    console.log("You are an adult.");

}

```





The `if-else` statement builds upon the `if` statement by providing an alternative block of code to execute if the condition is false. This is how it looks:



```javascript

if (condition) {

    // code to be executed if the condition is true

} else {

    // code to be executed if the condition is false

}

```



**Example:**



Let's modify our previous example to handle both adults and minors:



```javascript

let age = 16;

if (age >= 18) {

    console.log("You are an adult.");

} else {

    console.log("You are a minor.");

}

```





The `else-if` statement allows you to check multiple conditions and execute different blocks of code based on the results. It can be used in conjunction with `if` and `if-else` statements. The syntax is as follows:



```javascript

if (condition1) {

    // code to be executed if condition1 is true

} else if (condition2) {

    // code to be executed if condition2 is true

} else {

    // code to be executed if all conditions are false

}

```



**Example:**



Imagine you are grading a test and want to assign a letter grade based on the score:



```javascript

let score = 85;

if (score >= 90) {

    console.log("Grade: A");

} else if (score >= 80) {

    console.log("Grade: B");

} else if (score >= 70) {

    console.log("Grade: C");

} else {

    console.log("Grade: F");

}

```





The `switch` statement offers an alternative way to handle multiple conditions. It allows you to specify different cases and execute code based on the value of an expression. Here is the syntax:



```javascript

switch (expression) {

    case value1:

        // code to be executed if expression matches value1

        break;

    case value2:

        // code to be executed if expression matches value2

        break;

    default:

        // code to be executed if expression doesn't match any case

}

```



**Example:**



Let's use a `switch` statement to print the name of the day based on a numeric value:



```javascript

let day = 3;

switch (day) {

    case 1:

        console.log("Monday");

        break;

    case 2:

        console.log("Tuesday");

        break;

    case 3:

        console.log("Wednesday");

        break;

    default:

        console.log("Another day");

}

```





The ternary operator is a concise way to write simple conditions in JavaScript. It allows you to assign a value to a variable based on a condition. The syntax is:



```javascript

variable = (condition) ? value1 : value2;

```



**Example:**



Here's how you can use the ternary operator to determine if someone is an adult or a minor:



```javascript

let age = 20;

let status = (age >= 18) ? "adult" : "minor";

console.log(status); // Output: adult

```





Logical operators are often used to combine multiple conditions. The most common logical operators are `&&` (AND), `||` (OR), and `!` (NOT).



**Example:**



Consider a scenario where you want to check if a person is allowed entry based on their age and whether they have an ID:



```javascript

let age = 25;

let hasID = true;



if (age >= 18 && hasID) {

    console.log("Entry allowed.");

} else {

    console.log("Entry denied.");

}

```



By mastering these conditional statements, you will be able to create more powerful and flexible JavaScript code. Use them wisely to control the flow of your applications and handle different scenarios effectively.
