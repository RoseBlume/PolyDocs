---
title: 'Basics'
sidebar:
  order: 0
---

 

Internal CSS is a way to include CSS styles directly within an HTML document. It is defined within the `<style>` tags in the `<head>` section of the HTML file. This allows you to apply styles specifically to that HTML document.



Example of Internal CSS:

```html

<!DOCTYPE html>

<html>

<head>

    <style>

        body {

            background-color: lightblue;

        }

        h1 {

            color: red;

        }

    </style>

</head>

<body>

    <h1>Welcome to my website!</h1>

    <p>This is an example of internal CSS.</p>

</body>

</html>

```



External CSS is a separate file that contains all the CSS styles for your website. It is linked to the HTML document using the `<link>` tag in the `<head>` section. This approach allows you to keep your CSS code separate from your HTML code, making it easier to maintain and reuse styles across multiple HTML files.



Example of External CSS:

HTML file (`index.html`):

```html

<!DOCTYPE html>

<html>

<head>

    <link rel="stylesheet" href="styles.css">

</head>

<body>

    <h1>Welcome to my website!</h1>

    <p>This is an example of external CSS.</p>

</body>

</html>

```



CSS file (`styles.css`):

```css

body {

    background-color: lightblue;

}

h1 {

    color: red;

}

```



Inline CSS is applied directly to individual HTML elements using the `style` attribute. This allows you to define styles inline with the HTML tags themselves. While it can be useful for making quick style changes, it is generally not recommended for larger projects as it can make the HTML code harder to read and maintain.



Example of Inline CSS:

```html

<!DOCTYPE html>

<html>

<body>

    <h1 style="color: red;">Welcome to my website!</h1>

    <p style="font-size: 18px;">This is an example of inline CSS.</p>

</body>

</html>

```



By using these different types of CSS, you have the flexibility to choose the most appropriate approach for your specific needs.