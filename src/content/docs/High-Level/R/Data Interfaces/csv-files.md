---
title: 'CSV Files'
sidebar:
  order: 0
---

 

Comma-separated values (CSV) files are a common format for storing tabular data. In R, you can easily read and write CSV files using built-in functions.





To read a CSV file into R, you can use the `read.csv()` function. This function reads the file and creates a data frame from its contents.



```r

data <- read.csv("path/to/your/file.csv")

```



You can also specify additional parameters to handle different delimiters, headers, and other options.



```r

data <- read.csv("path/to/your/file.csv", sep = ";", header = TRUE)

```





To write a data frame to a CSV file, you can use the `write.csv()` function. This function exports the data frame to a specified file.



```r

write.csv(data, "path/to/your/output.csv")

```



Similar to `read.csv()`, you can customize the output by specifying additional parameters.



```r

write.csv(data, "path/to/your/output.csv", row.names = FALSE)

```





CSV files are a versatile and widely-used format for data storage. In R, the `read.csv()` and `write.csv()` functions provide a straightforward way to import and export data in this format. By understanding these functions and their parameters, you can efficiently manage CSV files in your R projects.


