---
title: 'Boxplots'
sidebar:
  order: 2
---

 Boxplots are a great way to visualize the distribution of a dataset. In R, creating boxplots is straightforward using the `boxplot()` function. Let's go through an example.





To create a basic boxplot in R, you can use the following code:



```r

data <- c(23, 45, 56, 67, 78, 89, 90, 34, 45, 56, 67, 78, 89, 90)



boxplot(data, main="Boxplot of Sample Data", ylab="Values")

```



This code will generate a boxplot with the title "Boxplot of Sample Data" and label the y-axis as "Values".





You can customize boxplots in various ways, such as changing colors, adding notches, and more. Here are some examples:





```r

boxplot(data, main="Boxplot with Custom Colors", ylab="Values", col="lightblue")

```





```r

boxplot(data, main="Boxplot with Notches", ylab="Values", notch=TRUE)

```





If you have multiple datasets, you can create multiple boxplots in one graph:



```r

data1 <- c(23, 45, 56, 67, 78, 89, 90, 34, 45, 56, 67, 78, 89, 90)

data2 <- c(12, 34, 56, 78, 90, 21, 43, 65, 87, 32, 54, 76, 98, 10)



boxplot(data1, data2, names=c("Data1", "Data2"), main="Multiple Boxplots", ylab="Values")

```



This will create side-by-side boxplots for `data1` and `data2`.





Boxplots are a powerful tool for visualizing the distribution of data. With R, you can easily create and customize boxplots to suit your needs. Experiment with different options to find the best way to present your data.