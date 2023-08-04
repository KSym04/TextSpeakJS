/*
 * TextSpeakJS by DopeThemes and KSym04r (Ken Villanueva)
 * https://github.com/dopethemes/textspeakjs
 *
 * Licensed under the GNU General Public License v3.0
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 * Contributors:
 * - DopeThemes
 * - KSym04r (Ken Villanueva)
 *
 * Copyright (c) 2023 DopeThemes, KSym04r
 */

/**
 * TextSpeakJS is a text-to-speech plugin that converts elements with a specific class to speech.
 *
 * @param {string} className - The class name of elements to convert to speech.
 * @returns {Object} An object containing the `speakText` function to trigger the speech.
 */
const TextSpeakJS = (className) => {
	/**
	 * Function to convert elements with the specified class to speech.
	 */
	const speakText = () => {
		// Selecting elements with the given class
		const elements = document.querySelectorAll(className);
		if (elements.length === 0) {
			alert(`No elements with the class "${className}" found.`);
			return;
		}

		// Fetching available voices
		const voices = window.speechSynthesis.getVoices();

		// Initializing array to hold utterances
		const utterances = [];

		elements.forEach((element, index) => {
			const text = element.textContent.trim();

			// Check if the text is non-empty
			if (text !== "") {
				const utterance = new SpeechSynthesisUtterance(text);

				// Assigning a voice by cycling through the available voices
				utterance.voice = voices[index % voices.length];

				utterances.push(utterance);
			}
		});

		// Check if any valid utterances were found
		if (utterances.length > 0) {
			utterances.forEach((utterance, index) => {
				// On end of speech, trigger the next utterance if available
				utterance.onend = () => {
					if (index + 1 < utterances.length) {
						window.speechSynthesis.speak(utterances[index + 1]);
					}
				};
			});

			// Start speaking the first utterance
			window.speechSynthesis.speak(utterances[0]);
		} else {
			alert(`No valid text found in elements with class "${className}".`);
		}
	};

	return {
		speakText,
	};
};
