---
title: 'Rounded Borders'
sidebar:
  order: 25
---

 In CSS, rounded corners can be achieved using the `border-radius` property. This property allows you to round the corners of an element, giving it a more visually appealing look.



To apply rounded corners using shorthand notation, you can use the following syntax:



```css

selector {

    border-radius: 10px;

}

```



This will apply rounded corners with a radius of 10 pixels to all four corners of the element.



If you want to specify different radii for each corner, you can use the longhand notation. Here's an example:



```css

selector {

    border-top-left-radius: 10px;

    border-top-right-radius: 20px;

    border-bottom-right-radius: 30px;

    border-bottom-left-radius: 40px;

}

```



In this example, each corner has a different radius, allowing you to create more complex shapes.



To demonstrate the usage of rounded corners, here's an example of an HTML document with internal CSS:



```html

<!DOCTYPE html>

<html>

<head>

    <style>

        body {

            background-color: #f2f2f2;

        }

        

        .box {

            width: 200px;

            height: 200px;

            background-color: #fff;

            border: 1px solid #ccc;

            border-radius: 10px;

            margin: 20px;

        }

    </style>

</head>

<body>

    <div class="box"></div>

</body>

</html>

```



In this example, a `div` element with the class `box` is styled with rounded corners using the shorthand notation. The `border-radius` property is set to `10px`, giving the element rounded corners.
