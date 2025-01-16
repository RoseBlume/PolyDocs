---
title: 'Transitions'
sidebar:
  order: 26
---

 Transitions in CSS allow you to smoothly animate changes in CSS properties over a specified duration. They provide a way to add visual effects and enhance user experience on your website or application.





To create a transition, you need to specify the CSS property you want to animate and the duration of the transition. For example, let's say you want to animate the background color of an element when the user hovers over it:



```css

.element {

    background-color: blue;

    transition: background-color 0.3s;

}



.element:hover {

    background-color: red;

}

```



In this example, when the user hovers over the element, the background color will transition from blue to red over a duration of 0.3 seconds.





You can also specify additional properties such as timing function and delay to further customize the transition. The timing function determines the speed curve of the transition, allowing you to create effects like ease-in, ease-out, or linear. The delay property allows you to introduce a delay before the transition starts.



```css

.element {

    background-color: blue;

    transition: background-color 0.3s ease-in-out 0.2s;

}



.element:hover {

    background-color: red;

}

```



In this updated example, the transition will start with a delay of 0.2 seconds and have an ease-in-out timing function, creating a smoother effect.





The timing function can be one of the following values:



- `linear`: The transition has a constant speed.

- `ease`: The transition starts slowly, accelerates in the middle, and slows down at the end.

- `ease-in`: The transition starts slowly and accelerates towards the end.

- `ease-out`: The transition starts quickly and slows down towards the end.

- `ease-in-out`: The transition starts slowly, accelerates in the middle, and slows down at the end.

- `cubic-bezier(n,n,n,n)`: A custom timing function defined by four values.





The delay property allows you to specify a delay before the transition starts. This can be useful for creating more complex animations where different elements transition at different times.



```css

.element {

    background-color: blue;

    transition: background-color 0.3s ease-in-out 0.2s;

}



.element:hover {

    background-color: red;

}

```



In this example, the transition will start 0.2 seconds after the hover event is triggered.





You can also transition multiple properties at once by separating them with commas:



```css

.element {

    background-color: blue;

    width: 100px;

    transition: background-color 0.3s, width 0.5s;

}



.element:hover {

    background-color: red;

    width: 200px;

}

```



In this example, both the background color and width of the element will transition when the user hovers over it. The background color will transition over 0.3 seconds, while the width will transition over 0.5 seconds.





The transition property is a shorthand for four other properties:



- `transition-property`: Specifies the name of the CSS property to which the transition is applied.

- `transition-duration`: Specifies the duration of the transition.

- `transition-timing-function`: Specifies the timing function of the transition.

- `transition-delay`: Specifies the delay before the transition starts.



You can use these properties individually or combine them using the shorthand syntax:



```css

.element {

    background-color: blue;

    transition: background-color 0.3s ease-in-out 0.2s;

}

```







```css

.element {

    opacity: 1;

    transition: opacity 0.5s ease-in-out;

}



.element:hover {

    opacity: 0.5;

}

```



In this example, the opacity of the element will transition from fully opaque to half-transparent over 0.5 seconds when the user hovers over it.





```css

.element {

    transform: scale(1);

    transition: transform 0.3s ease-in-out;

}



.element:hover {

    transform: scale(1.5);

}

```



In this example, the element will scale up by 1.5 times its original size over 0.3 seconds when the user hovers over it.





Transitions can be combined with media queries to create responsive animations that adapt to different screen sizes:



```css

@media (max-width: 600px) {

    .element {

        background-color: blue;

        transition: background-color 0.3s ease-in-out;

    }



    .element:hover {

        background-color: green;

    }

}



@media (min-width: 601px) {

    .element {

        background-color: blue;

        transition: background-color 0.3s ease-in-out;

    }



    .element:hover {

        background-color: red;

    }

}

```



In this example, the background color of the element will transition to green on smaller screens and to red on larger screens when the user hovers over it.





Transitions are a powerful tool in CSS that can greatly enhance the user experience of your website or application. By experimenting with different properties, durations, timing functions, and delays, you can create a wide range of visual effects that make your user interface more dynamic and engaging. Remember to combine transitions with other CSS features like pseudo-classes and media queries to create complex and responsive animations.
