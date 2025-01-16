---
title: 'Inheritance'
sidebar:
  order: 2
---

 Inheritance in PHP allows a class to inherit properties and methods from another class. This promotes code reusability and allows for the creation of more specialized classes based on existing ones.



To create a class that inherits from another class, we use the `extends` keyword. For example:



```php

class Animal {

  protected $name;



  public function __construct($name) {

    $this->name = $name;

  }



  public function eat() {

    echo $this->name . " is eating.";

  }

}



class Dog extends Animal {

  public function bark() {

    echo $this->name . " is barking.";

  }

}

```



In the example above, the `Dog` class extends the `Animal` class. This means that the `Dog` class inherits the `name` property and the `eat()` method from the `Animal` class. Additionally, the `Dog` class defines its own `bark()` method.



To create an instance of the `Dog` class and call its methods, we can do the following:



```php

$dog = new Dog("Buddy");

$dog->eat(); // Output: Buddy is eating.

$dog->bark(); // Output: Buddy is barking.

```



In this example, we create a new instance of the `Dog` class with the name "Buddy". We then call the `eat()` and `bark()` methods, which are inherited from the `Animal` class and defined in the `Dog` class, respectively.



This is a basic example of inheritance in PHP. Inheritance allows for the creation of more specialized classes by reusing code from existing classes, making our code more modular and maintainable.
