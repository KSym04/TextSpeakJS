# TextSpeakJS

TextSpeakJS is a text-to-speech plugin that converts HTML elements with a specific class into speech, this lightweight and easy-to-use library offers a simple way to implement text-to-speech functionality on web pages.

## Features

- Convert text inside HTML elements with a specific class to speech.
- Cycles through available voices.
- Provides a simple API with a `speakText` function to trigger speech.

## Installation

Include the `text-speak.js` file in your HTML:

```html
<script src="path/to/text-speak.js"></script>
```

## Usage

1. Initialize the plugin by passing the class name of the elements you want to convert to speech:

```javascript
const tts = TextSpeakJS(".speak");
```

2. Call the `speakText` function to start the speech:

```javascript
tts.speakText();
```

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](https://www.dopethemes.com/gplv3/) file for details.

## Contributor

- DopeThemes

## Support and Contribution

Feel free to open issues or submit pull requests. Your contributions are welcome!

For more details, visit the [GitHub repository](https://github.com/KSym04/TextSpeakJS).
