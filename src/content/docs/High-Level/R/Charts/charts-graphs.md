---
title: 'Charts & Graphs'
sidebar:
  order: 18
---

 

Charts and graphs are essential tools for data visualization in R. They help in understanding data patterns, trends, and distributions. In this section, we will explore various types of charts and graphs that can be created using R.





R provides a simple and efficient way to create basic plots using the `plot()` function. Here is an example of a basic scatter plot:



```r

x <- c(1, 2, 3, 4, 5)

y <- c(2, 3, 5, 7, 11)

plot(x, y, main="Basic Scatter Plot", xlab="X-Axis", ylab="Y-Axis", pch=19)

```





Bar charts are useful for comparing categorical data. The `barplot()` function can be used to create bar charts in R:



```r

counts <- table(mtcars$gear)

barplot(counts, main="Car Distribution by Gears", xlab="Number of Gears", ylab="Frequency")

```





Histograms are used to represent the distribution of a continuous variable. The `hist()` function is used to create histograms:



```r

data <- rnorm(1000)

hist(data, main="Histogram of Normally Distributed Data", xlab="Value", ylab="Frequency", col="blue", border="black")

```





Line graphs are useful for displaying data trends over time. The `plot()` function can also be used to create line graphs:



```r

time <- 1:10

values <- c(2, 3, 5, 7, 11, 13, 17, 19, 23, 29)

plot(time, values, type="o", col="red", main="Line Graph", xlab="Time", ylab="Values")

```





In this section, we have covered the basics of creating various types of charts and graphs in R, including scatter plots, bar charts, histograms, and line graphs. These visualizations are fundamental for data analysis and interpretation. In the next sections, we will delve deeper into more advanced plotting techniques and customization options.