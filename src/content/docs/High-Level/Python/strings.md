---
title: 'Strings'
sidebar:
  order: 8
---

 



In Python, a string is a sequence of characters enclosed in either single quotes (`'`) or double quotes (`"`). Strings are immutable, which means they cannot be changed after they are created.



Example:

```python

message = "Hello, World!"

print(message)

```





You can extract a portion of a string using slicing. Slicing allows you to access specific characters or substrings within a string.



Example:

```python

message = "Hello, World!"

print(message[0:5])  # Output: "Hello"

```





Although strings are immutable, you can create a new string by modifying an existing one. This can be done using string methods or string concatenation.



Example:

```python

message = "Hello, World!"

new_message = message.replace("Hello", "Hi")

print(new_message)  # Output: "Hi, World!"

```





You can concatenate strings using the `+` operator. This allows you to combine multiple strings into a single string.



Example:

```python

greeting = "Hello"

name = "John"

message = greeting + ", " + name + "!"

print(message)  # Output: "Hello, John!"

```





Python provides various ways to format strings, including the `format()` method and f-strings. These allow you to insert values into placeholders within a string.



Example using `format()` method:

```python

name = "John"

age = 25

message = "My name is {} and I am {} years old.".format(name, age)

print(message)  # Output: "My name is John and I am 25 years old."

```



Example using f-strings:

```python

name = "John"

age = 25

message = f"My name is {name} and I am {age} years old."

print(message)  # Output: "My name is John and I am 25 years old."

```





Escape characters are used to represent characters that are difficult to type or are reserved in strings. They are preceded by a backslash (`\`).



Example:

```python

message = "This is a \"quote\"."

print(message)  # Output: "This is a "quote"."

```





F-strings are a concise and convenient way to format strings in Python 3.6 and above. They allow you to embed expressions inside string literals.



Example:

```python

name = "John"

age = 25

message = f"My name is {name} and I will be {age + 1} next year."

print(message)  # Output: "My name is John and I will be 26 next year."

```


