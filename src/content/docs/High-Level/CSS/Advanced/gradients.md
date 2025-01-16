---
title: 'Gradients'
sidebar:
  order: 23
---

 

Gradients in CSS are a powerful tool that allows you to create smooth transitions between two or more colors. They add depth and visual interest to your web pages, making them more engaging and dynamic. In this chapter, we will explore how to use gradients in CSS and the different types of gradients available.





Gradients can be applied to various CSS properties such as backgrounds, borders, and text. They are defined using the `linear-gradient`, `radial-gradient`, `conic-gradient`, and `repeating-linear-gradient` functions. Let's start with a simple example to illustrate how gradients work in CSS.





Consider the following HTML and CSS code:



```html

<!DOCTYPE html>

<html>

<head>

    <title>Gradients Example</title>

    <style>

        body {

            background: linear-gradient(to right, #ff0000, #0000ff);

        }

    </style>

</head>

<body>

    <h1>Gradients Example</h1>

    <p>This is an example of using gradients in CSS.</p>

</body>

</html>

```



In this example, we use the `linear-gradient` function to create a gradient that transitions from red (#ff0000) to blue (#0000ff) horizontally from left to right. You can customize the direction and colors of the gradient to achieve different effects. Remember to place the CSS code within the `<style>` tags in the `<head>` section of your HTML document. This is called internal CSS, as the styles are defined within the HTML file itself.





There are several types of gradients you can use in CSS, each with its own unique properties and effects. Let's explore each type in detail.





Linear gradients transition colors along a straight line. You can control the direction of the gradient using angles or keywords like `to right`, `to left`, `to top`, and `to bottom`.





```css

background: linear-gradient(45deg, #ff0000, #0000ff);

```



This creates a gradient at a 45-degree angle from red to blue.





Radial gradients radiate from an origin point, creating a circular or elliptical gradient. You can specify the shape, size, and position of the gradient.





```css

background: radial-gradient(circle, #ff0000, #0000ff);

```



This creates a circular gradient from red to blue.





Conic gradients rotate colors around a center point, similar to the way a pie chart is colored.





```css

background: conic-gradient(from 0deg, #ff0000, #0000ff, #00ff00);

```



This creates a conic gradient starting from 0 degrees, transitioning through red, blue, and green.





Repeating gradients allow you to create patterns by repeating the gradient.





```css

background: repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #0000ff 10px, #0000ff 20px);

```



This creates a repeating linear gradient with red and blue stripes.





You can layer multiple gradients to create complex designs.





```css

background: linear-gradient(to right, #ff0000, #0000ff), radial-gradient(circle, #00ff00, #0000ff);

```



This layers a linear gradient over a radial gradient.





Gradients are a versatile and visually appealing way to enhance your web designs. By experimenting with different color combinations, gradient directions, and types of gradients, you can create unique and engaging effects that will captivate your audience. In the next chapter, we will delve deeper into advanced CSS techniques to further enhance your web design skills.