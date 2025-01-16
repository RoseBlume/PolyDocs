---
title: 'Inline-Block'
sidebar:
  order: 16
---

 The `display` property in CSS is used to define how an element should be rendered on the web page. There are three commonly used values for the `display` property: `inline`, `block`, and `inline-block`.





An element with `display: inline` is rendered inline with the surrounding content. It does not start on a new line and only takes up as much width as necessary. Examples of inline elements include `<span>`, `<a>`, and `<strong>`. Inline elements are typically used for text and small content pieces that should flow with the surrounding text. Here's an example:



```css

.inline-example {

    display: inline;

    border: 1px solid black;

    padding: 5px;

}

```



In this example, the `.inline-example` class will make the element appear inline with the text around it, with a border and padding applied.





An element with `display: block` is rendered as a block-level element. It starts on a new line and takes up the full width available. Examples of block elements include `<div>`, `<p>`, and `<h1>`. Block elements are used for larger content sections that should stand alone on their own lines. Here's an example:



```css

.block-example {

    display: block;

    border: 1px solid black;

    padding: 10px;

    margin-bottom: 10px;

}

```



In this example, the `.block-example` class will make the element take up the full width of its container, with a border, padding, and margin applied.





An element with `display: inline-block` is rendered inline like an inline element, but it can have a width and height like a block-level element. It starts on a new line only if necessary. Examples of inline-block elements include `<img>`, `<button>`, and `<input>`. Inline-block elements are useful for creating layouts where elements need to be inline but also need to have specific dimensions. Here's an example:



```css

.inline-block-example {

    display: inline-block;

    width: 200px;

    height: 100px;

    border: 1px solid black;

    padding: 10px;

    margin-right: 10px;

}

```



In this example, the `.inline-block-example` class will make the element appear inline with other elements, but it will have a fixed width and height, with a border, padding, and margin applied.







- **Inline** elements do not start on a new line and only take up as much width as necessary. They are typically used for small pieces of content within a line of text.

- **Block** elements start on a new line and take up the full width available. They are used for larger sections of content that should stand alone.





- **Inline-block** elements are similar to inline elements in that they do not start on a new line. However, unlike inline elements, they can have a width and height specified.

- **Inline** elements cannot have a width and height specified, and their dimensions are determined by their content.





- **Inline-block** elements do not start on a new line unless necessary, and they can have a width and height specified.

- **Block** elements always start on a new line and take up the full width available.







Inline elements are best used for styling text or small pieces of content within a line. For example, you might use an inline element to highlight a word within a paragraph:



```html

<p>This is an <span class="highlight">important</span> word.</p>

```





Block elements are best used for larger sections of content that should stand alone. For example, you might use a block element to create a section of a webpage:



```html

<div class="section">

    <h1>Section Title</h1>

    <p>This is a paragraph within the section.</p>

</div>

```





Inline-block elements are useful for creating layouts where elements need to be inline but also need specific dimensions. For example, you might use inline-block elements to create a row of boxes:



```html

<div class="box inline-block-example">Box 1</div>

<div class="box inline-block-example">Box 2</div>

<div class="box inline-block-example">Box 3</div>

```



By using the `display` property with these values, you can control the layout and behavior of elements on your web page, allowing for a wide range of design possibilities.


