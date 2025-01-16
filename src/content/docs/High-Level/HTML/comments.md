---
title: 'Comments'
sidebar:
  order: 2
---

 Comments in HTML are an essential tool for developers, allowing them to add explanatory notes or reminders within the code that are not displayed on the webpage. These comments are invaluable for documenting your code, providing context, or temporarily disabling certain sections without deleting them.



To add a comment in HTML, you use the `<!-- -->` syntax. Anything placed between these opening and closing comment tags will be ignored by the browser when rendering the webpage.



For example:



```html

<!-- This is a comment -->

<p>This is a paragraph.</p>

```



In this example, the comment `This is a comment` will not be displayed on the webpage, but the paragraph element `<p>This is a paragraph.</p>` will be rendered.



Comments can also span multiple lines:



```html

<!--

This is a multi-line

comment.

-->

<p>This is another paragraph.</p>

```





In this case, the entire block of text between the opening `<!--` and closing `-->` tags will be treated as a comment.





1. **Clarity and Relevance**: Ensure that comments are clear and relevant. They should explain the purpose of the code, especially if it is complex or not immediately understandable.

2. **Avoid Over-Commenting**: Do not overuse comments. Code should be self-explanatory where possible. Use comments to explain the "why" rather than the "what".

3. **Update Comments**: Keep comments up-to-date with code changes. Outdated comments can be misleading and confusing.

4. **Sensitive Information**: Avoid placing sensitive information in comments, as they can be viewed in the source code by anyone with access.





- **Documentation**: Provide explanations for complex logic or algorithms.

- **Debugging**: Temporarily disable code by commenting it out.

- **Collaboration**: Leave notes for other developers working on the same project.

- **Version Control**: Mark sections of code that are under development or need review.





Sometimes, you might want to disable a section of code without deleting it. This can be useful for testing or debugging purposes:



```html

<!--

<p>This paragraph is temporarily disabled.</p>

-->

<p>This paragraph is active.</p>

```



In this example, the first paragraph is commented out and will not be rendered by the browser, while the second paragraph will be displayed.





Comments are a powerful tool for making your HTML code more understandable and maintainable. By following best practices and using comments judiciously, you can improve the readability and quality of your code, making it easier for yourself and others to work with.



Remember that comments are not visible to users visiting your webpage, but they can be invaluable for developers who are reading or maintaining your code.
