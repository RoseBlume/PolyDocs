---
title: 'Combinators'
sidebar:
  order: 18
---

 Combinators in CSS are selectors that allow you to target specific elements based on their relationship with other elements. There are four types of combinators in CSS: 



1. Descendant combinator (space): It selects an element that is a descendant of another element. For example, `div p` selects all `<p>` elements that are descendants of `<div>` elements.



2. Child combinator (>): It selects an element that is a direct child of another element. For example, `ul > li` selects all `<li>` elements that are direct children of `<ul>` elements.



3. Adjacent sibling combinator (+): It selects an element that is the next sibling of another element. For example, `h1 + p` selects the `<p>` element that is the next sibling of an `<h1>` element.



4. General sibling combinator (~): It selects all elements that are siblings of another element. For example, `h2 ~ p` selects all `<p>` elements that are siblings of an `<h2>` element.



Here are some examples:



```css

/* Descendant combinator */

div p {

    color: red;

}



/* Child combinator */

ul > li {

    font-weight: bold;

}



/* Adjacent sibling combinator */

h1 + p {

    margin-top: 10px;

}



/* General sibling combinator */

h2 ~ p {

    font-style: italic;

}

```



These combinators provide powerful ways to target specific elements in your CSS selectors based on their relationship with other elements.