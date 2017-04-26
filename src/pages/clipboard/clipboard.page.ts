import { Component } from '@angular/core';
import { Clipboard } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'clipboard.html'
})
export class ClipboardPage {
	copyText: string;
	pasteText: string;

	constructor() {
	}

	copy() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Clipboard.copy(this.copyText);
	}

	paste() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Clipboard.paste().then(
			(resolve: string) => this.pasteText = resolve,
			(reject: string) => alert('Error: ' + reject)
		);
	}
}
