import { Component } from '@angular/core';
import { Brightness } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'brightness.html'
})
export class BrightnessPage {
	brightness: number;
	isCordova: boolean = true;

	constructor() {
		if (!isCordovaAvailable()) {
			this.isCordova = false;
		}
	}

	onChange(newValue) {
		Brightness.setBrightness(newValue / 100);
	}
}
