---
title: 'Analysis of Covariance'
sidebar:
  order: 7
---

 Analysis of covariance (ANCOVA) is a blend of ANOVA and regression. It evaluates whether population means of a dependent variable (DV) are equal across levels of a categorical independent variable (IV), while statistically controlling for the effects of other continuous variables, known as covariates (CV).



- Understand the purpose of ANCOVA

- Learn how to perform ANCOVA in R

- Interpret the results of ANCOVA



Before proceeding, ensure you have the following packages installed and loaded:



```r

install.packages("car")

install.packages("ggplot2")

library(car)

library(ggplot2)

```



We'll use the `mtcars` dataset for this example. Suppose we want to analyze the effect of the number of cylinders (`cyl`) on miles per gallon (`mpg`), while controlling for the weight of the car (`wt`).



```r

data(mtcars)

head(mtcars)

```



First, fit the ANCOVA model using the `aov` function:



```r

ancova_model <- aov(mpg ~ cyl + wt, data = mtcars)

summary(ancova_model)

```



The summary output provides the F-statistics and p-values for each predictor. A significant p-value for `cyl` indicates that the number of cylinders has a significant effect on `mpg`, after controlling for `wt`.



1. **Linearity**: The relationship between the covariate and the dependent variable should be linear.

2. **Homogeneity of regression slopes**: The relationship between the covariate and the dependent variable should be the same across all levels of the independent variable.

3. **Normality**: The residuals should be normally distributed.

4. **Homogeneity of variances**: The variance of the residuals should be equal across groups.



Plot the relationship between the covariate and the dependent variable:



```r

ggplot(mtcars, aes(x = wt, y = mpg)) +

    geom_point() +

    geom_smooth(method = "lm", se = FALSE)

```



Fit separate regression lines for each level of the independent variable:



```r

ggplot(mtcars, aes(x = wt, y = mpg, color = factor(cyl))) +

    geom_point() +

    geom_smooth(method = "lm", se = FALSE)

```



Check the normality of residuals using a Q-Q plot:



```r

qqnorm(residuals(ancova_model))

qqline(residuals(ancova_model))

```



Use Levene's Test to check for equal variances:



```r

leveneTest(mpg ~ factor(cyl), data = mtcars)

```



ANCOVA is a powerful statistical technique that combines ANOVA and regression. It allows us to compare group means while controlling for continuous covariates. By following the steps and checking the assumptions, you can effectively perform and interpret ANCOVA in R.