---
title: 'Decision Making'
sidebar:
  order: 5
---

 Decision making in R involves using conditional statements to control the flow of execution based on certain conditions. The primary constructs for decision making in R are `if`, `else if`, and `else`.





The `if` statement is used to test a condition. If the condition is true, the block of code inside the `if` statement is executed.



```r

x <- 10



if (x > 5) {

    print("x is greater than 5")

}

```



In this example, since `x` is 10, which is greater than 5, the message "x is greater than 5" will be printed.





The `else if` statement allows you to check multiple conditions. If the first condition is false, it checks the next condition, and so on.



```r

x <- 10



if (x > 15) {

    print("x is greater than 15")

} else if (x > 5) {

    print("x is greater than 5 but less than or equal to 15")

} else {

    print("x is less than or equal to 5")

}

```



In this example, the message "x is greater than 5 but less than or equal to 15" will be printed because `x` is 10.





The `else` statement is used to execute a block of code if none of the previous conditions are true.



```r

x <- 3



if (x > 5) {

    print("x is greater than 5")

} else {

    print("x is less than or equal to 5")

}

```



In this example, since `x` is 3, the message "x is less than or equal to 5" will be printed.





You can also nest `if` statements within each other to check multiple conditions.



```r

x <- 10

y <- 20



if (x > 5) {

    if (y > 15) {

        print("x is greater than 5 and y is greater than 15")

    }

}

```



In this example, both conditions are true, so the message "x is greater than 5 and y is greater than 15" will be printed.







The `switch` statement in R provides an alternative way to handle multiple conditions. It is particularly useful when you have a single variable that you want to compare against several different values.





The basic syntax of the `switch` statement is as follows:



```r

result <- switch(expression,

                 case1 = value1,

                 case2 = value2,

                 case3 = value3,

                 ...

                 default = defaultValue)

```



- `expression`: The variable or expression to be evaluated.

- `case1`, `case2`, `case3`, ...: The possible values of the expression.

- `value1`, `value2`, `value3`, ...: The values to return if the expression matches the corresponding case.

- `default`: The value to return if none of the cases match (optional).





Here is an example of using the `switch` statement in R:



```r

day <- "Tuesday"



message <- switch(day,

                  "Monday" = "Start of the work week",

                  "Tuesday" = "Second day of the work week",

                  "Wednesday" = "Midweek",

                  "Thursday" = "Almost the weekend",

                  "Friday" = "Last work day",

                  "Saturday" = "Weekend!",

                  "Sunday" = "Weekend!",

                  "Invalid day")



print(message)

```



In this example, the variable `day` is set to "Tuesday". The `switch` statement evaluates the value of `day` and matches it to the corresponding case. Since `day` is "Tuesday", the message "Second day of the work week" will be printed.





If the value of the expression does not match any of the specified cases, the `switch` statement can return a default value. This is useful for handling unexpected or invalid values.



```r

day <- "Holiday"



message <- switch(day,

                  "Monday" = "Start of the work week",

                  "Tuesday" = "Second day of the work week",

                  "Wednesday" = "Midweek",

                  "Thursday" = "Almost the weekend",

                  "Friday" = "Last work day",

                  "Saturday" = "Weekend!",

                  "Sunday" = "Weekend!",

                  "Invalid day")



print(message)

```



In this example, since `day` is set to "Holiday", which does not match any of the specified cases, the default value "Invalid day" will be printed.





The `switch` statement is a powerful tool for decision making in R, especially when dealing with a single variable that can take on multiple values. By using `switch`, you can simplify your code and make it more readable compared to using multiple `if` and `else if` statements.



With the knowledge of `if`, `else if`, `else`, and `switch` statements, you are now equipped to handle a wide range of decision-making scenarios in your R programs.