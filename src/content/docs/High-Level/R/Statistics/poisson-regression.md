---
title: 'Poisson Regression'
sidebar:
  order: 6
---

 

Poisson regression is used to model count data and contingency tables. It assumes the response variable Y has a Poisson distribution and assumes the logarithm of its expected value can be modeled by a linear combination of unknown parameters.





In R, you can specify a Poisson regression model using the `glm()` function with the `family` argument set to `poisson`. Here is an example:



```r

library(stats)



data <- data.frame(

    count = c(18, 17, 15, 20, 10, 20, 25, 13, 12),

    predictor = c(1, 2, 3, 4, 5, 6, 7, 8, 9)

)



model <- glm(count ~ predictor, family = poisson, data = data)



summary(model)

```





The summary of the model provides several key pieces of information:



- **Coefficients**: These are the estimated values of the parameters in the model.

- **Standard Errors**: These measure the variability in the coefficient estimates.

- **z-values and p-values**: These are used to test the hypothesis that a coefficient is equal to zero (no effect).





To assess the goodness of fit for a Poisson regression model, you can look at the deviance and the Pearson chi-squared statistic. These values can be found in the summary output of the model.



```r

deviance(model)



sum(residuals(model, type = "pearson")^2)

```





You can use the `predict()` function to generate predicted values from the model. Here is an example:



```r

new_data <- data.frame(predictor = c(10, 11, 12))



predicted_counts <- predict(model, newdata = new_data, type = "response")

predicted_counts

```





Poisson regression is a powerful tool for modeling count data. By using the `glm()` function in R, you can fit a Poisson regression model, interpret the results, assess the goodness of fit, and make predictions on new data.


