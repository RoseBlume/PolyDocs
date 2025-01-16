---
title: 'Objects'
sidebar:
  order: 7
---

 Objects in JavaScript are a fundamental data type that allows you to store and manipulate collections of key-value pairs. They are versatile and widely used in JavaScript programming.



To create an object, you can use either the object literal syntax or the Object constructor. Let's start with the object literal syntax, which is the most common and straightforward way to create an object:



```javascript

const person = {

    name: 'John',

    age: 30,

    profession: 'Developer'

};

```



In this example, `person` is an object with three properties: `name`, `age`, and `profession`. Each property has a corresponding value, making it easy to store related data together.



Alternatively, you can create an object using the `Object` constructor. This approach is less common but can be useful in certain scenarios:



```javascript

const person = new Object();

person.name = 'John';

person.age = 30;

person.profession = 'Developer';

```



Both methods achieve the same result, but the object literal syntax is generally preferred for its simplicity and readability.



Once you have an object, you can access its properties using either dot notation or bracket notation. Dot notation is more concise and commonly used:



```javascript

console.log(person.name); // Output: John

```



Bracket notation is useful when property names are dynamic or not valid identifiers:



```javascript

console.log(person['age']); // Output: 30

```



JavaScript objects are dynamic, meaning you can add or modify properties at any time. For example, you can add a new property or update an existing one:



```javascript

person.location = 'New York';

person.age = 31;

```



In this example, we added a new property `location` and updated the `age` property.



If you need to remove a property from an object, you can use the `delete` operator:



```javascript

delete person.profession;

```



This will remove the `profession` property from the `person` object.



Objects can also have methods, which are functions stored as object properties. Methods allow objects to perform actions and can be defined using function expressions:



```javascript

const calculator = {

    add: function(a, b) {

        return a + b;

    },

    subtract: function(a, b) {

        return a - b;

    }

};



console.log(calculator.add(5, 3)); // Output: 8

console.log(calculator.subtract(10, 4)); // Output: 6

```



In this example, `calculator` is an object with two methods: `add` and `subtract`. These methods can be invoked using dot notation.



Objects can contain other objects, allowing you to create complex data structures. For example, you can represent a company with nested objects for its address:



```javascript

const company = {

    name: 'Tech Corp',

    address: {

        street: '123 Main St',

        city: 'Techville',

        state: 'CA'

    }

};



console.log(company.address.city); // Output: Techville

```



This structure allows you to organize related data in a hierarchical manner.



To iterate over an object's properties, you can use a `for...in` loop. This loop will log each property name and value in the `person` object:



```javascript

for (let key in person) {

    console.log(key + ': ' + person[key]);

}

```



JavaScript provides several built-in methods for working with objects, such as `Object.keys()`, `Object.values()`, and `Object.entries()`. These methods are useful for extracting and manipulating object data:



```javascript

console.log(Object.keys(person)); // Output: ['name', 'age', 'location']

console.log(Object.values(person)); // Output: ['John', 31, 'New York']

console.log(Object.entries(person)); // Output: [['name', 'John'], ['age', 31], ['location', 'New York']]

```



Objects in JavaScript are powerful and flexible, allowing you to represent complex data structures and behaviors. Understanding how to work with objects is essential for JavaScript developers. By mastering object creation, property manipulation, methods, and iteration, you can effectively manage and utilize data in your JavaScript applications.