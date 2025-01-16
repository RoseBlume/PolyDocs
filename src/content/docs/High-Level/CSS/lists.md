---
title: 'Lists'
sidebar:
  order: 12
---

 





CSS provides a wide range of options for customizing lists. You can modify the appearance of list items, change bullet styles, and even create your own custom markers. Let's explore some of these customization techniques in detail.





The default bullet style of an unordered list can be changed using the `list-style-type` property. This property allows you to specify different types of bullet points, such as circles, squares, or none. For example, to use square bullets, you can add the following CSS rule:



```css

ul {

    list-style-type: square;

}

```



Other possible values for `list-style-type` include `disc`, `circle`, and `none`. Each of these values changes the appearance of the bullet points in the list.





The `list-style-type` property is a versatile tool in CSS that allows you to control the appearance of list item markers. By default, unordered lists (`<ul>`) use a disc-shaped bullet, but this can be easily changed to suit your design needs. For instance, if you prefer a square bullet, you can set the `list-style-type` to `square`:



```css

ul {

    list-style-type: square;

}

```



This simple change can significantly alter the look and feel of your lists, making them more aligned with your design preferences.





CSS also allows you to create your own custom markers for lists. You can use images, icons, or even Unicode characters as markers. This can be achieved using the `list-style-image` property. Here's an example of using a custom image as a bullet:



```css

ul {

    list-style-image: url('bullet.png');

}

```



In addition to images, you can use the `::before` pseudo-element to add custom content before each list item. For example, you can use Unicode characters to create unique markers:



```css

ul li::before {

    content: '\2022'; /* Unicode for bullet */

    color: red; /* Custom color for the bullet */

    font-size: 20px; /* Custom size for the bullet */

    margin-right: 10px; /* Space between bullet and text */

}

```





For more advanced customization, you can combine multiple CSS properties and techniques. For example, you can use the `counter-reset` and `counter-increment` properties to create custom counters for list items:



```css

ol.custom-counter {

    counter-reset: custom-counter;

}



ol.custom-counter li {

    counter-increment: custom-counter;

}



ol.custom-counter li::before {

    content: counter(custom-counter) '. ';

    font-weight: bold;

    color: blue;

}

```



This example creates a custom counter for an ordered list, with each list item displaying a bold, blue number followed by a period.





With CSS, you have the power to customize lists in various ways. Whether you want to change bullet styles, modify numbering formats, or create custom markers, CSS provides the flexibility to make your lists visually appealing and unique. By combining different CSS properties and techniques, you can achieve a wide range of effects and tailor the appearance of your lists to match your design requirements.
