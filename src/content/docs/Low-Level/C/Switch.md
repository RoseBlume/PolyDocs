---
title: 'Switch'
sidebar:
  order: 8
---

 

In C programming, the `switch` statement is used to perform different actions based on different conditions. It is a control statement that allows the value of a variable or expression to change the control flow of program execution via a multi-way branch.





```c

switch (expression) {

    case constant1:

        // code to be executed if expression equals constant1;

        break;

    case constant2:

        // code to be executed if expression equals constant2;

        break;

    // you can have any number of case statements

    default:

        // code to be executed if expression doesn't match any case;

}

```





1. The `expression` is evaluated once.

2. The value of the `expression` is compared with the values of each `case`.

3. If there is a match, the corresponding block of code is executed.

4. The `break` statement is used to terminate a `case` in the switch statement. If omitted, execution will continue to the next `case`.

5. The `default` case is optional and can be used to execute a block of code if none of the cases match the `expression`.





```c



int main() {

    int day = 4;



    switch (day) {

        case 1:

            printf("Monday\n");

            break;

        case 2:

            printf("Tuesday\n");

            break;

        case 3:

            printf("Wednesday\n");

            break;

        case 4:

            printf("Thursday\n");

            break;

        case 5:

            printf("Friday\n");

            break;

        case 6:

            printf("Saturday\n");

            break;

        case 7:

            printf("Sunday\n");

            break;

        default:

            printf("Invalid day\n");

    }



    return 0;

}

```



In this example, the value of `day` is 4, so the output will be "Thursday". If the value of `day` were not between 1 and 7, the `default` case would execute, printing "Invalid day".





- The `switch` statement is a cleaner way to write a series of `if-else` statements when comparing a variable to multiple values.

- Each `case` must end with a `break` statement to prevent fall-through, unless intentionally allowing multiple cases to execute the same block of code.

- The `default` case is optional but recommended for handling unexpected values.


