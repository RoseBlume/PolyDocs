---
title: 'Function Parameters'
sidebar:
  order: 0
---

 In C++, functions can take parameters, which are variables passed to the function when it is called. These parameters allow functions to operate on different values each time they are executed.





When a parameter is passed by value, a copy of the argument is made and passed to the function. This means that changes made to the parameter inside the function do not affect the original argument.



```cpp

using namespace std;



void increment(int num) {

    num++;

    cout << "Inside function: " << num << endl;

}



int main() {

    int a = 5;

    increment(a);

    cout << "Outside function: " << a << endl;

    return 0;

}

```



Output:

```

Inside function: 6

Outside function: 5

```



When a parameter is passed by reference, the function operates on the actual argument, not a copy. This means changes made to the parameter inside the function affect the original argument.



```cpp

using namespace std;



void increment(int &num) {

    num++;

    cout << "Inside function: " << num << endl;

}



int main() {

    int a = 5;

    increment(a);

    cout << "Outside function: " << a << endl;

    return 0;

}

```



Output:

```

Inside function: 6

Outside function: 6

```



Passing by pointer is similar to passing by reference, but it uses pointers. This method is useful when you need to pass arrays or when you want to modify the pointer itself.



```cpp

using namespace std;



void increment(int *num) {

    (*num)++;

    cout << "Inside function: " << *num << endl;

}



int main() {

    int a = 5;

    increment(&a);

    cout << "Outside function: " << a << endl;

    return 0;

}

```



Output:

```

Inside function: 6

Outside function: 6

```



C++ allows functions to have default parameters. These are values that are used if no argument is provided when the function is called.



```cpp

using namespace std;



void display(int a, int b = 10) {

    cout << "a: " << a << ", b: " << b << endl;

}



int main() {

    display(5);

    display(5, 20);

    return 0;

}

```



Output:

```

a: 5, b: 10

a: 5, b: 20

```





Understanding how to pass parameters to functions is crucial for writing flexible and reusable code. By mastering pass by value, pass by reference, and pass by pointer, as well as using default parameters, you can create functions that are both powerful and easy to use.