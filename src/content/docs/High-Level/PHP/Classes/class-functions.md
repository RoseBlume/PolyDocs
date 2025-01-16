---
title: 'Class Functions'
sidebar:
  order: 0
---

 



In PHP, class functions are methods that are defined within a class and can be called on objects of that class. They allow you to encapsulate functionality and behavior within a class.



To define a class function in PHP, you use the `function` keyword followed by the function name, parentheses for any parameters, and curly braces to enclose the function body. Here's an example:



```php

class MyClass {

    public function myFunction($param1, $param2) {

        // Function body

    }

}

```



In the example above, `myFunction` is a class function that takes two parameters, `$param1` and `$param2`. You can access these parameters within the function body using the `$` symbol.



To call a class function on an object, you use the object name followed by the `->` operator and the function name, like this:



```php

$obj = new MyClass();

$obj->myFunction($value1, $value2);

```



In the example above, we create an object of the `MyClass` class and call the `myFunction` function on that object, passing in the values `$value1` and `$value2` as arguments.



Class functions can also have access modifiers like `public`, `private`, or `protected`, which control the visibility of the function. Public functions can be accessed from outside the class, while private and protected functions are only accessible within the class itself.



That's a brief overview of class functions in PHP. They are an essential part of object-oriented programming and allow you to organize and reuse code effectively.
