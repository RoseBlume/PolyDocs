---
title: 'Images'
sidebar:
  order: 9
---

 Images in HTML are embedded using the `<img>` tag. Unlike most other elements, the `<img>` tag is self-closing, meaning it does not have a closing tag. This is because it does not contain any content within it, only attributes that define the image source and other properties.





The `<img>` tag comes with several attributes that you can use to specify the image source and other properties:



- **`src`**: This attribute specifies the path to the image you want to display. It can be an absolute URL (link to an online image) or a relative URL (link to an image within your project directory).

- **`alt`**: This attribute provides alternative text for the image if it cannot be displayed. It is important for accessibility and SEO.

- **`width` and `height`**: These attributes define the dimensions of the image.







A relative link points to an image located within the same directory or a subdirectory of the HTML file. This is useful for images that are part of your project.



```html

<h1>This is a relative link to an image located within the same directory as the HTML file.</h1>

<img src="America.jpg" alt="Image of America" width="500" height="300" />

```





An absolute link points to an image hosted on an external server. This is useful for images that are not part of your project.



```html

<h1>This is an absolute link to an online image</h1>

<img src="https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg" alt="Flag of Canada" width="500" height="300" />

```





When using images in your HTML documents, consider the following best practices:



- **Always include the `alt` attribute**: This improves accessibility for users who rely on screen readers and also benefits your site's SEO.

- **Use relative links for project images**: This ensures that images are included when the project is moved or shared.

- **Use absolute links for external images**: This can help reduce the size of your project by not including large image files.

- **Specify the `width` and `height` attributes**: This controls the display size of the image and can improve page load times by allowing the browser to allocate space for the image before it loads.



By following these guidelines, you can effectively use images in your HTML documents to enhance the visual appeal and user experience of your web pages.
