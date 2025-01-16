---
title: 'Paragraphs'
sidebar:
  order: 5
---

 In HTML, the `<p>` tag is fundamental for defining paragraphs. As a block-level element, it naturally begins on a new line and spans the full width of its container. This behavior ensures that paragraphs are visually distinct, with most browsers adding default margins before and after the text to enhance readability.





Consider the following example, which demonstrates the use of the `<p>` tag within an HTML document:



```html

<!DOCTYPE html>

<html>

<head>

    <title>Paragraph Example</title>

</head>

<body>

    <h1>This is a heading</h1>

    <p>This is a paragraph.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 

    sed do eiusmod tempor incididunt ut labore et dolore magna 

    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 

    ullamco laboris nisi ut aliquip ex ea commodo consequat. 

    Duis aute irure dolor in reprehenderit in voluptate velit 

    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 

    occaecat cupidatat non proident, sunt in culpa qui officia 

    deserunt mollit anim id est laborum.</p>

</body>

</html>

```





- The `<!DOCTYPE html>` declaration specifies the HTML version and ensures proper rendering.

- The `<html>` tag serves as the root element of the document.

- Within the `<head>` section, meta-information such as the document's title is defined.

- The `<body>` section contains the visible content, including headings and paragraphs.

- The `<h1>` tag denotes a primary heading.

- Each `<p>` tag encapsulates a paragraph, ensuring that text is neatly organized and separated.





When viewed in a browser, the content within `<p>` tags appears as distinct paragraphs, each separated by space. This spacing is governed by the browser's default stylesheet but can be tailored using CSS.





CSS allows for extensive customization of paragraph appearance. For instance, you can adjust margins, padding, font size, and color:



```css

p {

    margin: 20px 0;

    font-size: 16px;

    color: #333;

}

```



In this example, each paragraph receives a top and bottom margin of 20 pixels, a font size of 16 pixels, and a dark gray text color.



By mastering the `<p>` tag and its styling options, you can create well-structured and visually appealing HTML documents.
