---
title: 'Audio'
sidebar:
  order: 15
---

 

The `<audio>` element is used to embed sound content in documents. It provides a standard way to embed audio files with various controls and attributes to enhance the user experience.





- `controls`: This attribute adds audio controls, such as play, pause, and volume, to the audio player.

- `autoplay`: When present, the audio will automatically start playing as soon as it is ready.

- `loop`: This attribute causes the audio to start over again, every time it is finished.

- `muted`: This attribute mutes the audio by default.

- `preload`: This attribute specifies if and how the author thinks the audio should be loaded when the page loads. It can have the following values:

  - `none`: The audio should not be loaded when the page loads.

  - `metadata`: Only metadata should be loaded when the page loads.

  - `auto`: The audio should be loaded entirely when the page loads.





The `<source>` element is used to specify multiple media resources for the `<audio>` element. It allows the browser to choose the best format that it supports. The `src` attribute specifies the path to the audio file, and the `type` attribute specifies the MIME type of the audio file.





```html

<audio controls autoplay>

  <source src="dog.ogg" type="audio/ogg">

  <source src="dog.mp3" type="audio/mpeg">

  Your browser does not support the audio element.

</audio>

```

In this example, the `<audio>` element includes the `controls` and `autoplay` attributes. Two `<source>` elements are nested inside the `<audio>` element, providing the audio in both OGG and MP3 formats. The text "Your browser does not support the audio element." is displayed if the browser does not support the `<audio>` element.

<audio controls autoplay>

  <source src="dog.ogg" type="audio/ogg">

  <source src="dog.mp3" type="audio/mpeg">

  Your browser does not support the audio element.

</audio>





The `<audio>` element is supported by all modern browsers, but not all browsers support the same audio formats. It is a good practice to provide multiple formats to ensure compatibility across different browsers.





To make audio content accessible, consider providing text transcripts or captions for users who are deaf or hard of hearing. Additionally, ensure that the audio controls are keyboard accessible for users who rely on keyboard navigation.





The `<audio>` element is a powerful tool for embedding audio content in web pages. By using various attributes and providing multiple audio formats, you can create a flexible and accessible audio experience for users.
