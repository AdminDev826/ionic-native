import { Component } from '@angular/core';
import { Flashlight } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'flashlight.html'
})
export class FlashlightPage {
	constructor() {

	}

	turnOnToOff() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				Flashlight.switchOn().then(()=> console.log('done'))

				setTimeout(() => {
					Flashlight.switchOff();
				}, 3000);
			}
		})
	}

	turnOn() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				Flashlight.switchOn().then(()=> console.log('done'))
			}
		})
	}

	turnOff() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				if (Flashlight.isSwitchedOn()) {
					Flashlight.switchOff().then(()=> console.log('done'));
				}
			}
		})
	}

	toggle() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Flashlight.available().then((isAvailable) => {
			if (isAvailable) {
				Flashlight.toggle().then(()=> console.log('done'));
			}
		})
	}

}
