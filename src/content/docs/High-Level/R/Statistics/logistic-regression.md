---
title: 'Logistic Regression'
sidebar:
  order: 3
---

 

Logistic regression is a statistical method for analyzing datasets in which there are one or more independent variables that determine an outcome. The outcome is measured with a dichotomous variable (in which there are only two possible outcomes). In R, logistic regression can be performed using the `glm()` function.





Logistic regression is used when the dependent variable is binary (0/1, True/False, Yes/No). It predicts the probability of the occurrence of an event by fitting data to a logistic curve. The logistic function is defined as:



\[ P(Y=1) = \frac{1}{1 + e^{-(\beta_0 + \beta_1X_1 + \beta_2X_2 + ... + \beta_nX_n)}} \]



where \( P(Y=1) \) is the probability of the event occurring, \( \beta_0 \) is the intercept, \( \beta_1, \beta_2, ..., \beta_n \) are the coefficients, and \( X_1, X_2, ..., X_n \) are the independent variables.





To perform logistic regression in R, you can use the `glm()` function with the `family` parameter set to `binomial`. Here is an example:



```r

library(stats)



data <- data.frame(

    outcome = c(1, 0, 1, 0, 1, 0, 1, 0),

    predictor1 = c(2.3, 1.9, 3.1, 2.0, 3.5, 1.8, 3.0, 2.2),

    predictor2 = c(0.5, 0.3, 0.7, 0.4, 0.8, 0.2, 0.6, 0.3)

)



model <- glm(outcome ~ predictor1 + predictor2, data = data, family = binomial)



summary(model)

```



In this example, `outcome` is the dependent variable, and `predictor1` and `predictor2` are the independent variables. The `summary(model)` function provides detailed information about the fitted model, including the coefficients and their significance.





The output of the `summary(model)` function includes several important components:



- **Coefficients**: These are the estimated values of the parameters \( \beta_0, \beta_1, \beta_2, ..., \beta_n \). They represent the change in the log odds of the outcome for a one-unit change in the predictor variable.

- **Standard Errors**: These measure the variability of the coefficient estimates.

- **z-values and p-values**: These are used to test the null hypothesis that the coefficient is equal to zero (no effect). A small p-value (typically < 0.05) indicates that the coefficient is significantly different from zero.





Logistic regression is a powerful tool for binary classification problems. By using the `glm()` function in R, you can fit logistic regression models to your data and interpret the results to understand the relationship between the predictors and the outcome.


