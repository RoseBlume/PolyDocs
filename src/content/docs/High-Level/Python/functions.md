---
title: 'Functions'
sidebar:
  order: 4
---

 Functions in Python are reusable blocks of code that perform a specific task. They help in organizing code and making it more modular. To define a function in Python, you can use the `def` keyword followed by the function name and parentheses.



Here's an example of a simple function that adds two numbers and returns the result:



```python

def add_numbers(a, b):

    return a + b

```



In the above example, `add_numbers` is the name of the function, and `a` and `b` are the parameters. The `return` statement is used to specify the value that the function should return.



To call a function, you simply write the function name followed by parentheses and provide the necessary arguments. Here's how you can call the `add_numbers` function:



```python

result = add_numbers(5, 3)

print(result)  # Output: 8

```



You can also define default values for function parameters. This allows you to call the function without providing all the arguments. Here's an example:



```python

def greet(name="John"):

    print("Hello, " + name + "!")

```



In the above example, if you call the `greet` function without providing a name, it will default to "John". For example:



```python

greet()  # Output: Hello, John!

greet("Alice")  # Output: Hello, Alice!

```



Functions can also have a `docstring`, which is a string that provides documentation for the function. It is enclosed in triple quotes and is usually placed right after the function definition. Here's an example:



```python

def multiply(a, b):

    """

    This function multiplies two numbers.

    """

    return a * b

```



In the above example, the `docstring` provides a brief description of what the function does.



Functions are an essential part of Python programming and allow you to write reusable and organized code. They help in improving code readability and maintainability.
