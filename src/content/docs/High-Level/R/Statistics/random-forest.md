---
title: 'Random Forest'
sidebar:
  order: 11
---

 

Random Forest is a powerful ensemble learning method used for classification and regression tasks. It operates by constructing multiple decision trees during training and outputting the mode of the classes (classification) or mean prediction (regression) of the individual trees.





1. **Bootstrap Sampling**: Random subsets of the training data are created with replacement.

2. **Decision Trees**: For each subset, a decision tree is built.

3. **Aggregation**: The results of all decision trees are combined to make the final prediction.





To implement Random Forest in R, we use the `randomForest` package. Below is a step-by-step guide:





```r

install.packages("randomForest")

library(randomForest)

```





Ensure your data is clean and properly formatted. For this example, we'll use the `iris` dataset.



```r

data(iris)

head(iris)

```





```r

set.seed(42)  # For reproducibility

model <- randomForest(Species ~ ., data=iris, ntree=100)

print(model)

```





```r

predictions <- predict(model, iris)

table(predictions, iris$Species)

```





```r

plot(model)

```





Random Forest is a versatile and robust method for both classification and regression tasks. By aggregating the results of multiple decision trees, it reduces overfitting and improves predictive performance. The `randomForest` package in R makes it straightforward to implement and evaluate this powerful algorithm.


