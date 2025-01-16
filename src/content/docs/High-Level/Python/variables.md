---
title: 'Variables'
sidebar:
  order: 1
---

 



In Python, you can create variables by assigning a value to a name. Python is a dynamically typed language, which means you don't need to explicitly declare the variable type. Here's an example:



```python

age = 25



name = "John Doe"



is_student = True

```



You can also cast variables from one type to another using built-in functions like `int()`, `float()`, `str()`, etc. For example:



```python

num1 = int("10")



num2 = str(5)



num3 = int(3.14)

```





When naming variables in Python, there are a few rules to follow:



- Variable names can contain letters, numbers, and underscores.

- Variable names cannot start with a number.

- Variable names are case-sensitive.



Here are some examples of valid variable names:



```python

my_variable = 10

user_name = "John"

is_active = True

```





In Python, you can assign multiple values to multiple variables in a single line using the unpacking feature. Here's an example:



```python

x, y, z = 1, 2, 3



a, b = b, a

```





To output the value of a variable in Python, you can use the `print()` function. Here's an example:



```python

name = "John"

age = 25



print("Name:", name)

print("Age:", age)

```





In Python, you can define global variables that can be accessed from anywhere in your code. Here's an example:



```python

global_var = "I am a global variable"



def my_function():

        print(global_var)



my_function()  # Output: I am a global variable

```



Remember to use global variables sparingly and consider using function parameters instead for better code organization.


