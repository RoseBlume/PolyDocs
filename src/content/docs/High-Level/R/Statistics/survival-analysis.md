---
title: 'Survival Analysis'
sidebar:
  order: 12
---

 

Survival analysis is a branch of statistics that deals with the analysis of time-to-event data. The primary objective is to model and predict the time until an event of interest occurs. This type of analysis is widely used in various fields such as medicine, biology, engineering, and social sciences.







Time-to-event data, also known as survival data, consists of the time duration until one or more events happen. These events could be death, failure, recovery, or any other significant occurrence.





Censoring occurs when the exact time of the event is not known. There are three types of censoring:

- **Right Censoring**: The event has not occurred by the end of the study period.

- **Left Censoring**: The event occurred before the study began.

- **Interval Censoring**: The event occurred within a specific time interval.





The survival function, S(t), represents the probability that an individual survives from the time origin (e.g., diagnosis) to a specified future time t.





The hazard function, h(t), describes the instantaneous rate at which events occur, given that the individual has survived up to time t.





The Kaplan-Meier estimator is a non-parametric statistic used to estimate the survival function from time-to-event data. It is particularly useful when dealing with censored data.



```r

library(survival)



time <- c(5, 8, 12, 15, 20, 25, 30)

status <- c(1, 1, 0, 1, 0, 1, 0) # 1 indicates event occurred, 0 indicates censored



surv_obj <- Surv(time, status)



km_fit <- survfit(surv_obj ~ 1)



plot(km_fit, xlab = "Time", ylab = "Survival Probability", main = "Kaplan-Meier Survival Curve")

```





The Cox proportional-hazards model is a semi-parametric model used to assess the effect of several variables on survival time. It assumes that the hazard ratios are constant over time.



```r

age <- c(45, 50, 60, 70, 80, 85, 90)

treatment <- c(1, 0, 1, 0, 1, 0, 1) # 1 indicates treatment, 0 indicates control



cox_fit <- coxph(surv_obj ~ age + treatment)



summary(cox_fit)

```





Survival analysis is a powerful tool for analyzing time-to-event data, especially in the presence of censoring. The Kaplan-Meier estimator and Cox proportional-hazards model are two fundamental techniques in this field. Understanding these methods allows researchers to gain insights into the factors influencing survival and to make informed decisions based on the data.