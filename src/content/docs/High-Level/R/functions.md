---
title: 'Functions'
sidebar:
  order: 7
---

 Here are a few examples of standard functions in R:



```r

print("Hello, World!")



sqrt(25)



seq(1, 10, by = 2)

```





In R, you can define functions within other functions. These are called nested functions. Nested functions can access variables from their parent functions, allowing for more complex and modular code structures.



Here's an example of a nested function in R:



```r

parent_function <- function() {

  x <- 10

  

  nested_function <- function() {

    y <- 5

    result <- x + y

    return(result)

  }

  

  nested_function()

}



parent_function()

```





Recursion is a programming technique where a function calls itself to solve a problem. In R, you can use recursion to solve problems that can be broken down into smaller subproblems.



Here's an example of a recursive function in R that calculates the factorial of a number:



```r

factorial <- function(n) {

  if (n == 0) {

    return(1)

  } else {

    return(n * factorial(n - 1))

  }

}



factorial(5)

```





In R, global variables are variables that can be accessed from any part of the code, including inside functions. However, it is generally recommended to avoid using global variables as they can make code harder to understand and maintain.



Here's an example of using a global variable in R:



```r

global_var <- 10



use_global_var <- function() {

  result <- global_var + 5

  return(result)

}



use_global_var()

```



Remember to use global variables sparingly and consider alternative approaches, such as passing variables as function arguments, to improve code readability and maintainability.
