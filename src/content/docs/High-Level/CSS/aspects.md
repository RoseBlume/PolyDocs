---
title: 'Dimensions'
sidebar:
  order: 6
---

 In CSS, an objects dimensions can be specified using the `width` and `height` properties.



```css

p {

    width: 500px;

    height: 700px;

}

```



Furthermore, these properties can use the `vw`, `vy`, and `%` units.

The `vw` unit changes an elements width to the number of pixels that occupies the given numbers percentage of the screen width. For example if the width is `50vw` the object will take up 50% of the screens width.



This shows a paragraph that has a height and width equal to that of the screens total width.

```css

p {

    width: 50vw;

    height: 50vw;

}

```



One can also specify the `height` and `width` properties as a percentage



```css

p {

    width: 50%;

    height: 50%;

}

```