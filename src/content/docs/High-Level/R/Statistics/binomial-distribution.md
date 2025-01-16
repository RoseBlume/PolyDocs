---
title: 'Binomial Distribution'
sidebar:
  order: 5
---

 

The binomial distribution is a discrete probability distribution that models the number of successes in a fixed number of independent Bernoulli trials, each with the same probability of success. In this section, we will explore how to work with the binomial distribution in R.





A binomial experiment is characterized by the following properties:

- The experiment consists of `n` independent trials.

- Each trial has only two possible outcomes: success or failure.

- The probability of success, denoted by `p`, remains constant for each trial.

- The probability of failure is `1 - p`.



The probability of observing exactly `k` successes in `n` trials is given by the binomial probability formula:



\[ P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} \]



where \(\binom{n}{k}\) is the binomial coefficient.





R provides several functions to work with the binomial distribution. The most commonly used functions are:



- `dbinom(x, size, prob)`: Probability mass function (PMF) - gives the probability of getting exactly `x` successes in `size` trials with probability `prob` of success on each trial.

- `pbinom(q, size, prob)`: Cumulative distribution function (CDF) - gives the probability of getting at most `q` successes in `size` trials with probability `prob` of success on each trial.

- `qbinom(p, size, prob)`: Quantile function - gives the number of successes corresponding to a given cumulative probability `p`.

- `rbinom(n, size, prob)`: Random generation - generates `n` random numbers from a binomial distribution with `size` trials and probability `prob` of success on each trial.





Let's calculate the probability of getting exactly 3 successes in 10 trials with a success probability of 0.5:



```r

n <- 10

k <- 3

p <- 0.5



probability <- dbinom(k, n, p)

print(probability)

```





To calculate the probability of getting at most 3 successes in 10 trials with a success probability of 0.5:



```r

n <- 10

q <- 3

p <- 0.5



cumulative_probability <- pbinom(q, n, p)

print(cumulative_probability)

```





To generate 5 random numbers from a binomial distribution with 10 trials and a success probability of 0.5:



```r

n <- 5

size <- 10

p <- 0.5



random_numbers <- rbinom(n, size, p)

print(random_numbers)

```





In this section, we have learned about the binomial distribution and how to work with it in R. We covered the basic properties of the binomial distribution and demonstrated how to use R functions to calculate probabilities, cumulative probabilities, and generate random numbers from a binomial distribution.
