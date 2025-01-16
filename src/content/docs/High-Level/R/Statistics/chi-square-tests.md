---
title: 'Chi Square Tests'
sidebar:
  order: 13
---

 

The Chi-Square test is a statistical method used to determine if there is a significant association between two categorical variables. In R, the `chisq.test()` function is used to perform this test.





The Chi-Square Test for Independence checks whether two categorical variables are independent. Here is an example of how to perform this test in R:



```r

data <- matrix(c(10, 20, 30, 40), nrow = 2)

colnames(data) <- c("Category 1", "Category 2")

rownames(data) <- c("Group 1", "Group 2")



result <- chisq.test(data)



print(result)

```





The Chi-Square Goodness of Fit Test determines if a sample data matches a population with a specific distribution. Here is an example:



```r

observed <- c(50, 30, 20)



expected <- c(0.5, 0.3, 0.2)



result <- chisq.test(observed, p = expected)



print(result)

```





The Chi-Square test is a powerful tool for analyzing categorical data. In R, the `chisq.test()` function simplifies the process of performing both the Chi-Square Test for Independence and the Chi-Square Goodness of Fit Test. By understanding how to use these tests, you can gain valuable insights into the relationships between categorical variables.