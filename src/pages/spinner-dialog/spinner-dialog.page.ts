import { Component } from '@angular/core';
import { SpinnerDialog } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'spinner-dialog.html'
})
export class SpinnerDialogPage {

	constructor() {

	}

	showSpinner() {
		if (!isCordovaAvailable()) {
			return false;
		}
		SpinnerDialog.show('Example', 'Loading..');
		setTimeout(() => {
			SpinnerDialog.hide();
		}, 5000);
	}
}
