---
title: 'Data Reshaping'
sidebar:
  order: 16
---

 Data reshaping is a crucial skill in R for transforming data into a desired format. This chapter will cover the essential functions and techniques for reshaping data in R.





Data can be stored in two primary formats: wide and long. Understanding these formats is key to effective data manipulation.



- **Wide Format**: Each subject's data is in a single row, and each variable is in a separate column.

- **Long Format**: Each subject's data is spread across multiple rows, with a single column for variable names and another for values.







The `pivot_longer()` function from the `tidyverse` package is used to convert data from wide to long format.



```r

library(tidyr)



wide_data <- data.frame(

    id = 1:3,

    time1 = c(4, 5, 6),

    time2 = c(7, 8, 9)

)



long_data <- pivot_longer(wide_data, cols = starts_with("time"), names_to = "time", values_to = "value")

print(long_data)

```





The `pivot_wider()` function is used to convert data from long to wide format.



```r

wide_data_again <- pivot_wider(long_data, names_from = time, values_from = value)

print(wide_data_again)

```





In this chapter, we explored the basics of data reshaping in R, focusing on the `pivot_longer()` and `pivot_wider()` functions. These tools are essential for transforming data between wide and long formats, enabling more flexible data analysis and visualization.