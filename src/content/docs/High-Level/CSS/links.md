---
title: 'Links'
sidebar:
  order: 11
---

 Links in CSS allow you to style and customize the appearance of hyperlinks on your web page. By using various CSS properties, you can change the color, font, size, and other visual aspects of links to enhance the user experience and maintain a consistent design throughout your site.





Here's an example of how you can style links in CSS:



```css

/* Styling the default link color */

a {

    color: blue;

}



/* Styling the link hover effect */

a:hover {

    color: red;

}



/* Styling the visited link color */

a:visited {

    color: purple;

}



/* Styling the active link color */

a:active {

    color: green;

}

```



In the above example, the `a` selector targets all anchor elements (links) on the page. The `color` property is used to change the link color. The `:hover` pseudo-class is used to apply styles when the link is being hovered over. The `:visited` pseudo-class is used to style visited links, and the `:active` pseudo-class is used to style links when they are being clicked.





You can also apply other CSS properties like `text-decoration`, `font-size`, and `font-weight` to further customize the appearance of links. Here are some examples:



```css

/* Removing the underline from links */

a {

    text-decoration: none;

}



/* Adding an underline only on hover */

a:hover {

    text-decoration: underline;

}



/* Changing the font size and weight of links */

a {

    font-size: 16px;

    font-weight: bold;

}

```





CSS variables can be used to maintain consistency and make it easier to update styles across your site. Here's an example:



```css

:root {

    --link-color: blue;

    --link-hover-color: red;

    --link-visited-color: purple;



    --link-active-color: green;

}



a {

    color: var(--link-color);

}



a:hover {

    color: var(--link-hover-color);

}



a:visited {

    color: var(--link-visited-color);

}



a:active {

    color: var(--link-active-color);

}

```





To ensure that your links look good on all devices, you can use media queries to apply different styles based on the screen size:



```css

/* Default link styles */

a {

    color: blue;

    font-size: 16px;

}



/* Larger font size for larger screens */

@media (min-width: 768px) {

    a {

        font-size: 18px;

    }

}



/* Even larger font size for very large screens */

@media (min-width: 1200px) {

    a {

        font-size: 20px;

    }

}

```





Styling links with CSS is a powerful way to enhance the visual appeal and usability of your web pages. By using a combination of basic and advanced CSS properties, CSS variables, and responsive design techniques, you can create a consistent and engaging user experience. Remember to place your CSS code within a `<style>` tag in your HTML document or in an external CSS file linked to your HTML using the `<link>` tag.
