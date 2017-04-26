import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'camera.html'
})
export class CameraPage {
	picture: any;

	constructor() {
	}


	getPicture() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Camera.getPicture().then((imageData) => {
			this.picture = imageData;
		}, (err) => {
			console.log(err);
		});
	}
}
