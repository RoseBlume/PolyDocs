---
title: 'Pie Charts'
sidebar:
  order: 0
---

 Pie charts are a popular way to visualize data in R. They are used to represent the proportions of different categories within a dataset. In this section, we will learn how to create pie charts using R.





To create a basic pie chart in R, you can use the `pie()` function. Here is an example:



```r

slices <- c(10, 20, 30, 40)

labels <- c("A", "B", "C", "D")



pie(slices, labels = labels, main = "Simple Pie Chart")

```



In this example, `slices` represents the values for each category, and `labels` provides the names for each slice of the pie. The `main` parameter is used to add a title to the chart.





You can customize pie charts in various ways, such as changing colors, adding percentages, and more. Here is an example with some customizations:



```r

slices <- c(10, 20, 30, 40)

labels <- c("A", "B", "C", "D")

colors <- c("red", "blue", "green", "yellow")



pie(slices, labels = labels, col = colors, main = "Customized Pie Chart")

```



In this example, the `col` parameter is used to specify the colors for each slice.





To add percentages to the pie chart, you can use the `paste()` function to create labels that include both the category names and their corresponding percentages:



```r

slices <- c(10, 20, 30, 40)

labels <- c("A", "B", "C", "D")

percentages <- round(slices / sum(slices) * 100)

labels_with_percentages <- paste(labels, percentages, "%", sep = " ")



pie(slices, labels = labels_with_percentages, main = "Pie Chart with Percentages")

```



In this example, `percentages` calculates the percentage of each slice, and `labels_with_percentages` combines the category names with their percentages.





Pie charts are a useful tool for visualizing the proportions of different categories within a dataset. By using the `pie()` function in R, you can create simple pie charts, customize their appearance, and add percentages to make the data more informative.