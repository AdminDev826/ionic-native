import { Component } from '@angular/core';
import { Shake } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'shake.html'
})
export class ShakePage {
	shake: boolean = false;

	constructor() {
		if (isCordovaAvailable()) {
			this.shake = true;
			Shake.startWatch(60).subscribe(() => {
				alert('shaking')
			});
		}
	}
}
