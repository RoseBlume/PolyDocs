---
title: 'Operators'
sidebar:
  order: 4
---

 - Addition: `+`

- Subtraction: `-`

- Multiplication: `*`

- Division: `/`

- Exponentiation: `^`

- Modulo: `%%`



Example:



```r

x <- 5 + 3



y <- 10 - 2



z <- 4 * 2



a <- 16 / 2



b <- 2 ^ 3



c <- 17 %% 9

```





Assignment operators are used to assign values to variables in R. Here are the commonly used assignment operators:



- Assignment: `<-` or `=`

- Compound assignment: `+=`, `-=`, `*=`, `/=`



Example:



```r

x <- 5



x += 3



y -= 2



z *= 2



a /= 2

```





Comparison operators are used to compare values in R. Here are the commonly used comparison operators:



- Equal to: `==`

- Not equal to: `!=`

- Greater than: `>`

- Less than: `<`

- Greater than or equal to: `>=`

- Less than or equal to: `<=`



Example:



```r

x <- 5

y <- 3

x == y



x != y



x > y



x < y



x >= y



x <= y

```





Logical operators are used to combine or negate logical values in R. Here are the commonly used logical operators:



- AND: `&`

- OR: `|`

- NOT: `!`



Example:



```r

x <- TRUE

y <- FALSE

x & y



x | y



!x

```





There are other miscellaneous operators in R that are used for specific purposes. Some of them include:



- `%in%`: Checks if a value is present in a vector.

- `%*%`: Performs matrix multiplication.

- `%/%`: Performs integer division.



Example:



```r

x <- c(1, 2, 3, 4, 5)

2 %in% x



a <- matrix(c(1, 2, 3, 4), nrow = 2, ncol = 2)

b <- matrix(c(5, 6, 7, 8), nrow = 2, ncol = 2)

a %*% b



x <- 17

y <- 3

x %/% y

```