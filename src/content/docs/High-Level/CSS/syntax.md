---
title: 'Syntax'
sidebar:
  order: 1
---

 CSS (Cascading Style Sheets) is a powerful stylesheet language that plays a crucial role in web development. It is used to describe the presentation of a document written in HTML or XML, dictating how elements should be rendered on various media such as screens, paper, or even in speech.





At the heart of CSS lies its basic syntax, which consists of a selector and a declaration block:



```css

selector {

    property: value;

}

```



- **Selector**: This part of the rule targets the HTML element(s) you wish to style.

- **Declaration Block**: Enclosed in curly braces, this block contains one or more declarations separated by semicolons. Each declaration pairs a CSS property with a value, separated by a colon.





Consider the following example:



```css

h1 {

    color: blue;

    font-size: 20px;

}

```



In this snippet, `h1` is the selector, and `color: blue;` and `font-size: 20px;` are the declarations that style the `h1` element.





Selectors are fundamental in CSS as they determine which HTML elements are targeted for styling. There are several types of selectors:



- **Element Selector**: Targets elements by their tag name.

    ```css

    p {

        color: red;

    }

    ```



- **Class Selector**: Targets elements by their class attribute.

    ```css

    .classname {

        color: green;

    }

    ```



- **ID Selector**: Targets elements by their id attribute.

    ```css

        color: blue;

    }

    ```



- **Attribute Selector**: Targets elements based on an attribute or attribute value.

    ```css

    [type="text"] {

        border: 1px solid black;

    }

    ```



- **Pseudo-class Selector**: Targets elements based on their state.

    ```css

    a:hover {

        color: orange;

    }

    ```



- **Pseudo-element Selector**: Targets parts of elements.

    ```css

    p::first-line {

        font-weight: bold;

    }

    ```





CSS properties are used to apply styles to elements, and each property can take a range of values. Here are some common properties:



- **color**: Sets the color of the text.

    ```css

    color: red;

    ```



- **background-color**: Sets the background color of an element.

    ```css

    background-color: yellow;

    ```



- **font-size**: Sets the size of the font.

    ```css

    font-size: 16px;

    ```



- **margin**: Sets the space outside an element.

    ```css

    margin: 10px;

    ```



- **padding**: Sets the space inside an element.

    ```css

    padding: 10px;

    ```



- **border**: Sets the border around an element.

    ```css

    border: 1px solid black;

    ```





The "Cascading" in CSS stands for the way styles cascade down from multiple sources, with the order and specificity of the rules determining which styles are applied.



- **Cascading**: When multiple rules apply to the same element, the rule that appears last in the CSS file takes precedence.

- **Specificity**: This concept determines which rule is applied by assigning weights to different types of selectors. ID selectors have higher specificity than class selectors, which in turn have higher specificity than element selectors.





```css

p {

    color: red;

}



    color: blue;

}



<p id="unique">This text will be blue.</p>

```



In this example, although the `p` selector sets the color to red, the `#unique` ID selector overrides it and sets the color to blue due to its higher specificity.





CSS properties can be inherited from parent elements to child elements. For instance, if you set the `color` property on a parent element, its child elements will inherit that color unless they have their own `color` property set.





```css

div {

    color: green;

}



<div>

    This text will be green.

    <p>This text will also be green.</p>

</div>

```



In this example, both the `div` and the `p` elements will have green text because the `color` property is inherited.





Mastering CSS syntax is essential for creating visually appealing web pages. By understanding selectors, properties, values, cascading, specificity, and inheritance, you can precisely control the presentation of your HTML documents, ensuring a polished and professional look.