---
title: 'Keyof'
sidebar:
  order: 8
---

 

In TypeScript, the `keyof` operator is a powerful tool that allows you to create a type that represents all the keys of an object type. This can be particularly useful when you want to enforce certain constraints or when you need to work with dynamic property names.





The `keyof` operator takes an object type and produces a union of its keys. Here's a simple example:



```typescript

interface Person {

    name: string;

    age: number;

    location: string;

}



type PersonKeys = keyof Person; // "name" | "age" | "location"

```



In this example, `PersonKeys` is a union type of the keys of the `Person` interface. This means that `PersonKeys` can be either `"name"`, `"age"`, or `"location"`.





The `keyof` operator becomes even more powerful when used with generics. This allows you to create functions and types that are more flexible and reusable. Consider the following example:



```typescript

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {

    return obj[key];

}



const person: Person = {

    name: "Alice",

    age: 30,

    location: "Wonderland"

};



const name = getProperty(person, "name"); // Alice

const age = getProperty(person, "age"); // 30

```



In this example, the `getProperty` function takes an object `obj` of type `T` and a key `key` of type `K`, which extends the keys of `T`. The function returns the value of the property corresponding to the key. This ensures type safety, as the key must be a valid property of the object.







One practical application of `keyof` is to enforce that only valid keys are used in certain contexts. For example, you might want to ensure that only valid keys are used when updating an object:



```typescript

function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {

    obj[key] = value;

}



updateProperty(person, "name", "Bob"); // Valid

updateProperty(person, "age", 35); // Valid

// updateProperty(person, "invalidKey", "value"); // Error: Argument of type '"invalidKey"' is not assignable to parameter of type '"name" | "age" | "location"'.

```





Another useful application is mapping object types. You can create a new type based on the keys of an existing type:



```typescript

type ReadonlyPerson = {

    readonly [K in keyof Person]: Person[K];

};



const readonlyPerson: ReadonlyPerson = {

    name: "Alice",

    age: 30,

    location: "Wonderland"

};



// readonlyPerson.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

```



In this example, `ReadonlyPerson` is a mapped type that makes all properties of `Person` read-only.





The `keyof` operator is a versatile feature in TypeScript that allows you to work with object keys in a type-safe manner. Whether you're enforcing valid keys, creating flexible functions, or mapping object types, `keyof` can help you write more robust and maintainable code. By understanding and leveraging `keyof`, you can take full advantage of TypeScript's powerful type system.


