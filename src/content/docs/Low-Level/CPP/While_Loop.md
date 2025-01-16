---
title: 'While Loop'
sidebar:
  order: 1
---

 

In C++, a `while` loop is used to repeatedly execute a block of code as long as a specified condition is true. The syntax of a `while` loop is as follows:



```cpp

while (condition) {

    // code to be executed

}

```





Here is a simple example of a `while` loop that prints numbers from 1 to 5:



```cpp

using namespace std;



int main() {

    int i = 1;

    while (i <= 5) {

        cout << i << endl;

        i++;

    }

    return 0;

}

```



In this example, the loop continues to execute as long as the value of `i` is less than or equal to 5. The variable `i` is incremented by 1 in each iteration.





A `while` loop can result in an infinite loop if the condition never becomes false. For example:



```cpp

using namespace std;



int main() {

    int i = 1;

    while (true) {

        cout << i << endl;

        i++;

    }

    return 0;

}

```



In this example, the condition `true` is always true, so the loop will run indefinitely. Be cautious with infinite loops as they can cause your program to become unresponsive.





You can control the flow of a `while` loop using the `break` and `continue` statements. The `break` statement exits the loop immediately, while the `continue` statement skips the rest of the current iteration and proceeds to the next iteration.





```cpp

using namespace std;



int main() {

    int i = 1;

    while (i <= 10) {

        if (i == 6) {

            break;

        }

        cout << i << endl;

        i++;

    }

    return 0;

}

```



In this example, the loop will terminate when `i` equals 6 due to the `break` statement.





```cpp

using namespace std;



int main() {

    int i = 1;

    while (i <= 10) {

        if (i == 6) {

            i++;

            continue;

        }

        cout << i << endl;

        i++;

    }

    return 0;

}

```



In this example, when `i` equals 6, the `continue` statement skips the rest of the loop body and proceeds to the next iteration, so 6 is not printed.



Understanding how to use `while` loops effectively is crucial for controlling the flow of your programs and performing repetitive tasks efficiently.
