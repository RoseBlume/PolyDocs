---
title: 'Normal Distribution'
sidebar:
  order: 4
---

 

The normal distribution, also known as the Gaussian distribution, is a continuous probability distribution that is symmetrical around its mean. It is characterized by its bell-shaped curve. In this section, we will learn how to work with the normal distribution in R.





The normal distribution has several key properties:

- It is symmetric around the mean.

- The mean, median, and mode of the distribution are equal.

- The area under the curve is equal to 1.

- It is defined by two parameters: the mean (μ) and the standard deviation (σ).





In R, you can generate random data that follows a normal distribution using the `rnorm()` function. The `rnorm()` function takes three arguments:

- `n`: the number of observations.

- `mean`: the mean of the distribution.

- `sd`: the standard deviation of the distribution.



Here is an example of how to generate 1000 random observations from a normal distribution with a mean of 0 and a standard deviation of 1:



```r

set.seed(123) # Setting seed for reproducibility

data <- rnorm(n = 1000, mean = 0, sd = 1)

```





To visualize the normal distribution, you can use the `hist()` function to create a histogram of the generated data. Additionally, you can overlay a density plot using the `density()` function.



```r

hist(data, breaks = 30, probability = TRUE, main = "Histogram of Normally Distributed Data", xlab = "Value", ylab = "Density")

lines(density(data), col = "blue", lwd = 2)

```





In this section, we have covered the basics of the normal distribution and how to generate and visualize normally distributed data in R. The normal distribution is a fundamental concept in statistics and is widely used in various fields.


