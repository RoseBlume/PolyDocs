---
title: 'Mean, Median & Mode'
sidebar:
  order: 0
---

 

In this chapter, we will explore three fundamental statistical measures: mean, median, and mode. These measures are essential for summarizing and understanding data distributions. We will use the R programming language to calculate these statistics.





The mean, or average, is the sum of all values divided by the number of values. It is a measure of central tendency that provides a single value representing the center of the data.





To calculate the mean in R, you can use the `mean()` function. Here is an example:



```r

data <- c(10, 20, 30, 40, 50)



mean_value <- mean(data)

print(mean_value)

```





The median is the middle value in a data set when the values are arranged in ascending or descending order. If the number of values is even, the median is the average of the two middle values.





To calculate the median in R, you can use the `median()` function. Here is an example:



```r

data <- c(10, 20, 30, 40, 50)



median_value <- median(data)

print(median_value)

```





The mode is the value that appears most frequently in a data set. A data set may have one mode, more than one mode, or no mode at all.





R does not have a built-in function for calculating the mode, but you can create a custom function to find it. Here is an example:



```r

data <- c(10, 20, 20, 30, 40, 50)



get_mode <- function(v) {

    uniqv <- unique(v)

    uniqv[which.max(tabulate(match(v, uniqv)))]

}



mode_value <- get_mode(data)

print(mode_value)

```





In this chapter, we covered the mean, median, and mode, which are key measures of central tendency in statistics. We also demonstrated how to calculate these measures using R. Understanding these concepts is crucial for analyzing and interpreting data effectively.
