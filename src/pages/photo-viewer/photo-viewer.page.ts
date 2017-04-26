import { Component } from '@angular/core';
import { PhotoViewer } from 'ionic-native';
import { Camera } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'photo-viewer.html'
})
export class PhotoViewerPage {
	image: any;
	imageTitle: string;

	constructor() {
	}

	showImage() {
		if (!isCordovaAvailable()) {
			return false;
		}
		PhotoViewer.show(this.image, this.imageTitle, { share: true });
	}

	getPicture() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Camera.getPicture().then((imageData) => {
			this.image = imageData;
		}, (err) => {
			console.log(err);
		});
	}
}
