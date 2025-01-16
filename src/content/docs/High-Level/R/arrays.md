---
title: 'Arrays'
sidebar:
  order: 12
---

 

Arrays in R are multi-dimensional data structures that can store data of the same type. They are particularly useful when you need to work with data in more than two dimensions.





You can create an array in R using the `array()` function. The `array()` function takes a vector of data and a vector of dimensions as arguments. Here is an example:



```r

data <- c(1, 2, 3, 4, 5, 6)



my_array <- array(data, dim = c(2, 3))



print(my_array)

```



This will output:



```

    [,1] [,2] [,3]

[1,]    1    3    5

[2,]    2    4    6

```





You can access elements of an array using square brackets and specifying the indices for each dimension. For example:



```r

element <- my_array[1, 2]



print(element)

```



This will output:



```

[1] 3

```





You can modify elements of an array by assigning new values to specific indices. For example:



```r

my_array[1, 2] <- 10



print(my_array)

```



This will output:



```

    [,1] [,2] [,3]

[1,]    1   10    5

[2,]    2    4    6

```





Arrays in R are powerful tools for handling multi-dimensional data. You can create arrays using the `array()` function, access elements using indices, and modify elements by assigning new values. Understanding how to work with arrays will help you manage complex data structures effectively in R.


