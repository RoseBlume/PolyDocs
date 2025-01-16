---
title: 'Break-Continue'
sidebar:
  order: 2
---

 In C++, the `break` and `continue` statements are used to control the flow of loops.





The `break` statement is used to exit a loop prematurely. When a `break` statement is encountered inside a loop, the loop is immediately terminated, and the program control resumes at the next statement following the loop.





```cpp

using namespace std;



int main() {

    for (int i = 0; i < 10; i++) {

        if (i == 5) {

            break;

        }

        cout << i << " ";

    }

    return 0;

}

```



In this example, the loop will terminate when `i` is equal to 5, so the output will be:



```

0 1 2 3 4

```





The `continue` statement is used to skip the current iteration of a loop and proceed to the next iteration. When a `continue` statement is encountered, the remaining code inside the loop for the current iteration is skipped, and the loop proceeds with the next iteration.





```cpp

using namespace std;



int main() {

    for (int i = 0; i < 10; i++) {

        if (i == 5) {

            continue;

        }

        cout << i << " ";

    }

    return 0;

}

```



In this example, when `i` is equal to 5, the `continue` statement will skip the rest of the loop body, so the output will be:



```

0 1 2 3 4 6 7 8 9

```





- The `break` statement exits a loop immediately.

- The `continue` statement skips the current iteration and proceeds to the next iteration of the loop.



Understanding how to use `break` and `continue` effectively can help you manage the flow of your loops and make your code more readable and efficient.