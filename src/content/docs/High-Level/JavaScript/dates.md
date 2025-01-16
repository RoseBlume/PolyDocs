---
title: 'Dates'
sidebar:
  order: 11
---

 

In JavaScript, dates can be represented using the `Date` object. This object provides various methods to work with dates and times.





To create a new date object in JavaScript, you can use the `new Date()` constructor. By default, this will create a date object representing the current date and time. For example:



```javascript

const currentDate = new Date();

console.log(currentDate);

```



This code snippet will output the current date and time when executed. 



You can also create a date object by passing specific values for the year, month, day, hour, minute, second, and millisecond. It's important to note that the month is zero-indexed, meaning January is represented by 0, February by 1, and so on. Here's an example:



```javascript

const specificDate = new Date(2022, 0, 1, 12, 0, 0, 0);

console.log(specificDate);

```



In this example, the date object represents January 1, 2022, at 12:00:00 PM.





Once you have a date object, you can perform various operations on it. Let's explore some common operations you might find useful.





You can extract different components of the date and time using various methods provided by the `Date` object. For instance:



```javascript

const year = currentDate.getFullYear();

const month = currentDate.getMonth(); // zero-indexed

const day = currentDate.getDate();

const hour = currentDate.getHours();

const minute = currentDate.getMinutes();

const second = currentDate.getSeconds();

const millisecond = currentDate.getMilliseconds();

```



These methods allow you to retrieve the year, month, day, hour, minute, second, and millisecond from a date object.





Formatting dates as strings can be done using methods like `toDateString()`, `toISOString()`, and `toLocaleDateString()`. Here are some examples:



```javascript

const formattedDate = currentDate.toDateString();

console.log(formattedDate); // e.g., "Mon Jan 01 2022"



const isoString = currentDate.toISOString();

console.log(isoString); // e.g., "2022-01-01T12:00:00.000Z"



const localeString = currentDate.toLocaleDateString();

console.log(localeString); // e.g., "1/1/2022" in the US

```



These methods provide different formats for representing dates as strings.





You can perform arithmetic operations on dates, such as adding or subtracting days. For example, to get the date for tomorrow:



```javascript

const tomorrow = new Date();

tomorrow.setDate(currentDate.getDate() + 1);

console.log(tomorrow);

```



This code snippet creates a new date object representing the day after the current date.





Comparing dates can be done using standard comparison operators. Here's an example:



```javascript

const date1 = new Date(2022, 0, 1);

const date2 = new Date(2022, 0, 2);



if (date1 < date2) {

    console.log("date1 is before date2");

} else if (date1 > date2) {

    console.log("date1 is after date2");

} else {

    console.log("date1 and date2 are equal");

}

```



This code compares two date objects and logs the result.





The `Date` object provides many more methods and properties to work with dates and times. Some of these include:



- `getTime()`: Returns the number of milliseconds since January 1, 1970.

- `setTime(milliseconds)`: Sets the date and time by the number of milliseconds since January 1, 1970.

- `getDay()`: Returns the day of the week (0 for Sunday, 1 for Monday, etc.).

- `toUTCString()`: Converts the date to a string, using the UTC time zone.



Here are some examples:



```javascript

const timestamp = currentDate.getTime();

console.log(timestamp);



const newDate = new Date();

newDate.setTime(timestamp);

console.log(newDate);



const dayOfWeek = currentDate.getDay();

console.log(dayOfWeek); // e.g., 0 for Sunday



const utcString = currentDate.toUTCString();

console.log(utcString); // e.g., "Sat, 01 Jan 2022 12:00:00 GMT"

```



These methods provide additional functionality for working with dates and times in JavaScript. The `Date` object is a powerful tool for handling dates and times in your applications.
