---
title: 'Classes'
sidebar:
  order: 15
---

 

Classes are a fundamental aspect of object-oriented programming in JavaScript. They offer a structured way to define blueprints for creating objects that share common properties and methods, enhancing code organization and reusability.





To define a class in JavaScript, you use the `class` keyword followed by the class name. Consider the following example:



```javascript

class Person {

    constructor(name, age) {

        this.name = name;

        this.age = age;

    }



    sayHello() {

        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);

    }

}

```



In this example, we define a `Person` class with a constructor method that accepts `name` and `age` as parameters. The constructor initializes these values to the object's properties. Additionally, the `sayHello` method logs a greeting message to the console.





To create an instance of a class, you use the `new` keyword followed by the class name and any required arguments. Here's how you can instantiate a `Person` object:



```javascript

const john = new Person('John Doe', 25);

john.sayHello(); // Output: Hello, my name is John Doe and I'm 25 years old.

```





Classes can also have static methods and properties that are shared among all instances. These are accessed using the class name itself. For example:



```javascript

class Circle {

    static PI = 3.14159;



    static calculateArea(radius) {

        return Circle.PI * radius * radius;

    }

}



console.log(Circle.calculateArea(5)); // Output: 78.53975

```



In this example, the `Circle` class has a static property `PI` and a static method `calculateArea`. The static method can be invoked directly on the class without needing an instance.





JavaScript classes support inheritance, allowing you to create subclasses that inherit properties and methods from a parent class. This is achieved using the `extends` keyword. Consider the following example:



```javascript

class Animal {

    constructor(name) {

        this.name = name;

    }



    speak() {

        console.log(`${this.name} makes a sound.`);

    }

}



class Dog extends Animal {

    speak() {

        console.log(`${this.name} barks.`);

    }

}



const dog = new Dog('Buddy');

dog.speak(); // Output: Buddy barks.

```



In this example, the `Animal` class has a `speak` method. The `Dog` class extends `Animal` and overrides the `speak` method to provide a specific implementation.





JavaScript supports private fields and methods, which are not accessible outside the class. Private fields are declared using the `#` prefix. For example:



```javascript

class Car {



    startEngine() {

        this.#engineStatus = 'on';

        console.log('Engine started.');

    }



    getEngineStatus() {

        return this.#engineStatus;

    }

}



const car = new Car();

car.startEngine(); // Output: Engine started.

console.log(car.getEngineStatus()); // Output: on

```



In this example, the `#engineStatus` field is private and can only be accessed within the `Car` class.





Getters and setters allow you to define methods that are accessed like properties. They are useful for controlling access to an object's properties. For example:



```javascript

class Rectangle {

    constructor(width, height) {

        this.width = width;

        this.height = height;

    }



    get area() {

        return this.width * this.height;

    }



    set area(value) {

        throw new Error('Area is a read-only property.');

    }

}



const rect = new Rectangle(10, 5);

console.log(rect.area); // Output: 50

```



In this example, the `area` getter calculates the rectangle's area, and the setter throws an error if someone tries to set the area directly.



Classes in JavaScript provide a powerful way to organize and structure your code, making it easier to manage objects and their behaviors.