---
title: 'Links'
sidebar:
  order: 7
---

 Links in HTML are created using the `<a>` tag, which stands for "anchor." This tag is essential for creating hyperlinks that connect different web pages or resources. To specify the destination of the link, the `href` attribute is used. For instance, if you want to create a link to the Google homepage, you would write:



```html

<a href="https://google.com">Google's Homepage</a>

```



The `target` attribute is another important aspect of links. It controls where the linked document will open. Most browsers support the `_blank` and `_self` targets. The `_blank` target opens the link in a new tab, providing a way for users to keep the current page open while exploring the new one. On the other hand, the `_self` target opens the link in the same tab, replacing the current page.



There are two main types of links in HTML: absolute links and relative links. Understanding the difference between these two is crucial for effective web development.





An absolute link contains the full URL, including the protocol (e.g., `http`, `https`). This type of link is used to link to external websites. Absolute links are straightforward and always point to the same location, regardless of where they are used.



Example:

```html

<a href="https://google.com">This is an absolute link</a>

```





A relative link, in contrast, does not contain the full URL. Instead, it provides a path relative to the current page's location. This type of link is particularly useful for linking to other pages within the same website. Relative links make it easier to manage internal links, especially when moving files around within the site structure.



Example:

```html

<a href="otherpages/otherpage.html">This is a relative link</a>

```





The `target` attribute specifies where to open the linked document. The most common values are `_blank` and `_self`.



- `_blank`: Opens the link in a new tab.

- `_self`: Opens the link in the same tab.



Examples:

```html

<a href="https://google.com" target="_blank">This page opens in another tab</a>

<a href="https://google.com" target="_self">This page opens in the current tab</a>

```



By mastering these concepts, you can create and manage links in your HTML documents effectively. Whether you are linking to external resources or navigating within your own site, understanding how to use absolute and relative links, as well as the `target` attribute, will enhance your web development skills.
