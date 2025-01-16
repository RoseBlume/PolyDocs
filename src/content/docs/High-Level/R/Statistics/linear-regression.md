---
title: 'Linear Regression'
sidebar:
  order: 1
---

 

Linear regression is a fundamental statistical technique used to model the relationship between a dependent variable and one or more independent variables. In this chapter, we will explore how to perform linear regression in R.





Linear regression aims to find the best-fitting line through the data points that minimizes the sum of the squared differences between the observed values and the values predicted by the line.





Simple linear regression involves a single independent variable. The relationship between the dependent variable \( y \) and the independent variable \( x \) is modeled by the equation:



\[ y = \beta_0 + \beta_1 x + \epsilon \]



where:

- \( \beta_0 \) is the intercept,

- \( \beta_1 \) is the slope,

- \( \epsilon \) is the error term.





Let's consider an example where we have data on the number of hours studied and the corresponding scores on a test. We want to predict the test score based on the number of hours studied.



```r

hours <- c(2, 3, 5, 7, 9)

scores <- c(50, 60, 65, 70, 85)



data <- data.frame(hours, scores)



model <- lm(scores ~ hours, data = data)



summary(model)

```



The `lm` function in R is used to fit linear models. The `summary` function provides detailed information about the model, including the coefficients, R-squared value, and p-values.





Multiple linear regression involves two or more independent variables. The relationship is modeled by the equation:



\[ y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \ldots + \beta_n x_n + \epsilon \]





Consider a dataset where we have information on the number of hours studied, the number of hours slept, and the corresponding test scores. We want to predict the test score based on both the number of hours studied and the number of hours slept.



```r

hours_studied <- c(2, 3, 5, 7, 9)

hours_slept <- c(7, 6, 8, 5, 6)

scores <- c(50, 60, 65, 70, 85)



data <- data.frame(hours_studied, hours_slept, scores)



model <- lm(scores ~ hours_studied + hours_slept, data = data)



summary(model)

```





In this chapter, we have introduced the concept of linear regression and demonstrated how to perform both simple and multiple linear regression in R. Linear regression is a powerful tool for understanding and predicting relationships between variables.


