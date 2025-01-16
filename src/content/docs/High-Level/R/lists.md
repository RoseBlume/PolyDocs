---
title: 'Lists'
sidebar:
  order: 10
---

 

In R, a list is an object that can contain elements of different types, such as numbers, strings, vectors, and even other lists. Lists are a versatile data structure that allows you to group related data together.





You can create a list in R using the `list()` function. Here is an example:



```r

my_list <- list(name = "John", age = 25, scores = c(90, 85, 88))

```



In this example, `my_list` is a list containing three elements: a string, a numeric value, and a numeric vector.





You can access elements of a list using the `$` operator or double square brackets `[[ ]]`. For example:



```r

name <- my_list$name



age <- my_list[[2]]

```





You can modify elements of a list by assigning new values to them. For example:



```r

my_list$age <- 26

my_list[[3]] <- c(95, 90, 92)

```





You can add new elements to a list by simply assigning a value to a new name. To remove an element, you can set it to `NULL`. For example:



```r

my_list$city <- "New York"



my_list$city <- NULL

```





Lists in R are powerful and flexible data structures that can hold a variety of data types. They are useful for organizing and manipulating complex data sets. By understanding how to create, access, modify, and manage lists, you can effectively handle diverse data in your R programming projects.
