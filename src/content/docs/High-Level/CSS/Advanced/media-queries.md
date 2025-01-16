---
title: 'Media Queries'
sidebar:
  order: 27
---

 

Media Queries in CSS are a powerful tool that allows you to apply different styles based on various conditions. They are a cornerstone of responsive web design, enabling you to create a seamless user experience across different devices and screen sizes. In this chapter, we will explore some detailed examples and additional features of media queries.







The `prefers-color-scheme` media feature allows you to target devices that have a specific color scheme preference. For instance, you can apply different styles for devices that prefer a light or dark color scheme. Here's an example:



```css

@media (prefers-color-scheme: dark) {

    body {

        background-color: #000; /* Set background to black for dark mode */

        color: #fff; /* Set text color to white for dark mode */

    }

}

```





You can also use media queries to apply styles based on the orientation of the device. For example, you can change the layout depending on whether the device is in landscape or portrait mode:



```css

@media (orientation: landscape) {

    body {

        display: flex;

        flex-direction: row;

    }

}



@media (orientation: portrait) {

    body {

        display: flex;

        flex-direction: column;

    }

}

```





Another common use of media queries is to apply styles based on the width of the screen. This is particularly useful for creating responsive designs that adapt to different screen sizes:



```css

@media (max-width: 600px) {

    body {

        font-size: 14px;

    }

}

```





You can target devices with high-resolution screens using the `min-resolution` media feature. This is useful for serving high-resolution images to devices that can display them:



```css

@media (min-resolution: 2dppx) {

    img {

        content: url(high-res-image.png);

    }

}

```





Media queries can also be used to apply styles based on the aspect ratio of the device. This can help you create layouts that look good on both wide and narrow screens:



```css

@media (min-aspect-ratio: 16/9) {

    .container {

        width: 80%;

    }

}



@media (max-aspect-ratio: 4/3) {

    .container {

        width: 100%;

    }

}

```





You can use media queries to apply styles based on the user's input method. For example, you can change the appearance of links when the user hovers over them with a mouse:



```css

@media (hover: hover) {

    a:hover {

        text-decoration: underline;

    }

}



@media (pointer: fine) {

    button {

        padding: 10px 20px;

    }

}

```





The `display-mode` media feature allows you to apply styles based on the display mode of the application. For example, you can create a full-screen layout for applications running in full-screen mode:



```css

@media (display-mode: fullscreen) {

    .fullscreen {

        width: 100vw;

        height: 100vh;

    }

}

```





You can combine multiple media features to create more specific styles. For example, you can apply styles for devices that have a minimum width of 600px and prefer a dark color scheme:



```css

@media (min-width: 600px) and (prefers-color-scheme: dark) {

    body {

        background-color: #333;

        color: #ccc;

    }

}

```



By using media queries, you can create a responsive design that adapts to different devices and user preferences, providing a better user experience.
