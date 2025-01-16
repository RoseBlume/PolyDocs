---
title: 'Iframes'
sidebar:
  order: 8
---

 Iframes in HTML are a powerful tool that allows you to embed another web page within your current page. This feature is particularly useful when you want to display content from an external source, such as a video, map, or social media feed, directly on your website.





To add an iframe to your web page, you use the `<iframe>` tag and specify the source URL using the `src` attribute. Here is a simple example:



```html

<iframe src="https://www.example.com"></iframe>

```



This code will embed the web page located at `https://www.example.com` into your current page.





You can customize the appearance and behavior of the iframe using various attributes:



- **Width and Height**: You can set the dimensions of the iframe using the `width` and `height` attributes. For example:



    ```html

    <iframe src="https://www.example.com" width="500" height="300"></iframe>

    ```



- **Border**: The `frameborder` attribute controls the presence of a border around the iframe. Setting it to `0` removes the border, while `1` adds it:



    ```html

    <iframe src="https://www.example.com" frameborder="0"></iframe>

    ```



- **Scrolling**: The `scrolling` attribute specifies whether the iframe should have scrollbars. You can set it to `yes`, `no`, or `auto`:



    ```html

    <iframe src="https://www.example.com" scrolling="no"></iframe>

    ```



- **Fullscreen**: The `allowfullscreen` attribute allows the iframe to be viewed in fullscreen mode:



    ```html

    <iframe src="https://www.example.com" allowfullscreen></iframe>

    ```





When embedding content from another source, it is crucial to ensure that the source URL is secure and trustworthy. This helps prevent security risks such as man-in-the-middle attacks. Using HTTPS is highly recommended for this purpose.





- **Sandboxing**: The `sandbox` attribute adds an extra layer of security by restricting the actions that the embedded content can perform. For example, you can disallow scripts or forms by specifying the appropriate restrictions:



    ```html

    <iframe src="https://www.example.com" sandbox="allow-scripts"></iframe>

    ```



- **Cross-Origin Resource Sharing (CORS)**: If the embedded content needs to interact with your page, ensure that the server hosting the iframe content has the proper CORS headers set.



- **Responsive Iframes**: To make iframes responsive, you can use CSS to adjust their size based on the viewport. For instance, the following CSS makes an iframe responsive:



    ```css

    .responsive-iframe {

        width: 100%;

        height: auto;

        aspect-ratio: 16 / 9;

    }

    ```



    And you can apply this class to your iframe like so:



    ```html

    <iframe src="https://www.example.com" class="responsive-iframe"></iframe>

    ```



By understanding and utilizing these features, you can effectively embed and manage iframes within your web pages, enhancing the user experience by seamlessly integrating external content.