---
title: 'Tables'
sidebar:
  order: 10
---

 

In this section, we will explore the use of tables in HTML, which are essential for displaying data in a structured format of rows and columns. Understanding how to create and style tables will enable you to present information clearly and effectively on your web pages.





Tables in HTML are composed of several key elements, each serving a specific purpose:



- The `<table>` tag represents the table element and contains all other table elements.

- The `<th>` tag represents the table header element. It is used to define the header cells in the table, which are typically displayed in bold and centered.

- The `<tr>` tag represents the table row element. It is used to define a row in the table and typically contains the table header (`<th>`) and table data (`<td>`) elements.

- The `<td>` tag represents the table data element. It is used to define a cell in the table that contains data.





By default, HTML tables do not have borders. To add borders to your table, you can use CSS. For example, you can add a border to the table, table rows, and table cells using the `border` property in CSS.





Let's create a simple HTML table to display student names and their scores. Here is the HTML code:



```html

<table>

  <tr>

    <th>Student</th>

    <th>Score</th>

  </tr>

  <tr>

    <td>Maria</td>

    <td>8</td>

  </tr>

  <tr>

    <td>Jeff</td>

    <td>4</td>

  </tr>

  <tr>

    <td>Kaden</td>

    <td>10</td>

  </tr>

</table>

```





To enhance the appearance of our table, we can add borders using CSS. Here is the CSS code to achieve this:



```css

table, th, td {

  border: 1px solid black;

  border-collapse: collapse;

}

th, td {

  padding: 10px;

  text-align: left;

}

```



This CSS will add a 1-pixel solid black border around the table, table headers, and table data cells. The `border-collapse: collapse;` property ensures that the borders are collapsed into a single border, making the table look cleaner. The `padding` property adds space inside each cell, and the `text-align` property aligns the text to the left.





Tables are a powerful way to display data in a structured format. By understanding the basic table elements and how to style them with CSS, you can create clean and organized tables for your web pages. This knowledge will help you present information in a clear and professional manner, enhancing the overall user experience.
