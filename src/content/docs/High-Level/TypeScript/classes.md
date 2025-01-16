---
title: 'Classes'
sidebar:
  order: 11
---

 Classes in TypeScript are a blueprint for creating objects with specific properties and methods. They encapsulate data and behavior, making it easier to manage and maintain code.





To define a class in TypeScript, use the `class` keyword followed by the class name. Here's an example:



```typescript

class Person {

    name: string;

    age: number;



    constructor(name: string, age: number) {

        this.name = name;

        this.age = age;

    }



    greet() {

        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

    }

}

```



In this example, we define a `Person` class with two properties: `name` and `age`. The constructor initializes these properties, and the `greet` method prints a greeting message.





To create an instance of a class, use the `new` keyword:



```typescript

const person1 = new Person('Alice', 30);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

```





TypeScript supports inheritance, allowing you to create a new class that extends an existing class. Use the `extends` keyword to achieve this:



```typescript

class Employee extends Person {

    jobTitle: string;



    constructor(name: string, age: number, jobTitle: string) {

        super(name, age);

        this.jobTitle = jobTitle;

    }



    describeJob() {

        console.log(`I am a ${this.jobTitle}.`);

    }

}



const employee1 = new Employee('Bob', 25, 'Software Developer');

employee1.greet(); // Output: Hello, my name is Bob and I am 25 years old.

employee1.describeJob(); // Output: I am a Software Developer.

```



In this example, the `Employee` class extends the `Person` class, adding a new property `jobTitle` and a method `describeJob`.





TypeScript provides access modifiers to control the visibility of class members. The three main access modifiers are `public`, `private`, and `protected`.



- `public`: Members are accessible from anywhere.

- `private`: Members are only accessible within the class.

- `protected`: Members are accessible within the class and its subclasses.



Here's an example:



```typescript

class Car {

    public make: string;

    private model: string;

    protected year: number;



    constructor(make: string, model: string, year: number) {

        this.make = make;

        this.model = model;

        this.year = year;

    }



    public displayMake() {

        console.log(`Make: ${this.make}`);

    }



    private displayModel() {

        console.log(`Model: ${this.model}`);

    }



    protected displayYear() {

        console.log(`Year: ${this.year}`);

    }

}



const car1 = new Car('Toyota', 'Corolla', 2020);

car1.displayMake(); // Output: Make: Toyota

// car1.displayModel(); // Error: Property 'displayModel' is private and only accessible within class 'Car'.

// car1.displayYear(); // Error: Property 'displayYear' is protected and only accessible within class 'Car' and its subclasses.

```





Getters and setters allow you to define methods that get and set the value of a property. Use the `get` and `set` keywords:



```typescript

class Rectangle {

    private _width: number;

    private _height: number;



    constructor(width: number, height: number) {

        this._width = width;

        this._height = height;

    }



    get width(): number {

        return this._width;

    }



    set width(value: number) {

        if (value <= 0) {

            throw new Error('Width must be positive.');

        }

        this._width = value;

    }



    get height(): number {

        return this._height;

    }



    set height(value: number) {

        if (value <= 0) {

            throw new Error('Height must be positive.');

        }

        this._height = value;

    }



    get area(): number {

        return this._width * this._height;

    }

}



const rect = new Rectangle(10, 20);

console.log(rect.area); // Output: 200

rect.width = 15;

console.log(rect.area); // Output: 300

```



In this example, the `Rectangle` class has private properties `_width` and `_height`, with getters and setters to access and modify these properties. The `area` getter calculates the area of the rectangle.





Static members belong to the class itself rather than to instances of the class. Use the `static` keyword to define static members:



```typescript

class MathUtils {

    static PI: number = 3.14;



    static calculateCircumference(radius: number): number {

        return 2 * MathUtils.PI * radius;

    }

}



console.log(MathUtils.PI); // Output: 3.14

console.log(MathUtils.calculateCircumference(10)); // Output: 62.8

```



In this example, `PI` and `calculateCircumference` are static members of the `MathUtils` class.





Abstract classes are base classes that cannot be instantiated directly. They are meant to be extended by other classes. Use the `abstract` keyword to define an abstract class and its methods:



```typescript

abstract class Animal {

    abstract makeSound(): void;



    move(): void {

        console.log('Moving...');

    }

}



class Dog extends Animal {

    makeSound(): void {

        console.log('Bark');

    }

}



const dog = new Dog();

dog.makeSound(); // Output: Bark

dog.move(); // Output: Moving...

```



In this example, `Animal` is an abstract class with an abstract method `makeSound`. The `Dog` class extends `Animal` and provides an implementation for `makeSound`.





Classes in TypeScript provide a powerful way to create and manage objects, encapsulating data and behavior. By using features like inheritance, access modifiers, getters and setters, static members, and abstract classes, you can write clean, maintainable, and scalable code.