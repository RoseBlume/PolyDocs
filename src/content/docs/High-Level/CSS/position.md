---
title: 'Position'
sidebar:
  order: 13
---

 

The `position` property in CSS is a powerful tool that allows you to control the placement of elements on a web page. By understanding and utilizing its five possible values, you can manipulate the layout and behavior of elements to create dynamic and visually appealing designs.





The `static` value is the default for the `position` property. Elements with `position: static` are positioned according to the normal flow of the document. They are unaffected by the `top`, `bottom`, `left`, `right`, or `z-index` properties. This means that the element will appear in the order it is written in the HTML, maintaining its default position without any offsets.





When you set an element's position to `relative`, it is positioned relative to its normal position in the document flow. You can then use the `top`, `bottom`, `left`, and `right` properties to offset the element from its original position. Importantly, this does not affect the layout of other elements on the page; they will still behave as if the relative element is in its original position.



Example:

```css

.my-element {

    position: relative;

    top: 20px;

    left: 10px;

}

```

In this example, `.my-element` will be moved 20px down and 10px to the right from where it would normally be.





Elements with `position: fixed` are positioned relative to the viewport, meaning they will always stay in the same place even if the page is scrolled. This is particularly useful for creating elements that need to remain visible at all times, such as a fixed header or a floating action button. The `top`, `bottom`, `left`, and `right` properties can be used to specify the exact position of the element within the viewport.



Example:

```css

.my-element {

    position: fixed;

    top: 0;

    right: 0;

}

```

Here, `.my-element` will be fixed to the top-right corner of the viewport.





Elements with `position: absolute` are positioned relative to their nearest positioned ancestor (i.e., the nearest ancestor with a position value other than `static`). If there is no such ancestor, the element will be positioned relative to the initial containing block, which is usually the `<html>` element. The `top`, `bottom`, `left`, and `right` properties can be used to specify the exact position of the element.



Example:

```css

.container {

    position: relative;

    width: 200px;

    height: 200px;

}



.my-element {

    position: absolute;

    top: 50px;

    left: 50px;

}

```

In this example, `.my-element` will be positioned 50px from the top and 50px from the left of its nearest positioned ancestor, which is `.container`.



Absolute positioning removes the element from the normal document flow, meaning it does not affect the layout of other elements on the page. This can be useful for creating complex layouts where elements need to overlap or be precisely placed within a container.





Elements with `position: sticky` are positioned based on the user's scroll position. They behave like `relative` elements until the user scrolls to a certain point, at which they become `fixed` and stay in place. This is useful for creating sticky headers or navigation bars that stick to the top of the page when scrolling. The `top`, `bottom`, `left`, and `right` properties can be used to specify the offset from the scrolling container.



Example:

```css

.my-element {

    position: sticky;

    top: 20px;

}

```

In this example, `.my-element` will act as a relatively positioned element until the user scrolls down 20px, at which point it will become fixed and stay 20px from the top of the viewport.





- **Z-Index**: The `z-index` property can be used in conjunction with `position` to control the stacking order of elements. Elements with a higher `z-index` will appear above those with a lower `z-index`.

- **Containing Block**: The containing block for an absolutely positioned element is the nearest ancestor with a position other than `static`. For fixed elements, the containing block is the viewport.

- **Overflow**: Positioned elements can affect the overflow behavior of their containing block. For example, an absolutely positioned element can extend outside the bounds of its containing block if the `overflow` property is set to `visible`.



Mastering the `position` property and its values is crucial for creating complex layouts and ensuring that elements behave as expected in different scenarios. By gaining a deep understanding of these concepts, you can achieve greater control over the design and functionality of your web pages.
