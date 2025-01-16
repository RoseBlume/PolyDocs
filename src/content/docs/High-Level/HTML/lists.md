---
title: 'Lists'
sidebar:
  order: 11
---

 Ordered lists are a great way to present items in a specific sequence. They use the `<ol>` element, and each item within the list is wrapped in an `<li>` element. By default, the items are numbered starting from 1, making it perfect for instructions, rankings, or any scenario where the order matters.



Here's an example of an ordered list in HTML:



```html

<h2>This is an ordered list</h2>

<ol>

  <li>This is number 1</li>

  <li>This is number 2</li>

  <li>This is number 3</li>

</ol>

```



If you need to start the numbering from a different value, you can use the `start` attribute:



```html

<h2>This is an ordered list starting from 5</h2>

<ol start="5">

  <li>This is number 5</li>

  <li>This is number 6</li>

  <li>This is number 7</li>

</ol>

```



Unordered lists are used when the order of items is not important. They use the `<ul>` element, and each item is also wrapped in an `<li>` element. Instead of numbers, each item is typically prefixed with a bullet point.



Here's an example of an unordered list in HTML:



```html

<h2>This is an unordered list</h2>

<ul>

  <li>This is item 1</li>

  <li>This is item 2</li>

  <li>This is item 3</li>

</ul>

```



You can customize the bullet points using CSS to change their appearance:



```html

<h2>This is a customized unordered list</h2>

<ul style="list-style-type: square;">

  <li>This is item 1</li>

  <li>This is item 2</li>

  <li>This is item 3</li>

</ul>

```



Description lists are ideal for defining terms and their descriptions. They use the `<dl>` element, with each term wrapped in a `<dt>` element and each description in a `<dd>` element. This format is particularly useful for glossaries, definitions, or metadata.



Here's an example of a description list in HTML:



```html

<h2>This is a description list</h2>

<dl>

  <dt>Espresso</dt>

  <dd>- black hot drink</dd>

  <dt>Milk</dt>

  <dd>- white cold drink</dd>

</dl>

```



You can also group multiple descriptions under a single term:



```html

<h2>This is a grouped description list</h2>

<dl>

  <dt>Coffee</dt>

  <dd>- black hot drink</dd>

  <dd>- can be served with milk</dd>

  <dt>Tea</dt>

  <dd>- hot drink</dd>

  <dd>- can be served with lemon</dd>

</dl>

```
