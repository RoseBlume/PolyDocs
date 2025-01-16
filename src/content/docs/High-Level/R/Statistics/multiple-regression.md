---
title: 'Multiple Regression'
sidebar:
  order: 2
---

 

Multiple regression is an extension of simple linear regression that allows us to predict an outcome based on multiple predictors. In R, we can perform multiple regression using the `lm()` function.





Let's consider an example where we want to predict a student's final exam score based on their homework scores and midterm exam score.



First, we need to load the necessary data:



```r

data <- data.frame(

    homework = c(80, 85, 78, 90, 95),

    midterm = c(88, 92, 80, 85, 90),

    final_exam = c(85, 90, 78, 88, 92)

)

```



Next, we fit a multiple regression model:



```r

model <- lm(final_exam ~ homework + midterm, data = data)

```



We can then summarize the model to see the results:



```r

summary(model)

```



The summary output will provide us with the coefficients, R-squared value, and other statistics that help us understand the model.





The coefficients in the summary output tell us how much the final exam score is expected to change with a one-unit change in the predictor variables, holding other predictors constant.



For example, if the coefficient for `homework` is 0.5, it means that for each additional point in homework score, the final exam score is expected to increase by 0.5 points, assuming the midterm score remains constant.





When performing multiple regression, it's important to check that the following assumptions are met:



1. **Linearity**: The relationship between the predictors and the outcome is linear.

2. **Independence**: The residuals (errors) are independent.

3. **Homoscedasticity**: The residuals have constant variance at every level of the predictor.

4. **Normality**: The residuals are normally distributed.



We can check these assumptions using diagnostic plots in R:



```r

par(mfrow = c(2, 2))

plot(model)

```



These plots will help us identify any violations of the assumptions and guide us in improving the model.





Multiple regression is a powerful tool for predicting an outcome based on multiple predictors. By using the `lm()` function in R, we can easily fit a multiple regression model and interpret the results. It's crucial to check the assumptions of the model to ensure its validity.


