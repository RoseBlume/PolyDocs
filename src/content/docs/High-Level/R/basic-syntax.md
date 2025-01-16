---
title: 'Basic Syntax'
sidebar:
  order: 1
---

 R is a powerful language for statistical computing and graphics. In this chapter, we will cover the basic syntax of R, which will help you get started with writing R code.



Comments in R are created using the `#` symbol. Anything following the `#` on a line will be ignored by the R interpreter.



```r

x <- 10 # This is also a comment

```



Variables in R can be assigned using the `<-` operator or the `=` operator. It is a common practice to use `<-` for assignment.



```r

x <- 5

y = 10

```



R supports various data types, including numeric, integer, character, and logical.



```r

num <- 3.14       # Numeric

int <- 42         # Integer

char <- "Hello"   # Character

bool <- TRUE      # Logical

```



Vectors are a basic data structure in R. You can create a vector using the `c()` function.



```r

vec <- c(1, 2, 3, 4, 5)

```



Functions in R are created using the `function` keyword.



```r

add <- function(a, b) {

    return(a + b)

}

result <- add(3, 4)

```



In this section, we covered the basic syntax of R, including comments, variables, data types, vectors, and functions. Understanding these basics will help you write and understand R code more effectively.