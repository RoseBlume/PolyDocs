---
title: 'Video'
sidebar:
  order: 16
---

 

Just like with the audio element, the source is defined within the `<source>` element. In order to play video on most browsers, it is also required that the `type` attribute be defined. This attribute specifies the MIME type of the video file, which helps the browser determine if it can play the file.



The `<video>` element supports various attributes:

- `width` and `height`: Define the dimensions of the video player.

- `controls`: Adds video controls like play, pause, and volume.

- `autoplay`: Starts playing the video as soon as it is ready.

- `loop`: Makes the video start over again, every time it is finished.

- `muted`: Mutes the audio of the video by default.



Here is an example of a basic video element with multiple sources:



```html

<video width="320" height="240" controls>

  <source src="movie.mp4" type="video/mp4">

  <source src="movie.ogg" type="video/ogg">

  Your browser does not support the video tag.

</video>

```



In this example:

- The `width` and `height` attributes set the size of the video player.

- The `controls` attribute adds playback controls.

- Two `<source>` elements are provided, each with a different video format (`mp4` and `ogg`). This ensures better compatibility across different browsers.

- The text "Your browser does not support the video tag." is displayed if the browser does not support the `<video>` element.



By using multiple `<source>` elements, you can provide different video formats to ensure that your video plays on various browsers and devices.


