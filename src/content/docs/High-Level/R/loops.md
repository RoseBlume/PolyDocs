---
title: 'Loops'
sidebar:
  order: 6
---

 ```r

while (condition) {

}

```



Here's an example of a while loop that prints numbers from 1 to 5:



```r

x <- 1

while (x <= 5) {

  print(x)

  x <- x + 1

}

```





A for loop in R allows you to iterate over a sequence of values and perform a certain action for each value. The general syntax of a for loop is:



```r

for (value in sequence) {

}

```



Here's an example of a for loop that prints numbers from 1 to 5:



```r

for (i in 1:5) {

  print(i)

}

```





In R, you can nest loops by placing one loop inside another loop. This allows you to perform more complex iterations. Here's an example of nested loops that prints a multiplication table:



```r

for (i in 1:5) {

  for (j in 1:5) {

    result <- i * j

    print(paste(i, "*", j, "=", result))

  }

}

```
