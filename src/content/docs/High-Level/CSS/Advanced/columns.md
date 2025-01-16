---
title: 'Multiple Columns'
sidebar:
  order: 22
---

 

Multiple columns in CSS and HTML allow you to create a layout where content is divided into multiple columns, similar to a newspaper or magazine. This can be useful for displaying long blocks of text or organizing content in a more visually appealing way.





To create multiple columns, you can use the CSS `column-count` property. This property specifies the number of columns you want to divide your content into. For example, if you want to divide your content into three columns, you can set `column-count: 3;`.





Here's an example of how you can use internal CSS to create multiple columns:



```html

<!DOCTYPE html>

<html>

<head>

<style>

    .column-container {

        column-count: 3;

        column-gap: 20px;

    }

</style>

</head>

<body>

    <div class="column-container">

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc.</p>

        <p>Nullam auctor, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc.</p>

        <p>Phasellus euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc.</p>

    </div>

</body>

</html>

```



In the example above, the `column-container` class is applied to a `<div>` element that wraps the content we want to divide into columns. The `column-count` property is set to 3, which creates three columns. The `column-gap` property is used to add some spacing between the columns.







The `column-width` property specifies the ideal width of each column. The browser will then determine the optimal number of columns to fit within the container. For example:



```css

.column-container {

    column-width: 200px;

}

```





The `column-rule` property allows you to add a rule (line) between columns. This can help to visually separate the columns. For example:



```css

.column-container {

    column-count: 3;

    column-gap: 20px;

    column-rule: 1px solid #000;

}

```





The `column-span` property allows an element to span across multiple columns. This can be useful for headings or other elements that should not be confined to a single column. For example:



```css

.heading {

    column-span: all;

}

```



```html

<div class="column-container">

    <h2 class="heading">Heading Spanning All Columns</h2>

    <p>Content in multiple columns...</p>

</div>

```





Most modern browsers support the CSS multi-column layout properties. However, it is always a good practice to check for compatibility and provide fallbacks if necessary.





By using multiple columns, you can create a more visually appealing and organized layout for your content in CSS and HTML. Experiment with the various properties to achieve the desired layout for your project.


