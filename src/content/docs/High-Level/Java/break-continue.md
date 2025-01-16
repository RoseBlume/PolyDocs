---
title: 'Break-Continue'
sidebar:
  order: 11
---

 

The `break` statement is used to terminate the execution of a loop or a switch statement. When the `break` statement is encountered, the control flow immediately exits the loop or switch statement.



Here is an example of using the `break` statement in a `for` loop:



```java

for (int i = 0; i < 10; i++) {

  if (i == 5) {

    break;

  }

  System.out.println(i);

}

```



In this example, the loop will terminate when `i` becomes equal to 5. The output will be:



```

0

1

2

3

4

```





The `continue` statement is used to skip the rest of the code inside a loop and move to the next iteration. It is commonly used to skip certain iterations based on a condition.



Here is an example of using the `continue` statement in a `while` loop:



```java

int i = 0;

while (i < 5) {

  i++;

  if (i == 3) {

    continue;

  }

  System.out.println(i);

}

```



In this example, the loop will skip the iteration when `i` is equal to 3. The output will be:



```

1

2

4

5

```



Remember to use the `break` and `continue` statements judiciously to control the flow of your loops in Java.
