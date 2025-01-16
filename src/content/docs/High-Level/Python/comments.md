---
title: 'Comments'
sidebar:
  order: 3
---

 Comments in Python are used to add explanatory notes or annotations to the code. They are ignored by the Python interpreter and are only meant for human readers.



To add a comment in Python, you can use the `#` symbol. Anything after the `#` symbol on the same line is considered a comment and is not executed as code.



Here's an example:



```python

print("Hello, World!")  # This is another comment

```



In the above example, the first comment is a standalone comment, while the second comment is placed after a line of code.



Comments can also be used to temporarily disable a piece of code without deleting it. This can be useful for debugging or testing purposes. Here's an example:



```python

print("This line of code is not commented out")

```



In the above example, the first line is commented out, so it will not be executed. The second line is not commented out and will be executed.



Comments can also span multiple lines using triple quotes (`"""` or `'''`). This is often used for docstrings, which are used to document functions, classes, or modules. Here's an example:



```python

"""

This is a multi-line comment or docstring.

It can span multiple lines.

"""



def add_numbers(a, b):

    """

    This function takes two numbers as input and returns their sum.

    """

    return a + b

```



In the above example, the first comment is a multi-line comment, while the second comment is a docstring for the `add_numbers` function.



Remember, comments are a good practice to make your code more readable and understandable for yourself and others who may read your code in the future.