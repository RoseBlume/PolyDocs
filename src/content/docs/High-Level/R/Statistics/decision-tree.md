---
title: 'Decision Tree'
sidebar:
  order: 10
---

 

Decision trees are a popular method for various machine learning tasks. They are used for classification and regression tasks. In this section, we will learn how to create and use decision trees in R.





A decision tree is a flowchart-like structure where each internal node represents a test on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes). The paths from the root to the leaf represent classification rules.





To create a decision tree in R, we will use the `rpart` package. First, ensure that the package is installed and loaded:



```r

install.packages("rpart")

library(rpart)

```





Let's use the famous Iris dataset to create a decision tree. The Iris dataset contains measurements of different parts of iris flowers and their species.



```r

data(iris)



model <- rpart(Species ~ ., data = iris, method = "class")



print(model)

```





To visualize the decision tree, we can use the `rpart.plot` package:



```r

install.packages("rpart.plot")

library(rpart.plot)



rpart.plot(model)

```





In this section, we introduced decision trees and demonstrated how to create and visualize them using R. Decision trees are a powerful tool for both classification and regression tasks, and R provides robust packages to work with them effectively.
