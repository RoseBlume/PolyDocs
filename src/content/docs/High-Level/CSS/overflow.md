---
title: 'Overflow'
sidebar:
  order: 15
---

 



In the world of web design, managing how content behaves when it exceeds the boundaries of its container is a fundamental skill. This is where the concept of overflow in CSS comes into play. The overflow property in CSS allows you to control the display of content that spills out of its container, ensuring your designs remain both functional and visually appealing.





The `overflow` property in CSS can be set to one of several values, each dictating a different behavior for overflowing content:



1. **`visible` (default)**: When set to `visible`, content is not clipped and may overflow its container. This is the default behavior, meaning that if no `overflow` property is specified, the content will be allowed to overflow the container.

2. **`hidden`**: Setting overflow to `hidden` clips the content that overflows, making it invisible. This is useful when you want to hide any content that exceeds the container's boundaries.

3. **`scroll`**: With `scroll`, content that overflows is clipped, but a scrollbar is added to allow scrolling. This ensures that all content can be accessed by the user, even if it exceeds the container's size.

4. **`auto`**: The `auto` value clips content if it overflows and adds a scrollbar only if necessary. This is a more flexible option compared to `scroll`, as it only adds a scrollbar when the content actually overflows.





To better understand how the `overflow` property works, let's look at some examples:



```css

.container {

    width: 200px;

    height: 100px;

    border: 1px solid black;

    overflow: hidden;

}



.container-overflow-visible {

    width: 200px;

    height: 100px;

    border: 1px solid black;

    overflow: visible;

}



.container-overflow-scroll {

    width: 200px;

    height: 100px;

    border: 1px solid black;

    overflow: scroll;

}



.container-overflow-auto {

    width: 200px;

    height: 100px;

    border: 1px solid black;

    overflow: auto;

}

```





1. **Hidden Overflow**:

   ```css

   .container {

       width: 200px;

       height: 100px;

       border: 1px solid black;

       overflow: hidden;

   }

   ```

   In this example, the `.container` element has `overflow: hidden`, which means any content that exceeds its dimensions will be clipped and not visible. This is useful for creating clean layouts where excess content should not be displayed.



2. **Visible Overflow**:

   ```css

   .container-overflow-visible {

       width: 200px;

       height: 100px;

       border: 1px solid black;

       overflow: visible;

   }

   ```

   The `.container-overflow-visible` element has `overflow: visible`, allowing the content to overflow and be visible outside the container. This can be useful for certain design effects where overflow content is intentionally shown.



3. **Scrollable Overflow**:

   ```css

   .container-overflow-scroll {

       width: 200px;

       height: 100px;

       border: 1px solid black;

       overflow: scroll;

   }

   ```

   The `.container-overflow-scroll` element has `overflow: scroll`, which adds a scrollbar to the container when the content overflows. This ensures that all content can be accessed by the user, even if it exceeds the container's size.



4. **Auto Overflow**:

   ```css

   .container-overflow-auto {

       width: 200px;

       height: 100px;

       border: 1px solid black;

       overflow: auto;

   }

   ```

   The `.container-overflow-auto` element has `overflow: auto`, which behaves like `scroll` but only adds a scrollbar when necessary. This is a more flexible option compared to `scroll`, as it only adds a scrollbar when the content actually overflows.





- **Responsive Design**: Managing overflow is essential for responsive design. By using `overflow: auto` or `overflow: scroll`, you can ensure that content remains accessible on different screen sizes.

- **Modal Windows**: In modal windows, `overflow: hidden` can be used to prevent background content from scrolling when the modal is open.

- **Image Galleries**: For image galleries, `overflow: scroll` can be used to allow users to scroll through images that exceed the container's dimensions.





Mastering the `overflow` property in CSS is crucial for creating effective and visually appealing web designs. By choosing the appropriate overflow value, you can control how content is displayed and ensure a better user experience. Remember to adjust the dimensions and styles according to your specific needs, and you'll be well on your way to crafting beautiful, functional web pages.


