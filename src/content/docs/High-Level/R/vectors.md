---
title: 'Vectors'
sidebar:
  order: 9
---

 Vectors are one of the most basic and essential data structures in R. They are used to store sequences of elements of the same type. In this section, we will explore how to create and manipulate vectors in R.





You can create a vector using the `c()` function, which combines values into a vector. Here is an example:



```r

numeric_vector <- c(1, 2, 3, 4, 5)

print(numeric_vector)



char_vector <- c("apple", "banana", "cherry")

print(char_vector)

```





Vectors support various operations, such as arithmetic operations and logical comparisons. Here are some examples:



```r

vector_a <- c(1, 2, 3)

vector_b <- c(4, 5, 6)



sum_vector <- vector_a + vector_b

print(sum_vector)



product_vector <- vector_a * vector_b

print(product_vector)



logical_vector <- vector_a > 2

print(logical_vector)

```





You can access elements of a vector using their indices. In R, indexing starts at 1. Here is an example:



```r

vector <- c(10, 20, 30, 40, 50)



first_element <- vector[1]

print(first_element)



third_element <- vector[3]

print(third_element)

```





Vectors are a fundamental data structure in R, allowing you to store and manipulate sequences of elements efficiently. You can create vectors using the `c()` function, perform various operations on them, and access their elements using indices. Understanding vectors is crucial for working with data in R.