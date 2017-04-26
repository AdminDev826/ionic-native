import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'barcode-scanner.html'
})
export class BarcodeScannerPage {

	barcode: string;
	valueForEncoding: any;
	encodedResult: any;
	platform: Platform;

	constructor(platform: Platform) {
		this.platform = platform;
		this.barcode = '[empty]';
		this.valueForEncoding = 'http://appseed.io';
	}

	scan() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let options = {
			'preferFrontCamera': false,
			'prompt': 'Place a barcode inside the scan area',
			'orientation': 'portrait'
		};
		BarcodeScanner.scan(options).then((result) => {
			this.barcode = result.text;
		}, (err) => {
			alert(err);
		});
	}

	encode() {
		if (!isCordovaAvailable()) {
			return false;
		}

		if (this.platform.is('android')) {
			alert('Not supported on Android');
			return;
		}
		
		BarcodeScanner.encode('TEXT_TYPE', this.valueForEncoding).then((result) => {
			this.encodedResult = result.file;
		}, (err) => {
			alert(err);
		});
	}
}
