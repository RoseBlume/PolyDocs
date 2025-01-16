---
title: 'Data Frames'
sidebar:
  order: 14
---

 Data frames are a crucial data structure in R, used for storing data tables. A data frame is a list of vectors of equal length. They are similar to tables in a database or data frames in Python's pandas library.





You can create a data frame using the `data.frame()` function. Here is an example:



```r

names <- c("John", "Jane", "Doe")

ages <- c(23, 35, 28)

scores <- c(85, 90, 88)



students <- data.frame(Name = names, Age = ages, Score = scores)



print(students)

```



This will output:



```

    Name Age Score

1  John  23    85

2  Jane  35    90

3   Doe  28    88

```





You can access elements in a data frame using the `$` operator or square brackets `[]`.



```r

students$Name



students[1, ]



students[2, "Score"]

```





Data frames are versatile and essential for data manipulation in R. They allow you to store and manage tabular data efficiently. You can create data frames using the `data.frame()` function and access their elements using the `$` operator or square brackets.





You can add new columns to a data frame by simply assigning a new vector to a new column name. Similarly, you can remove columns using the `NULL` assignment.



```r

students$Gender <- c("M", "F", "M")



students$Score <- NULL



print(students)

```



This will output:



```

    Name Age Gender

1  John  23      M

2  Jane  35      F

3   Doe  28      M

```





You can filter data frames based on conditions using the `subset()` function or logical indexing.



```r

older_students <- subset(students, Age > 25)



print(older_students)

```



This will output:



```

    Name Age Gender

2  Jane  35      F

3   Doe  28      M

```





In this section, we learned how to create, access, modify, and filter data frames in R. These operations are fundamental for data analysis and manipulation in R.