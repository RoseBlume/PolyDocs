---
title: 'Packages'
sidebar:
  order: 15
---

 

In R, packages are collections of R functions, data, and compiled code in a well-defined format. They are stored in a library, and you can use them to extend the functionality of R.





To install a package, you can use the `install.packages()` function. For example, to install the `ggplot2` package, you would use:



```r

install.packages("ggplot2")

```



This command downloads the package from CRAN (the Comprehensive R Archive Network) and installs it on your system.





Once a package is installed, you need to load it into your R session to use its functions. You can do this with the `library()` function:



```r

library(ggplot2)

```



After loading the package, you can use its functions in your R scripts.





Here are some commonly used R packages:



- **ggplot2**: A system for declaratively creating graphics, based on The Grammar of Graphics.

- **dplyr**: A package for data manipulation, providing a consistent set of verbs that help you solve the most common data manipulation challenges.

- **tidyr**: A package that makes it easy to tidy your data. Tidy data is data where each variable is in a column and each observation is a row.

- **shiny**: A package for building interactive web applications directly from R.





Packages are essential for extending the capabilities of R. By installing and loading packages, you can access a wide range of functions and tools that make data analysis and visualization easier and more powerful.


