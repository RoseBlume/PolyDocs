---
title: 'Pseudo-Classes'
sidebar:
  order: 19
---

 Pseudo classes in CSS allow you to select and style elements based on their state or position within the document tree. They are denoted by a colon followed by the pseudo class name.



Here are some commonly used pseudo classes:



1. :hover - Selects an element when the mouse pointer is over it.

Example:

```css

a:hover {

    color: red;

}

```



2. :active - Selects an element when it is being activated (clicked or tapped).

Example:

```css

button:active {

    background-color: blue;

}

```



3. :focus - Selects an element when it has focus (e.g., when it is selected by keyboard navigation).

Example:

```css

input:focus {

    border-color: green;

}

```



4. :first-child - Selects the first child element of its parent.

Example:

```css

ul li:first-child {

    font-weight: bold;

}

```



5. :nth-child() - Selects elements based on their position within their parent.

Example:

```css

ul li:nth-child(odd) {

    background-color: lightgray;

}

```



These are just a few examples of the many pseudo classes available in CSS. They provide powerful ways to style elements based on various conditions and states.