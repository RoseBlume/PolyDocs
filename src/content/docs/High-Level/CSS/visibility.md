---
title: 'Visibility'
sidebar:
  order: 21
---

 Visibility in CSS determines whether an element is visible or hidden on a web page. It is controlled using the `visibility` property.

The `visibility` property in CSS is a fundamental tool for controlling the visibility of elements on a web page. It allows developers to hide or show elements without affecting the layout of the page. This property accepts several values, but the most commonly used are `visible` and `hidden`.



- `visible`: The element is displayed as normal. It occupies space on the page and is visible to the user.

- `hidden`: The element is not displayed, but it still occupies space on the page. It is effectively invisible, but its space is preserved.





The basic syntax for using the `visibility` property is straightforward:



```css

element {

    visibility: value;

}

```





The `visibility` property can take on several values, each with its own specific behavior:



- `visible`: This is the default value. The element is visible.

- `hidden`: The element is hidden but still takes up space in the layout.

- `collapse`: This value is specific to table elements. For table rows, columns, column groups, and row groups, `collapse` removes the element from display and also removes the space it occupied. For other elements, `collapse` is treated as `hidden`.

- `initial`: Sets the property to its default value.

- `inherit`: Inherits the property from its parent element.





Here's a simple example of how to use the `visibility` property in CSS:



```css

.my-element {

    visibility: hidden;

}

```



In this example, the element with the class `my-element` will be hidden on the page, but it will still occupy space in the layout.





It's crucial to understand the difference between the `visibility` and `display` properties:



- `visibility: hidden`: The element is not visible, but it still occupies space in the layout. Other elements around it will behave as if the hidden element is still there.

- `display: none`: The element is completely removed from the document flow. It does not occupy any space, and other elements will be laid out as if the element does not exist.







- **Preserving Layout**: Use `visibility: hidden` when you want to hide an element but maintain the layout of the page. For example, you might have a placeholder that you want to hide but keep the space it occupies.

- **Accessibility**: Use `visibility: hidden` when you want to hide an element visually but still make it accessible to screen readers or JavaScript.





- **Removing Elements**: Use `display: none` when you want to completely remove an element from the document flow. This is useful for elements that should not affect the layout of the page at all.

- **Conditional Rendering**: Use `display: none` when you want to conditionally render elements based on certain conditions, such as user interactions or media queries.





Elements hidden with `visibility: hidden` can still be interacted with using JavaScript. For example, you can change their properties, add event listeners, or manipulate them in other ways. However, they will not be visible to the user.





When using `visibility: hidden`, the element is still accessible to screen readers. This can be useful for providing additional context or information to users who rely on assistive technologies. However, if you want to completely hide an element from screen readers as well, you should use `display: none`.





The `visibility` property in CSS is a powerful tool for controlling the visibility of elements on a web page. By understanding the differences between `visibility` and `display`, and knowing when to use each, you can create more flexible and accessible web designs.



Remember to use `visibility` when you want to hide an element while preserving its space, and use `display: none` when you want to remove it from the document flow entirely.


