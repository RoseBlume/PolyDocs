---
title: 'Factors'
sidebar:
  order: 13
---

 Factors in R are used to handle categorical data. They are stored as integers, and each integer is associated with a label. Factors are useful in statistical modeling and data analysis.





You can create a factor in R using the `factor()` function. Here is an example:



```r

categories <- c("low", "medium", "high", "medium", "low")



factor_categories <- factor(categories)



print(factor_categories)

```



This will output:



```

[1] low    medium high   medium low   

Levels: high low medium

```





The `levels` attribute of a factor contains the unique values of the categorical data. You can access and modify the levels using the `levels()` function:



```r

levels(factor_categories)



levels(factor_categories) <- c("Low", "Medium", "High")

print(factor_categories)

```





By default, the levels of a factor are unordered. However, you can create ordered factors using the `ordered` argument in the `factor()` function:



```r

ordered_categories <- factor(categories, levels = c("low", "medium", "high"), ordered = TRUE)



print(ordered_categories)

```



This will output:



```

[1] low    medium high   medium low   

Levels: low < medium < high

```





Factors are a powerful feature in R for handling categorical data. They allow you to store data efficiently and perform statistical analysis with ease. By understanding how to create, modify, and order factors, you can better manage your categorical data in R.