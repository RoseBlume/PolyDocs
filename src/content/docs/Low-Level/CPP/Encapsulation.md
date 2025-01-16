---
title: 'Encapsulation'
sidebar:
  order: 3
---

 Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP) in C++. It refers to the bundling of data and the methods that operate on that data within a single unit, typically a class. This concept helps to protect the internal state of an object from unintended or harmful modifications.





1. **Data Hiding**: By restricting access to the internal state of an object, encapsulation helps to prevent unauthorized or accidental modifications. This is typically achieved using access specifiers like `private`, `protected`, and `public`.



2. **Modularity**: Encapsulation allows you to group related data and functions together, making your code more modular and easier to manage.



3. **Maintainability**: Since the internal implementation details of a class are hidden, you can change the implementation without affecting other parts of your code that rely on the class.



4. **Reusability**: Encapsulated code can be reused across different parts of a program or even in different projects.





Here is a simple example of encapsulation in C++:



```cpp

using namespace std;



class Rectangle {

private:

    double length;

    double width;



public:

    // Constructor

    Rectangle(double l, double w) : length(l), width(w) {}



    // Getter for length

    double getLength() {

        return length;

    }



    // Setter for length

    void setLength(double l) {

        length = l;

    }



    // Getter for width

    double getWidth() {

        return width;

    }



    // Setter for width

    void setWidth(double w) {

        width = w;

    }



    // Method to calculate area

    double area() {

        return length * width;

    }

};



int main() {

    Rectangle rect(10.0, 5.0);

    cout << "Area: " << rect.area() << endl;



    rect.setLength(20.0);

    cout << "New Area: " << rect.area() << endl;



    return 0;

}

```



In this example, the `Rectangle` class encapsulates the properties `length` and `width` along with methods to access and modify these properties. The `area` method calculates the area of the rectangle. By using getters and setters, we control how the properties are accessed and modified, ensuring that the internal state remains consistent.



Encapsulation is a powerful feature in C++ that helps to create robust and maintainable code. By following the principles of encapsulation, you can write code that is easier to understand, debug, and extend.