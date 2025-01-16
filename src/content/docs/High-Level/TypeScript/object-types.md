---
title: 'Object Types'
sidebar:
  order: 7
---

 

In TypeScript, object types are used to describe the shape of an object. This includes the properties and their types that an object can have. Understanding object types is crucial for defining complex data structures and ensuring type safety in your TypeScript code.





To define an object type in TypeScript, you can use an interface or a type alias. Both approaches allow you to specify the properties and their types.





An interface is a way to define a contract for an object. Here's an example:



```typescript

interface Person {

    name: string;

    age: number;

    isEmployed: boolean;

}

```



In this example, the `Person` interface describes an object with three properties: `name` (a string), `age` (a number), and `isEmployed` (a boolean).





A type alias can also be used to define an object type. Here's the same example using a type alias:



```typescript

type Person = {

    name: string;

    age: number;

    isEmployed: boolean;

};

```



Both interfaces and type aliases are interchangeable in many cases, but interfaces are generally preferred for defining object types.





Sometimes, not all properties of an object are required. You can make a property optional by adding a question mark (`?`) after the property name:



```typescript

interface Person {

    name: string;

    age: number;

    isEmployed?: boolean;

}

```



In this example, the `isEmployed` property is optional, meaning an object of type `Person` may or may not have this property.





If you want to make a property read-only, you can use the `readonly` modifier. This ensures that the property cannot be changed after the object is created:



```typescript

interface Person {

    readonly name: string;

    age: number;

    isEmployed?: boolean;

}

```



Here, the `name` property is read-only and cannot be modified once it is set.





Index signatures allow you to define properties with dynamic keys. This is useful when you don't know all the property names in advance:



```typescript

interface StringDictionary {

    [key: string]: string;

}

```



In this example, the `StringDictionary` interface describes an object where all property keys are strings, and all property values are also strings.





Interfaces can be extended to create new interfaces with additional properties. This is useful for building complex types from simpler ones:



```typescript

interface Person {

    name: string;

    age: number;

}



interface Employee extends Person {

    employeeId: number;

}

```



In this example, the `Employee` interface extends the `Person` interface, adding an `employeeId` property.





Type aliases can be combined using intersection types to create new types with all properties from multiple types:



```typescript

type Person = {

    name: string;

    age: number;

};



type Employee = Person & {

    employeeId: number;

};

```



Here, the `Employee` type is an intersection of the `Person` type and an object with an `employeeId` property.





Object types in TypeScript provide a powerful way to define the shape of objects and ensure type safety. By using interfaces, type aliases, optional properties, readonly properties, index signatures, extending interfaces, and intersection types, you can create complex and flexible data structures that enhance the reliability of your TypeScript code.


