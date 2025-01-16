---
title: 'Web Data'
sidebar:
  order: 5
---

 In this chapter, we will explore how to work with web data in R. Web data can come from various sources such as APIs, web scraping, and online datasets. We will cover the following topics:





APIs (Application Programming Interfaces) allow you to access data from web services. In R, you can use packages like `httr` and `jsonlite` to interact with APIs.





```r

library(httr)

library(jsonlite)



url <- "https://api.example.com/data"



response <- GET(url)



data <- fromJSON(content(response, "text"))



print(data)

```





Web scraping involves extracting data from websites. The `rvest` package in R makes it easy to scrape web data.





```r

library(rvest)



url <- "https://example.com"



web_page <- read_html(url)



data <- web_page %>%

    html_node("table") %>%

    html_table()



print(data)

```





You can also read datasets directly from the web using functions like `read.csv` for CSV files or `read_excel` for Excel files.





```r

url <- "https://example.com/data.csv"



data <- read.csv(url)



print(data)

```





In this chapter, we covered how to access web data in R through APIs, web scraping, and reading online datasets. These techniques allow you to gather and analyze data from various online sources, enhancing your data analysis capabilities in R.