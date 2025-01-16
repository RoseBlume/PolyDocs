---
title: 'Head'
sidebar:
  order: 3
---

 

The `<head>` element is a crucial part of an HTML document. It contains metadata and other non-visible information about the document. In this chapter, we will explore some commonly used elements that can be nested within the `<head>` element.





The `<title>` element specifies the title of the document, which is displayed in the browser's title bar or tab.



```html

<title>My Website</title>

```



This sets the title of the webpage to "My Website".





The `<meta>` element is used to provide metadata about the HTML document, such as character encoding, viewport settings, and keywords.



```html

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="A brief description of the webpage">

<meta name="keywords" content="HTML, CSS, JavaScript">

<meta name="author" content="John Doe">

```



- The first `<meta>` element sets the character encoding to UTF-8, ensuring proper rendering of special characters.

- The second `<meta>` element sets the viewport to the device's width and initial scale, making the webpage responsive on different devices.

- The third `<meta>` element provides a brief description of the webpage, which can be used by search engines.

- The fourth `<meta>` element specifies keywords related to the content of the webpage, aiding in search engine optimization (SEO).

- The fifth `<meta>` element specifies the author of the document.





The `<link>` element is used to link external stylesheets, icon files, or other external resources to the HTML document.



```html

<link rel="stylesheet" href="styles.css">

<link rel="icon" href="favicon.ico">

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">

```



- The first `<link>` element links an external CSS file called "styles.css" to the HTML document, allowing you to style the webpage.

- The second `<link>` element links a favicon file (an icon displayed in the browser's tab) called "favicon.ico" to the HTML document.

- The third `<link>` element preconnects to the Google Fonts API, which can improve loading performance.

- The fourth `<link>` element links a specific Google Font (Roboto) to the HTML document, allowing you to use this font in your styles.





The `<base>` element specifies the base URL for all relative URLs within the document.



```html

<base href="https://example.com/">

```



This sets the base URL for all relative URLs in the document to "https://example.com/". So, if you have an anchor tag with a relative URL like `<a href="/about">About</a>`, it will resolve to "https://example.com/about".





The `<style>` element allows you to include internal CSS styles directly within the HTML document.



```html

<style>

    body {

        font-family: 'Roboto', sans-serif;

        background-color: #f0f0f0;

    }

</style>

```



This `<style>` element includes internal CSS that sets the font family to Roboto and the background color of the body to a light gray.





The `<script>` element allows you to include or reference JavaScript code within the HTML document.



```html

<script src="scripts.js" defer></script>

```



This `<script>` element references an external JavaScript file called "scripts.js" and uses the `defer` attribute to ensure the script is executed after the HTML document has been fully parsed.



These are just a few examples of elements that can be nested within the `<head>` element. Remember to close the `<head>` element with `</head>` after including all necessary elements.
