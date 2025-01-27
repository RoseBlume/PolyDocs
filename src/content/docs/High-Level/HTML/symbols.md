---
title: 'Symbols'
sidebar:
  order: 13
---

 

In the world of HTML, symbols hold a special place. These symbols, known as entities, are characters that have reserved meanings within the HTML language. They are represented using entity references, which always start with an ampersand (`&`) and end with a semicolon (`;`). These entities are essential for displaying characters that might otherwise be interpreted as HTML code.



Let's explore some of the most commonly used entities in HTML:



- `&lt;` stands for the less-than symbol (`<`).

- `&gt;` stands for the greater-than symbol (`>`).

- `&amp;` stands for the ampersand symbol (`&`).

- `&quot;` stands for the double quotation mark (`"`).

- `&apos;` stands for the single quotation mark (`'`).



These entities are incredibly useful when you need to display special characters in your HTML documents without them being mistaken for actual HTML code. This is particularly handy when you want to include HTML code examples within your web pages.



For instance, if you want to display the less-than symbol (`<`) in your HTML, you can use the entity reference `&lt;` like this: `&lt;p&gt;This is a paragraph.&lt;/p&gt;`. This will render as `<p>This is a paragraph.</p>` in the browser, allowing you to show the HTML tags without them being processed.



Beyond these basic entities, HTML supports a vast array of other entities for various symbols, including mathematical operators, currency symbols, and accented characters. Here are a few examples:



- `&copy;` stands for the copyright symbol (`©`).

- `&euro;` stands for the euro currency symbol (`€`).

- `&trade;` stands for the trademark symbol (`™`).

- `&alpha;` stands for the Greek letter alpha (`α`).

- `&beta;` stands for the Greek letter beta (`β`).



Using these entities ensures that your content is displayed correctly across different browsers and platforms. It also helps prevent issues with character encoding, as these entities are universally recognized.



A crucial point to remember is to always end entity references with a semicolon (`;`). This ensures proper rendering in all browsers. Omitting the semicolon can lead to unexpected results, as the browser may not correctly interpret the entity.



In summary, HTML entities are a powerful tool for including special characters in your web pages. By using entity references, you can ensure that your content is displayed as intended, without being misinterpreted as HTML code.
