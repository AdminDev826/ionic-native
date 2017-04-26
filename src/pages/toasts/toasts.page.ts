import { Component } from '@angular/core';
import { Toast } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'toasts.html'
})
export class ToastsPage {
	constructor() {
	}

	showToast() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Toast.show('standard toast', '5000', 'center').subscribe(
			toast => {
				console.log(toast);
			}
		);
	}

	showShortBottom() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Toast.show('short toast', 'short', 'bottom').subscribe(
			toast => {
				console.log(toast);
			}
		);
	}

	showLongTop() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Toast.show('long toast', 'long', 'top').subscribe(
			toast => {
				console.log(toast);
			}
		);
	}
}
