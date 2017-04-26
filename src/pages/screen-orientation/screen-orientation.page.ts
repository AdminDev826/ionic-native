import { Component } from '@angular/core';
import { ScreenOrientation } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'screen-orientation.html'
})
export class ScreenOrientationPage {
	orientation: string;

	constructor() {
	}

	setOrientation() {
		if (!isCordovaAvailable()) {
			return false;
		}
		ScreenOrientation.lockOrientation(this.orientation);
	}

	unlockOrientation() {
		if (!isCordovaAvailable()) {
			return false;
		}
		ScreenOrientation.unlockOrientation();
	}
}
