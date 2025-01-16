---
title: 'Switch'
sidebar:
  order: 5
---

 In C++, the `switch` statement is a control statement that allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.





```cpp

switch (expression) {

    case constant1:

        // code to be executed if expression equals constant1;

        break;

    case constant2:

        // code to be executed if expression equals constant2;

        break;

    // you can have any number of case statements

    default:

        // code to be executed if expression doesn't match any case

}

```





Here is an example of a `switch` statement in C++:



```cpp

using namespace std;



int main() {

    int day = 4;



    switch (day) {

        case 1:

            cout << "Monday";

            break;

        case 2:

            cout << "Tuesday";

            break;

        case 3:

            cout << "Wednesday";

            break;

        case 4:

            cout << "Thursday";

            break;

        case 5:

            cout << "Friday";

            break;

        case 6:

            cout << "Saturday";

            break;

        case 7:

            cout << "Sunday";

            break;

        default:

            cout << "Invalid day";

    }



    return 0;

}

```



In this example, the variable `day` is compared against each case. Since `day` is equal to 4, the output will be "Thursday".





- The `break` statement is used to terminate a `case` in the `switch` statement. If `break` is not used, the program will continue to execute the next case.

- The `default` case is optional but recommended. It executes if none of the cases match the expression.

- The `switch` statement can only be used with integral or enumeration types.



By understanding and using the `switch` statement, you can make your code more readable and efficient when dealing with multiple conditions.