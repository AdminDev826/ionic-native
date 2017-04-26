import { Component } from '@angular/core';
import { TextToSpeech } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'text-to-speech.html'
})
export class TextToSpeechPage {
	text: string;

	constructor() {
		this.text = "Hello Ionic 2"
	}

	speak() {
		if (!isCordovaAvailable()) {
			return false;
		}
		TextToSpeech.speak(this.text)
			.then(() => console.log('Success'));
	}
}
