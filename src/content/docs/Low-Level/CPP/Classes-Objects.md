---
title: 'Classes-Objects'
sidebar:
  order: 1
---

 

In C++, classes and objects are fundamental concepts that support object-oriented programming. A class is a blueprint for creating objects, providing initial values for member variables and implementations of behavior (member functions or methods). An object is an instance of a class.





To define a class in C++, you use the `class` keyword followed by the class name and a pair of curly braces. Inside the braces, you can declare member variables and member functions.



```cpp

class MyClass {

public:

    int myNumber;

    void myFunction() {

        // code to be executed

    }

};

```



In this example, `MyClass` is a class with one public member variable `myNumber` and one public member function `myFunction`.





Once you have defined a class, you can create objects of that class type. Creating an object is also known as instantiating a class.



```cpp

MyClass myObj; // Create an object of MyClass

myObj.myNumber = 15; // Access the member variable

myObj.myFunction(); // Call the member function

```





C++ provides three access specifiers: `public`, `private`, and `protected`. These specifiers define how the members of the class can be accessed.



- `public`: Members are accessible from outside the class.

- `private`: Members cannot be accessed (or viewed) from outside the class.

- `protected`: Members cannot be accessed from outside the class, but they can be accessed in inherited classes.



By default, all members of a class are `private` if no access specifier is provided.





A constructor is a special member function that is executed when an object of the class is created. It usually initializes the member variables of the new object. A destructor is a special member function that is executed when an object is destroyed.



```cpp

class MyClass {

public:

    MyClass() { // Constructor

        // Initialization code

    }

    ~MyClass() { // Destructor

        // Cleanup code

    }

};

```





Here is a complete example that demonstrates the use of classes and objects in C++:



```cpp

using namespace std;



class Car {

public:

    string brand;

    string model;

    int year;



    Car(string x, string y, int z) { // Constructor

        brand = x;

        model = y;

        year = z;

    }



    void displayInfo() {

        cout << "Brand: " << brand << "\nModel: " << model << "\nYear: " << year << endl;

    }

};



int main() {

    Car carObj1("Toyota", "Corolla", 2015);

    Car carObj2("Honda", "Civic", 2018);



    carObj1.displayInfo();

    carObj2.displayInfo();



    return 0;

}

```



In this example, the `Car` class has a constructor that initializes the `brand`, `model`, and `year` member variables. The `displayInfo` member function prints the car's details. Two `Car` objects are created and their information is displayed.





Classes and objects are essential components of C++ that enable object-oriented programming. By defining classes, you can create objects that encapsulate data and functions, promoting code reusability and modularity.