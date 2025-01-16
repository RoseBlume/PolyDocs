---
title: 'If-Else'
sidebar:
  order: 5
---

 

In Python, the `if-else` statement is used to perform different actions based on different conditions. It allows the program to make decisions and execute different blocks of code depending on the outcome of a condition.



Here's the basic syntax of an `if-else` statement in Python:



```python

if condition:

else:

```



The `condition` is an expression that evaluates to either `True` or `False`. If the condition is `True`, the code block under the `if` statement is executed. If the condition is `False`, the code block under the `else` statement is executed.



Here's an example that demonstrates the usage of `if-else` statement in Python:



```python

x = 10



if x > 0:

    print("x is positive")

else:

    print("x is non-positive")

```



In this example, if the value of `x` is greater than `0`, the program will print "x is positive". Otherwise, it will print "x is non-positive".



You can also use multiple `elif` (short for "else if") statements to handle multiple conditions. Here's an example:



```python

x = 0



if x > 0:

    print("x is positive")

elif x < 0:

    print("x is negative")

else:

    print("x is zero")

```



In this example, if `x` is greater than `0`, it prints "x is positive". If `x` is less than `0`, it prints "x is negative". Otherwise, it prints "x is zero".



The `if-else` statement is a powerful tool in Python that allows you to control the flow of your program based on different conditions. It is commonly used in decision-making scenarios and helps in writing more dynamic and flexible code.



```



Feel free to modify and expand upon this example to suit your needs.