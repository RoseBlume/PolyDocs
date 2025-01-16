---
title: 'Polymorphism'
sidebar:
  order: 5
---

 Polymorphism is a core concept in C++ that allows objects to be treated as instances of their parent class rather than their actual class. This enables a single function to operate on different types of objects, making the code more flexible and reusable.





Compile-time polymorphism is achieved through function overloading and operator overloading. It is also known as static polymorphism.



Function overloading allows multiple functions to have the same name but different parameters. The correct function is selected at compile time based on the arguments passed.



```cpp

using namespace std;



class Print {

public:

    void show(int i) {

        cout << "Integer: " << i << endl;

    }

    void show(double d) {

        cout << "Double: " << d << endl;

    }

    void show(string s) {

        cout << "String: " << s << endl;

    }

};



int main() {

    Print obj;

    obj.show(5);

    obj.show(5.5);

    obj.show("Hello");

    return 0;

}

```



Operator overloading allows you to redefine the way operators work for user-defined types.



```cpp

using namespace std;



class Complex {

private:

    float real;

    float imag;

public:

    Complex() : real(0), imag(0) {}

    Complex(float r, float i) : real(r), imag(i) {}



    Complex operator + (const Complex& obj) {

        Complex temp;

        temp.real = real + obj.real;

        temp.imag = imag + obj.imag;

        return temp;

    }



    void display() {

        cout << "Real: " << real << " Imaginary: " << imag << endl;

    }

};



int main() {

    Complex c1(3.3, 4.4), c2(1.1, 2.2);

    Complex c3 = c1 + c2;

    c3.display();

    return 0;

}

```



Runtime polymorphism is achieved through inheritance and virtual functions. It is also known as dynamic polymorphism.



A virtual function is a member function in the base class that you expect to override in derived classes. When you refer to a derived class object using a pointer or a reference to the base class, you can call a virtual function for that object and execute the derived class's version of the function.



```cpp

using namespace std;



class Base {

public:

    virtual void show() {

        cout << "Base class" << endl;

    }

};



class Derived : public Base {

public:

    void show() override {

        cout << "Derived class" << endl;

    }

};



int main() {

    Base* b;

    Derived d;

    b = &d;

    b->show();

    return 0;

}

```



In this example, although the pointer `b` is of type `Base*`, it points to an object of type `Derived`. The call to `show()` executes the `Derived` class's version of the function.



Polymorphism is a powerful feature in C++ that enhances the flexibility and maintainability of code by allowing the same interface to be used for different underlying forms (data types).