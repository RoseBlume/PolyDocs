---
title: 'Z-Index'
sidebar:
  order: 14
---

 The `z-index` property in CSS is a powerful tool that controls the vertical stacking order of elements that overlap on a webpage. This property is essential for managing the visibility and layering of elements, ensuring that the most important content is accessible to users. However, it only works on elements that have a position value other than `static`, such as `relative`, `absolute`, `fixed`, or `sticky`.



To fully grasp the concept of `z-index`, it's crucial to understand stacking contexts. A stacking context is an element that contains a group of layers with a specific stacking order. When an element is positioned and has a `z-index` value other than `auto`, it forms a new stacking context. Each stacking context is treated independently, meaning that elements within a stacking context are stacked relative to each other without affecting the stacking order of elements in other stacking contexts.



There are several ways to create a new stacking context:

- Setting a `z-index` value on a positioned element.

- Applying an `opacity` value less than 1.

- Using CSS properties like `transform`, `filter`, `perspective`, `clip-path`, and `mask`.



These properties not only create a new stacking context but also influence the rendering and visual effects of the elements.



By default, elements on a webpage are stacked in a specific order from bottom to top:

1. The background and borders of the root element.

2. Descendant non-positioned elements in the order they appear in the HTML.

3. Descendant positioned elements in the order they appear in the HTML.



This default stacking order ensures that background elements are rendered first, followed by non-positioned and then positioned elements.



To illustrate how `z-index` works, consider the following example:



```css

.container {

    position: relative;

}



.box1 {

    position: absolute;

    top: 20px;

    left: 30px;

    z-index: 1; /* This will appear below .box2 */

}



.box2 {

    position: absolute;

    top: 40px;

    left: 50px;

    z-index: 2; /* This will appear above .box1 */

}

```



In this example, `.box2` will appear above `.box1` because it has a higher `z-index` value. This demonstrates how `z-index` can be used to control the layering of overlapping elements.



Elements can also have a negative `z-index`, which places them behind other elements with a `z-index` of 0 or higher. For example:



```css

.background {

    position: absolute;

    top: 0;

    left: 0;

    z-index: -1; /* This will appear behind elements with z-index 0 or higher */

}

```



This technique is useful for creating background elements that should appear behind all other content.



The `z-index` property is particularly useful in various scenarios, such as:

- **Modals and Popups:** Ensuring they appear above other content to capture user attention.

- **Tooltips:** Displaying above other elements to provide additional information.

- **Overlapping Images:** Controlling which image appears on top to create visually appealing designs.



By mastering the `z-index` property, you can effectively manage the layering of elements on your webpage, ensuring that the most important content is always visible and accessible to users.



Understanding and using the `z-index` property effectively can help manage the layering of elements on a webpage, ensuring that the most important content is visible and accessible to users.
